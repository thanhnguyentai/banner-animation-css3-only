(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x600_fence_big.jpg?1474920856774", id:"big_fence"},
		{src:"images/300x600_fence_cta.png?1474920856774", id:"cta_fence"},
		{src:"images/300x600_fence_logo.png?1474920856774", id:"logo_fence"},
		{src:"images/300x600_fence_small.jpg?1474920856774", id:"small_fence"},
		{src:"images/300x600_fence_text.png?1474920856774", id:"text_fence"},

		{src:"images/300x600_dryer_big.jpg?1475152899882", id:"big_dryer"},
		{src:"images/300x600_dryer_cta.png?1475152899883", id:"cta_dryer"},
		{src:"images/300x600_dryer_logo.png?1475152899883", id:"logo_dryer"},
		{src:"images/300x600_dryer_small.jpg?1475152899883", id:"small_dryer"},
		{src:"images/300x600_dryer_text.png?1475152899883", id:"text_dryer"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.big = function() {
	this.initialize(img.big_fence);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,405,806);


(lib.cta = function() {
	this.initialize(img.cta_fence);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.logo = function() {
	this.initialize(img.logo_fence);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.small = function() {
	this.initialize(img.small_fence);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.text = function() {
	this.initialize(img.text_fence);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.big();
	this.instance.parent = this;
	this.instance.setTransform(-300,-369);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-369,405,806);


(lib.text_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.logo_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bGFIAAsKMAu2AAAIAAMKg");
	this.shape.setTransform(150,561);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.cta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// big.jpg
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(735,1191);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},7).to({_off:true},1).wait(1));

	// small.jpg
	this.instance_1 = new lib.small();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1500,3000);


// dryer

(lib.bigDryer = function() {
	this.initialize(img.big_dryer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,738);


(lib.ctaDryer = function() {
	this.initialize(img.cta_dryer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.logoDryer = function() {
	this.initialize(img.logo_dryer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.smallDryer = function() {
	this.initialize(img.small_dryer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.textDryer = function() {
	this.initialize(img.text_dryer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.Tween3Dryer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bigDryer();
	this.instance.parent = this;
	this.instance.setTransform(-300,-369);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-369,600,738);


(lib.text_1Dryer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.textDryer();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.logo_1Dryer = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logoDryer();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqsF7IAAr1IVYAAIAAL1g");
	this.shape.setTransform(150,561,2.19,1.026);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.cta_1Dryer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ctaDryer();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.imageDryer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// big.jpg
	this.instance = new lib.Tween3Dryer("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(600,970);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},5).to({alpha:0},4).wait(1));

	// small.jpg
	this.instance_1 = new lib.smallDryer();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1200,2400);




// stage content:

(lib._300x600_BCH163025BC_EVP_IAB = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(121));

	// cta.png
	this.instance = new lib.cta_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(300,600,1,1,0,0,0,300,600);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(114).to({_off:false},0).to({alpha:1},6).wait(1).wait(48).to({alpha:0},6));

	// text.png
	this.instance_1 = new lib.text_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(300,600,1,1,0,0,0,300,600);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(84).to({_off:false},0).to({alpha:1},6).wait(31).wait(48).to({alpha:0},6));

	// logo.png
	this.instance_2 = new lib.logo_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(300,600,1,1,0,0,0,300,600);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({alpha:1},6).wait(61).wait(48).to({alpha:0},6));

	// image
	this.instance_3 = new lib.image("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-172,-627,1,1,0,0,0,300,369);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({mode:"synched",loop:false},0).wait(1).to({regX:750,regY:1500,scaleX:0.99,scaleY:0.99,x:276.6,y:501.7,startPosition:1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:272.4,y:495,startPosition:2},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:265.8,y:484.4,startPosition:3},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:257,y:470.5,startPosition:4},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:246.5,y:453.8,startPosition:5},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:234.8,y:435.1,startPosition:6},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:222.1,y:414.9,startPosition:7},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:209.2,y:394.2,startPosition:8},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:196.3,y:373.7},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:184,y:354.3},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:173,y:336.6},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:163.6,y:321.6},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:156.3,y:310},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:151.6,y:302.6},0).wait(1).to({regX:299.8,regY:368.8,scaleX:0.2,scaleY:0.2,x:60,y:73.8},0).wait(67).wait(48).to({alpha:0},6));


	// dryer

	// cta.png
	this.instance_4 = new lib.cta_1Dryer("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(300,600,1,1,0,0,0,300,600);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(289).to({_off:false},0).to({alpha:1},6).wait(1));

	// text.png
	this.instance_5 = new lib.text_1Dryer("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(300,600,1,1,0,0,0,300,600);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(259).to({_off:false},0).to({alpha:1},6).wait(31));

	// logo.png
	this.instance_6 = new lib.logo_1Dryer("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(300,600,1,1,0,0,0,300,600);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(229).to({_off:false},0).to({alpha:1},6).wait(61));

	// image
	this.instance_7 = new lib.imageDryer("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-214,-43,1,1,0,0,0,300,369);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(214).to({mode:"synched",loop:false},0).wait(1).to({regX:600,regY:1200,scaleX:0.99,scaleY:0.99,x:86.8,y:782.5,startPosition:1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:88.9,y:766.5,startPosition:2},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:92.2,y:741.1,startPosition:3},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:96.5,y:707.8,startPosition:4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:101.8,y:667.9,startPosition:5},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:107.7,y:623,startPosition:6},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:114,y:574.9,startPosition:7},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:120.5,y:525.4,startPosition:8},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:126.9,y:476.4,startPosition:9},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:133,y:429.8},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:138.5,y:387.7},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:143.2,y:351.7},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:146.8,y:324},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:149.1,y:306.3},0).wait(1).to({regX:299.8,regY:368.8,scaleX:0.25,scaleY:0.25,x:75,y:92.2,mode:"single"},0).wait(67));



}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-322,-696,1500,3000);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;