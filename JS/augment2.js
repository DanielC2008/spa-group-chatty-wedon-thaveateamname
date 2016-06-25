"use strict";
var Chatty = (function (originalChatty) {
	var getInput = $("#userInput")[0];
	var getOutput = $("#messageContainer")[0];


	originalChatty.retrieveInput = function retrieveInput(event) {
		if (event.keyCode === 13) {
			originalChatty.addMessages(getInput.value);
			var lengthForId = originalChatty.getMessageArray().length;
			var output = " ";
				var input = getInput.value;
				output += `<article id="cardWrapper--${lengthForId}">`;
				output += `<div class="individualMessage" id="button--${lengthForId}">`;
				output += `${input}`;
				output += `<button id="deleteMessage--${lengthForId}" class="deleteButton">Delete</button>`;
				output += `</div>`;
				output += `</article>`;
				getOutput.innerHTML += output;
				output = "";
				getInput.value = " ";
		}
	};
	$("#userInput").keypress(Chatty.retrieveInput);

	return originalChatty;
})(Chatty || {});



