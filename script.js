// Get the form and dashboard elements from the HTML
const form = document.querySelector('#question-form');
const dashboard = document.querySelector('#dashboard');

// Create an event listener for the form submission
form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const questionInput = document.querySelector('#question-input');
  const answerInput = document.querySelector('#answer-input');

  const questionAnswer = {
    question: questionInput.value,
    answer: answerInput.value,
  };

  try {
    const response = await fetch('/.netlify/functions/api.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(questionAnswer),
    });

    if (response.ok) {
      const updatedQuestionAnswers = await response.json();
      questionAnswers = updatedQuestionAnswers;
      updateDashboard();
    } else {
      console.log('Error: Failed to add question');
    }
  } catch (err) {
    console.log('Error: Failed to add question', err);
  }

  questionInput.value = '';
  answerInput.value = '';
});

// Function to update the dashboard with the submitted questions and answers
async function updateDashboard() {
  try {
    const response = await fetch('/.netlify/functions/api.js');
    if (response.ok) {
      questionAnswers = await response.json();
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
    } else {
      console.log('Error: Failed to fetch question answers');
    }
  } catch (err) {
    console.log('Error: Failed to fetch question answers', err);
  }
}

// Initially update the dashboard on page load
updateDashboard();
