"use strict";
/////////CLEAR ALL BUTTON///////////////
//retrieve ID of "Clear Message Board" button//	
var messageContainer = $("#messageContainer")[0];


$(".individualMessage").contentEditable = "true";

//Event to clear board//
$("#clearButton").click(clearBoard);

//Function to clear//
function clearBoard() {
	$("#messageContainer").text(null);
}


/////////CHECKBOXES///////////////
$("#darkTheme").on("change", function changeTheme() {
	$("body").toggleClass("dark");
	$("#messageContainer").toggleClass("dark");
	$("nav").toggleClass("dark");
});
//////////LARGE TEXT////////////////
$("#largeText").on("change", function changesize() {
	$("body").toggleClass("large");
	$("#messageContainer").toggleClass("large");
	$("nav").toggleClass("large");

});


/////////DISABLE BUTTON///////////////
$("#userInput").keypress(function() {
	if ($("#messageContainer").is(":parent")) {
		$("#clearButton").prop("disabled", false);
	}
});

$(":button").on("click", function() {
	if ($("#messageContainer").is(":empty")) {
		$("#clearButton").prop("disabled", true);
	}
	// else if ($("#messageContainer").has(":children")) {
	// 	$("#clearButton").prop("enabled", false);	
	// }
});	




