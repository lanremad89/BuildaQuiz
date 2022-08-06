const Question1a = document.getElementById('Question1a')
const Question1b = document.getElementById('Question1b')
const Question1c = document.getElementById('Question1c')
const Question1d = document.getElementById('Question1d')
const btn1 = document.getElementById('btn1')
const question1Results = document.getElementById('question1Results')

function firstQ(){
    if(Question1a.checked){
        question1Results.innerHTML='CORRECT!'
    } else {
        question1Results.innerHTML='INCORRECT'
    }
}
btn1.addEventListener('click',firstQ)


const Question2a = document.getElementById('Question2a')
const Question2b = document.getElementById('Question2b')
const Question2c = document.getElementById('Question2c')
const Question2d = document.getElementById('Question2d')
const btn2 = document.getElementById('btn2')
const question2Results = document.getElementById('question2Results')

function secondQ(){
    if(Question2c.checked){
        question2Results.innerHTML='CORRECT!'
    } else {
        question2Results.innerHTML='INCORRECT'
    }
}
btn2.addEventListener('click',secondQ)


const Question3a = document.getElementById('Question3a')
const Question3b = document.getElementById('Question3b')
const Question3c = document.getElementById('Question3c')
const Question3d = document.getElementById('Question3d')
const btn3 = document.getElementById('btn3')
const question3Results = document.getElementById('question3Results')

function thirdQ(){
    if(Question3d.checked){
        question3Results.innerHTML='CORRECT!'
    } else {
        question3Results.innerHTML='INCORRECT'
    }
}
btn3.addEventListener('click',thirdQ)