const FirebaseServices = require('./shared/FirebaseService');
const routes = require('./shared/routes');
const firebase = FirebaseServices.getInstance();
const observableModule = require('data/observable');
const frame = require('ui/frame');

let page;

exports.pageLoaded = function(args) {
  page = args.object;
};

exports.pageUnloaded = function(args) {
  page = null;
};
