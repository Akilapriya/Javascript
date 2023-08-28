// for (var a = 0; a <= 5; a++) {
//   if (a == 1) {
//     // break;
//     continue;
//   }
//   console.log("a:" + a);
// }

// var a = "Akila";
// var b = 20;
// var c = "Aki";
// var d = Number(a) + b + c;
// console.log("d:", d);

// const country = ["India", "Japan", "Usa", "China"];

// country.splice(1, 0, "Uk", "Russia", "Norway");
// // country.splice(1, 3, "Uk", "Russia", "Norway");
// console.log(country);

// var obj = ["Apple", "Orange", "Mango "];

// var obj1 = obj.join(" a");

// console.log(obj1);
// console.log(typeof obj1);

// console.log("Bind Method:");
// var user1 = {
//   fname: "Akila",
//   age: 20,
//   getDetails: function (city, country) {
//     console.log(this.fname, this.age, city, country);
//   },
// };
// user1.getDetails("Chennai", "India");

// var user2 = {
//   fname: "varsha",
//   age: 24,
// };
// var details = user1.getDetails.bind(user2, "Mumbai", "India");
// details();

// console.log("Switch Condition:");

// var day;
// function myFunc(day) {
//   switch (day) {
//     case 1:
//       console.log("Sunday");
//       break;
//     case 2:
//       console.log("Monday");
//       break;
//     case 3:
//       console.log("Tuesday");
//       break;
//     case 4:
//       console.log("Wednesday");
//       break;
//     case 5:
//       console.log("Thursday");
//       break;
//     case 6:
//       console.log("Friday");
//       break;
//     default:
//       console.log("Saturday");
//   }
// }
// myFunc(3);

// console.log("Exchange the values of 2 variables:");

// function exchange(a, b) {
//   a = a + b;
//   b = a - b;
//   a = a - b;

//   console.log("a:", a);

//   console.log("b:", b);
// }
// exchange(3, 6);

// console.log("First Class Function:");
// const person = {
//   name: "Karthik",
//   play: (name) => {
//     return `Hey ${name} is playing`;
//   },
//   dance: (name) => {
//     return `${name} can dance`;
//   },
// };
// console.log(person.play("John"));

// console.log("Map Method:");

// var arr = [1, 2, 3, 4, 5];

// function squareTheElements(value) {
//   return value * value;
// }
// var newArray = arr.map(squareTheElements);
// console.log(arr);
// console.log(newArray);

// console.log("Filter Method:");

// var arr2 = [12, 18, 41, 11, 23];

// function checkGreater18(value, index) {
//   console.log(value, index);
//   return value >= 18;
// }

// var filteredArray = arr2.filter(checkGreater18);

// console.log(filteredArray);

// or;

// var arr2 = [12, 18, 41, 11, 23];

// let checkGreater18 = (value, index) => {
//   console.log(value, index);
//   return value >= 18;
// };

// var filteredArray = arr2.filter((value, index) => {
//   console.log(value, index);
//   return value >= 18;
// });
// console.log(filteredArray);

// console.log("Reduce Method:");

// let numbers = [12, 34, 56, 67, 10];
// let sum1 = numbers.reduce((prevValue, currValue) => {
//   return prevValue + currValue;
// });

// console.log(sum1);

// console.log("For Each:");

// var numbers1 = [12, 18, 41, 11, 23];

// for (let num of numbers1) {
//   console.log(num);
// }

// numbers1.forEach((value, index) => {
//   console.log(value, index);
// });

// console.log("Closure:");
// let add = function () {
//   var i = 0;

//   return function () {
//     i++;
//     console.log(i);
//   };
// };
// let sum = add();

// sum();
// sum();
// sum();
// sum();

// console.log("Map Object:");

// let fruits = new Map([
//   ["apples", 500],
//   ["bananas", 200],
//   ["oranges", 100],
// ]);

// fruits.forEach((value, key) => {
//   console.log(value, key);
// });

// var a=[...fruits];//converting from map to array

// console.log(a);

// console.log("Set Object:");

// let arr = [1, 4, 5, 2, 6, 1, 4, 5];

// let currencies = new Set(arr);

// currencies.forEach((value) => {
//   console.log(value);
// });
// var b = [...currencies];

// console.log(b);

// console.log("For Object:");
// var request={
//   name:"Akila",
//   pass:"123987657"
// }

// console.log(request);
//  var data=JSON.stringify(request);
//  console.log(data);
//  localStorage.setItem("user", data);

//  var user=localStorage.getItem("user");
// var jsonUser=JSON.parse(user);
//  console.log(jsonUser.name);

//  console.log("For Array:");

//  var req=["Saran", "Divya"];
//  console.log(req);
//  var data=JSON.stringify(req);
//  console.log(data);
//  localStorage.setItem("user", data);

//  var user=localStorage.getItem("user");
//  var jsonUser=JSON.parse(user);
//   console.log(jsonUser);

