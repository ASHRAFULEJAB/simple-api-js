const countryName =() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    const  countriesContainer = document.getElementById('country-details')
    countries.forEach(country =>{
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        const {name, capital} = country
        countryDiv.innerHTML = `
        
        <h3> CountryName :${name.common} </h3>
        <P> Country Capital: ${capital ? capital[0] : 'No capital'}</p>
        <button onclick="loadCountryDetails('${country.cca2}')"> See Details</button>
        `
        countriesContainer.appendChild(countryDiv)


    })
}
const loadCountryDetails = (code)=>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))

}

const displayCountryDetails = country =>{
    const countryDeatil = document.getElementById('country-name');
    const {name,flags} = country
    countryDeatil.innerHTML =`
     <h2> Details : ${name.common}</h2>
     <img src="${flags.png}">
    `


}

countryName()