// Store the questions and answers in an array
let questionAnswers = [];

// Get the form and dashboard elements from the HTML
const form = document.querySelector('#question-form');
const dashboard = document.querySelector('#dashboard');

// Create an event listener for the form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the user input values
  const questionInput = document.querySelector('#question-input');
  const answerInput = document.querySelector('#answer-input');

  // Create an object to store the question and answer
  const questionAnswer = {
    question: questionInput.value,
    answer: answerInput.value,
  };

  // Add the question and answer to the array
  questionAnswers.push(questionAnswer);

  // Reset the input fields
  questionInput.value = '';
  answerInput.value = '';

  // Update the dashboard
  updateDashboard();
});

// Function to update the dashboard with the submitted questions and answers
function updateDashboard() {
  // Clear the existing content in the dashboard
  dashboard.innerHTML = '';

  // Iterate over the questionAnswers array and create HTML elements for each question-answer pair
  questionAnswers.forEach(function (qa, index) {
    const question = document.createElement('h3');
    question.textContent = `Question ${index + 1}: ${qa.question}`;

    const answer = document.createElement('p');
    answer.textContent = `Answer: ${qa.answer}`;

    // Append the question and answer elements to the dashboard
    dashboard.appendChild(question);
    dashboard.appendChild(answer);
  });
}
