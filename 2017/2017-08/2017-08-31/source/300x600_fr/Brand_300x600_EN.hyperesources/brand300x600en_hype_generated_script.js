

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
        var h = "Brand_300x600_EN.hyperesources"
          , c = "Brand_300x600_EN"
          , e = "brand300x600en_hype_container";
        if (false == !1)
            try {
                for (var f = document.getElementsByTagName("script"), a = 0; a < f.length; a++) {
                    var b = f[a].src
                      , d = null != b ? b.indexOf("/brand300x600en_hype_generated_script.js") : -1;
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
        	"2": {
                p: 1,
                n: "300x600_cta.png",
                g: "150",
                t: "image/png"
            },
            "1": {
                p: 1,
                n: "300x600_logo.png",
                g: "147",
                t: "image/png"
            },
            "-2": {
                n: "blank.gif"
            },
            "-1": {
                n: "PIE.htc"
            },
            "0": {
                p: 1,
                n: "Pasted.jpg",
                g: "144",
                o: true,
                t: "@1x"
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
            Z: 600,
            L: [],
            c: "#FFFFFF",
            bY: 1,
            d: 300,
            U: {
                "160": {
                    V: {
                        "Main Timeline": "187"
                    },
                    W: "187",
                    n: "Cursor"
                },
                "176": {
                    V: {
                        "Main Timeline": "189"
                    },
                    W: "189",
                    n: "Logo"
                },
                "168": {
                    V: {
                        "Main Timeline": "188"
                    },
                    W: "188",
                    n: "Cursor"
                },
                "153": {
                    V: {
                        "Main Timeline": "186"
                    },
                    W: "186",
                    n: "Cursor"
                }
            },
            T: {
                "188": {
                    c: "168",
                    z: 0.15,
                    i: "188",
                    n: "Main Timeline",
                    a: [{
                        f: "a",
                        y: 0.06,
                        z: 0.03,
                        i: "e",
                        e: 0,
                        s: 1,
                        o: "169"
                    }, {
                        y: 0.09,
                        i: "e",
                        s: 0,
                        z: 0,
                        o: "169",
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
                                b: "188",
                                p: 9,
                                symbolOid: "69"
                            }]
                        },
                        o: "188"
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
                        b: "186"
                    }, {
                        D: 0,
                        H: true,
                        E: true,
                        z: false,
                        F: 0,
                        G: 0,
                        C: 0,
                        b: "189"
                    }, {
                        D: 0.15,
                        H: true,
                        E: true,
                        z: false,
                        F: 0,
                        G: 0,
                        C: 2,
                        b: "187"
                    }, {
                        D: 0.15,
                        H: true,
                        E: true,
                        z: false,
                        F: 0,
                        G: 0,
                        C: 4,
                        b: "188"
                    }],
                    a: [{
                        f: "c",
                        y: 0,
                        z: 0.23,
                        i: "e",
                        e: 1,
                        s: 1,
                        o: "153"
                    }, {
                        f: "c",
                        y: 0,
                        z: 7.15,
                        i: "a",
                        e: 398,
                        s: 154,
                        o: "163"
                    }, {
                        f: "c",
                        y: 0,
                        z: 7.15,
                        i: "b",
                        e: 191,
                        s: 220,
                        o: "163"
                    }, {
                        f: "c",
                        y: 0,
                        z: 7.15,
                        i: "a",
                        e: 180,
                        s: 464,
                        o: "167"
                    }, {
                        f: "c",
                        y: 0,
                        z: 7.15,
                        i: "b",
                        e: 134,
                        s: -34,
                        o: "167"
                    }, {
                        f: "a",
                        y: 0,
                        z: 2.15,
                        i: "e",
                        e: 1,
                        s: 0,
                        o: "160"
                    }, {
                        f: "c",
                        y: 0,
                        z: 7.15,
                        i: "a",
                        e: 398,
                        s: 154,
                        o: "165"
                    }, {
                        f: "c",
                        y: 0,
                        z: 7.15,
                        i: "b",
                        e: 191,
                        s: 220,
                        o: "165"
                    }, {
                        f: "a",
                        y: 0,
                        z: 4.15,
                        i: "e",
                        e: 1,
                        s: 0,
                        o: "168"
                    }, {
                        f: "c",
                        y: 0,
                        z: 7.15,
                        i: "a",
                        e: 17,
                        s: -11,
                        o: "166"
                    }, {
                        f: "c",
                        y: 0,
                        z: 7.15,
                        i: "b",
                        e: 557,
                        s: 146,
                        o: "166"
                    }, {
                        f: "c",
                        y: 0,
                        z: 2,
                        i: "e",
                        e: 0,
                        s: 0,
                        o: "170"
                    }, {
                        f: "c",
                        y: 0,
                        z: 7.15,
                        i: "a",
                        e: -220,
                        s: 311,
                        o: "164"
                    }, {
                        f: "c",
                        y: 0,
                        z: 7.15,
                        i: "b",
                        e: -57,
                        s: -254,
                        o: "164"
                    }, {
                        f: "a",
                        y: 0.23,
                        z: 1,
                        i: "e",
                        e: 0,
                        s: 1,
                        o: "153"
                    }, {
                        f: "112",
                        y: 0.26,
                        z: 0.11,
                        i: "c",
                        e: 268,
                        s: 0,
                        o: "182"
                    }, {
                        f: "112",
                        y: 0.26,
                        z: 0.11,
                        i: "a",
                        e: 280,
                        s: 13,
                        o: "153"
                    }, {
                        y: 1.07,
                        i: "c",
                        s: 268,
                        z: 0,
                        o: "182",
                        f: "c"
                    }, {
                        y: 1.07,
                        i: "a",
                        s: 280,
                        z: 0,
                        o: "153",
                        f: "c"
                    }, {
                        y: 1.23,
                        i: "e",
                        s: 0,
                        z: 0,
                        o: "153",
                        f: "a"
                    }, {
                        f: "a",
                        y: 2,
                        z: 0.15,
                        i: "e",
                        e: 1,
                        s: 0,
                        o: "170"
                    }, {
                        f: "a",
                        y: 2.15,
                        z: 0,
                        i: "e",
                        e: 1,
                        s: 1,
                        o: "160"
                    }, {
                        f: "a",
                        y: 2.15,
                        z: 1.18,
                        i: "e",
                        e: 0,
                        s: 1,
                        o: "160"
                    }, {
                        f: "a",
                        y: 2.15,
                        z: 1.15,
                        i: "e",
                        e: 0,
                        s: 1,
                        o: "170"
                    }, {
                        f: "c",
                        y: 2.19,
                        z: 1.08,
                        i: "a",
                        e: 257,
                        s: 11,
                        o: "170"
                    }, {
                        f: "112",
                        y: 3.06,
                        z: 0.09,
                        i: "c",
                        e: 246,
                        s: 0,
                        o: "157"
                    }, {
                        f: "112",
                        y: 3.06,
                        z: 0.09,
                        i: "a",
                        e: 259,
                        s: 13,
                        o: "160"
                    }, {
                        y: 3.15,
                        i: "c",
                        s: 246,
                        z: 0,
                        o: "157",
                        f: "c"
                    }, {
                        y: 3.15,
                        i: "a",
                        s: 259,
                        z: 0,
                        o: "160",
                        f: "c"
                    }, {
                        y: 3.27,
                        i: "a",
                        s: 257,
                        z: 0,
                        o: "170",
                        f: "c"
                    }, {
                        f: "a",
                        y: 4,
                        z: 0.15,
                        i: "e",
                        e: 1,
                        s: 0,
                        o: "171"
                    }, {
                        y: 4,
                        i: "e",
                        s: 0,
                        z: 0,
                        o: "170",
                        f: "a"
                    }, {
                        y: 4.03,
                        i: "e",
                        s: 0,
                        z: 0,
                        o: "160",
                        f: "a"
                    }, {
                        f: "a",
                        y: 4.15,
                        z: 0,
                        i: "e",
                        e: 1,
                        s: 1,
                        o: "168"
                    }, {
                        f: "a",
                        y: 4.15,
                        z: 1.04,
                        i: "e",
                        e: 0,
                        s: 1,
                        o: "168"
                    }, {
                        f: "a",
                        y: 4.15,
                        z: 1.07,
                        i: "e",
                        e: 0,
                        s: 1,
                        o: "171"
                    }, {
                        f: "c",
                        y: 4.18,
                        z: 1.01,
                        i: "a",
                        e: 174,
                        s: 11,
                        o: "171"
                    }, {
                        f: "112",
                        y: 5,
                        z: 0.08,
                        i: "c",
                        e: 163,
                        s: 0,
                        o: "172"
                    }, {
                        f: "112",
                        y: 5,
                        z: 0.08,
                        i: "a",
                        e: 176,
                        s: 13,
                        o: "168"
                    }, {
                        y: 5.08,
                        i: "c",
                        s: 163,
                        z: 0,
                        o: "172",
                        f: "c"
                    }, {
                        y: 5.08,
                        i: "a",
                        s: 176,
                        z: 0,
                        o: "168",
                        f: "c"
                    }, {
                        y: 5.19,
                        i: "a",
                        s: 174,
                        z: 0,
                        o: "171",
                        f: "c"
                    }, {
                        y: 5.19,
                        i: "e",
                        s: 0,
                        z: 0,
                        o: "168",
                        f: "a"
                    }, {
                        y: 5.22,
                        i: "e",
                        s: 0,
                        z: 0,
                        o: "171",
                        f: "a"
                    }, {
                        f: "c",
                        y: 6,
                        z: 0.06,
                        i: "e",
                        e: 1,
                        s: 0,
                        o: "185"
                    }, {
                        f: "c",
                        y: 6,
                        z: 0.06,
                        i: "e",
                        e: 1,
                        s: 0,
                        o: "175"
                    }, {
                        y: 6.06,
                        i: "e",
                        s: 1,
                        z: 0,
                        o: "185",
                        f: "c"
                    }, {
                        y: 6.06,
                        i: "e",
                        s: 1,
                        z: 0,
                        o: "175",
                        f: "c"
                    }, {
                        f: "c",
                        y: 7,
                        z: 0.06,
                        i: "e",
                        e: 1,
                        s: 0,
                        o: "179"
                    }, {
                        y: 7.06,
                        i: "e",
                        s: 1,
                        z: 0,
                        o: "179",
                        f: "c"
                    }, {
                        y: 7.15,
                        i: "b",
                        s: 134,
                        z: 0,
                        o: "167",
                        f: "c"
                    }, {
                        y: 7.15,
                        i: "b",
                        s: 191,
                        z: 0,
                        o: "163",
                        f: "c"
                    }, {
                        y: 7.15,
                        i: "b",
                        s: 191,
                        z: 0,
                        o: "165",
                        f: "c"
                    }, {
                        y: 7.15,
                        i: "b",
                        s: 557,
                        z: 0,
                        o: "166",
                        f: "c"
                    }, {
                        y: 7.15,
                        i: "b",
                        s: -57,
                        z: 0,
                        o: "164",
                        f: "c"
                    }, {
                        y: 7.15,
                        i: "a",
                        s: 180,
                        z: 0,
                        o: "167",
                        f: "c"
                    }, {
                        y: 7.15,
                        i: "a",
                        s: 398,
                        z: 0,
                        o: "163",
                        f: "c"
                    }, {
                        y: 7.15,
                        i: "a",
                        s: 398,
                        z: 0,
                        o: "165",
                        f: "c"
                    }, {
                        y: 7.15,
                        i: "a",
                        s: 17,
                        z: 0,
                        o: "166",
                        f: "c"
                    }, {
                        y: 7.15,
                        i: "a",
                        s: -220,
                        z: 0,
                        o: "164",
                        f: "c"
                    }],
                    f: 30
                },
                "186": {
                    c: "153",
                    z: 0.15,
                    i: "186",
                    n: "Main Timeline",
                    a: [{
                        f: "a",
                        y: 0.06,
                        z: 0.03,
                        i: "e",
                        e: 0,
                        s: 1,
                        o: "154"
                    }, {
                        y: 0.09,
                        i: "e",
                        s: 0,
                        z: 0,
                        o: "154",
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
                                b: "186",
                                p: 9,
                                symbolOid: "69"
                            }]
                        },
                        o: "186"
                    }],
                    f: 30,
                    b: []
                },
                "189": {
                    c: "176",
                    z: 0,
                    i: "189",
                    n: "Main Timeline",
                    a: [],
                    f: 30,
                    b: []
                },
                "187": {
                    c: "160",
                    z: 0.15,
                    i: "187",
                    n: "Main Timeline",
                    a: [{
                        f: "a",
                        y: 0.06,
                        z: 0.03,
                        i: "e",
                        e: 0,
                        s: 1,
                        o: "161"
                    }, {
                        y: 0.09,
                        i: "e",
                        s: 0,
                        z: 0,
                        o: "161",
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
                                b: "187",
                                p: 9,
                                symbolOid: "69"
                            }]
                        },
                        o: "187"
                    }],
                    f: 30,
                    b: []
                }
            },
            bZ: 180,
            O: ["162", "164", "167", "163", "165", "155", "156", "184", "170", "183", "182", "154", "153", "171", "159", "158", "157", "161", "160", "174", "173", "172", "169", "168", "175", "185", "166", "179", "180", "181", "178", "176", "177"],
            n: "Untitled Layout",
            "_": 0,
            v: {
                "153": {
                    x: "visible",
                    a: 13,
                    cA: false,
                    b: 230,
                    j: "absolute",
                    r: "inline",
                    c: 6,
                    k: "div",
                    bY: 1,
                    d: 46,
                    z: 14,
                    bX: false,
                    e: 1,
                    bZ: 180,
                    cV: []
                },
                "172": {
                    k: "div",
                    x: "hidden",
                    c: 0,
                    d: 46,
                    z: 13,
                    r: "inline",
                    a: 13,
                    j: "absolute",
                    b: 324
                },
                "167": {
                    c: 563,
                    d: 539,
                    I: "None",
                    r: "inline",
                    cQ: 1,
                    e: 0.69999999999999996,
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
                    z: 4,
                    B: "#D8DDE4",
                    D: "#D8DDE4",
                    aK: "50%",
                    bF: "162",
                    P: 0,
                    a: 464,
                    aL: "50%",
                    b: -34
                },
                "154": {
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
                    bF: "153",
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
                "173": {
                    c: 163,
                    d: 46,
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
                "160": {
                    x: "visible",
                    a: 13,
                    cA: false,
                    b: 277,
                    j: "absolute",
                    r: "inline",
                    c: 6,
                    k: "div",
                    bY: 1,
                    d: 46,
                    z: 15,
                    bX: false,
                    e: 0,
                    bZ: 180,
                    cV: []
                },
                "168": {
                    x: "visible",
                    a: 13,
                    cA: false,
                    b: 324,
                    j: "absolute",
                    r: "inline",
                    c: 6,
                    k: "div",
                    bY: 1,
                    d: 46,
                    z: 16,
                    bX: false,
                    e: 0,
                    bZ: 180,
                    cV: []
                },
                "155": {
                    c: 298,
                    d: 598,
                    I: "Solid",
                    r: "inline",
                    e: 1,
                    J: "Solid",
                    K: "Solid",
                    L: "Solid",
                    aP: "pointer",
                    M: 1,
                    N: 1,
                    A: "#444444",
                    x: "visible",
                    aA: {
                        a: [{
                            p: 4,
                            h: "40"
                        }]
                    },
                    O: 1,
                    j: "absolute",
                    k: "div",
                    dB: "button",
                    z: 23,
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
                "174": {
                    G: "#FFFFFF",
                    aU: 8,
                    c: 173,
                    aV: 8,
                    d: 47,
                    r: "inline",
                    s: "Helvetica,Arial,Sans-Serif",
                    t: 41,
                    Z: "break-word",
                    w: "GESTION ACTIVE",
                    bF: "172",
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
                "161": {
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
                    bF: "160",
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
                "169": {
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
                    bF: "168",
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
                "180": {
                    w: "",
                    h: "150",
                    p: "no-repeat",
                    x: "visible",
                    a: 0,
                    q: "100% 100%",
                    b: 555,
                    j: "absolute",
                    bF: "176",
                    z: 15,
                    k: "div",
                    c: 300,
                    d: 45,
                    r: "inline"
                },
                "156": {
                    h: "144",
                    p: "no-repeat",
                    x: "visible",
                    a: 0,
                    q: "100% 100%",
                    b: 0,
                    j: "absolute",
                    dB: "img",
                    z: 3,
                    k: "div",
                    c: 300,
                    d: 600,
                    r: "none"
                },
                "175": {
                    G: "#FFFFFF",
                    aU: 8,
                    aV: 8,
                    r: "inline",
                    e: 0,
                    s: "Helvetica,Arial,Sans-Serif",
                    t: 24,
                    Y: 30,
                    Z: "break-word",
                    v: "bold",
                    w: "VOICI LE&nbsp;<br>LEADERSHIP<br>DYNAMIQUE<br>",
                    j: "absolute",
                    x: "visible",
                    yy: "nowrap",
                    k: "div",
                    y: "preserve",
                    z: 19,
                    aS: 8,
                    aT: 8,
                    a: 5,
                    b: 378
                },
                "162": {
                    A: "#00B1DB",
                    B: "#00B1DB",
                    x: "visible",
                    i: "bubbles",
                    a: -422,
                    C: "#00B1DB",
                    j: "absolute",
                    D: "#00B1DB",
                    z: 5,
                    k: "div",
                    b: -228,
                    d: 652,
                    c: 779,
                    r: "inline"
                },
                "157": {
                    k: "div",
                    x: "hidden",
                    c: 0,
                    d: 46,
                    z: 12,
                    r: "inline",
                    a: 13,
                    j: "absolute",
                    b: 277
                },
                "176": {
                    x: "visible",
                    a: 1,
                    cA: false,
                    b: 0,
                    j: "absolute",
                    r: "inline",
                    c: 298,
                    k: "div",
                    bY: 1,
                    d: 40,
                    z: 5,
                    bX: false,
                    bZ: 180,
                    cV: []
                },
                "163": {
                    k: "div",
                    x: "hidden",
                    c: 570,
                    d: 570,
                    z: 7,
                    i: "mask",
                    r: "inline",
                    a: 154,
                    j: "absolute",
                    bF: "162",
                    b: 220
                },
                "182": {
                    k: "div",
                    x: "hidden",
                    c: 0,
                    d: 46,
                    z: 11,
                    r: "inline",
                    a: 13,
                    j: "absolute",
                    b: 230
                },
                "158": {
                    c: 246,
                    d: 46,
                    I: "None",
                    r: "inline",
                    J: "None",
                    K: "None",
                    g: "#383838",
                    L: "None",
                    M: 0,
                    N: 0,
                    bF: "157",
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
                "177": {
                    w: "",
                    h: "147",
                    p: "no-repeat",
                    x: "visible",
                    a: 36,
                    q: "100% 100%",
                    b: 86,
                    j: "absolute",
                    bF: "176",
                    z: 15,
                    k: "div",
                    c: 229,
                    d: 48,
                    r: "inline"
                },
                "164": {
                    c: 563,
                    d: 539,
                    I: "None",
                    r: "inline",
                    cQ: 1,
                    e: 0.59999999999999998,
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
                    bF: "163",
                    P: 0,
                    a: 311,
                    aL: "50%",
                    b: -254
                },
                "183": {
                    c: 268,
                    d: 46,
                    I: "None",
                    r: "inline",
                    J: "None",
                    K: "None",
                    g: "#383838",
                    L: "None",
                    M: 0,
                    N: 0,
                    bF: "182",
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
                "159": {
                    G: "#FFFFFF",
                    aU: 8,
                    c: 251,
                    aV: 8,
                    d: 47,
                    r: "inline",
                    s: "Helvetica,Arial,Sans-Serif",
                    t: 41,
                    Z: "break-word",
                    w: "REPRÉSENTATION",
                    bF: "157",
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
                "170": {
                    c: 6,
                    d: 46,
                    I: "None",
                    r: "none",
                    e: 0,
                    J: "None",
                    K: "None",
                    g: "#D81E05",
                    L: "None",
                    M: 0,
                    N: 0,
                    A: "#D81E05",
                    x: "visible",
                    j: "absolute",
                    B: "#D81E05",
                    k: "div",
                    O: 0,
                    C: "#D81E05",
                    z: 17,
                    P: 0,
                    D: "#D81E05",
                    a: 11,
                    b: 67
                },
                "178": {
                    c: 300,
                    d: 41,
                    I: "None",
                    r: "inline",
                    J: "None",
                    K: "None",
                    g: "None",
                    L: "None",
                    M: 0,
                    N: 0,
                    bF: "176",
                    A: "#D8DDE4",
                    x: "visible",
                    j: "absolute",
                    B: "#D8DDE4",
                    k: "div",
                    O: 0,
                    C: "#D8DDE4",
                    z: 13,
                    P: 0,
                    D: "#D8DDE4",
                    a: -1,
                    b: 0
                },
                "165": {
                    P: 0,
                    c: 570,
                    d: 570,
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
                    m: "#76CCA1",
                    n: "#00B1DB",
                    B: "#D8DDE4",
                    a: 154,
                    aL: "50%",
                    bF: "162",
                    b: 220
                },
                "184": {
                    G: "#FFFFFF",
                    aU: 8,
                    c: 273,
                    aV: 8,
                    d: 47,
                    r: "inline",
                    s: "Helvetica,Arial,Sans-Serif",
                    t: 41,
                    Z: "break-word",
                    w: "INNOVATION",
                    bF: "182",
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
                "171": {
                    c: 6,
                    d: 46,
                    I: "None",
                    r: "none",
                    e: 0,
                    J: "None",
                    K: "None",
                    g: "#D81E05",
                    L: "None",
                    M: 0,
                    N: 0,
                    A: "#D81E05",
                    x: "visible",
                    j: "absolute",
                    B: "#D81E05",
                    k: "div",
                    O: 0,
                    C: "#D81E05",
                    z: 18,
                    P: 0,
                    D: "#D81E05",
                    a: 11,
                    b: 114
                },
                "179": {
                    x: "visible",
                    k: "div",
                    c: 100,
                    d: 32,
                    z: 21,
                    e: 0,
                    a: 184,
                    j: "absolute",
                    r: "inline",
                    b: 481
                },
                "166": {
                    P: 0,
                    c: 530,
                    d: 530,
                    I: "None",
                    r: "inline",
                    cQ: 1.0842130453410319,
                    e: 0.80000000000000004,
                    J: "None",
                    K: "None",
                    cR: 1.08041720843462,
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
                    z: 6,
                    l: 0,
                    D: "#D8DDE4",
                    aK: "50%",
                    m: "#0797C6",
                    n: "#22A69E",
                    B: "#D8DDE4",
                    a: -11,
                    aL: "50%",
                    bF: "162",
                    b: 146
                },
                "185": {
                    aV: 8,
                    w: "MC",
                    a: 162,
                    x: "visible",
                    Z: "break-word",
                    b: 442,
                    y: "preserve",
                    j: "absolute",
                    z: 20,
                    yy: "nowrap",
                    s: "Helvetica,Arial,Sans-Serif",
                    aT: 8,
                    k: "div",
                    aS: 8,
                    e: 0,
                    t: 10,
                    G: "#FFFFFF",
                    aU: 8,
                    r: "inline"
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
