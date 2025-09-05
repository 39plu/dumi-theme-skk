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

:::

目前支持的文件图标有

- pnpm
- yarn
- npm
- ts
- tsx
- vue

```vue
<script setup lang="ts">
import { type Ref, ref, useTemplateRef } from 'vue';

const scrollHeight: Ref<number> = ref(100);

const direction = ref('top');

const scrollRef = useTemplateRef('scrollRef');

function scrollTo() {
  scrollRef.value?.scrollTo({
    [direction.value]: scrollHeight.value,
    behavior: 'smooth',
  });
}
</script>

<template>
  <div>
    <div ref="scrollRef" class="scroll-container">
      <div class="scroll-content">
        <p v-for="i in 100" :key="i">内容 {{ i }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-container {
  height: 200px;
  overflow: auto;
}
</style>
```
