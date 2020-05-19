var inited = false;

Shielkwamm.processTheSituation = function(situationR, jsonUrl, theSituation) {
	if(!situationR) {
		alert("You didn't pass in root and it makes me very upset.");
		return;
	}
	if(!jsonUrl) {
		alert(":)");
		return;
	}
	if(!theSituation) {
		alert("Did you forget to pass in theSituation?  Did you not read the △?  Do you not trust me?");
		return;
	}
	if(!inited) {
		situationInit(situationR, jsonUrl, theSituation);
	}
}

function situationInit(situationR, jsonUrl, theSituation) {
	var xmlhttpRemote = new XMLHttpRequest();
	xmlhttpRemote.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(!inited) {
				inited = true;
				theSituation(json);
			}
		}
		else if(this.status == 404) {
			inited = "error";
			alert("Did you not pass in a url I can === actually === use?");
		}
	};
	xmlhttpRemote.open("GET", jsonUrl, true);
	xmlhttpRemote.send();
}