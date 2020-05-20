FunGames = {};

FunGames.reactionKeys = function(actor, groupItems, restingState) {
  restingState = restingState || 0;
  var game = {
    name: "reactionKeys",
    keys: [],
    restingState: restingState
  };
  for(var i = 0; i < groupItems.pageItems.length; i++) {
    var gameItem = groupItems.pageItems[i];
    if(gameItem.name != "mask" && gameItem.name != "noop") {
      var actorKey = groupItems.pageItems[i].name.split(",");
      game.keys.push({key: actorKey[0], frame: actorKey[1]});
    }
  }
  actor.games.push(game);
  return actor;
}

FunGames.clickNext = function(actor, groupItems, next) {
  next = next || "stop";
  var game = {
    name: "clickNext",
    next: next
  }
  actor.games.push(game);
  return actor;
}