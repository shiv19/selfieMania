
var frameModule = require("ui/frame");

var LoginViewModel = require("./login-view-model");

var loginViewModel = new LoginViewModel();

function pageLoaded(args) {
  var page = args.object;
  page.bindingContext = loginViewModel;
}

exports.pageLoaded = pageLoaded;
