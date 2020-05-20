import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-calc',
  templateUrl: './currency-calc.component.html',
  styleUrls: ['./currency-calc.component.scss']
})
export class CurrencyCalcComponent implements OnInit {

  public countryCurrency = ['AED',
    'ARS',
    'AUD',
    'BGN',
    'BRL',
    'BSD',
    'CAD',
    'CHF',
    'CLP',
    'CNY',
    'COP',
    'CZK',
    'DKK',
    'DOP',
    'EGP',
    'EUR',
    'FJD',
    'GBP',
    'GTQ',
    'HKD',
    'HRK',
    'HUF',
    'IDR',
    'ILS',
    'INR',
    'ISK',
    'JPY',
    'KRW',
    'KZT',
    'MXN',
    'MYR',
    'NOK',
    'NZD',
    'PAB',
    'PEN',
    'PHP',
    'PKR',
    'PLN',
    'PYG',
    'RON',
    'RUB',
    'SAR',
    'SEK',
    'SGD',
    'THB',
    'TRY',
    'TWD',
    'UAH',
    'USD',
    'UYU',
    'VND',
    'ZAR'];

  public selectedCountryOne: string = 'USD';
  public selectedCountryTwo: string = 'EUR';
  public rate: number;

  public amounOne = 1;
  public amountTwo: number;

  public RateText;


  constructor() { }

  ngOnInit() {
    this.calculate();
  }

  async calculate() {
    // fetch(`https://api.exchangerate-api.com/v4/latest/${this.selectedCountryOne}`)
    //   .then(res => res.json())
    //   .then((data) => {
    //     this.rate = data.rates[this.selectedCountryTwo];
    //     this.RateText = `1 ${this.selectedCountryOne} = ${this.rate} ${this.selectedCountryTwo}`;
    //     this.amountTwo = +(this.amounOne * this.rate).toFixed(2);
    //     console.log(this.amounOne, this.amountTwo);
    //   });
    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${this.selectedCountryOne}`);
    const data = await res.json();

    this.rate = data.rates[this.selectedCountryTwo];
    this.RateText = `1 ${this.selectedCountryOne} = ${this.rate} ${this.selectedCountryTwo}`;
    this.amountTwo = +(this.amounOne * this.rate).toFixed(2);

  }

  onSwapClick() {
    const temp = this.selectedCountryOne;
    this.selectedCountryOne = this.selectedCountryTwo;
    this.selectedCountryTwo = temp;
    this.calculate();
  }
}

