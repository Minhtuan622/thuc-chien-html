var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var time = document.querySelector('.time');
var value = document.querySelector('.value');
var trangthai = document.querySelector('.trangthai');
var tamnhin = document.querySelector('.tamnhin span');
var gio = document.querySelector('.gio span');
var sun = document.querySelector('.sun span');
var content = document.querySelector('.content')
var body = document.querySelector('body')

async function changeweatherUI() {
    let capitalSearch = search.value.trim()
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=8b0ea62f84529fdeae4547e2960e6aa0`
    let data = await fetch(apiUrl).then(res => res.json())

    if (data.cod == 200) {
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        tamnhin.innerText = data.visibility + ' m'
        gio.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        let temp = Math.round(data.main.temp - 273.15)
        value.innerText = temp
        trangthai.innerText = data.weather[0] ? data.weather[0].main : ''
        time.innerText = new Date().toLocaleString('vi')

        body.setAttribute('class', 'warm')
        if (temp >= 27) {
            body.setAttribute('class', 'hot')
        }
        if (temp > 16 && temp < 27) {
            body.setAttribute('class', 'warm')
        }
        if (temp <= 16) {
            body.setAttribute('class', 'cool')
        }
    } else {
        content.classList.add('hide')
    }
}

search.addEventListener('keypress', function (e) {
    if (e.code === 'Enter') {
        changeweatherUI()
    }
})