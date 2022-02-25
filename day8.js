var username = document.querySelector('.username')
var email = document.querySelector('.email')
var pass = document.querySelector('.pass')
var pass2 = document.querySelector('.pass2')
var form = document.querySelector('form')

function showErrror(input, message) {
    let parent = input.parentElement;
    let small = document.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input){
    let parent = input.parentElement;
    let small = document.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmpty(listInput){
    let isEmpty = false;
    listInput.foreach(input => {
        input.value = input.value.trim()

        if (!input.value) {
            isEmpty = true;
            showErrror(input, 'Chưa điền dữ liệu')
        } else {
            showSuccess(input)
        }
    });
    return isEmpty 
}

function checkEmail(input){
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    input.value = input.value.trim()

    let isEmail = regexEmail.test(input.value)
    if (isEmail) {
        showSuccess(input)
    } else {
        showErrror(input, 'Email không hợp lệ')
    }
    return isEmail
}

function checkLength(input, min, max) {
    input.value = input.value.trim()

    if (input.value.lenght < min) {
        showErrror(input, `Phải chứa tối thiểu ${min} ký tự`)
        return true
    }
    if (input.value.lenght > max) {
        showErrror(input, `Không được vượt quá ${max} ký tự`)
        return true
    }
    return false
}

function checPassword(passInput, passInput2) {
    if (passInput.value != passInput2.value) {
        showErrror(passInput2, 'Mật khẩu không trùng khớp. Vui lòng kiểm tra lại. ')
        return true
    }
    return false
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    let isEmpty = checkEmpty(username, email, pass, pass2)
    let isEmail = checkEmail(email)
    let isUsernameLength = checkLength(username, 3, 20)
    let isPasswordLength = checkLength(password, 6, 30)
    let isPassMatch = checPassword(pass, pass2)

    if (isEmpty || isEmail || isUsernameLength || isPasswordLength || isPassMatch) {
        // không làm gì hết
    } else {
        // chạy tiếp chương trình 
    }
})