const appSettings = require('application-settings');
// appSettings.setBoolean('isLoggedIn', false);
// const firebase = require('nativescript-plugin-firebase');
// firebase.logout().then(() => { console.log('logged out'); });
exports.onNavigatingTo = function(args) {
  if (args.isBackNavigation) {
    return;
  }

  // do something
};
