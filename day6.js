var eKey = document.querySelector('.card.phim p:last-child');
var eLocation = document.querySelector('.card.vitri p:last-child');
var eWhich = document.querySelector('.card.maphim p:last-child');
var eCode = document.querySelector('.card.code p:last-child');
var thongbao = document.querySelector('.thongbao');
var box = document.querySelector('.box');
var ketqua = document.querySelector('.ketqua');

document.addEventListener('keydown', e => {
    eKey.innerText = e.key
    eLocation.innerText = e.location
    eWhich.innerText = e.which
    eCode.innerText = e.code   
    ketqua.innerText = e.which

    thongbao.classList.add('hide')
    box.classList.remove('hide')
})