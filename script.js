const container = document.querySelector('.container');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', ()=> {
    toggle.classList.toggle('active');
    container.classList.toggle('active');
});