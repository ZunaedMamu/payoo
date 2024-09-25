console.log("utility working")
function showSectionById(id){
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("transaction-list").classList.add("hidden");

    document.getElementById(id).classList.remove("hidden");
}