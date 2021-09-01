
//trayendo los elementos html
let questionsForm = document.getElementById("questionsForm")
let userSelection = document.getElementsByClassName("button-style")


let startButton = document.getElementById("startButton")
let questionsAnswers = document.getElementById("questionsAnswers")


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


            let eachAnswerOption = document.createElement("h4")
            eachAnswerOption.classList.add("each-answer-option")

            
            let visibleAnswer = document.createElement("h4")
                visibleAnswer.classList.add("visible-answer")
                visibleAnswer.innerText = `${questions[element].question}`
                visibleAnswer.style.fontSize ="1.5rem"


                
                visibleAnswer.appendChild(eachAnswerOption)
                visibleQuestions.appendChild(visibleAnswer)
    
                
                
                questionsAnswers.appendChild(answerContainer)
                answerContainer.appendChild(visibleQuestions)
                    
           

            
                if(questions[element].type ==="boolean"){
                        
                    eachAnswerOption.innerHTML = `<div class="answer-options"> 
                         <form action="" id="sender">
                            <input  type="button" id="firstQuestion" class="button-style" value=" ${questions[element].incorrect_answers}">
                            <input  type="button" id="secondQuestion" class="button-style" value=" ${questions[element].correct_answer}"
                         </form>
                         </div>`
                        
                       
             }
        
            else{
                     eachAnswerOption.innerHTML = ` <div class="answer-options">
                     <form action="" id="sender">
                         <input  type="button" id="firstQuestion" class="button-style" value=" ${questions[element].incorrect_answers[0]}">
                         <input  type="button" id="secondQuestion" class="button-style" value=" ${questions[element].incorrect_answers[1]}">
                         <input  type="button" id="thirdQuestion" class="button-style" value=" ${questions[element].correct_answer}">
                         <input  type="button" id="fourthQuestion" class="button-style" value=" ${questions[element].incorrect_answers[2]}">
                     </form>
                         
                     </div>`    
                     
                    
                  }
                  
                             
                             
        }
     
     
            

                    puntuacion = 0;
               
                    const firstQuestion = document.getElementById("firstQuestion")
                    const secondQuestion = document.getElementById("secondQuestion")
                      const thirdQuestion = document.getElementById("thirdQuestion")
                    const fourthQuestion = document.getElementById("fourthQuestion")
                
                    
                firstQuestion.onclick = ()=>{
                    for (let i = 0; i < questions.length; i++) {
                        const element = questions[i];

                        if(element.correct_answer ===firstQuestion.value){
                            console.log("correct")
                        }
                        else if(element.correct_answer ===secondQuestion.value) { 
                            console.log("correct")
                        }
                        else if(element.correct_answer ===thirdQuestion.value){
                            console.log("correct")
                        }
                        else if(element.correct_answer ===fourthQuestion.value){
                            console.log("correct")
                        }
                        else { 
                           alert(`seleccionaste${firstQuestion.value} y la respuesta correcta es ${element.correct_answer} tu puntuacion es :${puntuacion} de 1 `)
                        }
                        
                    }
                    
                   
                }
                secondQuestion.onclick=()=>{
                    for (let i = 0; i < questions.length; i++) {
                        const element = questions[i];

                        if(questions[i].correct_answer ===firstQuestion.value){
                            console.log("correct")
                        }
                        else if(questions[i].correct_answer ===secondQuestion.value) { 
                            console.log("correct")
                        }
                        else if(questions[i].correct_answer ===thirdQuestion.value){
                            console.log("correct")
                        }
                        else if(questions[i].correct_answer ===fourthQuestion.value){
                            console.log("correct")
                        }
                        else { 
                            alert(`seleccionaste${secondQuestion.value} y la respuesta correcta es ${element.correct_answer}`)
                        }
                }    }


                // thirdQuestion.onclick=()=>{
                //     for (let i = 0; i < questions.length; i++) {
                //         const element = questions[i];

                //         if(element.correct_answer ===firstQuestion.value){
                //             console.log("correct")
                //         }
                //         else if(element.correct_answer ===secondQuestion.value) { 
                //             console.log("correct")
                //         }
                //         else if(element.correct_answer ===thirdQuestion.value){
                //             console.log("correct")
                //         }
                //         else if(element.correct_answer ===fourthQuestion.value){
                //             console.log("correct")
                //         }
                //         else { 
                //             console.log("incorrect")
                //         }
                //         console.log(element.correct_answer)
                //         console.log(element)
                //         console.log(firstQuestion.value)
                //         console.log(secondQuestion.value)
                //         console.log(thirdQuestion.value)
                //         console.log(fourthQuestion.value)

                //     }
                // }

                fourthQuestion.onclick=()=>{
                    for (let i = 0; i < questions.length; i++) {
                        const element = questions[i];

                        if(questions[i].correct_answer ===firstQuestion.value){
                            console.log("correct")
                        }
                        else if(questions[i].correct_answer ===secondQuestion.value) { 
                            console.log("correct")
                        }
                        else if(questions[i].correct_answer ===thirdQuestion.value){
                            console.log("correct")
                        }
                        else if(questions[i].correct_answer ===fourthQuestion.value){
                            console.log("correct")
                        }
                        else { 
                            alert(`seleccionaste${fourthQuestion.value} y la respuesta correcta es ${element.correct_answer}`)
                        }
                      }
                }
                
                // secondQuestion.addEventListener("click",()=>{secondQuestion.value})
                // thirdQuestion.addEventListener("click",()=>{thirdQuestion.value})
                // fourthQuestion.addEventListener("click",()=>{fourthQuestion.value})
                
                
                
                
                    
                
                
    
    
}}
 








startButton.onclick = BringQuestions 