let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let bigNumber = 0;

for (index = 0; index < numbers.length; index ++){
    if(numbers[index] > bigNumber){
        bigNumber = numbers[index];
    }
}
console.log(bigNumber);