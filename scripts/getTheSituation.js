this.stop();
var inited = false;
var r = this;

if(!inited) {
	init();
}

function init() {
	var xmlhttpRemote = new XMLHttpRequest();
	var remoteUrl = "http://shielkwamm.net/theSituation.json";

	xmlhttpRemote.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			processTheSituation(json);
		}
		else {
			shopLocal()
		}
	};

	xmlhttpRemote.open("GET", remoteUrl, true);
	xmlhttpRemote.send();

}

function shopLocal() {	
	var xmlhttpLocal = new XMLHttpRequest();
	var localUrl = "theSituation.json";
	xmlhttpLocal.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			if(!inited) {
				inited = true;
				processTheSituation(json);
			}
		}
	};
	xmlhttpLocal.open("GET", localUrl, true);
	xmlhttpLocal.send();
}

function processTheSituation( theSituation ) {
	//alert(JSON.stringify(theSituation)); //comment out when you know theSituation
	
	// Your code here
}
