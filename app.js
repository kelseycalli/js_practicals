// Phase 1
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

// Task 3

const alertMessage = document.querySelector('#alert-box');

alertMessage.classList.toggle('d-none');

// Phase 2
// Task 4 & 5

const viewBtn1 = document.querySelector('button[data-view="one"]');
const viewBtn2 = document.querySelector('button[data-view="two"]');
const viewOutput = document.querySelector('#view-output');

viewBtn1.addEventListener('click', function (event) {
    viewBtn1.classList.add('active');
    viewBtn2.classList.remove('active');
    viewOutput.textContent = 'You have selected View One.';
});
viewBtn2.addEventListener('click', function (event) {
    viewBtn2.classList.add('active');
    viewBtn1.classList.remove('active');
    viewOutput.textContent = 'You have selected View Two.';
});



