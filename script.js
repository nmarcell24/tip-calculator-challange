const bill = document.getElementById("bill");
const people = document.getElementById("people");
const customTip = document.getElementById("custom");

//calculator
const calc = (x) => {
    if(bill.value != "" && people.value != ""){
        if(bill.value <= 1200){
            const tip = (bill.value/100) * x;
            document.getElementById("tip_output").innerHTML = "$" + (tip / people.value).toFixed(2);
            document.getElementById("total").innerHTML = "$" + (tip + bill.value / people.value).toFixed(2);
        }else {
            alert("Too high price!");
        }
    }else { 
        alert("Please fill the 'Bill' and 'Number of People' cells!");
    }
}

//tip buttons
document.getElementById("5").addEventListener("click" , () => {
    calc(5);
});
document.getElementById("10").addEventListener("click" , () => {
    calc(10);
});
document.getElementById("15").addEventListener("click" , () => {
    calc(15);
});
document.getElementById("25").addEventListener("click" , () => {
    calc(25);
});
document.getElementById("50").addEventListener("click" , () => {
    calc(50);
});
document.getElementById("custom").addEventListener("input" , () => {
    if(customTip.value > 100 || customTip < 0){
        alert("Invalid tip amount(0-100%)!")
    }else {
        calc(customTip.value);
    }
});

//reset button
document.getElementById("reset").addEventListener("click" , () => {
    document.getElementById("tip_output").innerHTML = "$0.00";
    document.getElementById("total").innerHTML = "$0.00";
    bill.value= "";
    people.value = "";
});

