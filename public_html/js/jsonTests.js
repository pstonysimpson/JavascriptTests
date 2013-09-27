var obj1 = {user:"Tony", age:33, country:"UK"};//sets properties ofor the obj1 var
var obj2 = {user:"Kylie", age:29, country:"CN"};//sets properties for the obj2 var
var obj3 = {user:"Shane", age:5, country:"WV"};//sets properties for the obj3 var
var obj4 = { u1:obj1, u2:obj3, u3:obj3 };//each value holds all keys and values from its associated var

document.write(obj3.user+" is "+obj3.age);//displays name and age from obj3
obj3.age = 7;//changes the age of obj3
document.write(obj3.user+" is "+obj3.age);//displays new age of obj3
document.write(obj4.u1.user);//displays users name from obj1 (held in obj4)
document.write(obj4["u1"]["user"]);//this works the same as above line

document.write('<br/>');

var meat = ["beef", "pork", "lamb"];//basic array
var condiments = ["horseraddish", "mint", "apple", "ketchup"];//basic array
var obj5 = {arr1:meat, arr2:condiments};//assigns meat to arr1 and condiments to arr2 in obj5
document.write(obj5.arr1[0] + " with " + obj5.arr2[0]); 
//above: accesed by var.key[val] using + to concatinate data

