'use strict';


let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
// build 5 objects

let shopsSection = document.getElementById('profiles');

let seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  cookiePerHour: [],
  custPerHour: [],
  totalCookieSales: null,
  getCustPerHour: function(){
    // this.custPerHour = `${randomCust(this.minCust,this.maxCust)} customers`;
    for(let i = 0; i < hours.length; i++){
      this.custPerHour.push( randomCust(this.minCust,this.maxCust));
    }
  },
  getCookiesPerHour: function(){
    this.getCustPerHour();
    for(let i = 0; i < this.custPerHour.length; i++){
      this.cookiePerHour.push(Math.round(this.custPerHour[i] * this.avgCookieSale));
      this.totalCookieSales += (this.cookiePerHour[i]);
    }
  }

};
let tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  cookiePerHour: [],
  custPerHour: [],
  totalCookieSales: null,
  getCustPerHour: function(){
    // this.custPerHour = `${randomCust(this.minCust,this.maxCust)} customers`;
    for(let i = 0; i < hours.length; i++){
      this.custPerHour.push( randomCust(this.minCust,this.maxCust));
    }
  },
  getCookiesPerHour: function(){
    this.getCustPerHour();
    for(let i = 0; i < this.custPerHour.length; i++){
      this.cookiePerHour.push(Math.round(this.custPerHour[i] * this.avgCookieSale));
      this.totalCookieSales += (this.cookiePerHour[i]);
    }
  }

};

let dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  cookiePerHour: [],
  custPerHour: [],
  totalCookieSales: null,
  getCustPerHour: function(){
    // this.custPerHour = `${randomCust(this.minCust,this.maxCust)} customers`;
    for(let i = 0; i < hours.length; i++){
      this.custPerHour.push( randomCust(this.minCust,this.maxCust));
    }
  },
  getCookiesPerHour: function(){
    this.getCustPerHour();
    for(let i = 0; i < this.custPerHour.length; i++){
      this.cookiePerHour.push(Math.round(this.custPerHour[i] * this.avgCookieSale));
      this.totalCookieSales += (this.cookiePerHour[i]);
    }
  }

};

let paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  cookiePerHour: [],
  custPerHour: [],
  totalCookieSales: null,
  getCustPerHour: function(){
    // this.custPerHour = `${randomCust(this.minCust,this.maxCust)} customers`;
    for(let i = 0; i < hours.length; i++){
      this.custPerHour.push( randomCust(this.minCust,this.maxCust));
    }
  },
  getCookiesPerHour: function(){
    this.getCustPerHour();
    for(let i = 0; i < this.custPerHour.length; i++){
      this.cookiePerHour.push(Math.round(this.custPerHour[i] * this.avgCookieSale));
      this.totalCookieSales += (this.cookiePerHour[i]);
    }
  }

};

let lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  cookiePerHour: [],
  custPerHour: [],
  totalCookieSales: null,
  getCustPerHour: function(){
    // this.custPerHour = `${randomCust(this.minCust,this.maxCust)} customers`;
    for(let i = 0; i < hours.length; i++){
      this.custPerHour.push( randomCust(this.minCust,this.maxCust));
    }
  },
  getCookiesPerHour: function(){
    this.getCustPerHour();
    for(let i = 0; i < this.custPerHour.length; i++){
      this.cookiePerHour.push(Math.round(this.custPerHour[i] * this.avgCookieSale));
      this.totalCookieSales += (this.cookiePerHour[i]);
    }
  }

};



function randomCust(min, max){
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
}

const allShops = [seattle, tokyo, dubai, paris, lima];



// Grabs a window in the dom

function renderShops(store) {
  
  const articleElem = document.createElement('article');
  shopsSection.appendChild(articleElem);
  
  const h1Elem = document.createElement('h1');
  h1Elem.textContent = store.location;
  articleElem.appendChild(h1Elem);

  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  for( let i = 0; i < hours.length; i++){
    const liElem = document.createElement('li');
    liElem.textContent = `${hours[i]}: ${store.cookiePerHour[i]} cookies` ;
    ulElem.appendChild(liElem);
  }
  const liElem = document.createElement('li');
  liElem.textContent = `Total:${store.totalCookieSales}`;
  ulElem.appendChild(liElem);
  
}

function getAllShops() {
  for(let i = 0; i < allShops.length; i++){
    let currentKitten = allShops[i];
    currentKitten.getCookiesPerHour();
    // console.log(allShops[i]);
    renderShops(currentKitten);
  }
}

getAllShops();
