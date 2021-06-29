let btn = document.querySelector('.contact-button');
let modalWindow = document.querySelector('.modal-window');
let close = document.querySelector('.modal-close')

btn.addEventListener('click', function(){
    modalWindow.classList.add('window-active')
})

close.addEventListener('click', function(){
    modalWindow.classList.remove('window-active')
})