// @ts-ignore
import favicon from "./extensions/image/favicon.ico";
// import MyNewWYSIGWYG from "./extensions/components/MyNewWYSIGWYG";
// @ts-ignore
import vi from "./extensions/translations/vi";
// @ts-ignore
import en from "./extensions/translations/en";
// @ts-ignore
import ckeditor5Dll from "ckeditor5/build/ckeditor5-dll.js";
// @ts-ignore
import ckeditor5MrkdownDll from "@ckeditor/ckeditor5-markdown-gfm/build/markdown-gfm.js";
const config = {
  //login form
  auth: {
    logo: favicon,
  },
  menu: {
    logo: favicon,
  },
  head: {
    favicon: favicon,
  },
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  translations: {
    vi: vi,
    en: en,
  },
};

const bootstrap = (app) => {
  // app.addFields({ type: "wysiwyg", Component: MyNewWYSIGWYG });
};

export default {
  config,
  bootstrap,
};


