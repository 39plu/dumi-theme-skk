---
order: 5
title: 文件树
group:
  title: 特性
  order: 2
---

## 开启文件树

在`.dumirc.ts`中配置`fileTree`为`true`

```typescript
import { defineConfig } from 'dumi';

export default defineConfig({
  skk: {
    fileTree: true,
  },
});
```

## 语法

在 `::: file-tree` 容器，使用内置的 `Markdown` 无序列表语法 指定文件和目录的组织结构。 使用嵌套的列表项创建子目录。

```jsx
/**
 * inline: true
 */
import SourceCode from 'dumi/theme/builtins/SourceCode';
const content = `
:::file-tree
- docs
  - index.md
  - guide.md
- src
  - Foo
    - index.tsx
    - index.md
  - index.ts
- .dumirc.ts
- .gitignore
-  package.json
-  README.md
:::
`.trim();

export default () => <SourceCode lang="markdown">{content}</SourceCode>;
```

效果如下

:::file-tree

- docs
  - index.md
  - guide.md
- src
  - Foo
    - index.tsx
    - index.md
  - index.ts
- .dumirc.ts
- .gitignore
- package.json
- README.md
  :::

:::info{title=注意}
file-tree 和 :之间没有空格, 有空格会直接作为 markdown 语法解析
:::
