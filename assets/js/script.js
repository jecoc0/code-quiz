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
var currentQuestion = 0

var userScore = 0
var userAnswer = ""

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

// hide front page elements
var hideFrontPage = function() {
  frontPage.style.display = "none";
}

// show quiz panel
var showQuiz = function() {
  quizPanel.style.display = "block";
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
  }
]



// Load Page with quiz hidden
window.onload = hideQuiz();



// Start button to initiate quiz
startButton.onclick = function beginQuiz() {

  // call timer function
  countdown();

  hideFrontPage();

  showQuiz();




  // Display quiz array/object in html elements

pullQuestion();



    
    //console.log(userAnswer)

  
    
    // console.log(document.querySelector('.option').addEventListener("click", quizQuestions.correct))
    
    // if (quizQuestions[i].correct)
  

buttons.addEventListener("click", function(event) {
  var answer = event.target.innerText;

  console.dir(event.target)

  console.log(answer)
  if(answer === quizQuestions[currentQuestion].correct) {
    userScore ++;
    currentQuestion++;
    console.log(userScore);
    
  }

  if(currentQuestion < quizQuestions.length) {
    pullQuestion();
  } 
  else if (currentQuestion === quizQuestions.length) {
    alert("End of Quiz")
  }

  
})

  }
  // Check question correctness (correct answer gets a point, incorrect deducts from timer)


  // Game ends when all questions or answered or timer reaches zero




  // Timing functionality

// Timer that counts down from 5
function countdown() {
  var timeLeft = 59;
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
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
    }
  }, 1000);
}




// High Score board (stored locally)


// Input initials and score to High Score



