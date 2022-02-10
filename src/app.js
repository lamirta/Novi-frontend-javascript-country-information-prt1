import axios from 'axios';

// https://restcountries.com/v2/all?fields=name,region,flags,population
//Ophalen van de data:
// 1. Het request zelf (endpoint voor naam)
// GET 'https://restcountries.com/v2/all?fields=name,region,flags,population'
// 2. Asynchrone functie (async/await)
// 3. Een try and catch maken.
// 4. Maak een variabele die als waarde het resultaat van de endpoint krijgt (await axios.get)
// 5. Maak een container/anker in je html
// 6. Haal deze binnen in je javascript file
// 7. Maak een nieuw element waar je alle data in wilt opslaan
// 8. Zet de data die je nodig hebt in dit element.
// 9. Append dit element aan je container/anker

//10.


async function fetchListCountries() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        console.log(result.data); // is dit loggen optioneel?

        result.data.sort((a,b) => {
            return a.population - b.population;
        })

        getAllCountries(result.data);

    } catch(error) {
        console.error(error);
    }
}

fetchListCountries();


function getAllCountries(countries) {
    const countryUnorderedList = document.getElementById('countryList');

    countries.map((allCountries) => {

        const countryList = document.createElement('li');

        countryList.innerHTML = `
                <img id="flag" src="${allCountries.flag}">
                <h3 id="${allCountries.region}">${allCountries.name}</h3>
                <p>Has a population of ${allCountries.population} people</p>
            `
        countryUnorderedList.appendChild(countryList);
    })
}


