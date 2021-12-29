//first task
const addDiv = () => {
    let container = document.getElementById('container' )
    let div = document.createElement("div")
    div.innerHTML = "<div class=element>Element</div>"
    container.append(div)
    console.log(container)
}

addDiv()


//second task
const list = document.getElementById('container-1');
const str = document.getElementById('start');
const st = document.getElementById('stop');
let interval;

str.onclick = function() {
    interval = setInterval(() => {
        const element = document.createElement('div');
        element.className = 'element';
        const randomNumber = Math.floor(Math.random() * 20);
        element.innerText = randomNumber;
        list.append(element);
    }, 1000);
}

st.onclick = function() {
    clearInterval(interval)
}


//third task
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const go = document.getElementById('start1')
const stp = document.getElementById('pause1')
const rst = document.getElementById('reset1')

const timer = () => {
    seconds.textContent = (+seconds.textContent + 1).toString().padStart(2, '0')
    if (+seconds.textContent === 60) {
        minutes.textContent = (+minutes.textContent +1).toString().padStart(2, '0')
        seconds.textContent = '00'
    }
}
const intervalStart = () => {
    timerInterval = setInterval(timer, 1000)
    go.disabled = true;
    stp.disabled = false;
    rst.disabled = false;
}
const intervalStop = () => {
    clearInterval(timerInterval)
    go.disabled = false;
    stp.disabled = true;
    rst.disabled = false;
}
const intervalReset = () => {
    clearInterval(timerInterval)
    minutes.textContent = `00`
    seconds.textContent = `00`
    go.disabled = false;
    stp.disabled = false;
    rst.disabled = true;
}


//Fourth task
const get = document.getElementsByTagName('form')


let login = get[0].childNodes[1]
let pass21 = get[0].childNodes[3]
let minLen = 6
login.addEventListener('keyup', (e) =>{
    if(login.value.length >= minLen){
        isLogin = true
    }
})

let send51 = get[0].childNodes[5]

pass21.addEventListener('keyup', (e) => {
    if (pass21.value.length >= minLen) {
        let send51 = get[0].childNodes[5]
        console.log(send51)
        send51.disabled = false
        isPass = true
    }
})


send51.addEventListener('click', (e) => {
    e.preventDefault(send51)
    alert(login.value + pass21.value)
})














