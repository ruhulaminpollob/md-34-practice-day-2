const countriesLoad=()=>{
    fetch ('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))
    
}
const displayCountries = countries => {
    const countriesContainer=document.getElementById('countries-container')

    countries.forEach(country => {
        // const imgurl='https://i.ibb.co/54WzQjR/Honda.png'
        // console.log(country);
        const languages=Object.values(country.languages)
        console.log(languages);
        const div=document.createElement('div')
        div.innerHTML=`
        <div class="card bg-white card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="${country.flags.png}" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">${country.name.common}</h2>
                <p>${country.continents}</p>
                <p>Language: ${languages}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">${country.cca2}</button>
                </div>
            </div>
        </div>
        `
        countriesContainer.appendChild(div)
    });
}


countriesLoad()