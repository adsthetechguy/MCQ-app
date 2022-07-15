//Update only questions, random* no of questions options and the desired time. Other function like scores [percent]and  question progress has been taken care of;
//will update automatically

//Tomiwa Olasupo
//June 29th 2022
//Read only!!!
//08076312290


var myVar;

function myloader() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.querySelector(".lds-ellipsis").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}



//Calling the required sections

const container = document.querySelector(".container");
const WelcomeBox = document.querySelector(".welcome");
const ButtonStart = document.querySelector(".buttonStart");
const questionParagraph = document.querySelector (".question");
const answersContainer = document.querySelector(".answers");
const questionsSection = document.querySelector(".questions")
const scoreSpan =  document.querySelector("#score");
const buttonNext = document.querySelector(".button-next");
const quizStopElement = document.querySelector(".container");
const Submit = document.querySelector(".submit-btn")



//Question and options array
const questions = [

    {question: 'In the hazy weather, travel is ....',
    answers: [{text: 'harmful', isAnswer:false}, {text: 'foggy', isAnswer:false}, {text: 'misty', isAnswer:false},
     {text: 'risky', isAnswer:true}] 
    },


    {question: 'He had since taken over the ... of power',
    answers: [{text: 'reins', isAnswer:true}, {text: 'rains', isAnswer:false}, {text: 'reigns', isAnswer:false},
     {text: 'realms', isAnswer:false}] 
    },

    {question: 'In some countries, it is an offence to describe a child born out of wedlock as ...',
answers: [{text: 'illegal', isAnswer:false}, {text: 'illegitimate', isAnswer:true }, {text: 'illicit', isAnswer:false},
{text: 'illiterate', isAnswer:false}] 
    },

    
    {question: 'Choose the option with the correct spelling',
    answers: [{text: 'ettiquette', isAnswer:false}, {text: 'etiquete', isAnswer:false}, {text: 'etiquette', isAnswer:true},
     {text: 'etiquettee', isAnswer:false}] 
    },


    {question: 'In some cultures, dead people are buried but in others they are ...',
    answers: [{text: 'baked', isAnswer:false}, {text: 'cremated', isAnswer:true}, {text: 'fired', isAnswer:false},
     {text: 'flamed', isAnswer:false}] 
    },

    {question: 'I have known him only recently so I can not ... for his honesty',
    answers: [{text: 'sign', isAnswer:false},  {text: 'support', isAnswer:false}, {text: 'vouch', isAnswer:true }, 
     {text: 'stand', isAnswer:false},
    ] 
    },



    {question: 'Choose the option that rhyme with the given word. <br> <strong>Fuel</strong>',
    answers: [{text: 'quail', isAnswer:false}, {text: 'field', isAnswer:false}, {text: 'duel', isAnswer:true},
     {text: 'freak', isAnswer:false}] 
    },

    {question: 'I am sure you did not know that the lady is light-fingered means she is...?',
    answers: [{text: 'careless', isAnswer:false}, {text: 'fair-skinned', isAnswer:false}, {text: 'skillful', isAnswer:false},
     {text: 'prone to stealing', isAnswer:true}] 
    },


    {question: 'After the investigation, many of the workers were given the marching orders means they were...',
    answers: [{text: 'dismissed', isAnswer:false}, {text: 'ordered to march', isAnswer:false}, {text: 'given new instructions', isAnswer:true},
     {text: 'sent to barracks', isAnswer:false}] 
    },


    {question: 'Whenever we discuss physics, Ali is in his elements means..',
    answers: [{text: 'does not like physics', isAnswer:false}, {text: 'hate discussing physics', isAnswer:false}, {text: 'indifferent to physics', isAnswer:false},
     {text: 'enjoys physics', isAnswer:true}] 
    },


    {question: 'Choose the word <strong>nearest in meaning</strong> to the underlined word below. <br>The bank that started operations last year is now  <span style="text-decoration: underline;">insolvent</span>.',
    answers: [{text: 'prosperous', isAnswer:false}, {text: 'attractive', isAnswer:false}, {text: 'bankrupt', isAnswer:true},
     {text: 'buoyant', isAnswer:false}] 
    },

    {question: 'Please go on, I  ...  you',
    answers: [{text: 'am hearing', isAnswer:false}, {text: 'hear', isAnswer:false}, {text: 'can hear', isAnswer:true},
     {text: 'was hearing', isAnswer:false}] 
    },



    {question: 'Choose the word <strong>nearest in meaning</strong> to the underlined word below. <br>The decision I have taken is <span style="text-decoration: underline;">irrevocable</span>.',
    answers: [{text: 'irresponsible', isAnswer:false}, {text: 'irrefutable', isAnswer:false}, {text: 'irreversible', isAnswer:true},
     {text: 'irreproachable', isAnswer:false}] 
    },

   


    {question: 'With the recent police action we expect the high incidence of crime to...',
    answers: [{text: 'die down', isAnswer:true}, {text: 'die away', isAnswer:false}, {text: 'die off', isAnswer:false},
     {text: 'die up', isAnswer:false}] 
    },

    {question: 'Choose the word <strong>opposite in meaning</strong> to the underlined word below. <br>You will make a good a good counsellor by <span style="text-decoration: underline;">LISTENING</span> to your client rather than ...them.',
    answers: [{text: 'offending', isAnswer:false}, {text: 'ignoring', isAnswer:true }, {text: 'mishandling', isAnswer:false},
     {text: 'threatening', isAnswer:false}] 
    },

    {question: 'Choose the word <strong>nearest in meaning</strong> to the underlined word below. <br>I have a feeling that he is doing some <span style="text-decoration: underline;">shady</span> business outside the country.',
    answers: [{text: 'dishonest', isAnswer:true}, {text: 'undisclosed', isAnswer:false}, {text: 'unknown', isAnswer:false},
     {text: 'shadowy', isAnswer:false}] 
    },

    
    {question: 'Choose the option with the correct spelling',
    answers: [{text: 'continuously', isAnswer:true}, {text: 'continuosly', isAnswer:false}, {text: 'continuouosly', isAnswer:false},
     {text: 'continuousily', isAnswer:false}] 
    },

    {question: '.... of the players is to receive a gift of 1m',
    answers: [{text: 'some', isAnswer:false}, {text: 'all', isAnswer:false}, {text: 'every', isAnswer:false},
     {text: 'each', isAnswer:true}] 
    },


    {question: 'If I were you I ... to the police',
    answers: [{text: 'would report', isAnswer:true}, {text: 'am reporting', isAnswer:false}, {text: 'have reported', isAnswer:false},
     {text: 'shall report', isAnswer:false}] 
    },


    {question: 'I think she ... her mother',
    answers: [{text: 'takes', isAnswer:false}, {text: 'takes to', isAnswer:false}, {text: 'takes after', isAnswer:true},
     {text: 'takes for', isAnswer:false}] 
    },

    {question: 'Choose the option that has the correct stress',
    answers: [{text: 'IN-for-ma-tion', isAnswer:false}, {text: 'in-FOR-ma-tion', isAnswer:false}, {text: 'in-for-ma-TION', isAnswer:false},
     {text: 'in-for-MA-tion', isAnswer:true}] 
    },

    {question: 'Choose the option that rhyme with the given word. <br> <strong>Chair</strong>',
    answers: [{text: 'cheer', isAnswer:false}, {text: 'fear', isAnswer:false }, {text: 'there', isAnswer:true},
     {text: 'cheer', isAnswer:false}] 
    },


    {question: 'Choose the word <strong>opposite in meaning</strong> to the underlined word below. <br>Tell Chike something  <span style="text-decoration: underline;">CONFIDENTIAL</span> and he makes it ... the next minute',
    answers: [{text: 'private', isAnswer:false}, {text: 'personal', isAnswer:false}, {text: 'popular', isAnswer:false},
     {text: 'public', isAnswer:true}] 
    },

    {question: 'Before all elelction results were announced, it was clear that the leader of the opposition was home and dry. This means..',
    answers: [{text: 'he was exhausted', isAnswer:false}, {text: 'he won the election', isAnswer:false}, {text: 'he lost the election', isAnswer:true},
     {text: 'had arrived home before the rain', isAnswer:false}] 
    },

    {question: 'It is a bad manner to regard stranger as ....',
    answers: [{text: 'ignoramus', isAnswer:true}, {text: 'ignorant', isAnswer:false}, {text: 'ignorance', isAnswer:false},
     {text: 'ignominy', isAnswer:false}] 
    },

    {question: 'The lady is a ... beauty',
    answers: [{text: 'raging', isAnswer:false}, {text: 'ravaging', isAnswer:false}, {text: 'ravenous', isAnswer:false},
     {text: 'ravishing', isAnswer:true}] 
    },

    {question: 'Choose the word <strong>opposite in meaning</strong> to the underlined word below. <br>You will succeed fairly well with adolescents if you <span style="text-decoration: underline;">COAX</span> them rather than... them',
    answers: [{text: 'coerce', isAnswer:false}, {text: 'punish', isAnswer:true }, {text: 'pamper', isAnswer:false},
     {text: 'curse', isAnswer:false}] 
    },

    {question: 'Choose the option that has the correct stress',
    answers: [{text: 'MA-ni-pu-late', isAnswer:false}, {text: 'ma-ni-pu-LATE', isAnswer:false}, {text: 'ma-NI-pu-late', isAnswer:true},
     {text: 'ma-ni-PU-late', isAnswer:false}] 
    },

    {question: 'I prefer drinking ...',
    answers: [{text: 'than eating', isAnswer:false}, {text: 'from eating', isAnswer:false}, {text: 'to eat', isAnswer:false},
     {text: 'to eating', isAnswer:true}] 
    },

    {question: 'Choose the option with the correct spelling',
    answers: [{text: 'malladministration', isAnswer:false}, {text: ' maladministration', isAnswer:true }, {text: 'maladminstration', isAnswer:false},
     {text: 'malaadministration', isAnswer:false}] 
    },






    

    
]

 
  

