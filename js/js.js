'use strict';
let lastrwovalue=0;
function randomValue(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
// a golobal contatiner is better
let container = document.getElementById('cont');
let table=document.createElement('table');
container.appendChild(table);
let shops=[];
let workinghours = ['06:00 am','07:00 am', '08:00 am', '09:00 am', '10:00 am','11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm' ,'07:00 pm'];
function Locations(cityName,minc,maxc,avg) {
  this.cityName=cityName;
  this.minc=minc;
  this.maxc=maxc;
  this.avg=avg;
  this.randomcust=[];
  this.cookiesperhour=[],
  this.total=0;
  shops.push(this);
  console.log(this);
}
let city1= new Locations ('Seattle',23,65,6.3);
let city2= new Locations ('Tokyo',3,24,1.2);
let city3= new Locations ('Dubai',11,38,3.7);
let city4= new Locations ('Paris',20,38,2.3);
let city5= new Locations ('Lima',2,16,4.6);

Locations.prototype.calrandcust = function()
{
  for(let i=0;i<workinghours.length;i++)
  {
    this.randomcust.push(randomValue(this.minc, this.maxc));
  }
  // console.log(this.randomcust);
};
Locations.prototype.calcookiesperhour = function()
{
  for(let i=0;i<14;i++){
    this.cookiesperhour.push(Math.ceil(this.randomcust[i]*this.avg));
    this.total=this.total+this.cookiesperhour[i];
    // console.log(this.cookiesperhour[i]);
    // console.log(this.total);
  }
};
function headerrow(){
  let frow=document.createElement('tr');
  table.appendChild(frow);
  let emptycell=document.createElement('th');
  frow.appendChild(emptycell);
  // no need a text content here its an empty cell
  // remember inside a normal function you cant use this . its not a prototype
  let th=null;
  for(let i=0;i<workinghours.length;i++)
  {
    th=document.createElement('th');
    frow.appendChild(th);
    th.textContent=workinghours[i];
  }
  let dailylh=document.createElement('th');
  frow.appendChild(dailylh);
  dailylh.textContent='Daily locations total';
}
headerrow();
Locations.prototype.render= function(){
  let rowdata=document.createElement('tr');
  table.appendChild(rowdata);
  let locname=document.createElement('th');
  rowdata.appendChild(locname);
  locname.textContent=this.cityName;
  this.cookiesperhour.push(this.total);
  for(let i=0;i<this.cookiesperhour.length;i++)
  {
    let td=document.createElement('td');
    rowdata.appendChild(td);
    td.textContent=`  ${this.cookiesperhour[i]}  `;
    // console.log(this.cookiesperhour[i]);
  }
};
Locations.prototype.cal=function(){
  this.calrandcust();
  this.calcookiesperhour();
  this.render();
};
const form=document.getElementById('cookies');
form.addEventListener('submit',funform);
city1.cal();
city2.cal();
city3.cal();
city4.cal();
city5.cal();
console.log('this is last row value fun is working',lastrwovalue);
lastrow();

function funform(event) {
  event.preventDefault();
  let cityname=event.target.cname.value;
  console.log(cityname);
  let Min=event.target.Min.value;
  console.log(Min);
  let max=event.target.max.value;
  console.log(max);
  let avg=event.target.avg.value;
  console.log(avg);
  let citynew= new Locations(cityname,Min,max,avg);
  citynew.cal();
  let rowCount = table.rows.length;
  table.deleteRow(rowCount -2);
  lastrow();

}
function lastrow(){
  let lrow=document.createElement('tr');
  table.appendChild(lrow);
  let fcell=document.createElement('th');
  lrow.appendChild(fcell);
  fcell.textContent='Total';
  let td=null;
  console.log(shops);
  let sum=0;
  for (let i=0; i <=workinghours.length ; i++)
  { sum=0;
    for(let j=0;j<shops.length;j++)
    {
      sum=sum+shops[j].cookiesperhour[i];
    }
    td=document.createElement('td');
    lrow.appendChild(td);
    td.textContent=sum;
  }
}

