function  isValidIP(Str) {
    Str = Str.split('.');
        if (Str.length == 4){
            for(var i = 0; i < Str.length; i++){
                if((Str[i] < 1)||(Str[i] > 255)) return false;
                var zero = Str[i].split('');
                if (zero[0] == 0) return false;
            }
            return true;
        }
        else {
            return false;
        }
}
console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));