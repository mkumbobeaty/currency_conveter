let currencyData = () => {
    const url = 'https://free.currencyconverterapi.com/api/v5/currencies'
    return fetch(url)
        .then(response => response.json())
        .then(currency => {
            selectDataFrom(currency.results)
            selectDataTo(currency.results)
        })
};
let selectDataTo = (currencyTo = {}) => {
    let selectTo = document.getElementById('currency_to');
    for (let curry in currencyTo) {
        let option = document.createElement('option');
        option.value = curry;
        option.text = curry;
        selectTo.appendChild(option);
    }
};
let selectDataFrom = (currencyValues = {}) =>{
    let selectfro = document.getElementById('currency_fr');
    for (let currencyValue in currencyValues ) {
        let option = document.createElement('option');
        option.value =currencyValue;
        option.text= currencyValue;
        selectfro.appendChild(option);
    }

};

currencyData();