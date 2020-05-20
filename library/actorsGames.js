theSituation.actorsGames = function(r, actors) {
  for(var i = 0; i < actors.length; i++) {
    var actor = actors[i];
    //alert(actor.name)
    //alert("yoz")
    theSituation.actorGames(r, actor);
  }
}

theSituation.actorGames = function(r, actor) {
  for(var i = 0; i < actor.data.games.length; i++) {
    var gameData = actor.data.games[i];
    var game = theSituation.actorGame(r, actor, gameData);
    //alert("actor: " + actor.name);
    //alert("game: " + JSON.stringify(game))
  }
}

theSituation.actorGame = function(r, actor, gameData) {
  var game = {};

  if(gameData.name == "clickNext") {
    game = theSituation.clickNext(r, actor, gameData);
  }
  if(gameData.name == "actionKeys") {
    theSituation.actionKeys(r, actor, gameData);
  }
  return {};
}