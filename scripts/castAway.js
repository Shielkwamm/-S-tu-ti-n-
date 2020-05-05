function sieteCachete (theSituation) {
	var actors = [];
	for(var i = 0; i < theSituation.actors.length;i++){
		var actor = {};
		actor.data = theSituation.actors[i];
		actor.mc = r.getChildByName(actor.data.name);
		if(actor.data.keys) {
			danceKeys(actor);
		}
		if(actor.data.click) {
			clickNext(actor);
		}
	}
}

function clickNext(actor) {
	window.addEventListener("mousedown", function(e){
		actor.mc.gotoAndStop(actor.mc.currentFrame + 1);
	});
}

function danceKeys(actor) {
	var actor = actor;
	window.addEventListener("keydown", function(e) {
		for(var keyIndex in actor.data.keys) {
			var key = actor.data.keys[keyIndex];
			if(e.key === key.key) {
				actor.mc.gotoAndStop(key.frame);
			}
		}
	})
	if(actor.data.hasRestingState) {
		window.addEventListener("keyup", function(e) {
			for(var keyIndex in actor.data.keys) {
				var key = actor.data.keys[keyIndex];
				if(e.key === key.key) {
					actor.mc.gotoAndStop(0);
				}
			}
		})
	}
}