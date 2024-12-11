const questiontag  = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next');




let question =[

    {
 question :"What is the name of the Engine used by javaScript in Google Chrome ?",
 answer:[
         {text:"Spider-Monkey",correct:false},
         {text:"V4",correct:false},
         {text:"Chakra",correct:false},
         {text:"V8",correct:true}     
        ]
       
    },
    {
        question :"JAVA SCRIPT is a ?",
        answer:[
                {text:"Multi-Threaded",correct:false},
                {text:"NO-threads",correct:false},
                {text:"Single-Threaded",correct:true},
                {text:"All the above",correct:false}     
               ]
              
           },
           {
            question :"Which of the Following is not a js Function ?",
            answer:[
                    {text:"console.log",correct:false},
                    {text:"Set-TimeOut",correct:true},
                    {text:"IsEmpty",correct:false},
                    {text:"Parse.JSON",correct:false}     
                   ]
                  
               },
               {
                question :"What is Function Expression in js ?",
                answer:[
                        {text:"A function assigned to a variable",correct:true},
                        {text:"A function passed an argument",correct:false},
                        {text:"A function that accepts the other function as a parameter",correct:false},
                        {text:"None of the Above",correct:false}     
                       ]
                      
                   },
                   {
                    question :"What is other Name of Pyramid Boom ?", 
                    answer:[
                            {text:"Pyramid Doom",correct:false},
                            {text:"Promises",correct:false},
                            {text:"Call back hell",correct:true},
                            {text:"async",correct:false}     
                           ]
                          
                       }
]


let questionNoIndex = 0;
let score = 0;


function startQuiz(){
    questionNoIndex = 0;
    score = 0;
    nextBtn.innerText = 'NEXT';
    DisplayQuestions();
}


function DisplayQuestions(){
      reset();

    let currentQuestion = question[questionNoIndex];
    let questionNo = questionNoIndex + 1;
    // console.log(currentQuestion);
    questiontag.innerHTML = questionNo+ ". " +currentQuestion.question;

   
    currentQuestion.answer.forEach(ans=>{
        const btn = document.createElement('button');
        btn.innerText = ans.text;
        btn.classList.add('ans-btn')
        answerButtons.appendChild(btn);
        if(ans.correct){
            btn.dataset.correct = ans.correct; 
        }
        btn.addEventListener('click',selectAnswer);
    })
}



function reset(){
    nextBtn.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selected = e.target;
    const iscorrect = selected.dataset.correct === 'true';

    if(iscorrect){
        selected.classList.add('correct');
        score++;
    }else{
        selected.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(btn=>{
        if(btn.dataset.correct === 'true'){
           btn.classList.add('correct');
        }
        btn.disabled = true;
    })
   nextBtn.style.display = 'inline';
}
nextBtn.addEventListener('click',()=>{
    if(questionNoIndex < question.length){
        handleNextbutton();
    }else{
        startQuiz();
    }
})

function handleNextbutton(){
    questionNoIndex++;
    if(questionNoIndex < question.length){
        DisplayQuestions();
    }else{
        showScore();
    }
}

function showScore(){
    reset();
    questiontag.innerHTML = `YOU HAVE choosed ${score} correct answers out of ${question.length} questions....!  your SCORE : ${score}`;
    nextBtn.innerText ='RESTART';
    nextBtn.style.display ='inline';
}
startQuiz();
