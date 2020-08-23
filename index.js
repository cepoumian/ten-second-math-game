$(document).ready(function() {
  var currQuest;
  var timeLeft = 10;

  var $userInput = $('#user-input'),
      $equation = $('#equation');

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

  var renNewQuest = function () {
    currQuest = questGen();
    $equation.text(currQuest.equation);    
  };

  var checkAnswer = function (userInput, answer) {
    if (userInput === answer) {
      renNewQuest();
      $userInput.val('');
      updateTimeLeft(+1);
    }
  };

  $userInput.on('keyup', function() {
    checkAnswer(Number($(this).val()), currQuest.answer);
  });

  var updateTimeLeft = function (amount) {
    timeLeft += amount;
    $('#time-left').text(timeLeft);
  };

  var interval = setInterval(function () {
    updateTimeLeft(-1);
    if (timeLeft === 0) {
      clearInterval(interval);
    }
    console.log(timeLeft);
  }, 1000);

  renNewQuest();

});