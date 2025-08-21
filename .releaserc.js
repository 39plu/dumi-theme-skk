module.exports = {
  branches: ['main'],
  plugins: [
    // 1. 条件验证插件
    '@semantic-release/changelog', // 管理 CHANGELOG.md
    '@semantic-release/npm', // npm 发布
    '@semantic-release/github', // GitHub Release
    '@semantic-release/git', // Git 提交

    // 2. 核心分析/生成插件
    [
      '@semantic-release/commit-analyzer', // 提交分析
      {
        preset: 'angular', // 使用 angular 提交规范
        releaseRules: [
          // 要求同时满足 emoji + type
          { emoji: '🐛', type: 'fix', release: 'patch' }, // 🐛 fix: → patch
          { emoji: '✨', type: 'feat', release: 'minor' }, // ✨ feat: → minor
          { emoji: '💥', scope: '*', release: 'major' }, // 💥 BREAKING CHANGE: → major
          { type: 'perf', release: 'patch' },
          { type: 'revert', release: 'patch' },

          // 其他情况不发布（覆盖默认规则）
          { type: 'fix', release: false }, // 单独的 fix: 不发布
          { emoji: '🐛', release: false }, // 单独的 🐛 不发布
          { type: 'feat', release: false }, // 单独的 feat: 不发布
          { emoji: '✨', release: false }, // 单独的 ✨ 不发布
          { type: 'docs', release: false }, // 不触发发布
          { type: 'style', release: false },
          { type: 'chore', release: false },
        ],
        parserOpts: {
          // 允许解析 emoji（需配合 commitlint 或自定义提交规范）
          headerPattern: /^(:.*?:)\s*(?:(\w+):)?\s*(.*)$/,
        },
      },
    ],
    '@semantic-release/release-notes-generator', // 生成 Release Notes

    // 3. 发布阶段插件
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
        tarballDir: 'dist',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: ['dist/*.tgz'], // 可选：上传打包文件
      },
    ],

    // 4. 后处理插件
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'], // 自动提交的文件
        message: 'chore(release): ${nextRelease.version} [skip ci]',
      },
    ],
  ],
};
