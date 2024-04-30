module.exports = {
  branches: ['production', { name: 'staging', prerelease: true }, { name: 'develop', prerelease: true }],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version}\n\n${nextRelease.notes}',
      },
    ],
    [
      '@semantic-release/github',
      {
        github: 'https://github.com/mseba02/paws',
        assets: [
          // { path: 'build/index.js', label: 'v${nextRelease.version}.js' },
          { path: 'CHANGELOG.md', label: 'Change Log' },
        ],
      },
    ],
  ],
};
