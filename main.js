let spanClicks = document.querySelector('.first')
let spanKeys = document.querySelector('.second')
let button = document.querySelector('.button')

let enter = {
    clicks: 0, 
    keys: 0
}
 
let read = renderLocal();
if (read != null){
    enter = read;
}
startPosition()

function startPosition(){
   spanClicks.textContent = enter.clicks;
   spanKeys.textContent = enter.keys;
}

function toDoLocal(){
   let a = JSON.stringify(enter)
   localStorage.setItem('objects', a);
}

function renderLocal(){
    let b = localStorage.getItem('objects')
    JSON.parse(b)
    if (b == null){
        return null;
    }
    return JSON.parse(b)
}

window.addEventListener('click', () => {
    enter.clicks++ 
    startPosition()
    toDoLocal()
})
window.addEventListener('keydown', () => {
    enter.keys++
    startPosition()
    toDoLocal()
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