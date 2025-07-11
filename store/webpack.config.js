const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
var path = require("path");

module.exports = withModuleFederationPlugin({

  name: 'store',

  //remotes: {
  //  'account': 'http://localhost:4201/remoteEntry.js'
  //},

  //exposes: {
  //  './Component': './src/app/app.component.ts',
  //},

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),

    //'@angular/material/form-field': { singleton: true, strictVersion: false, requiredVersion: '^19.0.0' },
    //'@angular/material/input': { singleton: true, strictVersion: false, requiredVersion: '^19.0.0' },
    //'@angular/material/button': { singleton: true, strictVersion: false, requiredVersion: '^19.0.0' },
    //'@angular/forms': { singleton: true, strictVersion: false, requiredVersion: '^19.0.0' },

  },

});
