let like = 99;
let likeBtn = document.getElementById("like-btn");
let likeCounter = document.getElementById("like-counter");

likeBtn.addEventListener("click", function(){
    like += 1
    likeCounter.innerHTML = `${like} likes`
}, {once: true})
