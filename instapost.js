const heart = document.getElementById('heart');
const book = document.getElementById('bookmark');
const bookicon = book.querySelector('i');
const comments = document.getElementById('comments');
const icon = heart.querySelector('i');
const comment = comments.querySelector('i');
const commentsimfo = document.getElementById('comments-imfo');


heart.addEventListener('click',()=>{
    if(icon.style.color === 'red'){
        icon.style.color = '';
    }else if(icon.style.color === ''){
       icon.style.color = 'red';
       icon.style.transform = 'scale(1.3)';
       setTimeout(() => {
        icon.style.transform = 'scale(1)';
       }, 180);
    }
})

bookicon.addEventListener('click',()=>{
    if(bookicon.style.color === 'white'){
        bookicon.style.color = '';
    }else if(bookicon.style.color === ''){
        bookicon.style.color = 'white';
        bookicon.style.transform = 'scale(1.3)';
       setTimeout(() => {
        bookicon.style.transform = 'scale(1)';
       }, 180);
    }
})

comment.addEventListener('click',()=>{
    if(commentsimfo.style.display === 'block'){
        commentsimfo.style.display = '';
    }else if(commentsimfo.style.display === ''){
        commentsimfo.style.display = 'block';
    }
})


