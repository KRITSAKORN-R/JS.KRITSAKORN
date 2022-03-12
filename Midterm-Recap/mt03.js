function capToFront(word){
    let first = word.match(/[A-Z]/g).join('');
    let last = word.match(/[a-z]/g).join('');
    console.log(first+last);
}

capToFront("hApPy")
capToFront("moveMENT")
capToFront("shOrtCAKE")