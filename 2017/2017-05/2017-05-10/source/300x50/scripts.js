var container;
var bgExit;


window.onload = function() {
  if (Enabler.isInitialized()) {
    enablerInitHandler();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
  }
}


init = function(){  
    // assign All the elements to the element on the page
    container = document.getElementById('container');
    bgExit = document.getElementById('exit_btn');

    addListeners();
    
    // show Ad
    container.style.display = "block";
    introAnim();
}


function enablerInitHandler() {
  init();
}


// add Event Listeners
addListeners = function() {
    bgExit.addEventListener('click', bgExitHandler, false);
}
bgExitHandler = function(e) {
    Enabler.exit('HTML5_Background_Clickthrough');
}


// INTRO ANIMATION
introAnim = function() {

  var tl = new TimelineLite();

    // initial animation

    tl.to('#star1', 1.5, {right:-30});
    tl.to('#bar1', 0.75, {width:168}, '-=1.425');
    
    tl.to('#star2', 1.5, {right:-30}, '-=0.75');
    tl.to('#bar2', 0.75, {width:168}, '-=1.425');

    tl.to('#star3', 1.5, {right:-30}, '-=0.75');
    tl.to('#bar3', 0.75, {width:168}, '-=1.425');

    tl.to('#bar1', 0, {backgroundPosition: 'top right', right: 132, left: 'auto'});
    tl.to('#bar2', 0, {backgroundPosition: 'top right', right: 132, left: 'auto'});
    tl.to('#bar3', 0, {backgroundPosition: 'top right', right: 132, left: 'auto'});

    
    tl.to('#bar1', 0.5, {width:82});
    tl.to('#bar2', 0.5, {width:82}, '-=0.4');
    tl.to('#bar3', 0.5, {width:82}, '-=0.3');
    
    tl.to('.whitestar', 1, {opacity:1});

    tl.to('#animation', 0.75, {opacity:0}, '+=1');

    // Show production
    tl.to('#stars', 1, {opacity:1});
    tl.to('#product1', 1, {opacity:1},'-=0.5');
    // Show next production
    tl.to('#product1', 0.75, {opacity:0},'+=1');
    tl.to('#product2', 0.75, {opacity:1}, '-=0.5');
    
}