let questionIndex = 0;

//To display the questions rrandomly
let firstQuestion =  Math.floor(Math.random() * 30)
let nextQuestion = firstQuestion

//Calling the variable for score and score when converted into percent
let score = 0
let percent = 0

//Function to make the quiz container overwrite the welcome page
ButtonStart.addEventListener('click', ()=> {
    WelcomeBox.style.display = 'none'
    container.style.display = 'block';

    //Calling function to display question
    oneQuestion(firstQuestion)
    
    //Calling function to display timer
    startcountdown()


    //Calling function to show the question progress
    showProgress()


})




//Function to cycle through the questions and options array
const oneQuestion = (index) =>{
    const question = questions[index]
    questionParagraph.innerHTML = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.classList.add('answers-button')
        button.append(answer.text) 
        answersContainer.appendChild(button)
        button.dataset.isCorrect = answer.isAnswer
        button.addEventListener('click', checkAnswer)
       
       
    })

}

//Function to check the correct answer
const checkAnswer = (e) =>{
   
    const allAnswers = document.querySelectorAll('.answers-button')
    const answerBoolean = e.target.dataset.isCorrect
    if(answerBoolean === 'true'){

        //Append a style to the button when an option is correct
        e.target.classList.add('valid')

        //Increase the score when the boolean return true
        score ++

        //Convert score to percent
        percent = (score / questions.length) * 100

        percent = Math.ceil(percent);
        scoreSpan.textContent = percent
       
    }

    //Append the same style to the option button even when the option selected is not correct
    else{
        e.target.classList.add('valid')
    }

    //Function to disable all other options after one option has been selected
 allAnswers.forEach(el => {
    el.disabled = true 
 })
}



