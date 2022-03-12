function totalVolume(...volume){
    let total = 0;
    let sum = 1;

    for(i = 0 ; i < volume.length ; i++){

        for(j = 0 ; j < volume[i].length ; j++){

            sum *= volume[i][j]
        }
        total += sum
        sum = 1
    }
    return total;
}

console.log(totalVolume([4 , 2 , 4] , [3 , 3 , 3] , [1 , 1 , 2] , [2 , 1 , 1]))
console.log(totalVolume([2 , 2 , 2] , [2 , 1 , 1]))
console.log(totalVolume([1 , 1 , 1]))
