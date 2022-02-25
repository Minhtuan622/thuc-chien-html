var img = document.querySelectorAll('.images img')
var lui = document.querySelector('.truoc')
var tien = document.querySelector('.sau')
var dong = document.querySelector('.close')
var thuvienImg = document.querySelector('.thuvien_inner img')
var thuvien = document.querySelector('.thuvien')

var currentindex = 0;

function showhinh() {

    // ẩn icon lùi 
    if (currentindex == 0) {
        lui.classList.add('hide')
    } else {
        lui.classList.remove('hide')
    }

    // ẩn icon tiến
    if (currentindex == img.length - 1) {
        tien.classList.add('hide')
    } else {
        tien.classList.remove('hide')
    }

    // hiển thị hình ảnh 
    thuvienImg.src = img[currentindex].src
    thuvien.classList.add('show')
}

img.forEach((item, index) => {
    item.addEventListener('click', function () {
        currentindex = index
        showhinh()
    })
})

close.addEventListener('click', function () {
    thuvien.classList.remove('show')
})

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
        thuvien.classList.remove('show')
    }
})

lui.addEventListener('click', function () {
    if (currentindex > 0) {
        currentindex--
        showhinh()
    }
})

tien.addEventListener('click', function () {
    if (currentindex < img.length - 1){
        currentindex++
        showhinh()
    }
})