import { type VueParserOptions } from '@dumijs/preset-vue/dist/atomParser';
import type { IApi } from 'dumi';

export default (api: IApi) => {
  api.modifyBabelPresetOpts((memo) => {
    memo.presetTypeScript = {
      allExtensions: true,
      isTSX: true,
    };
    return memo;
  });

  api.modifyConfig((memo) => {
    const userConfig = api.userConfig;

    const vueConfig = userConfig?.vue;

    const parserOptions: Partial<VueParserOptions> = {
      directory: vueConfig?.directory ?? api.pkg.repository?.directory,
      tsconfigPath: vueConfig?.tsconfigPath,
      checkerOptions: vueConfig?.checkerOptions,
    };

    const entryFile = userConfig?.resolve?.entryFile;
    const resolveDir = api.cwd;
    const options = {
      entryFile,
      resolveDir,
    };
    Object.assign(options, parserOptions);

    if (!options.entryFile || !options.resolveDir) return memo;
    return memo;
  });
};
