const LoginViewModel = require("./login-view-model");
const loginViewModel = new LoginViewModel();

const FirebaseServices = require('~/shared/FirebaseService');
const firebase = FirebaseServices.getInstance();

function pageLoaded(args) {
  const page = args.object;
  page.bindingContext = loginViewModel;

  firebase.init()
    .then(() => {
      console.log('firebase.init done');
      const isLoggedIn = firebase.getLogin();
      if (isLoggedIn) {
        page.frame.navigate('main-page');
      } else {
        loginViewModel.set('loading', false);
      }
    }).catch((e) => {
      console.log(e);
    });
}

exports.pageLoaded = pageLoaded;
