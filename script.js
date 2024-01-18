const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


const questions = [
    {
        question: "javascript is an _____________ language",
        answers:[
            {text:"object-based",correct:false},
            {text:"object-oriented ",correct:true},
            {text:"procedural",correct:false},
            {text:"none of the above",correct:false},
        ]
    },
    {
        
        question: "  Which of the following keywords is used to define a variable in Javascript?",
        answers:[
            {text:"var",correct:false},
            {text:"let ",correct:false},
            {text:"const",correct:false},
            {text:"all of these",correct:true},
        ]
    },
    {
        
        question: "Which of the following methods is used to access HTML elements using Javascript? ",
        answers:[
            {text:"getElementbyId",correct:false},
            {text:"getElementByClassName",correct:false},
            {text:"both A and B",correct:true},
            {text:"none of the above",correct:false},
        ]
    },
    {
         
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?      ",
        answers:[
            {text:"Throws an Error",correct:false},
            {text:"igonre the statement ",correct:true},
            {text:"Gives a Warning",correct:false},
            {text:"None of the above",correct:false},
        ]
    },
    {
         
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        answers:[
            {text:"document.write()",correct:false},
            {text:"console.log() ",correct:false},
            {text:"windows.alert()",correct:false},
            {text:"All of the above",correct:true},
        ]
    },
    {
         
        question: " How can a datatype be declared to be a constant type ?",
        answers:[
            {text:"const",correct:true},
            {text:"let",correct:false},
            {text:"var",correct:false},
            {text:"constant",correct:false},
        ]
    },
    {
         
        question: "When the switch statement matches the expression with the given labels, how is the comparison done ?",
        answers:[
            {text:"both the datatype and the result of the experssion are comaired",correct:true},
            {text:"only the datatype of the experssion is compaired",correct:false},
            {text:"only the value of the experssion is compaired",correct:false},
            {text:"None of the above",correct:false},
        ]
    },
    {
         
        question: "What keyword is used to check whether a given property is valid or not?",
        answers:[
            {text:"is",correct:true},
            {text:" is in ",correct:false},
            {text:"exists",correct:false},
            {text:"lies",correct:false},
        ]
    },
    {
         
        question: "  What is the use of the <noscript> tag in Javascript?",
     answers:[
            {text:"the contents are displayed by-NON-JS-Browsers",correct:true},
            {text:"clear all the coockies and cache ",correct:false},
            {text:"Both A and B",correct:false},
            {text:"None of the above",correct:false},
        ]
    },
    {
         
        question: "When an operator’s value is NULL, the typeof returned by the unary operator ?",
        answers:[
            {text:"Boolean",correct:false},
            {text:"Undefined",correct:false},
            {text:"Object",correct:true},
            {text:"integer",correct:false},
        ]
    },
    {
         
        question: " Which function is used to serialize an object into a JSON string in Javascript?",
        answers:[
            {text:"Stringify()",correct:true},
            {text:"parse() ",correct:false},
            {text:"Convert()",correct:false},
            {text:"None of the above",correct:false},
        ]
    },
    {
         
        question: "Which of the following are closures in Javascript ?",
        answers:[
            {text:"Variables",correct:false},
            {text:"function",correct:false},
            {text:"Objects",correct:false},
            {text:"All of the above",correct:true},
        ]
    },
    {
         
        question: "Which of the following is not a Javascript framework ?",
        answers:[
            {text:"nodeJs",correct:false},
            {text:"React",correct:false},
            {text:"Vue",correct:false},
            {text:"Cassandra",correct:true},
        ]
    },
{
     
    question: "What keyword is used to declare an asynchronous function in Javascript?",
    answers:[
        {text:"Async",correct:true},
        {text:"await ",correct:false},
        {text:"setTimeOut",correct:false},
        {text:"None Of the above",correct:false},
    ]
},
{
     
    question: "How to stop an interval timer in Javascript?",
    answers:[
        {text:"clearInterval",correct:true},
        {text:"clearTimer",correct:false},
        {text:"IntervalOver",correct:false},
        {text:"none of the above",correct:false},
    ]
},
{
     
    questions: " How are objects compared when they are checked with the strict equality operator ?",
    answers:[
        {text:"the contents of the objects are compared",correct:false},
        {text:"Their references are compaired ",correct:true},
        {text:"Both A and B",correct:false},
        {text:"None of the above",correct:false},
    ]
},
{
 
    question: " How do we write a comment in javascrit ?",
    answers:[
        {text:"/**/",correct:false},
        {text:"// ",correct:true},
        {text:"#",correct:false},
        {text:"$$",correct:false},
    ]
},
{
     
    question: "Which object in Javascript doesn’t have a prototype ?",
    answers:[
        {text:"Base Object",correct:true},
        {text:"All objects have a prototype",correct:false},
        {text:"None of the objects have a prototyoe",correct:false},
        {text:"None of the above",correct:false},
    ]
},
{
     
    question: " Which of the following are not server-side Javascript objects   ?",
    answers:[
        {text:"Date",correct:true},
        {text:"fileupload ",correct:false},
        {text:"function",correct:false},
        {text:"all of the  above",correct:false},
    ]
}


];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = "true";
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerText = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
