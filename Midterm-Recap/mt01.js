function NumberSplit(num){
    return [Math.floor(num/2) , Math.ceil(num/2)]
}

console.log(NumberSplit(4))
console.log(NumberSplit(10))
console.log(NumberSplit(11))
console.log(NumberSplit(-9))