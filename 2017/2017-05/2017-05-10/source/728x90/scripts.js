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

    tl.to('#star1', 2, {left:728});
    tl.to('#bar1', 0.883, {width:395}, '-=1.883');

    tl.to('#star2', 2, {left:728}, '-=1.5');
    tl.to('#bar2', 1.15, {width:395}, '-=1.94');

    tl.to('#star3', 2, {left:728}, '-=1.5');
    tl.to('#bar3', 1, {width:395}, '-=1.94');

    tl.to('#bar1_m, #bar2_m', 0.1, {opacity: 1}, '-=1.5');
    tl.to('#bar3_m', 0.1, {opacity: 1}, '-=0.5');


    tl.to('#bar1', 1.15, {left:728}, '-=1.25');
    tl.to('#bar2', 1.15, {left: 728}, '-=0.8');
    tl.to('#bar3', 1.15, {left: 728}, '-=0.6');

    // Fading Out Animation assets

    tl.to('#star1', 1, {opacity:0}, '+=1.25');
    tl.to('#bar1', 1, {opacity:0}, '-=1');
    tl.to('#bar1_m', 1, {opacity:0}, '-=1');
    tl.to('#star2', 1, {opacity:0}, '-=1');
    tl.to('#bar2', 1, {opacity:0}, '-=1');
    tl.to('#bar2_m', 1, {opacity:0}, '-=1');
    tl.to('#star3', 1, {opacity:0}, '-=1');
    tl.to('#bar3', 1, {opacity:0}, '-=1');
    tl.to('#bar3_m', 1, {opacity:0}, '-=1');
    tl.to('#animation', 1, {opacity:0}, '-=1');
    tl.to('.right_bg', 1, {opacity:0}, '-=1');
    tl.to('.anim_bg', 1, {opacity:0}, '-=1');
    tl.to('.whitestar', 1, {opacity:0}, '-=1');


    // Moving animation assets off canvas for z-index reasons

    tl.to('#star1', 0.1, {top:90},'+=2');
    tl.to('#bar1', 0.1, {top:90}, '-=0.1');
    tl.to('#star2', 0.1, {top:90}, '-=0.1');
    tl.to('#bar2', 0.1, {top:90}, '-=0.1');
    tl.to('#star3', 0.1, {top:90}, '-=0.1');
    tl.to('#bar3', 0.1, {top:90}, '-=0.1');
    tl.to('#animation', 0.1, {top:90}, '-=0.1');
    tl.to('#animation', 1, {top:90}, '-=0.1');
    tl.to('.right_bg', 1, {top:90}, '-=0.1');
    tl.to('.anim_bg', 1, {top:90}, '-=0.1');
    tl.to('.whitestar', 1, {top:90}, '-=0.1');

    // Show production
    tl.to('#product1', 1, {opacity:1}, '-=5');
    tl.to('#arrow1', 0.75, {opacity:1}, '-=4.5');
    tl.to('#arrow2', 0.75, {opacity:1}, '-=4.5');

    // Show next production
    tl.to('#product1', 0.75, {opacity:0}, '-=2.5');
    tl.to('#product2', 0.75, {opacity:1}, '-=2');

}


