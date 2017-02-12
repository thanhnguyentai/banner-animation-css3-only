(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
  width: 160,
  height: 600,
  fps: 24,
  color: "#FFFFFF",
  opacity: 1.00,
  manifest: [
    {src:"images/audi_s5_160x600_bold_proto_atlas_.png?1485982565033", id:"audi_s5_160x600_bold_proto_atlas_"}
  ]
};



lib.ssMetadata = [
    {name:"audi_s5_160x600_bold_proto_atlas_", frames: [[0,331,584,329],[0,0,585,329],[586,331,345,156],[587,0,345,150],[587,152,50,50]]}
];


// symbols:



(lib.backgroundSmall = function() {
  this.spriteSheet = ss["audi_s5_160x600_bold_proto_atlas_"];
  this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cutOutMask = function() {
  this.spriteSheet = ss["audi_s5_160x600_bold_proto_atlas_"];
  this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.s5_clean_car_small = function() {
  this.spriteSheet = ss["audi_s5_160x600_bold_proto_atlas_"];
  this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.s5_new_car_small = function() {
  this.spriteSheet = ss["audi_s5_160x600_bold_proto_atlas_"];
  this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.wheelIsoSmall = function() {
  this.spriteSheet = ss["audi_s5_160x600_bold_proto_atlas_"];
  this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.windows = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.lf(["#000000","#000000","rgba(0,0,0,0.478)"],[0,0.824,0.953],7.6,44.9,-5.8,-19.1).s().p("AkSDiQhGAGAZg/IgDgBQA3i5BSh7QCOhACdgcQByDJBdDVQAQAugfAFIgEAAg");
  this.shape.setTransform(79.3,0.6);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.lf(["#000000","#000000","rgba(0,0,0,0.478)"],[0,0.824,0.953],9.5,76.3,-8.8,-25.2).s().p("AkODwQhnj3iOjvIAAgHQCngNBLAIQBNAIAJACQC1AlByA/IAAACQDhB+C0CxIAAAIQgaAsAdA1g");
  this.shape_1.setTransform(151.6,0.7);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.lf(["#000000","#000000","rgba(0,0,0,0.478)"],[0,0.824,0.953],-3.7,72.7,-4.2,-19.6).s().p("AHkDnIgCAAQuHhRrfA7IgEgGIL+l3IAAgCQNdh2K1B1IgBAGIobF2Qg7AdgwAAQgPAAgOgDg");
  this.shape_2.setTransform(-87.1,-3.5);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.2,-26.9,406.4,53.9);


(lib.windowReflectEmbed = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#84B0C9").s().p("AlphiQAHgkBSgEQFIBcEvCUIADAEQABAchBAFQlBiLlShig");
  this.shape.setTransform(36.3,0);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13.9,72.5,27.9);


(lib.wheelIsoSmall_1 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.instance = new lib.wheelIsoSmall();
  this.instance.setTransform(0,-25);

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25,50,50);


(lib.vectorHeroWhite = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AheTJQhbhugmiZIgIACIr2gbQkqgFjmgzQgbBChTBCQgoAhhgAAIlUgDQiOgvg+hSIhYiNIingJIioAWIgaggIgLAEQgXAZghgHQg/gdAEgzIgEgvIADgDIg9hSQgOgHAUhCIAeghIAJgxIgDjaQADhBA/hAIABgDQgjhvA1iAIAAgBIE5gaQBAgIAGgqIADgBQgHg3gRgLQiTg2iTAJQAQg8A2gvIgQg5QAIghBogWIADAAIGRheIgBgCIA3ggQFRi/GmisIACgBIAYgIIANgEQE7hsFZgaIADgfQAVghAiAdIALAbQIYhQJPAsIAAADQF9ARG4BmQENBtE4EpIgGADIgXAbQixifjwh+IgDgDQh9hTijgLIgDAAQi7gNiHARIADADQCwDYBSEVIMnAQQgtg9AXg9IgMgLIAcgfIArgYIAKAAQBmgBBbBiIAAADQAeA5gQAiIESAhIAGACQEDA5BlCGQBGCOAQC6QAhAkAAAnQgDAngPAAQAOCbgjCVIAAADIg/AwIgGAAQgLByhpCcQgTAagyACIAAgDIkLgZQhHg4gTg9I3vEjIAAADIiYENQg+BVhXAlgA4MkIQDBBoENBMIIqAMQA7gBAMgvIAEiQQgMgwg6AAIu0AAQhHABgCAvgAQLpUQhWkOiejSQhYAAifA9Qg4AdgWApQg9BogyCQQgoBkBpgMgAp4qIQC8AgCShvIHblYQthhOqEBVIgYAKQmlC2lLC5IACADIAAAAQD8gOD8AAQHjAAHnAyg");
  this.shape.setTransform(295.1,0);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-128.6,590.2,257.4);


(lib.vectorHeroBlack = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#000000").s().p("AheTJQhbhugmiZIgIACIr2gbQkqgFjmgzQgbBChTBCQgoAhhgAAIlUgDQiOgvg+hSIhYiNIingJIioAWIgaggIgLAEQgXAZghgHQg/gdAEgzIgEgvIADgDIg9hSQgOgHAUhCIAeghIAJgxIgDjaQADhBA/hAIABgDQgjhvA1iAIAAgBIE5gaQBAgIAGgqIADgBQgHg3gRgLQiTg2iTAJQAQg8A2gvIgQg5QAIghBogWIADAAIGRheIgBgCIA3ggQFRi/GmisIACgBIAYgIIANgEQE7hsFZgaIADgfQAVghAiAdIALAbQIYhQJPAsIAAADQF9ARG4BmQENBtE4EpIgGADIgXAbQixifjwh+IgDgDQh9hTijgLIgDAAQi7gNiHARIADADQCwDYBSEVIMnAQQgtg9AXg9IgMgLIAcgfIArgYIAKAAQBmgBBbBiIAAADQAeA5gQAiIESAhIAGACQEDA5BlCGQBGCOAQC6QAhAkAAAnQgDAngPAAQAOCbgjCVIAAADIg/AwIgGAAQgLByhpCcQgTAagyACIAAgDIkLgZQhHg4gTg9I3vEjIAAADIiYENQg+BVhXAlgA4MkIQDBBoENBMIIqAMQA7gBAMgvIAEiQQgMgwg6AAIu0AAQhHABgCAvgAQLpUQhWkOiejSQhYAAifA9Qg4AdgWApQg9BogyCQQgoBkBpgMgAp4qIQC8AgCShvIHblYQthhOqEBVIgYAKQmlC2lLC5IACADIAAAAQD8gOD8AAQHjAAHnAyg");
  this.shape.setTransform(295.1,0);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-128.6,590.2,257.4);


(lib.roofWindowReflection = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#819DB2").s().p("AEFhhQjkB3klBMQDqiYEfgrg");
  this.shape.setTransform(26.2,0);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.9,52.3,19.8);


(lib.radialGrad = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.rf(["#7C838B","rgba(124,131,139,0)"],[0.11,0.369],0,0,0,0,0,35.7).s().p("Aj7DdQhohcAAiBQAAiABohcQBphbCSAAQCTAABpBbQBoBcAACAQAACBhoBcQhpBbiTAAQiSAAhphbg");
  this.shape.setTransform(35.7,0);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-31.2,71.4,62.6);


(lib.midStripe = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.459,1],-123,0,123,0).s().p("AzNCMIAAkXMAmbAAAIAAEXg");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-14,246.1,28);


(lib.stgBtnNew = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#00FF00").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
  this.shape.setTransform(80,300);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,600.1);


(lib.lightMCBulb = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#797B88").s().p("AgoARQgRgHAAgKQAAgJARgHQARgHAXAAQAYAAARAHQARAHAAAJQAAAKgRAHQgRAHgYAAQgXAAgRgHg");
  this.shape.setTransform(5.8,0);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.4,11.7,4.9);


(lib.gradienOverlayWhite = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.lf(["#FFFFFF","#FFFFFF","rgba(255,255,255,0)"],[0,0.824,0.953],-634.1,0,634.2,0).s().p("EhjEAr/MAAAhX9MDGJAAAMAAABX9g");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-634.1,-281.5,1268.4,563);


(lib.gradienOverlayBlack = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.lf(["#000000","#000000","rgba(0,0,0,0)"],[0,0.824,0.953],-634.1,0,634.2,0).s().p("EhjEAr/MAAAhX9MDGJAAAMAAABX9g");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-634.1,-281.5,1268.4,563);


(lib.foreGroundStripe = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AoeCJIPIk7IB1AiIuFE6IgCAJg");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.3,-17.9,108.8,35.8);


(lib.cutOutMaskSmall = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.instance = new lib.cutOutMask();
  this.instance.setTransform(0,-164.5);

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-164.5,585,329);


(lib.ctaBtn = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // text
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#CC0033").s().p("AgfAbIAmgbIgmgaIAYAAIAoAaIgoAbg");
  this.shape.setTransform(114.6,7.4);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#000000").s().p("AgOAiIgFgCIgFgCIgDgFIgCgEQgCgEAAgIQAAgEACgFIACgEIAEgFIAEgCIAFgDIANgCQAEAAAFACIAJADIAAgZIAPAAIAABHIgNAAIgCgGQgDADgGACIgKACQgJAAgDgCgAgGgDIgFADIgDADIgBAGIABAGIADAGIAFACIAGABIAJgBIAIgCIAAgVIgIgDIgJgBIgGABg");
  this.shape_1.setTransform(102.6,7.1);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#000000").s().p("AAPAaIAAgaIgBgGIgDgEIgDgCIgHgBQgDAAgFACIgHACIAAAjIgQAAIAAgxIAOAAIABAFQADgCAGgDIAKgCIALABQAEABADADQAFACABAFIACAEIAAAHIAAAcg");
  this.shape_2.setTransform(94.9,8);

  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#000000").s().p("AgPAaQgEgBgDgCQgDgCgBgDQgCgDAAgEIABgFIACgDQACgDAEAAIALgDIALgBIAKABIgBgFIgDgDIgFgCIgFgBIgMABIgJADIAAgLIAKgDQAGgCAGAAQAGAAAGACQAFABAEACQAEADACAEQACAEAAAFIAAAeIgOAAIgBgFQgEADgFACIgLACIgJgBgAgHAFQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAIgBADQAAABAAAAQABABAAABQAAAAAAABQABAAAAABQADABAFAAIAIgBIAHgDIAAgIIgIAAIgMABg");
  this.shape_3.setTransform(87,8);

  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#000000").s().p("AgfAkIAAhGIANAAIABAGQAEgEAGgCIAGgBIAEAAIAMABIAFACIAFAEQADADACAFQACAHAAAFQAAAHgCACIgCAFIgDADIgFADIgFADIgMACQgEAAgGgBQgFgCgEgDIAAAZgAgIgWIgIADIAAAUIAIADIAIABIAHgBIAFgDIADgCIABgHIgBgHQgBgDgCgBIgFgDIgHgBIgIABg");
  this.shape_4.setTransform(79.8,9);

  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#000000").s().p("AANAZIgNgQIgOAQIgTAAIAZgZIgYgYIAUAAIAMAPIANgPIAUAAIgZAYIAaAZg");
  this.shape_5.setTransform(72,8);

  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#000000").s().p("AgFAaIgHgBIgGgDIgEgDIgDgEIgDgEQgBgEgBgHQAAgEACgFIACgEIAEgEIAEgEIAGgCIAGgCIAGgBQAFAAAIACIAGADIAEADQADACADAGQACAFAAAFIgBAEIgsAAQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAIADAEIAFACIAHABIAMgBIALgDIAAALQgEACgIABIgNACgAAOgEIgBgFIgDgDIgFgCIgFgBIgEABIgFACIgDADIgCAFIAcAAIAAAAg");
  this.shape_6.setTransform(64.9,8);

  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#000000").s().p("AgNAZIgGgCIgFgDIgEgEIgDgFIgBgFIgBgGIABgEIABgGIADgEIAEgEIAFgDIAGgDIANgCQAFAAAJACIAGACIAFADIAEAEIADAFIABAGIABAEIgBAGIgBAFIgDAEIgEAEIgFAEIgGACQgJACgFAAIgNgCgAgGgNQgDABgDACQgCACgBADQgCADAAACQAAADACADIADAFIAGADIAGABIAHgBIAGgDQACgCABgDQACgDAAgDQAAgCgCgDQgBgDgCgCIgGgDIgHgBIgGABg");
  this.shape_7.setTransform(53.8,8);

  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#000000").s().p("AAAAfQgEgBgDgCIgEgHIgBgIIAAgUIgMAAIAAgLIAMAAIACgNIALAAIAAANIAXAAIAAALIgXAAIAAASQAAAFACACQACACAGAAQAFAAAJgCIAAALIgIACIgJABIgIgBg");
  this.shape_8.setTransform(47,7.5);

  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#000000").s().p("AAJAkIgXgYIAAAYIgQAAIAAhHIAQAAIAAAoIAXgTIAVAAIgeAWIAfAcg");
  this.shape_9.setTransform(37.7,7);

  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#000000").s().p("AgHAZIgFgCIgFgDIgDgEIgCgFQgCgDAAgIQAAgFACgFIACgEIADgEIAFgDIAFgDIAHgBIAFgBIALACQAFABAEACIAAALIgJgCIgKgBIgGABIgEACIgDAFIgBAFIABAGIADAFIAEADIAFABIALgBIAJgDIAAAMIgJADIgLABQgIgBgEgBg");
  this.shape_10.setTransform(30.6,8);

  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#000000").s().p("AgGAkIAAgyIANAAIAAAygAgGgVIAAgOIANAAIAAAOg");
  this.shape_11.setTransform(25.7,7);

  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#000000").s().p("AgEAjQgEgBgCgCQgCgCgBgDIgBgGIAAg5IAOAAIAAA2IABAFQACABAEAAIAIgBIAAALQgIACgFAAQgDAAgDgBg");
  this.shape_12.setTransform(22.2,7.1);

  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#000000").s().p("AgCAlIgIgDIgHgDIgHgFIgDgFIgEgHIgCgHIAAgHIAAgGIACgHIAEgGIAEgGIAGgFIAHgDIAIgCIAIgBIAPABIAMAEIAAANIgMgEIgOgCQgHABgCABQgFACgDAEQgEADgBAFQgBAEgBAEQABAFABAEQABAFAEADQACAEAGACIACABIAHABIAOgBIANgEIAAANQgGACgHABIgPABIgIAAg");
  this.shape_13.setTransform(15.8,7);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

  // whiteBack
  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#FFFFFF").s().p("AoyBQIAAifIRkAAIAACfg");
  this.shape_14.setTransform(66.7,6.8);

  this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.7,-1.2,113.3,16.5);


(lib.copyUnderlay = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("EgiSAH3IHevtMA9HAAAIAAPtg");
  this.shape.setTransform(219.6,0);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-50.3,439.2,100.7);


(lib.copy02 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 2
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#000000").s().p("AgLAMIAAgXIAXAAIAAAXg");
  this.shape.setTransform(322.8,16.7);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#000000").s().p("AgKA3QgHgBgGgDIgLgFIgJgHQgEgDgDgFIgFgKQgDgKAAgLQAAgMAEgKQAEgKAHgHIAJgHIAKgFIAMgDIAMgBQAJAAAQAEQALAEAHAHQAIAHAEAKQAEAJAAAMIAAAGIhhAAQABAIADAGQADAHAFAEQAGAFAIACQAIADAJAAQAOAAAMgDIAVgHIAAARQgKAFgLACQgNADgPAAgAAngKQgBgHgDgFQgDgFgGgEQgFgEgHgCQgHgCgHAAQgGAAgHACQgHACgFAEQgGAEgDAFQgDAFAAAHIBMAAIAAAAg");
  this.shape_1.setTransform(312.7,12.6);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#000000").s().p("Ag9BNIAAiXIASAAIABAKQAJgFALgEQALgDALAAQAJAAAQAEIALAEIAJAHIAHAIIAGAJIADAMIABAMIgBANIgDAJIgGAKIgHAIIgJAGIgLAFQgRAEgIAAQgLAAgLgDQgKgCgIgFIAAA0gAgXg5QgJACgIAFIAAA6QAIAFAJADQAKACAKAAQAJAAAJgCQAIgDAGgFQAGgFADgFQADgIAAgKQAAgKgDgHQgDgIgGgFQgGgFgIgDQgJgCgJAAQgKAAgKADg");
  this.shape_2.setTransform(298.4,14.7);

  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#000000").s().p("AgYA1QgKgCgGgEQgIgFgEgHIgDgJIgBgMIAAhEIAVAAIAABBQAAAHACAGQACAFAFADQAEADAHACQAGABAJAAQAKAAAJgCQAIgDAJgFIAAhSIAVAAIAABqIgSAAIgBgJQgJAFgLAEQgMADgKAAQgMAAgIgCg");
  this.shape_3.setTransform(282.5,12.7);

  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#000000").s().p("AgOA3IgOgDIgLgGQgFgCgEgEIgHgJIgFgJQgDgKAAgMQAAgLADgKIAFgKIAHgIIAJgHIALgFIAOgDIAOgBQALAAASAEIALAFIAJAHIAHAIIAFAKQADAKAAALQAAAMgEAKQgGANgFAFIgJAGIgMAGQgRAEgLAAgAgSgkQgIADgGAFQgFAFgDAIQgCAHAAAIQAAAJACAHQADAHAFAGQAGAFAIADQAIADAKAAQAKAAAJgDQAIgDAFgFQAGgFACgIQADgHAAgJQAAgIgDgHQgCgIgGgFQgFgFgIgDQgJgDgKAAQgKAAgIADg");
  this.shape_4.setTransform(267.5,12.6);

  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#000000").s().p("AAABNQgHgCgIgCIgOgGIgNgIQgFgGgFgGQgEgGgDgHQgDgIgBgIQgCgJAAgJQAAgIACgIQABgIADgIQADgHAEgGIAKgLQAGgGAHgDQAGgEAHgCQAIgDAIgCIAPgBQANAAAMACQANACAKAEIAAATQgLgFgMgBQgLgDgLAAQgSABgGADIgLAFQgEADgFADQgEAEgDAFQgEAFgBAFQgDAGgBAGIgBANQAAAIABAHQABAHAEAGIAFAKIAIAIQAHAFANAFQAJAEAMAAQAZgBAYgGIAAASQgIADgMACQgNACgQAAQgJAAgIgBg");
  this.shape_5.setTransform(252.5,10.4);

  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#000000").s().p("AglBKQgNgCgKgDIAAgTIAYAGQAOACAPAAQAKAAAJgCQAJgCAGgDQAGgEADgFQACgFAAgGQAAgFgDgEQgCgEgFgEQgFgDgHgCIgOgEQgLgDgSgCIgbAAIADhMIBoAAIAAASIhUAAIgCApQATABAOADQAKACAUAGQAHADAGACIAJAIQAFAEACAGQACAGAAAHQAAAKgEAIQgEAJgJAGQgNAHgJACQgTAEgLAAQgPAAgOgDg");
  this.shape_6.setTransform(230.6,10.5);

  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#000000").s().p("AgnBLQgNgBgKgEIAAgSQALADAOACQAPADAPAAQAKAAAJgCQAJgCAHgCQAGgDADgFQAEgEAAgGQAAgFgDgEQgCgDgFgEIgNgFIgTgGIgXgIQgMgCgHgFQgIgGgEgGQgFgIABgKQAAgKAEgHQAFgIAIgFQAIgFANgDQAMgDAOAAQAQAAAOACQAMACAKAEIAAATQgMgEgLgCQgOgDgPAAQgJAAgIACQgIABgGADQgGADgCAEQgDAEAAAFQAAAFACAEQACADAEAEQAFADAIADIAUAHIAZAIQAMACAHAEQAIAFADAHQAEAHAAALQAAAJgFAIQgEAIgJAFQgKAGgNADQgUADgKAAQgQAAgPgDg");
  this.shape_7.setTransform(214.9,10.4);

  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#000000").s().p("AgJBLIAAhqIATAAIAABqgAgJg0IAAgWIATAAIAAAWg");
  this.shape_8.setTransform(198.3,10.4);

  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#000000").s().p("AgYBJQgPgGgFgFIgHgIIgGgKIgDgLIgBgNQAAgJAEgMQACgFAEgFIAHgIIAJgGIALgFQAIgDARgBQALAAALADQAKACAIAFIAAg0IAVAAIAACWIgSAAIgCgJQgHAFgMADQgMAEgLAAQgRgCgHgCgAgOgPQgIACgGAFQgGAFgDAGQgDAHAAAKQAAAKADAIQADAHAGAFQAGAFAIADQAJADAJAAQAKAAAKgDQAJgDAIgFIAAg5QgIgFgJgDQgKgDgKAAQgJAAgJADg");
  this.shape_9.setTransform(187,10.5);

  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#000000").s().p("AgYA1QgKgCgGgEQgIgFgEgHIgDgJIgBgMIAAhEIAVAAIAABBQAAAHACAGQACAFAFADQAEADAHACQAGABAJAAQAKAAAJgCQAIgDAJgFIAAhSIAVAAIAABqIgSAAIgBgJQgJAFgLAEQgMADgKAAQgMAAgIgCg");
  this.shape_10.setTransform(172,12.7);

  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#000000").s().p("ABABLIgTglIhZAAIgTAlIgYAAIBMiVIAXAAIBMCVgAAmAUIgmhKIgkBKIBKAAg");
  this.shape_11.setTransform(156,10.4);

  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#000000").s().p("AAjA1IgjhTIgiBTIgUAAIgyhqIAXAAIAlBUIAkhUIARAAIAkBUIAlhUIAXAAIgzBqg");
  this.shape_12.setTransform(130.8,12.6);

  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#000000").s().p("AgKA3QgHgBgGgDIgLgFIgJgHQgEgDgDgFIgFgKQgDgKAAgLQAAgMAEgKQAEgKAHgHIAJgHIAKgFIAMgDIAMgBQAJAAAQAEQALAEAHAHQAIAHAEAKQAEAJAAAMIAAAGIhhAAQABAIADAGQADAHAFAEQAGAFAIACQAIADAJAAQAOAAAMgDIAVgHIAAARQgKAFgLACQgNADgPAAgAAngKQgBgHgDgFQgDgFgGgEQgFgEgHgCQgHgCgHAAQgGAAgHACQgHACgFAEQgGAEgDAFQgDAFAAAHIBMAAIAAAAg");
  this.shape_13.setTransform(113.5,12.6);

  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#000000").s().p("AAlA2IAAg/QAAgIgCgFQgCgGgFgDQgDgDgHgCQgHgBgIAAQgKAAgLADQgLADgHAFIAABQIgVAAIAAhqIARAAIADAMQAHgHANgDQAIgDARgBQALABAIABQAKACAGAFQAHAFAEAIQAEAIAAAMIAABCg");
  this.shape_14.setTransform(98.9,12.5);

  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#000000").s().p("AgjAKIAAgTIBHAAIAAATg");
  this.shape_15.setTransform(86.5,11.7);

  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#000000").s().p("AgKBLQgGgCgDgDQgDgEgCgFQgCgFABgHIAAh9IAUAAIAAB7QABAGACADQACAEAHAAQALAAAJgDIAAAQQgOAEgMAAQgFAAgGgCg");
  this.shape_16.setTransform(79.1,10.5);

  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#000000").s().p("AgKBLQgFgCgEgDQgDgEgCgFQgBgFgBgHIAAh9IAWAAIAAB7QAAAGACADQACAEAGAAQANAAAHgDIAAAQQgOAEgLAAQgFAAgGgCg");
  this.shape_17.setTransform(71.8,10.5);

  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#000000").s().p("AgaA2QgJgCgGgEQgHgEgDgGQgEgHAAgIQAAgIAEgGQAEgGAIgDQAIgEAMgCQANgCAPAAIAaABIAAgEQAAgHgCgFQgCgFgEgDQgFgEgHgBQgGgCgJAAQgOAAgLACIgUAGIAAgQQAKgEAKgDQANgCANAAQAMAAAKADQAKACAIAFQAHAGAEAHQAEAIAAAKIAABDIgSAAIgBgKQgIAGgMADQgMAEgMAAQgKAAgJgCgAgHAGQgJABgGACQgGADgDADQgCADAAAFQAAAEABADQACADAEACQADADAGABIAOABQAKAAALgDQAKgDAHgFIAAgYIgVAAg");
  this.shape_18.setTransform(59.8,12.6);

  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#000000").s().p("AgKA3QgHgBgGgDIgLgFIgJgHQgEgDgDgFIgFgKQgDgKAAgLQAAgMAEgKQAEgKAHgHIAJgHIAKgFIAMgDIAMgBQAJAAAQAEQALAEAHAHQAIAHAEAKQAEAJAAAMIAAAGIhhAAQABAIADAGQADAHAFAEQAGAFAIACQAIADAJAAQAOAAAMgDIAVgHIAAARQgKAFgLACQgNADgPAAgAAngKQgBgHgDgFQgDgFgGgEQgFgEgHgCQgHgCgHAAQgGAAgHACQgHACgFAEQgGAEgDAFQgDAFAAAHIBMAAIAAAAg");
  this.shape_19.setTransform(39.9,12.6);

  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#000000").s().p("AAlBLIAAhBQAAgIgCgDQgCgGgFgDQgEgDgGgCQgGgBgJAAQgKAAgLADQgKADgIAFIAABQIgVAAIAAiVIAVAAIAAA2QAJgGALgDQANgDALgBQALABAIABQAJACAHAFQAHAFAEAIQAEAIAAAKIAABEg");
  this.shape_20.setTransform(25.3,10.4);

  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#000000").s().p("AgJBLIAAiEIg+AAIAAgRICPAAIAAARIg+AAIAACEg");
  this.shape_21.setTransform(9.9,10.4);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,327.9,25);


(lib.copy01 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
  this.shape.setTransform(238.6,16.3);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#000000").s().p("AgPAwQgKgDgEgDIgEgGIgEgHIgCgHIgBgIQAAgHADgHIAEgHIAEgFIAGgFIAIgCQAEgCAMgBQAHAAAHACQAHACAFACIAAgiIAOAAIAABkIgLAAIgBgHQgGAEgIACQgIACgHAAQgLAAgEgDgAgIgJQgGABgEADQgEAEgBADQgCAFAAAHQAAAGACAFQABAFAEAEQAEADAGABQAFACAGABQAHgBAGgCQAGgBAFgDIAAgmQgFgDgGgCQgGgCgHAAQgGAAgFACg");
  this.shape_1.setTransform(231,12.2);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#000000").s().p("AgGAlIgJgDIgHgDIgGgEIgEgGIgEgHQgCgHAAgHQAAgHACgHQADgGAFgFIAGgFIAHgDIAIgDIAHAAQAGAAALADQAHACAFAFQAFAEADAHQACAHAAAHIAAAEIg/AAQAAAFACAEQACAFAEADQADACAGACQAFACAFAAQAKAAAIgCIAOgEIAAAKIgOAGQgJABgKAAgAAagGQgBgEgCgEQgCgDgDgDIgIgEQgFgBgFAAIgIABIgIAEQgEADgCADQgCAEAAAEIAyAAIAAAAg");
  this.shape_2.setTransform(221.8,13.6);

  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#000000").s().p("AAZAkIAAgpQAAgGgCgDIgEgGIgHgDIgKgBQgFAAgJACQgHACgFADIAAA1IgOAAIAAhGIAMAAIACAIQAFgEAIgDIAQgCQAHAAAGABQAGABAEAEQAFADADAFQADAGgBAHIAAAsg");
  this.shape_3.setTransform(212.2,13.5);

  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#000000").s().p("AgGAyIAAhGIANAAIAABGgAgGgiIAAgPIANAAIAAAPg");
  this.shape_4.setTransform(205.1,12.1);

  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#000000").s().p("AgOAzIAAg7IgVAAIAAgLIAVAAIAAgEQAAgHACgFQACgFAEgDQADgDAEgCQAHgCAIAAQAJAAALADIAAALQgNgDgHAAIgIABIgGADIgCAFIAAAIIAAADIAcAAIAAALIgcAAIAAA7g");
  this.shape_5.setTransform(200.5,12);

  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#000000").s().p("AgGAlIgJgDIgHgDIgGgEIgEgGIgEgHQgCgHAAgHQAAgHACgHQADgGAFgFIAGgFIAHgDIAIgDIAHAAQAGAAALADQAHACAFAFQAFAEADAHQACAHAAAHIAAAEIg/AAQAAAFACAEQACAFAEADQADACAGACQAFACAFAAQAKAAAIgCIAOgEIAAAKIgOAGQgJABgKAAgAAagGQgBgEgCgEQgCgDgDgDIgIgEQgFgBgFAAIgIABIgIAEQgEADgCADQgCAEAAAEIAyAAIAAAAg");
  this.shape_6.setTransform(192.4,13.6);

  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#000000").s().p("AgZAkIAAhGIAMAAIABANIAFgFIAGgFIAFgDIAJgBQAIAAAFABIAAANQgGgCgIAAIgKABIgFAFQgFADgDAFIAAAtg");
  this.shape_7.setTransform(185.1,13.5);

  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#000000").s().p("AgOASIANgSIgDgRIAMAAQAEAAABABQACACAAADQAAAGgEAFIgKAMIgEAGg");
  this.shape_8.setTransform(174.7,17.3);

  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#000000").s().p("AgZAkIAAhGIAMAAIABANIAFgFIAGgFIAFgDIAJgBQAIAAAFABIAAANQgGgCgIAAIgKABIgFAFQgFADgDAFIAAAtg");
  this.shape_9.setTransform(170.4,13.5);

  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#000000").s().p("AgGAlIgJgDIgHgDIgGgEIgEgGIgEgHQgCgHAAgHQAAgHACgHQADgGAFgFIAGgFIAHgDIAIgDIAHAAQAGAAALADQAHACAFAFQAFAEADAHQACAHAAAHIAAAEIg/AAQAAAFACAEQACAFAEADQADACAGACQAFACAFAAQAKAAAIgCIAOgEIAAAKIgOAGQgJABgKAAgAAagGQgBgEgCgEQgCgDgDgDIgIgEQgFgBgFAAIgIABIgIAEQgEADgCADQgCAEAAAEIAyAAIAAAAg");
  this.shape_10.setTransform(162,13.6);

  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#000000").s().p("AAXAkIgXg4IgXA4IgMAAIghhGIAPAAIAYA3IAYg3IALAAIAYA3IAZg3IAPAAIgiBGg");
  this.shape_11.setTransform(150.6,13.6);

  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#000000").s().p("AgJAlIgJgDIgHgDIgGgEIgFgGIgDgHQgDgGAAgIQAAgHADgGIADgHIAFgFIAGgFIAHgDIAJgCIAJgBQAHAAAMADIAIADIAFAFIAFAFIADAHQADAGAAAHQAAAIgDAGQgEAJgEAEIgGAEIgHADQgMADgHAAgAgLgXQgGACgDADQgEADgCAFQgBAGAAAEQAAAFABAGQACAEAEAEQADADAGACQAFACAGABQAHgBAFgCQAGgCADgDQAEgEACgEQACgFAAgGQAAgEgCgGQgCgFgEgDQgDgDgGgCQgFgCgHAAQgGAAgFACg");
  this.shape_12.setTransform(138.7,13.6);

  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#000000").s().p("AgoAzIAAhjIAMAAIABAGQAFgDAHgCQAIgDAHAAQAGAAALADIAHACIAGAFIAFAFIADAHIACAHIABAJIgBAIIgCAFIgDAGIgFAGIgGAEIgHADQgMADgFAAQgHAAgHgBQgHgDgFgDIAAAjgAgPglIgLAEIAAAmQAGADAFACQAHACAHABQAFgBAGgCQAFgBAEgDQAEgEACgDQACgFAAgGQAAgHgCgFQgCgFgEgEQgEgDgFgBQgGgCgFAAQgHAAgHACg");
  this.shape_13.setTransform(129.1,15);

  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#000000").s().p("AAXAkIgXg4IgWA4IgNAAIghhGIAOAAIAZA3IAYg3IALAAIAYA3IAZg3IAOAAIghBGg");
  this.shape_14.setTransform(112.9,13.6);

  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#000000").s().p("AgRAkIgKgEQgEgDgCgEQgDgEAAgGQAAgFADgEQACgEAFgCQAGgBAIgCQAJgCAJABIARAAIAAgCIgBgIQgBgEgDgCQgDgDgFAAQgFgCgFAAQgJAAgHACIgNADIAAgKQAGgDAHgBQAIgCAIAAQAJAAAHACQAGABAFAEQAFAEADAEQACAFAAAHIAAAtIgLAAIgCgHQgFAEgIACQgIACgIAAIgMgBgAgEAEIgLACQgDACgCACQgCACAAADQAAADABACIAEADIAGADIAKABQAGgBAGgCQAIgBAEgDIAAgRIgOAAg");
  this.shape_15.setTransform(101.2,13.6);

  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#000000").s().p("AgZAkIAAhGIAMAAIABANIAFgFIAGgFIAFgDIAJgBQAIAAAFABIAAANQgGgCgIAAIgKABIgFAFQgFADgDAFIAAAtg");
  this.shape_16.setTransform(94,13.5);

  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#000000").s().p("AgUAkIgNgEIAAgLIAOADIAQACIAJgBIAIgCIAEgCQAAgBABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgBgEIgEgDQgDgCgLgCIgOgDIgKgDQgEgCgCgDQgCgEAAgFQAAgFACgDQACgFAEgDQAFgCAHgBQAHgCAHAAQAJAAAGACQAIABAEACIAAALIgMgDIgPgCIgIABIgGACIgFACIgBAFIABAEIAFADIANAEIAPADIAKACQAEACACAEQACAEAAAEQAAAGgDADQgCAFgFACIgMAFQgIABgHAAIgRgBg");
  this.shape_17.setTransform(82.1,13.6);

  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#000000").s().p("AgGAyIAAhGIANAAIAABGgAgGgiIAAgPIANAAIAAAPg");
  this.shape_18.setTransform(76,12.1);

  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#000000").s().p("AgUAkIgNgEIAAgLIAOADIAPACIAKgBIAHgCIAFgCQAAgBABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgBgEIgEgDQgDgCgLgCIgOgDIgKgDQgEgCgCgDQgCgEAAgFQAAgFACgDQADgFADgDQAFgCAHgBQAHgCAHAAQAIAAAIACQAGABAFACIAAALIgMgDIgPgCIgIABIgHACIgDACIgBAFIABAEIAEADIANAEIAPADIAKACQAEACACAEQACAEAAAEQAAAGgDADQgDAFgEACIgNAFQgHABgIAAIgQgBg");
  this.shape_19.setTransform(66.1,13.6);

  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#000000").s().p("AgUAkIgNgEIAAgLIAOADIAQACIAJgBIAIgCIAEgCQAAgBABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgBgEIgEgDQgDgCgLgCIgOgDIgKgDQgEgCgCgDQgCgEAAgFQAAgFACgDQACgFAEgDQAFgCAHgBQAHgCAHAAQAJAAAGACQAIABAEACIAAALIgMgDIgPgCIgIABIgGACIgFACIgBAFIABAEIAFADIANAEIAPADIAKACQAEACACAEQACAEAAAEQAAAGgDADQgCAFgFACIgMAFQgIABgHAAIgRgBg");
  this.shape_20.setTransform(57.8,13.6);

  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#000000").s().p("AgGAlIgJgDIgHgDIgGgEIgEgGIgEgHQgCgHAAgHQAAgHACgHQADgGAFgFIAGgFIAHgDIAIgDIAHAAQAGAAALADQAHACAFAFQAFAEADAHQACAHAAAHIAAAEIg/AAQAAAFACAEQACAFAEADQADACAGACQAFACAFAAQAKAAAIgCIAOgEIAAAKIgOAGQgJABgKAAgAAagGQgBgEgCgEQgCgDgDgDIgIgEQgFgBgFAAIgIABIgIAEQgEADgCADQgCAEAAAEIAyAAIAAAAg");
  this.shape_21.setTransform(49.1,13.6);

  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#000000").s().p("AgZAkIAAhGIAMAAIABANIAFgFIAGgFIAFgDIAJgBQAIAAAFABIAAANQgGgCgIAAIgKABIgFAFQgFADgDAFIAAAtg");
  this.shape_22.setTransform(41.9,13.5);

  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#000000").s().p("AgUAyIgNgDIAAgMQAFADAIABQAIACALAAIALgBQAFgCAEgCQAEgDACgEQACgFAAgHIAAgEQgFADgIACQgHACgHAAQgIAAgHgCQgIgDgGgEIgEgFIgEgGIgCgGIgBgIQAAgGADgKIAEgGIAEgFQAEgDAKgEQAEgCAMgBQAHAAAIACQAIACAFAEIAAgGIAMAAIAABDIgBAJIgCAHIgDAGIgGAEQgFAEgJACQgHACgIAAQgLAAgJgCgAgIgmQgGABgEADQgEADgBAFQgCAFAAAHQAAAGACAFQABADAEADQAEADAGACQAFABAFAAQAIAAAGgBQAGgCAFgEIAAgjQgFgDgGgCQgGgCgIAAQgFAAgFACg");
  this.shape_23.setTransform(32.6,15);

  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#000000").s().p("AgJAlIgJgDIgHgDIgGgEIgFgGIgDgHQgDgGAAgIQAAgHADgGIADgHIAFgFIAGgFIAHgDIAJgCIAJgBQAHAAAMADIAIADIAFAFIAFAFIADAHQADAGAAAHQAAAIgDAGQgEAJgEAEIgGAEIgHADQgMADgHAAgAgLgXQgGACgDADQgEADgCAFQgBAGAAAEQAAAFABAGQACAEAEAEQADADAGACQAFACAGABQAHgBAFgCQAGgCADgDQAEgEACgEQACgFAAgGQAAgEgCgGQgCgFgEgDQgDgDgGgCQgFgCgHAAQgGAAgFACg");
  this.shape_24.setTransform(22.9,13.6);

  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#000000").s().p("AgZAkIAAhGIAMAAIABANIAFgFIAGgFIAFgDIAJgBQAIAAAFABIAAANQgGgCgIAAIgKABIgFAFQgFADgDAFIAAAtg");
  this.shape_25.setTransform(15.3,13.5);

  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#000000").s().p("AgoAyIAAhjIAoAAQAGAAAMACQAFACAIAFQAFAEACAGQADAFAAAHQAAAHgDAGQgCAFgFADQgIAFgGACQgMACgGAAIgZAAIAAAmgAgaABIAXAAQAHAAAGgBQAGAAADgDQAEgCABgEQACgEAAgFQAAgFgCgDQgBgEgEgCQgDgDgGgBIgNgBIgXAAg");
  this.shape_26.setTransform(6.8,12.1);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,4.5,243.5,18);


(lib.circBack = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#010206").s().p("AifCeQhDhCAAhcQAAhbBDhCQBDhCBcAAQBeAABCBCQBDBCAABbQAABchDBCQhCBCheAAQhcAAhDhCg");
  this.shape.setTransform(22.8,0);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-22.4,45.5,44.8);


(lib.carNewEmbed = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.instance = new lib.s5_new_car_small();
  this.instance.setTransform(0,-75);

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-75,345,150);


(lib.carCleanSmall = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.instance = new lib.s5_clean_car_small();
  this.instance.setTransform(0,-78);

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-78,345,156);


(lib.brakeLights = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FF0000").s().p("AK+HCIgWg6Qgagqg0gCIgFgBIjAAAIAMgmIF3gCIAgABQAZACgCAnIgEA0IgDBHQAKAtgogFIhGADgAhqFYQgNgdARgEIH4gBIgPAmgA0YEfIABgtIDkAcQAVgBgSAgIgGABgA1MDtIACgCIAnADIABA1IgWgBIgeACQgOggAYgXgAGEnqQhDADg0gBIgCgMQApgGBWgDIAAAAQH0gSHfAzIAAAZQoHg5nSASg");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.3,-51.5,274.6,103);


(lib.backgroundNewSmall = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.instance = new lib.backgroundSmall();
  this.instance.setTransform(0,-164.5);

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-164.5,584,329);


(lib.windowReflect01 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 6
  this.instance = new lib.windowReflectEmbed();
  this.instance.setTransform(126.5,45.3,1,1,9,0,0,36.3,0);
  this.instance.alpha = 0.422;
  this.instance._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({x:105,y:34.3},3).to({regX:36.2,rotation:0,x:36.2,y:0},6).to({rotation:-5,x:8.8,y:-11.7},6).wait(1));

  // Layer 8
  this.instance_1 = new lib.windowReflectEmbed();
  this.instance_1.setTransform(129.3,44.4,1,1,9,0,0,36.3,0);
  this.instance_1.alpha = 0.422;
  this.instance_1._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({x:78.2,y:18.5},8).wait(1));

  // Layer 7
  this.instance_2 = new lib.windowReflectEmbed();
  this.instance_2.setTransform(8.8,-11.7,1,1,-5,0,0,36.2,0);
  this.instance_2.alpha = 0.422;

  this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:0,x:-40.4,y:-29.2},6).to({_off:true},1).wait(12));

  // Layer 1
  this.instance_3 = new lib.windowReflectEmbed();
  this.instance_3.setTransform(78.2,18.5,1,1,9,0,0,36.3,0);
  this.instance_3.alpha = 0.422;

  this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:36.2,rotation:0,x:36.2,y:0},6).to({rotation:-3.9,x:-39,y:-26.1},6).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.4,-28.8,144.5,66.8);


