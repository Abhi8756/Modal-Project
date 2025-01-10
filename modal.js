let opbt=document.querySelector('.open-btn');
let clbt=document.querySelector('.close-button');
let mprev=document.querySelector('.modal-prev');
let mod=document.querySelector('.modal');
opbt.addEventListener('click',function(){
    mod.classList.add('opn-modal');
})
clbt.addEventListener('click',function(){
    mod.classList.remove('opn-modal');
})