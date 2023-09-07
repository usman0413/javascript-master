//var let const
// var ma 2 tareekay hain - or - const ma 1  tareeka hai
// 2 version of javascript - ES5 - ES6
// ES5 version ma sirf var tha - or - ES6 ma Let or const hai
// we use ES5 + ES6
//hmara jo web  browser update hota hai to htm css javsscript ki properties khud hi add ho jti ha
//variable ma 2 tareeeky hain pehla var or dusra Let

// Var old version of javascript ma tha
//var function scoped hota ha => var apny parent function ma khi b use ho skta ha
//var jb b bnaya uska parent khi b  function ma use hio skta hs

//function ma agr ek variable bnta hai to hm variable ko function ma khi b use kr skty hain
// function abcd(){
//     for(var i=0;i<10;i++){
//         console.log(i)
//     }
//     console.log(i)
// }
// abcd()
// let/const new version of javascript ma hai
// let/const braces scoped hota ha
// function efgh(){
//     for(let i=0;i<10;i++){
//         console.log(i)
//     }
// }
// efgh()

//var adds itself to the window object
//let/const doesn't adds
//Variable khud ko window ma ad krta hai magr let/const ni add krta
//js language ma kuch cheezain ni hain jo  hm use kr skty hain blky wo hmain javascript sa ni blky browser sa milti hain
// aisy sareb features jo js ka hisa ni hain bly hm phr b usy use n kr skty hain usy hm dhoond skty hain ek particular
// object ma jiska naam hai window

//js ma kai sare features hain jo hum use krty hain wo features  ni hain fer b  hm use kr paty hain ku ky wo features  js
//use kr  leti hai window sa aur window hai ek box of featues given by browser to use with js

//alert() - prompt - console - is not the  part of javascript

//Stack
// program to implement stack data structure
// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     // add element to the stack
//     add(element) {
//         return this.items.push(element);
//     }

//     // remove element from the stack
//     remove() {
//         if(this.items.length > 0) {
//             return this.items.pop();
//         }
//     }

//     // view the last element
//     peek() {
//         return this.items[this.items.length - 1];
//     }

//     // check if the stack is empty
//     isEmpty(){
//        return this.items.length == 0;
//     }

//     // the size of the stack
//     size(){
//         return this.items.length;
//     }

//     // empty the stack
//     clear(){
//         this.items = [];
//     }
// }

// let stack = new Stack();
// stack.add(1);
// stack.add(2);
// stack.add(4);
// stack.add(8);
// console.log(stack.items);

// stack.remove();
// console.log(stack.items);

// console.log(stack.peek());

// console.log(stack.isEmpty());

// console.log(stack.size());

// stack.clear();
// console.log(stack.items);

//jitny b data apky  program ma hota hao intermediateb  data usy kahi nna  store krna prta hai usr heap memory khty hain

//execution context mtlb jb b hum function chalain gy function apna ek khud ka imaginary container bna ly ga jisma uski
//3 cheezain hoongi...
//01) Variables
//02)Function inside the parent function
//03)lexical environment of that  function

//ye jo container hai imaginary isy hi execution context khty hain

//function chlty sath phli hi jo cheez bnti hai wo hota hai execution context

//jitny varibales ek function ky bandr bnaty hai wo sb ek ececution context ma hoty hain
//agr ek function ky andr multiple function create kiye hain to wo b available rahain gy
//  function abcd(){
//     var a = "usman";
//     console.log(a)
//     function ious(){
//         var b = 21;
//         console.log(b)
//         function tuio(){
//             var c = "UMT";
//             console.log(c)
//         }
//         tuio()
//     }
//     ious()
//  }

//  abcd()

//execution context is a container where the function code is executed it's created whenever a function is called
//it  contains 3 things
//01) variable
//02)function
//03)lexical environment

//lexical environment hota hai ek chhart jis ma ye likha hota hai ky apka particular function kin cheezon ko access kr skta hai
//or kinko nahi and it holds its scope and scope chain

//how to copy reference values
// 3 dots in array is called spread operator

// let a = [1,2,3,4,5]
// let b = [...a];
// b.pop();

//Js ma kuch b likho wo mailny 2 types ma sa ksi 1 type ko lazmi belong krti ha

//truthy or falsy - ye truth  or  false sa alag  hai
//falsy values ye hain - 0 Null false undefined NaN document.all - or - inky ilawa sari values truthy hoti hain

// if(0){
//     console.log("TURKEY")
// }
// else {
//     console.log("PAKISTAN")
// }

//SWITCH

// switch (1) {
//   case 1:
//     console.log("Hey i'm Muhammad Usman Arif")
//     break;
//   case 2:
//    console.log("Hey!! Are you a freelancer?")
//     break;
//   default:
// }

//For-each //For-in //these 2 are important
//do-while

//foreach loog sirf array pa chlta hai mtlb ky jb bhi tmhry pass ek array ho to use ma kon ata hai ? for each loop...!!

//foreach kabhi b by default array ma change ni krta wo apko changes kr ky deta hai  array ki temprory copy par jiski wja sa array hamesha same rhta hai

// var a =  [5,4,12,4,7,98,45,33]   
// a.forEach(function(val){   //val is a variable
//  console.log(val-5);
// })

// var b = [1,2,3,4,5]

// b.forEach(function(val){
//      console.log(val*2) 
// })

//Forin loop

//objects par  loop krny ky  liye hota hai forin loop

// var obj = {
//     name : "usman",
//     age : 21,
//     university : " UMt",
//     programming : "  Javascript"
// }

// for (var key in obj){
//     console.log(key,obj[key])
// }

//dowhile
 
var a = 20;

// do{
//  console.log("hey")
//  a++;
// }
// while(a < 15)

//Call Back Function 

//jab bhi koi function jo baad ma chlta hai  ap likho gy ku ky wo code baad  ma chlta hai  mylb js ko ye  pta ni hota ky wo complete hua hai ya ni
//aesy code ek completion par js ko btaya jata hai ky wo complete  ho gya  or ap usy chla skty  ho or ye btany ka kaam call back function ka hai

   //This is asynchronus js
// setTimeout(function(){   //setTimeout ka mtlb hota hai ky is function ko thori dair baad chlao 
//  console.log("1 second baad chlao")

// } , 1000);  //2000  ka mtlb hota hai miliseconds isko hm na hi  seconds ma likh skty hain  or na minutes ma 

//aisa code  jo baad ma chalta hai usy hm ek function da dety hain ke jb jb wo complete ho  jay to ye function  chla dy , or wo function jo hm dete  
//wo simple  function hi htoa hai  jisy hm call back function khty hain


//First Class Function 

//Js ma ek concept hai jiska mtlb hota hai ky  ap functions ko use kr skty ho as a value  


// function abcd(a){
//   a();
// }
// abcd(function(){
//     console.log("Usman arif")
// })


//How arrays  are made behind the scene 

// var arr =  [ 1,2,3,4,5]

// arr = {
//     0 : 1,
//     1 : 2,
//     3 : 5
// }


//Delete Object Prop

// var a = {
//     name : "usman",
//     age : 23,
//     University : "UMT"
// }
// delete a.name;