(lib.wheelEmbed = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // new
  this.instance = new lib.wheelIsoSmall_1();
  this.instance.setTransform(-0.1,0.1,1.71,1.71,0,0,0,25.1,-0.1);

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

  // alphaUnder
  this.shape = new cjs.Shape();
  this.shape.graphics.f("rgba(0,0,0,0.757)").s().p("AknEbQh6h2AAilQAAilB6h1QB7h1CsAAQCtAAB7B1QB6B1AAClQAAClh6B2Qh7B1itAAQisAAh7h1g");
  this.shape.setTransform(0.4,-1.1,1.043,1.065);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-43.7,88.2,86.8);


(lib.trunkReflectMC = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.instance = new lib.radialGrad();
  this.instance.setTransform(35.6,0,1,1,0,0,0,35.6,0);

  this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,scaleX:2.21,scaleY:0.33,skewX:5.4,skewY:4.2,x:134.9,y:10.7},9).to({regY:0,scaleX:1,scaleY:1,skewX:0,skewY:0,x:144.8,y:13.2},3).to({regY:0.3,scaleX:2.21,scaleY:0.51,skewX:-0.8,skewY:-2,x:112,y:15.2},3).to({regX:35.7,regY:0.4,scaleY:0.51,skewX:10.2,skewY:9,x:106.1,y:17.4},2).to({regX:35.6,regY:0.2,scaleY:0.51,skewX:12.4,skewY:11.2,x:153,y:31.6},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-31.2,71.4,62.6);


