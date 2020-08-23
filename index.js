$(document).ready(function() {
  var currQuest;
  var interval;
  var timeLeft = 10;

  var $userInput = $('#user-input'),
      $equation = $('#equation'),
      $timeLeft = $('#time-left');

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
    startGame();
    checkAnswer(Number($(this).val()), currQuest.answer);
  });

  var updateTimeLeft = function (amount) {
    timeLeft += amount;
    $timeLeft.text(timeLeft);
  };

  var startGame = function () {
    if (!interval) {
      if (timeLeft === 0) {
        updateTimeLeft(10);
      }
      interval = setInterval(function () {
        updateTimeLeft(-1);
        if (timeLeft === 0) {
          clearInterval(interval);
          interval = undefined;
        }
      }, 1000);      
    }
  };

  renNewQuest();

});