//Question progess function
let currentQuestionNumber;
function showProgress() {
    currentQuestionNumber = questionIndex + 1;
    let progressElement = document.getElementById("progress");

    progressElement.textContent = 
`Question ${currentQuestionNumber} of ${questions.length} `;
 
    }
   

   //the next button function
buttonNext.addEventListener('click', () => {

    //Display another random question
    nextQuestion --

    //Show question progress on click to the next question and increment it
    questionIndex ++
    showProgress()

    //Change the next button to Submit button at the last index question
    if(currentQuestionNumber === questions.length){
        buttonNext.style.display = 'none'
        Submit.style.width = '75%'
        Submit.style.textTransform = 'uppercase'
    }

  
    
   

  //Display another random question on reaching index 0
    if(nextQuestion < 0){
        nextQuestion = questions.length + nextQuestion
    }

   

   
    //Clearing the former questions and option to make way for the next question
    questionParagraph.textContent = ''
    answersContainer.textContent = ''

    //  Display next question
    oneQuestion(nextQuestion)
   
   
    




} 
)

// Function to submit quiz
Submit.addEventListener('click', () => {
    document.querySelector('.lds-roller').style.display = 'block'
    clearInterval(quizTimer)
    document.querySelector(".container").innerHTML = `<p style="color: white;" class="lead  text-center">Processing result...<br>Please wait..</p> `
   
    setTimeout( () => {
        document.querySelector('.lds-roller').style.display = 'none'
      
        showScores()
       
    }, 5000);
    
})


