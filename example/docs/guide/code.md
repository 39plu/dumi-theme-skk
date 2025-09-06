---
order: 6
title: 代码块
group:
  title: 特性
  order: 2
---

## 代码块标题

例如

```jsx
/**
 * inline: true
 */
import SourceCode from 'dumi/theme/builtins/SourceCode';
const content = `
\`\`\`typescript [main.js]
let sum = 0
for (let i = 0; i < 10; i++) {
  console.log(i);
  sum += i;
}
console.log(\`Sum: \${sum}\`);
\`\`\`
`.trim();

export default () => <SourceCode lang="markdown">{content}</SourceCode>;
```

效果如下

```typescript [main.js]
let sum = 0;
for (let i = 0; i < 10; i++) {
  console.log(i);
  sum += i;
}
console.log(`Sum: ${sum}`);
```
