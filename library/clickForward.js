theSituation.clickNext = function(situationR, actors) {
  for(var i = 0; i < actors.length; i++) {
    var actor = actors[i];

    if(actor.data.click === "NEXT_FRAME") {
      window.addEventListener("mousedown", function (e) {
          actor.mc.gotoAndStop(actor.mc.currentFrame + 1);
      });
    }
  }
}