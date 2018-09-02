var observableModule = require("data/observable");

function HelpViewModel() {
  var viewModel = observableModule.fromObject({
    faqs: [
      {
        question: 'How to vote',
        answer: 'You will find a photo of a popular model and  a normal person, you can click like on the better selfie.',
        collapsed: true
      },
      {
        question: 'How to upload',
        answer: 'Look at menu, the option, take a selfie. After that upload it.',
        collapsed: true
      },
      {
        question: 'How to view leaderboard',
        answer: 'Look at the menu, the option, top of selfies.',
        collapsed: true
      }
    ]
  });

  return viewModel;
}

module.exports = HelpViewModel;