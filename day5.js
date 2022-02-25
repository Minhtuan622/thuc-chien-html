var btnTim = document.querySelector('.search-box-btn')

btnTim.addEventListener('click', function(){
    this.parenElement.classList.toggle('open')
    this.previousElementSibling.focus();
})