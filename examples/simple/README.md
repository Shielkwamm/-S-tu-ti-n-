# Adobe Animate Sample Project

This is just a quick sample showing possible data construction.

## [Sample Situation Demo](https://master.d4w9hh2nnz186.amplifyapp.com/zork.html)

> This is how to coorelates to `frame labels`

#### zorks
active

anxious

happy

resting

#### bwam
japaneseGames

oldSChoolGames

#### _sh_
doThis


## Animate code
```
//this goes into frame1 in a seperate layer usually
this.stop();

var r = this;
var xmlhttpLocal = new XMLHttpRequest();
var localUrl = "sampleSituation.json";
xmlhttpLocal.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        var json = JSON.parse(this.responseText);
        processSituation(json);
    }
};
xmlhttpLocal.open("GET", localUrl, true);
xmlhttpLocal.send();

function processSituation(json) {
    //process json object
	r.gotoAndStop(json.bwam.name);
	
}
```

###  [Here is the json file the above script is referencing](sampleSituation.json)