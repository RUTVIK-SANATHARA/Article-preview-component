let shareIcon = document.querySelector('.profile-share');
let beforeDiv = document.querySelector('.before');


shareIcon.addEventListener('click', () => {
    console.log("object");
    beforeDiv.className = 'before'
    if (beforeDiv.style.display == 'block') {
        beforeDiv.style.display = 'none'
    }
    else {
        beforeDiv.style.display = 'block'
    }

});
//desktop
shareIcon.addEventListener('mouseover', () => {
    beforeDiv.style.display = 'none'
    console.log("mouse over");


});


