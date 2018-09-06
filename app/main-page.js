const FirebaseServices = require('./shared/FirebaseService');
const firebase = FirebaseServices.getInstance();
firebase.init().then(() => {}).catch(e => {});

let page;
exports.pageLoaded = function(args) {
  page = args.object;
};

exports.pageUnloaded = function(args) {
  page = null;
};
