const questiontag  = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const quiz = document.getElementById('app');


let question =[

    {
 question :"Which planet is known as the 'Red Planet' ?",
 answer:[
         {text:"Jupiter",correct:false},
         {text:"Venus",correct:false},
         {text:"saturn",correct:false},
         {text:"Mars",correct:true}     
        ]
       
    },
    {
        question :"Which country is known as the 'Land of the Rising Sun' ?",
        answer:[
                {text:"France",correct:false},
                {text:"South-korea",correct:false},
                {text:"Japan",correct:true},
                {text:"Thailand",correct:false}     
               ]
              
           },
           {
            question :"What is the chemical symbol for Gold ?",
            answer:[
                    {text:"Ag",correct:false},
                    {text:"Au",correct:true},
                    {text:"Fe",correct:false},
                    {text:"Hg",correct:false}     
                   ]
                  
               },
               {
                question :"Choose the correct form of the verb:'By the time we arrive, she _____ already left.' ?",
                answer:[
                        {text:"Will Have",correct:true},
                        {text:"Has",correct:false},
                        {text:"Have",correct:false},
                        {text:"Had",correct:false}     
                       ]
                      
                   },
                   {
                    question :"A car travels 180 km in 3 hours. What is the average speed of the car ?", 
                    answer:[
                            {text:"50 km/h",correct:false},
                            {text:"55 km/h",correct:false},
                            {text:"60 km/h",correct:true},
                            {text:"65 km/h",correct:false}     
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
    quiz.classList.remove('animate'); 
    void quiz.offsetWidth;   
    quiz.classList.add('animate');  
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
    title.innerText = 'RESULTS'
}
startQuiz();
