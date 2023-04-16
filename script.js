//Let's go through the checkAnswers() function step by step:
function checkAnswers() {
    //First, we declare a variable score and initialize it to 0. This variable will keep track of the number of correct answers.
  var score = 0;
  ///We create an array correctAnswers that stores the correct answers for each question in the quiz.
  var correctAnswers = [
    "d",
    "b",
    "c",
    "b",
    "d",
    "d",
    "b",
    "c",
    "c",
    "b",
    "a",
    "c",
    "d",
    "c",
    "d",
  ]; 

  // We use a for loop to iterate through each question in the quiz.n
  //The loop starts from 1 and goes up to the total number of questions in correctAnswers.length.
  for (var i = 1; i <= correctAnswers.length; i++) {
    //Inside the loop, we use the loop counter i to dynamically get the selected answer for each question from the form using document.forms["quizForm"]["q" + i].value.
    ///his accesses the value of the selected option for the corresponding question.
    var selectedAnswer = document.forms["quizForm"]["q" + i].value; // Get selected answer
    if (selectedAnswer === correctAnswers[i - 1]) {
      // Compare with correct answer
      score++;
    }
  }

  var totalQuestions = correctAnswers.length;
  var passPercentage = 75;
  var passScore = (passPercentage / 100) * totalQuestions;

 
  
  var passScore = Math.round((passPercentage / 100) * totalQuestions);

  if (score >= passScore) {
    document.getElementById("result").innerHTML =
      "Congratulations! You passed the quiz with a score of " +
      score + "/" + totalQuestions + " (" + Math.round((score/totalQuestions)*100) + "%)";
      document.getElementById("result").style.fontWeight = "bold"; // Set font weight to bold
      document.getElementById("result").style.color = "green"; // Set text color to green
      document.body.style.backgroundColor = "lightgreen"; // Set background color to light green
  } else {
    document.getElementById("result").innerHTML =
      "Sorry, you did not pass the quiz. Your score is " +
      score + "/" + totalQuestions + " (" + Math.round((score/totalQuestions)*100) + "%)";
      document.getElementById("result").style.fontWeight = "bold"; // Set font weight to bold
  document.getElementById("result").style.color = "red"; // Set text color to red
  document.body.style.backgroundColor = "lightcoral"; // Set background color to light red
  }

  // Disable quiz form input options (radio buttons or checkboxes)
  var formElements = document.forms["quizForm"].elements;
  for (var i = 0; i < formElements.length; i++) {
    if (formElements[i].type === "radio" || formElements[i].type === "checkbox") {
      formElements[i].disabled = true;
    }
  }
  
}
function resetBackgroundColor() {
    document.body.style.backgroundColor = ""; // Reset background color
  }
  

function resetQuiz() {
    // Enable quiz form input options (radio buttons or checkboxes)
    var formElements = document.forms["quizForm"].elements;
    for (var i = 0; i < formElements.length; i++) {
      if (formElements[i].type === "radio" || formElements[i].type === "checkbox") {
        formElements[i].disabled = false;
        resetBackgroundColor(); // Reset background color
      }
    }
  
    document.getElementById("result").innerHTML = "";
    document.forms["quizForm"].reset();
  }
  