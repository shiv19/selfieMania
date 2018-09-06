const application = require('application');
const routes = require('./shared/routes');

// this line is needed for firebase to work properly
require('nativescript-plugin-firebase');

application.run({ moduleName: 'app-root' });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
