// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"];
var newcats = [...cats];
var newcats2 = [...cats];
var newcats3 = [...cats];

function destructivelyAppendCat(name){
cats.push(name);
return cats;
}
function destructivelyPrependCat(name){
cats.unshift(name);
return cats;
}
function destructivelyRemoveLastCat(name){
cats.pop(name);
return cats;
}
 function destructivelyRemoveFirstCat(name){
cats.shift(name);
return cats;
}
function appendCat(name){
cats = [...cats,name];
return cats;
}
function prependCat(name){
newcats.unshift(name);
return newcats;
}
function removeLastCat(name){
newcats2.pop(name);
return newcats2;
}
function removeFirstCat(name){
newcats3.shift(name);
return newcats3;
}