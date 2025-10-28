document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');
    const questionsContainer = document.getElementById('questions-container');
    const resultContainer = document.getElementById('result-container');
    const questionsText = document.getElementById('question-text');
    const choicesList = document.getElementById('choices-list');
    const scoreDisplay = document.getElementById('score');




  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Venus", "Mars", "Jupiter", "Mercury"],
      answer: "Mars",
    },
    {
      question: "What is the largest ocean on Earth?",
      choices: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      choices: [
        "William Shakespeare",
        "Charles Dickens",
        "Mark Twain",
        "Jane Austen",
      ],
      answer: "William Shakespeare",
    },
    {
      question: "What is the chemical symbol for Gold?",
      choices: ["Ag", "Au", "Gd", "Go"],
      answer: "Au",
    },
    {
      question: "How many continents are there on Earth?",
      choices: ["5", "6", "7", "8"],
      answer: "7",
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
      answer: "Carbon Dioxide",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener('click',startQuiz);

  nextBtn.addEventListener('click',()=>{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions()
    }else{
        showResult();
    }
  })

  restartBtn.addEventListener('click',()=>{
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hidden');
    startQuiz();
  });

  function startQuiz(){
    startBtn.classList.add('hidden');
    resultContainer.classList.add('hidden')
    questionsContainer.classList.remove('hidden');
    showQuestions();
  }

  function showQuestions(){
    nextBtn.classList.add('hidden');
    questionsText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = ""; //clear the previous question
    questions[currentQuestionIndex].choices.forEach(choice => {
        const li = document.createElement('li')
        li.textContent = choice;
        // li.addEventListener('click',selectAnswer(choice));  it calling the function
        li.addEventListener('click',()=> selectAnswer(choice));
        choicesList.appendChild(li);
    })

  }

  function selectAnswer(choice){
    const currentAnswer = questions[currentQuestionIndex].answer;
    if(currentAnswer === choice){
        score++;
    }
    nextBtn.classList.remove("hidden")
  }

  function showResult(){
    questionsContainer.classList.add('hidden');
    console.log(questionsContainer)
    resultContainer.classList.remove('hidden');
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }
});
