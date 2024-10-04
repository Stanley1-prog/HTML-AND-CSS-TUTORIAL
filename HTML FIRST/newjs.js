//ouput
classJs = 'Js class started';
console.log(classJs);

//gettingIt = 34;
//console.log(gettingIt);



//alert('adelani, i hope i dont forget your name again');
document.write('Bright, be careful of David');
document.getElementById('philips').innerHTML='Philips interact in class';
console.log('Faith, Samuel and Tobi, I hope you guys are with me in class');


//Variable Decleration:var, let,const

var classJs = "New Javascript Class";
console.log(classJs);
document.getElementById('sam').innerHTML=classJs;

let gettingIt = "we are getting better at js";
console.log(gettingIt);
document.getElementById('dave').innerHTML=gettingIt;

const gotIt = "we re doing well with js";
console.log(gotIt);
document.getElementById('john').innerHTML=gotIt;

classJs = 'Naija don enter am';
console.log(classJs);

gettingIt = 'Baba Tinubu';
console.log(gettingIt);
gettingIt = 34;
console.log(gettingIt);
//gotIt ='Plus Wike';
console.log(gotIt);

//Data Types String, Number,Boolean,Array,Object,undefined,Null

//String
var str1 = 'We are starting data types';
var str2 ='in Javascript';

console.log(str1);
console.log(typeof(str1));
console.log(str2);
console.log(typeof(str2));

//Merging / Concentration of String
var strMerge = str1 +' '+ str2;
console.log(strMerge);

var strConcat = str1.concat(' ',str2);
console.log(strConcat);

//Gettting  total numbers of character in a string
var strLength = str1.length;
console.log(strLength);


var strLength = str2.length;
console.log(strLength);

//Escaping  Character(\)

var str3 = "He was quoted'Light brings about clarity'";
console.log(str3);

var str4 = 'He was quoted \'Light brings about clarity\'';
console.log(str4);

//Make all charaters Lower Case letters

 var strCapital = str4.toUpperCase();
console.log(strCapital);

//Make all Characters upper case letters

var strLower = str4.toLowerCase();
console.log(strLower);

//Get a single character
var str3singleCharacter = str4(0);
console.log(str3singleCharacter);

//Merging characters
var str3Mergered = str3[10] + str3[4] +str3[8] +str3[17] + str3[0] + str3[10];
console.log(str3Mergered);


//Convert Str3Mergered To Lower Case
var str3MergeredConv = str3Mergered.toLowerCase()
console.log(str3MergeredConv)