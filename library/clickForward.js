theSituation.clickNext = function(situationR, actor, game) {
  window.addEventListener("mousedown", function (e) {
    if(game.next == "stop") {
      actor.mc.gotoAndStop(actor.mc.currentFrame + 1);
    }
    if(game.next == "play") {
      actor.mc.gotoAndStop(actor.mc.currentFrame + 1);
    }
  });
}