(lib.roofWindowReflectionjoined = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 2
  this.instance = new lib.roofWindowReflection();
  this.instance.setTransform(213.2,-29.2,1,1,18.5,0,0,26.2,-0.1);
  this.instance._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:14.5,x:129,y:-22.8},3).to({scaleX:1,scaleY:1,rotation:0,x:26.2,y:-0.1},3).to({rotation:-5.1,x:-7.1,y:19.3},4).to({regX:26.1,rotation:-12.2,x:-51.8,y:45},4).wait(1));

  // Layer 1
  this.instance_1 = new lib.roofWindowReflection();
  this.instance_1.setTransform(213.2,-29.2,1,1,18.5,0,0,26.2,-0.1);

  this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:7.8,x:94.1,y:-16.6},4).to({rotation:0,x:26.2,y:-0.1},3).to({rotation:-5.1,x:-7.1,y:19.3},3).to({regX:26.1,rotation:-12.2,x:-51.8,y:45},4).to({_off:true},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(185.2,-46.8,55.9,35.3);


(lib.interiorICO = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // linear
  this.shape = new cjs.Shape();
  this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABGCLIiaAAQgYgdAGgiQApgSBOAfQgGhUA9g4IAdAAIgbDAABkhWIgoABQgHglARgSIAiAAIAAA2");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

  // back
  this.instance = new lib.circBack();
  this.instance.setTransform(2.2,1.8,1,1,0,0,0,22.8,0);
  this.instance.alpha = 0.801;

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.6,-20.6,45.5,44.8);


(lib.headlightICO = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // linear
  this.shape = new cjs.Shape();
  this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AA3AAIAnABIAAAYIgtAAIACgIAA4gIIgBAIIgEARAAMgCIArACAARgTICCATIgfAjIh+AAACIAzIgSAVAAJARIAqAAAiehHQCqAFC1AwIg5BFIiagEIgGgGAiehHIAAANIgBAEAi/AZQgCgxALgvQAMAAAMAAAiUgoIAQACIgBAnIALAAIAAAOIgTAAIgCAaIBlAEIASgEAiVgEIgBANAiVgZIAAAVQgYANgQAiAiUguIAAAGIgBAPAiEgmIB+AQIAXADIgpA8ABzBIIj7gIQgtAAgIgVAi/AZQAAAHABAHQAAACABACAh6APIgBAIAiFAbIBRAAIAugxAi/AZQASgkAYgOAieg6QCnAICrAp");
  this.shape.setTransform(0,-1.2);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

  // back
  this.instance = new lib.circBack();
  this.instance.setTransform(-0.7,-1,1,1,0,0,0,22.8,0);
  this.instance.alpha = 0.801;

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-23.4,45.5,44.8);


(lib.foreGroundAnim = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // maskTop (mask)
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("EBGIAWKQGRhhAfgwQAegxABgLQAYhklRhlIgLgJUhI4gWkhNlgNDIBMijUBMYAOWAkiALKUAkpALOADIAB4QDDB3guBbQgvBbi8BFQhrAnhJAAQg3AAgkgWg");
  mask.setTransform(-464.8,-309);

  // Layer 100
  this.instance = new lib.midStripe();
  this.instance.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance._off = true;

  this.instance.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(248).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},1).wait(168));

  // overhead
  this.instance_1 = new lib.midStripe();
  this.instance_1.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_1._off = true;

  this.instance_1.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(240).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},9).wait(168));

  // Layer 102
  this.instance_2 = new lib.midStripe();
  this.instance_2.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_2._off = true;

  this.instance_2.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(232).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},17).wait(168));

  // overhead
  this.instance_3 = new lib.midStripe();
  this.instance_3.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_3._off = true;

  this.instance_3.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(224).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},25).wait(168));

  // Layer 104
  this.instance_4 = new lib.midStripe();
  this.instance_4.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_4._off = true;

  this.instance_4.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(216).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},33).wait(168));

  // overhead
  this.instance_5 = new lib.midStripe();
  this.instance_5.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_5._off = true;

  this.instance_5.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(208).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},41).wait(168));

  // Layer 106
  this.instance_6 = new lib.midStripe();
  this.instance_6.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_6._off = true;

  this.instance_6.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(200).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},49).wait(168));

  // overhead
  this.instance_7 = new lib.midStripe();
  this.instance_7.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_7._off = true;

  this.instance_7.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(192).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},57).wait(168));

  // Layer 108
  this.instance_8 = new lib.midStripe();
  this.instance_8.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_8._off = true;

  this.instance_8.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(184).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},65).wait(168));

  // overhead
  this.instance_9 = new lib.midStripe();
  this.instance_9.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_9._off = true;

  this.instance_9.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(176).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},73).wait(168));

  // Layer 110
  this.instance_10 = new lib.midStripe();
  this.instance_10.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_10._off = true;

  this.instance_10.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(168).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},81).wait(168));

  // overhead
  this.instance_11 = new lib.midStripe();
  this.instance_11.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_11._off = true;

  this.instance_11.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(160).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},89).wait(168));

  // Layer 112
  this.instance_12 = new lib.midStripe();
  this.instance_12.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_12._off = true;

  this.instance_12.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(152).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},97).wait(168));

  // overhead
  this.instance_13 = new lib.midStripe();
  this.instance_13.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_13._off = true;

  this.instance_13.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(144).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},105).wait(168));

  // Layer 114
  this.instance_14 = new lib.midStripe();
  this.instance_14.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_14._off = true;

  this.instance_14.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(136).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},113).wait(168));

  // Layer 61
  this.instance_15 = new lib.midStripe();
  this.instance_15.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_15._off = true;

  this.instance_15.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(120).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},13).wait(284));

  // overhead
  this.instance_16 = new lib.midStripe();
  this.instance_16.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_16._off = true;

  this.instance_16.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(112).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},9).wait(296));

  // Layer 63
  this.instance_17 = new lib.midStripe();
  this.instance_17.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_17._off = true;

  this.instance_17.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(104).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},17).wait(296));

  // overhead
  this.instance_18 = new lib.midStripe();
  this.instance_18.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_18._off = true;

  this.instance_18.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(96).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},25).wait(296));

  // Layer 65
  this.instance_19 = new lib.midStripe();
  this.instance_19.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_19._off = true;

  this.instance_19.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(88).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},33).wait(296));

  // overhead
  this.instance_20 = new lib.midStripe();
  this.instance_20.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_20._off = true;

  this.instance_20.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(80).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},41).wait(296));

  // Layer 67
  this.instance_21 = new lib.midStripe();
  this.instance_21.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_21._off = true;

  this.instance_21.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(72).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},49).wait(296));

  // overhead
  this.instance_22 = new lib.midStripe();
  this.instance_22.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_22._off = true;

  this.instance_22.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(64).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},57).wait(296));

  // Layer 57
  this.instance_23 = new lib.midStripe();
  this.instance_23.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_23._off = true;

  this.instance_23.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(56).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},78).wait(283));

  // overhead
  this.instance_24 = new lib.midStripe();
  this.instance_24.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_24._off = true;

  this.instance_24.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(48).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},9).wait(360));

  // Layer 59
  this.instance_25 = new lib.midStripe();
  this.instance_25.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_25._off = true;

  this.instance_25.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(40).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},17).wait(360));

  // overhead
  this.instance_26 = new lib.midStripe();
  this.instance_26.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_26._off = true;

  this.instance_26.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(32).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},25).wait(360));

  // Layer 55
  this.instance_27 = new lib.midStripe();
  this.instance_27.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_27._off = true;

  this.instance_27.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(24).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},110).wait(283));

  // overhead
  this.instance_28 = new lib.midStripe();
  this.instance_28.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_28._off = true;

  this.instance_28.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(16).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},9).wait(392));

  // Layer 54
  this.instance_29 = new lib.midStripe();
  this.instance_29.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_29._off = true;

  this.instance_29.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(8).to({_off:false},0).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},126).wait(283));

  // overhead
  this.instance_30 = new lib.midStripe();
  this.instance_30.setTransform(-12.4,-167.1,0.219,1.424,-13.5,0,0,0.1,-0.1);

  this.instance_30.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance_30).to({regX:0,regY:-0.2,scaleX:0.33,scaleY:1.37,rotation:-67.2,x:29.8,y:-187.5},4).to({regX:0.3,regY:-0.1,scaleX:0.43,scaleY:1.74,rotation:-162.3,x:8,y:-211.6},4).to({regX:0.4,scaleX:0.96,scaleY:2.15,rotation:-165.4,x:-1084.1,y:-477.2},22).to({_off:true},134).wait(283));

  // midStripeMask (mask)
  var mask_1 = new cjs.Shape();
  mask_1._off = true;
  mask_1.graphics.p("EhKvAJ1UBKTgG1BF1gLzIAKgFQFDg1gXg0QgBgGgFgFQgQgPg6gIQAxgRApAeIAEACQBHA0i7A+UgDAAA/gjFAF4UgjBAF1hJKAHgg");
  mask_1.setTransform(-481.6,-38.6);

  // Layer 82
  this.instance_31 = new lib.midStripe();
  this.instance_31.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_31._off = true;

  this.instance_31.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(268).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).wait(149));

  // Layer 83
  this.instance_32 = new lib.midStripe();
  this.instance_32.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_32._off = true;

  this.instance_32.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(260).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},11).wait(146));

  // midstripe01
  this.instance_33 = new lib.midStripe();
  this.instance_33.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_33._off = true;

  this.instance_33.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(252).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},19).wait(146));

  // Layer 85
  this.instance_34 = new lib.midStripe();
  this.instance_34.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_34._off = true;

  this.instance_34.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(244).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},27).wait(146));

  // Layer 86
  this.instance_35 = new lib.midStripe();
  this.instance_35.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_35._off = true;

  this.instance_35.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(236).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},35).wait(146));

  // midstripe01
  this.instance_36 = new lib.midStripe();
  this.instance_36.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_36._off = true;

  this.instance_36.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(228).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},43).wait(146));

  // Layer 88
  this.instance_37 = new lib.midStripe();
  this.instance_37.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_37._off = true;

  this.instance_37.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(222).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},49).wait(146));

  // Layer 89
  this.instance_38 = new lib.midStripe();
  this.instance_38.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_38._off = true;

  this.instance_38.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(214).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},57).wait(146));

  // midstripe01
  this.instance_39 = new lib.midStripe();
  this.instance_39.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_39._off = true;

  this.instance_39.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(206).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},65).wait(146));

  // Layer 91
  this.instance_40 = new lib.midStripe();
  this.instance_40.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_40._off = true;

  this.instance_40.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(199).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},72).wait(146));

  // Layer 92
  this.instance_41 = new lib.midStripe();
  this.instance_41.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_41._off = true;

  this.instance_41.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(191).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},80).wait(146));

  // midstripe01
  this.instance_42 = new lib.midStripe();
  this.instance_42.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_42._off = true;

  this.instance_42.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(183).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},88).wait(146));

  // Layer 94
  this.instance_43 = new lib.midStripe();
  this.instance_43.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_43._off = true;

  this.instance_43.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(175).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},96).wait(146));

  // Layer 95
  this.instance_44 = new lib.midStripe();
  this.instance_44.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_44._off = true;

  this.instance_44.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(167).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},104).wait(146));

  // midstripe01
  this.instance_45 = new lib.midStripe();
  this.instance_45.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_45._off = true;

  this.instance_45.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(159).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},112).wait(146));

  // Layer 97
  this.instance_46 = new lib.midStripe();
  this.instance_46.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_46._off = true;

  this.instance_46.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(153).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},118).wait(146));

  // Layer 98
  this.instance_47 = new lib.midStripe();
  this.instance_47.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_47._off = true;

  this.instance_47.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(145).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},126).wait(146));

  // midstripe01
  this.instance_48 = new lib.midStripe();
  this.instance_48.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_48._off = true;

  this.instance_48.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(137).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},134).wait(146));

  // Layer 24
  this.instance_49 = new lib.midStripe();
  this.instance_49.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_49._off = true;

  this.instance_49.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(131).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},2).wait(284));

  // Layer 25
  this.instance_50 = new lib.midStripe();
  this.instance_50.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_50._off = true;

  this.instance_50.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(123).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},10).wait(284));

  // midstripe01
  this.instance_51 = new lib.midStripe();
  this.instance_51.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_51._off = true;

  this.instance_51.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(115).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},18).wait(284));

  // Layer 27
  this.instance_52 = new lib.midStripe();
  this.instance_52.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_52._off = true;

  this.instance_52.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(107).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},26).wait(284));

  // Layer 28
  this.instance_53 = new lib.midStripe();
  this.instance_53.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_53._off = true;

  this.instance_53.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(99).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},34).wait(284));

  // midstripe01
  this.instance_54 = new lib.midStripe();
  this.instance_54.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_54._off = true;

  this.instance_54.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(91).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},42).wait(284));

  // Layer 30
  this.instance_55 = new lib.midStripe();
  this.instance_55.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_55._off = true;

  this.instance_55.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(85).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},48).wait(284));

  // Layer 31
  this.instance_56 = new lib.midStripe();
  this.instance_56.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_56._off = true;

  this.instance_56.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(77).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},56).wait(284));

  // midstripe01
  this.instance_57 = new lib.midStripe();
  this.instance_57.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_57._off = true;

  this.instance_57.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(69).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},64).wait(284));

  // Layer 16
  this.instance_58 = new lib.midStripe();
  this.instance_58.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_58._off = true;

  this.instance_58.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(62).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},4).wait(351));

  // Layer 17
  this.instance_59 = new lib.midStripe();
  this.instance_59.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_59._off = true;

  this.instance_59.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(54).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},9).wait(354));

  // midstripe01
  this.instance_60 = new lib.midStripe();
  this.instance_60.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_60._off = true;

  this.instance_60.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(46).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},17).wait(354));

  // Layer 13
  this.instance_61 = new lib.midStripe();
  this.instance_61.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_61._off = true;

  this.instance_61.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(38).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},28).wait(351));

  // Layer 14
  this.instance_62 = new lib.midStripe();
  this.instance_62.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_62._off = true;

  this.instance_62.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(30).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},9).wait(378));

  // midstripe01
  this.instance_63 = new lib.midStripe();
  this.instance_63.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_63._off = true;

  this.instance_63.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(22).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},17).wait(378));

  // Layer 12
  this.instance_64 = new lib.midStripe();
  this.instance_64.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_64._off = true;

  this.instance_64.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(16).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},50).wait(351));

  // Layer 11
  this.instance_65 = new lib.midStripe();
  this.instance_65.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);
  this.instance_65._off = true;

  this.instance_65.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(8).to({_off:false},0).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},58).wait(351));

  // midstripe01
  this.instance_66 = new lib.midStripe();
  this.instance_66.setTransform(25.6,-112.1,0.219,1.424,-13.5,0,0,0.1,-0.1);

  this.instance_66.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_66).to({regX:0.4,regY:0,scaleX:0.96,scaleY:2.15,rotation:-4.5,x:-884,y:27.8},30).to({_off:true},66).wait(351));

  // Layer 2
  this.instance_67 = new lib.foreGroundStripe();
  this.instance_67._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(294).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},19).to({_off:true},1).wait(133));

  // Layer 2
  this.instance_68 = new lib.foreGroundStripe();
  this.instance_68._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(284).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},19).to({_off:true},1).wait(143));

  // Layer 72
  this.instance_69 = new lib.foreGroundStripe();
  this.instance_69._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(275).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},19).to({_off:true},1).wait(152));

  // Layer 2
  this.instance_70 = new lib.foreGroundStripe();
  this.instance_70._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(259).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},23).to({_off:true},32).wait(133));

  // Layer 2
  this.instance_71 = new lib.foreGroundStripe();
  this.instance_71._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_71).wait(245).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},23).to({_off:true},1).wait(178));

  // Layer 75
  this.instance_72 = new lib.foreGroundStripe();
  this.instance_72._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(230).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},23).to({_off:true},1).wait(193));

  // Layer 2
  this.instance_73 = new lib.foreGroundStripe();
  this.instance_73._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_73).wait(223).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},23).to({_off:true},68).wait(133));

  // Layer 2
  this.instance_74 = new lib.foreGroundStripe();
  this.instance_74._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_74).wait(209).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},23).to({_off:true},1).wait(214));

  // Layer 78
  this.instance_75 = new lib.foreGroundStripe();
  this.instance_75._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_75).wait(196).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},23).to({_off:true},1).wait(227));

  // Layer 2
  this.instance_76 = new lib.foreGroundStripe();
  this.instance_76._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(180).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},23).to({_off:true},111).wait(133));

  // Layer 2
  this.instance_77 = new lib.foreGroundStripe();
  this.instance_77._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_77).wait(166).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},23).to({_off:true},1).wait(257));

  // Layer 81
  this.instance_78 = new lib.foreGroundStripe();
  this.instance_78._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_78).wait(151).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},23).to({_off:true},1).wait(272));

  // Layer 2
  this.instance_79 = new lib.foreGroundStripe();
  this.instance_79._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_79).wait(143).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},19).to({_off:true},1).wait(284));

  // Layer 2
  this.instance_80 = new lib.foreGroundStripe();
  this.instance_80._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_80).wait(133).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},19).to({_off:true},1).wait(294));

  // Layer 20
  this.instance_81 = new lib.foreGroundStripe();
  this.instance_81._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_81).wait(124).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},19).to({_off:true},1).wait(303));

  // Layer 2
  this.instance_82 = new lib.foreGroundStripe();
  this.instance_82._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_82).wait(108).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},23).to({_off:true},32).wait(284));

  // Layer 2
  this.instance_83 = new lib.foreGroundStripe();
  this.instance_83._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_83).wait(94).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},23).to({_off:true},1).wait(329));

  // Layer 23
  this.instance_84 = new lib.foreGroundStripe();
  this.instance_84._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_84).wait(79).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},23).to({_off:true},1).wait(344));

  // Layer 2
  this.instance_85 = new lib.foreGroundStripe();
  this.instance_85._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_85).wait(72).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},23).to({_off:true},1).wait(351));

  // Layer 2
  this.instance_86 = new lib.foreGroundStripe();
  this.instance_86._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_86).wait(58).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},23).to({_off:true},1).wait(365));

  // Layer 6
  this.instance_87 = new lib.foreGroundStripe();
  this.instance_87._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_87).wait(45).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},23).to({_off:true},1).wait(378));

  // Layer 2
  this.instance_88 = new lib.foreGroundStripe();
  this.instance_88._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_88).wait(29).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},23).to({_off:true},1).wait(394));

  // Layer 2
  this.instance_89 = new lib.foreGroundStripe();
  this.instance_89._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_89).wait(15).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},23).to({_off:true},1).wait(408));

  // Layer 1
  this.instance_90 = new lib.foreGroundStripe();

  this.timeline.addTween(cjs.Tween.get(this.instance_90).to({scaleX:1.55,scaleY:1.55,x:-391.6,y:130},23).to({_off:true},1).wait(423));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.3,-192.7,108.8,210.6);


