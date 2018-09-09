const firebase = require('nativescript-plugin-firebase');
const settings = require('tns-core-modules/application-settings');

function FirebaseService() {

  this.setLogin = function() {
    settings.setBoolean('isLoggedIn', true);
  };

  this.getLogin = function() {
    return settings.getBoolean('isLoggedIn', false);
  };

  this.getUser = function(userData) {
    const user = firebase.firestore.collection('users').doc(userData.uid);
    if (user) {
      this.setUser(userData.uid);

      return user;
    } else {
      this.createUser(userData).then(doc => {
        this.setUser(doc.uid);

        return doc;
      });
    }
  };

  this.setUser = function(uid) {
    this.setLogin();
    settings.setString('uid', uid);
  };

  this.createUser = function(user) {
    const users = firebase.firestore.collection('users');

    return new Promise((resolve) => {
      users.doc(user.uid).set({
        name: user.name,
        email: user.email,
        img: user.profileImageURL,

      }).then(documentRef => {
         resolve(documentRef);
        console.log(`user added: ${documentRef}`);
      });
    });
  };

  this.loginWithFacebook = function() {
    return new Promise((resolve, reject) => {
      firebase.login({
        type: firebase.LoginType.FACEBOOK,
        facebookOptions: {
          scope: ['public_profile', 'email', 'user_age_range']
        }
      }).then((result) => {

        resolve(result);
        // setString('uid', )
        console.log(result);
      }).catch((err) => {
        reject(err);
        console.log(err);
      });
    });
    };

  this.loginWithGoogle = function() {
    return new Promise((resolve, reject) => {
      firebase.login({
        type: firebase.LoginType.GOOGLE,
      }).then((result) => {
        resolve(result);
        console.log(result);
      }).catch((err) => {
        reject(err);
        console.log(err);
      });
    });
    };

  this.init = function() {
    if (!FirebaseService.initialised) {
      FirebaseService.initialised = true;

      return firebase.init();
    } else {
      return Promise.resolve();
    }
  };
}

FirebaseService.getInstance = function() {
  return FirebaseService._instance;
};

FirebaseService._instance = new FirebaseService();
FirebaseService.initialised = false;

module.exports = FirebaseService;
