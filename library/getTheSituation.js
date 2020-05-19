theSituation.inited = false;

theSituation.processTheSituation = function(situationR, jsonUrl, theSituationCallback) {
	if(!situationR) {
		alert("You didn't pass in root and it makes me very upset.");
		return;
	}
	if(!jsonUrl) {
		alert(":)");
		return;
	}
	if(!theSituationCallback) {
		alert("Did you forget to pass in theSituation?  Did you not read the △?  Do you not trust me?");
		return;
	}
	if(!theSituation.inited) {
		situationInit(situationR, jsonUrl, theSituationCallback);
	}
}

function situationInit(situationR, jsonUrl, theSituationCallback) {
	var xmlhttpRemote = new XMLHttpRequest();
	xmlhttpRemote.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(!theSituation.inited) {
				theSituation.inited = true;
				theSituationCallback(json);
			}
		}
		else if(this.status == 404) {
			theSituation.inited = "error";
			alert("Did you not pass in a url I can === actually === use?");
		}
	};
	xmlhttpRemote.open("GET", jsonUrl, true);
	xmlhttpRemote.send();
}