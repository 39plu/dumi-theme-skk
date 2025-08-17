import { createHighlighterCore, createJavaScriptRegexEngine, type Highlighter } from 'shiki';
import { BundledLanguage, BundledTheme, ThemeEnum } from './language';

export interface ShikiSyntaxTheme {
  dark: any;
  light: any;
}

export interface ShikiOptions {
  onInit?: (instance: any) => void;
  onLoadingChange?: (loading: boolean) => void;
  theme?: Partial<ShikiSyntaxTheme>;
}

// 缓存高亮器实例
let highlighter: any | null = null;

export async function getShikiHighlighter(): Promise<Highlighter> {
  if (!highlighter) {
    highlighter = createHighlighterCore({
      themes: Object.values(BundledTheme),
      langs: Object.values(BundledLanguage),
      engine: createJavaScriptRegexEngine(),
    });
  }
  return highlighter;
}

export async function highlightCode(
  code: string,
  lang = 'typescript',
  isDarkMode: boolean,
): Promise<string> {
  const hightlighter = await getShikiHighlighter();
  return hightlighter.codeToHtml(code, {
    lang,
    theme: isDarkMode ? ThemeEnum.dark: ThemeEnum.light
  });
}
