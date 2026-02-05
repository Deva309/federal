import { IrrecoverableError } from "../Error/Error";
import { Input } from "../Main";
import { fetchAndProcessPlainHTML } from "../Utils/Utils";

type Initial = {
  mainNav: HTMLElement;
  promoBar: HTMLElement | IrrecoverableError;
};

export const getInitialHTML = async ({
  gnavSource,
  promoBarSource,
}: Input): Promise<Initial | IrrecoverableError> => {
  const mainNav = await fetchAndProcessPlainHTML(gnavSource);
  if (mainNav instanceof IrrecoverableError)
    return mainNav;
  const promoBar = await fetchAndProcessPlainHTML(promoBarSource);
  return {
    mainNav,
    promoBar,
  };
};

