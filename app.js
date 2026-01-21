const clickMe = document.querySelector('#primary-action-btn');
let clicked = false;

console.log(clickMe);

clickMe.addEventListener('click', function (event) {
    if (clicked == false) {
        clickMe.innerHTML = 'You clicked';
        clickMe.classList.toggle('btn-primary');
        clickMe.classList.toggle('btn-success');
        clicked = true;
    }
});
