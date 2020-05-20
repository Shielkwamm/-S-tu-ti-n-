#include "json2.js";
#include "fileStuff.js";
#include "funGames.js";

var myDocument = app.activeDocument;
var baseName = myDocument.name.split(".")[0];
var cwd = File($.fileName).parent;
var starterJson = new File(cwd + "/the" + baseName + "Situation.json");
var theSituation = {actors: []};
var layerTypes = ["groupItems", "pageItems", "placedItems", "pathItems", "layers"];

for(var i = 0; i < myDocument.layers.length; i++) {
  if(myDocument.layers[i].name == "actors"){
    situationActors(myDocument.layers[i])
  }
}

function situationActors(actorsLayer) {
  for(var i = 0; i < actorsLayer.layers.length; i++){
    var currentLayer = actorsLayer.layers[i];
    var actorName = currentLayer.name;

    var actor = {
      name: actorName,
      games: []
    };

    //add games
    for(var ii = 0; ii < currentLayer.groupItems.length; ii++) {
      var currentGame = currentLayer.groupItems[ii];
      var gameArgs = currentGame.name.split(",");
      var gameType = gameArgs[0];
      var gameOtherArgs = gameArgs[1];
      alert(gameType)
      if(gameType == "reactionKeys") {
        actor = FunGames.reactionKeys(actor, currentGame, gameOtherArgs);
      }
      if(gameType == "clickNext") {
        actor = FunGames.clickNext(actor, currentGame, gameOtherArgs);
      }
    }

    theSituation.actors.push(actor);
  }
  var file = FileStuff.writeFile(starterJson, JSON.stringify(theSituation, null, 2));
  alert(starterJson + " created!");
}


