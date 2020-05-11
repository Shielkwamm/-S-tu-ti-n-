function processSituation(json) {
	r.situationText.text = json.zork.situation.text;
	var actors = json.zork.actors;
	for(var i=0;i<actors.length;i++) {
		r[actors[i].slot].gotoAndStop(actors[i].mood);
	}
}