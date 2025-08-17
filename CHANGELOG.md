# Changelog

## [Version&nbsp;1.3.0](https://github.com/39plu/dumi-theme-skk/compare/v1.2.0...v1.3.0)

<sup>Released on **2025-08-17**</sup>

#### ✨ 新特性

- 代码高亮统一采用 shiki.

#### 🐛 修复

- 修复移除 Prism 之后代码报错问题.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- 代码高亮统一采用 shiki ([5f2281e](https://github.com/39plu/dumi-theme-skk/commit/5f2281e))

#### What's fixed

- 修复移除 Prism 之后代码报错问题 ([764aab0](https://github.com/39plu/dumi-theme-skk/commit/764aab0))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;1.2.0](https://github.com/39plu/dumi-theme-skk/compare/v1.1.0...v1.2.0)

<sup>Released on **2025-08-17**</sup>

#### ✨ 新特性

- 代码组展示优化，自动识别文件名，添加文件图标.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- 代码组展示优化，自动识别文件名，添加文件图标 ([3e0cae2](https://github.com/39plu/dumi-theme-skk/commit/3e0cae2))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version&nbsp;1.1.0](https://github.com/39plu/dumi-theme-skk/compare/v1.0.0...v1.1.0)

<sup>Released on **2025-08-10**</sup>

#### ✨ 新特性

- 移除测试配置, 设置 npm 的 token.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- 移除测试配置 ([ad3f070](https://github.com/39plu/dumi-theme-skk/commit/ad3f070))
- 设置 npm 的 token ([f093cb7](https://github.com/39plu/dumi-theme-skk/commit/f093cb7))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## Version&nbsp;1.0.0

<sup>Released on **2025-08-10**</sup>

#### ✨ 新特性

- footerConfig 添加 copyright 配置, example 调整和移除 Changelog 内容, Feature atomId 插值变量风格转换, Feature 组件支持外部打开链接, footer 支持配置, navbar 支持外链, sidebar 和 navbar 支持嵌套, sidebar 和 navbar 支持嵌套, support lazy load demo, 主题包支持配置 ApiHeader，为组件增加头部引导, 主题算法支持自定义主色变量, 从 antd-style 站点迁移 dumi 主题包, 使用 shiki 优化高亮语法显示, 初步实现一版 OKLCH 色板, 增加 ApiHeader 组件导出, 增加 ThemeConfig 类型定义配置文件, 完善并导出 Highlighter 语法高亮组件, 实现 demo 颗粒度的主题切换, 实现 SSR 样式抽取能力, 实现主色与功能色的关联关系, 导出 DumiSiteProvider, 导出 Footer、Hero、Feature 组件, 导出 Toc 组件, 导出主题包的 useSiteStore 与部分 selectors，供外部自定义使用, 将 dumi-theme-antd-style 替换为自己的主题名称, 提供初步适配配置, 支持 codePlacement 语法来控制预览器方向, 支持 dumi 的 socialLinks 配置, 支持 sidebar:false 的 markdown 配置, 支持 tocDepth 的 markdown 配置, 支持并优化 Tabs 样式, 支持开启 SSR 预渲染, 支持文档级别的 token 配置, 支持显示色板, 支持更加灵活的 ApiHeader 配置能力, 支持站点主题全局继承功能, 支持自定义主题 token 的初始值配置, 支持通过配置隐藏 header 的 name 部分, 支持配置是否在首页显示自定义内容, 支持隐藏首页配置, 新增 ContentFooter ，支持文档上下篇切换的交互, 更改 pnpm 版本和 node 版本, 更改 repository 的 url, 模拟发布, 测试配置的 NPM_TOKEN 是否有权限, 测试配置的 NPM_TOKEN 是否正确, 添加 ApiHeader slot，支持外部替换 serviceList, 添加 LangSwitch 组件, 生成 pnpm-lock.yaml 文件, 移除 lockfile 配置, 补充 Hero config 配置, 配置 GITHUB_TOKEN 环境变量, 默认隔离 demo 与文档站点的主题样式.

#### 🐛 修复

- **feature**: Add regex to match image resources.
- **slots-foolter-index**: 修复 Footer 中支持自定义 columns 数据问题.
- Fix LazyLoad componentDidMount dom no use error, fix zustand v4.4 Breaking Change, LazyLoad add loading dom, page-tab internationalization error, remove border-radius of Toc, 优化 ApiHeader 组件的 pkg 字段兜底逻辑, 优化 footer 展示内容, 修复 themeConfig.prefersColor.switch 配置不生效的问题, 修复使用者无法在主题外部监听全局深色浅色模式切换的问题, 修复侧边栏出现滚动条时底部部分隐藏的问题, 修复手机端的展示问题, 修复类型错误,使 CI 流程恢复正常, 修复页面白屏错误, 修复顶部首页、上下篇多语言问题, 修正 antd-style 移除 styled 方法的 Breaking Change, 修正 ApiHeaderConfig 类型定义, 修正 contentMaxWidth 不支持字符串的问题, 修正 footer issue 的链接问题, 修正 footer 展示内容, 修正 GithubButton 无法正常渲染的问题, 修正 Hero 链接打开不正确的问题, 修正 heroTitle 选取时有逻辑丢失的问题, 修正 LazyLoading 使得 Demo 加载不出来的问题, 修正 link 无法跳转新页面的问题, 修正 markdown 没有 lang 时会报错的问题, 修正 tabs 模式下 toc 报错的问题, 修正 title 无法替换的问题, 修正 WEB 端锚点滚动后位置仍然看不到的问题, 修正主题包 postinstall 污染问题, 修正任意编辑框内输入斜杠时搜索框抢夺焦点的问题, 修正国际化问题, 修正外链无法打开新标签的问题, 修正导入依赖问题, 修正文本前后缀空格截断的问题，并补充截取的 props, 修正浏览器高度不够时 Menu 无法完整显示的问题, 修正缺少默认导出的问题, 修正锚点滚动后位置仍然看不到的问题, 修正预览器引入造成的循环问题, 修正首屏 SSR 的内容不正确的 bug, 修正首页白屏的问题, 修正默认的语法高亮不准确的问题, 兼容 frontmatter 与 themeConfig, 将 antd 作为 deps，修正不使用 antd 的组件库无法正常打开文档的问题, 将 styled-components 替换为 @emotion/styled， 减少产物体积, 支持 18 以下的 React 版本, 没有配置 logo 字段时不展示 Logo 图, 移除 StrictMode, 补充 Footer 中的 Ant Design 官网, 补充 module 入口, 补充导出 store 类型定义, 补充导出 store 类型定义, 补充插件 key，修正安装报错, 适配 antd-style 的实现.

#### 👷 构建系统

- Update deps, 优化依赖关系， @ant-design/icons 作为 peerDeps, 修改 Features 类型定义, 修正版本号问题, 升级 antd-style 版本, 升级 antd-style 版本, 基于 antd-style 重构 ssr 实现, 导出 HighlighterSyntaxTheme 类型, 补充类型定义, 补充类型定义导出, 调整 chroma.js 作为 deps 依赖, 调整 Features 类型定义.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- footerConfig 添加 copyright 配置, closes [#58](https://github.com/39plu/dumi-theme-skk/issues/58) ([341021b](https://github.com/39plu/dumi-theme-skk/commit/341021b))
- Example 调整和移除 Changelog 内容 ([460f79d](https://github.com/39plu/dumi-theme-skk/commit/460f79d))
- Feature atomId 插值变量风格转换, closes [#78](https://github.com/39plu/dumi-theme-skk/issues/78) [#74](https://github.com/39plu/dumi-theme-skk/issues/74) ([7498522](https://github.com/39plu/dumi-theme-skk/commit/7498522))
- Feature 组件支持外部打开链接 ([62e2c29](https://github.com/39plu/dumi-theme-skk/commit/62e2c29))
- Footer 支持配置 ([71eef12](https://github.com/39plu/dumi-theme-skk/commit/71eef12))
- Navbar 支持外链, closes [#72](https://github.com/39plu/dumi-theme-skk/issues/72) ([13fe23c](https://github.com/39plu/dumi-theme-skk/commit/13fe23c))
- Sidebar 和 navbar 支持嵌套 ([0e7e963](https://github.com/39plu/dumi-theme-skk/commit/0e7e963))
- Sidebar 和 navbar 支持嵌套 ([0f815cb](https://github.com/39plu/dumi-theme-skk/commit/0f815cb))
- Support lazy load demo, closes [#44](https://github.com/39plu/dumi-theme-skk/issues/44) ([89b24d1](https://github.com/39plu/dumi-theme-skk/commit/89b24d1))
- 主题包支持配置 ApiHeader，为组件增加头部引导 ([53d8aaf](https://github.com/39plu/dumi-theme-skk/commit/53d8aaf))
- 主题算法支持自定义主色变量 ([61d5d8a](https://github.com/39plu/dumi-theme-skk/commit/61d5d8a))
- 从 antd-style 站点迁移 dumi 主题包 ([a62f454](https://github.com/39plu/dumi-theme-skk/commit/a62f454))
- 使用 shiki 优化高亮语法显示 ([7bc49bf](https://github.com/39plu/dumi-theme-skk/commit/7bc49bf))
- 初步实现一版 OKLCH 色板 ([6cca155](https://github.com/39plu/dumi-theme-skk/commit/6cca155))
- 增加 ApiHeader 组件导出 ([f597ab0](https://github.com/39plu/dumi-theme-skk/commit/f597ab0))
- 增加 ThemeConfig 类型定义配置文件 ([1bbbbe7](https://github.com/39plu/dumi-theme-skk/commit/1bbbbe7))
- 完善并导出 Highlighter 语法高亮组件 ([4c524d7](https://github.com/39plu/dumi-theme-skk/commit/4c524d7))
- 实现 demo 颗粒度的主题切换 ([89cd105](https://github.com/39plu/dumi-theme-skk/commit/89cd105))
- 实现 SSR 样式抽取能力 ([760b521](https://github.com/39plu/dumi-theme-skk/commit/760b521))
- 实现主色与功能色的关联关系 ([64e3350](https://github.com/39plu/dumi-theme-skk/commit/64e3350))
- 导出 DumiSiteProvider ([01a3292](https://github.com/39plu/dumi-theme-skk/commit/01a3292))
- 导出 Footer、Hero、Feature 组件 ([6d3b425](https://github.com/39plu/dumi-theme-skk/commit/6d3b425))
- 导出 Toc 组件 ([5c7cdc3](https://github.com/39plu/dumi-theme-skk/commit/5c7cdc3))
- 导出主题包的 useSiteStore 与部分 selectors，供外部自定义使用 ([ebf672c](https://github.com/39plu/dumi-theme-skk/commit/ebf672c))
- 将 dumi-theme-antd-style 替换为自己的主题名称 ([4eeae87](https://github.com/39plu/dumi-theme-skk/commit/4eeae87))
- 提供初步适配配置 ([f2d0af6](https://github.com/39plu/dumi-theme-skk/commit/f2d0af6))
- 支持 codePlacement 语法来控制预览器方向 ([55b461a](https://github.com/39plu/dumi-theme-skk/commit/55b461a))
- 支持 dumi 的 socialLinks 配置 ([13b112e](https://github.com/39plu/dumi-theme-skk/commit/13b112e))
- 支持 sidebar:false 的 markdown 配置 ([9c5102c](https://github.com/39plu/dumi-theme-skk/commit/9c5102c))
- 支持 tocDepth 的 markdown 配置 ([16c1e89](https://github.com/39plu/dumi-theme-skk/commit/16c1e89))
- 支持并优化 Tabs 样式 ([63fff30](https://github.com/39plu/dumi-theme-skk/commit/63fff30))
- 支持开启 SSR 预渲染 ([1fb2667](https://github.com/39plu/dumi-theme-skk/commit/1fb2667))
- 支持文档级别的 token 配置 ([438e260](https://github.com/39plu/dumi-theme-skk/commit/438e260))
- 支持显示色板 ([51c45ed](https://github.com/39plu/dumi-theme-skk/commit/51c45ed))
- 支持更加灵活的 ApiHeader 配置能力 ([063062c](https://github.com/39plu/dumi-theme-skk/commit/063062c))
- 支持站点主题全局继承功能, closes [#42](https://github.com/39plu/dumi-theme-skk/issues/42) ([886a77b](https://github.com/39plu/dumi-theme-skk/commit/886a77b))
- 支持自定义主题 token 的初始值配置, closes [#9](https://github.com/39plu/dumi-theme-skk/issues/9) ([5324555](https://github.com/39plu/dumi-theme-skk/commit/5324555))
- 支持通过配置隐藏 header 的 name 部分, closes [#117](https://github.com/39plu/dumi-theme-skk/issues/117) ([8b84f32](https://github.com/39plu/dumi-theme-skk/commit/8b84f32))
- 支持配置是否在首页显示自定义内容, closes [#105](https://github.com/39plu/dumi-theme-skk/issues/105) ([b829abe](https://github.com/39plu/dumi-theme-skk/commit/b829abe))
- 支持隐藏首页配置 ([619b9ed](https://github.com/39plu/dumi-theme-skk/commit/619b9ed))
- 新增 ContentFooter ，支持文档上下篇切换的交互 ([2dc9af7](https://github.com/39plu/dumi-theme-skk/commit/2dc9af7))
- 更改 pnpm 版本和 node 版本 ([027f3e9](https://github.com/39plu/dumi-theme-skk/commit/027f3e9))
- 更改 repository 的 url ([a67afd5](https://github.com/39plu/dumi-theme-skk/commit/a67afd5))
- 模拟发布 ([34bae2f](https://github.com/39plu/dumi-theme-skk/commit/34bae2f))
- 测试配置的 NPM_TOKEN 是否有权限 ([0c5e036](https://github.com/39plu/dumi-theme-skk/commit/0c5e036))
- 测试配置的 NPM_TOKEN 是否正确 ([de06c92](https://github.com/39plu/dumi-theme-skk/commit/de06c92))
- 添加 ApiHeader slot，支持外部替换 serviceList ([05c1f07](https://github.com/39plu/dumi-theme-skk/commit/05c1f07))
- 添加 LangSwitch 组件 ([84827b8](https://github.com/39plu/dumi-theme-skk/commit/84827b8))
- 生成 pnpm-lock.yaml 文件，移除 lockfile 配置 ([6285f0b](https://github.com/39plu/dumi-theme-skk/commit/6285f0b))
- 补充 Hero config 配置 ([e6ac81c](https://github.com/39plu/dumi-theme-skk/commit/e6ac81c))
- 配置 GITHUB_TOKEN 环境变量 ([9ffd6a8](https://github.com/39plu/dumi-theme-skk/commit/9ffd6a8))
- 默认隔离 demo 与文档站点的主题样式 ([02d36a1](https://github.com/39plu/dumi-theme-skk/commit/02d36a1))

#### What's fixed

- **feature**: Add regex to match image resources, closes [#48](https://github.com/39plu/dumi-theme-skk/issues/48) ([7ceb589](https://github.com/39plu/dumi-theme-skk/commit/7ceb589))
- **slots-foolter-index**: 修复 Footer 中支持自定义 columns 数据问题, closes [#87](https://github.com/39plu/dumi-theme-skk/issues/87) ([1d1c8a4](https://github.com/39plu/dumi-theme-skk/commit/1d1c8a4))
- Fix LazyLoad componentDidMount dom no use error, closes [#54](https://github.com/39plu/dumi-theme-skk/issues/54) ([2094543](https://github.com/39plu/dumi-theme-skk/commit/2094543))
- Fix zustand v4.4 Breaking Change, closes [#85](https://github.com/39plu/dumi-theme-skk/issues/85) ([cf9d07a](https://github.com/39plu/dumi-theme-skk/commit/cf9d07a))
- LazyLoad add loading dom, closes [#45](https://github.com/39plu/dumi-theme-skk/issues/45) ([7d45403](https://github.com/39plu/dumi-theme-skk/commit/7d45403))
- Page-tab internationalization error, closes [#89](https://github.com/39plu/dumi-theme-skk/issues/89) ([c27037d](https://github.com/39plu/dumi-theme-skk/commit/c27037d))
- Remove border-radius of Toc, closes [#103](https://github.com/39plu/dumi-theme-skk/issues/103) ([20fd7f9](https://github.com/39plu/dumi-theme-skk/commit/20fd7f9))
- 优化 ApiHeader 组件的 pkg 字段兜底逻辑 ([9d3ad37](https://github.com/39plu/dumi-theme-skk/commit/9d3ad37))
- 优化 footer 展示内容 ([3377525](https://github.com/39plu/dumi-theme-skk/commit/3377525))
- 修复 themeConfig.prefersColor.switch 配置不生效的问题, closes [#110](https://github.com/39plu/dumi-theme-skk/issues/110) ([69882d1](https://github.com/39plu/dumi-theme-skk/commit/69882d1))
- 修复使用者无法在主题外部监听全局深色浅色模式切换的问题, closes [#82](https://github.com/39plu/dumi-theme-skk/issues/82) [#74](https://github.com/39plu/dumi-theme-skk/issues/74) ([98b8f29](https://github.com/39plu/dumi-theme-skk/commit/98b8f29))
- 修复侧边栏出现滚动条时底部部分隐藏的问题, closes [#35](https://github.com/39plu/dumi-theme-skk/issues/35) ([af7c69c](https://github.com/39plu/dumi-theme-skk/commit/af7c69c))
- 修复手机端的展示问题 ([2bc9371](https://github.com/39plu/dumi-theme-skk/commit/2bc9371))
- 修复类型错误，使 CI 流程恢复正常, closes [#115](https://github.com/39plu/dumi-theme-skk/issues/115) ([3fb766a](https://github.com/39plu/dumi-theme-skk/commit/3fb766a))
- 修复页面白屏错误, closes [#122](https://github.com/39plu/dumi-theme-skk/issues/122) ([08c37bb](https://github.com/39plu/dumi-theme-skk/commit/08c37bb))
- 修复顶部首页、上下篇多语言问题, closes [#92](https://github.com/39plu/dumi-theme-skk/issues/92) ([cbc6e93](https://github.com/39plu/dumi-theme-skk/commit/cbc6e93))
- 修正 antd-style 移除 styled 方法的 Breaking Change ([353df4b](https://github.com/39plu/dumi-theme-skk/commit/353df4b))
- 修正 ApiHeaderConfig 类型定义 ([87fcfda](https://github.com/39plu/dumi-theme-skk/commit/87fcfda))
- 修正 contentMaxWidth 不支持字符串的问题 ([7784d4a](https://github.com/39plu/dumi-theme-skk/commit/7784d4a))
- 修正 footer issue 的链接问题 ([5ed4bf4](https://github.com/39plu/dumi-theme-skk/commit/5ed4bf4))
- 修正 footer 展示内容 ([64568eb](https://github.com/39plu/dumi-theme-skk/commit/64568eb))
- 修正 GithubButton 无法正常渲染的问题 ([d30af71](https://github.com/39plu/dumi-theme-skk/commit/d30af71))
- 修正 Hero 链接打开不正确的问题, closes [#37](https://github.com/39plu/dumi-theme-skk/issues/37) ([17360aa](https://github.com/39plu/dumi-theme-skk/commit/17360aa))
- 修正 heroTitle 选取时有逻辑丢失的问题 ([33b2a1d](https://github.com/39plu/dumi-theme-skk/commit/33b2a1d))
- 修正 LazyLoading 使得 Demo 加载不出来的问题, closes [#63](https://github.com/39plu/dumi-theme-skk/issues/63) ([0a73d5d](https://github.com/39plu/dumi-theme-skk/commit/0a73d5d))
- 修正 link 无法跳转新页面的问题, closes [#24](https://github.com/39plu/dumi-theme-skk/issues/24) ([29cb658](https://github.com/39plu/dumi-theme-skk/commit/29cb658))
- 修正 markdown 没有 lang 时会报错的问题 ([8182b23](https://github.com/39plu/dumi-theme-skk/commit/8182b23))
- 修正 tabs 模式下 toc 报错的问题 ([b58686a](https://github.com/39plu/dumi-theme-skk/commit/b58686a))
- 修正 title 无法替换的问题 ([e5fe591](https://github.com/39plu/dumi-theme-skk/commit/e5fe591))
- 修正 WEB 端锚点滚动后位置仍然看不到的问题, closes [#32](https://github.com/39plu/dumi-theme-skk/issues/32) ([c1d43be](https://github.com/39plu/dumi-theme-skk/commit/c1d43be))
- 修正主题包 postinstall 污染问题 ([cd66889](https://github.com/39plu/dumi-theme-skk/commit/cd66889))
- 修正任意编辑框内输入斜杠时搜索框抢夺焦点的问题, closes [#23](https://github.com/39plu/dumi-theme-skk/issues/23) ([bfb290a](https://github.com/39plu/dumi-theme-skk/commit/bfb290a))
- 修正国际化问题 ([7b561c7](https://github.com/39plu/dumi-theme-skk/commit/7b561c7))
- 修正外链无法打开新标签的问题, closes [#57](https://github.com/39plu/dumi-theme-skk/issues/57) ([53c0f0e](https://github.com/39plu/dumi-theme-skk/commit/53c0f0e))
- 修正导入依赖问题 ([e927e16](https://github.com/39plu/dumi-theme-skk/commit/e927e16))
- 修正文本前后缀空格截断的问题，并补充截取的 props ([079bd86](https://github.com/39plu/dumi-theme-skk/commit/079bd86))
- 修正浏览器高度不够时 Menu 无法完整显示的问题, closes [#20](https://github.com/39plu/dumi-theme-skk/issues/20) ([078d511](https://github.com/39plu/dumi-theme-skk/commit/078d511))
- 修正缺少默认导出的问题 ([764c68a](https://github.com/39plu/dumi-theme-skk/commit/764c68a))
- 修正锚点滚动后位置仍然看不到的问题 ([0e6b2ad](https://github.com/39plu/dumi-theme-skk/commit/0e6b2ad))
- 修正预览器引入造成的循环问题 ([078f3ce](https://github.com/39plu/dumi-theme-skk/commit/078f3ce))
- 修正首屏 SSR 的内容不正确的 bug, closes [#62](https://github.com/39plu/dumi-theme-skk/issues/62) ([8a14b12](https://github.com/39plu/dumi-theme-skk/commit/8a14b12))
- 修正首页白屏的问题 ([31eb2be](https://github.com/39plu/dumi-theme-skk/commit/31eb2be))
- 修正默认的语法高亮不准确的问题 ([e225dfb](https://github.com/39plu/dumi-theme-skk/commit/e225dfb))
- 兼容 frontmatter 与 themeConfig ([4be5091](https://github.com/39plu/dumi-theme-skk/commit/4be5091))
- 将 antd 作为 deps，修正不使用 antd 的组件库无法正常打开文档的问题, closes [#51](https://github.com/39plu/dumi-theme-skk/issues/51) ([acfbad7](https://github.com/39plu/dumi-theme-skk/commit/acfbad7))
- 将 styled-components 替换为 @emotion/styled， 减少产物体积 ([616d464](https://github.com/39plu/dumi-theme-skk/commit/616d464))
- 支持 18 以下的 React 版本, closes [#11](https://github.com/39plu/dumi-theme-skk/issues/11) [#10](https://github.com/39plu/dumi-theme-skk/issues/10) ([bde6e23](https://github.com/39plu/dumi-theme-skk/commit/bde6e23))
- 没有配置 logo 字段时不展示 Logo 图 ([ff7e0be](https://github.com/39plu/dumi-theme-skk/commit/ff7e0be))
- 移除 StrictMode, closes [#34](https://github.com/39plu/dumi-theme-skk/issues/34) ([af0940f](https://github.com/39plu/dumi-theme-skk/commit/af0940f))
- 补充 Footer 中的 Ant Design 官网 ([89dd147](https://github.com/39plu/dumi-theme-skk/commit/89dd147))
- 补充 module 入口 ([bf9fd94](https://github.com/39plu/dumi-theme-skk/commit/bf9fd94))
- 补充导出 store 类型定义 ([a39e89b](https://github.com/39plu/dumi-theme-skk/commit/a39e89b))
- 补充导出 store 类型定义 ([6b6eed7](https://github.com/39plu/dumi-theme-skk/commit/6b6eed7))
- 补充插件 key，修正安装报错 ([e2a0cd6](https://github.com/39plu/dumi-theme-skk/commit/e2a0cd6))
- 适配 antd-style 的实现 ([0f98201](https://github.com/39plu/dumi-theme-skk/commit/0f98201))

#### Build system

- Update deps ([2b44aba](https://github.com/39plu/dumi-theme-skk/commit/2b44aba))
- 优化依赖关系， @ant-design/icons 作为 peerDeps ([edfd255](https://github.com/39plu/dumi-theme-skk/commit/edfd255))
- 修改 Features 类型定义 ([ba8751c](https://github.com/39plu/dumi-theme-skk/commit/ba8751c))
- 修正版本号问题 ([65f07b8](https://github.com/39plu/dumi-theme-skk/commit/65f07b8))
- 升级 antd-style 版本 ([444f75a](https://github.com/39plu/dumi-theme-skk/commit/444f75a))
- 升级 antd-style 版本 ([32f00b4](https://github.com/39plu/dumi-theme-skk/commit/32f00b4))
- 基于 antd-style 重构 ssr 实现, closes [#17](https://github.com/39plu/dumi-theme-skk/issues/17) ([df34526](https://github.com/39plu/dumi-theme-skk/commit/df34526))
- 导出 HighlighterSyntaxTheme 类型 ([f92f8fb](https://github.com/39plu/dumi-theme-skk/commit/f92f8fb))
- 补充类型定义 ([5effb5a](https://github.com/39plu/dumi-theme-skk/commit/5effb5a))
- 补充类型定义导出 ([c484203](https://github.com/39plu/dumi-theme-skk/commit/c484203))
- 调整 chroma.js 作为 deps 依赖 ([6a83037](https://github.com/39plu/dumi-theme-skk/commit/6a83037))
- 调整 Features 类型定义 ([3e51ff4](https://github.com/39plu/dumi-theme-skk/commit/3e51ff4))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>
