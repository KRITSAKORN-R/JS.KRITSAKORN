function callback(){
    console.log('Timeout Comleted');
}

console.log('Start');
setTimeout(callback,3000);
console.log('End');