//   console.log("ArrayObjects:");
//   var arrObj=[
//     {
//       name:"Akila",
//       age:20
//     },
//     {
//       name:"Arun",
//       age:22
//     },
//     {
//       name:"Varsha",
//       age:23
//     }
//   ];
//   console.log(arrObj);
//  var data=JSON.stringify(arrObj);
//  console.log(data);
//  localStorage.setItem("user", data);

//  var user=localStorage.getItem("user");
//  var jsonUser=JSON.parse(user);
//   console.log(jsonUser);
//   jsonUser.forEach(element=>{
//     console.log(element.name);
//   })


// console.log("Create table:")
//   var users=[
//     {
//       id:1,
//       name:"Akila",
//       age:20
//     },
//     {
//       id:2,
//       name:"Priya",
//       age:22
//     },
//     {
//       id:3,
//       name:"Dany",
//       age:23
//     }
//   ];

//   var usertbody=document.getElementById("userTbody");
//   users.forEach(data=>{
//     usertbody.innerHTML += `<tr>
//                             <td>${data.name}</td>
//                             <td>${data.age}</td>
//                          </tr>`
//   })

// console.log("Task:");

// window.onload = init;
// var usersList = [];
// var users = [];

// function init() {
//   var user = localStorage.getItem("user");
//   user ? users.push(JSON.parse(localStorage.getItem("user"))) : "";
//   console.log("UsersList from localStorage:", users);

//   // var usertbody = document.getElementById("userTbody");
//   // users.forEach((data) => {
//   //   usertbody.innerHTML += `<tr>
//   //                           <td>${data.name}</td>
//   //                           <td>${data.age}</td>
//   //                           <td>${data.designation}</td>
//   //                           <td>${data.email}</td>
//   //                           <td>${data.phone}</td>
//   //                        </tr>`;
//   // });
// }

// function submit() {
//   var newUser = {
//     name: document.getElementById("name").value,
//     age: document.getElementById("age").value,
//     designation: document.getElementById("desgn").value,
//     email: document.getElementById("email").value,
//     phone: document.getElementById("phone").value,
//   };
//   console.log(newUser);
//   usersList.push(newUser);
//   console.log("Users List:", usersList);

//   var data = JSON.stringify(usersList);
//   console.log("Data:", data);
//   localStorage.setItem("user", data);


//   var usertbody = document.getElementById("userTbody");
//   usertbody.innerHTML = "";
//   usersList.forEach((data) => {
//     usertbody.innerHTML += `<tr>
//                             <td>${data.name}</td>
//                             <td>${data.age}</td>
//                             <td>${data.designation}</td>
//                             <td>${data.email}</td>
//                             <td>${data.phone}</td>
//                          </tr>`;
//   });
//   clearFormValues();
// }

// function clearFormValues() {
//   var newUser = {
//     name: (document.getElementById("name").value = ""),
//     age: (document.getElementById("age").value = ""),
//     designation: (document.getElementById("desgn").value = ""),
//     email: (document.getElementById("email").value = ""),
//     phone: (document.getElementById("phone").value = ""),
//   };
// }
// function clear() {
//   // localStorage.removeItem(key);
//   localStorage.clear();
// }
// //clear();

// var num=[1, 4, 3, 7, 2, 8, 5, 9];
//  var asce=num.sort();
//  console.log(asce)
//  var desc=asce.reverse();
//  console.log(desc)

//  var a=num.sort(function(a,b){
//   return a-b
// })
//  console.log(a)

//  var d=num.sort(function(a,b){
//   return b-a
// })
//  console.log(d)

//  var n=[1,2 ,1 ,3, 1, 4, 3, 7, 3, 8]
 
//  var u=[];
//  for(var x of n){
//   if(!u.includes(x)){
//     u.push(x);
//   }
//  }
// console.log(u);
 

var array=[2,4,6,4,12,6, 2, 6, 8, 6, 7, 8, 9,4]
// function elementCount(arr, element){
//     return arr.filter(currentelement=>currentelement==element).length;
// }

// console.log(elementCount(array, 6))

// var elementCount={};
// max='', count=0;
// for(var x of array){
// if(elementCount[x]){
//     elementCount[x]+=1;
// }
// else{
//     elementCount[x]=1;
// }
// if(count<elementCount[x]){
//     max=x;
//     count=elementCount[x];
// }
// }

// console.log(elementCount);
// console.log(max, count)




// var obj = {
//     "name": "ssss",
//     "loc": "Hyderabad",
//     "add": {
//         "home": "mallapur",
//         "pincode": "0000000"
//     }
// };


// var output = obj.name + ", " + obj.loc + ", " + obj.add.home + ", " + obj.add.pincode;
// console.log(output);


// async function fetchData(){
//     var output= await fetch("https://jsonplaceholder.typicode.com/users");
//     var response=await output.json();
//     console.log(output)
//     console.log(response)
//     }
    
//     fetchData() 

// console.log(name)
//     var name=10;
// console.log(location)
