console.log("button clicking file added");
document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault();
    // console.log ("login button clicked");

    const phone = document.getElementById("phone-number").value;
    console.log (phone);

    const pin = document.getElementById("pin").value;
    console.log (pin);

    if(phone === "01845682811" && pin === "1234"){
        alert("Login successful");
        window.location.href = "../home.html";
        
    }
    else{
        // Alert 
        alert("Wrong Input");
    }
})