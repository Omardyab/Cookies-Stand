## This is a new project we have at LTUC 
### here will be listing what I learned during the project :)
### The project is about a cookie-Stand Shop 
first, we had a revision about the sale page: 

The project is about a shop 
6am-7pm 
calculate-Number of cookies sold per hour 
inputs 	-min (customer per hour) 
	-max (cph)
	-avg per sale
Steps:
cal -number of customers per hour 
using helper function (min,max)
array can be a sol, [8,9,12,22]
2nd array [8*avg,9*avg,... ] 
expected results: 
200 300

my mistakes: 
1-access the object from outside and inside (use this, use object name.function-name) 
2-assigning inside and outside the object can be confusing. 
3-Script should be inside the body (javascript)
4-appendChild can be used for others (not only parent) 


Consrtuctor function
Def: a template or a blueprint for our objects that we want to create instead of keeping creating them over and over again
in a simpler way. they share the same properties.    
-FIRST LETTER should be capital  
-this.name of the property that we want to pass.

A simple example is:
function Colleage(prop you wan to pass){
this.stdName= prop;
 this.grade=function()
 {
 console.log('you passed')
 }
console.log(this);// what objects you have would be showing 
}
//creting an object 
let std1=new Colleage(pass the values here)
console.log(std1);
//function Nameoffunction(,){ this.prop1= type; ......}
object1.functioninsideconsrtuctor();

//Objects in Array: 
let arr=[object1,object2, etc]

creat methods outside the constructor to save memory, in other words, prototype
by default javascript comes with a constructor and other things.
Const.prototype.functionName function() {
console.log('${this.name}'walking under the rain)
}
the function would be now part of the constructor, attached to it, no longer part of the object itself.
Make sure to create your prototype function prior to your object, this avoids you undefined problems. 

Creating a new object called a new instance.
You can also dynamically method add Objects by pushing each object you create within an empty array name-of-array.push(this);
Creating an object is always a priority and would be executed first no matter what. 
Table: 
Html element, 
th=tabel header
td=tabel data
tr=table row
tc=table column
  
<table>  
 <tr>
   <th>Name</th>
   <th>Age</th>
   <th>Height</th>
</table>  
 
in js
create a table header then row so you won't have problems.
you can style it using CSS 
 
keep in mind:
1-Create the constructor(as a function)
2-Create the objects
3-Create the methods/prototype functions 
4-Create a container as a prototype function linked to the id in the HTML page.
5-Use for loops for dynamic purposes

q: backtick?

#### Credits Omar D'yab 
