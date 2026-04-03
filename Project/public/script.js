const questions = [
    {
        question: " Which of the following keywords is used to declare a constant variable in ES6? ",
        answers: [
            {text: "const", correct: true},
            {text: "var", correct: false},
            {text: "static", correct: false},
            {text: "constant", correct: false},
        ]
    },
    {
        question: "What is the output of typeof null in JavaScript?",
        answers: [
            {text: "null", correct: false},
            {text: "undefined", correct: false},
            {text: "object", correct: true},
            {text: "boolean", correct: false},
        ]
    },
    {
        question: "Which operator is used to check both value and type equality?",
        answers: [
            {text: "==", correct: false},
            {text: "===", correct: true},
            {text: "=", correct: false},
            {text: "!=", correct: false},
        ]
    },
    {
        question: "What is the function of the bind method?",
        answers: [
            {text: "bind an object to a common function, so that the function gives different result when its need", correct: true},
            {text: "Bind two different objects into one", correct: false},
            {text: "Both a and b", correct: false},
            {text: "None of the above", correct: false},
        ]
    },
    {
        question: "Which of the following are important features of javascript",
        answers: [
            {text: "dynamic", correct: false},
            {text: "Single threaded", correct: false},
            {text: "Garbage collection", correct: false},
            {text: "All of the above", correct: true},
        ]
    },
    {
        question: "The correct syntax of IIFE is",
        answers: [
            {text: "(function (){ // Function Logic Here. })();", correct: true},
            {text: "function (){ // Function Logic Here. }();", correct: false},
            {text: "function (){ // Function Logic Here. }", correct: false},
            {text: "All of the above", correct: false},
        ]
    },
    {
        question: "What will be the output of the following code const arr=new Set([1,2,2,3,3,4,4,4,4,5,6]) console.log(arr)",
        answers: [
            {text: "[1,2,3]", correct: false},
            {text: "[1,2,3,4,5,6]", correct: true},
            {text: "[5,6]", correct: false},
            {text: "None of the above", correct: false},
        ]
    },
    {
       question: "Which function of an Array object calls a function for each element in the array?",
        answers: [
            {text: "forEach()", correct: true},
            {text: "every()", correct: false},
            {text: "forEvery()", correct: false},
            {text: "each()", correct: false},
        ] 
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
   let currentQuestion = questions[currentQuestionIndex];
   let questionNo = currentQuestionIndex + 1;
   questionElement.innerHTML = questionNo + ". " + currentQuestion.
   question;


   currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);  
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
   });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selsctedBtn = e.target;
    const isCorrect = selsctedBtn.dataset.correct === "true";
    if(isCorrect){
        selsctedBtn.classList.add("correct");
        score++;
    } else{
        selsctedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
});

startQuiz();    