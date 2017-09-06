//	HYPE.documents["Brand_300x250_EN"]

(function() {
    (function k() {
        function l(a, b, d) {
            var c = !1;
            null == window[a] && (null == window[b] ? (window[b] = [],
            window[b].push(k),
            a = document.getElementsByTagName("head")[0],
            b = document.createElement("script"),
            c = h,
            false == !0 && (c = ""),
            b.type = "text/javascript",
            b.src = c + "/" + d,
            a.appendChild(b)) : window[b].push(k),
            c = !0);
            return c
        }
        var h = "Brand_300x250_EN.hyperesources"
          , c = "Brand_300x250_EN"
          , e = "brand300x250en_hype_container";
        if (false == !1)
            try {
                for (var f = document.getElementsByTagName("script"), a = 0; a < f.length; a++) {
                    var b = f[a].src
                      , d = null != b ? b.indexOf("/brand300x250en_hype_generated_script.js") : -1;
                    if (-1 != d) {
                        h = b.substr(0, d);
                        break
                    }
                }
            } catch (n) {}
        if (false == !1 && (a = navigator.userAgent.match(/MSIE (\d+\.\d+)/),
        a = parseFloat(a && a[1]) || null,
        a = l("HYPE_584", "HYPE_dtl_584", !0 == (null != a && 10 > a || false == !0) ? "HYPE-584.full.min.js" : "HYPE-584.thin.min.js"),
        false == !0 && (a = a || l("HYPE_w_584", "HYPE_wdtl_584", "HYPE-584.waypoints.min.js")),
        a))
            return;
        f = window.HYPE.documents;
        if (null != f[c]) {
            b = 1;
            a = c;
            do
                c = "" + a + "-" + b++;
            while (null != f[c]);d = document.getElementsByTagName("div");
            b = !1;
            for (a = 0; a < d.length; a++)
                if (d[a].id == e && null == d[a].getAttribute("HYP_dn")) {
                    var b = 1
                      , g = e;
                    do
                        e = "" + g + "-" + b++;
                    while (null != document.getElementById(e));d[a].id = e;
                    b = !0;
                    break
                }
            if (!1 == b)
                return
        }
        b = [];
        b = [{
            name: "HTML5Exit",
            source: "function(hypeDocument, element, event) {\twindow.open(window.clickTag);\t\n}",
            identifier: "40"
        }, {
            name: "EnablerListener",
            source: "function(hypeDocument, element, event) {\t\n\n\n// The Function below tests to see if the DFP enabler has been loaded.\n// The DFP Enabler is embedded in the <head> of this document. \n// You can edit the contents of the <head>\u2026</head> of your exported .html file by clicking on 'Edit HTML Head' in the Document Inspector.  \n// If it has loaded, then the main timeline is 'continued'\n// This should happen fairly quickly.  \n\n\n// If true, start function. If false, listen for INIT.\nwindow.onload = function() {\n  if (Enabler.isInitialized()) {\n      enablerInitHandler();\n  } else {\n      Enabler.addEventListener(studio.events.StudioEvent.INIT,\nenablerInitHandler);\n  }\n}\n\nfunction enablerInitHandler() {\n    // Start ad, initialize animation,\n    // load in your image assets, call Enabler methods,\n    // and/or include other Studio modules.\n    // Also, you can start the Polite Load\n    \n    \n    // On the main timeline, the Timeline has a 'pause' action, so this resumes it\n    hypeDocument.continueTimelineNamed('Main Timeline', hypeDocument.kDirectionForward);\n    \n}\n     \n\n\n// The code below determines if the surrounding page has loaded. Drag the code from 31 down to \n// Line 52 to enable 'polite load' \n\n\n// If true, start function. If false, listen for PAGE_LOADED.\n// Insert this code inside your enablerInitHandler function\n\n  if (Enabler.isPageLoaded()) {\n    pageLoadedHandler();\n  } else {\n    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED,\n    pageLoadedHandler);\n  }\n\n//The following code out of the enablerInitHandler function:\n\nfunction pageLoadedHandler() {\n    // Load in additional assets or add animation/video\n} \n\n\n\n// The Code below starts your animation only if it is visible. Again, run a 'continue timeline' action in line 74 \n// To use this option.\n\n//If true, start function. If false, listen for VISIBLE.\n//So your pageLoadedHandler function will look like the following:\n\nfunction pageLoadedHandler() {\n  if (Enabler.isVisible()) {\n    adVisibilityHandler();\n  } else {\n    Enabler.addEventListener(studio.events.StudioEvent.VISIBLE,\n    adVisibilityHandler);\n  }\n}\n\nfunction adVisibilityHandler() {\n    // Load in additional assets or start the animation/video\n}\n\n\n\n     \n\t\n\n\t\n}",
            identifier: "41"
        }, {
            name: "CTAhover",
            source: "function(hypeDocument, element, event) {\tdocument.getElementById(\"CTA-outline\").style.borderColor = \"#fff\";\ndocument.getElementById(\"CTA-text\").style.color = \"#fff\";\t\n}",
            identifier: "135"
        }, {
            name: "CTAhoverOUT",
            source: "function(hypeDocument, element, event) {\tdocument.getElementById(\"CTA-outline\").style.borderColor = \"#38383A\";\ndocument.getElementById(\"CTA-text\").style.color = \"#38383A\";\n}",
            identifier: "136"
        }];
        d = {};
        g = {};
        for (a = 0; a < b.length; a++)
            try {
                g[b[a].identifier] = b[a].name,
                d[b[a].name] = eval("(function(){return " + b[a].source + "})();")
            } catch (m) {
                window.console && window.console.log(m),
                d[b[a].name] = function() {}
            }
        a = new HYPE_584(c,e,{
        	"1": {
                p: 2,
                n: "300x250_cta.png",
                g: "102",
                t: "image/png"
            },
            "0": {
                p: 1,
                n: "300x250_logo.png",
                g: "101",
                t: "image/png"
            },
            "-1": {
                n: "PIE.htc"
            },
            "-2": {
                n: "blank.gif"
            }
        },h,[""],d,[{
            n: "Stage",
            o: "1",
            X: [0]
        }],[{
            o: "3",
            p: "600px",
            cA: false,
            Y: 300,
            Z: 250,
            L: [],
            c: "#FFFFFF",
            bY: 1,
            d: 300,
            U: {
                "148": {
                    V: {
                        "Main Timeline": "176"
                    },
                    W: "176",
                    n: "Cursor"
                },
                "151": {
                    V: {
                        "Main Timeline": "177"
                    },
                    W: "177",
                    n: "Cursor"
                },
                "162": {
                    V: {
                        "Main Timeline": "178"
                    },
                    W: "178",
                    n: "Cursor"
                }
            },
            T: {
                "176": {
                    c: "148",
                    z: 0.15,
                    i: "176",
                    n: "Main Timeline",
                    a: [{
                        f: "a",
                        y: 0.06,
                        z: 0.03,
                        i: "e",
                        e: 0,
                        s: 1,
                        o: "149"
                    }, {
                        y: 0.09,
                        i: "e",
                        s: 0,
                        z: 0,
                        o: "149",
                        f: "a"
                    }, {
                        f: "c",
                        p: 2,
                        y: 0.15,
                        z: 0,
                        i: "ActionHandler",
                        s: {
                            a: [{
                                i: 0,
                                b: "176",
                                p: 9,
                                symbolOid: "69"
                            }]
                        },
                        o: "176"
                    }],
                    f: 30,
                    b: []
                },
                "177": {
                    c: "151",
                    z: 0.15,
                    i: "177",
                    n: "Main Timeline",
                    a: [{
                        f: "a",
                        y: 0.06,
                        z: 0.03,
                        i: "e",
                        e: 0,
                        s: 1,
                        o: "152"
                    }, {
                        y: 0.09,
                        i: "e",
                        s: 0,
                        z: 0,
                        o: "152",
                        f: "a"
                    }, {
                        f: "c",
                        p: 2,
                        y: 0.15,
                        z: 0,
                        i: "ActionHandler",
                        s: {
                            a: [{
                                i: 0,
                                b: "177",
                                p: 9,
                                symbolOid: "69"
                            }]
                        },
                        o: "177"
                    }],
                    f: 30,
                    b: []
                },
                kTimelineDefaultIdentifier: {
                    i: "kTimelineDefaultIdentifier",
                    n: "Main Timeline",
                    z: 7.15,
                    b: [{
                        D: 0.15,
                        H: true,
                        E: true,
                        z: false,
                        F: 0,
                        G: 0,
                        C: 0,
                        b: "176"
                    }, {
                        D: 0.15,
                        H: true,
                        E: true,
                        z: false,
                        F: 0,
                        G: 0,
                        C: 2,
                        b: "177"
                    }, {
                        D: 0.15,
                        H: true,
                        E: true,
                        z: false,
                        F: 0,
                        G: 0,
                        C: 4,
                        b: "178"
                    }],
                    a: [{
                        f: "c",
                        y: 0,
                        z: 0.23,
                        i: "e",
                        e: 1,
                        s: 1,
                        o: "148"
                    }, {
                        f: "c",
                        y: 0,
                        z: 7.15,
                        i: "a",
                        e: 66,
                        s: 218,
                        o: "157"
                    }, {
                        f: "c",
                        y: 0,
                        z: 7.15,
                        i: "b",
                        e: 191,
                        s: 94,
                        o: "157"
                    }, {
                        f: "c",
                        y: 0,
                        z: 7.15,
                        i: "a",
                        e: 279,
                        s: 111,
                        o: "161"
                    }, {
                        f: "c",
                        y: 0,
                        z: 7.15,
                        i: "b",
                        e: -93,
                        s: 0,
                        o: "161"
                    }, {
                        f: "a",
                        y: 0,
                        z: 2.15,
                        i: "e",
                        e: 1,
                        s: 0,
                        o: "151"
                    }, {
                        f: "c",
                        y: 0,
                        z: 7.15,
                        i: "a",
                        e: 66,
                        s: 218,
                        o: "159"
                    }, {
                        f: "c",
                        y: 0,
                        z: 7.15,
                        i: "b",
                        e: 191,
                        s: 94,
                        o: "159"
                    }, {
                        f: "a",
                        y: 0,
                        z: 4.15,
                        i: "e",
                        e: 1,
                        s: 0,
                        o: "162"
                    }, {
                        f: "c",
                        y: 0,
                        z: 7.15,
                        i: "a",
                        e: -54,
                        s: 0,
                        o: "160"
                    }, {
                        f: "c",
                        y: 0,
                        z: 7.15,
                        i: "b",
                        e: 44,
                        s: 144,
                        o: "160"
                    }, {
                        f: "c",
                        y: 0,
                        z: 7.15,
                        i: "a",
                        e: 213,
                        s: -107,
                        o: "158"
                    }, {
                        f: "c",
                        y: 0,
                        z: 7.15,
                        i: "b",
                        e: -284,
                        s: -94,
                        o: "158"
                    }, {
                        f: "a",
                        y: 0.23,
                        z: 1,
                        i: "e",
                        e: 0,
                        s: 1,
                        o: "148"
                    }, {
                        f: "112",
                        y: 0.26,
                        z: 0.11,
                        i: "c",
                        e: 188,
                        s: 0,
                        o: "172"
                    }, {
                        f: "112",
                        y: 0.26,
                        z: 0.11,
                        i: "a",
                        e: 198,
                        s: 11,
                        o: "148"
                    }, {
                        y: 1.07,
                        i: "c",
                        s: 268,
                        z: 0,
                        o: "172",
                        f: "c"
                    }, {
                        y: 1.07,
                        i: "a",
                        s: 278,
                        z: 0,
                        o: "148",
                        f: "c"
                    }, {
                        y: 1.23,
                        i: "e",
                        s: 0,
                        z: 0,
                        o: "148",
                        f: "a"
                    }, {
                        f: "a",
                        y: 2.15,
                        z: 0,
                        i: "e",
                        e: 1,
                        s: 1,
                        o: "151"
                    }, {
                        f: "a",
                        y: 2.15,
                        z: 1.18,
                        i: "e",
                        e: 0,
                        s: 1,
                        o: "151"
                    }, {
                        f: "112",
                        y: 3.06,
                        z: 0.09,
                        i: "c",
                        e: 276,
                        s: 0,
                        o: "153"
                    }, {
                        f: "112",
                        y: 3.06,
                        z: 0.09,
                        i: "a",
                        e: 277,
                        s: 11,
                        o: "151"
                    }, {
                        y: 3.15,
                        i: "c",
                        s: 246,
                        z: 0,
                        o: "153",
                        f: "c"
                    }, {
                        y: 3.15,
                        i: "a",
                        s: 257,
                        z: 0,
                        o: "151",
                        f: "c"
                    }, {
                        y: 4.03,
                        i: "e",
                        s: 0,
                        z: 0,
                        o: "151",
                        f: "a"
                    }, {
                        f: "a",
                        y: 4.15,
                        z: 0,
                        i: "e",
                        e: 1,
                        s: 1,
                        o: "162"
                    }, {
                        f: "a",
                        y: 4.15,
                        z: 1.04,
                        i: "e",
                        e: 0,
                        s: 1,
                        o: "162"
                    }, {
                        f: "112",
                        y: 5,
                        z: 0.08,
                        i: "c",
                        e: 248,
                        s: 0,
                        o: "164"
                    }, {
                        f: "112",
                        y: 5,
                        z: 0.08,
                        i: "a",
                        e: 258,
                        s: 11,
                        o: "162"
                    }, {
                        y: 5.08,
                        i: "c",
                        s: 163,
                        z: 0,
                        o: "164",
                        f: "c"
                    }, {
                        y: 5.08,
                        i: "a",
                        s: 174,
                        z: 0,
                        o: "162",
                        f: "c"
                    }, {
                        y: 5.19,
                        i: "e",
                        s: 0,
                        z: 0,
                        o: "162",
                        f: "a"
                    }, {
                        f: "c",
                        y: 6,
                        z: 0.06,
                        i: "e",
                        e: 1,
                        s: 0,
                        o: "167"
                    }, {
                        f: "c",
                        y: 6,
                        z: 0.06,
                        i: "e",
                        e: 1,
                        s: 0,
                        o: "168"
                    }, {
                        y: 6.06,
                        i: "e",
                        s: 1,
                        z: 0,
                        o: "167",
                        f: "c"
                    }, {
                        y: 6.06,
                        i: "e",
                        s: 1,
                        z: 0,
                        o: "168",
                        f: "c"
                    }, {
                        f: "c",
                        y: 7,
                        z: 0.06,
                        i: "e",
                        e: 1,
                        s: 0,
                        o: "169"
                    }, {
                        y: 7.06,
                        i: "e",
                        s: 1,
                        z: 0,
                        o: "169",
                        f: "c"
                    }, {
                        y: 7.15,
                        i: "b",
                        s: -93,
                        z: 0,
                        o: "161",
                        f: "c"
                    }, {
                        y: 7.15,
                        i: "b",
                        s: 191,
                        z: 0,
                        o: "157",
                        f: "c"
                    }, {
                        y: 7.15,
                        i: "b",
                        s: 191,
                        z: 0,
                        o: "159",
                        f: "c"
                    }, {
                        y: 7.15,
                        i: "b",
                        s: 44,
                        z: 0,
                        o: "160",
                        f: "c"
                    }, {
                        y: 7.15,
                        i: "b",
                        s: -284,
                        z: 0,
                        o: "158",
                        f: "c"
                    }, {
                        y: 7.15,
                        i: "a",
                        s: 279,
                        z: 0,
                        o: "161",
                        f: "c"
                    }, {
                        y: 7.15,
                        i: "a",
                        s: 66,
                        z: 0,
                        o: "157",
                        f: "c"
                    }, {
                        y: 7.15,
                        i: "a",
                        s: 66,
                        z: 0,
                        o: "159",
                        f: "c"
                    }, {
                        y: 7.15,
                        i: "a",
                        s: -54,
                        z: 0,
                        o: "160",
                        f: "c"
                    }, {
                        y: 7.15,
                        i: "a",
                        s: 213,
                        z: 0,
                        o: "158",
                        f: "c"
                    }],
                    f: 30
                },
                "178": {
                    c: "162",
                    z: 0.15,
                    i: "178",
                    n: "Main Timeline",
                    a: [{
                        f: "a",
                        y: 0.06,
                        z: 0.03,
                        i: "e",
                        e: 0,
                        s: 1,
                        o: "163"
                    }, {
                        y: 0.09,
                        i: "e",
                        s: 0,
                        z: 0,
                        o: "163",
                        f: "a"
                    }, {
                        f: "c",
                        p: 2,
                        y: 0.15,
                        z: 0,
                        i: "ActionHandler",
                        s: {
                            a: [{
                                i: 0,
                                b: "178",
                                p: 9,
                                symbolOid: "69"
                            }]
                        },
                        o: "178"
                    }],
                    f: 30,
                    b: []
                }
            },
            bZ: 180,
            O: ["158", "161", "156", "160", "157", "159", "150", "173", "174", "172", "149", "148", "155", "154", "153", "152", "151", "166", "165", "164", "168", "163", "162", "167", "175", "170", "171", "169"],
            n: "Untitled Layout",
            "_": 0,
            v: {
                "173": {
                    G: "#FFFFFF",
                    aU: 8,
                    c: 273,
                    aV: 8,
                    d: 40,
                    r: "inline",
                    s: "Helvetica,Arial,Sans-Serif",
                    t: 27,
                    Y: 40,
                    Z: "break-word",
                    w: "INNOVATION",
                    bF: "172",
                    j: "absolute",
                    x: "visible",
                    k: "div",
                    y: "preserve",
                    z: 2,
                    aS: 8,
                    aT: 8,
                    a: 2,
                    b: -9
                },
                "165": {
                    c: 250,
                    d: 46,
                    I: "None",
                    r: "inline",
                    J: "None",
                    K: "None",
                    g: "#383838",
                    L: "None",
                    M: 0,
                    N: 0,
                    bF: "164",
                    A: "#D8DDE4",
                    x: "visible",
                    j: "absolute",
                    B: "#D8DDE4",
                    k: "div",
                    O: 0,
                    C: "#D8DDE4",
                    z: 1,
                    P: 0,
                    D: "#D8DDE4",
                    a: 0,
                    b: 0
                },
                "157": {
                    k: "div",
                    x: "hidden",
                    c: 487,
                    d: 508,
                    z: 6,
                    i: "mask",
                    r: "inline",
                    a: 218,
                    j: "absolute",
                    bF: "156",
                    b: 94
                },
                "149": {
                    c: 6,
                    d: 46,
                    I: "None",
                    e: 1,
                    J: "None",
                    K: "None",
                    g: "#EC1B2E",
                    L: "None",
                    M: 0,
                    N: 0,
                    bF: "148",
                    A: "#D81E05",
                    x: "visible",
                    j: "absolute",
                    B: "#D81E05",
                    k: "div",
                    O: 0,
                    C: "#D81E05",
                    z: 15,
                    P: 0,
                    D: "#D81E05",
                    a: 0,
                    b: 0
                },
                "161": {
                    c: 397,
                    d: 380,
                    I: "None",
                    r: "inline",
                    cQ: 1,
                    e: 1,
                    J: "None",
                    K: "None",
                    cR: 1,
                    g: "#00B1DB",
                    L: "None",
                    M: 0,
                    N: 0,
                    aI: "50%",
                    A: "#D8DDE4",
                    O: 0,
                    x: "visible",
                    j: "absolute",
                    aJ: "50%",
                    k: "div",
                    C: "#D8DDE4",
                    z: 3,
                    B: "#D8DDE4",
                    D: "#D8DDE4",
                    aK: "50%",
                    bF: "156",
                    P: 0,
                    a: 111,
                    aL: "50%",
                    b: 0
                },
                "153": {
                    k: "div",
                    x: "hidden",
                    c: 0,
                    d: 46,
                    z: 10,
                    a: 11,
                    j: "absolute",
                    b: 93
                },
                "174": {
                    c: 268,
                    d: 40,
                    I: "None",
                    r: "inline",
                    J: "None",
                    K: "None",
                    g: "#383838",
                    L: "None",
                    M: 0,
                    N: 0,
                    bF: "172",
                    A: "#D8DDE4",
                    x: "visible",
                    j: "absolute",
                    B: "#D8DDE4",
                    k: "div",
                    O: 0,
                    C: "#D8DDE4",
                    z: 1,
                    P: 0,
                    D: "#D8DDE4",
                    a: 0,
                    b: 0
                },
                "166": {
                    G: "#FFFFFF",
                    aU: 8,
                    c: 240,
                    aV: 8,
                    d: 47,
                    r: "inline",
                    s: "Helvetica,Arial,Sans-Serif",
                    t: 27,
                    Y: 40,
                    Z: "break-word",
                    w: "GESTION&nbsp;ACTIVE",
                    bF: "164",
                    j: "absolute",
                    x: "visible",
                    k: "div",
                    y: "preserve",
                    z: 2,
                    aS: 8,
                    aT: 8,
                    a: 1,
                    b: -9
                },
                "158": {
                    c: 397,
                    d: 380,
                    I: "None",
                    r: "inline",
                    cQ: 1,
                    e: 0.69999999999999996,
                    J: "None",
                    K: "None",
                    cR: 1,
                    g: "#125687",
                    L: "None",
                    M: 0,
                    i: "blend",
                    N: 0,
                    aI: "50%",
                    A: "#D8DDE4",
                    O: 0,
                    x: "visible",
                    j: "absolute",
                    aJ: "50%",
                    k: "div",
                    C: "#D8DDE4",
                    z: 1,
                    B: "#D8DDE4",
                    D: "#D8DDE4",
                    aK: "50%",
                    bF: "157",
                    P: 0,
                    a: -107,
                    aL: "50%",
                    b: -94
                },
                "170": {
                    h: "102",
                    p: "no-repeat",
                    x: "visible",
                    a: 0,
                    q: "100% 100%",
                    b: 215,
                    j: "absolute",
                    dB: "img",
                    z: 20,
                    k: "div",
                    c: 303,
                    d: 35,
                    r: "inline"
                },
                "162": {
                    x: "hidden",
                    a: 11,
                    cA: false,
                    b: 137,
                    j: "absolute",
                    bX: false,
                    c: 6,
                    k: "div",
                    bY: 1,
                    d: 40,
                    z: 14,
                    e: 0,
                    bZ: 180,
                    cV: []
                },
                "154": {
                    c: 266,
                    d: 41,
                    I: "None",
                    r: "inline",
                    J: "None",
                    K: "None",
                    g: "#383838",
                    L: "None",
                    M: 0,
                    N: 0,
                    bF: "153",
                    A: "#D8DDE4",
                    x: "visible",
                    j: "absolute",
                    B: "#D8DDE4",
                    k: "div",
                    O: 0,
                    C: "#D8DDE4",
                    z: 1,
                    P: 0,
                    D: "#D8DDE4",
                    a: 0,
                    b: 0
                },
                "175": {
                    h: "101",
                    p: "no-repeat",
                    x: "visible",
                    a: 13,
                    q: "100% 100%",
                    b: 17,
                    j: "absolute",
                    dB: "img",
                    z: 20,
                    k: "div",
                    c: 139,
                    d: 23,
                    r: "inline"
                },
                "167": {
                    aV: 8,
                    w: "MC",
                    a: 264,
                    x: "visible",
                    Z: "break-word",
                    b: 180,
                    y: "preserve",
                    j: "absolute",
                    z: 18,
                    yy: "nowrap",
                    s: "Helvetica,Arial,Sans-Serif",
                    aT: 8,
                    k: "div",
                    aS: 8,
                    e: 0,
                    t: 8,
                    G: "#FFFFFF",
                    aU: 8,
                    r: "inline"
                },
                "159": {
                    P: 0,
                    c: 487,
                    d: 508,
                    I: "None",
                    r: "inline",
                    cQ: 1,
                    e: 1,
                    J: "None",
                    K: "None",
                    cR: 1,
                    L: "None",
                    M: 0,
                    N: 0,
                    aI: "50%",
                    A: "#D8DDE4",
                    O: 0,
                    x: "visible",
                    j: "absolute",
                    aJ: "50%",
                    k: "div",
                    C: "#D8DDE4",
                    z: 4,
                    l: 0,
                    D: "#D8DDE4",
                    aK: "50%",
                    m: "#00B1DB",
                    n: "#76CCA1",
                    B: "#D8DDE4",
                    a: 218,
                    aL: "50%",
                    bF: "156",
                    b: 94
                },
                "150": {
                    c: 298,
                    d: 248,
                    I: "Solid",
                    r: "inline",
                    e: 1,
                    J: "Solid",
                    K: "Solid",
                    L: "Solid",
                    aP: "pointer",
                    M: 1,
                    w: "",
                    N: 1,
                    A: "#444444",
                    aA: {
                        a: [{
                            p: 4,
                            h: "40"
                        }]
                    },
                    O: 1,
                    x: "visible",
                    j: "absolute",
                    k: "div",
                    dB: "button",
                    z: 21,
                    C: "#444444",
                    D: "#444444",
                    aC: {
                        a: [{
                            p: 4,
                            h: "136"
                        }]
                    },
                    B: "#444444",
                    P: 1,
                    a: 0,
                    aD: {
                        a: [{
                            p: 4,
                            h: "135"
                        }]
                    },
                    b: 0
                },
                "171": {
                    c: 98,
                    d: 21,
                    I: "Solid",
                    J: "Solid",
                    K: "Solid",
                    L: "Solid",
                    M: 1,
                    i: "CTA-outline",
                    w: "",
                    N: 1,
                    A: "#38383A",
                    x: "visible",
                    j: "absolute",
                    B: "#38383A",
                    k: "div",
                    bF: "169",
                    C: "#38383A",
                    z: 1,
                    O: 1,
                    D: "#38383A",
                    P: 1,
                    a: 0,
                    b: 5
                },
                "163": {
                    c: 6,
                    d: 46,
                    I: "None",
                    e: 1,
                    J: "None",
                    K: "None",
                    g: "#EC1B2E",
                    L: "None",
                    M: 0,
                    N: 0,
                    bF: "162",
                    A: "#D81E05",
                    x: "visible",
                    j: "absolute",
                    B: "#D81E05",
                    k: "div",
                    O: 0,
                    C: "#D81E05",
                    z: 15,
                    P: 0,
                    D: "#D81E05",
                    a: 0,
                    b: 0
                },
                "155": {
                    G: "#FFFFFF",
                    aU: 8,
                    c: 251,
                    aV: 8,
                    d: 41,
                    r: "inline",
                    s: "Helvetica,Arial,Sans-Serif",
                    t: 27,
                    Y: 41,
                    Z: "break-word",
                    w: "REPRÉSENTATION",
                    bF: "153",
                    j: "absolute",
                    x: "visible",
                    k: "div",
                    y: "preserve",
                    z: 2,
                    aS: 8,
                    aT: 8,
                    a: 1,
                    b: -9
                },
                "168": {
                    G: "#FFFFFF",
                    aU: 8,
                    aV: 8,
                    r: "inline",
                    e: 0,
                    s: "Helvetica,Arial,Sans-Serif",
                    t: 15,
                    Y: 15,
                    Z: "break-word",
                    v: "",
                    w: "VOICI LE LEADERSHIP DYNAMIQUE",
                    j: "absolute",
                    x: "visible",
                    yy: "nowrap",
                    k: "div",
                    y: "preserve",
                    z: 17,
                    aS: 8,
                    aT: 8,
                    a: 3,
                    b: 180
                },
                "151": {
                    x: "hidden",
                    a: 11,
                    cA: false,
                    b: 93,
                    j: "absolute",
                    bX: false,
                    c: 6,
                    k: "div",
                    bY: 1,
                    d: 41,
                    z: 13,
                    e: 0,
                    bZ: 180,
                    cV: []
                },
                "172": {
                    k: "div",
                    x: "hidden",
                    c: 0,
                    d: 46,
                    z: 9,
                    a: 11,
                    j: "absolute",
                    b: 50
                },
                "164": {
                    k: "div",
                    x: "hidden",
                    c: 0,
                    d: 40,
                    z: 11,
                    a: 11,
                    j: "absolute",
                    b: 137
                },
                "156": {
                    k: "div",
                    x: "visible",
                    c: 779,
                    d: 652,
                    z: 3,
                    i: "bubbles",
                    r: "inline",
                    a: -250,
                    j: "absolute",
                    b: -223
                },
                "148": {
                    x: "hidden",
                    a: 11,
                    cA: false,
                    b: 50,
                    j: "absolute",
                    bX: false,
                    c: 6,
                    k: "div",
                    bY: 1,
                    d: 40,
                    z: 12,
                    e: 1,
                    bZ: 180,
                    cV: []
                },
                "160": {
                    P: 0,
                    c: 486,
                    d: 508,
                    I: "None",
                    r: "inline",
                    cQ: 1,
                    e: 1,
                    J: "None",
                    K: "None",
                    cR: 1,
                    L: "None",
                    M: 0,
                    N: 0,
                    aI: "50%",
                    A: "#D8DDE4",
                    O: 0,
                    x: "visible",
                    j: "absolute",
                    aJ: "50%",
                    k: "div",
                    C: "#D8DDE4",
                    z: 5,
                    l: 0,
                    D: "#D8DDE4",
                    aK: "50%",
                    m: "#0797C6",
                    n: "#22A69E",
                    B: "#D8DDE4",
                    a: 0,
                    aL: "50%",
                    bF: "156",
                    b: 144
                },
                "152": {
                    c: 6,
                    d: 46,
                    I: "None",
                    e: 1,
                    J: "None",
                    K: "None",
                    g: "#EC1B2E",
                    L: "None",
                    M: 0,
                    N: 0,
                    bF: "151",
                    A: "#D81E05",
                    x: "visible",
                    j: "absolute",
                    B: "#D81E05",
                    k: "div",
                    O: 0,
                    C: "#D81E05",
                    z: 15,
                    P: 0,
                    D: "#D81E05",
                    a: 0,
                    b: 0
                }
            }
        }],{},g,{
            "112": [[0, 0, 0.42, 0, 0.1077, 1, 1, 1]]
        },null,false,true,-1,true,true,false,true);
        f[c] = a.API;
        document.getElementById(e).setAttribute("HYP_dn", c);
        a.z_o(this.body)
    }
    )();
}
)();
