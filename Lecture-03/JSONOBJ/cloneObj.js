const obj1 = {
    person : 'Kritsakorn' ,
    weight : 63
}

//const obj2 = obj1;
//const obj2 = Object.assign({},obj1);
const obj2 = {...obj1};
obj2.weight = 60;
console.log(obj1);
console.log(obj2);