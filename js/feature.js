document.getElementById("btn-add-money").addEventListener("click", function(event){
   document.getElementById("add-money-form").classList.remove("hidden");
   document.getElementById("cash-out-form").classList.add("hidden");
//    document.getElementById("main-form").classList.add("hidden");

})
document.getElementById("btn-cash-out").addEventListener("click", function(event){
    document.getElementById("cash-out-form").classList.remove("hidden");
    document.getElementById("add-money-form").classList.add("hidden");
    // document.getElementById("main-form").classList.add("hidden");


})