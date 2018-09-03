const firebase = require("nativescript-plugin-firebase");
const settings = require("tns-core-modules/application-settings");

function FirebaseService(){

  this.loginWithFacebook = function(){
    return firebase.login({
        type: firebase.LoginType.FACEBOOK,
        facebookOptions: {
          scope: ['public_profile', 'email', 'user_age_range']
        }
      }).then((result) => {
        // setString('uid', )
        console.log(result);
      }).catch((err) => {
        console.log(err);
      })
    };

  this.loginWithGoogle = function(){
    return firebase.login({
        type: firebase.LoginType.GOOGLE,
      }).then((result) => {
        console.log(result);
      }).catch((err) => {
        console.log(err);
      })
    };

  this.init = function() {
    firebase.init({

    }).then(function (instance) {
        console.log("firebase.init done");
      },
      function (error) {
        console.log("firebase.init error: " + error);
      });
  }
}

FirebaseService.getInstance = function() {
  return FirebaseService._instance;
};

FirebaseService._instance = new FirebaseService();

module.exports = FirebaseService;
