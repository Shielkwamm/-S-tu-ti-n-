theSituation.actionKeys = function(situationR, actors) {
  for(var i = 0; i < actors.length; i++) {  
      actors[i].keysDown = [];
  }
  window.addEventListener("keydown", function (e) {
    var keyCode = e.key;
    for(var i = 0; i < actors.length; i++) {   
      if(actors[i].data.keys) {
        actor = actors[i];
        for (var keyIndex in actor.data.keys) {
          var key = actor.data.keys[keyIndex];
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
      }
    }
  })
  window.addEventListener("keyup", function (e) {
    for(var i = 0; i < actors.length; i++) {
      if(actors[i].data.hasRestingState) {
        checkResting(e.key, actors[i])
      }   
    }
  })
  }

  function checkResting (keyCode, actor) {
  for (var keyIndex in actor.data.keys) {
    var key = actor.data.keys[keyIndex];
    if (keyCode === key.key) {
      for (var keyDown in actor.keysDown) {
        if (actor.keysDown[keyDown] === keyCode) {
          actor.keysDown.splice(keyDown, 1);
          if(actor.keysDown.length > 0){
            var lastKey = actor.keysDown[actor.keysDown.length - 1];
            //alert(actor.data.keys[lastKey]);
            for (var releaseIndex in actor.data.keys) {
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