(lib.fenderLight02 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.instance = new lib.radialGrad();
  this.instance.setTransform(40.2,4.6,1,1,0,0,0,35.6,0);

  this.timeline.addTween(cjs.Tween.get(this.instance).to({x:15.6,y:-8.1},14).to({x:7.4,y:-24.5},5).to({scaleX:2.02},5).to({x:-59,y:-18.6},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.6,-26.7,71.4,62.6);


(lib.fender01Reflect = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.instance = new lib.radialGrad();
  this.instance.setTransform(24.4,-4.5,1,1,0,0,0,35.6,0);

  this.timeline.addTween(cjs.Tween.get(this.instance).to({x:46.9,y:11.3},7).to({x:33.6,y:12.5},5).to({regX:35.5,scaleX:2.56,scaleY:0.58,x:-59.2,y:6.8},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-35.7,71.4,62.6);


(lib.fasciaICO = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // linear
  this.shape = new cjs.Shape();
  this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjHgkIAkgxIE8AAIAYAZADIgmIgXgWACmA8IgHATAjCgkIGKABIgiBfAixAcIALAfIAIAXAjHgfIAWA7IFeAAAiwg8IFhAAAi1ADIFrAAAicBWIE5AAAimA7IFMAB");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

  // back
  this.instance = new lib.circBack();
  this.instance.setTransform(-0.1,-1,1,1,0,0,0,22.8,0);
  this.instance.alpha = 0.801;

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.9,-23.4,45.5,44.8);


(lib.engineICO = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // linear
  this.shape = new cjs.Shape();
  this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABggxQA0AAAiAhQAEALADAKQAEAMACAOAACiJIAuAAQAGgDATgBQATgBAKAOQALAOABAFQADAFAbAdQAbAdALAeAB1AEQAuAAAgAbAjCAfQgDAUgCAYQAAAtA4ABIA/ADQAdgBAMAKQALAJAbAAQABAAACAAQAbAAALgJQAMgKAdABIA/gDQA4gBAAgtQgCgYgDgUAAuATIAAgBQAJgJANAAQANAAAJAJQAJAJAAANQAAANgJAJQgJAJgNAAQgNAAgJgJIAAAAQgJgJAAgNQAAgMAJgJQAIAJAAAMQAAANgIAJIgBAAQgJAJgNAAQgLAAgIgGQgCgCgBgBQgHgJAAgNQAAgNAHgJQABgBACgBQAIgHALAAQANAAAJAJgAAEAQQABABABABQAJAJAAANQAAANgJAJQgBABgBACQgHAGgLAAQgNAAgJgJIgBAAQgIgJAAgNQAAgMAIgJIABgBQAJgJANAAQALAAAHAHgABvgTQAuAAAgAYAhfgxQg0AAgiAhQgEALgDAKQgEAMgCAOAgBiJIguAAQgGgDgTgBQgTgBgKAOQgLAOgBAFQgDAFgbAdQgbAdgLAeAglA+IAAAAQgJAJgNAAQgNAAgJgJQgJgJAAgNQAAgNAJgJQAJgJANAAQANAAAJAJIAAABQAJAJAAAMQAAANgJAJgAh0AEQguAAggAbAhugTQguAAggAY");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

  // Layer 2
  this.instance = new lib.circBack();
  this.instance.setTransform(0,2.8,1,1,0,0,0,22.8,0);
  this.instance.alpha = 0.801;

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-19.6,45.5,44.8);


(lib.driverAssistICO = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // linear
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AAACfQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQANAAAOgDQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgPADgOAAIAAAAgAgeCbQgPgEgPgGQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAABABAAQANAGAOAEQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQAAABgBAAQAAAAAAABIgDAAIgBAAgAA6CTQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQAOgFALgHQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgNAIgOAGIgCAAIgCAAgAhXCBQgNgJgKgKQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAgBgBQABAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAKAJAMAJQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgBAAIgDgBgABpByQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAJgJAIgMIABgCQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQABABAAAAQgBABAAAAQAAABAAAAIgBACIAAABQgJAMgKAKQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAgDBzIgCAAIAAAAQgvgBghgiQgighgBgvIgYAAQAAAMACANQABAAAAABQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAgBgBQgCgNAAgNIgiAAIAAAZQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgvQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIAAAOIBEAAQACgtAhghQAhghAvgCIAAAAIACAAIACAAQAvAAAjAjQAhAhACAtIAiAAIgDgPQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAABABIACARIAdAAIAAgPQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIAAAsQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgVIgdAAIAAADQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDIgiAAQgBAvgiAhQgjAjgvAAIgCAAgAhOBJQAfAfAqABIACAAIACAAQArAAAgggQAfgeABgrIhSAAIAMAWIAAAEIgBADIgDABIhIAAIgDgBIgBgDIAAgEIANgWIhPAAQABArAfAegAAAgsIABADIASAhIBXAAQgCgpgegeQgggggrAAIgCAAIgCAAQgqACgfAeQgeAegCApIBVAAIAUgiIACgCIACAAIABAAgAh+BYQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQgIgMgGgOQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAFANAHAMQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAIgCABIgBAAgACMBCQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQABgBAAAAQAAgBAAAAQAGgOAEgOQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgDAOgHAPQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgBABIgCgBgAiTgbQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQADgPAGgOQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQgFANgDAOQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAABIgDAAIgBAAgACPgxQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgFgOgIgMQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAIANAGAPQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgCABIgCgBgAh8hUQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAJgMAKgKQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgKAKgIALQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgBAAIgDgBgABthkQgJgKgMgJQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQANAJAKALQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAhQh7QgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQANgJAOgGQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgOAFgLAIIgDABIgBAAgAA+iHQgNgGgPgDQAAgBgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAPAEAOAGQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABIgCAAIgCgBgAgbiRQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAIACgBIABAAQAQgDANAAQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgNAAgOADIgDABIgBAAIgCgBg");

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

  // solid
  this.instance = new lib.circBack();
  this.instance.setTransform(0.2,0.1,1,1,0,0,0,22.8,0);
  this.instance.alpha = 0.801;

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.6,-22.3,45.5,44.8);


(lib.doorPanelLights = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 61
  this.instance = new lib.lightMCBulb();
  this.instance.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(265).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).wait(1));

  // Layer 62
  this.instance_1 = new lib.lightMCBulb();
  this.instance_1.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_1._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(262).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).wait(4));

  // Layer 63
  this.instance_2 = new lib.lightMCBulb();
  this.instance_2.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_2._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(258).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).wait(8));

  // Layer 64
  this.instance_3 = new lib.lightMCBulb();
  this.instance_3.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_3._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(254).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).wait(12));

  // Layer 65
  this.instance_4 = new lib.lightMCBulb();
  this.instance_4.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_4._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(251).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).wait(15));

  // Layer 66
  this.instance_5 = new lib.lightMCBulb();
  this.instance_5.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_5._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(248).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).wait(18));

  // Layer 67
  this.instance_6 = new lib.lightMCBulb();
  this.instance_6.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_6._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(245).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).wait(21));

  // Layer 68
  this.instance_7 = new lib.lightMCBulb();
  this.instance_7.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_7._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(241).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).wait(25));

  // Layer 69
  this.instance_8 = new lib.lightMCBulb();
  this.instance_8.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_8._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(237).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).wait(29));

  // Layer 70
  this.instance_9 = new lib.lightMCBulb();
  this.instance_9.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_9._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(234).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).wait(32));

  // Layer 71
  this.instance_10 = new lib.lightMCBulb();
  this.instance_10.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_10._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(232).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).wait(34));

  // Layer 72
  this.instance_11 = new lib.lightMCBulb();
  this.instance_11.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_11._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(229).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).wait(37));

  // Layer 73
  this.instance_12 = new lib.lightMCBulb();
  this.instance_12.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_12._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(225).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).wait(41));

  // Layer 74
  this.instance_13 = new lib.lightMCBulb();
  this.instance_13.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_13._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(221).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).wait(45));

  // Layer 75
  this.instance_14 = new lib.lightMCBulb();
  this.instance_14.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_14._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(218).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).wait(48));

  // Layer 76
  this.instance_15 = new lib.lightMCBulb();
  this.instance_15.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_15._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(215).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).wait(51));

  // Layer 77
  this.instance_16 = new lib.lightMCBulb();
  this.instance_16.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_16._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(212).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).wait(54));

  // Layer 78
  this.instance_17 = new lib.lightMCBulb();
  this.instance_17.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_17._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(208).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).wait(58));

  // Layer 79
  this.instance_18 = new lib.lightMCBulb();
  this.instance_18.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_18._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(204).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).wait(62));

  // Layer 80
  this.instance_19 = new lib.lightMCBulb();
  this.instance_19.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_19._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(201).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).wait(65));

  // Layer 41
  this.instance_20 = new lib.lightMCBulb();
  this.instance_20.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_20._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(198).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).wait(68));

  // Layer 42
  this.instance_21 = new lib.lightMCBulb();
  this.instance_21.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_21._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(195).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},4).wait(67));

  // Layer 43
  this.instance_22 = new lib.lightMCBulb();
  this.instance_22.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_22._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(191).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},8).wait(67));

  // Layer 44
  this.instance_23 = new lib.lightMCBulb();
  this.instance_23.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_23._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(187).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},12).wait(67));

  // Layer 45
  this.instance_24 = new lib.lightMCBulb();
  this.instance_24.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_24._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(184).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},15).wait(67));

  // Layer 46
  this.instance_25 = new lib.lightMCBulb();
  this.instance_25.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_25._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(181).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},18).wait(67));

  // Layer 47
  this.instance_26 = new lib.lightMCBulb();
  this.instance_26.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_26._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(178).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},21).wait(67));

  // Layer 48
  this.instance_27 = new lib.lightMCBulb();
  this.instance_27.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_27._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(174).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},25).wait(67));

  // Layer 49
  this.instance_28 = new lib.lightMCBulb();
  this.instance_28.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_28._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(170).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},29).wait(67));

  // Layer 50
  this.instance_29 = new lib.lightMCBulb();
  this.instance_29.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_29._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(167).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},32).wait(67));

  // Layer 51
  this.instance_30 = new lib.lightMCBulb();
  this.instance_30.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_30._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(165).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},34).wait(67));

  // Layer 52
  this.instance_31 = new lib.lightMCBulb();
  this.instance_31.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_31._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(162).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},37).wait(67));

  // Layer 53
  this.instance_32 = new lib.lightMCBulb();
  this.instance_32.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_32._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(158).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},41).wait(67));

  // Layer 54
  this.instance_33 = new lib.lightMCBulb();
  this.instance_33.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_33._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(154).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},45).wait(67));

  // Layer 55
  this.instance_34 = new lib.lightMCBulb();
  this.instance_34.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_34._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(151).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},48).wait(67));

  // Layer 56
  this.instance_35 = new lib.lightMCBulb();
  this.instance_35.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_35._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(148).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},51).wait(67));

  // Layer 57
  this.instance_36 = new lib.lightMCBulb();
  this.instance_36.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_36._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(145).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},54).wait(67));

  // Layer 58
  this.instance_37 = new lib.lightMCBulb();
  this.instance_37.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_37._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(141).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},58).wait(67));

  // Layer 59
  this.instance_38 = new lib.lightMCBulb();
  this.instance_38.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_38._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(137).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},62).wait(67));

  // Layer 60
  this.instance_39 = new lib.lightMCBulb();
  this.instance_39.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_39._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(134).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},65).wait(67));

  // Layer 21
  this.instance_40 = new lib.lightMCBulb();
  this.instance_40.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_40._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(131).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},44).wait(91));

  // Layer 22
  this.instance_41 = new lib.lightMCBulb();
  this.instance_41.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_41._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(128).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},4).wait(134));

  // Layer 23
  this.instance_42 = new lib.lightMCBulb();
  this.instance_42.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_42._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(124).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},8).wait(134));

  // Layer 24
  this.instance_43 = new lib.lightMCBulb();
  this.instance_43.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_43._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(120).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},12).wait(134));

  // Layer 25
  this.instance_44 = new lib.lightMCBulb();
  this.instance_44.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_44._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(117).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},15).wait(134));

  // Layer 26
  this.instance_45 = new lib.lightMCBulb();
  this.instance_45.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_45._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(114).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},18).wait(134));

  // Layer 27
  this.instance_46 = new lib.lightMCBulb();
  this.instance_46.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_46._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(111).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},21).wait(134));

  // Layer 28
  this.instance_47 = new lib.lightMCBulb();
  this.instance_47.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_47._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(107).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},25).wait(134));

  // Layer 29
  this.instance_48 = new lib.lightMCBulb();
  this.instance_48.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_48._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(103).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},29).wait(134));

  // Layer 30
  this.instance_49 = new lib.lightMCBulb();
  this.instance_49.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_49._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(100).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},32).wait(134));

  // Layer 31
  this.instance_50 = new lib.lightMCBulb();
  this.instance_50.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_50._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(98).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},34).wait(134));

  // Layer 32
  this.instance_51 = new lib.lightMCBulb();
  this.instance_51.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_51._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(95).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},37).wait(134));

  // Layer 33
  this.instance_52 = new lib.lightMCBulb();
  this.instance_52.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_52._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(91).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},41).wait(134));

  // Layer 34
  this.instance_53 = new lib.lightMCBulb();
  this.instance_53.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_53._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(87).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},45).wait(134));

  // Layer 35
  this.instance_54 = new lib.lightMCBulb();
  this.instance_54.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_54._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(84).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},48).wait(134));

  // Layer 36
  this.instance_55 = new lib.lightMCBulb();
  this.instance_55.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_55._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(81).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},51).wait(134));

  // Layer 37
  this.instance_56 = new lib.lightMCBulb();
  this.instance_56.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_56._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(78).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},54).wait(134));

  // Layer 38
  this.instance_57 = new lib.lightMCBulb();
  this.instance_57.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_57._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(74).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},58).wait(134));

  // Layer 39
  this.instance_58 = new lib.lightMCBulb();
  this.instance_58.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_58._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(70).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},62).wait(134));

  // Layer 40
  this.instance_59 = new lib.lightMCBulb();
  this.instance_59.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_59._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(67).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},65).wait(134));

  // Layer 11
  this.instance_60 = new lib.lightMCBulb();
  this.instance_60.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_60._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(64).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},1).wait(201));

  // Layer 12
  this.instance_61 = new lib.lightMCBulb();
  this.instance_61.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_61._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(61).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},4).wait(201));

  // Layer 13
  this.instance_62 = new lib.lightMCBulb();
  this.instance_62.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_62._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(57).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},8).wait(201));

  // Layer 14
  this.instance_63 = new lib.lightMCBulb();
  this.instance_63.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_63._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(53).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},12).wait(201));

  // Layer 15
  this.instance_64 = new lib.lightMCBulb();
  this.instance_64.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_64._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(50).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},15).wait(201));

  // Layer 16
  this.instance_65 = new lib.lightMCBulb();
  this.instance_65.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_65._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(47).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},18).wait(201));

  // Layer 17
  this.instance_66 = new lib.lightMCBulb();
  this.instance_66.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_66._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(44).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},21).wait(201));

  // Layer 18
  this.instance_67 = new lib.lightMCBulb();
  this.instance_67.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_67._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(40).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},25).wait(201));

  // Layer 19
  this.instance_68 = new lib.lightMCBulb();
  this.instance_68.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_68._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(36).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},29).wait(201));

  // Layer 20
  this.instance_69 = new lib.lightMCBulb();
  this.instance_69.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_69._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(33).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},32).wait(201));

  // Layer 6
  this.instance_70 = new lib.lightMCBulb();
  this.instance_70.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_70._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(31).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},34).wait(201));

  // Layer 7
  this.instance_71 = new lib.lightMCBulb();
  this.instance_71.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_71._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_71).wait(28).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},6).wait(232));

  // Layer 8
  this.instance_72 = new lib.lightMCBulb();
  this.instance_72.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_72._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(24).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},10).wait(232));

  // Layer 9
  this.instance_73 = new lib.lightMCBulb();
  this.instance_73.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_73._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_73).wait(20).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},14).wait(232));

  // Layer 10
  this.instance_74 = new lib.lightMCBulb();
  this.instance_74.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_74._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_74).wait(17).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},17).wait(232));

  // Layer 5
  this.instance_75 = new lib.lightMCBulb();
  this.instance_75.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_75._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_75).wait(14).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},51).wait(201));

  // Layer 4
  this.instance_76 = new lib.lightMCBulb();
  this.instance_76.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_76._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(11).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},54).wait(201));

  // Layer 2
  this.instance_77 = new lib.lightMCBulb();
  this.instance_77.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_77._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_77).wait(7).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},1).wait(258));

  // Layer 3
  this.instance_78 = new lib.lightMCBulb();
  this.instance_78.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);
  this.instance_78._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_78).wait(3).to({_off:false},0).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},44).wait(219));

  // Layer 1
  this.instance_79 = new lib.lightMCBulb();
  this.instance_79.setTransform(5.9,0,0.532,0.653,0,0,0,5.9,0);

  this.timeline.addTween(cjs.Tween.get(this.instance_79).to({regX:5.6,regY:0.2,scaleX:0.87,rotation:-10.2,x:-19.5,y:2.6},7).to({rotation:-5.2,x:-36.3,y:5},6).to({scaleX:0.7,x:-52.5,y:6.8},5).to({x:-66.9,y:8.6},4).to({regX:5.5,scaleX:0.52,x:-83.1,y:10},4).to({x:-95.7},4).to({regX:5.4,regY:0.3,scaleX:1.83,x:-117.2,y:11.8},3).to({regX:5.3,scaleX:0.27,x:-137.3,y:13.4},2).to({x:-144.1},2).to({x:-149.5},2).to({x:-154.9,y:15.2},3).to({regX:4.8,regY:0.4,scaleX:0.18,rotation:-40.7,x:-162.2,y:22.5},4).to({_off:true},1).wait(265));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.7,-1.5,6.2,3.2);


