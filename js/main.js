// import numeral from 'numeral-es6';

let currencyData = () => {
    const url = 'https://free.currencyconverterapi.com/api/v5/currencies';
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
let convertCurrency = () => {
    let from = document.getElementById('currency_fr').value;
    let to = document.getElementById('currency_to').value;
    let currency_conv = `${from}${'_'}${to}`;

    let amount = document.getElementById('amount').value;
    let result = document.getElementById('result');
    if (from.length > 0 && to.length > 0 && amount.length > 0) {
        let url = `https://free.currencyconverterapi.com/api/v5/convert?q=${currency_conv}`
        return fetch(url)
            .then(response => response.json())
            .then(res => res.results)
            .then(data => {
                let currFact = Object.values(data)[0].val;
                console.log("the currency")
                console.log(currFact);
                if(currFact != undefined) {
                    result.innerHTML = parseFloat(amount)*parseFloat(currFact);
                    console.log(result)
                }

            });
    };
};

currencyData();
