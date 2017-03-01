function get(e) {
    return document.querySelector(e)
}
function initializeVariables() {
    
    var e = navigator.userAgent;
    -1 !== e.search("Chrome") || -1 !== e.search("Firefox") || -1 !== e.search("MSIE") || -1 !== e.search("Trident") ? TweenMax.set("#burstPoint", {
        attr: {
            x: 150,
            y: 125,
            z: 0
        }
    }) : TweenMax.set("#burstPoint", {
        attr: {
            x: 360,
            y: 300,
            z: 0
        }
    }),
   
    TweenMax.set(techLines, {
        attr: {
            x: -10,
            y: -10
        }
    }),
   
    TweenMax.set("#techDistortion", {
        attr: {
            scale: -100
        }
    }),
    TweenMax.set("#pointLight", {
        attr: {
            x: 3330,
            y: 250,
            z: 100
        }
    }),
   
    TweenMax.set("#lightBurst", {
        attr: {
            specularExponent: 128,
            specularConstant: 1.4
        }
    }),
   
    TweenMax.set("#light_burst", {
        scale: 0,
        rotation: 44,
        x: 0,
        y: 0,
        transformOrigin: "50% 50%",
        autoAlpha: .95
    }),
    
    TweenMax.set([tlBackground, tlDistort], {
        timeScale: 1
    })
}
function playBurst() {
    TweenMax.delayedCall(0, function() {
        tlBackground.play("start"),
        tlDistort.play("start")
    })
}
function setupTimelineBackground() {
    tlBackground.add("start").set(techLines, {
        attr: {
            x: -10,
            y: -10
        }
    }).to(techLines, 7.5, {
        attr: {
            x: -290
        },
        ease: Sine.easeOut,
        repeat: -1,
        yoyo: !0
    })
}
function setupTimelineDistort() {
    tlDistort.add("start").set("#techDistortion", {
        attr: {
            scale: -100
        }
    }).to("#techDistortion", 5, {
        attr: {
            scale: 100
        },
        ease: Sine.easeInOut,
        repeat: -1,
        yoyo: !0
    })
}

function setupTimelineMain() {
    tlMain.add("start").call(playBurst, [], this, "start+=0.0").call(function() {
        TweenMax.to([tlBackground, tlDistort], 2, {
            timeScale: 0,
            ease: Power3.easeOut
        })
    }, [], this, "start+=10");
}
function addHandlers() {
    var e = (new Date - startTime) / 1e3 % 60;
    console.log("seconds", e)
}

var startTime, tlDistort = new TimelineMax({
    paused: !0
}), tlBackground = new TimelineMax({
    paused: !0
}), tlMain = new TimelineMax({
    paused: !0,
    onComplete: addHandlers
});

initializeVariables(),
setupTimelineMain(),
setupTimelineDistort(),
setupTimelineBackground(),
window.onload = function() {
    startTime = new Date,
    tlMain.play("start")
};