(lib.cutOutMask_1 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // vectorPatch
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#010206").s().p("EgV9Ar8MAAAhX3MAr7AAAMAAABX3g");
  this.shape.setTransform(-639.6,-0.3);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

  // bitMapNew
  this.instance = new lib.cutOutMaskSmall();
  this.instance.setTransform(1.2,0.2,1.71,1.71,0,0,0,292.5,0);

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-780.2,-281.5,1281.6,563.1);


(lib.copy = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // 02
  this.copy02 = new lib.copy02();
  this.copy02.setTransform(109.3,68.7,1,1,0,0,0,114.5,37);
  this.copy02.alpha = 0;

  this.timeline.addTween(cjs.Tween.get(this.copy02).wait(1));

  // 01
  this.copy01 = new lib.copy01();
  this.copy01.setTransform(90.5,63,1,1,0,0,0,94,55);
  this.copy01.alpha = 0;

  this.timeline.addTween(cjs.Tween.get(this.copy01).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,5.8,327.9,58);


(lib.carReflected = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // newSmall
  this.instance = new lib.carNewEmbed();
  this.instance.setTransform(-6.8,-8.8,1.71,1.71,0,0,0,172.5,0);

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-301.8,-138,602.8,276);


(lib.carClean = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // newBitmapSmall
  this.instance = new lib.carCleanSmall();
  this.instance.setTransform(-6.5,-4.7,1.71,1.71,0,0,0,172.5,-0.1);

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-301.5,-138,602.5,276);


(lib.backgroundClean = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // vectorPatch
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#010206").s().p("EgV9Ar8MAAAhX3MAr7AAAMAAABX3g");
  this.shape.setTransform(-639.6,-0.3);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

  // bitmapNewSmall
  this.instance = new lib.backgroundNewSmall();
  this.instance.setTransform(-0.7,0.2,1.71,1.71,0,0,0,292,0);

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-780.2,-281.5,1280.2,563.1);


(lib.wheelRotate = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.instance = new lib.wheelEmbed();

  this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1080},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.2,-43.7,87.4,86.8);


