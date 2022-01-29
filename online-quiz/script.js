const allQuestions = [
    {
        Question: "Q1: The first mechanical computer designed by Charles Babbage was called ?",
        a: "A. Abacus",
        b: "B. Analytical",
        c: "C. Calculator",
        d: "D. Processor",
        ans: "ans4"
    },
    {
        Question: "Q2: The first mechanical computer designed by Charles Babbage was called ?",
        a: "A. Abacus",
        b: "B. Analytical",
        c: "C. Calculator",
        d: "D. Processor",
        ans: "ans2"
    },
    {
        Question: "Q3: The first mechanical computer designed by Charles Babbage was called ?",
        a: "A. Abacus",
        b: "B. Analytical",
        c: "C. Calculator",
        d: "D. Processor",
        ans: "ans1"
    },
    {
        Question: "Q4: The first mechanical computer designed by Charles Babbage was called ?",
        a: "A. Abacus",
        b: "B. Analytical",
        c: "C. Calculator",
        d: "D. Processor",
        ans: "ans4"
    }
]
const question = document.querySelector('.forquestion .QuestionAsked');
const option1 = document.querySelector('.forquestion #Option1');
const option2 = document.querySelector('.forquestion #Option2');
const option3 = document.querySelector('.forquestion #Option3');
const option4 = document.querySelector('.forquestion #Option4');
const submit = document.querySelector('.btn');

let QuestionList = allQuestions[0];
const loadquestion = () => {
    question.innerText = allQuestions[0].Question;
    option1.innerText = allQuestions[0].a;
    option2.innerText = allQuestions[0].b;
    option3.innerText = allQuestions[0].c;
    option4.innerText = allQuestions[0].d;

}
loadquestion();
function Submit() {

    for (let i = 0; i < allQuestions.length; i++) {
        QuestionList += allQuestions[i] + "<br>";

    }
    loadquestion();
    console.log('hello')
}
loadquestion();
