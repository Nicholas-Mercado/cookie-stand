'use strict';


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


let shopsSection = document.getElementById('profiles');

const allShops = [];
// const hourlyCookieTotal = [];
// let finalTotal = 0;
// console.log(hourlyCookieTotal);

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


// function footer(){
//   for(let i = 0; i < hours.length; i++){
//     let hourTotal = 0;
//     for(let i = 0; i < allShops.length; i++){
//       hourTotal += allShops[i].cookiePerHour[i];
//     }
//     finalTotal += hourTotal;
//     hourlyCookieTotal[i] = finalTotal;
//   }
// }
// footer();

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
