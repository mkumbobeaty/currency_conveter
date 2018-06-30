'use strict';

// import numeral from 'numeral-es6';

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
var convertCurrency = function convertCurrency() {
    var from = document.getElementById('currency_fr').value;
    var to = document.getElementById('currency_to').value;
    var currency_conv = from + '_' + to;

    var amount = document.getElementById('amount').value;
    var result = document.getElementById('result');
    if (from.length > 0 && to.length > 0 && amount.length > 0) {
        var url = 'https://free.currencyconverterapi.com/api/v5/convert?q=' + currency_conv;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (res) {
            return res.results;
        }).then(function (data) {
            var currFact = Object.values(data)[0].val;
            console.log("the currency");
            console.log(currFact);
            if (currFact != undefined) {
                result.innerHTML = parseFloat(amount) * parseFloat(currFact);
                console.log(result);
            }
        });
    };
};

currencyData();
