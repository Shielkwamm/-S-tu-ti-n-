
var stateIndex = 0;

function processTheSituation() {
	setState(theSituation);
	window.addEventListener("keyup", function(e) {
		nextState();
	})
}

function setState() {
	var currentState = theSituation.states[stateIndex];
	//alert(JSON.stringify(currentState));
	r.Admin.play(currentState.Admin);
	r.connection.play(currentState.connection);
	r.Zambia.play(currentState.Zambia);
	r.chatText.chatText.text = currentState.text;
}

function nextState() {
	stateIndex++;
	setState(theSituation);
}