'use strict';

var currencyData = function currencyData() {
    var url = 'https://free.currencyconverterapi.com/api/v5/currencies';
    return fetch(url).then(function (response) {
        return response.json();
    }).then(function (currency) {
        selectDataFrom(currency.results);
        selectDataTo(currency.results);
    });
};
var selectDataTo = function selectDataTo() {
    var currencyTo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var selectTo = document.getElementById('currency_to');
    for (var curry in currencyTo) {
        console.log(curry);
        var option = document.createElement('option');
        option.value = curry;
        option.text = curry;
        selectTo.appendChild(option);
    }
};
var selectDataFrom = function selectDataFrom() {
    var currencyValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var selectfro = document.getElementById('currency_fr');
    for (var currencyValue in currencyValues) {
        var option = document.createElement('option');
        option.value = currencyValue;
        option.text = currencyValue;
        selectfro.appendChild(option);
    }
};

currencyData();
