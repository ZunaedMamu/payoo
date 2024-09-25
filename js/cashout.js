
document.getElementById("btn-money-cashout").addEventListener("click", function(event){
    event.preventDefault();
    // console.log ("login button clicked");

    const cashOutAmount = document.getElementById("cashout-amount2").value;
    const cashOutAmountNumber = parseFloat(cashOutAmount);
    
    const oldAmount= document.getElementById("current-amount").innerText;
    const oldAmountNumber = parseFloat(oldAmount);

    const newAmount = oldAmountNumber - cashOutAmountNumber;
    // const phone = document.getElementById("phone-number").value;
    const pin = document.getElementById("pin2").value;
    console.log (pin,oldAmountNumber,cashOutAmountNumber,newAmount);

    if(pin === "1234" && newAmount>=0){
        alert("Money Withdrawal");
        document.getElementById("current-amount").innerText= newAmount;
                const trans =document.createElement("div");
        trans.classList.add("bg-yellow-300");
        trans.innerHTML=`
                                   <h3 class="text-center font-extrabold text-2xl">Withdraw</h3>
                        <p>  ${cashOutAmountNumber} withdraw.New balance ${newAmount}  <p>`

        document.getElementById("transaction-list").appendChild(trans);
            
    }
    else{
        // Alert 
        alert("Wrong Input");
    }

})