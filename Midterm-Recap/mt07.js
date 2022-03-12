function sumTwoSmallestNums(value){
    let array = value.sort()
    array.sort((a , b) => a - b)
    let total = 0
    let count = 1
    for(let i = 0 ; i < array.length ; i++){

        if(array[i] >= 0){
            total += array[i]
            count++
            if(count == 3)break;
        }
    }console.log(total)
}

sumTwoSmallestNums([19 , 5 , 42 , 2 , 77])
sumTwoSmallestNums([10 , 343445353 , 3453445 , 3453545353453])
sumTwoSmallestNums([2 , 9 , 6 , -1])
sumTwoSmallestNums([879 , 953 , 694 , -847 , 342 , 221 , -91 , -721 , 791 , -587])
sumTwoSmallestNums([3683 , 2902 , 3951 , -475 , 1617 , -2385])