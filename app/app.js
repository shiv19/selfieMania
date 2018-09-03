const application = require('application');
const FirebaseServices = require('./shared/FirebaseService');
const firebase = FirebaseServices.getInstance();
firebase.init();
application.run({ moduleName: 'pages/login/login-page' });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
