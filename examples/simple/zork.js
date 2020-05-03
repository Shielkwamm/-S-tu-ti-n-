(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"zork_atlas_", frames: [[0,0,633,323],[280,496,133,128],[454,325,128,176],[0,325,278,248],[280,325,172,169]]}
];


// symbols:



(lib.b0VcVlz = function() {
	this.initialize(ss["zork_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_13 = function() {
	this.initialize(ss["zork_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_14 = function() {
	this.initialize(ss["zork_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_15 = function() {
	this.initialize(ss["zork_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_16 = function() {
	this.initialize(ss["zork_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.SolidSnake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{active:0,anxious:1,happy:2,resting:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_3
	this.instance = new lib.CachedTexturedBitmap_13();
	this.instance.parent = this;
	this.instance.setTransform(0,-8.4,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.05,-18.7,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-31.95,-40.4,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-12.9,-10.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.9,-40.4,139,124);


(lib.LiquidSnake = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"active":0,"anxious":1,"happy":2,"resting":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_13();
	this.instance.parent = this;
	this.instance.setTransform(0,-8.4,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8.05,-18.7,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-31.95,-40.4,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-12.9,-10.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.9,-40.4,139,124);


// stage content:
(lib.zork = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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
			r.situationText.text = json.zork.situation.text;
			var actors = json.zork.actors;
			for(var i=0;i<actors.length;i++) {
				r[actors[i].slot].gotoAndStop(actors[i].mood);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.situationText = new cjs.Text("sample text", "25px 'Tahoma'", "#82B0A4");
	this.situationText.name = "situationText";
	this.situationText.lineHeight = 32;
	this.situationText.lineWidth = 517;
	this.situationText.parent = this;
	this.situationText.setTransform(61.5,220);

	this.timeline.addTween(cjs.Tween.get(this.situationText).wait(1));

	// rightLoader
	this.right = new lib.SolidSnake();
	this.right.name = "right";
	this.right.parent = this;
	this.right.setTransform(524.4,100.4,1,1,0,0,0,33.2,23.5);

	this.timeline.addTween(cjs.Tween.get(this.right).wait(1));

	// leftLoader
	this.left = new lib.LiquidSnake();
	this.left.name = "left";
	this.left.parent = this;
	this.left.setTransform(117.3,98.4,1,1,0,0,0,33.2,23.5);

	this.timeline.addTween(cjs.Tween.get(this.left).wait(1));

	// background
	this.instance = new lib.b0VcVlz();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(316.5,161.5,316.5,161.5);
// library properties:
lib.properties = {
	id: 'D69D2C9ED3476A499E6D22D95764C788',
	width: 633,
	height: 323,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/zork_atlas_.png?1588490689109", id:"zork_atlas_"}
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