let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (num) =>{{}
    if(num.target.innerHTML == '='){
            string = eval(string);
            input.value =  string;
        }
        else if(num.target.innerHTML == 'AC'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else if(num.target.innerHTML == 'DEL'){
            string = "";
            input.value = string;
        }
        else{
        string += num.target.innerHTML;
        input.value = string;
        }
    })
})