Package.describe({
  name: 'patrickml:react-modal',
  version: '2.1.0',
  summary: 'Lightweight ReactJS Modal',
  git: 'https://github.com/patrickml/react-modal',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use([
    "react@0.1.14",
    "jquery"
  ]);

  api.addFiles([
    'lib/react-modal.css'
  ], 'client');

  //Add jsx to server for ssr
  api.addFiles([
    'lib/react-modal.jsx',
    'lib/react-modal-mixin.jsx'
  ], ['server', 'client']);

  //Export to both client and server for ssr
  api.export([
    'Modal',
    'ReactModalMixin'
  ], ['client', 'server']);

});

Package.onTest(function(api) {

});