//Quiz Timer function
let time = 20
let quizTimeMinutes = time * 60 * 60
let quizTime = quizTimeMinutes / 60;
let quizTimer;

function startcountdown(){
    quizTimer = setInterval(function(){
    if (quizTime <= 0){

        //Stop timer when quiz time is less than zero and display the result box using the timeup() function
        clearInterval(quizTimer);
        document.querySelector(".container").innerHTML = `<p style="color: white;" class="lead text-center">You have exhausted your time.<br>Processing result...</p> `
        document.querySelector('.lds-roller').style.display = 'block'
        setTimeout( () => {
            document.querySelector('.lds-roller').style.display = 'none'
            timeUp()
           
        }, 5000);
   
   
   
   
   }
   else{

    //Else reduce the time by 1 every secs
    quizTime--
    let sec = Math.floor(quizTime % 60);
    let min =  Math.floor(quizTime / 60) % 60;
    let counting = document.querySelector('.countdown')
    counting.innerHTML = `<i class="bi bi-clock bg-light"></i> ${min}mins : ${sec}secs` ;

   }

  
}, 1000)

}





//  The function for the evaluation box to show scores
function showScores(){
    let quizEndHTML = 
    `
    <div class="last-output animate-bottom">
    <h1 class ="display-4"><i class="bi bi-emoji-smile"></i></h1>
    <p>Quiz submitted succesfully!</p>
    <hr>
    <h4>Result</h4>
    <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75%" aria-valuemin="0" aria-valuemax="100" style="width: ${percent}%"></div>
  </div>
  <br>
    <p class="score">You Scored ${percent}%</p>
    <br>
    <span class="quiz-repeat">
    <a href="Use of English.html">Take Quiz Again</a> <br> <br>
    <a href="index.html">Home page</a>
    </span> 
    </div>
    `;

 let quizElement = document.querySelector(".container");
 quizElement.innerHTML = quizEndHTML;

 questionsSection.style.display = 'none'
 
}


//HTML content to display when the time is up
function timeUp(){
    let quizStop = 
    `
    <div class="last-output animate-bottom">
    <h1 class ="display-4">Ooops! <i class="bi bi-emoji-frown"></i></h1>
    <p>Your time is up</p>
    <hr>
    <h4>Result</h4>
    <div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75%" aria-valuemin="0" aria-valuemax="100" style="width: ${percent}%"></div>
  </div>
  <br>
    <p class="score">You Scored ${percent}%</p>
    <br>
    <span class="quiz-repeat">
    <a href="Use of English.html">Take Quiz Again</a> <br> <br>
    <a href="index.html">Home page</a>
    </span> 
    </div>
    `;
 let quizStopElement = document.querySelector(".container");
 quizStopElement.innerHTML = quizStop;

 questionsSection.style.display = 'none'
}





//Update only questions, options and the desired time. Other function like scores [percent]and  question progress has been taken care of;
//will update automatically

//Abu Solomon
//July 12th 2022
//09066704639