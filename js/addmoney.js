
document.getElementById("money-added-btn").addEventListener("click", function(event){
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
        const trans =document.createElement("div");
        trans.classList.add("bg-green-300");
        trans.innerHTML=`
                                   <h3 class="text-center font-extrabold text-2xl">ADDED </h3>
                          <p>  ${addedAmountNumber} Added in your account. New balance ${newAmount}   <p>`

        document.getElementById("transaction-list").appendChild(trans);
       
    }
    else{
        // Alert 
        alert("Wrong Input");
    }

})