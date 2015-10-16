Package.describe({
  name: 'patrickml:react-modal',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Lightweight ReactJS Modal',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/patrickml/react-modal',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use([
    "react",
    "jquery"
  ]);

  api.addFiles([
    'lib/react-modal.js',
    'lib/react-modal.jsx',
    'lib/react-modal.css'
  ], 'client');

  //Add jsx to server for ssr
  api.addFiles([
    'lib/react-modal.jsx'
  ], 'server');

  //Export to both client and server for ssr
  api.export([
    'Modal'
  ], ['client', 'server']);

});

Package.onTest(function(api) {

});
