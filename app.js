// Task 1
const clickMe = document.querySelector('#primary-action-btn');
let clicked = false;

console.log(clickMe);

clickMe.addEventListener('click', function (event) {
    if (clicked == false) {
        clickMe.textContent = 'You clicked';
        clickMe.classList.toggle('btn-primary');
        clickMe.classList.toggle('btn-success');
        clicked = true;
    }
});

// Task 2
const incrementButton = document.querySelector('#increment-btn');
const decrementButton = document.querySelector('#decrement-btn');
let counterValue = document.querySelector('#counter-value');
let counter = 0;

incrementButton.addEventListener('click', function (event) {
    counter += 1;
    counterValue.textContent = counter;
});

decrementButton.addEventListener('click', function (event) {
    if (counter > 0) {
        counter -= 1;
        counterValue.textContent = counter;
    }
});

