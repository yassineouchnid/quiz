const dataQuiz = [{
    question: '1+1',
    a: '5',
    b: '4',
    c: '2',
    d: 'I dont know',
    correct: 'c'
},{
    question: 'Which programming language is known for its use in artificial intelligence and machine learning?',
    a: 'Java',
    b: 'C++',
    c: 'Python',
    d: 'I dont know',
    correct: 'c'
},{
    question: 'What does HTML stand for in web development?',
    a: 'Hyper Text Markup Language',
    b: 'High-Level Text Markup Language',
    c: 'Hyperlink and Text Manipulation Language',
    d: 'Hyper Transfer Markup Language',
    correct: 'a'
},{
    question: '2x+1=0',
    a: 'x= 0',
    b: 'x= 1',
    c: 'x= 0.5',
    d: 'x= Other',
    correct: 'd'
},{
    question: '2x-6=5x/6',
    a: 'x= 6/4',
    b: 'x= 30/7',
    c: 'x= 1/5',
    d: 'x= 3.978',
    correct: 'b'
},{
    question: 'whats capital of Morocco?',
    a: 'Agadir',
    b: 'Fes',
    c: 'Rabat',
    d: 'CasaBlanca',
    correct: 'c'
},{
    question: 'Yassine OUCHNID\'s birthday',
    a: '22/03/2003',
    b: '22/03/2002',
    c: '22/03/2001',
    d: '22/03/2000',
    correct: 'a'
},{
    question: 'what\'s capital of australia?',
    a: 'Sydney',
    b: 'Canberra',
    c: 'damone',
    d: 'Other',
    correct: 'b'
},{
    question: 'what\'s capital of new zealand?',
    a: 'Wellington',
    b: 'Queenstown',
    c: 'Santiago',
    d: 'Other',
    correct: 'a'
},{
    question: 'what\'s capital of canada?',
    a: 'Ontario',
    b: 'Ottawa',
    c: 'Toronto',
    d: 'Other',
    correct: 'b'
}];

let anwsers = document.querySelectorAll(".answer");
let quiz = document.getElementById("QuizBG");
let questionId = document.getElementById("listQ");
let a_value = document.getElementById("a_value");
let b_value = document.getElementById("b_value");
let c_value = document.getElementById("c_value");
let d_value = document.getElementById("d_value");
let buttonNext = document.getElementById("ButtonBTN");
let numOfQuestion = document.getElementById("num-Q")
let currentQuestion = 0;
let score = 0;

leadQuiz();
function leadQuiz(){
    deletechecked();
    const numberOfSubject = dataQuiz[currentQuestion];

    questionId.innerText = numberOfSubject.question;
    numOfQuestion.innerText = `${currentQuestion + 1}/${dataQuiz.length}`
    a_value.innerText = numberOfSubject.a;
    b_value.innerText = numberOfSubject.b;
    c_value.innerText = numberOfSubject.c;
    d_value.innerText = numberOfSubject.d;
}

function checkedAwnser(){

    let answer1 = undefined;

    anwsers.forEach((answerEl) => {
        if(answerEl.checked){
            answer1 = answerEl.id;
        }
    });
    return answer1;
}

function deletechecked(){
    anwsers.forEach((answerEl) => {
         answerEl.checked = false;
    })        
}

ButtonBTN.addEventListener('click', () => {

    const answeres = checkedAwnser();

    console.log(answeres);

    if(answeres){
        if(answeres === dataQuiz[currentQuestion].correct){
            score++
        }
        currentQuestion++
        if(currentQuestion < dataQuiz.length){
            leadQuiz();
        }else{
            quiz.innerHTML = `<h2 style="text-align:center;">Your Score is ${score}/${dataQuiz.length}</h2>`
        }
    }
})