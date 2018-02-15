// add an event listener to the form to submit Dave's message
var classNames = ["Sonyl","Courtney","Joe","Joe W"];
var jokes = ['If you ever get cold why should you stand in the corner? Because they are usually 90 degrees. LOL. Did you like my joke?','What happens to a frog when its car breaks down? It gets toad away. LOL. Did you like my joke?','What is the best part about Switzerland? I dont know. But the flag is a big plus. LOL. Did you like my joke?']
function getIndex (){
  return Math.floor(Math.random()* jokes.length);
}
var formButton = document.getElementById('chatForm');
formButton.onsubmit = function(e){
  e.preventDefault();
var parentList = document.getElementById('dave');
var chatInput = document.getElementById('chatInput').value
document.getElementById('chatInput').value = "";
parentList.appendChild(document.createTextNode(chatInput));
parentList.appendChild(document.createElement('br'));
var hal = document.getElementById('hal');
if (chatInput === "sure") {
  hal.appendChild(document.createTextNode(jokes[getIndex()]));
  hal.appendChild(document.createElement('br'));
} else if(chatInput === "hello"){
hal.appendChild(document.createTextNode('Hello Ken. Would you like to year a joke?'));
hal.appendChild(document.createElement('br'));
} else if (chatInput === 'yes'){
  hal.appendChild(document.createTextNode('Great! Glad I could brighten up your day.'));
  hal.appendChild(document.createElement('br'));
} else if (chatInput === 'no') {
  hal.appendChild(document.createTextNode("I'm sorry about that. I'll try harder next time."));
  hal.appendChild(document.createElement('br'));
}

switch(chatInput){
  case "maybe":
  hal.appendChild(document.createTextNode("Hmmm.... Here goes!"));
  hal.appendChild(document.createElement('br'));
  break;
  case "absolutely not":
  hal.appendChild(document.createTextNode("Whyyyyyy? I'm so sad. 😢"));
  hal.appendChild(document.createElement('br'));
  break;

}
for (i=0; i < classNames.length; i++){
  if(chatInput === classNames[i]){
    hal.appendChild(document.createTextNode("Hello" + " " + chatInput));
    hal.appendChild(document.createElement('br'));
  }
}


  console.log('Yessss!!!');
}

// create a function for HAL to respond to Dave's messages with variable logic based upon
// Dave's inputs

// create a function for HAL to open the chat with "Good morning, Dave"

// invoke the opening message
