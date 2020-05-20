theSituation.inited = false;

theSituation.processTheSituation = function(situationR, theSituationCallback) {
	if(!situationR) {
		alert("You didn't pass in root and it makes me very upset.");
		return;
	}
	if(!theSituationCallback) {
		alert("Did you forget to pass in theSituation?  Did you not read the △?  Do you not trust me?");
		return;
	}
	if(!theSituation.inited) {
		situationInit(situationR, theSituationCallback);
	}
}

function situationInit(situationR, theSituationCallback) {
	var cacheCrash = Math.floor(Math.random() * 100);
	var jsonUrl =  "theSituation.json?" + cacheCrash;
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