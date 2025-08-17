export const BundledLanguage = {
  bash: () => import('@shikijs/langs/bash'),
  css: () => import('@shikijs/langs/css'),
  scss: () => import('@shikijs/langs/scss'),
  sass: () => import('@shikijs/langs/sass'),
  less: () => import('@shikijs/langs/less'),
  diff: () => import('@shikijs/langs/diff'),
  json: () => import('@shikijs/langs/json'),
  typescript: () => import('@shikijs/langs/typescript'),
  javascript: () => import('@shikijs/langs/javascript'),
  vue: () => import('@shikijs/langs/vue'),
  markdown: () => import('@shikijs/langs/markdown'),
  tsx: () => import('@shikijs/langs/tsx'),
  jsx: () => import('@shikijs/langs/jsx'),
  java: () => import('@shikijs/langs/java'),
  python: () => import('@shikijs/langs/python'),
};

export enum ThemeEnum {
  dark = 'andromeeda',
  light = 'light-plus'
}

export const BundledTheme = {
  [ThemeEnum.dark]: () => import('@shikijs/themes/andromeeda'),
  [ThemeEnum.light]: () => import('@shikijs/themes/light-plus'),
};
