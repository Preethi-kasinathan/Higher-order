//Function #1: Array Slice
const foods = [pizza, burger, fingerChips, donuts, springRoll];
var modifiedFood=foods.Slice(0,4);
console.log(modified);
//function:2Array Splice
const foods = [pizza, burger, fingerShips, donuts, springRoll];
var modifiedFood=foods.Splice(1,2,"noodles","icecream");
console.log(modifiedFood);
//Function #3: Filter
const numberArray = [12,324,213,4,2,3,45,4234];
let even=numberArray.filter(function(num){
    return n%2=0;
});
console.log(even);
//prime
var prime=numberArray.map((number) => {
    for (let i = 2; i < number; i++) {
        if(number % i === 0) {
            let index = numberArray.indexOf(number);
            return numberArray.splice(index, 1);       
        }
    }    return numArray;
  });
  console.log(prime);
  
  //Function #4: Reject
let nonprime=reduce(function(prime,item){
    return item-prime;
});
console.log(nonprime);
//Function #5: Lambda





//Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
let square=myArray.map(function(item){
    return item*item;
});
console .log(square);


//Function #7: Reduce

let myArray=[2,3,5,10];
let multiply=reduce(function(initial,item){
    return initial*item;
},0);
console.log(multiply);



