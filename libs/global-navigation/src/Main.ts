import { component } from "./Components/Component";
import { productEntryCTA } from "./Components/CTA/Render";
import { renderGhostTabs} from "./Components/MegaMenu/Render";
import { IrrecoverableError, RecoverableError } from "./Error/Error";
import { GlobalNavigationData, parseNavigation } from "./Parse/Parse";
import { initClickListeners } from "./PostRendering/ClickListeners";
import { initKeyboardNav } from "./PostRendering/Keyboard";
import { loadUnav } from "./PostRendering/Unav/Unav";
import { getInitialHTML } from "./PreRendering/FetchAssets";
import { renderListItems, setMiloConfig, MiloConfig } from "./Utils/Utils";
import './styles/styles.css';
import { tabs } from "./Components/Tab/Render";
import { combineWithFederalPlaceholders, setPlaceholders } from "./Utils/Placeholders";
import { lanaLog } from "./Utils/Log";

// TODO implement Analytcs

type GlobalNavigation = {
  closeEverything: () => void;
  reloadUnav: () => void;
  getGnavTopPosition: () => number;
  setGnavTopPosition: (_: number) => void;
  errors: Set<RecoverableError>;
};

export type Input = {
  gnavSource: URL;
  promoBarSource: URL | null;
  gnavTop?: number;
  isLocalNav: boolean;
  mountpoint: HTMLElement;
  unavEnabled: boolean;
  placeholders: Promise<Map<string, string>>;
  miloConfig?: MiloConfig;
  loadBlock: (element: Element | null) => Promise<void>;
  getStageDomainMap: (domainmap: unknown[], env: string) =>
    { [key: string]: string }
  // MEP: {
  //   commands: unknown;
  //   handleCommands: (_: unknown) => unknown;
  // }
};

export const main = async (
  input: Input
): Promise<GlobalNavigation | IrrecoverableError> => {
  const { gnavSource, mountpoint, unavEnabled, miloConfig, loadBlock } = input;

  if (!(gnavSource instanceof URL)) {
    lanaLog(`gnavSource is invalid: ${gnavSource}`);
    throw new IrrecoverableError("gnavSource needs to be a URL object");
  }
  // Initialize MiloConfig with validation
  try {
    setMiloConfig(miloConfig);
  } catch (error) {
    lanaLog(`Failed to initialize MiloConfig: ${error}`);
    throw new IrrecoverableError(`Failed to initialize MiloConfig: ${error}`);
  }
  // We kick off the request for the federal placeholders in parallel
  setPlaceholders(combineWithFederalPlaceholders(input));

  const initial = await getInitialHTML(input)
  if (initial instanceof IrrecoverableError) {
    lanaLog(initial.message);
    throw initial;
  }
  const { mainNav, promoBar } = initial;
  if (mainNav instanceof IrrecoverableError) {
    lanaLog(mainNav.message);
    throw mainNav;
  }

  await processPromoBar(promoBar, loadBlock);

  const gnavData = parseNavigation(mainNav, unavEnabled);
  if (gnavData instanceof IrrecoverableError) {
    lanaLog(gnavData.message);
    throw gnavData;
  }
  
  await renderGnav(gnavData)(mountpoint);

  return postRenderingTasks(input);
};


export const renderGnav = (
  data: GlobalNavigationData
) => async (
mountpoint: HTMLElement
): Promise<HTMLElement> => {
  const navHTML = renderGnavString(data);
  mountpoint.innerHTML = navHTML;
  mountpoint.classList.add('site-pivot');
  const megaMenus = [
    ...mountpoint.querySelectorAll('.mega-menu ~ .feds-popup > ul')
  ]
  megaMenus.forEach(mm => {
    mm.innerHTML = renderGhostTabs(mm.textContent?.trim() ?? '');
  });
  const mmPromises = data.components
    .filter(com => com.type === "MegaMenu")
    .map(com => com.tabs);
  const _errors_ = await Promise.all(mmPromises.map(async (mmPromise, idx) => {
    const [parsedTabs, errors] = await mmPromise;
    const brand = mountpoint.querySelector('.feds-brand-container')?.outerHTML ?? '';
    const title = megaMenus[idx].parentElement?.previousElementSibling?.textContent ?? '';
    const breadcrumbs = mountpoint.querySelector('.breadcrumbs')?.outerHTML ?? '';
    const fedsPopupId = megaMenus[idx].querySelector('.feds-popup')?.id ?? '';
    const isLocalNav = megaMenus.length === 1;
    const renderedTabs = tabs(
      brand,
      title,
      breadcrumbs,
      fedsPopupId,
      isLocalNav
    )(parsedTabs);
    megaMenus[idx].innerHTML = renderedTabs;
    return errors;
  }).flat());
  return mountpoint;
};

export const renderGnavString = ({
  components,
  productCTA,
  unavEnabled,
}: GlobalNavigationData
): string => `
<nav>
  <ul>
    ${((): string => {
      const brandComponent = components.find((c) =>
        c.type === "Brand"
      ) ?? null;
      const menuComponents = components.filter((c) => c.type !== "Brand");
      const toggleButton = `
        <button
          class="feds-nav-toggle"
          type="button"
          aria-label="Navigation menu"
          aria-expanded="false"
          aria-controls="feds-menu-wrapper"
          popovertarget="feds-menu-wrapper"
        >
        </button>
      `.trim();

      const brandHTML = brandComponent ? component(brandComponent) : "";
      const menuItemsHTML = renderListItems(menuComponents, component);

      return `
        <li class="feds-brand-wrapper">
          ${toggleButton}
          ${brandHTML}
        </li>
        <li
          id="feds-menu-wrapper"
          popover
          class="feds-menu-wrapper"
          aria-hidden="true"
        >
          <ul class="feds-gnav-items">
            ${menuItemsHTML}
          </ul>
        </li>
      `.trim();
    })()}
  </ul>
  ${productCTA === null ? '' : productEntryCTA(productCTA)}
  ${unavEnabled ? '<div class="feds-utilities"></div>' : ''}
</nav>
`;


export const postRenderingTasks = async (
  input: Input,
): Promise<GlobalNavigation | IrrecoverableError> => {
  const errors = new Set<RecoverableError>();
  const unav = await loadUnav(input.mountpoint);
  if (unav instanceof RecoverableError) {
    errors.add(unav);
    lanaLog(unav.message);
  }
  else 
    unav.errors.forEach((error: RecoverableError) => errors.add(error));
  initClickListeners(input.mountpoint);
  initKeyboardNav(input.mountpoint);
  
  const reloadUnav
    = unav instanceof RecoverableError
    ? (): void => {}
    : unav.reloadUnav;

  return {
    closeEverything,
    reloadUnav,
    errors,
    setGnavTopPosition: (_): void => {},
    getGnavTopPosition: (): number => 0,
  };
};

const processPromoBar = async (
  promoBar: HTMLElement | IrrecoverableError,
  loadBlock: (element: Element | null) => Promise<void>
): Promise<void> => {
  if (promoBar instanceof IrrecoverableError) {
    lanaLog(promoBar.message);
    throw promoBar;
  }

  const notificationBlock = promoBar.querySelector('.notification');

  try {
    await loadBlock(notificationBlock);
  } catch (error) {
    const errorMsg = `Failed to load notification block: ${error}`;
    lanaLog(errorMsg);
    throw new IrrecoverableError(errorMsg);
  }

  if (notificationBlock) {
    const promoWrapper = document.querySelector('.feds-promo-aside-wrapper');
    promoWrapper?.appendChild(notificationBlock);
  }
};

const closeEverything = (): void => {
};

