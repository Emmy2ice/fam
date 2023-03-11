document.querySelector('.hamburger-menu').addEventListener('click', ()=>{
    document.querySelector('.navigation').classList.toggle('change')
})


let y = document.getElementsByClassName('toggle-profile');
for(let i = 0; i < y.length; i++){
    y[i].addEventListener('click', ()=>{
    document.querySelector('.list-container').classList.toggle('reveal')
})}

let x = document.getElementsByClassName('toggle-archive');
for(let i = 0; i < y.length; i++){
    x[i].addEventListener('click', ()=>{
    document.querySelector('.list-container').classList.toggle('show')
})}

