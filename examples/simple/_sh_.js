(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"_sh__atlas_", frames: [[0,514,321,462],[0,0,512,512]]}
];


// symbols:



(lib.CachedTexturedBitmap_17 = function() {
	this.initialize(ss["_sh__atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.k2dafsoa7ohz = function() {
	this.initialize(ss["_sh__atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib._sh_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{doThis:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var xmlhttpRemote = new XMLHttpRequest();
		var remoteUrl = "https://pastebin.com/raw/wqE6C0jp";
		var r = this;
		
		xmlhttpRemote.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		        var myArr = JSON.parse(this.responseText);
		        var json = JSON.parse(this.responseText);
				processSituation(json);
		    }
			else {
				shopLocal()
			}
		};
		xmlhttpRemote.open("GET", remoteUrl, true);
		xmlhttpRemote.send();
		
		function shopLocal() {	
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
		}
		
		function processSituation(json) {
			r.gotoAndStop(json._sh_.name);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// text
	this._sh_text = new cjs.Text("We need to do this.", "25px 'Tahoma'", "#82B0A4");
	this._sh_text.name = "_sh_text";
	this._sh_text.lineHeight = 32;
	this._sh_text.lineWidth = 240;
	this._sh_text.parent = this;
	this._sh_text.setTransform(338.5,222.75);

	this._sh_text_1 = new cjs.Text("We need to do this.", "25px 'Tahoma'", "#82B0A4");
	this._sh_text_1.name = "_sh_text_1";
	this._sh_text_1.lineHeight = 32;
	this._sh_text_1.lineWidth = 240;
	this._sh_text_1.parent = this;
	this._sh_text_1.setTransform(347.55,6.5);

	this.instance = new lib.k2dafsoa7ohz();
	this.instance.parent = this;
	this.instance.setTransform(8,5,0.5859,0.5859);

	this.instance_1 = new lib.CachedTexturedBitmap_17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(310.9,85.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this._sh_text_1},{t:this._sh_text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,589.6,316.3);
// library properties:
lib.properties = {
	id: 'D69D2C9ED3476A499E6D22D95764C788',
	width: 633,
	height: 323,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_sh__atlas_.png?1588491173695", id:"_sh__atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D69D2C9ED3476A499E6D22D95764C788'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;