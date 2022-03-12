function simplePair(array , number){
    let array1 = [];
    let number1 = 0;
    let x = 1
    for(i = 0 ; i < array.length ; i++){
       for(j = x ; j < array.length ; j++){
           number1 = array[i] * array[j];
           if(number1 == number){
               array1.push(array[i] , array[j])
               return array1;
           }
       }
       x += 1;
       if(x > array.length){
           return("null");
       } 
    }
}

console.log(simplePair([1 , 2 , 3] , 3));
console.log(simplePair([1 , 2 , 3] , 6));
console.log(simplePair([1 , 2 , 3] , 9));