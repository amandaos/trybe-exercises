let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallNumber = 1000;

for (index = 0; index < numbers.length; index ++){
    if(numbers[index] < smallNumber){
        smallNumber = numbers[index];
    }
}
console.log(smallNumber);