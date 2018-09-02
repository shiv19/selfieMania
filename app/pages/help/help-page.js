  const frameModule = require("ui/frame");
  const HelpViewModel = require("./help-view-model");
  
  const helpViewModel = new HelpViewModel();
  
  exports.pageLoaded = function (args) {
    const page = args.object;
    page.bindingContext = helpViewModel;
  }

  
  exports.showItems = function (args) {
    const container = args.view;
    const instructions = container.getChildAt(1);
    const flexLayout = container.getChildAt(0);
  
    const arrow = flexLayout.getChildAt(1);
  
    instructions.visibility = instructions.bindingContext.collapsed ? 'visible' : 'collapse';
    arrow.text = !instructions.bindingContext.collapsed ? '\uf107' : '\uf106';
  
    instructions.bindingContext.collapsed = !instructions.bindingContext.collapsed;
  }
