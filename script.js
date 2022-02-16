function compute() {
    // Initializing variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Checks if principal (amount) field has zero or a negative value
    // Else, it will compute interest correctly
    if (principal < 1) {
        alert("Enter a positive amount number");
        // Focus back to principal field
        document.getElementById("principal").focus();
    } else {
        var interest = principal * years * rate / 100;

        var year = new Date().getFullYear()+parseInt(years);
        
        document.getElementById("result").innerHTML = 
            "If you deposit " + principal + 
            ",\<br\>at an interest rate of " + rate + 
            "%\<br\>You will receive an amount of " + interest + 
            ",\<br\>in the year " + year + "\<br\>";
    }

}

// Updates the label where is displayed the selected rate value
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
