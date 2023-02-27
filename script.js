console.log("Q1. Programs using anonymous function & IIFE");

// Rotate an array by k times

// Q1.a. Print odd numbers in an array
console.log("Print odd numbers in an array");
let arr = [1,2,3,4,6,8,9];
(function() {
   for(let i=0; i < arr.length; i++){
       if(arr[i] % 2 !== 0)
         console.log(arr[i]);
   };
}());

// b.Convert all the strings to title caps in a string array 
console.log("Convert all the strings to title caps in a string array");
let strarr = ["kalai", "usha", "kavisha", "baskar", "vicky", "saba", "ajitha"];
(function() {
    for(let i=0; i < strarr.length; i++){
        let s = strarr[i];
        s = s[0].toUpperCase() + s.substring(1);
        strarr[i] = s;
    };
    console.log(strarr);
 }());

 // c. Sum of all numbers in an array 
 let mark = [75,45,68,92,88];
 (function(arr) {
    let sum = 0;
    for(let i=0; i < arr.length; i++){
        sum += arr[i];
    };
    console.log("Array sum:",sum);
 }(mark));

 // d. Return all the prime numbers in an array 
 let range = [23,10,49,5,16,67,6,37,11,19,2,33,1,24,81,0,3,7,73];
 let res = (function(arr) {
    let op = [];   
    for(let i=0; i < arr.length; i++){           
        if((function (num) {
            if(num < 2)
               return false;
            for(z=2; z<= (num/2) ; z++){
                if(num % z === 0)
                   return false;
            }
            return true;
        })(arr[i])) {
            op.push(arr[i]);
        }
     };
  //  console.log(op);
    return op;
 }(range));
 console.log("Prime numbers:",res);

 // e. Return all the palindromes in an array 
 let sample = ["damad", 121, "a00a", "radar", "motor", 12012 , "tomato","alia"];
 let palindrome = (function(arr) {
    let op = [];   
    for(let i=0; i < arr.length; i++){           
        if((function (txt) {
            txt = String(txt);
            let txt1 = txt;
            txt1 = txt1.split("").reverse().join("");
            if(txt === txt1)
               return true;
            else 
                return false;
        })(arr[i])) {
            op.push(arr[i]);
        }
     };
    return op;
 }(sample));
 console.log("Palindromes :",palindrome); 

 // f. Return median of two sorted arrays of the same size. 
 let eArr1 = [2, 11, 17, 34,];
 let eArr2 = [3, 13, 27, 47]; 
 let median = (function(arr1, arr2) { 
    let op = arr1.concat(arr2);   
    op.sort((a,b) => a-b);
    let mid = op.length/2;
    return (op[mid-1] + op[mid])/2;
 }(eArr1,eArr2));
 console.log("Median of array",median); 

 // g. Remove duplicates from an array 
 let list = ["ram", "sita", 23, "rahul", true, false, true, 23, 12, 10, "ram" , 10];
 let newlist = (function(arr) {
    let op = [];   
    for(let i=0; i < arr.length; i++){           
        if( ! op.includes(arr[i]) ) {
            op.push(arr[i]);
        }
     };
    return op;
 }(list));
 console.log("removed duplitcates ", newlist);  

 //h. Rotate an array by k times
 let array = [1,2,3,4,5,6,7,8,9];
 let rotate = 11;
(function(k) { 
    k = k % array.length;
   for(let i=0; i < k; i++){
       let x = array.shift();
       array.push(x);
   };
}(rotate));
console.log("Rotated array:",array);  

/////////////////////////////////////////////////////////////////////////////
// console.log("Q3. Programs using arrow function");

// // Q1.a. Print odd numbers in an array
// console.log("Print odd numbers in an array using =>");
// let arr = [1,2,3,4,6,8,9];
// arr.forEach( (el) => {
//         if(el % 2 !== 0)
//           console.log(el);
// } );

// // b.Convert all the strings to title caps in a string array 
// console.log("Convert all the strings to title caps in a string array using =>");
// let strarr = ["kalai", "usha", "kavisha", "baskar", "vicky", "saba", "ajitha"];
// let cap = strarr.map( (el) => {
//      el = el[0].toUpperCase() + el.substring(1);
//      return el;
//     });
// console.log(cap);


//  // c. Sum of all numbers in an array 
//  let mark = [75,45,68,92,88];
// console.log("Array sum is", mark.reduce((a,c) =>  a+c,0));


//  // d. Return all the prime numbers in an array 
//  let range = [23,10,49,5,16,67,6,37,11,19,2,33,1,24,81,0,3,7,73];
//  let prime =  range.filter((num) => {           
//             if(num < 2)
//                return false;
//             for(z=2; z<= (num/2) ; z++){
//                 if(num % z === 0)
//                    return false;
//             }
//             return true;
//         });
//  console.log("Prime numbers:",prime);
 
//  // e. Return all the palindromes in an array 
//  let sample = ["damad", 121, "a00a", "radar", "motor", 12012 , "tomato","alia"];
//  let palindrome =  sample.filter((txt) => {           
//             txt = String(txt);
//             let txt1 = txt;
//             txt1 = txt1.split("").reverse().join("");
//             if(txt === txt1)
//                return true;
//             else 
//                 return false;
// });
// console.log("Palindromes :", palindrome); 



 