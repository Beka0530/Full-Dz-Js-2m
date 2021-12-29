const region = document.querySelector('#region')
const subregion = document.querySelector('#subregion')
const capital = document.querySelector('#capital')
const flag = document.querySelector('#flag')
const getCountry = () => {
    if (input.value.length > 0) {
        fetch(`https://restcountries.com/v3.1/name/${input.value}`).then((data) => {
            if (data.status === 404) {
                alert(data.statusText)
            }
            data.json().then(elem => {
                flag.innerHTML = '';
                console.log(elem)
                name.innerText = elem[0].name.common;
                region.innerText = elem[0].region;
                subregion.innerText = elem[0].subregion;
                capital.innerText = elem[0].capital;
                const flagImg = document.createElement(`img`);
                flagImg.setAttribute(`src`, elem[0].flags.png);
                flag.append(flagImg);
            }).catch(e => {
                console.log(e.message)
            })
        });
    }
}
getCountry()


