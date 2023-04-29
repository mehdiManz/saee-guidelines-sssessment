
function toggleDarkMode() {
  var body = document.body;
  var toggle = document.querySelector('.switch input[type="checkbox"]');
  var icon = document.querySelector('.switch .slider');
  
  body.classList.toggle("dark-mode");
  
  if (body.classList.contains("dark-mode")) {
    toggle.checked = true;
    icon.classList.add("night-mode");
  } else {
    toggle.checked = false;
    icon.classList.remove("night-mode");
  }
}






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
    "b",
    "a",
    "b",
    "a",
    "c"
    

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
      score + "/" + totalQuestions + " (" + Math.round((score / totalQuestions) * 100) + "%)";

      document.getElementById("result").classList.add("fade-in"); // Add fade-in class

    document.getElementById("result").style.fontWeight = "bold"; // Set font weight to bold
    document.getElementById("result").style.color = "white"; // Set text color to green
    
    
    document.getElementById("result").style.backgroundColor= "#03C988";
    
    document.querySelector("body")





  } else {
    document.getElementById("result").innerHTML =
      "Sorry, you did not pass the quiz. Your score is " +
      score + "/" + totalQuestions + " (" + Math.round((score / totalQuestions) * 100) + "%).Review the guidelines before retaking the exam.";

      document.getElementById("result").classList.add("fade-in"); // Add fade-in class

    document.getElementById("result").style.fontWeight = "bold"; // Set font weight to bold
    // document.getElementById("result").style.color = "black"; // Set text color to red
    document.getElementById("result").style.backgroundColor = "red";
  


  }
   // Add animation to result element
   var resultElement = document.getElementById("result");
   resultElement.classList.add("fade-in");

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
    // Remove the "fade-in" class from the result element
    var resultElement = document.getElementById("result");
    resultElement.classList.remove("fade-in");


  // Enable quiz form input options (radio buttons or checkboxes)
  var formElements = document.forms["quizForm"].elements;
  for (var i = 0; i < formElements.length; i++) {
    if (formElements[i].type === "radio" || formElements[i].type === "checkbox") {
      formElements[i].disabled = false;
      resetBackgroundColor(); // Reset background color
      // document.querySelector("body > form > div > div.reset-submit-btns")
    }
  }

  document.getElementById("result").innerHTML = "";
  document.forms["quizForm"].reset();
  // Scroll to the top of the page smoothly
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}
////////




/////document.querySelector("body > form > h2:nth-child(2)")   first question element








