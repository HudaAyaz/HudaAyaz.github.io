a = document.getElementById("display").value;

function show(e){
    a += e;
}

function calculate(){
    a = eval(a);
}

function clearDisplay(){
    a = '';
}
