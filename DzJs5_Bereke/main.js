const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q='
const appId = '&appid='
const API = '43006ae4a23009282374fbbe1ba91dd9'


let p = document.getElementById('cityN')
let span = document.querySelector('.temp')
let date = document.querySelector('#date')
let imgCity = document.querySelector('#imgCity')


let getWeather = (data) => {
    const unixTimestamp = data.dt// data.dt 1640275392
    const milliseconds = unixTimestamp * 1000 //1640275392000
    const dateObject = new Date(milliseconds) // Thu Dec 23 2021 22:03:12 GMT+0600 (Восточный Казахстан) {}
    const weekday = dateObject.toLocaleString("en-US", {weekday: "long"}) // Monday
    let month = dateObject.toLocaleString("en-US", {month: "long"}) // December
    let day = dateObject.toLocaleString("en-US", {day: "numeric"}) // 9
    let year = dateObject.toLocaleString("en-US", {year: "numeric"}) // 2021


    if (month === 'Invalid Date') {
        date.innerText = ''
    } else {

        date.innerText = `${weekday} ${day} ${month.slice(0, 3)} ${year} `
    }
    console.log(`${weekday} ${day} ${month.slice(0, 3)} ${year}`, '-')
    const temK = (data.main.temp - 273.15)
    let temperC = Math.floor(temK)
    p.innerText = data.name
    span.innerHTML = `
<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" width="60">
 <span id="temp">${temperC}&deg; </span>`
}

let load = document.getElementById('load')
let inp = document.getElementById('getW')

let getCountry = (e) => {
    load.style.display = 'block'
    let cityName = e.target.value
    fetch(`${BASE_URL}${cityName}${appId}${API}`)
        .then(response => response.json())
        .then(json => {
            load.style.display = 'none'
            getWeather(json)
        }).catch(e => {
        alert(e.error)
    })
    fetch('https://restcountries.com/v3.1/name/' + cityName).then(response => {
        response.json().then(data => {
            console.log(data)
            imgCity.src = data[0].flags.png
        }).catch(e => {
            imgCity.src = 'https://s5.postimg.cc/lifnombwz/mumbai1.png';
        })
    });
}

inp.addEventListener('change', (e) => {
    getCountry(e)
});
