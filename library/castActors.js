theSituation.castActors = function(situationR, castingCall) {
    var actors = [];
	for (var i = 0; i < castingCall.length; i++) {
		var actor = {};
		actor.data = castingCall[i];
        actor.mc = situationR[actor.data.name];
        actors.push(actor);
    }
    return actors;
}