'use strict';


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


let shopsSection = document.getElementById('profiles');

const allShops = [];

function Shops(location, minCust, maxCust, avgCookieSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiePerHour = [];
  this.custPerHour = [];
  this.totalCookieSales = null;
  allShops.push(this);
}
Shops.prototype.getCustPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.custPerHour.push(randomCust(this.minCust, this.maxCust));
  }
};
Shops.prototype.getCookiesPerHour = function () {
  this.getCustPerHour();
  for (let i = 0; i < this.custPerHour.length; i++) {
    this.cookiePerHour.push(Math.round(this.custPerHour[i] * this.avgCookieSale));
    this.totalCookieSales += (this.cookiePerHour[i]);
  }
};
function randomCust(min, max) {
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
}

let seattle = new Shops('Seattle', 23, 65, 6.3);
let tokyo = new Shops('Tokyo', 3, 24, 1.2);
let dubai = new Shops('Dubai', 11, 38, 3.7);
let paris = new Shops('Paris', 20, 38, 2.3);
let lima = new Shops('Lima', 2, 16, 4.6);

// Old code
// let seattle = {
//   // location: 'Seattle',
//   // minCust: 23,
//   // maxCust: 65,
//   // avgCookieSale: 6.3,
//   // cookiePerHour: [],
//   // custPerHour: [],
//   // totalCookieSales: null,
// getCustPerHour: function(){
// this.custPerHour = `${randomCust(this.minCust,this.maxCust)} customers`;
//   for(let i = 0; i < hours.length; i++){
//     this.custPerHour.push( randomCust(this.minCust,this.maxCust));
//   }
// },
//   getCookiesPerHour: function(){
//     this.getCustPerHour();
//     for(let i = 0; i < this.custPerHour.length; i++){
//       this.cookiePerHour.push(Math.round(this.custPerHour[i] * this.avgCookieSale));
//       this.totalCookieSales += (this.cookiePerHour[i]);
//     }
//   }
// };


// let tokyo = {
//   location: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 1.2,
//   cookiePerHour: [],
//   custPerHour: [],
//   totalCookieSales: null,
//   getCustPerHour: function(){
//     // this.custPerHour = `${randomCust(this.minCust,this.maxCust)} customers`;
//     for(let i = 0; i < hours.length; i++){
//       this.custPerHour.push( randomCust(this.minCust,this.maxCust));
//     }
//   },
//   getCookiesPerHour: function(){
//     this.getCustPerHour();
//     for(let i = 0; i < this.custPerHour.length; i++){
//       this.cookiePerHour.push(Math.round(this.custPerHour[i] * this.avgCookieSale));
//       this.totalCookieSales += (this.cookiePerHour[i]);
//     }
//   }

// };

// let dubai = {
//   location: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
//   cookiePerHour: [],
//   custPerHour: [],
//   totalCookieSales: null,
//   getCustPerHour: function(){
//     // this.custPerHour = `${randomCust(this.minCust,this.maxCust)} customers`;
//     for(let i = 0; i < hours.length; i++){
//       this.custPerHour.push( randomCust(this.minCust,this.maxCust));
//     }
//   },
//   getCookiesPerHour: function(){
//     this.getCustPerHour();
//     for(let i = 0; i < this.custPerHour.length; i++){
//       this.cookiePerHour.push(Math.round(this.custPerHour[i] * this.avgCookieSale));
//       this.totalCookieSales += (this.cookiePerHour[i]);
//     }
//   }

// };

// let paris = {
//   location: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
//   cookiePerHour: [],
//   custPerHour: [],
//   totalCookieSales: null,
//   getCustPerHour: function(){
//     // this.custPerHour = `${randomCust(this.minCust,this.maxCust)} customers`;
//     for(let i = 0; i < hours.length; i++){
//       this.custPerHour.push( randomCust(this.minCust,this.maxCust));
//     }
//   },
//   getCookiesPerHour: function(){
//     this.getCustPerHour();
//     for(let i = 0; i < this.custPerHour.length; i++){
//       this.cookiePerHour.push(Math.round(this.custPerHour[i] * this.avgCookieSale));
//       this.totalCookieSales += (this.cookiePerHour[i]);
//     }
//   }

// };

// let lima = {
//   location: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
//   cookiePerHour: [],
//   custPerHour: [],
//   totalCookieSales: null,
//   getCustPerHour: function(){
//     // this.custPerHour = `${randomCust(this.minCust,this.maxCust)} customers`;
//     for(let i = 0; i < hours.length; i++){
//       this.custPerHour.push( randomCust(this.minCust,this.maxCust));
//     }
//   },
//   getCookiesPerHour: function(){
//     this.getCustPerHour();
//     for(let i = 0; i < this.custPerHour.length; i++){
//       this.cookiePerHour.push(Math.round(this.custPerHour[i] * this.avgCookieSale));
//       this.totalCookieSales += (this.cookiePerHour[i]);
//     }
//   }

// };





// const allShops = [seattle, tokyo, dubai, paris, lima];



// Grabs a window in the dom

Shops.prototype.renderShops = function () {
  //created article
  const articleElem = document.createElement('article');
  shopsSection.appendChild(articleElem);

  // const h1Elem = document.createElement('h1');
  // h1Elem.textContent = this.location;
  // articleElem.appendChild(h1Elem);

  // const ulElem = document.createElement('ul');
  // articleElem.appendChild(ulElem);

  const tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);

  const tableHeadElem = document.createElement('thead');
  tableElem.appendChild(tableHeadElem);

  const row1 = document.createElement('tr');
  tableHeadElem.appendChild(row1);

  // for (let i = 0; i < hours.length; i++)
  const th1Elem = document.createElement('th');
  th1Elem.textContent = this.location;
  row1.appendChild(th1Elem);

  // for (let i = 0; i < hours.length; i++) {
  //   const liElem = document.createElement('li');
  //   liElem.textContent = `${hours[i]}: ${this.cookiePerHour[i]} cookies`;
  //   ulElem.appendChild(liElem);
  // }
  // const liElem = document.createElement('li');
  // liElem.textContent = `Total:${this.totalCookieSales}`;
  // ulElem.appendChild(liElem);

};

function getAllShops() {
  for (let i = 0; i < allShops.length; i++) {
    let currentKitten = allShops[i];
    console.log(currentKitten);
    currentKitten.getCookiesPerHour();
    currentKitten.renderShops();
  }
}
getAllShops();
