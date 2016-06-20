var Chatty = (function(oldIife) {


	//retrieves ID of container//

	//Event calling function for new button ID//
	$("#messageContainer").on("click", buttonGet);

	//Button getter function -- splits off "--" to isolate button #//
	function buttonGet() {
		if (event.target.type === "submit") {
		var delButton = event.target.id.split("--")[1];
		var delTarget = event.target.closest(`#cardWrapper--${delButton}`);
		delTarget.remove();
		}
	}

}(Chatty || {}));
