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


function header(){
  const tableElem = document.createElement('table');
  shopsSection.appendChild(tableElem);

  const tableHeadElem = document.createElement('thead');
  tableElem.appendChild(tableHeadElem);

  const row1 = document.createElement('tr');
  tableHeadElem.appendChild(row1);

  const th1Elem = document.createElement('th');
  row1.appendChild(th1Elem);

  for (let i = 0; i < hours.length; i++){
    const th2Elem = document.createElement('th');
    th2Elem.textContent = hours[i];
    row1.appendChild(th2Elem); }

  const th3Elem = document.createElement('th');
  th3Elem.textContent = 'Daily Local Total';
  row1.appendChild(th3Elem);

  
  
  // const td = document.createElement('td');
  // td.textContent = ('test');
  // row.appendChild(td);


}
header();

Shops.prototype.renderShops = function () {
  let table = document.querySelector('table');

  const row2 = document.createElement('tr');
  table.appendChild(row2);

  const td = document.createElement('td');
  td.textContent = this.location;
  row2.appendChild(td);

  for (let i = 0; i < hours.length; i++){
    const tdElem = document.createElement('td');
    tdElem.textContent = this.cookiePerHour[i];
    row2.appendChild(tdElem); }

  const td4Elem = document.createElement('td');
  td4Elem.textContent = this.totalCookieSales;
  row2.appendChild(td4Elem);


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
