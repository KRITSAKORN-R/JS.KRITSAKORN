function highestDigit (num){
    if(num != 0){
        return Math.floor(Math.max(num%10 , highestDigit(num/10)));
    }
    else{
        return 0;
    }
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));