(lib.wheelPair = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.instance = new lib.wheelRotate();
  this.instance.setTransform(223.2,-35.4,0.329,0.846,0,4,0,0.4,-0.5);
  this.instance.alpha = 0.23;

  this.instance_1 = new lib.wheelRotate();
  this.instance_1.setTransform(1.4,5,0.572,1.061,0,3,0,0.2,0.2);
  this.instance_1.alpha = 0.23;

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.8,-71.9,265.9,122.3);


(lib.reflectionsAnimated = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // trunkReflectMask (mask)
  var mask = new cjs.Shape();
  mask._off = true;
  mask.graphics.p("AC8BdIhygoQgegbAugHIE1gTIlKgkQkDgjlBgPIA8gJQFUAJFlAiIAFABQBsAHBxAYQA9AUghAOQgPANgyAGIkRALQBIAagQASIgHAGQgCACgFAAQgGAAgKgDg");
  mask.setTransform(-211,24.2);

  // Layer 12
  this.instance = new lib.trunkReflectMC();
  this.instance.setTransform(-272.7,11.9,1,1,0,0,0,35.6,0);

  this.instance.mask = mask;

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

  // fenderRearMask02 (mask)
  var mask_1 = new cjs.Shape();
  mask_1._off = true;
  mask_1.graphics.p("ADaA5QgOhOgkg3QgdgaguAGIiEgEIgIgMIAAgFIDIgLQAjACAaA+QAbBfAbAsQAcAVA4AGIADADIgZAYQhSgDgehFgAligyIACgiICYgHIADABQAeAPgrAag");
  mask_1.setTransform(-96.5,72);

  // lightMC
  this.instance_1 = new lib.fenderLight02();
  this.instance_1.setTransform(-53.4,85.6,1,1,0,0,0,35.6,0);

  this.instance_1.mask = mask_1;

  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

  // fenderRearMask01 (mask)
  var mask_2 = new cjs.Shape();
  mask_2._off = true;
  mask_2.graphics.p("AgQAhQAOgagogOIGAAcQA2AHgSgWQgkgghNgUIABgHQAjgMBoA7QBBArhbATgAlFAYQAJgYgUgIIEIACQAhALgKAXgAmvAEQACgOBGAEIAAADIAQAYQhaAAACgRg");
  mask_2.setTransform(-42.9,39.8);

  // lightMC
  this.instance_2 = new lib.fender01Reflect();
  this.instance_2.setTransform(-14.2,32.3,1,1,0,0,0,35.6,0);

  this.instance_2.mask = mask_2;

  this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

  // roof/rearwindowMask (mask)
  var mask_3 = new cjs.Shape();
  mask_3._off = true;
  mask_3.graphics.p("AndhUQEOhqFRgqQFzgtG/AEIB9AJIADAOQxGDlupEkIh4AEQDrjPFriYg");
  mask_3.setTransform(-157,-13);

  // lightMC
  this.instance_3 = new lib.roofWindowReflectionjoined();
  this.instance_3.setTransform(-207.7,-11.7,1,1,0,0,0,26.2,-0.1);

  this.instance_3.mask = mask_3;

  this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

  // doorPanelMask (mask)
  var mask_4 = new cjs.Shape();
  mask_4._off = true;
  mask_4.graphics.p("AvbAmIgDgBIAnhJIbNihQBUAFB1BuQgqAcgBBDIh8g3I2qBoIiaCIQhXh9h4gjg");
  mask_4.setTransform(64.1,73.2);

  // lightMC
  this.instance_4 = new lib.doorPanelLights();
  this.instance_4.setTransform(140.2,60,1,1,0,0,0,5.8,0);

  this.instance_4.mask = mask_4;

  this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

  // windowMask (mask)
  var mask_5 = new cjs.Shape();
  mask_5._off = true;
  mask_5.graphics.p("AkVDrIjqndQCQggC+AjQCoAXCUBiQDCB+CqCXQgXAxAgAyg");
  mask_5.setTransform(51.3,0);

  // lightMC
  this.instance_5 = new lib.windowReflect01();
  this.instance_5.setTransform(37.2,-8.5,1,1,0,0,0,36.2,0);

  this.instance_5.mask = mask_5;

  this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262.2,-25.9,405.5,110.9);


