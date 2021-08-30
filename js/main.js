
//trayendo los elementos html
const questionsForm = document.getElementById("questionsForm")

const startButton = document.getElementById("startButton")
const questionsAnswers = document.getElementById("questionsAnswers")
const firstQuestion = document.getElementById("firstQuestion")
const secondQuestion = document.getElementById("secondQuestion")
const thirdQuestion = document.getElementById("thirdQuestion")
const fourthQuestion = document.getElementById("fourthQuestion")




//funciones
const  fillQuestions = questionsAPI=>{ questions = questionsAPI ; }



//funcion principal de la trivia
let questions = [];
const BringQuestions = (e)=>{
  
    e.preventDefault();
    const API = "https://opentdb.com/api.php?" ; 

    const numberOfQuestions = document.getElementById("numberOfQuestions") 
    const selecCategory = document.getElementById("category")
    const dificulty = document.getElementById("difficulty")
    const typeOfQuestion = document.getElementById("typeOfQuestion")
    

    const userAPI = `${API}amount=${numberOfQuestions.value}&category=${selecCategory.value}&difficulty=${dificulty.value}&type=${typeOfQuestion.value}`

    
    fetch(userAPI)
    .then(response => response.json())
    .then(resultado =>  fillQuestions(resultado.results))
   
    .catch(error => console.log(error))
   

    console.log(userAPI)
  // show the questions on screen 
    const fillQuestions = (questionsApi)=>{
        questions = questionsApi;

        console.log(questions)
        questionsAnswers.innerHTML= "";
        for (const element in questions) {
            
            const answerContainer= document.createElement("div")
            answerContainer.classList.add("answer-container")

            const visibleAnswer = document.createElement("h4")
            visibleAnswer.classList.add("visible-answer")
            visibleAnswer.innerText = `${questions[element].question}`

            const visibleQuestions = document.createElement("h3")
            visibleQuestions.classList.add("visible-question")
            visibleQuestions.innerText = `pregunta ${element}, es ${questions[element].difficulty} de la categoria ${questions[element].category}  `
           
            

            const answerOptions = document.createElement("div")
            answerOptions.classList.add("answer-options")
            const eachAnswerOption = document.createElement("h4")
            eachAnswerOption.classList.add("each-answer-option")
            



            questionsAnswers.appendChild(answerContainer)
            questionsAnswers.appendChild(answerOptions)
            answerContainer.appendChild(visibleQuestions)
            visibleQuestions.appendChild(visibleAnswer)
            visibleAnswer.appendChild(eachAnswerOption)
            
            for (const key in questions) {

                if(questions[key].type === "boolean") { 
                    eachAnswerOption.innerHTML = ` <div class=""answer-options"">
                    <input  type="button" id="firstQuestion" value=" ${questions[key].incorrect_answers}">
                    <input  type="button" id="secondQuestion" value=" ${questions[key].incorrect_answers}">`
                }

                else{ 
                    eachAnswerOption.innerHTML = ` <div class=""answer-options"">
                    <input  type="button" id="firstQuestion" class="button-style" value=" ${questions[key].incorrect_answers}">
                    <input  type="button" id="secondQuestion" class="button-style" value=" ${questions[key].incorrect_answers}">
                    <input  type="button" id="thirdQuestion" class="button-style" value=" ${questions[key].incorrect_answers}">
                    <input  type="button" id="fourthQuestion" class="button-style" value=" ${questions[key].incorrect_answers}">`
                }
                
               
             
            }
             
        }
        
        
    }


  
    
}








startButton.onclick = BringQuestions 