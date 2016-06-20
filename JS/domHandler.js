/////////CLEAR ALL BUTTON///////////////
//retrieve ID of "Clear Message Board" button//	
var messageContainer = $("#messageContainer")[0];


$(".individualMessage").contentEditable = "true"

//Event to clear board//
$("#clearButton").click(clearBoard);

//Function to clear//
function clearBoard() {
	messageContainer.innerHTML = "";
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

$("#input").on("keypress", function enableButton () {
	if (messageContainer.innerHTML !== "") {
		clearButton.disabled = false;
	}
});

messageContainer.click(function() {
	if (messageContainer.childNodes.length === 0) {
		clearButton.disabled = true;
	}
	else if (messageContainer.childNodes.length > 0) {
				clearButton.disabled = false;
	}
});	




