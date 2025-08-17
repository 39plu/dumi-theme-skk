import { EnableBy } from '@umijs/core/dist/types';
import type { IApi } from 'dumi';
import SSRPlugin from './SSRPlugin';
import VuePresetPlugin from './VuePresetPlugin';

/*
 * SSR 抽取样式
 */
const SkkPlugin = (api: IApi) => {
  api.describe({
    key: '@39nyx/dumi-theme-skk',
  });

  api.describe({
    key: 'skk',
    config: {
      schema({ zod }) {
        return zod.object({
          enableVue: zod.boolean().optional(),
          directory: zod.string().optional(),
          tsconfigPath: zod.string().optional(),
          checkerOptions: zod.object({}).optional(),
          compiler: zod
            .object({
              babelStandaloneCDN: zod.string().optional(),
            })
            .optional(),
        });
      },
    },
    enableBy: EnableBy.config,
  });

  if (api.userConfig.skk) {
    // 开启Vue解析插件
    if (api.userConfig.skk.enableVue) {
      console.log('启用vue解析插件');
      VuePresetPlugin(api);
    }
  }

  // 如果没有开启 SSR，则啥也不做
  if (api.userConfig.ssr) {
    SSRPlugin(api);
  }
};

export default SkkPlugin;
