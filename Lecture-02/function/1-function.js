function printHello(name){
    console.log("Hello " + name);
    return name + " Hello!";
}

console.log(printHello.name);

let result = printHello("Kritsakorn!");
console.log(result);