// Declare variables below to save the different divs of your story.

let button1 = document.querySelector(".option-one");
let button2 = document.querySelector(".option-two");
let opening = document.querySelector(".story-opening");
let screen1 = document.querySelector(".option-one-screen");
let screen2 = document.querySelector(".option-two-screen");
let screenEnd1 = document.querySelector(".option-one-end");
let screenEnd2 = document.querySelector(".option-two-end");
let button3 = document.querySelector(".option-three");
let button4 = document.querySelector(".option-four");
let button6 = document.querySelector(".option-six");
let button7 = document.querySelector(".option-seven");
let buttonRS = document.querySelector(".option-");
let title = document.querySelector(".title")
let title2 = document.querySelector(".title-two")
// When you're ready to make event handlers, uncomment the code below.
//  - Then fill in the blanks with the correct variables.

button1.addEventListener('click', function () {
    screen1.style.display = 'block'
    opening.style.display = 'none'
    button1.style.display = 'none'
    button2.style.display = 'none'
    title.style.display = 'none'
    title2.style.display = 'block'
});

button2.addEventListener('click', function () {
    screen2.style.display = 'block'
    opening.style.display = 'none'
    button1.style.display = 'none'
    button2.style.display = 'none'
    title.style.display = 'none'
    title2.style.display = 'none'
});

button3.addEventListener('click', function () {
    screenEnd1.style.display = 'block'
    screen1.style.display = 'none'
    button3.style.display = 'none'
    button4.style.display = 'none'
     title2.style.display = 'none'
});

button4.addEventListener('click', function () {
    screenEnd2.style.display = 'block'
    screen1.style.display = 'none'
    button3.style.display = 'none'
    button4.style.display = 'none'
});

button6.addEventListener('click', function () {
    screenEnd1.style.display = 'block'
    screen2.style.display = 'none'
    button6.style.display = 'none'
    button7.style.display = 'none'
});

button7.addEventListener('click', function () {
    screenEnd2.style.display = 'block'
    screen2.style.display = 'none'
    button6.style.display = 'none'
    button7.style.display = 'none'
});


// INSERT_VARIABLE.addEventListener('click', function(){

// });
