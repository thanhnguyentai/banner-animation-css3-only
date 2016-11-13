(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x250_fence_big.jpg?1474922020281", id:"big_fence"},
		{src:"images/300x250_fence_cta.png?1474922020281", id:"cta_fence"},
		{src:"images/300x250_fence_logo.png?1474922020281", id:"logo_fence"},
		{src:"images/300x250_fence_small.jpg?1474922020281", id:"small_fence"},
		{src:"images/300x250_fence_text.png?1474922020281", id:"text_fence"},

		{src:"images/300x250_dryer_big.jpg?1474922817485", id:"big_dryer"},
		{src:"images/300x250_dryer_cta.png?1474922817485", id:"cta_dryer"},
		{src:"images/300x250_dryer_logo.png?1474922817485", id:"logo_dryer"},
		{src:"images/300x250_dryer_small.jpg?1474922817485", id:"small_dryer"},
		{src:"images/300x250_dryer_text.png?1474922817485", id:"text_dryer"}
	]
};



lib.ssMetadata = [];


// symbols:


// fence

(lib.big = function() {
	this.initialize(img.big_fence);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1500,1250);


(lib.cta = function() {
	this.initialize(img.cta_fence);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.logo = function() {
	this.initialize(img.logo_fence);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.small = function() {
	this.initialize(img.small_fence);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.text = function() {
	this.initialize(img.text_fence);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.small();
	this.instance.parent = this;
	this.instance.setTransform(-750,-625,5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-750,-625,1500,1250);


(lib.text_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bEYIAAouMAu2AAAIAAIug");
	this.shape.setTransform(150,222);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.cta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.image = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(750,625);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({alpha:1},4).wait(1));

	// small.jpg
	this.instance_1 = new lib.big();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1500,1250);



// dryer



(lib.bigDryer = function() {
	this.initialize(img.big_dryer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1000);


(lib.ctaDryer = function() {
	this.initialize(img.cta_dryer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.logoDryer = function() {
	this.initialize(img.logo_dryer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.smallDryer = function() {
	this.initialize(img.small_dryer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.textDryer = function() {
	this.initialize(img.text_dryer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.Tween1Dryer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.smallDryer();
	this.instance.parent = this;
	this.instance.setTransform(-600,-500,4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-600,-500,1200,1000);


(lib.text_1Dryer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.textDryer();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.logo_1Dryer = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logoDryer();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bEYIAAouMAu2AAAIAAIug");
	this.shape.setTransform(150,222);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.cta_1Dryer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ctaDryer();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.imageDryer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween1Dryer("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(600,500);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({alpha:1},4).wait(1));

	// small.jpg
	this.instance_1 = new lib.bigDryer();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1000);


// stage content:



(lib._300x250_BCH163025BC_EVP_IAB = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

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
	this.instance_3.setTransform(-347.1,-83.2,1.1,1.1,0,0,0,299.9,368.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({mode:"synched",loop:false},0).wait(1).to({regX:750,regY:625,scaleX:1.09,scaleY:1.09,x:148,y:197.7,startPosition:1},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:148.1,y:195.3,startPosition:2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:148.2,y:191.4,startPosition:3},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:148.4,y:186.4,startPosition:4},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:148.5,y:180.4,startPosition:5},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:148.7,y:173.7,startPosition:6},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:148.9,y:166.4,startPosition:7},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:149.1,y:159,startPosition:8},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:149.3,y:151.6,startPosition:9},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:149.5,y:144.6},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:149.6,y:138.2},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:149.8,y:132.8},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:149.9,y:128.7},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:150,y:125.9},0).wait(1).to({regX:299.8,regY:368.8,scaleX:0.2,scaleY:0.2,x:60,y:73.8,mode:"single"},0).wait(67).wait(48).to({alpha:0},6));


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
	this.instance_7.setTransform(-393,137,1.2,1.2,0,0,0,299.9,368.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(214).to({mode:"synched",loop:false},0).wait(1).to({regX:600,regY:500,scaleX:1.19,scaleY:1.19,x:-30.8,y:292.4,startPosition:1},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:-24.8,y:286.8,startPosition:2},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-15.3,y:278,startPosition:3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-2.8,y:266.5,startPosition:4},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:12.1,y:252.6,startPosition:5},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:29,y:237.1,startPosition:6},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:47,y:220.4,startPosition:7},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:65.5,y:203.2,startPosition:8},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:83.9,y:186.2,startPosition:9},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:101.3,y:170},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:117.1,y:155.4},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:130.6,y:143},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:141,y:133.3},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:147.6,y:127.2},0).wait(1).to({regX:299.8,regY:368.8,scaleX:0.25,scaleY:0.25,x:75,y:92.2,mode:"single"},0).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-527,-364,1649.9,1374.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;