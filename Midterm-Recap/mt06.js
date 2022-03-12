function removeDups(a){
    let message = {"boolean":{} , "number":{} , "string": {}} , Obj = [];

    return a.filter(function(item) {
        let type = typeof item;
        if(type in message){
            return message[type].hasOwnProperty(item) ? false : (message[type][item] = true);
        }
        else {
            return Obj.indexOf(item) >= 0 ? false : Obj.push(item);
        }
    });
}

console.log(removeDups([1 , 0 , 1 , 0]))
console.log(removeDups(["The" , "Big" , "Cat"]))
console.log(removeDups(["John" , "Taylor" , "John"]))