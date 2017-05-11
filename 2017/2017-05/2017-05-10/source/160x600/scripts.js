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

    tl.to('#star1', 2, {left:493});
    tl.to('#bar1', 0.35, {width:143}, '-=1.75');
    tl.to('#star2', 2, {left:493}, '-=1.5');
    tl.to('#bar2', 0.35, {width:143}, '-=1.75');
    tl.to('#star3', 2, {left:493}, '-=1.5');
    tl.to('#bar3', 0.35, {width:143}, '-=1.75');

    // Fading Out Animation assets

    tl.to('#star1', 1, {opacity:0}, '+=');
    tl.to('#bar1', 1, {opacity:0}, '-=1');
    tl.to('#star2', 1, {opacity:0}, '-=1');
    tl.to('#bar2', 1, {opacity:0}, '-=1');
    tl.to('#star3', 1, {opacity:0}, '-=1');
    tl.to('#bar3', 1, {opacity:0}, '-=1');
    tl.to('#animation', 1, {opacity:0}, '-=1');

    // Moving animation assets off canvas for z-index reasons

    tl.to('#star1', 0.1, {left:-160});
    tl.to('#bar1', 0.1, {left:-160}, '-=0.1');
    tl.to('#star2', 0.1, {left:-160}, '-=0.1');
    tl.to('#bar2', 0.1, {left:-160}, '-=0.1');
    tl.to('#star3', 0.1, {left:-160}, '-=0.1');
    tl.to('#bar3', 0.1, {left:-160}, '-=0.1');
    tl.to('#animation', 0.1, {left:-160}, '-=0.1');

    // Show production
    tl.to('#product1', 0.75, {opacity:1});
    tl.to('#arrow1', 0.75, {opacity:1}, '-=0.25');
    tl.to('#arrow2', 0.75, {opacity:1}, '-=0.75');

    // Show next production
    tl.to('#product1', 0.75, {opacity:0}, '+=1');
    tl.to('#product2', 0.75, {opacity:1}, '-=0.5');

}



