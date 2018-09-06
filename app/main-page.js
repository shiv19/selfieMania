const FirebaseServices = require('./shared/FirebaseService');
const firebase = FirebaseServices.getInstance();
firebase.init().then(() => {}).catch(e => {});
