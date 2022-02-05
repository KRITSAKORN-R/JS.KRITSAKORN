function equation(value){
    let num = "";

    value.split(/[\s+\s-\s*\s/]+/).forEach((char) => {
        if(char == "one"){
            char = "1";
        }
        else if(char == "two"){
            char = "2";
        }
        else if(char == "three"){
            char = "3";
        }
        else if(char == "four"){
            char = "4";
        }
        else if(char == "five"){
            char = "5";
        } 
        else if(char == "six"){
            char = "6";
        } 
        else if(char == "seven"){
            char = "7";
        } 
        else if(char == "eight"){
            char = "8";
        } 
        else if(char == "nine"){
            char = "9";
        }
        else{
            char = "0";
        }
        num += char;
    });

    let x = 1;
    let result;
    result = Number(num[0]);
    
    for(let i=0 ; i < value.length ; i++){
        if(value[i] == "+"){
            result +=  Number(num[x]);
            x++;
        }
        else if(value[i] == "-"){
            result -=  Number(num[x]);
            x++;
        } 
        else if(value[i] == "*"){
            result *=  Number(num[x]);
            x++;
        } 
        else if(value[i] == "/"){
            result /=  Number(num[x]);
            x++;
        }
    }
    console.log(result);
}
equation("one+one");
equation("seven*four-two");
equation("one+one+one+one+one");