---
title: 代码分组
---

需要将多代码块合并成一个分组进行展示时，可以使用 CodeGroup 语法，例如：

```jsx
/**
 * inline: true
 */
import SourceCode from 'dumi/theme/builtins/SourceCode';
const content = `
:::code-group

\`\`\`bash [pnpm]
pnpm add @39nyx/dumi-theme-skk
\`\`\`

\`\`\`bash [yarn]
yarn add @39nyx/dumi-theme-skk
\`\`\`

\`\`\`bash [npm]
npm install @39nyx/dumi-theme-skk
\`\`\`

\`\`\`ts [.dumirc.ts] {3}
import { defineConfig } from 'dumi';

export default defineConfig({
  // ...
});
\`\`\`

\`\`\`tsx | pure [demo.tsx]
import React from 'react';

export default () => <>Demo 演示</>;
\`\`\`

\`\`\`vue [App.vue]
<script setup>
  import { ref } from 'vue'

  const msg = ref('Hello World!')
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>
\`\`\`
:::
`.trim();

export default () => <SourceCode lang="markdown">{content}</SourceCode>;
```

效果如下：

:::code-group

```shell [pnpm]
pnpm add @39nyx/dumi-theme-skk
```

```shell [yarn]
yarn add @39nyx/dumi-theme-skk
```

```shell [npm]
npm install @39nyx/dumi-theme-skk
```

```ts [.dumirc.ts] {3}
import { defineConfig } from 'dumi';

export default defineConfig({
  // ...
});
```

```tsx | pure [demo.tsx]
import React from 'react';

export default () => <>Demo 演示</>;
```

```vue [App.vue]
<script setup>
import { ref } from 'vue';

const msg = ref('Hello World!');
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>
```

:::

目前支持的文件图标有

- pnpm
- yarn
- npm
- ts
- tsx
- vue
