import checkVersion from '@dumijs/preset-vue/dist/vue/checkVersion';
import type { IApi } from 'dumi';
import registerTechStack from './techStack';
import modifyWebpackConfig from './webpack/index';

const VuePresetPlugin = (api: IApi) => {
  // 检查版本
  checkVersion(api);

  // 修改 webpack 配置
  modifyWebpackConfig(api);

  // 开启 vue3.2 新特性
  api.modifyDefaultConfig((config) => {
    // feature flags https://link.vuejs.org/feature-flags.
    config.define = {
      ...config.define,
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false, // vue3.4
    };
    return config;
  });

  // 注册技术栈
  registerTechStack(api);
};

export default VuePresetPlugin;
