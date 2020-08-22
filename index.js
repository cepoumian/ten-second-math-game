$(document).ready(function() {
  var currQuest;

  var ranNumGen = function (size) {
    return Math.ceil(Math.random() * size);
  };

  var questGen = function () {
    var question = {};
    var num1 = ranNumGen(10);
    var num2 = ranNumGen(10);

    question.answer = num1 + num2;
    question.equation = String(num1) + " + " + String(num2);

    return question;

  };

  currQuest = questGen();
  $('#equation').text(currQuest.equation);
//console.log(currQuest.equation);

});