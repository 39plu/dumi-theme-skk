module.exports = {
  branches: ['main'],
  plugins: [['@semantic-release/npm', { tag: 'latest' }]],
  extends: ['semantic-release-config-gitmoji'],
};
