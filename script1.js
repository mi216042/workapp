function fetchData(){
    let  countryName=country_name.value;
    fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`)
    .then(res=>res.json()).
    then(data=>populateValues(data))
}
function populateValues(country){
    console.log(country[0].currencies[0].name);
    let countryCurrencyName=country[0].currencies[0].name;
    let countryCurrencySymbol=country[0].currencies[0].symbol;
    let countryName=country[0].name;
    let countryflag=country[0].flag;
    let countryPopulation=country[0].population;

    let html_data=`
    
    <div class="card" style="width: 18rem;">
    <img src="${countryflag}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${countryName}</h5>
     
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Population:${countryPopulation}</li>
      <li class="list-group-item">CurrencyName:${countryCurrencyName}</li>
      <li class="list-group-item">CurrencySymbol:${countryCurrencySymbol}</li>
    </ul>
  </div>
    
`
  document.querySelector("#result").innerHTML=html_data;

}

