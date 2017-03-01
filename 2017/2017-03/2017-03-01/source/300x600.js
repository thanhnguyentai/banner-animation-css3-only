function get(e) {
    return document.querySelector(e)
}
function initializeVariables() {
    TweenMax.set(cta, {
        x: -5
    }),
    TweenMax.set([copy_1, copy_2], {
        x: -30
    });
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
    (-1 !== e.search("MSIE") || -1 !== e.search("Trident")) && (scale_1 = .7,
    scale_2 = .5,
    scale_3 = .7,
    scale_4 = .7,
    scale_5 = .5,
    scale_6 = .8,
    scale_7 = .6),
    TweenMax.set(techLines, {
        attr: {
            x: -10,
            y: -10
        }
    }),
    TweenMax.set(bar, {
        autoAlpha: 0,
        height: 0,
        y: 0
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
    TweenMax.set(logos, {
        scale: 0,
        x: 150,
        y: 125,
        autoAlpha: 1
    }),
    TweenMax.set([white_foreground, final_logo, cta, replay], {
        autoAlpha: 0
    }),
    TweenMax.set("#lightBurst", {
        attr: {
            specularExponent: 128,
            specularConstant: 1.4
        }
    }),
    TweenMax.set([$copy_1_chars, $copy_2_chars, $copy_3_chars, $copy_4_chars], {
        autoAlpha: 0
    }),
    TweenMax.set("#light_burst", {
        scale: 0,
        rotation: 44,
        x: 0,
        y: 0,
        transformOrigin: "50% 50%",
        autoAlpha: .95
    }),
    TweenMax.set([logo_0.blur, logo_1.blur, logo_2.blur, logo_3.blur, logo_4.blur, logo_5.blur, logo_6.blur], {
        attr: {
            stdDeviation: 0
        }
    });
    for (var a = 0; a < logos.length; a++)
        logos[a].tl.clear();
    TweenMax.set([tlBackground, tlDistort], {
        timeScale: 1
    })
}
function playLogoFlyby(e, a, t, o, l, r) {
    e.tl.to(e, a, {
        scale: o,
        x: e.dx,
        y: e.dy,
        ease: Linear.easeNone
    }),
    e.tl.timeScale(t),
    e.tl.play(),
    TweenMax.to(e.tl, l * r * 3, {
        timeScale: 1,
        ease: Power3.easeOut,
        delay: l
    }),
    TweenMax.to(e.blur, 2, {
        attr: {
            stdDeviation: 6
        },
        ease: Linear.easeNone,
        delay: l + r
    }),
    TweenMax.to(e, 1, {
        autoAlpha: 0,
        ease: Power3.easeInOut,
        delay: l + r + .75
    })
}
function playBurst() {
    var e = new TimelineMax({
        paused: !0
    }).add("start").to("#light_burst", 20, {
        scale: 6,
        rotation: 0,
        y: -20,
        x: -5,
        ease: Linear.easeNone
    }, "start").to("#burstPoint", 20, {
        attr: {
            x: 0,
            z: 600
        },
        ease: Linear.easeNone
    }, "start").to("#lightBurst", 10, {
        attr: {
            specularExponent: 94
        },
        ease: Expo.easeIn
    }, "start");
    e.timeScale(.34),
    e.play(),
    TweenMax.to(e, .05, {
        timeScale: 100,
        ease: Expo.easeOut,
        delay: 1
    }),
    TweenMax.to("#lightBurst", .8, {
        attr: {
            specularConstant: 0
        },
        ease: Power4.easeInOut,
        delay: .85
    }),
    TweenMax.to("#light_burst", .8, {
        autoAlpha: 0,
        ease: Power4.easeInOut,
        delay: .85
    }),
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
function setupTimelineReplayButton() {
    tlReplayButton.to(replay, .75, {
        rotation: -360,
        repeat: -1,
        ease: Linear.easeNone
    })
}
function setupTimelineMain() {
    tlMain.add("start").call(playBurst, [], this, "start+=0.0").add("frame_1", "+=1.05").call(playLogoFlyby, [logo_0, 13, 20, scale_1, .13, 3], this, "frame_1+=0.04").call(playLogoFlyby, [logo_1, 21, 53, scale_2, .1, 3.3], this, "frame_1+=0.00").call(playLogoFlyby, [logo_2, 16, 30, scale_3, .14, 2.7], this, "frame_1+=0.08").call(playLogoFlyby, [logo_3, 20, 44, scale_4, .1, 2.7], this, "frame_1+=0.12").call(playLogoFlyby, [logo_4, 18, 50, scale_5, .07, 2.5], this, "frame_1+=0.16").call(playLogoFlyby, [logo_5, 10, 30, scale_6, .08, 2.3], this, "frame_1+=0.20").call(playLogoFlyby, [logo_6, 28, 35, scale_7, .19, 2.1], this, "frame_1+=0.1").add("frame_2", "+=4.25").to(bar, .1, {
        autoAlpha: 1
    }, "frame_2").to(bar, .1, {
        height: 18,
        ease: Linear.easeNone
    }, "frame_2").to(copy_1, .2, {
        x: 0,
        ease: Power2.easeOut
    }, "frame_2+=0.2").staggerTo($copy_1_chars, .02, {
        autoAlpha: 1
    }, .035, "frame_2+=0.2").add("frame_3", "+=1.25").staggerTo($copy_1_chars, .025, {
        autoAlpha: 0,
        ease: Power1.easeOut
    }, -.015, "frame_3+=0.0").to(copy_1, .075, {
        x: -20,
        ease: Power2.easeOut
    }, "frame_3+=0.175").to(bar, .5, {
        y: -20,
        ease: Expo.easeInOut
    }, "frame_3+=0.2").to(bar, .5, {
        height: 70,
        ease: Power3.easeInOut
    }, "frame_3+=0.2").to(copy_2, .2, {
        x: 0,
        ease: Power2.easeOut
    }, "frame_3+=0.8").staggerTo($copy_2_chars, .02, {
        autoAlpha: 1
    }, .02, "frame_3+=0.8").staggerTo($copy_3_chars, .02, {
        autoAlpha: 1
    }, .0175, "frame_3+=1.2").staggerTo($copy_4_chars, .02, {
        autoAlpha: 1
    }, .0175, "frame_3+=1.5").add("frame_4", "+=2.0").staggerTo($copy_4_chars, .025, {
        autoAlpha: 0,
        ease: Power1.easeOut
    }, -.01, "frame_4+=0.0").staggerTo($copy_3_chars, .025, {
        autoAlpha: 0,
        ease: Power1.easeOut
    }, -.01, "frame_4+=0.15").staggerTo($copy_2_chars, .025, {
        autoAlpha: 0,
        ease: Power1.easeOut
    }, -.01, "frame_4+=0.3").to(copy_2, .075, {
        x: -20,
        ease: Power2.easeIn
    }, "frame_4+=0.4").to(bar, .1, {
        height: 0,
        ease: Power1.easeIn
    }, "frame_4+=0.5").set("#pointLight", {
        attr: {
            x: 330
        }
    }, "frame_4+=0.4").to("#pointLight", 1, {
        attr: {
            x: -500,
            y: -500,
            z: 2e4
        },
        ease: Expo.easeIn
    }, "frame_4+=0.4").to(white_foreground, .2, {
        autoAlpha: 1,
        ease: Expo.easeIn
    }, "frame_4+=0.9").to("#pointLight", 1.5, {
        attr: {
            z: 0
        },
        ease: Linear.easeNone
    }, "frame_4+=0.95").to(white_foreground, .5, {
        autoAlpha: 0,
        ease: Sine.easeInOut
    }, "frame_4+=1.05").to(cta, .75, {
        x: 0,
        ease: Power3.easeOut
    }, "frame_4+=1.25").to([final_logo, cta], .01, {
        autoAlpha: 1
    }, "frame_4+=1.25").call(function() {
        TweenMax.to([tlBackground, tlDistort], 2, {
            timeScale: 0,
            ease: Power3.easeOut
        })
    }, [], this, "frame_4+=1.5").to(replay, 1, {
        autoAlpha: 1,
        ease: Power3.easeInOut,
        onComplete: addListeners,
        onCompleteParams: [!0]
    }, "frame_4+=1.75")
}
function addHandlers() {
    var e = (new Date - startTime) / 1e3 % 60;
    console.log("seconds", e)
}
function addListeners(e) {
    e ? (ad.addEventListener("mouseenter", mouseEnterCta),
    ad.addEventListener("mouseleave", mouseLeaveCta),
    replay.addEventListener("mouseenter", mouseEnterReplay),
    replay.addEventListener("mouseleave", mouseLeaveReplay),
    replay.addEventListener("click", mouseClickReplay)) : (ad.removeEventListener("mouseenter", mouseEnterCta),
    ad.removeEventListener("mouseleave", mouseLeaveCta),
    replay.removeEventListener("mouseenter", mouseEnterReplay),
    replay.removeEventListener("mouseleave", mouseLeaveReplay),
    replay.removeEventListener("click", mouseClickReplay))
}
function mouseEnterCta() {
    TweenMax.to(cta, .3, {
        scale: 1.1,
        ease: Back.easeOut.config(2)
    })
}
function mouseLeaveCta() {
    TweenMax.to(cta, .5, {
        scale: 1,
        ease: Bounce.easeOut
    })
}
function mouseEnterReplay() {
    tlReplayButton.play()
}
function mouseLeaveReplay() {
    tlReplayButton.stop()
}
function mouseClickReplay() {
    addListeners(!1),
    tlReplayButton.stop(),
    TweenMax.to(replay, .25, {
        autoAlpha: 0,
        ease: Power1.easeIn,
        onComplete: function() {
            tlMain.clear(),
            tlDistort.clear(),
            tlBackground.clear(),
            initializeVariables(),
            setupTimelineMain(),
            setupTimelineDistort(),
            setupTimelineBackground(),
            tlMain.play("start")
        }
    })
}
var startTime, bar = get(".bar"), cta = get(".cta"), replay = get("#replay"), logo_0 = get("#logo_0"), logo_1 = get("#logo_1"), logo_2 = get("#logo_2"), logo_3 = get("#logo_3"), logo_4 = get("#logo_4"), logo_5 = get("#logo_5"), logo_6 = get("#logo_6"), copy_1 = get(".copy_1"), copy_2 = get(".copy_2"), copy_3 = get(".copy_3"), copy_4 = get(".copy_4"), techLines = get("#techLines"), final_logo = get(".final_logo"), ad = document.getElementById("ad"), white_foreground = get(".white_foreground"), $copy_1_chars = $(".copy_1 span"), $copy_2_chars = $(".copy_2 span"), $copy_3_chars = $(".copy_3 span"), $copy_4_chars = $(".copy_4 span"), tlDistort = new TimelineMax({
    paused: !0
}), tlBackground = new TimelineMax({
    paused: !0
}), tlReplayButton = new TimelineMax({
    paused: !0
}), tlMain = new TimelineMax({
    paused: !0,
    onComplete: addHandlers
});
logo_0.dx = 150,
logo_0.dy = 80,
logo_0.tl = new TimelineMax({
    paused: !0
}),
logo_0.blur = get("#blurLogo1"),
logo_1.dx = 180,
logo_1.dy = 140,
logo_1.tl = new TimelineMax({
    paused: !0
}),
logo_1.blur = get("#blurLogo2"),
logo_2.dx = 130,
logo_2.dy = 0,
logo_2.tl = new TimelineMax({
    paused: !0
}),
logo_2.blur = get("#blurLogo3"),
logo_3.dx = -30,
logo_3.dy = 190,
logo_3.tl = new TimelineMax({
    paused: !0
}),
logo_3.blur = get("#blurLogo4"),
logo_4.dx = 20,
logo_4.dy = 80,
logo_4.tl = new TimelineMax({
    paused: !0
}),
logo_4.blur = get("#blurLogo5"),
logo_5.dx = -20,
logo_5.dy = 0,
logo_5.tl = new TimelineMax({
    paused: !0
}),
logo_5.blur = get("#blurLogo6"),
logo_6.dx = 20,
logo_6.dy = 140,
logo_6.tl = new TimelineMax({
    paused: !0
}),
logo_6.blur = get("#blurLogo7");
var scale_1 = .8
  , scale_2 = .6
  , scale_3 = .8
  , scale_4 = .8
  , scale_5 = .6
  , scale_6 = .9
  , scale_7 = .7
  , logos = [logo_0, logo_1, logo_2, logo_3, logo_4, logo_5, logo_6];
initializeVariables(),
setupTimelineMain(),
setupTimelineDistort(),
setupTimelineBackground(),
setupTimelineReplayButton(),
window.onload = function() {
    startTime = new Date,
    tlMain.play("start"),
    TweenMax.set("#ad_container", {
        autoAlpha: 1
    })
}
;
