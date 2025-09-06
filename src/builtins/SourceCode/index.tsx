import { Tabs, TabsProps } from 'antd';
import { FC } from 'react';
import { ThemeProvider } from '../../components/DumiSiteProvider';
import { Highlighter } from '../../components/Highlighter';
import { useSiteStore } from '../../store';

interface SourceCodeProps {
  lang: string;
  children: string;
  title?: string;
}

const SourceCode: FC<SourceCodeProps> = (props) => {
  const { children, lang, title } = props;
  const theme = useSiteStore((s) => s.siteData.themeConfig.syntaxTheme);
  if (title) {
    const items: TabsProps['items'] = [
      {
        key: Math.random().toString(36),
        label: title,
        children: (
          <Highlighter syntaxThemes={theme} language={lang}>
            {children}
          </Highlighter>
        ),
      },
    ];
    return (
      <ThemeProvider>
        <Tabs items={items} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <Highlighter syntaxThemes={theme} language={lang}>
        {children}
      </Highlighter>
    </ThemeProvider>
  );
};

export default SourceCode;
