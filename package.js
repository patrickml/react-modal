Package.describe({
  name: 'patrickml:react-modal',
  version: '3.0.0',
  summary: 'Lightweight ReactJS Modal',
  git: 'https://github.com/patrickml/react-modal',
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');

  api.use([
    'react',
    'tmeasday:check-npm-versions',
    'fourseven:scss',
  ]);

  api.mainModule('entry.js', ['client', 'server']);

  api.addFiles([
    'lib/_react-modal.scss',
  ], 'client', { isImport: true });
});

Package.onTest(function(api) { });
