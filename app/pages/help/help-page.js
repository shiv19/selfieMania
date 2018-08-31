
exports.onNavigatingTo = function(args) {
  if (args.isBackNavigation) {
    return;
  }


var frameModule = require("ui/frame");
var HelpViewModel = require("./help-view-model");

var helpViewModel = new HelpViewModel();

function pageLoaded(args) {
  /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
  var page = args.object;

  /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and JavaScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
  page.bindingContext = helpViewModel;
}

/*
Exporting a function in a NativeScript code-behind file makes it accessible
to the file’s corresponding XML file. In this case, exporting the pageLoaded
function here makes the pageLoaded="pageLoaded" binding in this page’s XML
file work.
*/
exports.pageLoaded = pageLoaded;
  // do something
};
