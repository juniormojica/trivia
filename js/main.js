
//trayendo los elementos html
let questionsForm = document.getElementById("questionsForm")

let startButton = document.getElementById("startButton")
let questionsAnswers = document.getElementById("questionsAnswers")
let firstQuestion = document.getElementById("firstQuestion")
let secondQuestion = document.getElementById("secondQuestion")
let thirdQuestion = document.getElementById("thirdQuestion")
let fourthQuestion = document.getElementById("fourthQuestion")




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

      
        questionsAnswers.innerHTML= "";
        for (const element in questions) {
            
            let answerContainer= document.createElement("div")
            answerContainer.classList.add("answer-container")

            let visibleQuestions = document.createElement("h3")
            visibleQuestions.classList.add("visible-question")
            visibleQuestions.innerText = `pregunta ${element}, es ${questions[element].difficulty} de la categoria ${questions[element].category}  `
            visibleQuestions.style.padding = "1.5em"
            visibleQuestions.style.textAlign = "left"

           
            let answerOptions = document.createElement("div")
                answerOptions.classList.add("answer-options")


            let eachAnswerOption = document.createElement("h4")
            eachAnswerOption.classList.add("each-answer-option")

            
            let visibleAnswer = document.createElement("h4")
                visibleAnswer.classList.add("visible-answer")
                visibleAnswer.innerText = `${questions[element].question}`
                visibleAnswer.style.fontSize ="1.5rem"


                questionsAnswers.appendChild(answerOptions)
                visibleAnswer.appendChild(eachAnswerOption)
                visibleQuestions.appendChild(visibleAnswer)
    
                
                
    
    
    
                questionsAnswers.appendChild(answerContainer)
                
                answerContainer.appendChild(visibleQuestions)
                
           

                eachAnswerOption.innerHTML = `${questions[element].incorrect_answers}`
                console.log(questions[element].type ==="boolean")

                if(questions[element].type ==="boolean"){
                    eachAnswerOption.innerHTML = ` <div class=""answer-options"">
                            <input  type="button" id="firstQuestion" class="button-style" value=" ${questions[element].incorrect_answers}">
                            <input  type="button" id="secondQuestion" class="button-style" value=" ${questions[element].correct_answer}">`
                       }
                       else{
                        eachAnswerOption.innerHTML = ` <div class=""answer-options"">
                            <input  type="button" id="firstQuestion" class="button-style" value=" ${questions[element].incorrect_answers[0]}">
                            <input  type="button" id="secondQuestion" class="button-style" value=" ${questions[element].incorrect_answers[1]}">
                            <input  type="button" id="thirdQuestion" class="button-style" value=" ${questions[element].correct_answer}">
                            <input  type="button" id="fourthQuestion" class="button-style" value=" ${questions[element].incorrect_answers[2]}">`
                            }
                       
                }

                console.log(questions)
                



        
          
            
            
            
        }
        


        

        



       
        
    }


  
    









startButton.onclick = BringQuestions 