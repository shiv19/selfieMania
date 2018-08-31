var observableModule = require("data/observable");

function HelpViewModel() {
    var viewModel = observableModule.fromObject({
        items: [
            {
              title: "1", footer: "10", headerText: "First", footerText: "4",
              items: [
                { image: "~/images/bg.jpg", text: "Stop" },
                { text: "Drop", image: "~/images/bg.jpg" }
              ]
            }
          ]      
    });
  
    return viewModel;
  }
  
  module.exports = HelpViewModel;