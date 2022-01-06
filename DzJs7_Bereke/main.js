const input = document.querySelector('input')
const btn = document.querySelector('button')
const name = document.querySelector('.name')
const borders = document.querySelector('.borders')
const nameURL = 'https://restcountries.com/v3.1/name/'
const codeURL = 'https://restcountries.com/v3.1/alpha/'gi 
btn.onclick = async function () {
    borders.innerHTML = '';
    const response = await fetch(nameURL + input.value);
    const [country] =  await response.json();
    name.innerText = country.name.official;
    const promises = country.borders.map(code => {
        return fetch(codeURL + code);
    });
    const countries = await Promise.all(promises)
    for await (let country of countries) {
        const [data] = await country.json()
        const li = document.createElement('li')
        li.innerText = data.name.official;
        borders.append(li);
        borders.style.listStyle = 'none'
        borders.style.marginBottom = '10px'
        console.log(countries)
    }
}

input.addEventListener('change', btn.onclick)
