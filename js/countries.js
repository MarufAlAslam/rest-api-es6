const modalDetails = (modalDetails) => {
    const modalTitle = document.getElementById("modal-title");
    modalTitle.innerText = "Details about " + modalDetails.common.name;
}

const showCountries = countries => {
    for (const country of countries) {
        const name = country.name;
        const capital = country.capital;
        const population = country.population;
        const flag = country.flag;
        const region = country.region;
        const subregion = country.subregion;
        const languages = country.languages;
        const currencies = country.currencies;
        const borders = country.borders;
        const alpha2Code = country.alpha2Code;
        const nativeName = country.nativeName;
        const numericCode = country.numericCode;
        const callingCodes = country.callingCodes;
        const topLevelDomain = country.topLevelDomain;
        const timezones = country.timezones;
        const translations = country.translations;
        const populationDensity = country.populationDensity;
        const gini = country.gini;
        const area = country.area;
        const latlng = country.latlng;
        const demonym = country.demonym;
        // console.log(name, capital, population, flag, region, subregion, languages, currencies, borders, alpha3Code, nativeName, numericCode, callingCodes, topLevelDomain, timezones, translations, populationDensity, gini, area, latlng, demonym);


        const countryDiv = document.createElement("div");
        countryDiv.classList.add("country");
        countryDiv.innerHTML = `
            <img src="${flag}" class="flag" alt="${name} flag">
            <h2>${name}</h2>
            <h5>Capital: ${capital}</h5>
            <p>Population: ${population}</p>
            <p>Region: ${region}</p>
            
            <button class="btn btn-primary" data-bs-toggle="modal" onclick="loadDetails()" data-bs-target="#exampleModal">Show Details</button>
        `;
        const countries = document.getElementById("countries");
        countries.appendChild(countryDiv);
    }
}
const loadCountries = () => {
    const url = "https://restcountries.com/v2/all";
    fetch(url).then(response => response.json()).then(data => showCountries(data));
}

loadCountries();

function loadDetails() {

}

// 