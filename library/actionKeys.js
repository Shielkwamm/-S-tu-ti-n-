theSituation.actionKeys = function(situationR, actor, game) {
  actor.keysDown = [];
  window.addEventListener("keydown", function (e) {
    var keyCode = e.key;
    for (var keyIndex in game.keys) {
      var key = game.keys[keyIndex];
      if (keyCode === key.key) {
        for (var keyDown in actor.keysDown) {
          if (actor.keysDown[keyDown] === key.key) {
            keysDown = actor.keysDown.splice(keyDown, 1);
          }
        }
        actor.keysDown.push(key.key);
        actor.mc.gotoAndStop(key.frame);
      }
    }
  })
  window.addEventListener("keyup", function (e) {
    if(game.restingState) {
      checkResting(e.key, actor, game)
    }   
  })
  }

  function checkResting (keyCode, actor, game) {
  for (var keyIndex in game.keys) {
    var key = game.keys[keyIndex];
    if (keyCode === key.key) {
      for (var keyDown in actor.keysDown) {
        if (actor.keysDown[keyDown] === keyCode) {
          actor.keysDown.splice(keyDown, 1);
          if(actor.keysDown.length > 0){
            var lastKey = actor.keysDown[actor.keysDown.length - 1];
            //alert(actor.data.keys[lastKey]);
            for (var releaseIndex in game.keys) {
              if(releaseIndex.key === lastKey) {
                  actor.mc.gotoAndStop(release);
              }
              //goto and stop last frame
            }
          }
        }
      }
      actor.mc.gotoAndStop(0);
    }
  }
}