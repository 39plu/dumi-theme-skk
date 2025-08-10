import { DumiSiteProvider, Highlighter } from '@39nyx/dumi-theme-skk';

const text = `import { DumiSiteProvider, Highlighter } from '@39nyx/dumi-theme-skk';`;

export default () => (
  <DumiSiteProvider>
    <Highlighter language={'js'}>{text}</Highlighter>
  </DumiSiteProvider>
);
