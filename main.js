let h1 = document.querySelector('.first')
let spn = document.querySelector('.second')
let button = document.querySelector('.button')
let counterValue = 0;
let keyCode = 0;
window.addEventListener('mousedown', event => {
    counterValue++;
    h1.textContent = counterValue;
})
window.addEventListener('keydown', event => {
    keyCode++;
    spn.textContent = keyCode;
})
button.addEventListener('click', () => {
   counterValue = 0 -1;
})



// let input = document.querySelector('.forms-input')
// let btn = document.querySelector('.forms-btn')
// let form = document.querySelector('.div')

// let img = document.createElement('img')
// btn.addEventListener('click', event => {
//     event.preventDefault();
//     let a = input.value;
//     let b = img.setAttribute('src', a);
//     form.after(img)
// });