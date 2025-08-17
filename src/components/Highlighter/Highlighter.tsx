import { Loading3QuartersOutlined as Loading } from '@ant-design/icons';
import { useThemeMode } from 'antd-style';
import { memo, useEffect, useState } from 'react';
import { Center } from 'react-layout-kit';

import { useStyles } from './Highlighter.style';

import { highlightCode } from '@39nyx/dumi-theme-skk/components/Highlighter/useShiki';
import type { HighlighterProps } from './index';

type SyntaxHighlighterProps = Pick<
  HighlighterProps,
  'language' | 'type' | 'children' | 'syntaxThemes'
>;

const SyntaxHighlighter = memo<SyntaxHighlighterProps>(({ children, language, type = 'shiki' }) => {
  const { styles, theme } = useStyles();
  const { isDarkMode } = useThemeMode();
  const [loading, setLoading] = useState(false);
  const [html, setHtml] = useState<string>(`<pre>${children}</pre>`);

  useEffect(() => {
    setLoading(true);
    highlightCode(children, language, isDarkMode)
      .then((res) => {
        setHtml(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [children, isDarkMode]);

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
        className={styles.shiki}
      />
      {loading && (
        <Center horizontal gap={8} className={styles.loading}>
          <Loading spin style={{ color: theme.colorTextTertiary }} />
          shiki 着色器准备中...
        </Center>
      )}
    </>
  );
});

export default SyntaxHighlighter;
