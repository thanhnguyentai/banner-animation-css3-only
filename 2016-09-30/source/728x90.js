(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/728x90_fence_big.jpg?1474923450014", id:"big_fence"},
		{src:"images/728x90_fence_cta.png?1474923450014", id:"cta_fence"},
		{src:"images/728x90_fence_logo.png?1474923450014", id:"logo_fence"},
		{src:"images/728x90_fence_small.jpg?1474923450014", id:"small_fence"},
		{src:"images/728x90_fence_text.png?1474923450014", id:"text_fence"},

		{src:"images/728x90_dryer_big.jpg?1474923338226", id:"big_dryer"},
		{src:"images/728x90_dryer_cta.png?1474923338226", id:"cta_dryer"},
		{src:"images/728x90_dryer_logo.png?1474923338226", id:"logo_dryer"},
		{src:"images/728x90_dryer_small.jpg?1474923338226", id:"small_dryer"},
		{src:"images/728x90_dryer_text.png?1474923338226", id:"text_dryer"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.big = function() {
	this.initialize(img.big_fence);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3645,450);


(lib.cta = function() {
	this.initialize(img.cta_fence);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1458,180);


(lib.logo = function() {
	this.initialize(img.logo_fence);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1458,180);


(lib.small = function() {
	this.initialize(img.small_fence);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,729,90);


(lib.text = function() {
	this.initialize(img.text_fence);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1458,180);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.small();
	this.instance.parent = this;
	this.instance.setTransform(-1822.5,-225,5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1822.5,-225,3645,450);


(lib.text_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.text();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,729,90);


(lib.logo_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ap0HCIAAuDITqAAIAAODg");
	this.shape.setTransform(665,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,729,90);


(lib.cta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,729,90);


(lib.image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1822.5,225);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({alpha:1},4).wait(1));

	// small.jpg
	this.instance_1 = new lib.big();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3645,450);


// dryer


(lib.bigDryer = function() {
	this.initialize(img.big_dryer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3645,450);


(lib.ctaDryer = function() {
	this.initialize(img.cta_dryer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1458,180);


(lib.logoDryer = function() {
	this.initialize(img.logo_dryer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1458,180);


(lib.smallDryer = function() {
	this.initialize(img.small_dryer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,729,90);


(lib.textDryer = function() {
	this.initialize(img.text_dryer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1458,180);


(lib.Tween1Dryer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.smallDryer();
	this.instance.parent = this;
	this.instance.setTransform(-1822.5,-225,5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1822.5,-225,3645,450);


(lib.text_1Dryer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.textDryer();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,729,90);


(lib.logo_1Dryer = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logoDryer();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ap0HCIAAuDITqAAIAAODg");
	this.shape.setTransform(665,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,729,90);


(lib.cta_1Dryer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ctaDryer();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,729,90);


(lib.imageDryer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween1Dryer("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1822.5,225);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({alpha:1},4).wait(1));

	// small.jpg
	this.instance_1 = new lib.bigDryer();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3645,450);




// stage content:



(lib._728x90_BCH163025BC_EVP_IAB = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(364,45);

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
	this.instance_3.setTransform(-916,231,1,1,0,0,0,299.9,368.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({mode:"synched",loop:false},0).wait(1).to({regX:1822.5,regY:225,scaleX:0.99,scaleY:0.99,x:603.8,y:86.7,startPosition:1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:595.8,y:85.3,startPosition:2},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:583.3,y:83.1,startPosition:3},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:566.8,y:80.2,startPosition:4},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:547,y:76.8,startPosition:5},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:524.7,y:72.9,startPosition:6},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:500.9,y:68.8,startPosition:7},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:476.3,y:64.5,startPosition:8},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:452,y:60.2,startPosition:9},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:428.9,y:56.2},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:408,y:52.6},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:390.1,y:49.5},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:376.4,y:47.1},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:367.6,y:45.6},0).wait(1).to({regX:299.8,regY:368.8,scaleX:0.2,scaleY:0.2,x:60,y:73.8,mode:"single"},0).wait(67).wait(48).to({alpha:0},6));


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
	this.instance_7.setTransform(-725,312,1,1,0,0,0,299.9,368.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(214).to({mode:"synched",loop:false},0).wait(1).to({regX:1822.5,regY:225,scaleX:0.99,scaleY:0.99,x:792.6,y:166.7,startPosition:1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:778.4,y:162.7,startPosition:2},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:755.9,y:156.3,startPosition:3},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:726.4,y:147.9,startPosition:4},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:690.9,y:137.9,startPosition:5},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:651.2,y:126.5,startPosition:6},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:608.5,y:114.4,startPosition:7},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:564.5,y:101.9,startPosition:8},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:521,y:89.5,startPosition:9},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:479.7,y:77.8},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:442.3,y:67.2},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:410.4,y:58.1},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:385.9,y:51.1},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:370.1,y:46.6},0).wait(1).to({regX:299.8,regY:368.8,scaleX:0.2,scaleY:0.2,x:60,y:73.8,mode:"single"},0).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-851.9,-92.9,3645,450);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;