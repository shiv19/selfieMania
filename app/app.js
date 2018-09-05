const application = require('application');
const FirebaseServices = require('./shared/FirebaseService');
const routes = require('./shared/routes');
const firebase = FirebaseServices.getInstance();
firebase.init();
application.run({ moduleName: routes.Home });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
