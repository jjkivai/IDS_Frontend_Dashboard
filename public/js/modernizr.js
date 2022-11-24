/*! modernizr 3.12.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-backgroundblendmode-canvas-cssanimations-csscalc-cssfilters-cssgradients-cssremunit-csstransforms-csstransforms3d-csstransitions-flexbox-flexboxlegacy-flexboxtweener-flexwrap-svg-touchevents-video-setclasses !*/
!(function (e, n, t, o) {
    function a(e, n) {
        return typeof e === n;
    }
    function r() {
        return "function" != typeof t.createElement
            ? t.createElement(arguments[0])
            : b
            ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0])
            : t.createElement.apply(t, arguments);
    }
    function s() {
        var e = t.body;
        return e || ((e = r(b ? "svg" : "body")), (e.fake = !0)), e;
    }
    function i(e, n, o, a) {
        var i,
            d,
            c,
            l,
            u = "modernizr",
            f = r("div"),
            p = s();
        if (parseInt(o, 10)) for (; o--; ) (c = r("div")), (c.id = a ? a[o] : u + (o + 1)), f.appendChild(c);
        return (
            (i = r("style")),
            (i.type = "text/css"),
            (i.id = "s" + u),
            (p.fake ? p : f).appendChild(i),
            p.appendChild(f),
            i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(t.createTextNode(e)),
            (f.id = u),
            p.fake &&
                ((p.style.background = ""),
                (p.style.overflow = "hidden"),
                (l = w.style.overflow),
                (w.style.overflow = "hidden"),
                w.appendChild(p)),
            (d = n(f, e)),
            p.fake && p.parentNode
                ? (p.parentNode.removeChild(p), (w.style.overflow = l), w.offsetHeight)
                : f.parentNode.removeChild(f),
            !!d
        );
    }
    function d(e, t, o) {
        var a;
        if ("getComputedStyle" in n) {
            a = getComputedStyle.call(n, e, t);
            var r = n.console;
            if (null !== a) o && (a = a.getPropertyValue(o));
            else if (r) {
                var s = r.error ? "error" : "log";
                r[s].call(r, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
            }
        } else a = !t && e.currentStyle && e.currentStyle[o];
        return a;
    }
    function c(e, n) {
        return !!~("" + e).indexOf(n);
    }
    function l(e) {
        return e
            .replace(/([A-Z])/g, function (e, n) {
                return "-" + n.toLowerCase();
            })
            .replace(/^ms-/, "-ms-");
    }
    function u(e, t) {
        var a = e.length;
        if ("CSS" in n && "supports" in n.CSS) {
            for (; a--; ) if (n.CSS.supports(l(e[a]), t)) return !0;
            return !1;
        }
        if ("CSSSupportsRule" in n) {
            for (var r = []; a--; ) r.push("(" + l(e[a]) + ":" + t + ")");
            return (
                (r = r.join(" or ")),
                i("@supports (" + r + ") { #modernizr { position: absolute; } }", function (e) {
                    return "absolute" === d(e, null, "position");
                })
            );
        }
        return o;
    }
    function f(e) {
        return e
            .replace(/([a-z])-([a-z])/g, function (e, n, t) {
                return n + t.toUpperCase();
            })
            .replace(/^-/, "");
    }
    function p(e, n, t, s) {
        function i() {
            l && (delete z.style, delete z.modElem);
        }
        if (((s = !a(s, "undefined") && s), !a(t, "undefined"))) {
            var d = u(e, t);
            if (!a(d, "undefined")) return d;
        }
        for (var l, p, v, y, m, g = ["modernizr", "tspan", "samp"]; !z.style && g.length; )
            (l = !0), (z.modElem = r(g.shift())), (z.style = z.modElem.style);
        for (v = e.length, p = 0; p < v; p++)
            if (((y = e[p]), (m = z.style[y]), c(y, "-") && (y = f(y)), z.style[y] !== o)) {
                if (s || a(t, "undefined")) return i(), "pfx" !== n || y;
                try {
                    z.style[y] = t;
                } catch (e) {}
                if (z.style[y] !== m) return i(), "pfx" !== n || y;
            }
        return i(), !1;
    }
    function v(e, n) {
        return function () {
            return e.apply(n, arguments);
        };
    }
    function y(e, n, t) {
        var o;
        for (var r in e) if (e[r] in n) return !1 === t ? e[r] : ((o = n[e[r]]), a(o, "function") ? v(o, t || n) : o);
        return !1;
    }
    function m(e, n, t, o, r) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            i = (e + " " + _.join(s + " ") + s).split(" ");
        return a(n, "string") || a(n, "undefined")
            ? p(i, n, o, r)
            : ((i = (e + " " + $.join(s + " ") + s).split(" ")), y(i, n, t));
    }
    function g(e, n, t) {
        return m(e, o, o, n, t);
    }
    var h = [],
        T = {
            _version: "3.12.0",
            _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
            _q: [],
            on: function (e, n) {
                var t = this;
                setTimeout(function () {
                    n(t[e]);
                }, 0);
            },
            addTest: function (e, n, t) {
                h.push({ name: e, fn: n, options: t });
            },
            addAsyncTest: function (e) {
                h.push({ name: null, fn: e });
            },
        },
        Modernizr = function () {};
    (Modernizr.prototype = T), (Modernizr = new Modernizr());
    var x = [],
        w = t.documentElement,
        b = "svg" === w.nodeName.toLowerCase();
    !(function () {
        var e = r("audio");
        Modernizr.addTest("audio", function () {
            var n = !1;
            try {
                (n = !!e.canPlayType), n && (n = new Boolean(n));
            } catch (e) {}
            return n;
        });
        try {
            e.canPlayType &&
                (Modernizr.addTest("audio.ogg", e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "")),
                Modernizr.addTest("audio.mp3", e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, "")),
                Modernizr.addTest(
                    "audio.opus",
                    e.canPlayType('audio/ogg; codecs="opus"') ||
                        e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, "")
                ),
                Modernizr.addTest("audio.wav", e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "")),
                Modernizr.addTest(
                    "audio.m4a",
                    (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, "")
                ));
        } catch (e) {}
    })(),
        Modernizr.addTest("canvas", function () {
            var e = r("canvas");
            return !(!e.getContext || !e.getContext("2d"));
        }),
        Modernizr.addTest(
            "svg",
            !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
        );
    var C = T._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    T._prefixes = C;
    var S = (function () {
        var e = n.matchMedia || n.msMatchMedia;
        return e
            ? function (n) {
                  var t = e(n);
                  return (t && t.matches) || !1;
              }
            : function (e) {
                  var n = !1;
                  return (
                      i("@media " + e + " { #modernizr { position: absolute; } }", function (e) {
                          n = "absolute" === d(e, null, "position");
                      }),
                      n
                  );
              };
    })();
    (T.mq = S),
        Modernizr.addTest("touchevents", function () {
            if ("ontouchstart" in n || n.TouchEvent || (n.DocumentTouch && t instanceof DocumentTouch)) return !0;
            var e = ["(", C.join("touch-enabled),("), "heartz", ")"].join("");
            return S(e);
        }),
        (function () {
            var e = r("video");
            Modernizr.addTest("video", function () {
                var n = !1;
                try {
                    (n = !!e.canPlayType), n && (n = new Boolean(n));
                } catch (e) {}
                return n;
            });
            try {
                e.canPlayType &&
                    (Modernizr.addTest("video.ogg", e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, "")),
                    Modernizr.addTest(
                        "video.h264",
                        e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, "")
                    ),
                    Modernizr.addTest("video.h265", e.canPlayType('video/mp4; codecs="hev1"').replace(/^no$/, "")),
                    Modernizr.addTest(
                        "video.webm",
                        e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
                    ),
                    Modernizr.addTest("video.vp9", e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, "")),
                    Modernizr.addTest(
                        "video.hls",
                        e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, "")
                    ),
                    Modernizr.addTest("video.av1", e.canPlayType('video/mp4; codecs="av01"').replace(/^no$/, "")));
            } catch (e) {}
        })();
    var P = "Moz O ms Webkit",
        _ = T._config.usePrefixes ? P.split(" ") : [];
    T._cssomPrefixes = _;
    var E = { elem: r("modernizr") };
    Modernizr._q.push(function () {
        delete E.elem;
    });
    var z = { style: E.elem.style };
    Modernizr._q.unshift(function () {
        delete z.style;
    });
    var $ = T._config.usePrefixes ? P.toLowerCase().split(" ") : [];
    (T._domPrefixes = $),
        (T.testAllProps = m),
        (T.testAllProps = g),
        Modernizr.addTest("cssanimations", g("animationName", "a", !0));
    var N = function (e) {
        var t,
            a = C.length,
            r = n.CSSRule;
        if (void 0 === r) return o;
        if (!e) return !1;
        if (((e = e.replace(/^@/, "")), (t = e.replace(/-/g, "_").toUpperCase() + "_RULE") in r)) return "@" + e;
        for (var s = 0; s < a; s++) {
            var i = C[s];
            if (i.toUpperCase() + "_" + t in r) return "@-" + i.toLowerCase() + "-" + e;
        }
        return !1;
    };
    T.atRule = N;
    var k = (T.prefixed = function (e, n, t) {
        return 0 === e.indexOf("@") ? N(e) : (-1 !== e.indexOf("-") && (e = f(e)), n ? m(e, n, t) : m(e, "pfx"));
    });
    Modernizr.addTest("backgroundblendmode", k("backgroundBlendMode", "text")),
        Modernizr.addTest("csscalc", function () {
            var e = r("a");
            return (e.style.cssText = "width:" + C.join("calc(10px);width:")), !!e.style.length;
        });
    var j = "CSS" in n && "supports" in n.CSS,
        A = "supportsCSS" in n;
    Modernizr.addTest("supports", j || A),
        Modernizr.addTest("cssfilters", function () {
            if (Modernizr.supports) return g("filter", "blur(2px)");
            var e = r("a");
            return (
                (e.style.cssText = C.join("filter:blur(2px); ")),
                !!e.style.length && (t.documentMode === o || t.documentMode > 9)
            );
        }),
        Modernizr.addTest("flexbox", g("flexBasis", "1px", !0)),
        Modernizr.addTest("flexboxlegacy", g("boxDirection", "reverse", !0)),
        Modernizr.addTest("flexboxtweener", g("flexAlign", "end", !0)),
        Modernizr.addTest("flexwrap", g("flexWrap", "wrap", !0)),
        Modernizr.addTest("cssgradients", function () {
            for (var e, n = "background-image:", t = "", o = 0, a = C.length - 1; o < a; o++)
                (e = 0 === o ? "to " : ""), (t += n + C[o] + "linear-gradient(" + e + "left top, #9f9, white);");
            Modernizr._config.usePrefixes &&
                (t += n + "-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");
            var s = r("a"),
                i = s.style;
            return (i.cssText = t), ("" + i.backgroundImage).indexOf("gradient") > -1;
        }),
        Modernizr.addTest("cssremunit", function () {
            var e = r("a").style;
            try {
                e.fontSize = "3rem";
            } catch (e) {}
            return /rem/.test(e.fontSize);
        }),
        Modernizr.addTest("csstransforms", function () {
            return -1 === navigator.userAgent.indexOf("Android 2.") && g("transform", "scale(1)", !0);
        }),
        Modernizr.addTest("csstransforms3d", function () {
            return !!g("perspective", "1px", !0);
        }),
        Modernizr.addTest("csstransitions", g("transition", "all", !0)),
        (function () {
            var e, n, t, o, r, s, i;
            for (var d in h)
                if (h.hasOwnProperty(d)) {
                    if (
                        ((e = []),
                        (n = h[d]),
                        n.name &&
                            (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    )
                        for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                    for (o = a(n.fn, "function") ? n.fn() : n.fn, r = 0; r < e.length; r++)
                        (s = e[r]),
                            (i = s.split(".")),
                            1 === i.length
                                ? (Modernizr[i[0]] = o)
                                : ((Modernizr[i[0]] && (!Modernizr[i[0]] || Modernizr[i[0]] instanceof Boolean)) ||
                                      (Modernizr[i[0]] = new Boolean(Modernizr[i[0]])),
                                  (Modernizr[i[0]][i[1]] = o)),
                            x.push((o ? "" : "no-") + i.join("-"));
                }
        })(),
        (function (e) {
            var n = w.className,
                t = Modernizr._config.classPrefix || "";
            if ((b && (n = n.baseVal), Modernizr._config.enableJSClass)) {
                var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
                n = n.replace(o, "$1" + t + "js$2");
            }
            Modernizr._config.enableClasses &&
                (e.length > 0 && (n += " " + t + e.join(" " + t)), b ? (w.className.baseVal = n) : (w.className = n));
        })(x),
        delete T.addTest,
        delete T.addAsyncTest;
    for (var L = 0; L < Modernizr._q.length; L++) Modernizr._q[L]();
    e.Modernizr = Modernizr;
})(window, window, document);
