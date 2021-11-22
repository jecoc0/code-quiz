var quizPanel = document.querySelector('.quiz-panel')
var frontPage = document.querySelector('.front-page')
var startButton = document.querySelector('#start-quiz')
var questionDisplay = document.querySelector('.question-display')
var optionDisplay1 = document.querySelector('#button-1')
var optionDisplay2 = document.querySelector('#button-2')
var optionDisplay3 = document.querySelector('#button-3')
var optionDisplay4 = document.querySelector('#button-4')
var buttons = document.querySelector('.options');
var timerEl= document.getElementById('countdown');
var initials = document.querySelector('.initials')
var saveButton = document.querySelector('.saveButton')
var scoreBoard = document.querySelector('.scores')
var highScoreButton = document.querySelector('.high-scores')
var list = document.querySelector('.list')

var currentQuestion = 0
var timeLeft = 10;
var userScore = 0
var userAnswer = ""

var highScores = []


 // Display quiz array/object in html elements
var pullQuestion = function() {
  questionDisplay.textContent = quizQuestions[currentQuestion].question
  optionDisplay1.textContent = quizQuestions[currentQuestion].possible[0]
  optionDisplay2.textContent = quizQuestions[currentQuestion].possible[1]
  optionDisplay3.textContent = quizQuestions[currentQuestion].possible[2]
  optionDisplay4.textContent = quizQuestions[currentQuestion].possible[3]
}

// hide quiz element
var hideQuiz = function() {
  quizPanel.style.display = "none";
}

// hide High Score button
var hideHighScoreButton = function() {
  highScoreButton.style.display = "none";
}

// hide front page elements
var hideFrontPage = function() {
  frontPage.style.display = "none";
}

// show quiz panel
var showQuiz = function() {
  quizPanel.style.display = "block";
}

var hideScores = function() {
  scoreBoard.style.display = "none"
}

var showScoreBoard = function() {
  scoreBoard.style.display = "flex";
}

var showHighScores = function() {
  hideQuiz();
  hideFrontPage();
  hideHighScoreButton();
  showScoreBoard();
  
}

// Quiz Questions
var quizQuestions = [
  {
    question: "Which of the following is NOT the name of a Taylor Swift Album?",
    possible: ["Lover", "Fearless", "Taylor Swift", "Dear John"],
    correct: "Dear John"
  },
  {
    question: "When is Taylor Swift's Birthday?",
    possible: ["December 25", "December 13", "July 5", "August 3" ],
    correct: "December 13"
  },
  {
    question: "Which of the following artists has Taylor Swift NOT featured on an album?",
    possible: ["Chris Stapleton", "Justin Bieber", "Phoebe Bridgers", "The National"],
    correct: "Justin Bieber"
  },
  {
    question: "How many siblings does Taylor Swift have?",
    possible: ["None", "One", "Two", "Three"],
    correct: "One"
  },
  {
    question: "Which popular song did Taylor Swift Co-Write?",
    possible: ["This is What You Came For - Calvin Harris", "God is a Woman - Ariana Grande", "Oh What a World - Kacey Musgraves", "Drivers License - Olivia Rodrigo"],
    correct: "This is What You Came For - Calvin Harris"
  },
  {
    question: "Which of Taylor Swift's exes is the fan favorite song 'All Too Well' allegedly about?",
    possible: ["John Mayer", "Harry Styles", "Karlie Kloss", "Jake Gyllenhaal"],
    correct: "Jake Gyllenhaal"
  },
  {
    question: "What are the names of Taylor Swift's three pet cats?",
    possible: ["Harry Potter, Ron Weasley, Hermione Granger", "Olivia Benson, Meredith Gray, and Benjamin Button", "Moe, Larry, Curly", "Shania Twain, Buffy Summers, Ruth Bader Ginsburg"],
    correct: "Olivia Benson, Meredith Gray, and Benjamin Button"
  }, 
  {
    question: "Which two Taylor Swift albums are currently rereleased as (Taylor's Version) after a legal battle with her previous record lable Big Red Machine?",
    possible: ["Lover and Dear John", "reuptation and 1989", "Taylor Swift and Fearless", "Fearless and Red"],
    correct: "Fearless and Red"
  },
  {
    question: "Each Taylor Swift album is represented by a color. Starting from first to most recent, what color represents each album?",
    possible: ["black, orange, green, pink, red, gray, yellow, teal, purple", "green, yellow, purple, red, blue, black, pink, gold, orange", "pink, purple, blue, gray, orange, red, cream, silver, indigo", "red, orange, yellow, green, blue, indigo, purple, pink, white"],
    correct: "green, yellow, purple, red, blue, black, pink, gold, orange"
  }
];


highScoreButton.onclick = function(){
showHighScores();
}

// Load Page with quiz hidden
window.onload = 
  hideQuiz();
  hideScores();




// Start button to initiate quiz
startButton.onclick = function beginQuiz() {

  // call timer function
  countdown();

  hideFrontPage();

  showQuiz();

  pullQuestion();


  
// check correctness of answer selected compared to array
buttons.addEventListener("click", function(event) {
  var answer = event.target.innerText;

// increment user score/question if answer is correct
  if(answer === quizQuestions[currentQuestion].correct) {
    userScore ++;
    currentQuestion++;
    console.log(userScore);

// deduct time if answer is incorrect and move to next question
  } else if (answer !== quizQuestions[currentQuestion].correct) {
    timeLeft -= 5;
    currentQuestion++;
  }

// as long as there are remaining questions, pull in the next one
  if(currentQuestion < quizQuestions.length) {
    pullQuestion();
  } 
// if there are no remaining questions, go to high score board
  else if (currentQuestion === quizQuestions.length) {
    showHighScores();
  }

  })

  };


// Timing functionality
// Timer that counts down from 5
function countdown() {

  timerEl.textContent = '60 seconds remaining'
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else if (currentQuestion === quizQuestions.length) {
        clearInterval(timeInterval);
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);

    if (timeLeft === 0) {
      showHighScores();
    }
     
      
    }
  }, 1000);
}




// High Score board (stored locally)
if(localStorage.getItem("high scores")) {
  highScores = JSON.parse(localStorage.getItem("high scores"))
  for (let i = 0; i< highScores.length; i++) {
    var li = document.createElement("li");
    li.innerText = `${highScores[i].initials}-- ${highScores[i].score}`
    list.appendChild(li)
  }
}

// Input initials and score to High Score
saveButton.addEventListener("click", function(){
  var object = {
    "initials": initials.value,
    "score": userScore
  }
  highScores.push(object);
  localStorage.setItem("high scores", JSON.stringify(highScores));
  var li = document.createElement("li");
  li.innerText = `${initials.value}: ${userScore}`
  list.appendChild(li)
  initials.value = ""
});






