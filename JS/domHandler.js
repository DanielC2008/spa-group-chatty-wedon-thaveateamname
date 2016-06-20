/////////CLEAR ALL BUTTON///////////////
//retrieve ID of "Clear Message Board" button//	
var messageContainer = $("#messageContainer")[0];
var bodyEl = $("body")[0];


$(".individualMessage").contentEditable = "true"

//Event to clear board//
$("#clearButton").click(clearBoard);

//Function to clear//
function clearBoard() {
	messageContainer.innerHTML = "";
}


/////////CHECKBOXES///////////////
$("#darkTheme").on("change", function changeTheme() {
	bodyEl.classList.toggle("dark");
	messageContainer.classList.toggle("dark");
	getNav.classList.toggle("dark");
});
//////////LARGE TEXT////////////////
$("#largeText").on("change", function changesize() {
	bodyEl.classList.toggle("large");
	messageContainer.classList.toggle("large");
	getNav.classList.toggle("large");

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




