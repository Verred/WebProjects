function write(text){
    document.getElementById("TextArea").innerHTML += text;
}
function ReadElement (string, index = string.length - 1){
    return(string.slice(index))
}
function FindLastOperator(string, char){
    const value = (Array.prototype.findLast.call(string, (c) => !(c <='9' && c >= '0'))); // Find the last operator diferent to number
    return value === char; 
}

function VerificationOperators(string){
    const last = ReadElement(string);

    if (last <= '9' && last >= '0' ){
        
        
        if(val == '.' && FindLastOperator(text, '.')){

        }else{
            return true
        }
    }
    return false;
}


document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const  text = document.getElementById("TextArea").innerHTML;
        const val = button.value;
        switch (button.className) {
            case 'ButtonNumber':
                write(val);
            break;
                 
            case 'ButtonOperation':
                if(VerificationOperators(text)){write(val);}
            break;

            case 'ButtonEspecial':
                
            break;

            default: 
            break;
        }

        
    });
});

