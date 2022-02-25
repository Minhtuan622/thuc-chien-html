var btnOpen = document.querySelector('.model-btn')
var model = document.querySelector('.model')
var itemClose = document.querySelector('.model_header i')
var btnClose = document.querySelector('.model_footer button')

function toggleModel(e){
    model.classList.toggle('hide')
}

btnOpen.addEventListener('click', toggleModel)
btnClose.addEventListener('click', toggleModel)
itemClose.addEventListener('click', toggleModel)
model.addEventListener('click', function(e){
    if (e.target == e.currentTarget) {
        toggleModel()
    }
})