console.log("home added");
document.getElementById("btn-add-money").addEventListener("click", function(event){
    event.preventDefault();
    // console.log ("login button clicked");

    const addedAmount = document.getElementById("amount").value;
    const addedAmountNumber = parseFloat(addedAmount);
    
    const oldAmount= document.getElementById("current-amount").innerText;
    const oldAmountNumber = parseFloat(oldAmount);

    const newAmount = oldAmountNumber + addedAmountNumber;
    // const phone = document.getElementById("phone-number").value;
    const pin = document.getElementById("pin").value;
    console.log (pin,addedAmountNumber,oldAmountNumber,newAmount);

    if(pin === "1234"){
        alert("Money Added");
        document.getElementById("current-amount").innerText= newAmount;
       
    }
    else{
        // Alert 
        alert("Wrong Input");
    }

})