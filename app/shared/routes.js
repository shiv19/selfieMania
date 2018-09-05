const firebase = require('./FirebaseService').getInstance();

const Routes = {
  Explore: 'pages/explore/explore-page',
  Help: 'pages/help/help-page',
  Profile: 'pages/profile/profile-page',
  Selfie: 'pages/selfie/selfie-page',
  Login: 'pages/login/login-page',
  Home: firebase.getLogin ? 'app-root' : 'pages/login/login-page'
};

module.exports = Routes;
