'use strict';

let Mega=['Totals',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function randomValue(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
// a golobal contatiner is better
let container = document.getElementById('cont');
let article = document.createElement('article');
container.appendChild(article);
let workinghours = ['------','06:00 am','07:00 am', '08:00 am', '09:00 am', '10:00 am','11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm' ,'07:00 pm'];


function Locations(cityName,minc,maxc,avg) {
  this.cityName=cityName;
  this.minc=minc;
  this.maxc=maxc;
  this.avg=avg;
  this.randomcust=[];
  this.cookiesperhour=[],
  this.total=0;
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
  console.log(this.randomcust);
};
Locations.prototype.calcookiesperhour = function()
{
  for(let i=0;i<14;i++){
    this.cookiesperhour.push(Math.ceil(this.randomcust[i]*this.avg));
    this.total=this.total+this.cookiesperhour[i];
    // console.log(this.cookiesperhour[i]);
    console.log(this.total);
  }
};
Locations.prototype.render= function(){
  let table=document.createElement('table');
  article.appendChild(table);
  let headerrow=document.createElement('hr');
  table.appendChild(headerrow);
  this.cookiesperhour.push(this.total);
  let datarow=document.createElement('dr');
  let cityname=document.createElement('dr');
  table.appendChild(cityname);
  table.appendChild(datarow);
  cityname.textContent=this.cityName;
  for(let i=0;i<=14;i++)
  {
    let td1=document.createElement('td');
    datarow.appendChild(td1);
    td1.textContent=this.cookiesperhour[i];
    // console.log(this.cookiesperhour[i]);
  }
  for(let i=1;i<=15;i++)
  {
    if(i===1){
      Mega[i]= Mega[i]+this.cookiesperhour[i-1];
      console.log(Mega[i]);}
    if(i===2){
      Mega[i]= Mega[i]+this.cookiesperhour[i-1];
      console.log(Mega[i]);}
    if(i===3){
      Mega[i]= Mega[i]+this.cookiesperhour[i-1];
      console.log(Mega[i]);}
    if(i===4){
      Mega[i]= Mega[i]+this.cookiesperhour[i-1];
      console.log(Mega[i]);}
    if(i===5){
      Mega[i]= Mega[i]+this.cookiesperhour[i-1];
      console.log(Mega[i]);}
    if(i===6){
      Mega[i]= Mega[i]+this.cookiesperhour[i-1];
      console.log(Mega[i]);}
    if(i===7){
      Mega[i]= Mega[i]+this.cookiesperhour[i-1];
      console.log(Mega[i]);}
    if(i===8){
      Mega[i]= Mega[i]+this.cookiesperhour[i-1];
      console.log(Mega[i]);}
    if(i===9){
      Mega[i]= Mega[i]+this.cookiesperhour[i-1];
      console.log(Mega[i]);}
    if(i===10){
      Mega[i]= Mega[i]+this.cookiesperhour[i-1];
      console.log(Mega[i]);}
    if(i===11){
      Mega[i]= Mega[i]+this.cookiesperhour[i-1];
      console.log(Mega[i]);}
    if(i===12){
      Mega[i]= Mega[i]+this.cookiesperhour[i-1];
      console.log(Mega[i]);}
    if(i===13){
      Mega[i]= Mega[i]+this.cookiesperhour[i-1];
      console.log(Mega[i]);}
    if(i===14){
      Mega[i]= Mega[i]+this.cookiesperhour[i-1];
      console.log(this.cookiesperhour[i]);}
    if(i===15){
      Mega[i]= Mega[i]+this.cookiesperhour[i-1];
      console.log(this.cookiesperhour[i]);}
    if(i===16){
      Mega[i]= Mega[i]+this.cookiesperhour[i-1];
      console.log(this.cookiesperhour[i]);}
  }
};
function megatotal()
{
  let table=document.createElement('table');
  article.appendChild(table);
  let headerrow=document.createElement('hr');
  table.appendChild(headerrow);
  for(let i=0;i<16;i++)
  { let datarow=document.createElement('dr');
    table.appendChild(datarow);
    let td1=document.createElement('td');
    datarow.appendChild(td1);
    td1.textContent=Mega[i];
    // console.log(this.cookiesperhour[i]);
  }
}

function mainheader(){
  let table=document.createElement('table');
  article.appendChild(table);
  let headerrow=document.createElement('hr');
  table.appendChild(headerrow);
  // let workinghours = ['-----------','06:00 am','07:00 am', '08:00 am', '09:00 am', '10:00 am','11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm' ,'07:00 pm','	Daily Location Total'];
  for(let i=0;i<workinghours.length;i++)
  { let thelement=document.createElement('th');
    headerrow.appendChild(thelement);
    thelement.textContent=workinghours[i];
    console.log(workinghours[i]);
  }
}
mainheader();
city1.calrandcust();
city1.calcookiesperhour();
city1.render();
city2.calrandcust();
city2.calcookiesperhour();
city2.render();
city3.calrandcust();
city3.calcookiesperhour();
city3.render();
city4.calrandcust();
city4.calcookiesperhour();
city4.render();
city5.calrandcust();
city5.calcookiesperhour();
city5.render();
megatotal();



// Seattle={
//   minc:23,
//   maxc :65,
//   avg:6.3,
//   city: 'Seattle',
//   total:0,
//   randomcust:[],
//   cookiesperhour: [],
//   calrandcust : function(){
//     for(let i=0;i<workinghours.length;i++)
//     {
//       this.randomcust.push(randomValue(this.minc, this.maxc));
//     }
//   },
//   calcookiesperhour : function(){

//   },
//   display : function(){
//     let h2=document.createElement('h2');
//     article.appendChild(h2);
//     h2.textContent=this.city;
//     let ul =document.createElement('ul');
//     article.appendChild(ul);
//     let li=null;
//     for(let i=0;i<this.cookiesperhour.length;i++)
//     {
//       li=document.createElement('li');
//       ul.appendChild(li);
//       li.textContent=workinghours[i] +':'+ this.cookiesperhour[i]+' Cookies ';
//     }
//     let totalli=document.createElement('li');
//     ul.appendChild(totalli);
//     totalli.textContent='Total of '+ this.total+ ' cookies were sold';
//   }
// };
// Seattle.calrandcust();
// Seattle.calcookiesperhour();
// console.log(Seattle);
// Seattle.display();




// const Tokyo={
//   minc:3,
//   maxc :24,
//   avg:1.2,
//   city: 'Tokyo',
//   total:0,
//   randomcust:[],
//   cookiesperhour: [],
//   calrandcust : function(){
//     for(let i=0;i<workinghours.length;i++)
//     {
//       this.randomcust.push(randomValue(this.minc, this.maxc));
//     }
//   },
//   calcookiesperhour : function(){
//     for(let i=0;i<14;i++){
//       this.cookiesperhour[i]=Math.ceil(this.randomcust[i]*this.avg);
//       this.total=this.total+this.cookiesperhour[i];
//       console.log(this.total);
//     }
//   },
//   display : function(){
//     let h2=document.createElement('h2');
//     article.appendChild(h2);
//     h2.textContent=this.city;
//     let ul =document.createElement('ul');
//     article.appendChild(ul);
//     let li=null;
//     for(let i=0;i<this.cookiesperhour.length;i++)
//     {
//       li=document.createElement('li');
//       ul.appendChild(li);
//       li.textContent=workinghours[i] +':'+ this.cookiesperhour[i]+' Cookies ';
//     }
//     let totalli=document.createElement('li');
//     ul.appendChild(totalli);
//     totalli.textContent='Total of '+ this.total+ ' cookies were sold';
//   }
// };
// Tokyo.calrandcust();
// Tokyo.calcookiesperhour();
// console.log(Tokyo);
// Tokyo.display();

// const Dubai={
//   minc:11,
//   maxc :38,
//   avg:3.7,
//   city: 'Duabi',
//   total:0,
//   randomcust:[],
//   cookiesperhour: [],
//   calrandcust : function(){
//     for(let i=0;i<workinghours.length;i++)
//     {
//       this.randomcust.push(randomValue(this.minc, this.maxc));
//     }
//   },
//   calcookiesperhour : function(){
//     for(let i=0;i<14;i++){
//       this.cookiesperhour[i]=Math.ceil(this.randomcust[i]*this.avg);
//       this.total=this.total+this.cookiesperhour[i];
//       console.log(this.total);
//     }
//   },
//   display : function(){
//     let h2=document.createElement('h2');
//     article.appendChild(h2);
//     h2.textContent=this.city;
//     let ul =document.createElement('ul');
//     article.appendChild(ul);
//     let li=null;
//     for(let i=0;i<this.cookiesperhour.length;i++)
//     {
//       li=document.createElement('li');
//       ul.appendChild(li);
//       li.textContent=workinghours[i] +':'+ this.cookiesperhour[i]+' Cookies ';
//     }
//     let totalli=document.createElement('li');
//     ul.appendChild(totalli);
//     totalli.textContent='Total of '+ this.total+ ' cookies were sold';
//   }
// };
// Dubai.calrandcust();
// Dubai.calcookiesperhour();
// console.log(Dubai);
// Dubai.display();

// const Paris={
//   minc:20,
//   maxc :38,
//   avg:2.3,
//   city: 'Paris',
//   total:0,
//   randomcust:[],
//   cookiesperhour: [],
//   calrandcust : function(){
//     for(let i=0;i<workinghours.length;i++)
//     {
//       this.randomcust.push(randomValue(this.minc, this.maxc));
//     }
//   },
//   calcookiesperhour : function(){
//     for(let i=0;i<14;i++){
//       this.cookiesperhour[i]=Math.ceil(this.randomcust[i]*this.avg);
//       this.total=this.total+this.cookiesperhour[i];
//       console.log(this.total);
//     }
//   },
//   display : function(){
//     let h2=document.createElement('h2');
//     article.appendChild(h2);
//     h2.textContent=this.city;
//     let ul =document.createElement('ul');
//     article.appendChild(ul);
//     let li=null;
//     for(let i=0;i<this.cookiesperhour.length;i++)
//     {
//       li=document.createElement('li');
//       ul.appendChild(li);
//       li.textContent=workinghours[i] +':'+ this.cookiesperhour[i]+' Cookies ';
//     }
//     let totalli=document.createElement('li');
//     ul.appendChild(totalli);
//     totalli.textContent='Total of '+ this.total+ ' cookies were sold';
//   }
// };
// Paris.calrandcust();
// Paris.calcookiesperhour();
// console.log(Paris);
// Paris.display();


// const Lima={
//   minc:2,
//   maxc :16,
//   avg:4.6,
//   city: 'Lima',
//   total:0,
//   randomcust:[],
//   cookiesperhour: [],
//   calrandcust : function(){
//     for(let i=0;i<workinghours.length;i++)
//     {
//       this.randomcust.push(randomValue(this.minc, this.maxc));
//     }
//   },
//   calcookiesperhour : function(){
//     for(let i=0;i<14;i++){
//       this.cookiesperhour[i]=Math.ceil(this.randomcust[i]*this.avg);
//       this.total=this.total+this.cookiesperhour[i];
//       console.log(this.total);
//     }
//   },
//   display : function(){
//     let h2=document.createElement('h2');
//     article.appendChild(h2);
//     h2.textContent=this.city;
//     let ul =document.createElement('ul');
//     article.appendChild(ul);
//     let li=null;
//     for(let i=0;i<this.cookiesperhour.length;i++)
//     {
//       li=document.createElement('li');
//       ul.appendChild(li);
//       li.textContent=workinghours[i] +':'+ this.cookiesperhour[i]+' Cookies ';
//     }
//     let totalli=document.createElement('li');
//     ul.appendChild(totalli);
//     totalli.textContent='Total of '+ this.total+ ' cookies were sold';
//   }
// };
// Lima.calrandcust();
// Lima.calcookiesperhour();
// console.log(Lima);
// Lima.display();
