 var Chatty = (function(oldIife) {

  var messageArray = [];

  oldIife.addMessages = function(message) {
    messageArray.push({message});
  };

  $.ajax({
    url:"initialMessage.json" 
  }).done(parseData);

  // var messageRequest = new XMLHttpRequest();

  // messageRequest.open("GET", "initialMessage.json");

  // messageRequest.send();

  // messageRequest.addEventListener("error", xhrTransferError);

  // messageRequest.addEventListener("load", parseData);

  var counter = 0;


  oldIife.getMessageArray = function() {
    return messageArray;
  };

function xhrTransferError() {
  // console.log("error", An error occurred while transfering the data);
}
  function parseData(data) {
    messageArray = data.messages;
    for (currentMessage in messageArray) {
      var messageCard = "";
      var originalMessage = messageArray[currentMessage];
      counter++;
      $("#messageContainer").append(`<article id=cardWrapper--${counter}><div id="message--${counter}" class="individualMessage">${originalMessage.message}<button id="deleteMessage--${counter}" class="deleteButton">Delete</button></div></article>`);
      // var newDiv = document.createElement("article");
      // newDiv.innerHTML = messageCard;
      // var newAttr = document.createAttribute("id");
      // newAttr.value = `cardWrapper--${counter}`;
      // newDiv.setAttributeNode(newAttr);
      // newMessages.appendChild(newDiv);

    }
  }

  return oldIife;

}(Chatty || {}));
