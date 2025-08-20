import { COMP_IDENTIFIER, CompileOptions } from '@dumijs/preset-vue/dist/compiler';
import { babelCore, babelPresetEnv, babelPresetTypeScript } from 'dumi/tech-stack-utils';
import { CompileResult, createCompiler } from './index';

const babel = babelCore();
const env = babelPresetEnv();
const typescript = babelPresetTypeScript();

export const compiler: {
  toCommonJS: (code: string) => any;
  compileSFC: (options: CompileOptions) => CompileResult;
  transformTS: (code: string, filename: string, options: any) => string;
} = createCompiler({
  babel,
  availablePlugins: {
    'vue-jsx': require.resolve('@dumijs/preset-vue/compiled/@vue/babel-plugin-jsx'),
  },
  availablePresets: { env, typescript },
});

export function compile(options: CompileOptions) {
  const { id, filename, code } = options;
  const [, lang] = filename.match(/[^.]+\.([^.]+)$/) || [];
  if (['js', 'jsx', 'ts', 'tsx'].includes(lang)) {
    return compiler.transformTS(code, filename, { lang });
  }
  const compiled = compiler.compileSFC(options);

  if (Array.isArray(compiled)) {
    return compiled;
  }
  let { js, css } = compiled;
  if (css) {
    js += `\n${COMP_IDENTIFIER}.__css__ = ${JSON.stringify(css)};`;
  }
  js += `\n${COMP_IDENTIFIER}.__id__ = "${id}";
    export default ${COMP_IDENTIFIER};`;
  return js;
}