(lib.carIso = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{turnOffFX:1});

  // timeline functions:
  this.frame_0 = function() {
    this.stop();
  }

  // actions tween:
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

  // reflections
  this.reflectionsAnimated = new lib.reflectionsAnimated();
  this.reflectionsAnimated.setTransform(135.2,-93.9,1,1,0,0,0,51.2,0);

  this.timeline.addTween(cjs.Tween.get(this.reflectionsAnimated).wait(2));

  // brakeLights
  this.brakeLights = new lib.brakeLights();
  this.brakeLights.setTransform(-145.9,-69.7);
  this.brakeLights.alpha = 0;

  this.timeline.addTween(cjs.Tween.get(this.brakeLights).wait(2));

  // windows
  this.instance = new lib.windows();
  this.instance.setTransform(-18,-94.4);
  this.instance.alpha = 0.621;

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

  // rollingWheels
  this.rollingWheels = new lib.wheelPair();
  this.rollingWheels.setTransform(38.1,54.1);

  this.timeline.addTween(cjs.Tween.get(this.rollingWheels).wait(2));

  // carReflected
  this.carReflected = new lib.carReflected();
  this.carReflected.alpha = 0;

  this.timeline.addTween(cjs.Tween.get(this.carReflected).wait(2));

  // carClean
  this.carClean = new lib.carClean();

  this.shape = new cjs.Shape();
  this.shape.graphics.f().s("#66FF00").ss(1,1,1).p("An4gKIPxAV");
  this.shape.setTransform(-105.9,-37.1);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.carClean}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-723.1,-376.7,1173.7,505.8);

