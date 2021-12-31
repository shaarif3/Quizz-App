const quizData = [
  {
    question: "what is the capital of Pakistan?",
    a: "Karachi",
    b: "Islamabad",
    c: "Lahore",
    d: "Punjab",
    correct: "b",
  },
  {
    question: "what is most use programming language in 2021",
    a: "java",
    b: "c#",
    c: "python",
    d: "c++",
    correct: "a",
  },
  {
    question: "which is the tallest building of UAE?",
    a: "Icon Tower",
    b: "Burj Khalifa",
    c: "Emaar",
    d: "Twin Tower",
    correct: "b",
  },
  {
    question: "Where is Saif-ul-Malook lake?",
    a: "Canada",
    b: "China",
    c: "Pakistan",
    d: "Dubai",
    correct: "c",
  },
  {
    question: "Who is the president of Pakistan?",
    a: "Nawaz Sharif",
    b: "Imran Khan",
    c: "Pervez Musharraf",
    d: "Quaid-e-Azam",
    correct: "b",
  },
  {
    question: "Abbreviation of HTML is?",
    a: "Happy To Machine Learning",
    b: "Hyper Text Markup Language",
    c: "Helicopter Terminal Motorboats Lamborghinis",
    d: "cascading style sheet",
    correct: "b",
  },
  {
    question: "ReactJs launched in?",
    a: "2012",
    b: "2014",
    c: "2016",
    d: "2018",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
let answer = undefined;
loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];
  questionE1.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>


      <button onclick="location.reload()">Reload</button>`;
    }
  }
});
