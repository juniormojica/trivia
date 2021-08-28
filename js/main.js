

const questionsForm = document.getElementById("questionsForm")

const startButton = document.getElementById("startButton")


const BringQuestions = (e)=>{

    e.preventDefault();
    const API = "https://opentdb.com/api.php?" ; 

    const numberOfQuestions = document.getElementById("numberOfQuestions") 
    const selecCategory = document.getElementById("category")
    const dificulty = document.getElementById("difficulty")
    const typeOfQuestion = document.getElementById("typeOfQuestion")
    

    const userAPI = `${API}amount=${numberOfQuestions.value}&category=${selecCategory.value}&difficulty=${dificulty.value}&type=${typeOfQuestion.value}`

    let questions = [];
    fetch(userAPI)
    .then(response => response.json())
    .then(result => fillQuestions((result.results)))
    .catch(error => console.log(error))

   console.log(userAPI)
    
}

const fillQuestions = (questionsAPI)=>{
    questions = questionsAPI ; 
    console.log(questions)
}

fillQuestions()



startButton.onclick = BringQuestions 