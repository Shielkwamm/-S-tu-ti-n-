# animate library

### import order

* main.js
* clickForward.js
* actionKeys.js
* castActors.js
* getTheSituation.js

or use the library (put in global include above global scripts)

https://shielkwamm.net/library/theSituation.js

*please help me minify theSituation*

#### example
```
stop();
var r = this;
var actors;

function mySituation(theSituationJSON) {
	actors = theSituation.castActors(r, theSituationJSON.actors);
	theSituation.clickNext(r, actors);
	theSituation.actionKeys(r, actors);
}

theSituation.processTheSituation(this, "mySituation.json", mySituation);
``