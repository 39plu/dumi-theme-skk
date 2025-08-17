import { Tabs, TabsProps } from 'antd';
import { ISourceCodeProps } from 'dumi/theme-default/builtins/SourceCode';
import React, { PropsWithChildren, ReactElement } from 'react';
import { LanguageIcon } from '../../components/LanguageIcon';

type Unpacked<T> = T extends (infer U)[] ? U : T;
type Item = Unpacked<Required<TabsProps>['items']>;

function toArray(children: any) {
  if (Array.isArray(children)) {
    return children;
  }
  return [children].filter((item) => item);
}

const CodeGroup: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const usefulChildren = toArray(children).filter(
    (child: any) => typeof child === 'object' && typeof child.type === 'function',
  ) as ReactElement<ISourceCodeProps>[];

  const items: TabsProps['items'] = usefulChildren.map<Item>((child, idx) => {
    const { lang, title } = child.props ?? {};

    const key = String(child.key ?? idx);
    const label = title || lang || 'txt';
    return {
      key: key,
      label: <LanguageIcon name={label} />, // fallback to txt if no lang and title
      children: child,
    };
  });
  return <Tabs items={items} />;
};

export default CodeGroup;
