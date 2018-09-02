  var frameModule = require("ui/frame");
  var HelpViewModel = require("./help-view-model");
  
  var helpViewModel = new HelpViewModel();
  
  function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = helpViewModel;
  }

  
  function showItems(args) {
    const container = args.view;
    const instructions = container.getChildAt(1);
    const flexLayout = container.getChildAt(0);
  
    const arrow = flexLayout.getChildAt(1);
  
    instructions.visibility = instructions.bindingContext.collapsed ? 'visible' : 'collapse';
    arrow.text = !instructions.bindingContext.collapsed ? '\uf107' : '\uf106';
  
    instructions.bindingContext.collapsed = !instructions.bindingContext.collapsed;
  }
  
  exports.showItems = showItems;
  
  exports.pageLoaded = pageLoaded;
