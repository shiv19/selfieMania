const observableModule = require("data/observable");
const topmost = require('tns-core-modules/ui/frame').topmost;
const loadingIndicator = require('nativescript-loading-indicator').LoadingIndicator;
const firebase = require('../../shared/FirebaseService').getInstance();
const routes = require('../../shared/routes');

const loader = new loadingIndicator();
var options = {
  message: 'Loading...',
  progress: 0.65,
  android: {
    indeterminate: true,
    max: 100,
    progressNumberFormat: "%1d/%2d",
    progressPercentFormat: 0.53,
    progressStyle: 1,
    secondaryProgress: 1
  }
};

function LoginViewModel() {
  var viewModel = observableModule.fromObject({

    facebookLogin: function(args) {
      loader.show(options);
      setTimeout(function() {
        loader.hide();
        // args.object.page.frame.navigate(routes.Home);
        topmost().navigate(routes.Home);
      }, 5000)
      /*const page = args.object.page;
      loader.show(options);
      firebase.loginWithFacebook().then((response) => {
        try {
          firebase.getUser(response);
          loader.hide();
          page.frame.navigate({
            moduleName: routes.Home,
            animated: true,
            transition: {
              name: "slide",
              duration: 200,
              curve: "ease"
            }
          });
        } catch (e) {
          console.log(e.toString());
        }
      }).catch((err) => {
        loader.hide();
        console.log(err);
      });*/
    },

    googleLogin: function(args) {
      const page = args.object.page;
      loader.show(options);
      firebase.loginWithGoogle().then((response) => {
        try {
          firebase.getUser(response);
          loader.hide();
          page.frame.navigate({
            moduleName: routes.Home,
            animated: true,
            transition: {
              name: "slide",
              duration: 200,
              curve: "ease"
            }
          })
        } catch (e) {
          console.log(e.toString());
        }
      }).catch((err) => {
        loader.hide();
        console.log(err);
      });
    }
  });

  return viewModel;
}

module.exports = LoginViewModel;
