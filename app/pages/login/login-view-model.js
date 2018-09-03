var observableModule = require("data/observable");
const FirebaseService = require('../../shared/FirebaseService');
const firebase = FirebaseService.getInstance();

function LoginViewModel() {
  var viewModel = observableModule.fromObject({
    onButtonTap: function () {
      console.log("Button was pressed");
    },
    facebookLogin: function() {
      firebase.loginWithFacebook();
    },
    googleLogin: function() {
      firebase.loginWithGoogle();
    }
  });

  return viewModel;
}

module.exports = LoginViewModel;
