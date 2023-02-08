//write the element in the label
function write(text){
    document.getElementById("TextArea").innerHTML += text;
}
//Replace all the text  in the labal 
function Replace(text){
    document.getElementById("TextArea").innerHTML = text;
}

//Read the the las element of the label
function ReadElement (string, index = string.length - 1){
    return(string.slice(index))
}

//Find the last caracter diferent of the number in the label
function FindLastOperator(string, char){
    const value = (Array.prototype.findLast.call(string, (c) => !(c <='9' && c >= '0'))); // Find the last operator diferent to number
    return value === char; 
}

//Check if the operator is valided for write
function VerificationOperators(string, val){
    const last = ReadElement(string);

    if (last <= '9' && last >= '0' ){
        
        if(val == '.' && FindLastOperator(string, '.')){
            return false;
        }

        return true;
    }

    return false;
}

//Makes the change of the special Butoons 
function SpecialButoons (text, val){

    switch (val) {
        case 'delete':
            text = " ";
        break;
        case 'back': 
            text = text.slice(0, text.length -1 );
        break;
        case 'history':
            //In process
        break;
        case 'solve':
            text = eval(text)
        break;   
    }

 
    Replace(text);

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
                if(VerificationOperators(text, val)){write(val);}
            break;

            case 'ButtonEspecial':
                SpecialButoons(text,val);
            break;

            default: 
            break;
        }

        
    });
});