(lib.carCojoined = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // carIso
  this.carIso = new lib.carIso();

  this.timeline.addTween(cjs.Tween.get(this.carIso).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-301.8,-152.3,590.3,281.1);


(lib.heroEmbed = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // timeline functions:
  this.frame_314 = function() {
    this.stop();
  }

  // actions tween:
  this.timeline.addTween(cjs.Tween.get(this).wait(314).call(this.frame_314).wait(1));

  // vectorHeroOver
  this.instance = new lib.vectorHeroBlack();
  this.instance.setTransform(47.5,194.4,1,1,0,0,0,295.1,0);
  this.instance.alpha = 0.422;

  this.instance_1 = new lib.vectorHeroWhite();
  this.instance_1.setTransform(47.5,194.4,1,1,0,0,0,295.1,0);
  this.instance_1._off = true;

  this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{alpha:0.422}}]},295).to({state:[{t:this.instance,p:{alpha:1}}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{alpha:1}}]},1).to({state:[]},1).to({state:[{t:this.instance,p:{alpha:1}}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},8).wait(4));
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(297).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false,alpha:0.422},0).to({_off:true},1).wait(1).to({_off:false,alpha:1},0).to({alpha:0},8).wait(4));

  // heroOverBitMap
  this.instance_2 = new lib.carReflected();
  this.instance_2.setTransform(54.2,204.2);
  this.instance_2.alpha = 0;
  this.instance_2._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(288).to({_off:false},0).to({alpha:1},8).wait(19));

  // carIso
  this.carCojoined = new lib.carCojoined();
  this.carCojoined.setTransform(-1428,362.9,1.95,1.95,0,0,0,0,0.1);

  this.timeline.addTween(cjs.Tween.get(this.carCojoined).to({regY:0,scaleX:1,scaleY:1,x:54,y:204},284,cjs.Ease.get(1)).wait(31));

  // cutoutMask
  this.cutOutMask = new lib.cutOutMask_1();
  this.cutOutMask.setTransform(15,72.5);

  this.timeline.addTween(cjs.Tween.get(this.cutOutMask).wait(315));

  // blackGradientForWipe
  this.instance_3 = new lib.gradienOverlayBlack();
  this.instance_3.setTransform(149.2,73.1);
  this.instance_3.alpha = 0;
  this.instance_3._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(284).to({_off:false},0).to({alpha:1},5).wait(1).to({scaleY:1,y:72},0).to({scaleY:1,x:-1120.8,y:73.1},15).wait(10));

  // whiteGradientForWipe
  this.gradientOverlay = new lib.gradienOverlayWhite();
  this.gradientOverlay.setTransform(149.2,72.5);
  this.gradientOverlay.alpha = 0;
  this.gradientOverlay._off = true;

  this.timeline.addTween(cjs.Tween.get(this.gradientOverlay).wait(289).to({_off:false},0).to({alpha:1},5).wait(2).to({x:-1150.8},18).wait(1));

  // backgroundClean
  this.instance_4 = new lib.backgroundClean();
  this.instance_4.setTransform(15,72.5);
  this.instance_4.alpha = 0;

  this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(289).to({alpha:1},5).wait(21));

  // foregroundAnim
  this.instance_5 = new lib.foreGroundAnim();
  this.instance_5.setTransform(462.7,253.1);

  this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(315));

  // blackBack
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#000000").s().p("Eh4oAsOMAAAhYbMDxRAAAMAAABYbg");
  this.shape.setTransform(-256.8,74.1);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(315));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2016.4,-209,2535.6,822.9);


(lib.heroes = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{playGradWipe:252,turnOffHeroFX:261});

  // timeline functions:
  this.frame_0 = function() {
    //this.stop();
    
    var rollingWheels = this.heroEmbed.carCojoined.carIso.rollingWheels
    var heroHighLight = this.heroEmbed.carCojoined.carIso.carReflected
    
    var driveAssistICO = this.driveAssistICO
    var driveAssistBox = this.driveAssistBox
    var interiorICO = this.interiorICO
    var interiorBox = this.interiorBox
    var engineICO = this.engineICO
    var engineBox = this.engineBox
    var fasciaICO = this.fasciaICO
    var fasciaBox = this.fasciaBox
    var headlightICO = this.headlightICO
    var headlightBox = this.headlightBox
    
    TweenLite.to(this.heroEmbed.carCojoined.carIso.brakeLights, .5, {alpha:1, ease:Quad.easeOut,overwrite:false, delay:6.5});//turn on brakelight
    TweenLite.to(this.heroEmbed.carCojoined.carIso.brakeLights, .5, {alpha:0, ease:Quad.easeOut,overwrite:false, delay:8.5});//turn off brakelight
    
    TweenLite.delayedCall(13.5,killWheels);
    
    function killWheels() {
      TweenLite.to(rollingWheels, .35, {alpha:0, ease:Quad.easeOut,overwrite:false});
      console.log ("kill wheels");
      
      };
    
    flickerHighlight();
      
    function flickerHighlight() {
      TweenLite.to(heroHighLight, .35, {alpha:.4, ease:Quad.easeOut,overwrite:true, onComplete: flickerHighlight01});
      console.log("flick on");
      }
    
    function flickerHighlight01() {
      TweenLite.to(heroHighLight, .35, {alpha:0, ease:Quad.easeOut,overwrite:true, onComplete: flickerHighlight});
      console.log("flick off");
      }
      
    function flickerKill() {
      //flickerHighlight01.kill();
      TweenLite.killTweensOf(heroHighLight);
      console.log("flick kill");
    }
      //-----------------
      // animation sequence
      //-----------------
    
      TweenLite.delayedCall(16.5,flickerKill);
  }
  this.frame_275 = function() {
    this.stop();
  }

  // actions tween:
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(275).call(this.frame_275).wait(1));

  // iconography
  this.driveAssistICO = new lib.driverAssistICO();
  this.driveAssistICO.setTransform(150.8,-50.2);
  this.driveAssistICO.alpha = 0;

  this.interiorICO = new lib.interiorICO();
  this.interiorICO.setTransform(222.5,-36.3);
  this.interiorICO.alpha = 0;

  this.engineICO = new lib.engineICO();
  this.engineICO.setTransform(296.1,-1.6);
  this.engineICO.alpha = 0;

  this.fasciaICO = new lib.fasciaICO();
  this.fasciaICO.setTransform(362.4,36.4);
  this.fasciaICO.alpha = 0;

  this.headlightICO = new lib.headlightICO();
  this.headlightICO.setTransform(399.3,99.3);
  this.headlightICO.alpha = 0;

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.headlightICO},{t:this.fasciaICO},{t:this.engineICO},{t:this.interiorICO},{t:this.driveAssistICO}]}).wait(276));

  // heroEmbed
  this.heroEmbed = new lib.heroEmbed();
  this.heroEmbed.setTransform(-75.6,-95.2,1.1,1.1,0,0,0,5,0.4);

  this.timeline.addTween(cjs.Tween.get(this.heroEmbed).to({regX:4.9,regY:0.3,scaleX:0.83,scaleY:0.83,x:71.4,y:-65.2},275,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2299.1,-325.6,2789,905.1);


// stage content:



(lib.audi_s5_160x600_bold_proto = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // timeline functions:
  this.frame_0 = function() {
    stage.enableMouseOver();

    // flashtalking clicktracking
    function clickThrough() {
        //myFT.clickTag(1);
        console.log('click through');
     };
     
    
    //-----------------
    // animation sequence
    //-----------------
    
  }
  this.frame_118 = function() {
    this.stop();
  }

  // actions tween:
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(118).call(this.frame_118).wait(1));

  // cta
  this.ctaBtn = new lib.ctaBtn();
  this.ctaBtn.setTransform(419.7,71.7,1,1,0,0,0,56.5,8);
  this.ctaBtn.alpha = 0;

  this.timeline.addTween(cjs.Tween.get(this.ctaBtn).wait(119));
  // stagBtn
  this.stgBtn = new lib.stgBtnNew();
  this.stgBtn.setTransform(364,45,4.55,0.15,0,0,0,80,300.1);
  this.stgBtn.alpha = 0.012;

  this.timeline.addTween(cjs.Tween.get(this.stgBtn).wait(119));
  // Ringe solid
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AL2HMQhOgchAg0QhAA0hOAcQhRAdhVAAQhWAAhRgdQhOgcg/g0Qg/A0hNAcQhRAdhWAAQhWAAhQgdQhNgchBg0QhAA0hOAcQhPAdhXAAQjLAAiOiQQiQiPAAjKQAAjJCQiPQCOiQDLAAQBXAABPAdQBOAdBAA0QBBg0BNgdQBQgdBWAAQBWAABRAdQBNAdA/A0QA/g0BOgdQBRgdBWAAQBVAABRAdQBOAdBAA0QBAg0BOgdQBQgdBWAAQDLAACPCQQCPCPAADJQAADKiPCPQiPCQjLAAQhWAAhQgdgAK2krQAxBAAaBLQAcBOgBBSQABBTgcBOQgaBMgxA/QBlBOCBAAQCdAABuhvQBvhvAAicQAAibhvhvQhuhvidAAQiAAAhmBOgAC4lkQg6AUgxAlQAyBAAaBLQAbBOABBSQgBBTgbBOQgaBMgyA/QAxAmA6ATQA7AVBBAAQCBAABlhOQgyg/gahMQgbhOAAhTQAAhSAbhNQAahMAyhAQgxglg5gUQg9gVg/AAQhAAAg8AVgAmulkQg6AUgxAlQAyBAAaBLQAbBOAABSQAABTgbBOQgaBMgyA/QAxAmA6ATQA8AVA/AAQCBAABmhOQgyg/gahMQgbhOAAhTQAAhSAbhOQAahLAyhAQgxglg6gUQg8gVhAAAQg/AAg8AVgAynkKQhuBvAACbQAACcBuBvQBvBvCdAAQBBAAA7gVQA6gTAxgmQgyg/gahMQgbhOgBhTQABhSAbhOQAbhLAxhAQhmhOiBAAQidAAhvBvgAIhAAQAAB6BHBhQBGhiAAh5QAAh3hGhjQhHBiAAB4gAhFAAQAAB4BFBjQBGhhAAh6QAAh4hGhiQhFBkAAB2gAqtAAQAAB6BGBhQBHhjAAh4QAAh2hHhkQhGBiAAB4g");
  this.shape_1.setTransform(41.6,21.7,0.21,0.21,0,0,0,0.2,-0.3);

  this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(119));

  // copy
  this.copy = new lib.copy();
  this.copy.setTransform(471.3,55.8,1,1,0,0,0,94,55.1);

  this.timeline.addTween(cjs.Tween.get(this.copy).wait(119));

  // copyUnderlay
  this.copyUnderlay = new lib.copyUnderlay();
  this.copyUnderlay.setTransform(949.7,49.7,1,1,0,0,0,219.6,0);

  this.timeline.addTween(cjs.Tween.get(this.copyUnderlay).wait(44).to({x:531.7},41,cjs.Ease.get(1)).wait(34));

  // hero
  this.heroes = new lib.heroes();
  this.heroes.setTransform(495.9,90,0.35,0.35,0,0,0,182.1,0);

  this.timeline.addTween(cjs.Tween.get(this.heroes).to({regX:182.6,regY:0.1,scaleX:0.35,scaleY:0.35,x:88.7,y:220},118).wait(1));

  // whiteBack
  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#000000").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
  this.shape_2.setTransform(364,45);

  this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(119));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181.5,-114.7,1714.7,416.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;