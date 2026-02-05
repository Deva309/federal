var be=async e=>{let{placeholders:n}=e,{locale:t}=y(),o=`${F()}${t.prefix}/federal/globalnav/placeholders.json`,[a,i]=await Promise.all([n,pn(o)]);return new Map([...i,...a])},pn=async e=>{try{let n=await fetch(e);if(!n.ok)throw new u(`Federal placeholders not found at ${e}`);let t=un(await n.json());if(t instanceof u)throw t;return new Map(t.data.map(({key:r,value:o})=>[r,o]))}catch(n){if(n instanceof u)console.error(n.message);else{let t=new u(n.message);console.error(t.message)}return v(`Failed to fetch placeholders from ${e}`),new Map([])}},un=e=>{try{let{data:n}=e;if(!n.every(({key:r,value:o})=>typeof r=="string"&&typeof o=="string"))throw new Error("data is not valid");return e}catch(n){return new u(n.message)}};function Le(e,n){let t=/{{(.*?)}}|%7B%7B(.*?)%7D%7D/g;return t.test(e)?e.replace(t,(o,a,i)=>{let p=a??i??"";return n.get(p)??p}):e}var[Ce,we]=(()=>{let e;return[n=>{e||(e=n)},()=>{if(!e)throw new Error("Placeholders not initialized. Call setPlaceholders() first.");return e}]})();var _=window.matchMedia("(min-width: 900px)"),oe={brand:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 64.57 35"><defs><style>.cls-1{fill: #eb1000;}</style></defs><path class="cls-1" d="M6.27,10.22h4.39l6.2,14.94h-4.64l-3.92-9.92-2.59,6.51h3.08l1.23,3.41H0l6.27-14.94ZM22.03,13.32c.45,0,.94.04,1.43.16v-3.7h3.88v14.72c-.89.4-2.81.89-4.73.89-3.48,0-6.47-1.98-6.47-5.93s2.88-6.13,5.89-6.13ZM22.52,22.19c.36,0,.65-.07.94-.16v-5.42c-.29-.11-.58-.16-.96-.16-1.27,0-2.45.94-2.45,2.92s1.2,2.81,2.47,2.81ZM34.25,13.32c3.23,0,5.98,2.18,5.98,6.02s-2.74,6.02-5.98,6.02-6-2.18-6-6.02,2.72-6.02,6-6.02ZM34.25,22.13c1.11,0,2.14-.89,2.14-2.79s-1.03-2.79-2.14-2.79-2.12.89-2.12,2.79.96,2.79,2.12,2.79ZM41.16,9.78h3.9v3.7c.47-.09.96-.16,1.45-.16,3.03,0,5.84,1.98,5.84,5.86,0,4.1-2.99,6.18-6.53,6.18-1.52,0-3.46-.31-4.66-.87v-14.72ZM45.91,22.17c1.34,0,2.56-.96,2.56-2.94,0-1.85-1.2-2.72-2.5-2.72-.36,0-.65.04-.91.16v5.35c.22.09.51.16.85.16ZM58.97,13.32c2.92,0,5.6,1.87,5.6,5.64,0,.51-.02,1-.09,1.49h-7.27c.4,1.32,1.56,1.94,3.01,1.94,1.18,0,2.27-.29,3.5-.82v2.97c-1.14.58-2.5.82-3.9.82-3.7,0-6.58-2.23-6.58-6.02s2.61-6.02,5.73-6.02ZM60.93,18.02c-.2-1.27-1.05-1.78-1.92-1.78s-1.58.54-1.87,1.78h3.79Z"/></svg>',company:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none"><path d="M14.2353 21.6209L12.4925 16.7699H8.11657L11.7945 7.51237L17.3741 21.6209H24L15.1548 0.379395H8.90929L0 21.6209H14.2353Z" fill="#EB1000"/></svg>',search:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M14 2A8 8 0 0 0 7.4 14.5L2.4 19.4a1.5 1.5 0 0 0 2.1 2.1L9.5 16.6A8 8 0 1 0 14 2Zm0 14.1A6.1 6.1 0 1 1 20.1 10 6.1 6.1 0 0 1 14 16.1Z"></path></svg>',home:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 18 18" width="25"><path fill="#6E6E6E" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z"/></svg>'},xe=e=>n=>{let t=[],r=[];for(let o=0;o<n.length;o++){if(e(n[o])){t.push(r),r=[];continue}r.push(n[o])}return t.push(r),t};var ie=e=>n=>{if(n.length===0)return n;let[t,...r]=n;return e(t)?[t].concat(ie(e)(r)):[]};var I=e=>{let n=[],t=e.nextElementSibling??null;for(;t!==null;)n.push(t),t=t.nextElementSibling??null;return n},x=e=>({eval:e,or:n=>x(t=>{try{return e(t)}catch{return n(t)}})}),b=(e,n)=>e.reduce(([t,r],o)=>{try{let[a,i]=n(o);return[[...t,a],[...r,...i]]}catch(a){return a instanceof s?[t,[a,...r]]:[t,r]}},[[],[]]),Ee=({mobileEventListeners:e,desktopEventListeners:n})=>t=>{let r;_.matches?r=n(t):r=e(t),_.addEventListener("change",()=>{r?.(),r=_.matches?n(t):e(t);let o=t.querySelector("#feds-menu-wrapper");o?.matches(":popover-open")===!0&&o.hidePopover?.()})},R=async e=>{try{if(e===null)return new s("URL is null");let n=ke(`${e.origin}${e.pathname.replace(/(\.html$|$)/,".plain.html")}${e.hash}`),t=await fetch(n);if(!t.ok)return v(`Request for ${n} failed`),new s(`Request for ${n} failed`);let r=await t.text(),o=await we(),a=Le(r,o),{body:i}=new DOMParser().parseFromString(a,"text/html");return i}catch(n){return new s(n?.message)}},M,F=()=>{if(M)return M;let e=["https://www.adobe.com","https://business.adobe.com","https://blog.adobe.com","https://milo.adobe.com","https://news.adobe.com","graybox.adobe.com"];if(M)return M;let n=window.location.origin;M=e.some(o=>{let a=n.replace(".stage","");return o.startsWith("https://")?a===o:a.endsWith(o)})?n:"https://www.adobe.com";let r=window.location.hostname.includes(".aem.")?"aem":"hlx";return(n.includes("localhost")||n.includes(`.${r}.`))&&(M=`https://main--federal--adobecom.aem.${n.endsWith(".live")?"live":"page"}`),M},ke=(e="")=>{if(typeof e!="string"||!e.includes("/federal/"))return e;if(e.startsWith("/"))return`${F()}${e}`;try{let{pathname:n,search:t,hash:r}=new URL(e);return`${F()}${n}${t}${r}`}catch(n){let t=n instanceof Error?n.message:String(n);console.warn(`getFederatedUrl errored parsing the URL: ${e}: ${t}`)}return e},Se=async e=>{let n=async(t,r)=>{if(t instanceof s)return t;try{let a=[...t.querySelectorAll('a[href*="#_inline"]')].map(async i=>{try{if(r.has(i.href))return;let p=ke(i.href),c=new URL(p),l=await R(c);if(r.add(i.href),l instanceof s)throw l;await n(l,r);let d=i.closest("div");d?d.replaceWith(...l.children):i.replaceWith(...l.children);return}catch{return}},[]);return await Promise.all(a),t}catch(o){return new s(JSON.stringify(o))}};return n(e,new Set)},E=(e,n)=>e.map(t=>`<li>${n(t)}</li>`).join(""),P=e=>e.toLowerCase().trim().replace(/[^a-z0-9]/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"id-$1"),Te=()=>!0;function dn(e,{id:n,as:t,callback:r,crossorigin:o,rel:a,fetchpriority:i}={rel:"stylesheet"}){let p=document.head.querySelector(`link[href="${e}"]`);if(p)return r?.("noop"),p;let c=document.createElement("link");return c.setAttribute("rel",a),n!==void 0&&c.setAttribute("id",n),t!==void 0&&c.setAttribute("as",t),o!==void 0&&c.setAttribute("crossorigin",o),i!==void 0&&c.setAttribute("fetchpriority",i),c.setAttribute("href",e),r&&(c.onload=l=>r(l.type),c.onerror=l=>r(typeof l=="string"?"error":l.type)),document.head.appendChild(c),c}function mn(e,n){return dn(e,{rel:"stylesheet",callback:n})}function ae(e,n=!1){n&&mn(e)}var se=(e,n,{mode:t,id:r}={})=>new Promise((o,a)=>{let i=document.querySelector(`head > script[src="${e}"]`);if(!i){let{head:l}=document;i=document.createElement("script"),i.setAttribute("src",e),r!=null&&i.setAttribute("id",r),n!=null&&i.setAttribute("type",n),t&&["async","defer"].includes(t)&&i.setAttribute(t,""),l.append(i)}let p=i.dataset.loaded;if(p!=null){o(i);return}let c=l=>{i.removeEventListener("load",c),i.removeEventListener("error",c),l.type==="error"?a(new Error(`error loading script: ${i.src}`)):l.type==="load"&&(i.dataset.loaded="true",o(i))};i.addEventListener("load",c),i.addEventListener("error",c)});function H(e,n=document){let t=e&&e.includes(":")?"property":"name";return n.head.querySelector(`meta[${t}="${e}"]`)?.content??null}var fn=e=>{let n=e,t=a=>a==null||typeof a!="object";if(t(n)||t(n.locale)||typeof n.locale.prefix!="string"||t(n.env)||typeof n.env.name!="string")return!1;if(n.unav!==void 0){if(typeof n.unav!="object"||n.unav===null)return!1;let a=n.unav;if(a.profile!==void 0){if(typeof a.profile!="object"||a.profile===null)return!1;let i=a.profile;if(i.signInCtaStyle!==void 0&&i.signInCtaStyle!=="primary"&&i.signInCtaStyle!=="secondary"||i.messageEventListener!==void 0&&typeof i.messageEventListener!="function")return!1}}return!(n.jarvis!==void 0&&(typeof n.jarvis!="object"||n.jarvis===null||typeof n.jarvis.id!="string"))},[le,y]=(()=>{let e,n=!1;return[t=>{if(!n){if(!fn(t))throw new Error("MiloConfig validation failed: Invalid structure");e=t,n=!0}},()=>{if(!e)throw new Error("MiloConfig not initialized. Call setMiloConfig() first.");return e}]})(),gn={en:"US","en-gb":"GB","es-mx":"MX","fr-ca":"CA",da:"DK",et:"EE",ar:"DZ",el:"GR",iw:"IL",he:"IL",id:"ID",ms:"MY",nb:"NO",sl:"SI",sv:"SE",cs:"CZ",uk:"UA",hi:"IN","zh-hans":"CN","zh-hant":"TW",ja:"JP",ko:"KR",fil:"PH",th:"TH",vi:"VN"},Me={ar:"AR_es",be_en:"BE_en",be_fr:"BE_fr",be_nl:"BE_nl",br:"BR_pt",ca:"CA_en",ch_de:"CH_de",ch_fr:"CH_fr",ch_it:"CH_it",cl:"CL_es",co:"CO_es",la:"DO_es",mx:"MX_es",pe:"PE_es",africa:"MU_en",dk:"DK_da",de:"DE_de",ee:"EE_et",eg_ar:"EG_ar",eg_en:"EG_en",es:"ES_es",fr:"FR_fr",gr_el:"GR_el",gr_en:"GR_en",ie:"IE_en",il_he:"IL_iw",it:"IT_it",lv:"LV_lv",lt:"LT_lt",lu_de:"LU_de",lu_en:"LU_en",lu_fr:"LU_fr",my_en:"MY_en",my_ms:"MY_ms",hu:"HU_hu",mt:"MT_en",mena_en:"DZ_en",mena_ar:"DZ_ar",nl:"NL_nl",no:"NO_nb",pl:"PL_pl",pt:"PT_pt",ro:"RO_ro",si:"SI_sl",sk:"SK_sk",fi:"FI_fi",se:"SE_sv",tr:"TR_tr",uk:"GB_en",at:"AT_de",cz:"CZ_cs",bg:"BG_bg",ru:"RU_ru",ua:"UA_uk",au:"AU_en",in_en:"IN_en",in_hi:"IN_hi",id_en:"ID_en",id_id:"ID_id",nz:"NZ_en",sa_ar:"SA_ar",sa_en:"SA_en",sg:"SG_en",cn:"CN_zh-Hans",tw:"TW_zh-Hant",hk_zh:"HK_zh-hant",jp:"JP_ja",kr:"KR_ko",za:"ZA_en",ng:"NG_en",cr:"CR_es",ec:"EC_es",pr:"US_es",gt:"GT_es",cis_en:"TM_en",cis_ru:"TM_ru",sea:"SG_en",th_en:"TH_en",th_th:"TH_th"};function vn(e){let n=gn[e];return!n&&Me[e]&&(n=e),!n&&e.includes("-")&&([n]=e.split("-")),n||"US"}var re="langstore/";function Pe(e){let t=(e?.prefix||"US_en").replace("/","")??"",[r="US",o="en"]=(Me[t]??t).split("_",2);if(t.startsWith(re)||window.location.pathname.startsWith(`/${re}`)){let a=t.replace(re,"").toLowerCase();r=vn(a),o=a}return r=r.toUpperCase(),o=o.toLowerCase(),{language:o,country:r,locale:`${o}_${r}`}}var z={elementNull:"Error when parsing Link. Element is null",notAnchor:"Cannot parse non-anchor as Link",textContentNotFound:"Error when parsing Link. Element has no textContent",hrefNotFound:"Element has no href"},h=e=>{if(e===null)throw new s(z.elementNull);if(e.tagName!=="A")throw new s(z.notAnchor);let n=e?.textContent??"";if(n==="")throw new s(z.textContentNotFound);let t=e?.getAttribute("href")??"";if(t==="")throw new s(z.hrefNotFound);return[{type:"Link",text:n,href:t},[]]};var ce=e=>x(yn).or(hn).or(bn).eval(e),k={elementNull:"Element not found",noTitleAnchor:"Title anchor not found",noHref:"Title Anchor has no href",noTitle:"Title text not found",noSubtitleP:"Subtitle <p> not found",noSubtitle:"Subtitle text not found",notAHeader:"Expected a Header class"},hn=e=>{let n=new Set;if(!e)throw new s(k.elementNull);let t=e.querySelector("p a");if(!t)throw new s(k.noTitleAnchor);let r=t.textContent??"";r===""&&n.add(new u(k.noTitle));let o=t.getAttribute("href")??"";o===""&&n.add(new u(k.noHref));let a=t?.closest("p")?.nextElementSibling;if(!a)throw new s(k.noSubtitleP);let i=a.textContent??"";i===""&&n.add(new u(k.noSubtitle));let[p=null,c=null]=(e.firstElementChild?.firstElementChild?.textContent?.split("|")??[]).map(l=>l.trim());return[{type:"LinkGroupLink",iconHref:p,iconAlt:c,title:r,href:o,subtitle:i},[...n]]},yn=e=>{if(!e)throw new s(k.elementNull);let n=[...e.classList];if(!n.includes("header"))throw new s(k.notAHeader);let t=e.querySelector("a")?.textContent??"";if(t==="")throw new s(k.noTitle);return[{type:"LinkGroupHeader",title:t,classes:n},[]]},bn=e=>{if(!e)throw new s(k.elementNull);if(!e.classList.contains("blue"))throw new Error("Not a Blue Link Group");let n=e.querySelector("a"),[t,r]=h(n);return[{type:"LinkGroupBlue",link:t},r]};var Ln=`/**
 * Link Group Styles
 */
.feds-link-group {
    --title-color: #2f2f2f;
    --sub-title-color: #4b4b4b;
    --bg-hover-color: #e9e9e9;
    --accent-color: #274dea;
    --accent-color-hover: #1d3ecf;
    --header-border-color: #b6b6b6;
    --header-background-color: #eaeaea;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    padding: 12px;
}

.feds-link-group:hover {
    background-color: var(--bg-hover-color);
}

.feds-link-group__title {
    /* font-family: var(--heading-font-family); */
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1rem;
    color: var(--title-color);
}

.feds-link-group__subtitle {
    font-size: 0.75rem;
    line-height: 1rem;
    color: var(--sub-title-color);
}

.feds-link-group--blue,
.feds-link-group--blue .feds-link-group__title {
    color: var(--accent-color);
}

.feds-link-group--blue:hover,
.feds-link-group--blue:hover .feds-link-group__title {
    color: var(--accent-color-hover);
}

/* styles overriden coming from styles.css */
.feds-link-group.feds-link-group--blue {
    text-decoration: underline;
}

.feds-link-group.feds-link-group--gray-gradient {
    background-color: var(--header-background-color);
}

@media (min-width: 900px) {
    .feds-link-group {
        --title-color: #9f9f9f;
        --sub-title-color: #9f9f9f;
        --title-color-hover: #fff;
        --sub-title-color-hover: #fff;
        --bg-hover-color: transparent;
        --header-background-color: transparent;
        padding: 0;
    }

    .feds-link-group--blue,
    .feds-link-group--blue:hover {
        color: var(--title-color-hover);
    }

    .feds-link-group__content {
        padding: 24px 0;
    }

    .feds-link-group__title {
        font-size: 1.25rem;
        line-height: 115%;
        padding-bottom: 10px;
    }

    .feds-link-group:hover .feds-link-group__title {
        color: var(--title-color-hover);
    }

    .feds-link-group__subtitle {
        font-size: 0.875rem;
        line-height: 140%;
    }

    .feds-link-group:hover .feds-link-group__subtitle {
        color: var(--sub-title-color-hover);
    }

    .feds-link-group--blue .feds-link-group__title,
    .feds-link-group.feds-link-group--gray-gradient .feds-link-group__title{
        color: var(--title-color-hover);
    }

    .feds-link-group.feds-link-group--header .feds-link-group__title {
        color: var(--title-color);
        border-bottom: 1px solid var(--header-border-color);
    }

    .feds-link-group.feds-link-group--header .feds-link-group__content {
        width: 100%;
    }
}
`,Ae=document.createElement("style");Ae.textContent=Ln;document.head.appendChild(Ae);var pe=e=>{switch(e.type){case"LinkGroupHeader":return Cn(e);case"LinkGroupLink":return wn(e);case"LinkGroupBlue":return xn(e);default:return console.error(e),""}},Cn=({title:e,classes:n})=>`
    <div role="heading" class="feds-link-group ${n.slice(1).map(r=>`feds-link-group--${r}`).join(" ")}">
      <div class="feds-link-group__content">
        <div class="feds-link-group__title">${e}</div>
      </div>
    </div>
  `,wn=({iconHref:e,iconAlt:n,title:t,href:r,subtitle:o})=>{let i=n!==null&&e!==null?`
      <picture class="feds-link-group__icon">
        <img
          loading="lazy"
          src="${e}"
          alt="${n}"
          class="feds-link-group__icon-img"
        >
      </picture>
    `:"";return`
    <a class="feds-link-group" href="${r}" daa-ll="${t}">
      ${i}
      <div class="feds-link-group__content">
        <div class="feds-link-group__title">${t}</div>
        <div class="feds-link-group__subtitle">${o}</div>
      </div>
    </a>
  `},xn=({link:e})=>`
  <a href="${e.href}" class="feds-link-group feds-link-group--blue" daa-ll="${e.text}">
    <div class="feds-link-group__content">
        <div class="feds-link-group__title">${e.text}</div>
      </div>
  </a>
`;var Z={elementNull:"Error when parsing Brand. Element is null",noLinks:"Error when parsing Brand. No links found",noPrimaryLink:"Error when parsing Brand. No primary link found"},$=/(\.png|\.jpg|\.jpeg|\.svg)/i,En=e=>{let n=e.querySelector("picture img")?.getAttribute("src")??null;if(n!==null&&n!=="")return n;let t=e.textContent?.trim();if(t!==void 0&&t!==""&&$.test(t)){let o=t.split("|")[0]?.trim();if(o!==void 0&&o!=="")return o}let r=e.getAttribute("href");return r!==null&&r!==""&&$.test(r)?r:null},kn=e=>{let n=e.textContent?.trim();if(n?.includes("|")===!0){let r=n.split("|")[1]?.trim();if(r)return r}return e.querySelector("img")?.getAttribute("alt")??""},ue=e=>{if(e===null)throw new s(Z.elementNull);let n=e.querySelector(".gnav-brand");if(n===null)throw new s(Z.elementNull);let t=[...n.querySelectorAll("a")];if(t.length===0)throw new s(Z.noLinks);let r=t.find(m=>{let g=m.textContent??"";return!$.test(m.href)&&!$.test(g)});if(!r)throw new s(Z.noPrimaryLink);let o=n.matches(".brand-image-only"),a=n.matches(".no-logo"),i=n.matches(".image-only"),p=!a,c=!o&&!i,l=t.filter(m=>{let g=m.textContent??"";return $.test(m.href)||$.test(g)}),[d,f,C]=(()=>{let m=o?oe.brand:oe.company,[g=null,T=null]=[...n.querySelectorAll('picture img[src$=".svg"]')].map(te=>te?.src).filter(te=>te?.length>0),[W=null,ln=null]=l.map(En),cn=l[0]instanceof Element?kn(l[0]):r.textContent?.trim()??"";return[W??g??m,ln??T,cn]})(),L=r.textContent?.trim()??"",w=r.href;if(!p&&!c)return[{type:"Brand",data:{type:"NoRender"}},[]];let S=(m,g)=>{let T=g!=null&&g!=="";return Te()&&T?g:m},A=d.startsWith("<svg")?{type:"inline-svg",svgContent:S(d,f),alt:C}:{type:"image",src:S(d,f),alt:C};return p&&c?[{type:"Brand",data:{type:"LabelledBrand",href:w,label:L,image:A}},[]]:p&&o?[{type:"Brand",data:{type:"BrandImageOnly",href:w,image:A,alt:C}},[]]:p&&i?[{type:"Brand",data:{type:"ImageOnlyBrand",href:w,image:A,alt:C}},[]]:[{type:"Brand",data:{type:"BrandLabelOnly",href:w,label:L}},[]]};var Sn=`.feds-brand-container {
    display: flex;
    flex-shrink: 0;
}

.feds-brand {
    display: flex;
}

.feds-brand,
.feds-logo {
    align-items: center;
    outline-offset: 2px;
    padding: 0 var(--feds-gutter);
    column-gap: 10px;
}

.feds-brand-image,
.feds-logo-image {
    width: 25px;
    flex-shrink: 0;
}

.feds-brand-image.brand-image-only {
    height: 36px;
    width: auto;
    min-width: 66px;
}

.feds-brand-image.brand-image-only picture,
.feds-brand-image.brand-image-only img,
.feds-brand-image.brand-image-only svg {
    width: auto;
    height: 100%;
}

.feds-brand-image picture,
.feds-brand-image img,
.feds-brand-image svg,
.feds-logo-image picture,
.feds-logo-image img,
.feds-logo-image svg {
    width: 100%;
    display: block;
}

.feds-brand-label,
.feds-logo-label {
    flex-shrink: 0;
    font-weight: 700;
    font-size: 18px;
    color: var(--feds-color-adobeBrand);
}

@media (min-width: 900px) {
    .feds-brand-image+.feds-brand-label {
        display: flex;
    }
}`,_e=document.createElement("style");_e.textContent=Sn;document.head.appendChild(_e);var de=(e,n)=>{let t=`feds-brand-image${n?" brand-image-only":""}`;if(e.type==="inline-svg")return`<span class="${t}">${e.svgContent}</span>`;let r=e.alt?` alt="${e.alt}"`:"";return`<span class="${t}"><img src="${e.src}"${r} /></span>`},V=(e,n,t="")=>`<div class="feds-brand-container">
    <a href="${e}" class="feds-brand" daa-ll="Brand"${t}>
      ${n}
    </a>
  </div>`.trim(),me=e=>{let{data:n}=e;switch(n.type){case"LabelledBrand":return V(n.href,de(n.image,!1)+`<span class="feds-brand-label">${n.label}</span>`);case"BrandImageOnly":{let t=n.alt?` aria-label="${n.alt}"`:"";return V(n.href,de(n.image,!0),t)}case"ImageOnlyBrand":{let t=n.alt?` aria-label="${n.alt}"`:"";return V(n.href,de(n.image,!1),t)}case"BrandLabelOnly":return V(n.href,`<span class="feds-brand-label">${n.label}</span>`);case"NoRender":return"";default:return""}};var fe=["appswitcher","help"],K={cs:["cz"],da:["dk"],de:["at"],en:["africa","au","ca","ie","in","mt","ng","nz","sg","za"],es:["ar","cl","co","cr","ec","gt","la","mx","pe","pr"],et:["ee"],ja:["jp"],ko:["kr"],nb:["no"],pt:["br"],sl:["si"],sv:["se"],uk:["ua"],zh:["cn","tw"]},[G,Ie]=(()=>{let e,n,t,r=new Promise(o=>{n=o,t=setTimeout(()=>{e={},o(e)},5e3)});return[o=>{o&&!e&&(e=o,clearTimeout(t),n?.(e))},()=>r]})();function J(e,n=!1){let p=(/uc_carts=/.test(document.cookie)?e:e?.filter(l=>l!=="cart"))??[],c=p.length??3;if(n){let l=p.filter(f=>fe.includes(f)).length;return`calc(92px + ${l*32}px + ${l*.25}rem)`}return`calc(${c*32}px + ${(c-1)*.25}rem)`}var X=e=>{if(!e.prefix||e.prefix==="/")return"en_US";let n=e.prefix.replace("/","");if(n.includes("_")){let[r,o]=n.split("_").reverse();return`${r.toLowerCase()}_${o.toUpperCase()}`}if(n==="uk")return"en_GB";let t=Object.keys(K).find(r=>K[r].includes(n));return t?`${t.toLowerCase()}_${n.toUpperCase()}`:`${n.toLowerCase()}_${n.toUpperCase()}`},Tn={Mac:"macOS",Win:"windows",Linux:"linux",CrOS:"chromeOS",Android:"android",iPad:"iPadOS",iPhone:"iOS"},Y=()=>{let e=navigator.userAgent;for(let[n,t]of Object.entries(Tn))if(e.includes(n))return t;return"linux"},Q=async()=>{let e=window;return e.alloy?await e.alloy("getIdentity").then(n=>n?.identity?.ECID).catch(()=>{}):void 0};var Re=()=>{try{return y().signInContext||{}}catch{return{}}},Mn=()=>{let e=y();return H("signin-cta-style")==="primary"||e?.unav?.profile?.signInCtaStyle==="primary"?"primary":"secondary"},Pn=()=>{let n=y()?.unav?.profile?.messageEventListener;return n||(t=>{let{name:r,payload:o,executeDefaultAction:a}=t.detail;if(!(!r||r!=="System"||!o||typeof a!="function"))switch(o.subType){case"AppInitiated":window.adobeProfile?.getUserProfile().then(i=>{G(i)}).catch(()=>{G({})});break;case"SignOut":a();break;case"ProfileSwitch":Promise.resolve(a()).then(i=>{i&&window.location.reload()});break;default:break}})};function An(){let{unav:e}=y();return e?.unavHelpChildren||[{type:"Support"},{type:"Community"}]}var N=()=>{let e=y();return{profile:{name:"profile",attributes:{accountMenuContext:{sharedContextConfig:{enableLocalSection:!0,enableProfileSwitcher:!0,miniAppContext:{logger:{trace:()=>{},debug:()=>{},info:()=>{},warn:()=>{},error:()=>{}}},complexConfig:e?.unav?.profile?.complexConfig||null,...e?.unav?.profile?.config},messageEventListener:Pn()},signInCtaStyle:Mn(),isSignUpRequired:!1,callbacks:{onSignIn:()=>{window.adobeIMS?.signIn(Re())},onSignUp:()=>{window.adobeIMS?.signIn(Re())}}}},appswitcher:{name:"app-switcher"},notifications:{name:"notifications",attributes:{notificationsConfig:{applicationContext:{appID:e?.unav?.uncAppId||"adobecom",...e?.unav?.uncConfig}}}},help:{name:"help",attributes:{children:An()}},jarvis:{name:"jarvis",attributes:{appid:e?.jarvis?.id,callbacks:e?.jarvis?.callbacks}},cart:{name:"cart"}}};var $e=(e,n)=>{e[0]&&"attributes"in e[0]&&e[0].attributes&&typeof e[0].attributes=="object"&&"isSignUpRequired"in e[0].attributes&&(e[0].attributes.isSignUpRequired=n)},ee=async(e,n)=>{try{let t=e.querySelector(".feds-utilities");if(!(t instanceof HTMLElement))return new u('missing ".feds-utilities" container');let r=new Set,o=document.head.querySelector('meta[name="universal-nav"]'),a=o instanceof HTMLMetaElement?o.content??"":"";o instanceof HTMLMetaElement||r.add(new u('metadata "universal-nav" is missing'));let i=a.trim();o instanceof HTMLMetaElement&&i.length===0&&r.add(new u('metadata "universal-nav" has no value'));let p=!window.adobeIMS?.isSignedInUser(),c=i.split(",").map(m=>m.trim()).filter(m=>Object.keys(N()).includes(m)||m==="signup");if(p){let m=J(c,p);t.style.setProperty("min-width",m)}let l;try{l=y()}catch{throw new Error("MiloConfig not available for UNAV initialization")}let d=X(l.locale),f=l.env.name==="prod"?"prod":"stage",C=await Q(),L=new URLSearchParams(window.location.search).get("unavVersion");/^\d+(\.\d+)?$/.test(L??"")||(L="1.5"),await Promise.all([se(`https://${f}.adobeccstatic.com/unav/${L}/UniversalNav.js`),ae(`https://${f}.adobeccstatic.com/unav/${L}/UniversalNav.css`,!0)]);let w=()=>{let m=N(),g=[m.profile];return $e(g,!1),c?.forEach(T=>{if(T==="profile")return;if(T==="signup"){$e(g,!0);return}let W=m[T];W&&g.push(W)}),g},S=()=>({target:t,env:f,locale:d,countryCode:Pe(l?.locale)?.country||"US",imsClientId:window?.adobeid?.client_id,theme:"light",analyticsContext:{consumer:{name:"adobecom",version:"1.0",platform:"Web",device:Y(),os_version:navigator.platform},event:{visitor_guid:C}},children:w(),isSectionDividerRequired:!!l?.unav?.showSectionDivider,showTrayExperience:!_.matches});await window?.UniversalNav?.(S()),p||t?.style.removeProperty("min-width");let A=m=>{window?.UniversalNav?.reload(S())};return _.addEventListener("change",()=>{A()}),{reloadUnav:A,errors:r}}catch(t){let r=t instanceof Error?t.message:"failed to load universal nav";return new u(r)}};var _n="feds-milo",v=(e,n="default",t="e")=>{let{locale:r}=y(),o=H("gnav-source")??`${r.contentRoot??""}/gnav`;window.lana||console.warn("lana logging unavailable in the gnav"),window?.lana?.log(`${e} | gnav-source: ${o} | href: ${window.location.href}`,{clientId:_n,sampleRate:1,tags:n,errorType:t})};var s=class e extends Error{constructor(n){super(n),Object.setPrototypeOf(this,e.prototype)}},u=class e extends Error{constructor(n,t="Minor"){super(n),Object.setPrototypeOf(this,e.prototype),t==="Critical"&&v(n)}};var Ue=e=>n=>{if(n===null)throw new Error("");let t=n.querySelector(In(e));if(!t)throw new Error("");let[{text:r,href:o},a]=h(t);return[{type:e.type,text:r,href:o},a]},B=Ue({type:"PrimaryCTA"}),D=Ue({type:"SecondaryCTA"}),He=e=>x(B).or(D).eval(e),In=({type:e})=>{switch(e){case"PrimaryCTA":return"strong > a";case"SecondaryCTA":return"em > a";default:throw new Error("")}};var O=({text:e,href:n})=>`
<a href="${n}" class="feds-primary-cta">
  ${e}
</a>
`,q=({text:e,href:n})=>`
<a href="${n}" class="feds-secondary-cta">
  ${e}
</a>
`,Ge=e=>e.type==="PrimaryCTA"?O(e):q(e);var U=({text:e,href:n})=>`<a class="feds-link" href="${n}">${e}</a>`;var Ne=e=>{let[n,t]=Rn(e);return(()=>{switch(n.type){case"SingleColumnSection":return[[{type:"Tab",title:n.title,columns:[n.items],CTA:ge(n)}],t];case"SingleColumnSectionList":return[n.sections.flatMap(r=>({type:"Tab",title:r.title,columns:[r.items],CTA:ge(r)})),t];case"MultiColumnSection":return[[{type:"Tab",title:n.title,columns:n.columns,CTA:ge(n)}],t];case"MenuPromo":return[[{type:"Tab",title:"More",columns:n,CTA:void 0}],t];default:return[[],[]]}})()},ge=e=>e.type==="SingleColumnSection"?e.items.find(n=>n.type==="PrimaryCTA"):e.columns.flat().find(n=>n.type==="PrimaryCTA"),Rn=e=>x(ve).or(Oe).or($n).or(he).eval(e),Be=e=>b(e,n=>x(ce).or(B).or(D).or(h).eval(n)),De=e=>e.flatMap(n=>n.nodeName==="UL"?[...n.querySelectorAll("li > a")]:[n]),Oe=e=>{if(e.querySelector(".gnav-promo"))throw new Error("This is a promo");if(e.querySelector(".column-break"))throw new s("Has a column break");let n=e.firstElementChild;if(n===null)throw new s("No Children");let t=n.nodeName==="H5"?n.textContent??null:null,r=n.nodeName==="H5"?I(n):[...e.children],o=De(r),[a,i]=Be(o);return[{type:"SingleColumnSection",title:t,items:a},i]},ve=e=>{if(e.querySelector(".column-break"))throw new s("Has a column break");let n=[...e.querySelectorAll("h5")];if(n.length<=1)throw new s("Not a section list");let t=a=>{let i=document.createElement("div"),p=ie(c=>c.nodeName!=="H5")(I(a));return i.append(a,...p),Oe(i)},[r,o]=b(n,t);return[{type:"SingleColumnSectionList",sections:r},o]},$n=e=>{if(!e.querySelector(".column-break"))throw new s("Expected a Column Break");let n=e.firstElementChild;if(n===null||n.nodeName!=="H5")throw new s(j.expectedH5);let t=n.textContent;if(t===""||t===null)throw new s(j.emptyTitle);let o=xe(p=>p.classList.contains("column-break"))(I(n)).map(De),[a,i]=b(o,Be);return[{type:"MultiColumnSection",title:t,columns:a},i]},he=e=>{if(e===null)throw new s(j.elementNull);let n=e.querySelector(".gnav-promo, .gnav-image");if(n===null)throw new s(j.noPromo);let t=n.innerHTML??"";if(t==="")throw new s(j.noPromoContent);return[{type:"MenuPromo",content:t},[]]},j={expectedH5:"Expected an H5 element for the title ",emptyTitle:"Expected Title to not be empty",elementNull:"Element is null",noPromo:"Promo or gnav image not found",noPromoContent:"Promo Content not found"};var je=e=>{let n=new Set;if(e===null)throw new s(qe.elementNull);let t=e.querySelector("h2")?.textContent??"";t===""&&n.add(new u(qe.noTitle));let r=(async()=>{try{let c=e.querySelector("h2 > a"),l=new URL(c?.href??""),d=await R(l);if(d instanceof s)throw new Error(d.message);let f=await Se(d);if(f instanceof s)throw new Error(f.message);let C=[...f.children],[L,w]=b(C,Ne);return[L.flat(),w]}catch(c){throw new s(c?.message)}})(),o=e.querySelectorAll(".cross-cloud-menu ul > li > a"),[a,i]=b([...o],h),p=e.classList.contains("section");return[{type:"MegaMenu",title:t,tabs:r,crossCloudMenu:a,isSection:p},[...i,...n]]},qe={elementNull:"Element is null",noTitle:"Large Menu has no Title"};var Un=`.mega-menu::after {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-left: 8px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(-45deg);
  right: 20px;
  top: calc(50% - 4px);
}

.mega-menu:has(+ .feds-popup:popover-open)::after {
  transform: rotate(-135deg) translateY(1px);
  margin-top: 8px;
}

.feds-popup {
  display: none;
}

.feds-popup:popover-open {
    display: flex;
    flex-direction: row;
    justify-content: start;
    translate: 0;
    opacity: 1;
    z-index: 2;
    transition: translate 0.4s ease-out, opacity 0.2s ease, visibility 0s linear 0s;
    visibility: visible;
    background-color: #000;
    align-items: start;
    margin-top: 1px;
    padding: 12px 0;
    padding-left: 15%;
    width: 100%;
    height: calc(100vh - 64px);
    position: absolute;
    left: 0;
    box-shadow: 0 3px 3px 0 rgb(0 0 0 / 20%);
    transform: translate3d(0, 0, 0);
    top: var(--feds-nav-height);
}

@media (min-width: 900px) {
  .mega-menu::after {
    transform: rotate(45deg) translateY(-1px);
    transform-origin: center;
    transition: transform 150ms ease;
    pointer-events: none;
  }
}

`,We=document.createElement("style");We.textContent=Un;document.head.appendChild(We);var Fe=e=>{let n=()=>({name:"",description:""}),t=[0,1,2,3].map(n);return`
  <div class="feds-popup loading" aria-hidden="true">
    <div class="top-bar">
    </div>
    <div class="title">
      <h2>${e}</h2>
    </div>
    <div class="tabs" role="tablist">
      ${t.map(({name:r,description:o},a)=>`
        <div class="tab-wrapper">
          <button
          role="tab"
          class="tab"
          aria-selected="false"
          aria-controls="${a}"
          >${r.trim()===""?"<div></div>":r}</button>
          ${o?`<div class="feds-menu-description">${o}</div>`:""}
        </div>
      `).join("")}
    </div>
    <div class="tab-content">
    ${t.map((r,o)=>`
        <div
          id="${o}"
          role="tabpanel"
          aria-labelledby="${o}"
          class="feds-navLink-content"
        >
      <div class="feds-navLink-title"></div>
      <div class="feds-navLink-description"></div>
      </div>`).join("")}
  </div>
  `},ze=({title:e,isSection:n})=>`
  <button type="button"
          aria-expanded="false"
          aria-controls="${P(e)}"
          class="mega-menu feds-link"
          popovertarget="${P(e)}"
  >
    ${e}
  </button>
  <div id="${P(e)}" popover class="feds-popup${n?"":" section"}" aria-hidden="true">
    <ul>
    </ul>
  </div>
`;var Ve=e=>{let n=[];if(e===null)throw new s(Ze.elementNull);let t=e.querySelector("h2"),r=t?.textContent??"";r===""&&n.push(new u(Ze.noTitle));let o=(()=>{if(t===null)return e;let l=document.createElement("div");return I(t).forEach(d=>l.appendChild(d)),l})(),[a,i]=x(ve).or(l=>b([...l.children],Hn)).eval(o),[p,c]=(()=>{try{return he(e)}catch{return[null,[]]}})();return[{type:"SmallMenu",title:r,columns:a,promo:p},[...i,...c]]},Hn=e=>{if(e.nodeName!=="UL")throw new Error("");let n=[...e.querySelectorAll("ul > li > a")];return b(n,h)},Ze={elementNull:"The element to be parsed is null",noTitle:"Small menu has no title"};var Ke=(e,n,t,r,o)=>a=>`
  <div class="top-bar">
    ${o?e:""}
  </div>
  <div class="title">
    ${t||'<div class="breadcrumbs"></div>'}
    <h2 id="${r}-title">${n}</h2>
  </div>
  <div class="tabs" role="tablist">
    ${a.map((i,p)=>`
      <button
        role="tab"
        class="tab"
        aria-selected="false"
        aria-controls="${p}"
      >
        ${i.title===""?"<div></div>":i.title}
      </button>
    `).join("")}
  </div>
  <div class="tab-content">
    ${a.map((i,p)=>`
      <div
        id="${p}"
        role="tabpanel"
        class="${Array.isArray(i.columns)&&i.columns.flat().some(c=>c.type==="LinkGroupHeader")?"has-subheader":""}"
        hidden
      >
        <ul>
        ${Array.isArray(i.columns)?E(i.columns,c=>`
                              <ul>
                                ${E(c.filter(l=>l.type!=="PrimaryCTA"),ne)}
                              </ul>
                            `):i.columns.content}
        </ul>
        <div class="sticky-cta">
          ${i.CTA?ne(i.CTA):""}
        </div>
      </div>
    `.trim()).join("")}
  </div>
`.trim(),Je=({content:e})=>e,ne=e=>{switch(e.type){case"LinkGroupHeader":case"LinkGroupLink":case"LinkGroupBlue":return pe(e);case"Link":return U(e);case"PrimaryCTA":return O(e);case"SecondaryCTA":return q(e);default:return""}};var Xe=({title:e,columns:n,promo:t})=>`
  <button type="button"
          aria-expanded="false"
          aria-controls="${P(e)}"
  >
    ${e}
  </button>
  <div class="feds-popup" id="${P(e)}">
    ${Gn(n)}
    ${t===null?"":`<li>${Je(t)}</li>`}
  </div>
`,Gn=e=>!Array.isArray(e)&&e?.type==="SingleColumnSectionList"?Nn(e):`
  <ul>
    ${E(e,n=>`
      <ul>
        ${E(n,U)}
      </ul>
    `)}
  </ul>
  `,Nn=e=>`
  <ul>
    ${E(e.sections,n=>`
      <ul>
        ${n.title===null?"":`<span class="column-section-title">${n.title}</span>`}
        ${E(n.items,ne)}
      </ul>
    `.trim())}
  </ul>
`.trim();var Ye={elementNull:"Error when parsing text. Element is null",textContentNull:"Error when parsing text. Element has no textContent"},Qe=e=>{if(e===null)return[{type:"Text",content:""},[new u(Ye.elementNull,"Minor")]];let n=e.textContent;return n===null?[{type:"Text",content:""},[new u(Ye.textContentNull,"Minor")]]:[{type:"Text",content:n},[]]};var en=({content:e})=>e;var nn=e=>{if(e===null)throw new s(Bn.elementNull);if(e.querySelector(".gnav-brand")!==null)return ue(e);let t=e.querySelector(".large-menu");return t!==null?je(t):e.querySelector("h5, ul, link-group")!==null?Ve(e):e.querySelector("strong")!==null?B(e):e.querySelector("em")!==null?D(e):e.querySelector("a")===null?Qe(e):h(e.querySelector("a"))},ye=e=>{switch(e.type){case"Text":return en(e);case"Link":return U(e);case"SecondaryCTA":return q(e);case"PrimaryCTA":return O(e);case"Brand":return me(e);case"SmallMenu":return Xe(e);case"MegaMenu":return ze(e);default:return console.error(`Failed to recognize component: ${e}`),""}},Bn={elementNull:"Element is null"};var tn=(e,n)=>{let[t,r]=b([...document.querySelectorAll(".breadcrumbs ul > li > a")??[]],h),[o,a]=b([...e.children],nn),i=e.querySelector(".product-entry-cta"),[p,c]=(()=>{try{return He(i)}catch{return[null,[]]}})(),l=o.filter(f=>f.type==="MegaMenu"&&f.isSection).length===1,d=[r,a,c].flat();return{breadcrumbs:t,components:o,productCTA:p,localnav:l,errors:d,unavEnabled:n}};var Dn=e=>{let n=[...e.querySelectorAll('.tabs > button[role="tab"]')],t=[...e.querySelectorAll(".tab-content > div")],r=n.map((o,a)=>()=>{n.forEach(i=>{i.setAttribute("aria-selected","false")}),t.forEach(i=>{i.setAttribute("hidden","true")}),t[a]?.removeAttribute("hidden"),o.setAttribute("aria-selected","true")});return n.forEach((o,a)=>{o.addEventListener("click",r[a])}),()=>{n.forEach((o,a)=>{o.removeEventListener("click",r[a])})}};var rn=Dn;var On=e=>()=>console.log(e),qn=e=>()=>console.log(e),on=Ee({mobileEventListeners:qn,desktopEventListeners:On});var an=async({gnavSource:e,promoBarSource:n})=>{let t=await R(e);if(t instanceof s)return t;let r=await R(n);return{mainNav:t,promoBar:r}};var jn=`/**
 * Global Navigation Styles
 * Styles for the federal global navigation component
 */

:root {
    --feds-heading-font: 'Adobe Clean Display', adobe-clean-display, adobe-clean, 'Trebuchet MS', sans-serif;
    --feds-link-color: #4B4B4B;
    --feds-nav-height: 64px;
}

.global-navigation.site-pivot {
    visibility: visible;
    display: block;
}

.global-navigation nav > ul {
    display: flex;
    width: 100%;
    max-width: var(--feds-maxWidth-nav);
    height: inherit;
    align-items: center;
}


.feds-link {
    font-size: 16px;
    font-weight: 800;
    color: #4B4B4B;
    font-family: var(--feds-heading-font);
    display: flex;
    align-items: center;
    border: 0;
    background-color: transparent;
    padding: 12px;
    color: var(--feds-link-color);
}

.global-navigation.site-pivot nav {
    display: flex;
    align-items: center;
    max-width: var(--feds-maxWidth-nav);
    height: var(--feds-height-nav);
    justify-content: flex-start;
}

.global-navigation nav > ul {
    display: flex;
    width: 100%;
    max-width: var(--feds-maxWidth-nav);
    height: inherit;
    align-items: center;
    padding-left: 0;
}

.global-navigation nav > ul > li {
    display: flex;
    align-items: center;
}

.global-navigation nav > ul > li.feds-menu-wrapper {
    position: fixed;
    top: var(--feds-nav-height);
    left: 0;
    right: 20px;
    flex-direction: column;
    height: calc(100dvh - var(--feds-nav-height) - 1px);
    border-top: 1px solid var(--feds-borderColor);
    width: 100%;
    background-color: var(--feds-background-cloudmenu-v2);
    translate: -200vw 0;
    opacity: 0;
    transition: translate 0.4s ease-out, opacity 0.4s ease, visibility 0s linear 0.5s;
    display: flex;
    visibility: hidden;
}

.global-navigation nav > ul > li.feds-menu-wrapper:popover-open {
    display: flex;
    translate: 0;
    opacity: 1;
    z-index: 2;
    transition: translate 0.4s ease-out, opacity 0.4s ease, visibility 0s linear 0s;
    visibility: visible;
    align-items: flex-start;
}

.global-navigation nav > ul > li.feds-menu-wrapper:popover-open .feds-gnav-items {
    align-items: flex-start;
    padding: 0;
}

.global-navigation nav .feds-nav-toggle {
    width: 60px;
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    box-shadow: none;
    color: var(--feds-color-hamburger);
    cursor: pointer;
    font-size: 20px;
    font-weight: 300;
}

.global-navigation nav .feds-nav-toggle::before { 
    content: "\\2630";
}

.feds-link {
    font-size: 16px;
    font-weight: 800;
    color: #4B4B4B;
    font-family: var(--feds-heading-font);
    display: flex;
    align-items: center;
    border: 0;
    background-color: transparent;
    padding: 12px;
    color: var(--feds-link-color);
    cursor: pointer;
}

.global-navigation.site-pivot:has(.feds-menu-wrapper:popover-open) .feds-nav-toggle::before {
    content: "\\2715"; 
}

.global-navigation.site-pivot:has(.feds-popup:popover-open) .feds-link,
.global-navigation.site-pivot:has(.feds-menu-wrapper:popover-open) .feds-link {
    color: #fff;
}

.global-navigation.site-pivot ul {
    list-style: none;
    margin: 0;
}

@media (min-width: 900px) {
    .global-navigation nav .feds-nav-toggle {
        display: none;
    }

    .global-navigation nav > ul > li.feds-menu-wrapper {
        position: static;
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        width: auto;
        height: unset;
        border: 0;
        outline: 0;
        box-shadow: none;
        justify-content: space-between;
        background-color: transparent;
        opacity: 1;
        visibility: visible;
        translate: unset;
        transition: unset;
    }

    .global-navigation.site-pivot nav {
        display: flex;
        align-items: center;
        max-width: var(--feds-maxWidth-nav);
        padding-left: 10%;
        justify-content: flex-start;
    }

    .global-navigation.site-pivot:has(.feds-popup:popover-open),
    .global-navigation.site-pivot:has(.feds-menu-wrapper:popover-open) {
        background-color: #000;
    }

    .global-navigation nav .feds-gnav-items {
        align-items: center;
        padding-left: 0;
        margin: 0;
        display: flex;
    }
    
}

`,sn=document.createElement("style");sn.textContent=jn;document.head.appendChild(sn);var No=async e=>{let{gnavSource:n,mountpoint:t,unavEnabled:r,miloConfig:o,loadBlock:a}=e;if(!(n instanceof URL))throw v(`gnavSource is invalid: ${n}`),new s("gnavSource needs to be a URL object");try{le(o)}catch(d){throw v(`Failed to initialize MiloConfig: ${d}`),new s(`Failed to initialize MiloConfig: ${d}`)}Ce(be(e));let i=await an(e);if(i instanceof s)throw v(i.message),i;let{mainNav:p,promoBar:c}=i;if(p instanceof s)throw v(p.message),p;Zn(c,a);let l=tn(p,r);if(l instanceof s)throw v(l.message),l;return await Wn(l)(t),zn(e)},Wn=e=>async n=>{let t=Fn(e);n.innerHTML=t,n.classList.add("site-pivot");let r=[...n.querySelectorAll(".mega-menu ~ .feds-popup > ul")];r.forEach(i=>{i.innerHTML=Fe(i.textContent?.trim()??"")});let o=e.components.filter(i=>i.type==="MegaMenu").map(i=>i.tabs),a=await Promise.all(o.map(async(i,p)=>{let[c,l]=await i,d=n.querySelector(".feds-brand-container")?.outerHTML??"",f=r[p].parentElement?.previousElementSibling?.textContent??"",C=n.querySelector(".breadcrumbs")?.outerHTML??"",L=r[p].querySelector(".feds-popup")?.id??"",w=r.length===1,S=Ke(d,f,C,L,w)(c);return r[p].innerHTML=S,l}).flat());return n},Fn=({components:e,productCTA:n,unavEnabled:t})=>`
<nav>
  <ul>
    ${(()=>{let r=e.find(c=>c.type==="Brand")??null,o=e.filter(c=>c.type!=="Brand"),a=`
        <button
          class="feds-nav-toggle"
          type="button"
          aria-label="Navigation menu"
          aria-expanded="false"
          aria-controls="feds-menu-wrapper"
          popovertarget="feds-menu-wrapper"
        >
        </button>
      `.trim(),i=r?ye(r):"",p=E(o,ye);return`
        <li class="feds-brand-wrapper">
          ${a}
          ${i}
        </li>
        <li
          id="feds-menu-wrapper"
          popover
          class="feds-menu-wrapper"
          aria-hidden="true"
        >
          <ul class="feds-gnav-items">
            ${p}
          </ul>
        </li>
      `.trim()})()}
  </ul>
  ${n===null?"":Ge(n)}
  ${t?'<div class="feds-utilities"></div>':""}
</nav>
`,zn=async e=>{let n=new Set,t=await ee(e.mountpoint);t instanceof u?(n.add(t),v(t.message)):t.errors.forEach(o=>n.add(o)),rn(e.mountpoint),on(e.mountpoint);let r=t instanceof u?()=>{}:t.reloadUnav;return{closeEverything:Vn,reloadUnav:r,errors:n,setGnavTopPosition:o=>{},getGnavTopPosition:()=>0}},Zn=(e,n)=>{if(e instanceof s)throw v(e.message),e;let t=e.querySelector(".notification");try{n(t)}catch(r){let o=`Failed to load notification block: ${r}`;throw v(o),new s(o)}t&&document.querySelector(".feds-promo-aside-wrapper")?.appendChild(t)},Vn=()=>{};export{No as main,zn as postRenderingTasks,Wn as renderGnav,Fn as renderGnavString};
//# sourceMappingURL=main.js.map
