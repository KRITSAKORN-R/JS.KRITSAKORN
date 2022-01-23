const start = Date.now();

console.log('Starting Timer. . . .');

setTimeout(() => {
    const millis = Date.now() - start;

    console.log(`second elapsed = ${Math.floor(millis / 1000)}`);
    
} , 2000);