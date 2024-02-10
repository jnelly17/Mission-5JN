// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

/*$("#btnSubmit").click(function() {
    alert("For " + $("#hoursInput").val() + " hours a tutor session would cost $" +
        ($("#hoursInput").val() * $("#perHour").val()) + ".00");

    $("#totalOutput").text("Total: $" + total);

});*/

$(document).ready(function () {
    $("#btnSubmit").click(function () {
        var hours = parseInt($("#hoursInput").val());
        if (hours < 0) {
            // Display an error message or take appropriate action
            alert("Please enter a valid number of hours.");
            return false; // Prevent further execution
        }
        var perHour = parseInt($("#perHour").val());
        var total = hours * perHour;
        $("#totalOutput").text("Total: $" + total);
        return false; // Prevent form submission
    });
});