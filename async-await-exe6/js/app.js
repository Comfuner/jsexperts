
async function getCountry(countryNum) {
    let countriesArray = []; // is the variable initialization is redundant? //
    const urlCountries = 'https://restcountries.eu/rest/v2/all?fields=name';
    let responseCountries = await fetch(`${urlCountries}`);

    countriesArray = await responseCountries.json();
    let countryName = countriesArray[countryNum].name;

    const urlCountry =  `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`;
    let responseCountry = await fetch(`${urlCountry}`);
    let countryResult = await responseCountry.json();
    let cObj = countryResult[0];
    let countryStr = `<img height="80" width="160" src="${cObj.flag}"/>
                         <h2>${cObj.name}</h2>
                         <ol>
                             <li>Native Name: ${cObj.nativeName}</li>
                             <li>Capital: ${cObj.capital}</li>
                             <li>Popultion: ${cObj.population}</li>
                         </ol>
                         <br/>
                      `;
    console.log(countryStr);
    return countryStr;
}

async function getAndAppendStr(){
    countryListUl = document.getElementById('countryList');
    countryIdValue = document.getElementById('countryInput').value;
    tempLi = document.createElement('li');
    tempLi.innerHTML = await getCountry(countryIdValue);
    countryListUl.appendChild(tempLi)

}
document.getElementById('getCountryBtn').addEventListener('click',getAndAppendStr);
