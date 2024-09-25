document.getElementById("logout").addEventListener("click", function(){
    window.location.href = "../index.html";

})

document.getElementById("btn-add-money").addEventListener("click", function(){
      showSectionById("add-money-form");
  
})
document.getElementById("btn-cash-out").addEventListener("click", function(){
        showSectionById("cash-out-form");
 
   
})
document.getElementById("btn-transaction").addEventListener("click", function(){
       showSectionById("transaction-list");
 
   
})
// document.getElementById("back").addEventListener("click", function(){
//     window.location.href = "../home.html";

// })