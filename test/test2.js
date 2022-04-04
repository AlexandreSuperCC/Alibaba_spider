!function(e) {
    function t(t) {
        for (var n, r, i = t[0], a = t[1], s = 0, c = []; s < i.length; s++)
            r = i[s],
            Object.prototype.hasOwnProperty.call(o, r) && o[r] && c.push(o[r][0]),
            o[r] = 0;
        for (n in a)
            Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        for (u && u(t); c.length; )
            c.shift()()
    }
    var n = {}
      , r = {
        0: 0
    }
      , o = {
        0: 0
    };
    function i(t) {
        if (n[t])
            return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, i),
        r.l = !0,
        r.exports
    }
    i.e = function(e) {
        var t = [];
        r[e] ? t.push(r[e]) : 0 !== r[e] && {
            2: 1,
            3: 1
        }[e] && t.push(r[e] = new Promise((function(t, n) {
            for (var o = ({
                1: "industry_pc_banner_nav",
                2: "local_layout_industry_jfy",
                3: "vendor~industry_pc_banner_nav"
            }[e] || e) + ".css", a = i.p + o, s = document.getElementsByTagName("link"), c = 0; c < s.length; c++) {
                var u = (f = s[c]).getAttribute("data-href") || f.getAttribute("href");
                if ("stylesheet" === f.rel && (u === o || u === a))
                    return t()
            }
            var l = document.getElementsByTagName("style");
            for (c = 0; c < l.length; c++) {
                var f;
                if ((u = (f = l[c]).getAttribute("data-href")) === o || u === a)
                    return t()
            }
            var d = document.createElement("link");
            d.rel = "stylesheet",
            d.type = "text/css";
            d.onerror = d.onload = function(o) {
                if (d.onerror = d.onload = null,
                "load" === o.type)
                    t();
                else {
                    var i = o && ("load" === o.type ? "missing" : o.type)
                      , s = o && o.target && o.target.href || a
                      , c = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                    c.code = "CSS_CHUNK_LOAD_FAILED",
                    c.type = i,
                    c.request = s,
                    delete r[e],
                    d.parentNode.removeChild(d),
                    n(c)
                }
            }
            ,
            d.href = a,
            document.head.appendChild(d)
        }
        )).then((function() {
            r[e] = 0
        }
        )));
        var n = o[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var a = new Promise((function(t, r) {
                    n = o[e] = [t, r]
                }
                ));
                t.push(n[2] = a);
                var s, c = document.createElement("script");
                c.charset = "utf-8",
                c.timeout = 120,
                i.nc && c.setAttribute("nonce", i.nc),
                c.src = function(e) {
                    return i.p + "" + ({
                        1: "industry_pc_banner_nav",
                        2: "local_layout_industry_jfy",
                        3: "vendor~industry_pc_banner_nav"
                    }[e] || e) + ".js"
                }(e);
                var u = new Error;
                s = function(t) {
                    c.onerror = c.onload = null,
                    clearTimeout(l);
                    var n = o[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ("load" === t.type ? "missing" : t.type)
                              , i = t && t.target && t.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + r + ": " + i + ")",
                            u.name = "ChunkLoadError",
                            u.type = r,
                            u.request = i,
                            n[1](u)
                        }
                        o[e] = void 0
                    }
                }
                ;
                var l = setTimeout((function() {
                    s({
                        type: "timeout",
                        target: c
                    })
                }
                ), 12e4);
                c.onerror = c.onload = s,
                document.head.appendChild(c)
            }
        return Promise.all(t)
    }
    ,
    i.m = e,
    i.c = n,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, t) {
        if (1 & t && (e = i(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                i.d(n, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return n
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "https://s.alicdn.com/@g/msite/freepage-pc-bootstrap/0.0.6/web/",
    i.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var a = window.webpackJsonpMsiteHome = window.webpackJsonpMsiteHome || []
      , s = a.push.bind(a);
    a.push = t,
    a = a.slice();
    for (var c = 0; c < a.length; c++)
        t(a[c]);
    var u = s;
    i(i.s = 30)
}([function(e, t, n) {
    e.exports = n(32)
}
, function(e, t, n) {
    var r, o;
    window,
    e.exports = (r = n(2),
    o = n(36),
    function(e) {
        var t = {};
        function n(r) {
            if (t[r])
                return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n),
            o.l = !0,
            o.exports
        }
        return n.m = e,
        n.c = t,
        n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }
        ,
        n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        n.t = function(e, t) {
            if (1 & t && (e = n(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var r = Object.create(null);
            if (n.r(r),
            Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }),
            2 & t && "string" != typeof e)
                for (var o in e)
                    n.d(r, o, function(t) {
                        return e[t]
                    }
                    .bind(null, o));
            return r
        }
        ,
        n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return n.d(t, "a", t),
            t
        }
        ,
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        n.p = "/dist/",
        n(n.s = 26)
    }([function(e) {
        e.exports = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.toNumber = t.isNumberLike = t.sendRateLog = t.sendLog = t.addScript = t.compareComplierVersion = t.isString = t.isPlainObject = t.matchRegexp = t.getUniqueId = t.mapValue = t.isEqual = t.isEmpty = t.compactArray = t.trimAllBlankString = t.includes = t.log = t.deepGet = t.numTrunc = t.noop = t.env = void 0;
        var o = r(n(8))
          , i = r(n(7))
          , a = r(n(13))
          , s = r(n(3))
          , c = r(n(4))
          , u = r(n(20));
        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(Object(n), !0).forEach((function(t) {
                    (0,
                    o.default)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        (0,
        c.default)("global-config");
        var d = /\[(\d+)\]/g
          , p = /^[_$]/
          , h = {
            isIOS: /iPhone|iPad/.test(window.navigator.userAgent),
            devicePixelRatio: window.devicePixelRatio || 1,
            deviceWidth: Math.min(768, window.innerWidth, window.screen.width)
        };
        t.env = h,
        t.noop = function() {}
        ,
        t.numTrunc = function(e) {
            if (e = parseFloat(e),
            isNaN(e))
                return NaN;
            var t = "".concat(e + .4).split(".")
              , n = (0,
            s.default)(t, 1)[0];
            return isNaN(n) ? NaN : n
        }
        ,
        t.deepGet = function(e, t) {
            return t ? [e].concat((0,
            a.default)(t.replace(d, (function(e, t) {
                return ".".concat(t)
            }
            )).split("."))).reduce((function(e, t) {
                return e && e[t]
            }
            )) : null
        }
        ,
        t.log = {
            warn: function() {
                for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                    n[r] = arguments[r];
                return (e = console).warn.apply(e, ["[DinamicX warn]: "].concat(n))
            },
            error: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (console.error("[DinamicX error]: ", e, t || ""),
                u.default.report(e, t),
                n)
                    throw e
            }
        },
        t.includes = function(e, t) {
            return -1 !== e.indexOf(t)
        }
        ,
        t.trimAllBlankString = function(e) {
            return e.replace(/\s/g, "")
        }
        ,
        t.compactArray = function(e) {
            var t = [];
            return e.forEach((function(e) {
                return e && t.push(e)
            }
            )),
            t
        }
        ,
        t.isEmpty = function(e) {
            return "object" === (0,
            i.default)(e) ? !(!Array.isArray(e) || 0 !== e.length) || !(!g(e) || 0 !== Object.keys(e).length) : !e
        }
        ,
        t.isEqual = function e(t, n) {
            if (t == n)
                return !0;
            if (t && n && (0,
            i.default)(t) === (0,
            i.default)(n) && "object" === (0,
            i.default)(t)) {
                var r = Object.keys(t)
                  , o = Object.keys(n)
                  , a = r.length;
                if (a !== o.length)
                    return !1;
                for (var s = 0; s < a; s++) {
                    var c = r[s];
                    if (!p.test(c) && !e(t[c], n[c]))
                        return !1
                }
                return !0
            }
            return !1
        }
        ,
        t.mapValue = function(e, t) {
            var n = {};
            for (var r in e)
                n[r] = t(e[r], r, e);
            return n
        }
        ;
        var v, m = (v = (0,
        c.default)("id"),
        function(e) {
            var t = ~~v.get(e);
            return v.set(e, ++t),
            "".concat(e, "_").concat(t)
        }
        );
        t.getUniqueId = m,
        t.matchRegexp = function(e, t) {
            if (e) {
                if (t.global) {
                    for (var n = [], r = t.exec(e); null !== r; )
                        n.push(r && r.slice(1)),
                        r = t.exec(e);
                    return n
                }
                var o = t.exec(e);
                return o ? o.slice(1) : []
            }
        }
        ;
        var g = function(e) {
            return "object" === (0,
            i.default)(e) && e.constructor === Object
        };
        t.isPlainObject = g,
        t.isString = function(e) {
            return "string" == typeof e
        }
        ,
        t.compareComplierVersion = function(e, t) {
            var n = 0;
            for (var r in e.split(".")) {
                var o = e[r]
                  , i = t[r];
                if (o !== i) {
                    if (o < i) {
                        n = -1;
                        break
                    }
                    n = 1;
                    break
                }
            }
            return n
        }
        ,
        t.addScript = function(e) {
            if (e) {
                var t = document.createElement("script");
                return t.src = e,
                t.charset = "UTF-8",
                new Promise((function(e, n) {
                    t.onload = function() {
                        e(),
                        document.body.removeChild(t)
                    }
                    ,
                    t.onerror = function() {
                        n("Get script fail"),
                        document.body.removeChild(t)
                    }
                    ,
                    document.body.appendChild(t)
                }
                ))
            }
        }
        ;
        var y = u.default.log;
        t.sendLog = y,
        t.sendRateLog = function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              , n = arguments.length > 2 ? arguments[2] : void 0
              , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            u.default.log(e, n, f({
                success: t,
                type: "api"
            }, r))
        }
        ,
        t.isNumberLike = function(e) {
            return Number.isFinite(parseFloat(e, 10))
        }
        ,
        t.toNumber = function(e) {
            return parseFloat(e, 10)
        }
    }
    , function(e, t, n) {
        var r = n(7);
        function o() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return o = function() {
                return e
            }
            ,
            e
        }
        e.exports = function(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== r(e) && "function" != typeof e)
                return {
                    default: e
                };
            var t = o();
            if (t && t.has(e))
                return t.get(e);
            var n = {}
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                    s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a]
                }
            return n.default = e,
            t && t.set(e, n),
            n
        }
    }
    , function(e, t, n) {
        var r = n(16)
          , o = n(32)
          , i = n(12)
          , a = n(18);
        e.exports = function(e, t) {
            return r(e) || o(e, t) || i(e, t) || a()
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = r(n(5))
          , i = r(n(6))
          , a = {}
          , s = function() {
            function e() {
                (0,
                o.default)(this, e),
                this.cache = {}
            }
            return (0,
            i.default)(e, [{
                key: "set",
                value: function(e, t) {
                    return this.cache[e] = t,
                    this
                }
            }, {
                key: "get",
                value: function(e) {
                    return this.cache[e]
                }
            }, {
                key: "getAll",
                value: function() {
                    return this.cache
                }
            }]),
            e
        }();
        t.default = function(e) {
            return a[e] || (a[e] = new s(e))
        }
    }
    , function(e) {
        e.exports = function(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
    }
    , function(e) {
        function t(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        e.exports = function(e, n, r) {
            return n && t(e.prototype, n),
            r && t(e, r),
            e
        }
    }
    , function(e) {
        function t(n) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = t = function(e) {
                return typeof e
            }
            : e.exports = t = function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            t(n)
        }
        e.exports = t
    }
    , function(e) {
        e.exports = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ERROR_STORAGE_LS_SET_MAP = t.ERROR_STORAGE_LS_GET_MAP = t.ERROR_STORAGE_IDB_SET_MAP = t.ERROR_STORAGE_IDB_GET_MAP = t.ERROR_DATA_PARSER_PARSE = t.ERROR_DATA_PARSER_GEN_AST = t.ERROR_TEMPLATE_URL_PROCESS = t.ERROR_TEMPLATE_DOWNLOAD = t.ERROR_TEMPLATE_RENDER = void 0,
        t.ERROR_TEMPLATE_RENDER = "template-render",
        t.ERROR_TEMPLATE_DOWNLOAD = "template-download",
        t.ERROR_TEMPLATE_URL_PROCESS = "template-url-process",
        t.ERROR_DATA_PARSER_GEN_AST = "data-parser-gen-ast",
        t.ERROR_DATA_PARSER_PARSE = "data-parser-parse",
        t.ERROR_STORAGE_IDB_GET_MAP = "storage-idb-get-map",
        t.ERROR_STORAGE_IDB_SET_MAP = "storage-idb-set-map",
        t.ERROR_STORAGE_LS_GET_MAP = "storage-ls-get-map",
        t.ERROR_STORAGE_LS_SET_MAP = "storage-ls-set-map"
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getDataParser", {
            enumerable: !0,
            get: function() {
                return l.getDataParser
            }
        }),
        Object.defineProperty(t, "registerDataParser", {
            enumerable: !0,
            get: function() {
                return l.registerDataParser
            }
        }),
        t.unitParser = t.colorParser = t.eventHandlerParser = t.dataParser = void 0;
        var i = o(n(3))
          , a = o(n(4))
          , s = r(n(1))
          , c = o(n(37))
          , u = o(n(40))
          , l = n(14)
          , f = n(24)
          , d = /^([a-zA-Z]\w*?)\s*\((.*?)\)$/
          , p = /^([\-\d\.]+)(np|ap)?$/g
          , h = /^#(?:\w{4}|\w{8})$/
          , v = (0,
        a.default)("data")
          , m = function(e, t) {
            if (e)
                switch (e[0]) {
                case "@":
                    return (0,
                    u.default)(e, t);
                case "$":
                    return (0,
                    c.default)(e, t)
                }
            return e
        };
        t.dataParser = m,
        t.eventHandlerParser = function(e, t) {
            var n = e && "@" === e[0] ? "v2" : "v1"
              , r = v.get(t._tplId);
            return {
                pattern: e,
                options: t,
                handler: function(o) {
                    if (t.event = o,
                    "v1" === n) {
                        var a = s.matchRegexp(e, d);
                        if (a) {
                            var c = (0,
                            i.default)(a, 2)
                              , u = c[0]
                              , l = c[1]
                              , p = (0,
                            f.getEventHandler)(u);
                            if (p) {
                                var h = s.compactArray(s.trimAllBlankString(l).split(",").map((function(e) {
                                    return m(e, t)
                                }
                                )));
                                if (!Array.isArray(p))
                                    return p.call(null, h, r, t);
                                p.map((function(e) {
                                    e.call(null, h, r, t)
                                }
                                ))
                            } else
                                s.log.error("Can't find the given event handler [".concat(u, "], make sure you register it before use"))
                        }
                    } else if ("v2" === n)
                        return m(e, t)
                }
            }
        }
        ,
        t.colorParser = function(e) {
            if (h.test(e)) {
                for (var t = [], n = 9 === e.length ? 2 : 1, r = 1; r < e.length; r += n) {
                    var o = ~~"0x".concat(e.slice(r, r + n));
                    t.push(16 * o * (2 / n - 1) + o)
                }
                return t.push(t.shift() / 255),
                "rgba(".concat(t.join(), ")")
            }
            return e
        }
        ,
        t.unitParser = function(e) {
            var t = s.env
              , n = t.deviceWidth
              , r = t.devicePixelRatio
              , o = t.isIOS;
            return isNaN(e) || (e += "ap"),
            "string" == typeof e ? e.replace(p, (function(e, t, i) {
                if ((t = Number(t)) > 0) {
                    switch (i) {
                    case "np":
                        break;
                    case "ap":
                    default:
                        t = t / 375 * n
                    }
                    t = t < 1 ? t > .5 || 1 === r || !o ? 1 : .5 : s.numTrunc(t)
                }
                return "".concat(t, "px")
            }
            )) : e
        }
    }
    , function(e) {
        e.exports = r
    }
    , function(e, t, n) {
        var r = n(17);
        e.exports = function(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return r(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
            }
        }
    }
    , function(e, t, n) {
        var r = n(33)
          , o = n(19)
          , i = n(12)
          , a = n(34);
        e.exports = function(e) {
            return r(e) || o(e) || i(e) || a()
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getDataParser = t.registerDataParser = void 0;
        var o = r(n(38))
          , i = {};
        t.registerDataParser = function(e, t) {
            i[e] = t
        }
        ,
        t.getDataParser = function(e) {
            return i[e] || o.default[e]
        }
    }
    , function(e) {
        e.exports = function(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
    }
    , function(e) {
        e.exports = function(e) {
            if (Array.isArray(e))
                return e
        }
    }
    , function(e) {
        e.exports = function(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
    }
    , function(e) {
        e.exports = function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
    }
    , function(e) {
        e.exports = function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(8))
          , a = o(n(5))
          , s = o(n(6))
          , c = r(n(1));
        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach((function(t) {
                    (0,
                    i.default)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var f = new (function() {
            function e() {
                (0,
                a.default)(this, e),
                this.errorCallback = [],
                this.defaultReport = !0,
                this.extraInfo = "",
                window.JSTracker2 && (this.jsTracker = new JSTracker2.constructor({
                    url: "dinamicx"
                }))
            }
            return (0,
            s.default)(e, [{
                key: "config",
                value: function(e) {
                    var t = e.extraInfo
                      , n = void 0 === t ? "" : t
                      , r = e.defaultReport
                      , o = void 0 === r || r;
                    if ("string" != typeof n)
                        return c.log.error("extraInfo must be string!");
                    this.extraInfo = n,
                    this.defaultReport = o
                }
            }, {
                key: "report",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.defaultReport && this.jsTracker && this.jsTracker.push({
                        msg: JSON.stringify(l({
                            error: e && e.stack || e,
                            extraInfo: this.extraInfo
                        }, t))
                    }),
                    this.errorCallback.forEach((function(e) {
                        e(info)
                    }
                    ))
                }
            }, {
                key: "log",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    c.log.warn("send log - [".concat(e, "]"), t, n),
                    this.defaultReport && this.jsTracker && this.jsTracker.push(l({
                        url: "dinamicx/log/" + e,
                        msg: JSON.stringify(t),
                        sampling: 1
                    }, n))
                }
            }, {
                key: "addErrorListener",
                value: function(e) {
                    if ("function" != typeof e)
                        return c.log.error("callback must be function!");
                    this.errorCallback.push(e)
                }
            }]),
            e
        }());
        t.default = f
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = t.STORAGE_TEMPLATE = t.initIndexedDB = t.initLocalStorage = void 0;
        var i = o(n(5))
          , a = o(n(6))
          , s = o(n(8))
          , c = o(n(3))
          , u = r(n(1))
          , l = n(22)
          , f = n(9);
        function d(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        var p, h, v = function() {
            return p.getTemplateMap().then((function(e) {
                return Object.assign(g, e)
            }
            ))
        }, m = function() {
            p = n(35).default,
            h = v()
        };
        t.initLocalStorage = m,
        t.initIndexedDB = function() {
            (0,
            l.isIndexedDBValid)() ? (p = n(36).default,
            h = v()) : u.log.warn("\u5f53\u524d\u8bbe\u5907\u4e0d\u652f\u6301 indexedDB")
        }
        ,
        m();
        var g = {};
        t.STORAGE_TEMPLATE = g;
        var y = /rapid-oss-bucket\/?(publish|debug|preview)?\/(\d+)\/(.*?)\.(?:js|zip)/
          , b = /\/(?:v-)?(\d+)\/(.*?)_(h5|ios|android)\.(?:plist|js|xml)/
          , w = window.d_tpl = window.d_tpl || {};
        function _(e) {
            var t = y.exec(e);
            if (t)
                var n = (0,
                c.default)(t, 4)
                  , r = n[1]
                  , o = void 0 === r ? "" : r
                  , i = n[2]
                  , a = n[3]
                  , s = "h5_3+";
            else {
                var l = b.exec(e);
                if (!l)
                    throw new Error("Fail to parse template: ".concat(e));
                var f = (0,
                c.default)(l, 4);
                i = f[1],
                a = f[2],
                s = f[3]
            }
            var d = {
                name: a,
                version: i,
                env: o
            };
            return "h5_3+" === s ? d.url = "https://s.alicdn.com/@dxconfig/rapid-oss-bucket/".concat(o, "/").concat(i, "/").concat(a, ".js") : "h5" === s ? u.includes(e, "g.alicdn") ? (d.shouldCombo = !0,
            d.url = "".concat(a, "/").concat(i, "/").concat(a, "_h5.js")) : d.url = e : a && i && (d.url = "https://s.alicdn.com/@dxconfig/rapid-oss-bucket/template_online/".concat(a, "/").concat(i, "/").concat(a, "_h5.js")),
            d
        }
        function O(e, t) {
            return {
                template: e,
                tplNodeTree: t
            }
        }
        function x(e, t) {
            var n = e.name
              , r = w[n];
            return r ? g[n] = t[n] = {
                name: n,
                content: r,
                version: e.version
            } : u.log.error("empty template content", null, !0),
            O(e, r)
        }
        var S = []
          , k = {};
        function P(e) {
            var t = e.name
              , n = k[t] || {}
              , r = n.version
              , o = n.downloadTask;
            if (r >= e.version)
                return o;
            var i = new Promise((function(t, n) {
                S.push(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? d(Object(n), !0).forEach((function(t) {
                            (0,
                            s.default)(e, t, n[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                        ))
                    }
                    return e
                }({
                    onFinish: t,
                    onError: n
                }, e))
            }
            ));
            return k[t] = {
                version: e.version,
                downloadTask: i
            },
            i
        }
        var E, j = function() {
            E && clearTimeout(E),
            E = window.setTimeout((function() {
                var e, t;
                (e = {},
                t = [],
                h.then((function(n) {
                    return Promise.all(S.map((function(r) {
                        var o = r.url
                          , i = r.name
                          , a = r.version
                          , s = r.shouldCombo
                          , c = r.onFinish
                          , l = r.onError
                          , d = n[i];
                        if (d && d.version >= a)
                            c(O(r, d.content));
                        else {
                            if (!s)
                                return u.addScript(o).then((function() {
                                    return u.sendRateLog("download", !0, {
                                        templateUrl: o
                                    }),
                                    x(r, e)
                                }
                                )).then((function(e) {
                                    return c(e)
                                }
                                )).catch((function(e) {
                                    u.log.error(e, {
                                        type: f.ERROR_TEMPLATE_DOWNLOAD,
                                        templateUrl: o
                                    }),
                                    u.sendRateLog("download", !1, {
                                        templateUrl: o
                                    }),
                                    l(e)
                                }
                                ));
                            t.push(r)
                        }
                    }
                    )))
                }
                )).then((function() {
                    if (t.length > 0) {
                        var n = "https://g.alicdn.com/code/dinamic-publish/??" + t.map((function(e) {
                            return e.url
                        }
                        )).join(",");
                        return u.addScript(n).then((function() {
                            t.forEach((function(t) {
                                u.sendRateLog("download", !0, {
                                    templateUrl: t.url
                                });
                                var n = x(t, e);
                                t.onFinish(n)
                            }
                            ))
                        }
                        )).catch((function(e) {
                            u.log.error(e, {
                                type: f.ERROR_TEMPLATE_DOWNLOAD,
                                templateUrl: n
                            }),
                            t.forEach((function(t) {
                                u.sendRateLog("download", !1, {
                                    templateUrl: t.url
                                }),
                                t.onError(e)
                            }
                            ))
                        }
                        ))
                    }
                }
                )).then((function() {
                    return p.setTemplateMap(e)
                }
                ))).then((function() {
                    return S = [],
                    void (k = {})
                }
                ))
            }
            ), 0)
        }, C = function() {
            function e() {
                (0,
                i.default)(this, e)
            }
            return (0,
            a.default)(e, null, [{
                key: "add",
                value: function(t) {
                    var n = e.processTplUrl(t);
                    if (n)
                        return h.then((function(e) {
                            var t = n.name
                              , r = n.version
                              , o = e[t];
                            return o && o.version >= r ? O(n, o.content) : (j(),
                            P(n))
                        }
                        ))
                }
            }, {
                key: "processTplUrl",
                value: function(e) {
                    var t;
                    try {
                        t = _(e)
                    } catch (t) {
                        u.log.error(t, {
                            type: f.ERROR_TEMPLATE_URL_PROCESS,
                            templateUrl: e
                        })
                    }
                    return t
                }
            }, {
                key: "getCache",
                value: function(e) {
                    var t = g[e.name];
                    if (t && t.version >= e.version)
                        return t.content
                }
            }, {
                key: "setCache",
                value: function(e) {
                    e.forEach((function(e) {
                        var t = e.name
                          , n = e.version
                          , r = e.content;
                        g[t] = {
                            name: t,
                            version: n,
                            content: r
                        }
                    }
                    ))
                }
            }, {
                key: "registerTplUrlProcessor",
                value: function(e) {
                    if ("function" != typeof e)
                        throw new Error("Invalid Tpl Url Processor");
                    _ = e
                }
            }]),
            e
        }();
        t.default = C
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isIndexedDBValid = function() {
            try {
                if (!n)
                    return !1;
                var e = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform)
                  , t = "function" == typeof fetch;
                return (!e || t) && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange
            } catch (e) {
                return !1
            }
        }
        ,
        t.idb = void 0;
        var n = function() {
            try {
                if (void 0 !== window.indexedDB)
                    return window.indexedDB;
                if (void 0 !== window.webkitIndexedDB)
                    return window.webkitIndexedDB;
                if (void 0 !== window.mozIndexedDB)
                    return window.mozIndexedDB;
                if (void 0 !== window.OIndexedDB)
                    return window.OIndexedDB;
                if (void 0 !== window.msIndexedDB)
                    return window.msIndexedDB
            } catch (e) {
                return !1
            }
        }();
        t.idb = n
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(3))
          , a = o(n(13))
          , s = o(n(5))
          , c = o(n(6))
          , u = o(n(4))
          , l = r(n(1))
          , f = (0,
        u.default)("ravel")
          , d = function() {
            function e() {
                (0,
                s.default)(this, e)
            }
            return (0,
            c.default)(e, null, [{
                key: "bind",
                value: function(e, t, n) {
                    var r = f.get(t) || [];
                    f.set(t, [[e, n]].concat((0,
                    a.default)(r)))
                }
            }, {
                key: "setData",
                value: function(e, t) {
                    var n = f.get(e);
                    n || console.error("Can't find context bind with the name (\"".concat(e, '") !')),
                    Array.isArray(n) && n.forEach((function(e) {
                        var n = (0,
                        i.default)(e, 2)
                          , r = n[0]
                          , o = n[1]
                          , a = {};
                        l.mapValue(t, (function(e, t) {
                            var n = o[t];
                            n && (n in r && (r[n] = e),
                            r.state && n in r.state && (a[n] = e))
                        }
                        )),
                        l.isEmpty(a) ? r.forceUpdate() : r.setState(a)
                    }
                    ))
                }
            }, {
                key: "getContext",
                value: function(e) {
                    return (f.get(e) || [])[0]
                }
            }]),
            e
        }();
        t.default = d
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getEventHandler = f,
        t.registerEventHandler = d;
        var o = r(n(13))
          , i = r(n(3))
          , a = r(n(4))
          , s = n(10)
          , c = n(1)
          , u = (0,
        a.default)("handler")
          , l = {
            _openUrl: function(e) {
                var t = (0,
                i.default)(e, 1)[0];
                window.dispatchEvent(new Event("page:jump")),
                window.location.href = t
            }
        };
        function f(e) {
            return u.get(e)
        }
        function d(e, t) {
            var n = f(e)
              , r = t;
            n && (r = Array.isArray(n) ? [].concat((0,
            o.default)(n), [t]) : [n, t]),
            u.set(e, r),
            (0,
            s.registerDataParser)(e, t)
        }
        setTimeout((function() {
            (0,
            c.mapValue)(l, (function(e, t) {
                return d(t, e)
            }
            ))
        }
        ), 0)
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getGlobalConfig = t.setGlobalConfig = void 0;
        var n = {
            shouldSplitLayoutTask: !0,
            shouldExecLinearLayoutHack: !0,
            forcePcMode: !1,
            disableEventBinding: !1,
            forceOriginalImg: !1,
            enableLazyload: !1
        };
        t.setGlobalConfig = function(e, t) {
            ("enableLazyload" !== e || "IntersectionObserver"in window && "IntersectionObserverEntry"in window && "intersectionRatio"in window.IntersectionObserverEntry.prototype) && (n[e] = t)
        }
        ,
        t.getGlobalConfig = function(e) {
            return n[e]
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "h", {
            enumerable: !0,
            get: function() {
                return i.createElement
            }
        }),
        Object.defineProperty(t, "Component", {
            enumerable: !0,
            get: function() {
                return i.Component
            }
        }),
        Object.defineProperty(t, "getView", {
            enumerable: !0,
            get: function() {
                return a.getView
            }
        }),
        Object.defineProperty(t, "registerView", {
            enumerable: !0,
            get: function() {
                return a.registerView
            }
        }),
        Object.defineProperty(t, "Template", {
            enumerable: !0,
            get: function() {
                return a.Template
            }
        }),
        Object.defineProperty(t, "addTemplatePlugins", {
            enumerable: !0,
            get: function() {
                return a.addTemplatePlugins
            }
        }),
        Object.defineProperty(t, "Fragment", {
            enumerable: !0,
            get: function() {
                return a.Fragment
            }
        }),
        Object.defineProperty(t, "setDeviceWidth", {
            enumerable: !0,
            get: function() {
                return a.setDeviceWidth
            }
        }),
        Object.defineProperty(t, "getDataParser", {
            enumerable: !0,
            get: function() {
                return s.getDataParser
            }
        }),
        Object.defineProperty(t, "registerDataParser", {
            enumerable: !0,
            get: function() {
                return s.registerDataParser
            }
        }),
        Object.defineProperty(t, "dataParser", {
            enumerable: !0,
            get: function() {
                return s.dataParser
            }
        }),
        Object.defineProperty(t, "colorParser", {
            enumerable: !0,
            get: function() {
                return s.colorParser
            }
        }),
        Object.defineProperty(t, "unitParser", {
            enumerable: !0,
            get: function() {
                return s.unitParser
            }
        }),
        Object.defineProperty(t, "eventHandlerParser", {
            enumerable: !0,
            get: function() {
                return s.eventHandlerParser
            }
        }),
        Object.defineProperty(t, "Ravel", {
            enumerable: !0,
            get: function() {
                return c.default
            }
        }),
        Object.defineProperty(t, "getLocalImage", {
            enumerable: !0,
            get: function() {
                return u.getLocalImage
            }
        }),
        Object.defineProperty(t, "setLocalImage", {
            enumerable: !0,
            get: function() {
                return u.setLocalImage
            }
        }),
        Object.defineProperty(t, "getEventHandler", {
            enumerable: !0,
            get: function() {
                return l.getEventHandler
            }
        }),
        Object.defineProperty(t, "registerEventHandler", {
            enumerable: !0,
            get: function() {
                return l.registerEventHandler
            }
        }),
        Object.defineProperty(t, "setGlobalConfig", {
            enumerable: !0,
            get: function() {
                return f.setGlobalConfig
            }
        }),
        Object.defineProperty(t, "getGlobalConfig", {
            enumerable: !0,
            get: function() {
                return f.getGlobalConfig
            }
        }),
        Object.defineProperty(t, "Downloader", {
            enumerable: !0,
            get: function() {
                return d.default
            }
        }),
        Object.defineProperty(t, "initIndexedDB", {
            enumerable: !0,
            get: function() {
                return d.initIndexedDB
            }
        }),
        Object.defineProperty(t, "initLocalStorage", {
            enumerable: !0,
            get: function() {
                return d.initLocalStorage
            }
        }),
        Object.defineProperty(t, "tracker", {
            enumerable: !0,
            get: function() {
                return p.default
            }
        }),
        Object.defineProperty(t, "render", {
            enumerable: !0,
            get: function() {
                return v.render
            }
        }),
        Object.defineProperty(t, "driver", {
            enumerable: !0,
            get: function() {
                return v.driver
            }
        }),
        Object.defineProperty(t, "setDriver", {
            enumerable: !0,
            get: function() {
                return v.setDriver
            }
        }),
        t.utils = t.default = void 0;
        var i = n(11)
          , a = n(27)
          , s = n(10)
          , c = o(n(23))
          , u = n(41)
          , l = n(24)
          , f = n(25)
          , d = r(n(21))
          , p = o(n(20))
          , h = r(n(1));
        t.utils = h;
        var v = n(42)
          , m = {
            h: i.createElement,
            render: v.render,
            Component: i.Component,
            driver: v.driver,
            setDriver: v.setDriver,
            getView: a.getView,
            registerView: a.registerView,
            Template: a.Template,
            addTemplatePlugins: a.addTemplatePlugins,
            Fragment: a.Fragment,
            getDataParser: s.getDataParser,
            registerDataParser: s.registerDataParser,
            dataParser: s.dataParser,
            colorParser: s.colorParser,
            unitParser: s.unitParser,
            eventHandlerParser: s.eventHandlerParser,
            getLocalImage: u.getLocalImage,
            setLocalImage: u.setLocalImage,
            getEventHandler: l.getEventHandler,
            registerEventHandler: l.registerEventHandler,
            Downloader: d.default,
            initIndexedDB: d.initIndexedDB,
            initLocalStorage: d.initLocalStorage,
            tracker: p.default,
            Ravel: c.default,
            setGlobalConfig: f.setGlobalConfig,
            getGlobalConfig: f.getGlobalConfig,
            utils: h
        };
        t.default = m
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getView = T,
        t.registerView = function(e, t) {
            k.set(e, t)
        }
        ,
        t.addTemplatePlugins = function(e) {
            Array.isArray(e) && e.forEach((function(e) {
                h.isPlainObject(e) && P.push(e)
            }
            ))
        }
        ,
        t.setDeviceWidth = function(e) {
            h.env.deviceWidth = e;
            var t = document.createElement("style");
            t.innerHTML = ".tpl-wrapper{max-width: ".concat(e, "px}"),
            document.head.appendChild(t)
        }
        ,
        t.Fragment = function(e) {
            return e.children
        }
        ,
        t.Template = void 0;
        var i = o(n(5))
          , a = o(n(6))
          , s = o(n(15))
          , c = o(n(28))
          , u = o(n(30))
          , l = o(n(31))
          , f = o(n(8))
          , d = o(n(3))
          , p = n(11)
          , h = r(n(1))
          , v = o(n(4))
          , m = o(n(21))
          , g = o(n(23))
          , y = n(10)
          , b = n(25)
          , w = n(9);
        function _(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                l.default)(e);
                if (t) {
                    var o = (0,
                    l.default)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                u.default)(this, n)
            }
        }
        function O(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function x(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? O(Object(n), !0).forEach((function(t) {
                    (0,
                    f.default)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var S = (0,
        v.default)("data")
          , k = (0,
        v.default)("view")
          , P = []
          , E = /^[d][A-Z]/
          , j = /^[A-Z]{2}[0-9a-z_\-]/;
        function C(e) {
            return j.test(e) ? e.slice(1) : e
        }
        function A(e, t) {
            return Array.isArray(t) && (t = t[0] || {}),
            S.set(e, t),
            t
        }
        function T(e) {
            return k.get(e)
        }
        function R() {
            (0,
            b.getGlobalConfig)("enableForceUpdate") ? this.componentIdSeq = this.componentIdSeq || 0 : this.componentIdSeq = 0,
            this.componentIndexSet = []
        }
        function I(e, t) {
            var n = this;
            if (h.isPlainObject(e)) {
                var r = {};
                return h.mapValue(e, (function(e, o) {
                    if ("h5RavelBind" === o) {
                        var i = e.split("|")
                          , a = (0,
                        d.default)(i, 2)
                          , s = a[0]
                          , c = a[1];
                        g.default.bind(n, t._tplId, (0,
                        f.default)({}, s, c))
                    }
                    if ("on" === o.slice(0, 2))
                        r[o] = (0,
                        y.eventHandlerParser)(e, t);
                    else {
                        var u = o;
                        E.test(o) && (u = function(e) {
                            var t = e.slice(1);
                            return e = t[0].toLowerCase() + t.slice(1)
                        }(o)),
                        r[u] = (0,
                        y.dataParser)(e, t)
                    }
                }
                )),
                r
            }
            return {}
        }
        function N(e) {
            var t = this
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , r = arguments.length > 2 ? arguments[2] : void 0
              , o = arguments.length > 3 ? arguments[3] : void 0
              , i = r._tplId
              , a = e.bizCode && e.template ? "3.0.0" : "0.0.0"
              , s = h.compareComplierVersion(a, "3.0.0") >= 0;
            return function e(a, s) {
                return a.map((function() {
                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , c = T(a.name);
                    if ("Children" === a.name && o)
                        return o;
                    if (c) {
                        var u = "c".concat(++t.componentIdSeq)
                          , l = {
                            key: u,
                            _id: u,
                            _tplId: i,
                            _tplName: r._tplName,
                            _tplContext: r._context,
                            _viewName: C(a.name),
                            _originProps: a.attrs
                        }
                          , f = x(x(x({}, I.call(t, a.attrs, x({
                            data: n
                        }, l))), l), {}, {
                            childrenLen: Array.isArray(a.children) ? a.children.length : 0
                        });
                        return t.componentIndexSet.push({
                            id: u,
                            props: f,
                            pid: s ? s._id : null
                        }),
                        (0,
                        p.createElement)(c, f, a.children && e(a.children, l))
                    }
                    h.log.error(new Error("View not found"), {
                        viewName: a.name
                    })
                }
                ))
            }(s ? e.template : e)
        }
        var D = function(e) {
            (0,
            c.default)(n, e);
            var t = _(n);
            function n(e) {
                var r;
                (0,
                i.default)(this, n),
                r = t.call(this, e),
                (0,
                f.default)((0,
                s.default)(r), "connectLazyObserver", (function() {
                    var e = r.shadow.options._tplId;
                    if (e) {
                        var t = new IntersectionObserver((function(e) {
                            e.some((function(e) {
                                return e.intersectionRatio > 0
                            }
                            )) && (r.lazyRender = !1,
                            r.forceUpdate(),
                            t.disconnect())
                        }
                        ));
                        t.observe(document.querySelector("div[".concat("data-tpl-id", "=").concat(e, "]")))
                    } else
                        h.log.warn("Cannot get template id")
                }
                )),
                r.lazyRender = (0,
                b.getGlobalConfig)("enableLazyload");
                var o = e.url
                  , a = e.tpl
                  , c = e.data
                  , u = e.templateName
                  , l = e.customTemplateId
                  , d = o ? m.default.processTplUrl(o) : {}
                  , p = l || function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return h.getUniqueId(e.templateName || h.deepGet(e, "template.name") || "dt")
                }(c);
                return c = A(p, c),
                r.shadow = {
                    tpl: a || m.default.getCache(d),
                    data: c,
                    options: {
                        _context: (0,
                        s.default)(r),
                        _tplId: p,
                        _tplName: u || d.name || p
                    }
                },
                r.bindLifeCycleEvent(),
                r
            }
            return (0,
            a.default)(n, [{
                key: "bindLifeCycleEvent",
                value: function() {
                    var e = function() {}
                      , t = this.props
                      , n = t.componentWillBindEvent
                      , r = void 0 === n ? e : n
                      , o = t.componentFinishFirstPaint
                      , i = void 0 === o ? e : o
                      , a = t.templateWillDownload
                      , s = void 0 === a ? e : a
                      , c = t.templateFinishDownload
                      , u = void 0 === c ? e : c
                      , l = t.templateDownloadError
                      , f = void 0 === l ? e : l
                      , d = t.templateWillRender
                      , p = void 0 === d ? e : d
                      , v = t.templateFinishCreateViews
                      , m = void 0 === v ? e : v
                      , g = t.templateFinishFirstPaint
                      , y = void 0 === g ? e : g
                      , b = t.templateFinishUpdate
                      , w = void 0 === b ? e : b;
                    this.lifeCycles = h.mapValue({
                        componentWillBindEvent: r,
                        componentFinishFirstPaint: i,
                        templateWillDownload: s,
                        templateFinishDownload: u,
                        templateDownloadError: f,
                        templateWillRender: p,
                        templateFinishCreateViews: m,
                        templateFinishFirstPaint: y,
                        templateFinishUpdate: w
                    }, (function(e, t) {
                        return function() {
                            for (var n = this, r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                                o[i] = arguments[i];
                            return P.forEach((function(e) {
                                var r = e[t];
                                r && r.apply(n, o)
                            }
                            )),
                            e.apply(this, o)
                        }
                    }
                    ))
                }
            }, {
                key: "componentDidCatch",
                value: function(e) {
                    var t = this.shadow.options._tplId;
                    h.log.error(e, {
                        type: w.ERROR_TEMPLATE_RENDER,
                        templateId: t
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var e = this.lifeCycles
                      , t = e.templateFinishFirstPaint
                      , n = e.templateFinishUpdate;
                    this.shadow.tpl && (this.firstPaint ? n.call(this, this.shadow) : (t.call(this, this.shadow),
                    this.firstPaint = !0))
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = this.lifeCycles.templateFinishFirstPaint;
                    this.shadow.tpl ? (e.call(this, this.shadow),
                    this.firstPaint = !0) : this.rerenderTemplateByUrl(this.props.url),
                    this.lazyRender && this.connectLazyObserver()
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e) {
                    var t = e.data
                      , n = e.url
                      , r = this.props
                      , o = r.data
                      , i = !1;
                    return r.url !== n && (this.rerenderTemplateByUrl(n, !0),
                    i = !0),
                    t !== o && (this.rerenderTemplateByData(t),
                    i = !0),
                    i
                }
            }, {
                key: "rerenderTemplateByData",
                value: function(e) {
                    e = A(this.shadow.options._tplId, e),
                    this.shadow.data = e
                }
            }, {
                key: "rerenderTemplateByUrl",
                value: function(e, t) {
                    var n = this
                      , r = this.shadow
                      , o = r.tpl
                      , i = (r.data,
                    r.options);
                    if (e && (!o || t)) {
                        var a = this.lifeCycles
                          , s = a.templateWillDownload
                          , c = a.templateFinishDownload
                          , u = a.templateDownloadError;
                        s.call(this, this.shadow),
                        m.default.add(e).then((function(e) {
                            var t = e.tplNodeTree
                              , r = e.template;
                            i._template = r,
                            c.call(n, n.shadow),
                            t && (n.shadow.tpl = t,
                            n.forceUpdate())
                        }
                        )).catch((function(e) {
                            u(e)
                        }
                        ))
                    }
                }
            }, {
                key: "renderTemplateWrapper",
                value: function(e) {
                    var t, n = this.props, r = n.style, o = n.className, i = n.extraAttrs, a = this.shadow, s = a.options, c = a.tpl, u = s._tplId, l = function(e) {
                        var t = Array.isArray(e) ? e[0] : e
                          , n = "500px";
                        return t && t.attrs && t.attrs.defaultHeight && (n = (0,
                        y.unitParser)(t.attrs.defaultHeight) || n),
                        n
                    }(c), d = (t = {
                        "data-spm": u
                    },
                    (0,
                    f.default)(t, "data-tpl-id", u),
                    (0,
                    f.default)(t, "className", "tpl-wrapper"),
                    t);
                    return this.lazyRender && (this.props.placeholder && "function" == typeof this.props.placeholder ? e = (0,
                    p.createElement)(this.props.placeholder, {
                        defaultHeight: l,
                        tpl: c,
                        data: this.props.data
                    }) : d.style = {
                        height: l
                    }),
                    o && (d.className += " " + o),
                    h.isPlainObject(r) && (d.style = r),
                    h.isPlainObject(i) && Object.assign(d, i),
                    (0,
                    p.createElement)("div", d, e)
                }
            }, {
                key: "renderViews",
                value: function(e) {
                    var t = this.shadow
                      , n = t.data
                      , r = t.options
                      , o = this.props.children;
                    return e ? (R.call(this),
                    N.call(this, e, n, r, o)) : null
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.shadow.tpl
                      , t = this.lifeCycles
                      , n = t.templateWillRender
                      , r = t.templateFinishCreateViews;
                    n.call(this, this.shadow);
                    var o = this.lazyRender ? null : this.renderViews(e)
                      , i = this.renderTemplateWrapper(o);
                    return r.call(this, this.shadow),
                    i
                }
            }]),
            n
        }(p.Component);
        t.Template = D
    }
    , function(e, t, n) {
        var r = n(29);
        e.exports = function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && r(e, t)
        }
    }
    , function(e) {
        function t(n, r) {
            return e.exports = t = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            t(n, r)
        }
        e.exports = t
    }
    , function(e, t, n) {
        var r = n(7)
          , o = n(15);
        e.exports = function(e, t) {
            return !t || "object" !== r(t) && "function" != typeof t ? o(e) : t
        }
    }
    , function(e) {
        function t(n) {
            return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            t(n)
        }
        e.exports = t
    }
    , function(e) {
        e.exports = function(e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var n = []
                  , r = !0
                  , o = !1
                  , i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    o = !0,
                    i = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (o)
                            throw i
                    }
                }
                return n
            }
        }
    }
    , function(e, t, n) {
        var r = n(17);
        e.exports = function(e) {
            if (Array.isArray(e))
                return r(e)
        }
    }
    , function(e) {
        e.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(7))
          , a = r(n(1))
          , s = n(9)
          , c = window.localStorage;
        function u(e) {
            var t = c.getItem(e);
            return t ? "object" === (t = JSON.parse(t)).t ? JSON.parse(t.v) : t.v : t
        }
        function l(e, t) {
            a.isPlainObject(t) ? c.setItem(e, JSON.stringify({
                t: "object",
                v: JSON.stringify(t)
            })) : c.setItem(e, JSON.stringify({
                t: (0,
                i.default)(t),
                v: t
            }))
        }
        t.default = {
            setTemplateMap: function(e) {
                try {
                    var t = u("tpl$TplNameList");
                    t = t ? t.split("$") : [],
                    a.mapValue(e, (function(e) {
                        var n = e.name;
                        l("tpl-".concat(n), e),
                        t.push(n)
                    }
                    )),
                    l("tpl$TplNameList", t.join("$"))
                } catch (e) {
                    a.log.error(e, {
                        type: s.ERROR_STORAGE_LS_SET_MAP
                    })
                }
                return Promise.resolve([])
            },
            getTemplateMap: function() {
                var e = {};
                try {
                    var t = u("tpl$TplNameList");
                    t && (t = t.split("$")).forEach((function(t) {
                        var n = u("tpl-".concat(t));
                        e[t] = n
                    }
                    ))
                } catch (e) {
                    a.log.error(e, {
                        type: s.ERROR_STORAGE_LS_GET_MAP
                    })
                }
                return Promise.resolve(e)
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = r(n(1))
          , i = n(22)
          , a = n(9)
          , s = i.idb.open("DinamicX", 2)
          , c = new Promise((function(e) {
            s.onupgradeneeded = function(t) {
                var n = s.result
                  , r = t.target.transaction;
                n.createObjectStore("template", {
                    keyPath: "name"
                }),
                r.oncomplete = function() {
                    return e(n)
                }
            }
            ,
            s.onsuccess = function() {
                return e(s.result)
            }
        }
        ))
          , u = function(e) {
            return e.transaction("template", "readwrite").objectStore("template")
        };
        t.default = {
            setTemplateMap: function(e) {
                return c.then((function(t) {
                    var n = u(t)
                      , r = [];
                    return o.mapValue(e, (function(e) {
                        var t;
                        r.push((t = n.put(e),
                        new Promise((function(e, n) {
                            t.onsuccess = e,
                            t.onerror = n
                        }
                        ))).catch((function(t) {
                            o.log.error(t, {
                                type: a.ERROR_STORAGE_IDB_SET_MAP,
                                templateId: e.name,
                                templateVersion: e.version
                            })
                        }
                        )))
                    }
                    )),
                    Promise.all(r)
                }
                ))
            },
            getTemplateMap: function() {
                return c.then((function(e) {
                    var t = u(e).openCursor();
                    return new Promise((function(e, n) {
                        var r = {};
                        t.onsuccess = function(t) {
                            var n = t.target.result;
                            if (n) {
                                var o = n.value;
                                r[o.name] = o,
                                n.continue()
                            } else
                                e(r)
                        }
                        ,
                        t.onerror = n
                    }
                    )).catch((function(e) {
                        o.log.error(e, {
                            type: a.ERROR_STORAGE_IDB_GET_MAP
                        })
                    }
                    ))
                }
                ))
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(3))
          , a = o(n(4))
          , s = r(n(1))
          , c = n(14)
          , u = /\$(\w+)\{(.+?)\}/g
          , l = (0,
        a.default)("data");
        t.default = function(e, t) {
            var n = t.data || l.get(t.tplId)
              , r = ""
              , o = s.matchRegexp(e, u);
            return Array.isArray(o) && o.length > 0 ? (o.every((function(e) {
                var o = (0,
                i.default)(e, 2)
                  , a = o[0]
                  , s = o[1].split(",")
                  , u = (0,
                c.getDataParser)(a);
                return u && (r = u.call(t.context, s, n, t)),
                !r
            }
            )),
            r) : e
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(39))
          , a = o(n(7))
          , s = o(n(3))
          , c = r(n(1))
          , u = n(10)
          , l = {}
          , f = function(e) {
            return !("false" === e || !1 === e || "0" === e || !e || Array.isArray(e) && 0 === e.length)
        }
          , d = function(e) {
            return function(t) {
                return 1 === t.length && c.isNumberLike(t[0]) ? e(t[0]) : 0
            }
        }
          , p = function(e) {
            return function(t) {
                var n = (0,
                s.default)(t, 2)
                  , r = n[0]
                  , o = n[1];
                return c.isNumberLike(r) && c.isNumberLike(o) ? e([c.toNumber(r), c.toNumber(o)]) : c.isNumberLike(r) ? c.toNumber(r) : c.isNumberLike(o) ? c.toNumber(o) : 0
            }
        }
          , h = function(e) {
            return function(t) {
                var n = (0,
                s.default)(t, 2)
                  , r = n[0]
                  , o = n[1];
                return 0 === c.toNumber(o) ? 0 : e([c.toNumber(r), c.toNumber(o)])
            }
        };
        l.if = function(e) {
            var t = (0,
            s.default)(e, 2)
              , n = t[0]
              , r = t[1];
            return f(n) && r
        }
        ,
        l.else = function(e) {
            return (0,
            s.default)(e, 1)[0]
        }
        ,
        l.not = function(e) {
            var t = (0,
            s.default)(e, 1)[0];
            return !f(t)
        }
        ,
        l.and = function(e) {
            return e.reduce((function(e, t) {
                return f(e) && f(t)
            }
            ))
        }
        ,
        l.or = function(e) {
            return e.reduce((function(e, t) {
                return f(e) || f(t)
            }
            ))
        }
        ,
        l.triple = function(e) {
            var t = (0,
            s.default)(e, 3)
              , n = t[0]
              , r = t[1]
              , o = t[2];
            return f(n) ? r : o
        }
        ,
        l.equal = function(e) {
            var t = (0,
            s.default)(e, 2)
              , n = t[0]
              , r = t[1];
            return c.isEqual(n, r)
        }
        ,
        l.array_get = function(e) {
            var t = (0,
            s.default)(e, 2)
              , n = t[0]
              , r = t[1];
            return !Array.isArray(n) || isNaN(r) ? null : n[~~r]
        }
        ,
        l.index_of = function(e) {
            var t = (0,
            s.default)(e, 3)
              , n = t[0]
              , r = void 0 === n ? [] : n
              , o = t[1];
            if (t[2],
            !Array.isArray(r))
                return null;
            var i = -1;
            if ("object" === (0,
            a.default)(o)) {
                var u = "";
                try {
                    u = JSON.stringify(o)
                } catch (e) {
                    c.log.error(e)
                }
                var l = [];
                try {
                    r.map((function(e) {
                        l.push(JSON.stringify(e))
                    }
                    ))
                } catch (e) {
                    c.log.error(e)
                }
                i = l.indexOf(u)
            } else
                i = r.indexOf(o);
            return -1 === i ? null : i
        }
        ,
        l.array_find = function(e) {
            var t = (0,
            s.default)(e, 2)
              , n = t[0]
              , r = t[1];
            if (!Array.isArray(n))
                return null;
            var o = n.indexOf(r);
            return -1 === o ? null : n[o]
        }
        ,
        l.dict_get = function(e) {
            var t = (0,
            s.default)(e, 2)
              , n = t[0]
              , r = t[1];
            return n && n[r]
        }
        ,
        l.data = function(e, t) {
            var n = (0,
            s.default)(e, 1)[0];
            return n ? c.deepGet(t, n) : t
        }
        ,
        l.lowercase = function(e) {
            var t = (0,
            s.default)(e, 1)[0];
            return c.isString(t) ? t.toLowerCase() : t
        }
        ,
        l.uppercase = function(e) {
            var t = (0,
            s.default)(e, 1)[0];
            return c.isString(t) ? t.toUpperCase() : t
        }
        ,
        l.substr = function(e) {
            var t = (0,
            s.default)(e, 3)
              , n = t[0]
              , r = t[1]
              , o = t[2];
            return c.isString(n) ? n.substr(r >= 0 ? r : 0, o) : n
        }
        ,
        l.concat = function(e) {
            return e.reduce((function(e, t) {
                return (e || "") + (t || "")
            }
            ))
        }
        ,
        l.trim = function(e) {
            var t = (0,
            s.default)(e, 1)[0];
            return c.isString(t) ? t.trim() : t
        }
        ,
        l.iequal = function(e) {
            var t = (0,
            s.default)(e, 2);
            return t[0] === t[1]
        }
        ,
        l.iless = function(e) {
            var t = (0,
            s.default)(e, 2);
            return t[0] < t[1]
        }
        ,
        l.igreater = function(e) {
            var t = (0,
            s.default)(e, 2);
            return t[0] > t[1]
        }
        ,
        l.iless_equal = function(e) {
            var t = (0,
            s.default)(e, 2);
            return t[0] <= t[1]
        }
        ,
        l.igreater_equal = function(e) {
            var t = (0,
            s.default)(e, 2);
            return t[0] >= t[1]
        }
        ,
        l.add = p((function(e) {
            var t = (0,
            s.default)(e, 2);
            return t[0] + t[1]
        }
        )),
        l.sub = p((function(e) {
            var t = (0,
            s.default)(e, 2);
            return t[0] - t[1]
        }
        )),
        l.mul = p((function(e) {
            var t = (0,
            s.default)(e, 2);
            return t[0] * t[1]
        }
        )),
        l.div = p(h((function(e) {
            var t = (0,
            s.default)(e, 2);
            return t[0] / t[1]
        }
        ))),
        l.mod = p(h((function(e) {
            var t = (0,
            s.default)(e, 2);
            return t[0] % t[1]
        }
        ))),
        l.ceil = d((function(e) {
            return Math.ceil(e)
        }
        )),
        l.floor = d((function(e) {
            return Math.floor(e)
        }
        )),
        l.round = d((function(e) {
            return Math.round(e)
        }
        )),
        l.abs = d((function(e) {
            return Math.abs(e)
        }
        )),
        l.fequal = l.iequal,
        l.fless = l.iless,
        l.fgreater = l.igreater,
        l.fless_equal = l.iless_equal,
        l.fgreater_equal = l.igreater_equal,
        l.toDouble = function(e) {
            var t = (0,
            s.default)(e, 1)[0];
            return c.toNumber(t)
        }
        ,
        l.toLong = function(e) {
            var t = (0,
            s.default)(e, 1)[0];
            return c.toNumber(t)
        }
        ,
        l.toStr = function(e) {
            var t = (0,
            s.default)(e, 2)
              , n = t[0]
              , r = t[1];
            if (!n || !r)
                return String(n);
            try {
                return c.toNumber(n).toFixed(r)
            } catch (e) {
                return c.log.warn(e),
                ""
            }
        }
        ,
        l.const = function(e) {
            var t = (0,
            s.default)(e, 1)[0];
            return t ? t.trim() : ""
        }
        ,
        l.len = function(e) {
            var t = (0,
            s.default)(e, 1)[0];
            return c.isPlainObject(t) ? Object.keys(t).length : t ? ~~t.length : 0
        }
        ,
        l.platform = function(e) {
            var t = (0,
            s.default)(e, 1)[0];
            return t && "h5" === t.toLowerCase()
        }
        ,
        l.linearGradient = function(e) {
            var t = (0,
            i.default)(e)
              , n = t[0]
              , r = t.slice(1)
              , o = "";
            switch (n) {
            case "toLeft":
                o = "to left";
                break;
            case "toTop":
                o = "to top";
                break;
            case "toRight":
                o = "to right";
                break;
            case "toBottom":
                o = "to bottom"
            }
            if (!o || !r.length)
                return null;
            var a = "linear-gradient(".concat(o, ",");
            return r.map((function(e, t) {
                var n = (0,
                u.colorParser)(e)
                  , o = t === r.length - 1 ? ")" : ",";
                a += n + o
            }
            )),
            a
        }
        ,
        l.eq = l.equal,
        l.aget = l.array_get,
        l.afind = l.array_find,
        l.dget = l.dict_get,
        l.lc = l.lowercase,
        l.uc = l.uppercase,
        l.ieq = l.iequal,
        l.ilt = l.iless,
        l.igt = l.igreater,
        l.ilte = l.iless_equal,
        l.igte = l.igreater_equal,
        l.feq = l.fequal,
        l.flt = l.fless,
        l.fgt = l.fgreater,
        l.flte = l.fless_equal,
        l.fgte = l.fgreater_equal,
        l.less = l.iless,
        l.greater = l.igreater,
        l.lessEqual = l.iless_equal,
        l.greaterEqula = l.igreater_equal,
        t.default = l
    }
    , function(e, t, n) {
        var r = n(16)
          , o = n(19)
          , i = n(12)
          , a = n(18);
        e.exports = function(e) {
            return r(e) || o(e) || i(e) || a()
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(5))
          , a = o(n(6))
          , s = o(n(4))
          , c = r(n(1))
          , u = n(9)
          , l = n(14)
          , f = (0,
        s.default)("data")
          , d = (0,
        s.default)("parser")
          , p = function() {
            function e(t) {
                (0,
                i.default)(this, e),
                this.source = t,
                this.maxLen = t.length,
                this.pos = -1
            }
            return (0,
            a.default)(e, [{
                key: "hasNext",
                value: function() {
                    return this.pos < this.maxLen - 1
                }
            }, {
                key: "getPrevValue",
                value: function() {
                    return this.source[this.pos - 1]
                }
            }, {
                key: "getCurrentValue",
                value: function() {
                    return this.val
                }
            }, {
                key: "next",
                value: function() {
                    return this.val = this.source[++this.pos],
                    {
                        value: this.val,
                        done: !this.hasNext()
                    }
                }
            }, {
                key: "loop",
                value: function(e) {
                    for (var t = ""; !this.next().done && e(this.val, this.pos); )
                        t += this.val;
                    return t
                }
            }]),
            e
        }();
        function h(e, t) {
            var n = e.getCurrentValue();
            return "@" === n ? function(e) {
                var t = {
                    type: "pattern"
                };
                t.name = e.loop((function(e) {
                    return "{" !== e
                }
                ));
                var n = [];
                return e.loop((function() {
                    var t = h(e, ",");
                    return c.isPlainObject(t) && n.push(t),
                    "}" !== e.getCurrentValue() || (e.next(),
                    !1)
                }
                )),
                t.args = n,
                t
            }(e) : "'" === n ? {
                type: "const",
                content: e.loop((function(t) {
                    return !("\\" !== e.getPrevValue() && "'" === t)
                }
                ))
            } : /[\w\d_\-\.]/.test(n) ? {
                type: "const",
                content: n + e.loop((function(e) {
                    return e && !/[\s\}]/.test(e) && e !== t
                }
                ))
            } : void 0
        }
        t.default = function(e, t) {
            var n, r = t._tplId, o = t._tplName, i = d.get(o + e), a = f.get(r) || t.data;
            if (!i) {
                i = [];
                var s = new p(e);
                try {
                    s.loop((function() {
                        var e = h(s, ";");
                        return c.isPlainObject(e) && i.push(e),
                        !0
                    }
                    ))
                } catch (t) {
                    c.log.error(t, {
                        type: u.ERROR_DATA_PARSER_GEN_AST,
                        templateId: r,
                        parser: e
                    })
                }
                d.set(o + e, i)
            }
            try {
                i.some((function(e) {
                    return n = function e(t, n, r) {
                        var o = t.name
                          , i = t.type;
                        if ("const" === i)
                            return t.content;
                        if ("pattern" === i) {
                            var a = (0,
                            l.getDataParser)(o);
                            if (a) {
                                var s = t.args.map((function(t) {
                                    return e(t, n, r)
                                }
                                ));
                                return a.call(r.context, s, n, r)
                            }
                            c.log.warn("Can't find the given pattern [".concat(o, "], make sure you register it before use"))
                        }
                    }(e, a, t)
                }
                ))
            } catch (t) {
                c.log.error(t, {
                    type: u.ERROR_DATA_PARSER_PARSE,
                    templateId: r,
                    parser: e
                })
            }
            return n
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getLocalImage = function(e) {
            return i.get(e)
        }
        ,
        t.setLocalImage = function(e) {
            (0,
            o.mapValue)(e, (function(e, t) {
                i.set(t, e)
            }
            ))
        }
        ;
        var o = n(1)
          , i = (0,
        r(n(4)).default)("local-image")
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.render = t.setDriver = t.driver = void 0;
        var i = o(n(8))
          , a = n(11)
          , s = r(n(43));
        function c(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(Object(n), !0).forEach((function(t) {
                    (0,
                    i.default)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var l = {
            findDOMNode: s.findDOMNode,
            cloneElement: a.cloneElement,
            renderDriver: null
        };
        t.driver = l,
        t.setDriver = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            try {
                t.driver = l = u(u({}, l), e)
            } catch (e) {
                throw e
            }
        }
        ,
        t.render = function(e, t, n, r) {
            l.renderDriver ? (n ? n.driver = l.renderDriver : n = {
                driver: l.renderDriver
            },
            s.render(e, t, n, r)) : s.render.apply(this, arguments)
        }
    }
    , function(e) {
        e.exports = o
    }
    ]))
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = {
        Children: !0,
        isValidElement: !0,
        createFactory: !0,
        cloneElement: !0
    };
    t.default = void 0;
    var o = function(e) {
        if (e && e.__esModule)
            return e;
        if (null === e || "object" != typeof e && "function" != typeof e)
            return {
                default: e
            };
        var t = l();
        if (t && t.has(e))
            return t.get(e);
        var n = {}
          , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
                var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = e[o]
            }
        n.default = e,
        t && t.set(e, n);
        return n
    }(n(0));
    Object.keys(o).forEach((function(e) {
        "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || e in t && t[e] === o[e] || (t[e] = o[e]))
    }
    ));
    var i = u(n(34));
    t.Children = i.default;
    var a = u(n(22));
    t.isValidElement = a.default;
    var s = u(n(35));
    t.createFactory = s.default;
    var c = u(n(19));
    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function l() {
        if ("function" != typeof WeakMap)
            return null;
        var e = new WeakMap;
        return l = function() {
            return e
        }
        ,
        e
    }
    t.cloneElement = c.default,
    o.Children = i.default,
    o.isValidElement = a.default,
    o.createFactory = s.default,
    o.cloneElement = c.default,
    o.Component.prototype.isReactComponent = {};
    var f = o;
    t.default = f
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function n(e) {
            return "undefined" === e
        }
        var r = !n(typeof window) && "onload"in window
          , o = !n(typeof e) && !(!e.versions || !e.versions.node)
          , i = !n(typeof WXEnvironment) && "Web" !== WXEnvironment.platform
          , a = function() {
            var e = window.navigator.userAgent
              , t = e;
            return /iPhone|iPad|iPod/i.test(e) && (t = "iOS"),
            /Android/i.test(e) && (t = "Android"),
            t
        };
        t.a = {
            get notch() {
                var e = window.screen
                  , t = e.height
                  , n = e.width;
                return this.iOS && 375 == n && 812 == t
            },
            get windVane() {
                return navigator && /WindVane/i.test(navigator.userAgent)
            },
            get android() {
                var e = a();
                return /Android/i.test(e)
            },
            get iOS() {
                var e = a();
                return /iOS/i.test(e)
            },
            get pc() {
                return this.web && !this.android && !this.iOS
            },
            get AliBuyer() {
                return navigator && /AliApp\((EA|Alibaba)/.test(navigator.userAgent)
            },
            get AliSeller() {
                return navigator && /AliApp\((AliSupplier|QN|AS)/.test(navigator.userAgent)
            },
            node: o,
            web: r,
            weex: i,
            get app() {
                return this.weex || this.windVane
            }
        }
    }
    ).call(this, n(40))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return u
    }
    )),
    n.d(t, "a", (function() {
        return l
    }
    )),
    n.d(t, "c", (function() {
        return f
    }
    ));
    var r = n(20)
      , o = n.n(r)
      , i = n(10)
      , a = n(0)
      , s = n(15)
      , c = {};
    function u(e, t) {
        c[e] = t
    }
    function l(e) {
        var t;
        return Object(i.a)(this, void 0, void 0, o.a.mark((function r() {
            var i, a, s, u, l, f;
            return o.a.wrap((function(r) {
                for (; ; )
                    switch (r.prev = r.next) {
                    case 0:
                        if (i = e.name,
                        a = e.moduleWarp,
                        i) {
                            r.next = 3;
                            break
                        }
                        return r.abrupt("return");
                    case 3:
                        if (!(s = i) || !c[s]) {
                            r.next = 8;
                            break
                        }
                        return r.abrupt("return", c[s]);
                    case 8:
                        if (s || (s = null === (t = null == a ? void 0 : a.data) || void 0 === t ? void 0 : t.layout),
                        u = function() {
                            return Promise.all([n.e(3), n.e(1)]).then(n.bind(null, 61))
                        }
                        ,
                        l = function() {
                            return n.e(2).then(n.bind(null, 60))
                        }
                        ,
                        f = function() {
                            return Promise.resolve().then(n.bind(null, 25))
                        }
                        ,
                        !s) {
                            r.next = 29;
                            break
                        }
                        r.t0 = s,
                        r.next = "industry_pc_banner_nav" === r.t0 ? 16 : "local_layout_industry_jfy_pc" === r.t0 ? 20 : "fp-list" === r.t0 || "tab" === r.t0 || "tab_with_list" === r.t0 ? 24 : 28;
                        break;
                    case 16:
                        return r.next = 18,
                        u();
                    case 18:
                        return r.abrupt("return", c[s]);
                    case 20:
                        return r.next = 22,
                        l();
                    case 22:
                        return r.abrupt("return", c[s]);
                    case 24:
                        return r.next = 26,
                        f();
                    case 26:
                        return r.abrupt("return", c[s]);
                    case 28:
                        return r.abrupt("break", 29);
                    case 29:
                    case "end":
                        return r.stop()
                    }
            }
            ), r)
        }
        )))
    }
    function f(e, t) {
        Object(a.render)(e, t, {
            driver: s
        })
    }
}
, function(e, t, n) {
    var r, o;
    window,
    e.exports = (r = n(1),
    o = n(2),
    function(e) {
        var t = {};
        function n(r) {
            if (t[r])
                return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n),
            o.l = !0,
            o.exports
        }
        return n.m = e,
        n.c = t,
        n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }
        ,
        n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        n.t = function(e, t) {
            if (1 & t && (e = n(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var r = Object.create(null);
            if (n.r(r),
            Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }),
            2 & t && "string" != typeof e)
                for (var o in e)
                    n.d(r, o, function(t) {
                        return e[t]
                    }
                    .bind(null, o));
            return r
        }
        ,
        n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return n.d(t, "a", t),
            t
        }
        ,
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        n.p = "/dist/",
        n(n.s = 22)
    }([function(e) {
        e.exports = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    }
    , function(e) {
        e.exports = r
    }
    , function(e, t, n) {
        var r = n(15);
        function o() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return o = function() {
                return e
            }
            ,
            e
        }
        e.exports = function(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== r(e) && "function" != typeof e)
                return {
                    default: e
                };
            var t = o();
            if (t && t.has(e))
                return t.get(e);
            var n = {}
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                    s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a]
                }
            return n.default = e,
            t && t.set(e, n),
            n
        }
    }
    , function(e) {
        e.exports = function(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
    }
    , function(e) {
        function t(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        e.exports = function(e, n, r) {
            return n && t(e.prototype, n),
            r && t(e, r),
            e
        }
    }
    , function(e, t, n) {
        var r = n(24);
        e.exports = function(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && r(e, t)
        }
    }
    , function(e, t, n) {
        var r = n(15)
          , o = n(11);
        e.exports = function(e, t) {
            return !t || "object" !== r(t) && "function" != typeof t ? o(e) : t
        }
    }
    , function(e) {
        function t(n) {
            return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            t(n)
        }
        e.exports = t
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isFunction = function(e) {
            return e && "function" == typeof e
        }
        ,
        t.isTrue = t.parseGravity = t.isElementInvisable = t.runframeTask = t.bindGestureEvent = t.toLikeBoolean = t.numTrunc = t.isEqual = t.isObject = t.isString = t.deepGet = void 0;
        var o = r(n(15))
          , i = r(n(26))
          , a = n(1)
          , s = "object" === ("undefined" == typeof performance ? "undefined" : (0,
        o.default)(performance)) && performance.now
          , c = a.utils.deepGet;
        t.deepGet = c;
        var u = a.utils.isString;
        t.isString = u,
        t.isObject = function(e) {
            return "object" === (0,
            o.default)(e)
        }
        ;
        var l = a.utils.isEqual;
        t.isEqual = l;
        var f = a.utils.numTrunc;
        t.numTrunc = f,
        t.toLikeBoolean = function(e) {
            return !("false" === e || !1 === e || "0" === e || !e)
        }
        ,
        t.bindGestureEvent = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = (0,
            a.getGlobalConfig)("forcePcMode");
            return new i.default(e,t,n)
        }
        ,
        t.runframeTask = function(e) {
            var t, n = [];
            return function(r) {
                n.push(r),
                t && window.clearTimeout(t),
                t = setTimeout((function() {
                    !function t() {
                        requestAnimationFrame((function(r) {
                            for (; n.length > 0 && (n.shift()(),
                            !((s ? performance.now() : r) - r >= 15)); )
                                ;
                            n.length > 0 ? t() : e()
                        }
                        ))
                    }()
                }
                ), 0)
            }
        }
        ,
        t.isElementInvisable = function(e) {
            return null === e.offsetParent && 0 === e.offsetHeight
        }
        ,
        t.parseGravity = function() {
            var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "leftTop", r = n.search(/[A-Z]/);
            return -1 !== r ? (e = n.slice(0, r),
            t = n.slice(r).toLowerCase()) : e = t = n,
            {
                x: e,
                y: t
            }
        }
        ,
        t.isTrue = function(e) {
            return "true" === e || !0 === e || "1" === e || 1 === e
        }
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return "string" == typeof e && n.test(e)
        }
        ;
        var n = /-webkit-|-moz-|-ms-/;
        e.exports = t.default
    }
    , function(e) {
        e.exports = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
    }
    , function(e) {
        e.exports = function(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(3))
          , a = o(n(4))
          , s = o(n(11))
          , c = o(n(5))
          , u = o(n(6))
          , l = o(n(7))
          , f = o(n(10))
          , d = r(n(1))
          , p = o(n(25))
          , h = n(8);
        function v(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                l.default)(e);
                if (t) {
                    var o = (0,
                    l.default)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                u.default)(this, n)
            }
        }
        function m() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e._viewName;
            return "FlexLayout" === t
        }
        d.utils.env.isIOS;
        var g = function(e) {
            (0,
            c.default)(n, e);
            var t = v(n);
            function n() {
                var e;
                (0,
                i.default)(this, n);
                for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                    o[a] = arguments[a];
                return e = t.call.apply(t, [this].concat(o)),
                (0,
                f.default)((0,
                s.default)(e), "width", ["marginLeft", "marginRight", function(e) {
                    var t = this.getStyles()
                      , n = t.marginLeft
                      , r = t.marginRight
                      , o = {};
                    switch (e) {
                    case "match_parent":
                        o.width = "100%",
                        (n || r) && (o.maxWidth = "calc(100% - ".concat(n || "0px", " - ").concat(r || "0px", ")"));
                        break;
                    case "match_content":
                        o.width = "fit-content";
                        break;
                    default:
                        o.width = d.unitParser(e)
                    }
                    this.setStyles(o)
                }
                ]),
                (0,
                f.default)((0,
                s.default)(e), "height", ["marginTop", "marginBottom", function(e) {
                    var t = this.getStyles()
                      , n = t.marginTop
                      , r = t.marginBottom
                      , o = {};
                    switch (e) {
                    case "match_parent":
                        o.height = "100%",
                        (n || r) && (o.maxHeight = "calc(100% - ".concat(n || "0px", " - ").concat(r || "0px", ")"));
                        break;
                    case "match_content":
                        o.height = "auto";
                        break;
                    default:
                        o.height = d.unitParser(e)
                    }
                    this.setStyles(o)
                }
                ]),
                e
            }
            return (0,
            a.default)(n, [{
                key: "dx-compid",
                value: function(e) {
                    this.setAttrs({
                        "dx-compid": e
                    })
                }
            }, {
                key: "userId",
                value: function(e) {
                    this.dxCompId = e,
                    this.setAttrs({
                        "data-comp-id": e
                    })
                }
            }, {
                key: "minHeight",
                value: function(e) {
                    this.setStyles({
                        minHeight: d.unitParser(e)
                    })
                }
            }, {
                key: "marginLeft",
                value: function(e) {
                    this.setStyles((0,
                    f.default)({}, d.getGlobalConfig("__rtl") ? "marginRight" : "marginLeft", d.unitParser(e)))
                }
            }, {
                key: "marginRight",
                value: function(e) {
                    this.setStyles((0,
                    f.default)({}, d.getGlobalConfig("__rtl") ? "marginLeft" : "marginRight", d.unitParser(e)))
                }
            }, {
                key: "marginTop",
                value: function(e) {
                    this.setStyles({
                        marginTop: d.unitParser(e)
                    })
                }
            }, {
                key: "marginBottom",
                value: function(e) {
                    this.setStyles({
                        marginBottom: d.unitParser(e)
                    })
                }
            }, {
                key: "gravity",
                value: function(e) {
                    if (this.layoutProps) {
                        var t = {}
                          , n = this.layoutProps
                          , r = n._viewName
                          , o = n.orientation
                          , i = n.childrenLen
                          , a = (0,
                        h.parseGravity)(e)
                          , s = a.x
                          , c = a.y;
                        if ("FrameLayout" === r) {
                            if (!d.getGlobalConfig("enableExperimentalRender") || "undefined" === i || i > 1) {
                                var u, l = {
                                    center: "0px"
                                };
                                if (u = {},
                                (0,
                                f.default)(u, "center" === s ? "left" : s, l[s] || 0),
                                (0,
                                f.default)(u, "center" === c ? "top" : c, l[c] || 0),
                                t = u,
                                d.getGlobalConfig("__rtl"))
                                    if ("left"in t) {
                                        var p = t.left;
                                        t.left = "auto",
                                        t.right = p
                                    } else if ("right"in t) {
                                        var v = t.right;
                                        t.right = "auto",
                                        t.left = v
                                    }
                            }
                        } else if ("LinearLayout" === r) {
                            var m = {
                                left: "flex-start",
                                top: "flex-start",
                                right: "flex-end",
                                bottom: "flex-end",
                                center: "center"
                            }
                              , g = [m[s], m[c]];
                            o && "horizontal" !== o || (g = g.reverse()),
                            t = {
                                alignSelf: g[0],
                                justifySelf: g[1]
                            }
                        }
                        this.setStyles(t)
                    }
                }
            }, {
                key: "backgroundColor",
                value: function(e) {
                    this.setStyles({
                        backgroundColor: d.colorParser(e)
                    })
                }
            }, {
                key: "backgroundGradient",
                value: function(e) {
                    e && this.setStyles({
                        backgroundImage: e
                    })
                }
            }, {
                key: "alpha",
                value: function(e) {
                    this.setStyles({
                        opacity: e
                    })
                }
            }, {
                key: "visibility",
                value: function(e) {
                    var t = {
                        display: "flex"
                    };
                    switch (e) {
                    case "gone":
                        t.display = "none";
                        break;
                    case "invisible":
                        t.visibility = "hidden";
                        break;
                    case "visible":
                        t.visibility = "visible"
                    }
                    this.setStyles(t)
                }
            }, {
                key: "cornerRadius",
                value: function(e) {
                    this.setStyles({
                        borderRadius: d.unitParser(e)
                    })
                }
            }, {
                key: "cornerRadiusLeftTop",
                value: function(e) {
                    this.setStyles({
                        borderTopLeftRadius: d.unitParser(e)
                    })
                }
            }, {
                key: "cornerRadiusRightTop",
                value: function(e) {
                    this.setStyles({
                        borderTopRightRadius: d.unitParser(e)
                    })
                }
            }, {
                key: "cornerRadiusLeftBottom",
                value: function(e) {
                    this.setStyles({
                        borderBottomLeftRadius: d.unitParser(e)
                    })
                }
            }, {
                key: "cornerRadiusRightBottom",
                value: function(e) {
                    this.setStyles({
                        borderBottomRightRadius: d.unitParser(e)
                    })
                }
            }, {
                key: "borderWidth",
                value: function(e, t) {
                    var n = (t || this.props).borderColor
                      , r = d.unitParser(e)
                      , o = d.colorParser(n);
                    parseFloat(r) < 1 ? this.setStyles({
                        border: "".concat(r, " solid ").concat(o)
                    }) : this.setStyles({
                        boxShadow: "inset 0 0 0 ".concat(r, " ").concat(o)
                    })
                }
            }, {
                key: "accessibilityText",
                value: function(e) {
                    this.setAttrs({
                        "aria-label": e
                    })
                }
            }, {
                key: "focusable",
                value: function() {}
            }, {
                key: "weight",
                value: function(e) {
                    this.setStyles({
                        flex: e
                    })
                }
            }, {
                key: "clipTopLeftRadius",
                value: function(e) {
                    this.setStyles({
                        overflow: "hidden",
                        borderTopLeftRadius: d.unitParser(e)
                    })
                }
            }, {
                key: "clipTopRightRadius",
                value: function(e) {
                    this.setStyles({
                        overflow: "hidden",
                        borderTopRightRadius: d.unitParser(e)
                    })
                }
            }, {
                key: "clipBottomLeftRadius",
                value: function(e) {
                    this.setStyles({
                        overflow: "hidden",
                        borderBottomLeftRadius: d.unitParser(e)
                    })
                }
            }, {
                key: "clipBottomRightRadius",
                value: function(e) {
                    this.setStyles({
                        overflow: "hidden",
                        borderBottomRightRadius: d.unitParser(e)
                    })
                }
            }, {
                key: "order",
                value: function(e) {
                    m(this.layoutProps) && this.setStyles({
                        order: e
                    })
                }
            }, {
                key: "flexGrow",
                value: function(e) {
                    m(this.layoutProps) && this.setStyles({
                        flexGrow: e
                    })
                }
            }, {
                key: "flexShrink",
                value: function(e) {
                    m(this.layoutProps) && this.setStyles({
                        flexShrink: e
                    })
                }
            }, {
                key: "flexBasis",
                value: function(e) {
                    m(this.layoutProps) && this.setStyles({
                        flexBasis: e
                    })
                }
            }, {
                key: "flex",
                value: function(e) {
                    m(this.layoutProps) && this.setStyles({
                        flex: e
                    })
                }
            }, {
                key: "alignSelf",
                value: function(e) {
                    m(this.layoutProps) && this.setStyles({
                        alignSelf: e
                    })
                }
            }, {
                key: "webEventDatasource",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                      , t = "";
                    try {
                        t = JSON.stringify(e)
                    } catch (e) {
                        d.utils.log.warn(e)
                    }
                    this.setAttrs({
                        "data-dx-event-datasource": t,
                        className: "dx-event-node"
                    })
                }
            }, {
                key: "webEventDataSource",
                value: function(e) {
                    this.webEventDatasource(e)
                }
            }, {
                key: "onBindData",
                value: function(e) {
                    this._bindData = e.handler()
                }
            }, {
                key: "onTap",
                value: function(e) {
                    this.setEvents({
                        tap: e
                    }),
                    this.setAttrs({
                        className: "dx-event-node"
                    })
                }
            }, {
                key: "onLongTap",
                value: function(e) {
                    this.setEvents({
                        longTap: e
                    })
                }
            }, {
                key: "onPanBegin",
                value: function(e) {
                    this.setEvents({
                        panBegin: e
                    })
                }
            }, {
                key: "onPanMove",
                value: function(e) {
                    this.setEvents({
                        panMove: e
                    })
                }
            }, {
                key: "onPanEnd",
                value: function(e) {
                    this.setEvents({
                        panEnd: e
                    })
                }
            }]),
            n
        }(p.default);
        d.registerView("View", g),
        d.registerView("DView", g),
        t.default = g
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = r(n(3))
          , i = r(n(4))
          , a = r(n(5))
          , s = r(n(6))
          , c = r(n(7))
          , u = r(n(12))
          , l = r(n(1));
        function f(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                c.default)(e);
                if (t) {
                    var o = (0,
                    c.default)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                s.default)(this, n)
            }
        }
        var d = function(e) {
            (0,
            a.default)(n, e);
            var t = f(n);
            function n(e) {
                var r;
                return (0,
                o.default)(this, n),
                (r = t.call(this, e)).setStyles({
                    overflow: "hidden"
                }),
                r
            }
            return (0,
            i.default)(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    null === this.layoutProps && this.calcLayoutSize((function() {
                        return e.calcLayoutSize((function() {
                            return e.calcLayoutSize()
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var e = this;
                    null === this.layoutProps && this.calcLayoutSize((function() {
                        return e.calcLayoutSize((function() {
                            return e.calcLayoutSize()
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "paddingLeft",
                value: function(e) {
                    this.setStyles({
                        paddingLeft: l.default.unitParser(e)
                    })
                }
            }, {
                key: "paddingTop",
                value: function(e) {
                    this.setStyles({
                        paddingTop: l.default.unitParser(e)
                    })
                }
            }, {
                key: "paddingRight",
                value: function(e) {
                    this.setStyles({
                        paddingRight: l.default.unitParser(e)
                    })
                }
            }, {
                key: "paddingBottom",
                value: function(e) {
                    this.setStyles({
                        paddingBottom: l.default.unitParser(e)
                    })
                }
            }]),
            n
        }(u.default);
        t.default = d
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.loopMergeSubData = function e(t, n, r, o) {
            var l = this;
            if (t) {
                var d = this.props._tplId
                  , p = this.props._tplContext
                  , h = t.props
                  , v = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? c(Object(n), !0).forEach((function(t) {
                            (0,
                            i.default)(e, t, n[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                        ))
                    }
                    return e
                }({
                    key: "".concat(h._id, "-").concat(r)
                }, h)
                  , m = v._id = "cc".concat(++p.componentIdSeq)
                  , g = h._originProps;
                for (var y in g) {
                    var b = g[y]
                      , w = f(y);
                    if (u.test(b)) {
                        var _ = {
                            data: n,
                            _tplId: d
                        };
                        "on" === w.slice(0, 2) ? v[w] = a.eventHandlerParser(b, _) : v[w] = a.dataParser(b, _)
                    }
                }
                p.componentIndexSet.push({
                    id: m,
                    props: v,
                    pid: o
                });
                var O = h.children;
                return O && (Array.isArray(O) ? O = O.map((function(t) {
                    return e.call(l, t, n, r, m)
                }
                )) : s.isObject(O) && (O = e.call(this, O, n, r, m))),
                a.driver.cloneElement(t, v, O)
            }
        }
        ,
        t.removePropPrefix = void 0;
        var i = o(n(10));
        o(n(19));
        var a = r(n(1))
          , s = r(n(8));
        function c(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        var u = /(\$|\@)?subdata/
          , l = /^[d][A-Z]/
          , f = function(e) {
            if (l.test(e)) {
                var t = e.slice(1);
                e = t[0].toLowerCase() + t.slice(1)
            }
            return e
        };
        t.removePropPrefix = f
    }
    , function(e) {
        function t(n) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = t = function(e) {
                return typeof e
            }
            : e.exports = t = function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            t(n)
        }
        e.exports = t
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(3))
          , a = o(n(4))
          , s = o(n(5))
          , c = o(n(6))
          , u = o(n(7))
          , l = r(n(1))
          , f = n(8)
          , d = n(14);
        function p(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                u.default)(e);
                if (t) {
                    var o = (0,
                    u.default)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                c.default)(this, n)
            }
        }
        function h(e) {
            for (var t = e.childNodes || [], n = t.length, r = e.getBoundingClientRect().width, o = this.props.orientation, i = 0, a = 0; a < n; a++) {
                var s = t[a];
                if (s.nodeType === Node.ELEMENT_NODE || s.nodeType === Node.TEXT_NODE) {
                    var c = s.getBoundingClientRect()
                      , u = parseFloat(s.style.marginLeft) || 0
                      , l = parseFloat(s.style.marginRight) || 0;
                    i += c.width + u + l,
                    0 === c.width && s.style.flex && !(0,
                    f.isElementInvisable)(s) && (s.style.display = "none"),
                    i > r && ("horizontal" === o ? s.style.flexShrink = "1" : s.style.maxWidth = "".concat((0,
                    f.numTrunc)(r - u - l), "px"))
                }
            }
        }
        var v = function(e) {
            (0,
            s.default)(n, e);
            var t = p(n);
            function n() {
                return (0,
                i.default)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            a.default)(n, [{
                key: "dynamicCalcSize",
                value: function() {
                    if (l.getGlobalConfig("shouldExecLinearLayoutHack"))
                        try {
                            var e = l.driver.findDOMNode(this);
                            h.call(this, e)
                        } catch (e) {
                            l.utils.log.warn(e)
                        }
                }
            }, {
                key: "childGravity",
                value: function(e) {
                    var t, n, r = this.props.orientation, o = e.search(/[A-Z]/);
                    -1 !== o ? (t = e.slice(0, o),
                    n = e.slice(o).toLowerCase()) : t = n = e;
                    var i = {
                        left: "flex-start",
                        top: "flex-start",
                        right: "flex-end",
                        bottom: "flex-end",
                        center: "center"
                    }
                      , a = [i[t], i[n]];
                    r && "horizontal" !== r || (a = a.reverse()),
                    this.setStyles({
                        alignItems: a[0],
                        justifyContent: a[1]
                    })
                }
            }, {
                key: "orientation",
                value: function(e) {
                    var t;
                    t = "horizontal" === e ? "row" : "column",
                    this.setStyles({
                        flexDirection: t
                    })
                }
            }, {
                key: "listData",
                value: function(e) {
                    this._listData = e
                }
            }, {
                key: "renderLoopChildren",
                value: function() {
                    var e = this
                      , t = []
                      , n = this.getChildren()
                      , r = this.props
                      , o = {
                        flexShrink: 0,
                        flexGrow: 0,
                        height: "fit-content"
                    };
                    return this._listData && this._listData.forEach((function(i, a) {
                        n.forEach((function(n) {
                            var s = n.props._originProps.filter
                              , c = s && l.dataParser(s, {
                                data: i
                            });
                            void 0 !== c && !0 !== c && "true" !== c || t.push(l.h("div", {
                                key: a,
                                className: "list-item",
                                style: o
                            }, d.loopMergeSubData.call(e, n, i, a, r._id)))
                        }
                        ))
                    }
                    )),
                    t
                }
            }, {
                key: "renderView",
                value: function() {
                    return Array.isArray(this._listData) && this._listData.length ? this.renderLoopChildren() : this.props.children
                }
            }]),
            n
        }(o(n(13)).default);
        v.defaultProps = {
            orientation: "horizontal"
        },
        l.registerView("LinearLayout", v),
        l.registerView("DLinearLayout", v),
        t.default = v
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.chooseCssValue = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
              , n = t[t.length - 1] || "";
            switch (e) {
            case "display":
                t.indexOf(r) > -1 && (n = r)
            }
            return n
        }
        ;
        var n = document.createElement("div");
        n.style.display = "-webkit-box",
        n.style.display = "-moz-box",
        n.style.display = "-webkit-flex",
        n.style.display = "flex";
        var r = n.style.display
    }
    , function(e) {
        function t() {
            return e.exports = t = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ,
            t.apply(this, arguments)
        }
        e.exports = t
    }
    , function(e) {
        e.exports = o
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(3))
          , a = o(n(4))
          , s = o(n(11))
          , c = o(n(5))
          , u = o(n(6))
          , l = o(n(7))
          , f = o(n(10))
          , d = r(n(1))
          , p = o(n(12))
          , h = n(8);
        function v(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                l.default)(e);
                if (t) {
                    var o = (0,
                    l.default)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                u.default)(this, n)
            }
        }
        var m = function(e) {
            (0,
            c.default)(n, e);
            var t = v(n);
            function n() {
                var e;
                (0,
                i.default)(this, n);
                for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                    o[a] = arguments[a];
                return e = t.call.apply(t, [this].concat(o)),
                (0,
                f.default)((0,
                s.default)(e), "textContent", null),
                (0,
                f.default)((0,
                s.default)(e), "maxLines", ["textSize", "lineSpace", "lineHeight", function(e) {
                    var t = ~~e
                      , n = parseFloat(this.fontSize)
                      , r = {
                        whiteSpace: "pre-wrap"
                    };
                    if (t > 1) {
                        var o = (0,
                        h.numTrunc)(1.2 * (n + parseFloat(this._lineSpace)));
                        this._lineHeight && (o = (0,
                        h.numTrunc)(parseFloat(this._lineHeight) + parseFloat(this._lineSpace))),
                        r = {
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: "".concat(t),
                            lineHeight: "".concat(o, "px"),
                            overflow: "hidden"
                        }
                    } else
                        r.lineHeight = this._lineHeight || "".concat((0,
                        h.numTrunc)(1.2 * n), "px"),
                        0 !== t && (r.whiteSpace = "nowrap");
                    this.setStyles({
                        overflow: "hidden"
                    }),
                    this.setStyles(r, "font")
                }
                ]),
                (0,
                f.default)((0,
                s.default)(e), "textAlignment", ["textGravity", e.textGravity]),
                e
            }
            return (0,
            a.default)(n, [{
                key: "componentDidUpdate",
                value: function() {
                    this.calcLayoutSize()
                }
            }, {
                key: "lineHeight",
                value: function(e) {
                    this._lineHeight = -1 == e ? 0 : d.unitParser(e)
                }
            }, {
                key: "text",
                value: function(e, t) {
                    var n = (t || this.props).visibility;
                    "gone" !== n && "invisible" !== n && (e ? (this.textContent = e,
                    this.setStyles({
                        display: "flex"
                    })) : this.setStyles({
                        display: "none"
                    }))
                }
            }, {
                key: "textSize",
                value: function(e) {
                    var t = d.unitParser(e);
                    this.setStyles({
                        fontSize: t
                    }),
                    this.fontSize = t
                }
            }, {
                key: "lineSpace",
                value: function(e) {
                    this._lineSpace = d.unitParser(e) || 0
                }
            }, {
                key: "textStyle",
                value: function(e) {
                    var t = {};
                    switch (e) {
                    case "bold":
                        t.fontWeight = "bold";
                        break;
                    case "italic":
                        t.fontStyle = "italic"
                    }
                    this.setStyles(t)
                }
            }, {
                key: "textColor",
                value: function(e) {
                    this.setStyles({
                        color: d.colorParser(e)
                    })
                }
            }, {
                key: "textGravity",
                value: function(e) {
                    var t = {
                        justifyContent: "center",
                        alignItems: "center"
                    };
                    switch (e) {
                    case "left":
                        t.justifyContent = "flex-start";
                        break;
                    case "right":
                        t.justifyContent = "flex-end";
                        break;
                    case "center":
                        t.textAlign = "center"
                    }
                    this.setStyles(t)
                }
            }, {
                key: "lineBreakMode",
                value: function(e) {
                    var t = {
                        overflow: "hidden"
                    };
                    switch (e) {
                    case "none":
                        this.setStyles({
                            overflow: "hidden"
                        }),
                        t.textOverflow = "clip";
                        break;
                    case "start":
                    case "middle":
                        break;
                    case "end":
                        t.textOverflow = "ellipsis"
                    }
                    this.setStyles(t, "font")
                }
            }, {
                key: "maxWidth",
                value: function(e) {
                    this.setStyles({
                        maxWidth: "-1" === e ? "none" : d.unitParser(e)
                    })
                }
            }, {
                key: "isBold",
                value: function(e) {
                    (0,
                    h.isTrue)(e) && this.setStyles({
                        fontWeight: "bold"
                    })
                }
            }, {
                key: "isItalic",
                value: function(e) {
                    (0,
                    h.isTrue)(e) && this.setStyles({
                        fontStyle: "italic"
                    })
                }
            }, {
                key: "isStrikeThrough",
                value: function(e) {
                    (0,
                    h.isTrue)(e) && this.setStyles({
                        textDecoration: "line-through"
                    })
                }
            }, {
                key: "strikeThroughStyle",
                value: function(e) {
                    "single" === e && this.setStyles({
                        textDecoration: "line-through"
                    })
                }
            }, {
                key: "isUnderline",
                value: function(e) {
                    (0,
                    h.isTrue)(e) && this.setStyles({
                        textDecoration: "underline"
                    })
                }
            }, {
                key: "renderView",
                value: function() {
                    return d.h("span", {
                        style: this.getStyles("font")
                    }, (e = this.textContent,
                    t = /&#(\d{1,5});/g,
                    (0,
                    h.isString)(e) && -1 !== e.search(t) ? e.replace(t, (function(e, t) {
                        return String.fromCharCode(t)
                    }
                    )) : e));
                    var e, t
                }
            }]),
            n
        }(p.default);
        m.defaultProps = {
            textSize: "12np",
            textGravity: "left",
            lineBreakMode: "end",
            maxLines: "1",
            maxWidth: "-1",
            lineHeight: "-1"
        },
        d.registerView("TextView", m),
        d.registerView("DTextView", m),
        d.registerView("FastTextView", m),
        t.default = m
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            return (0,
            i.default)(e)
        }
        ;
        var r, o = n(28), i = (r = o) && r.__esModule ? r : {
            default: r
        };
        e.exports = t.default
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "FrameLayout", {
            enumerable: !0,
            get: function() {
                return i.default
            }
        }),
        Object.defineProperty(t, "LinearLayout", {
            enumerable: !0,
            get: function() {
                return a.default
            }
        }),
        Object.defineProperty(t, "AdaptiveLinearLayout", {
            enumerable: !0,
            get: function() {
                return s.default
            }
        }),
        Object.defineProperty(t, "ListLayout", {
            enumerable: !0,
            get: function() {
                return c.default
            }
        }),
        Object.defineProperty(t, "FlexLayout", {
            enumerable: !0,
            get: function() {
                return u.default
            }
        }),
        Object.defineProperty(t, "GridLayout", {
            enumerable: !0,
            get: function() {
                return l.default
            }
        }),
        Object.defineProperty(t, "ScrollerLayout", {
            enumerable: !0,
            get: function() {
                return f.default
            }
        }),
        Object.defineProperty(t, "View", {
            enumerable: !0,
            get: function() {
                return d.default
            }
        }),
        Object.defineProperty(t, "TextView", {
            enumerable: !0,
            get: function() {
                return p.default
            }
        }),
        Object.defineProperty(t, "ImageView", {
            enumerable: !0,
            get: function() {
                return h.default
            }
        }),
        Object.defineProperty(t, "Switch", {
            enumerable: !0,
            get: function() {
                return v.default
            }
        }),
        Object.defineProperty(t, "CheckBox", {
            enumerable: !0,
            get: function() {
                return m.default
            }
        }),
        Object.defineProperty(t, "TextInput", {
            enumerable: !0,
            get: function() {
                return g.default
            }
        }),
        Object.defineProperty(t, "bindGestureEvent", {
            enumerable: !0,
            get: function() {
                return b.bindGestureEvent
            }
        }),
        t.utils = void 0,
        n(17);
        var i = o(n(23))
          , a = o(n(16))
          , s = o(n(36))
          , c = o(n(37))
          , u = o(n(44))
          , l = o(n(45))
          , f = o(n(46))
          , d = o(n(12))
          , p = o(n(20))
          , h = o(n(47))
          , v = o(n(49))
          , m = o(n(50))
          , g = o(n(51))
          , y = r(n(8));
        t.utils = y;
        var b = n(8)
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(3))
          , a = o(n(4))
          , s = o(n(5))
          , c = o(n(6))
          , u = o(n(7))
          , l = r(n(1))
          , f = o(n(13))
          , d = n(8);
        function p(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                u.default)(e);
                if (t) {
                    var o = (0,
                    u.default)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                c.default)(this, n)
            }
        }
        function h(e) {
            var t = "match_content" === this.props.width
              , n = "match_content" === this.props.height;
            if (!t && !n)
                return null;
            t && (e.style.width = "auto"),
            n && (e.style.height = "auto");
            for (var r = -1, o = -1, i = e.childNodes || [], a = i.length, s = this.getChildren(), c = 0; c < a; c++) {
                var u = i[c];
                if (u.nodeType === Node.ELEMENT_NODE || u.nodeType === Node.TEXT_NODE) {
                    var l = s[c].props || {};
                    if (!(t && "match_parent" === l.width || n && "match_parent" === l.height || (0,
                    d.isElementInvisable)(u))) {
                        var f = u.getBoundingClientRect()
                          , p = f.width
                          , h = void 0 === p ? u.offsetWidth : p
                          , v = f.height
                          , m = void 0 === v ? u.offsetHeight : v;
                        u.style && "none" !== u.style.display && (u.style.marginLeft && (h += parseFloat(u.style.marginLeft) || 0),
                        u.style.marginRight && (h += parseFloat(u.style.marginRight) || 0),
                        u.style.marginTop && (m += parseFloat(u.style.marginTop) || 0),
                        u.style.marginBottom && (m += parseFloat(u.style.marginBottom) || 0)),
                        r = Math.max(h, r),
                        o = Math.max(m, o)
                    }
                }
            }
            var g = e.getBoundingClientRect();
            return {
                width: (0,
                d.numTrunc)(t ? r : g.width),
                height: (0,
                d.numTrunc)(n ? o : g.height)
            }
        }
        function v(e, t) {
            for (var n = t || e.getBoundingClientRect(), r = n.width, o = n.height, i = e.childNodes || [], a = this.getChildren(), s = 0; s < i.length; s++) {
                var c = i[s]
                  , u = a[s];
                if (u && u.props) {
                    var l = u.props.gravity
                      , f = c.getBoundingClientRect()
                      , d = parseFloat(c.style.marginLeft) || 0
                      , p = parseFloat(c.style.marginRight) || 0
                      , h = parseFloat(c.style.marginTop) || 0
                      , v = parseFloat(c.style.marginBottom) || 0
                      , m = f.width + d + p
                      , g = f.height + h + v;
                    "center" !== l && "leftCenter" !== l && "rightCenter" !== l || (c.style.top = "".concat((o - g) / 2, "px")),
                    "center" !== l && "centerTop" !== l && "centerBottom" !== l || (c.style.left = "".concat((r - m) / 2, "px"))
                }
            }
        }
        var m = function(e) {
            (0,
            s.default)(n, e);
            var t = p(n);
            function n(e) {
                var r;
                (0,
                i.default)(this, n),
                r = t.call(this, e);
                var o = l.getGlobalConfig("enableExperimentalRender");
                return r.shouldConvert2Flex = o && e.childrenLen <= 1,
                r.updateFlexStyle(),
                r
            }
            return (0,
            a.default)(n, [{
                key: "updateFlexStyle",
                value: function() {
                    var e = this.shouldConvert2Flex
                      , t = this.props;
                    if (e && t.children && t.children.props && t.children.props.gravity) {
                        var n = t.children.props.gravity
                          , r = (0,
                        d.parseGravity)(n)
                          , o = r.x
                          , i = r.y
                          , a = {
                            left: "flex-start",
                            top: "flex-start",
                            right: "flex-end",
                            bottom: "flex-end",
                            center: "center"
                        };
                        this.setStyles({
                            justifyContent: a[o],
                            alignItems: a[i]
                        })
                    }
                }
            }, {
                key: "dynamicCalcSize",
                value: function() {
                    if (!this.shouldConvert2Flex) {
                        var e;
                        try {
                            e = l.driver.findDOMNode(this)
                        } catch (e) {
                            return void l.utils.log.warn(e)
                        }
                        var t = h.call(this, e);
                        if (v.call(this, e, t),
                        t) {
                            var n = t.width
                              , r = t.height;
                            "match_content" === this.props.width && (e.style.width = "".concat(n, "px")),
                            "match_content" === this.props.height && (e.style.height = "".concat(r, "px"))
                        }
                    }
                }
            }, {
                key: "renderView",
                value: function() {
                    return this.props.children
                }
            }]),
            n
        }(f.default);
        l.registerView("FrameLayout", m),
        l.registerView("DFrameLayout", m),
        t.default = m
    }
    , function(e) {
        function t(n, r) {
            return e.exports = t = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            t(n, r)
        }
        e.exports = t
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.setIndexMapContext = S,
        t.default = void 0;
        var i = o(n(18))
          , a = o(n(3))
          , s = o(n(4))
          , c = o(n(11))
          , u = o(n(5))
          , l = o(n(6))
          , f = o(n(7))
          , d = o(n(10))
          , p = r(n(1))
          , h = r(n(8))
          , v = o(n(27))
          , m = n(17);
        function g(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                f.default)(e);
                if (t) {
                    var o = (0,
                    f.default)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                l.default)(this, n)
            }
        }
        var y = function() {}
          , b = function(e) {
            return e && "_" === e[0]
        }
          , w = function(e) {
            return "children" !== e && "dinamic" !== e
        }
          , _ = function(e) {
            (0,
            u.default)(n, e);
            var t = g(n);
            function n(e) {
                var r, o;
                if ((0,
                a.default)(this, n),
                r = t.call(this, e),
                (0,
                d.default)((0,
                c.default)(r), "getStyles", (o = O.call((0,
                c.default)(r), "styles"),
                function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
                    return this.styleParser(o(e))
                }
                )),
                (0,
                d.default)((0,
                c.default)(r), "setStyles", x.call((0,
                c.default)(r), "styles")),
                (0,
                d.default)((0,
                c.default)(r), "getAttrs", O.call((0,
                c.default)(r), "attrs")),
                (0,
                d.default)((0,
                c.default)(r), "setAttrs", x.call((0,
                c.default)(r), "attrs")),
                (0,
                d.default)((0,
                c.default)(r), "getEvents", O.call((0,
                c.default)(r), "events")),
                (0,
                d.default)((0,
                c.default)(r), "setEvents", x.call((0,
                c.default)(r), "events")),
                r.setStyles({
                    position: "relative",
                    display: "flex"
                }),
                r.layoutProps = P.call((0,
                c.default)(r)),
                r.layoutProps) {
                    var i = r.layoutProps
                      , s = i._viewName
                      , u = i.childrenLen;
                    "FrameLayout" === s ? (!p.getGlobalConfig("enableExperimentalRender") || "undefined" === u || u > 1) && r.setStyles({
                        position: "absolute"
                    }) : "LinearLayout" === s && r.setStyles({
                        flexShrink: 0,
                        flexGrow: 0
                    })
                }
                return C.call((0,
                c.default)(r)),
                j.call((0,
                c.default)(r)),
                r
            }
            return (0,
            s.default)(n, [{
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props;
                    return S.call(this),
                    p.h("div", (0,
                    i.default)({
                        ref: function(t) {
                            return e.$__DXWrap = t
                        },
                        key: t._id,
                        "view-name": this.getViewName(),
                        style: this.getStyles()
                    }, this.getAttrs()), "gone" !== t.visibility && this.renderView && this.renderView(t))
                }
            }, {
                key: "getChildren",
                value: function() {
                    var e = this.props.children;
                    return Array.isArray(e) ? e : h.isObject(e) ? [e] : []
                }
            }, {
                key: "getTemplateId",
                value: function() {
                    return this.props._tplId
                }
            }, {
                key: "getViewName",
                value: function() {
                    return this.props._viewName
                }
            }, {
                key: "styleParser",
                value: function(e) {
                    var t = (0,
                    v.default)(e);
                    for (var n in t) {
                        var r = t[n];
                        Array.isArray(r) && (t[n] = (0,
                        m.chooseCssValue)(n, r))
                    }
                    return t
                }
            }, {
                key: "propParser",
                value: function(e) {
                    var t = this
                      , n = []
                      , r = e || this.props;
                    for (var o in r) {
                        var i = r[o];
                        if (!b(o) && w(o)) {
                            var a = this[o];
                            if (!a)
                                continue;
                            if (Array.isArray(a) && a.length > 1)
                                a.slice(0, -1).forEach((function(e) {
                                    var o = t[e];
                                    if (-1 === n.indexOf(e) && h.isFunction(o)) {
                                        var i = r[e];
                                        o.call(t, i),
                                        n.push(e)
                                    }
                                }
                                )),
                                a.slice(-1)[0].call(this, i);
                            else {
                                if (-1 !== n.indexOf(o))
                                    continue;
                                a.call(this, i, r),
                                n.push(o)
                            }
                        }
                    }
                }
            }]),
            n
        }(p.Component);
        function O(e) {
            var t = this;
            return function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
                return Object.assign({}, t[e][n]) || {}
            }
        }
        function x(e) {
            var t = this;
            return this[e] = this[e] || {},
            function(n) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
                t[e][r] = Object.assign(t[e][r] || {}, n)
            }
        }
        function S() {
            for (var e = this.props, t = e._id, n = e._tplContext.componentIndexSet, r = n.length - 1; r >= 0; r--)
                if (n[r].id === t)
                    return void (n[r].context = this)
        }
        function k() {
            var e = this
              , t = this.props._tplContext.lifeCycles.componentWillBindEvent
              , n = p.driver.findDOMNode(this);
            if (!n)
                return !1;
            var r = this.getEvents();
            if (Object.keys(r).length > 0) {
                var o = h.bindGestureEvent(n)
                  , i = function(i) {
                    var a = r[i];
                    t.call(e, a, n),
                    a && o.on(i, (function(t) {
                        var n = e.getEvents();
                        (a = n[i]).handler(t)
                    }
                    ))
                };
                for (var a in r)
                    i(a)
            }
        }
        function P() {
            for (var e = this.props, t = e._tplContext, n = e._id, r = t.componentIndexSet, o = r.length - 1; o >= 0; o--) {
                var i = r[o]
                  , a = i.id
                  , s = i.pid;
                if (a === n) {
                    if (!s)
                        break;
                    for (var c = o - 1; c >= 0; c--) {
                        var u = r[c]
                          , l = u.id
                          , f = u.props;
                        if (s === l)
                            return f
                    }
                }
            }
            return null
        }
        var E = {};
        function j() {
            var e = this
              , t = p.getGlobalConfig("shouldSplitLayoutTask");
            this.calcLayoutSize = function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y
                  , r = e.props._tplContext
                  , o = r.componentIndexSet
                  , i = (r.lifeCycles,
                e.getTemplateId())
                  , a = E[i];
                a && window.clearTimeout(a),
                E[i] = setTimeout((function() {
                    for (var e = function(e) {
                        var r = o[e].context;
                        r && r.dynamicCalcSize && (t ? h.runframeTask(n)((function() {
                            return r.dynamicCalcSize()
                        }
                        )) : r.dynamicCalcSize())
                    }, r = o.length - 1; r >= 0; r--)
                        e(r);
                    t || n()
                }
                ), 0)
            }
        }
        function C() {
            var e = this
              , t = {
                shouldComponentUpdate: function(t, n) {
                    return !(!n && !t.children && h.isEqual(t, e.props) || (e.propParser(t),
                    0))
                },
                componentWillMount: function() {
                    e.propParser()
                },
                componentDidMount: function() {
                    var t = e.props._tplContext
                      , n = t.lifeCycles
                      , r = t.shadow;
                    n.componentFinishFirstPaint.call(e, e.dxCompId, p.driver.findDOMNode(e), r, {
                        bindData: e._bindData
                    }),
                    p.getGlobalConfig("disableEventBinding") || k.call(e)
                },
                componentWillUnmount: y,
                componentWillReceiveProps: y,
                componentWillUpdate: y,
                componentDidUpdate: y
            }
              , n = function(n) {
                var r = t[n]
                  , o = e[n] || function() {}
                ;
                e[n] = function() {
                    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                        n[i] = arguments[i];
                    var a = r.apply(e, n)
                      , s = o.apply(e, n);
                    return s || a
                }
            };
            for (var r in t)
                n(r)
        }
        _.defaultProps = {
            gravity: "leftTop"
        },
        t.default = _
    }
    , function(e) {
        e.exports = function() {
            "use strict";
            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(t)
            }
            function t(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var n = window.document
              , r = n.documentElement
              , o = function(e) {
                return Array.prototype.slice.call(e)
            }
              , i = {}
              , a = null
              , s = "ontouchstart"in r
              , c = {
                tap: "click"
            }
              , u = function(e, t) {
                return Math.abs(e) > Math.abs(t) ? e < 0 ? "left" : "right" : t < 0 ? "up" : "down"
            };
            function l(e, t) {
                for (var n = e; n; ) {
                    if (n.contains(t) || n === t)
                        return n;
                    n = n.parentNode
                }
                return null
            }
            function f(t, r, o) {
                var i = n.createEvent("HTMLEvents");
                if (i.initEvent(r, !0, !0),
                "object" === e(o))
                    for (var a in o)
                        i[a] = o[a];
                t.dispatchEvent(i)
            }
            function d(e) {
                var t, n, a, s;
                function c(n, r) {
                    return function() {
                        "tapping" === t.status && (t.status = "longTapping",
                        f(n, "dx_longtap", {
                            touch: r,
                            touches: e.touches,
                            changedTouches: e.changedTouches,
                            touchEvent: e
                        })),
                        clearTimeout(t.longTapHandler),
                        t.longTapHandler = null
                    }
                }
                0 === Object.keys(i).length && (r.addEventListener("touchmove", p, !1),
                r.addEventListener("touchend", h, !1),
                r.addEventListener("touchcancel", v, !1));
                for (var u = 0; u < e.changedTouches.length; u++) {
                    for (var d in a = {},
                    n = e.changedTouches[u])
                        a[d] = n[d];
                    t = {
                        startTouch: a,
                        startTime: Date.now(),
                        status: "tapping",
                        element: e.srcElement || e.target,
                        longTapHandler: setTimeout(c(e.srcElement || e.target, e.changedTouches[u]), 500)
                    },
                    i[n.identifier] = t
                }
                if (2 === Object.keys(i).length) {
                    for (var m in s = [],
                    i)
                        s.push(i[m].element);
                    f(l(s[0], s[1]), "dx_dualtouchstart", {
                        touches: o(e.touches),
                        touchEvent: e
                    })
                }
            }
            function p(e) {
                for (var t = 0; t < e.changedTouches.length; t++) {
                    var n = e.changedTouches[t]
                      , r = i[n.identifier];
                    if (!r)
                        return;
                    r.lastTouch || (r.lastTouch = r.startTouch),
                    r.lastTime || (r.lastTime = r.startTime),
                    r.velocityX || (r.velocityX = 0),
                    r.velocityY || (r.velocityY = 0),
                    r.duration || (r.duration = 0);
                    var o = Date.now() - r.lastTime
                      , a = (n.clientX - r.lastTouch.clientX) / o
                      , s = (n.clientY - r.lastTouch.clientY) / o;
                    for (var c in o > 70 && (o = 70),
                    r.duration + o > 70 && (r.duration = 70 - o),
                    r.velocityX = (r.velocityX * r.duration + a * o) / (r.duration + o),
                    r.velocityY = (r.velocityY * r.duration + s * o) / (r.duration + o),
                    r.duration += o,
                    r.lastTouch = {},
                    n)
                        r.lastTouch[c] = n[c];
                    r.lastTime = Date.now();
                    var d = n.clientX - r.startTouch.clientX
                      , p = n.clientY - r.startTouch.clientY
                      , h = u(d, p)
                      , v = Math.sqrt(Math.pow(d, 2) + Math.pow(p, 2));
                    ("tapping" === r.status || "longTapping" === r.status) && v > 10 && (r.status = "panning",
                    f(r.element, "dx_panbegin", {
                        touch: n,
                        touches: e.touches,
                        changedTouches: e.changedTouches,
                        touchEvent: e,
                        direction: h
                    })),
                    "panning" === r.status && (r.panTime = Date.now(),
                    f(r.element, "dx_panmove", {
                        displacementX: d,
                        displacementY: p,
                        touch: n,
                        direction: h,
                        touches: e.touches,
                        changedTouches: e.changedTouches,
                        touchEvent: e
                    }))
                }
                if (2 === Object.keys(i).length) {
                    for (var m, g = [], y = [], b = [], w = 0; w < e.touches.length; w++) {
                        var _ = e.touches[w]
                          , O = i[_.identifier];
                        g.push([O.startTouch.clientX, O.startTouch.clientY]),
                        y.push([_.clientX, _.clientY])
                    }
                    for (var x in i)
                        b.push(i[x].element);
                    S = g[0][0],
                    k = g[0][1],
                    P = g[1][0],
                    E = g[1][1],
                    j = y[0][0],
                    C = y[0][1],
                    A = y[1][0],
                    T = y[1][1],
                    R = Math.atan2(T - C, A - j) - Math.atan2(E - k, P - S),
                    I = Math.sqrt((Math.pow(T - C, 2) + Math.pow(A - j, 2)) / (Math.pow(E - k, 2) + Math.pow(P - S, 2))),
                    N = [j - I * S * Math.cos(R) + I * k * Math.sin(R), C - I * k * Math.cos(R) - I * S * Math.sin(R)],
                    m = {
                        rotate: R,
                        scale: I,
                        translate: N,
                        matrix: [[I * Math.cos(R), -I * Math.sin(R), N[0]], [I * Math.sin(R), I * Math.cos(R), N[1]], [0, 0, 1]]
                    },
                    f(l(b[0], b[1]), "dx_dualtouch", {
                        transform: m,
                        touches: e.touches,
                        touchEvent: e
                    })
                }
                var S, k, P, E, j, C, A, T, R, I, N
            }
            function h(e) {
                if (2 === Object.keys(i).length) {
                    var t = [];
                    for (var n in i)
                        t.push(i[n].element);
                    f(l(t[0], t[1]), "dx_dualtouchend", {
                        touches: o(e.touches),
                        touchEvent: e
                    })
                }
                for (var s = 0; s < e.changedTouches.length; s++) {
                    var c = e.changedTouches[s]
                      , d = c.identifier
                      , m = i[d];
                    if (m) {
                        if (m.longTapHandler && (clearTimeout(m.longTapHandler),
                        m.longTapHandler = null),
                        "tapping" === m.status && (m.timestamp = Date.now(),
                        f(m.element, "dx_tap", {
                            touch: c,
                            touchEvent: e
                        }),
                        a && m.timestamp - a.timestamp < 300 && f(m.element, "dx_doubletap", {
                            touch: c,
                            touchEvent: e
                        }),
                        a = m),
                        "panning" === m.status) {
                            var g = Date.now()
                              , y = g - m.startTime
                              , b = c.clientX - m.startTouch.clientX
                              , w = c.clientY - m.startTouch.clientY
                              , _ = u(b, w)
                              , O = Math.sqrt(m.velocityY * m.velocityY + m.velocityX * m.velocityX) > .5 && g - m.lastTime < 100
                              , x = {
                                duration: y,
                                isflick: O,
                                velocityX: m.velocityX,
                                velocityY: m.velocityY,
                                displacementX: b,
                                displacementY: w,
                                touch: c,
                                direction: _,
                                touches: e.touches,
                                changedTouches: e.changedTouches,
                                touchEvent: e
                            };
                            f(m.element, "dx_panend", x),
                            O && f(m.element, "dx_swipe", x)
                        }
                        delete i[d]
                    }
                }
                0 === Object.keys(i).length && (r.removeEventListener("touchmove", p, !1),
                r.removeEventListener("touchend", h, !1),
                r.removeEventListener("touchcancel", v, !1))
            }
            function v(e) {
                if (2 === Object.keys(i).length) {
                    var t = [];
                    for (var n in i)
                        t.push(i[n].element);
                    f(l(t[0], t[1]), "dx_dualtouchend", {
                        touches: o(e.touches),
                        touchEvent: e
                    })
                }
                for (var a = 0; a < e.changedTouches.length; a++) {
                    var s = e.changedTouches[a]
                      , c = s.identifier
                      , u = i[c];
                    u && (u.longTapHandler && (clearTimeout(u.longTapHandler),
                    u.longTapHandler = null),
                    "panning" === u.status && f(u.element, "dx_panend", {
                        touch: s,
                        touches: e.touches,
                        changedTouches: e.changedTouches,
                        touchEvent: e
                    }),
                    delete i[c])
                }
                0 === Object.keys(i).length && (r.removeEventListener("touchmove", p, !1),
                r.removeEventListener("touchend", h, !1),
                r.removeEventListener("touchcancel", v, !1))
            }
            return function() {
                function e(t, n, o) {
                    var i = this;
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    this._pc_mode = o,
                    this._pc_mode || r.addEventListener("touchstart", d, !1),
                    this.el = t;
                    var a = function(e) {
                        var t = i.processEventType(e);
                        i.el.addEventListener(t, (function(t) {
                            t.stopPropagation(),
                            n[e](t)
                        }
                        ))
                    };
                    for (var s in n)
                        a(s)
                }
                var n, o, i;
                return n = e,
                (o = [{
                    key: "on",
                    value: function(e, t) {
                        var n = this.processEventType(e);
                        this.el.addEventListener(n, (function(e) {
                            e.stopPropagation(),
                            t(e)
                        }
                        ))
                    }
                }, {
                    key: "processEventType",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                          , t = e.toLowerCase()
                          , n = "dx_";
                        return s && !this._pc_mode || !c[t] || (t = c[t],
                        n = ""),
                        t = n + t
                    }
                }]) && t(n.prototype, o),
                i && t(n, i),
                e
            }()
        }()
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = n(52)
          , i = r(n(29))
          , a = (0,
        o.createPrefixer)(i.default);
        t.default = function(e) {
            return a(e)
        }
    }
    , function(e) {
        "use strict";
        var t = /[A-Z]/g
          , n = /^ms-/
          , r = {};
        function o(e) {
            return "-" + e.toLowerCase()
        }
        e.exports = function(e) {
            if (r.hasOwnProperty(e))
                return r[e];
            var i = e.replace(t, o);
            return r[e] = n.test(i) ? "-" + i : i
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = r(n(30))
          , i = r(n(31))
          , a = r(n(32))
          , s = r(n(33))
          , c = r(n(34))
          , u = r(n(35))
          , l = ["Webkit"]
          , f = {
            plugins: [o.default, i.default, a.default, s.default, c.default, u.default],
            prefixMap: {
                appearance: l,
                userSelect: l,
                textEmphasisPosition: l,
                textEmphasis: l,
                textEmphasisStyle: l,
                textEmphasisColor: l,
                boxDecorationBreak: l,
                clipPath: l,
                maskImage: l,
                maskMode: l,
                maskRepeat: l,
                maskPosition: l,
                maskClip: l,
                maskOrigin: l,
                maskSize: l,
                maskComposite: l,
                mask: l,
                maskBorderSource: l,
                maskBorderMode: l,
                maskBorderSlice: l,
                maskBorderWidth: l,
                maskBorderOutset: l,
                maskBorderRepeat: l,
                maskBorder: l,
                maskType: l,
                textDecorationStyle: l,
                textDecorationSkip: l,
                textDecorationLine: l,
                textDecorationColor: l,
                filter: l,
                fontFeatureSettings: l,
                breakAfter: l,
                breakBefore: l,
                breakInside: l,
                columnCount: l,
                columnFill: l,
                columnGap: l,
                columnRule: l,
                columnRuleColor: l,
                columnRuleStyle: l,
                columnRuleWidth: l,
                columns: l,
                columnSpan: l,
                columnWidth: l,
                writingMode: l,
                flex: l,
                flexBasis: l,
                flexDirection: l,
                flexGrow: l,
                flexFlow: l,
                flexShrink: l,
                flexWrap: l,
                alignContent: l,
                alignItems: l,
                alignSelf: l,
                justifyContent: l,
                order: l,
                transform: l,
                transformOrigin: l,
                transformOriginX: l,
                transformOriginY: l,
                backfaceVisibility: l,
                perspective: l,
                perspectiveOrigin: l,
                transformStyle: l,
                transformOriginZ: l,
                animation: l,
                animationDelay: l,
                animationDirection: l,
                animationFillMode: l,
                animationDuration: l,
                animationIterationCount: l,
                animationName: l,
                animationPlayState: l,
                animationTimingFunction: l,
                backdropFilter: l,
                fontKerning: l,
                scrollSnapType: l,
                scrollSnapPointsX: l,
                scrollSnapPointsY: l,
                scrollSnapDestination: l,
                scrollSnapCoordinate: l,
                textSizeAdjust: l,
                shapeImageThreshold: l,
                shapeImageMargin: l,
                shapeImageOutside: l,
                hyphens: l,
                flowInto: l,
                flowFrom: l,
                regionFragment: l,
                borderImage: l,
                borderImageOutset: l,
                borderImageRepeat: l,
                borderImageSlice: l,
                borderImageSource: l,
                borderImageWidth: l,
                transitionDelay: l,
                transitionDuration: l,
                transitionProperty: l,
                transitionTimingFunction: l
            }
        };
        t.default = f
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            if ("string" == typeof t && "text" === t)
                return ["-webkit-text", "text"]
        }
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            if ("display" === e && n.hasOwnProperty(t))
                return n[t]
        }
        ;
        var n = {
            flex: ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex", "flex"],
            "inline-flex": ["-webkit-inline-box", "-moz-inline-box", "-ms-inline-flexbox", "-webkit-inline-flex", "inline-flex"]
        }
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, o) {
            "flexDirection" === e && "string" == typeof t && (t.indexOf("column") > -1 ? o.WebkitBoxOrient = "vertical" : o.WebkitBoxOrient = "horizontal",
            t.indexOf("reverse") > -1 ? o.WebkitBoxDirection = "reverse" : o.WebkitBoxDirection = "normal"),
            r.hasOwnProperty(e) && (o[r[e]] = n[t] || t)
        }
        ;
        var n = {
            "space-around": "justify",
            "space-between": "justify",
            "flex-start": "start",
            "flex-end": "end",
            "wrap-reverse": "multiple",
            wrap: "multiple"
        }
          , r = {
            alignItems: "WebkitBoxAlign",
            justifyContent: "WebkitBoxPack",
            flexWrap: "WebkitBoxLines",
            flexGrow: "WebkitBoxFlex"
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            if ("string" == typeof t && !(0,
            i.default)(t) && s.test(t))
                return a.map((function(e) {
                    return t.replace(s, (function(t) {
                        return e + t
                    }
                    ))
                }
                ))
        }
        ;
        var r, o = n(9), i = (r = o) && r.__esModule ? r : {
            default: r
        }, a = ["-webkit-", "-moz-", ""], s = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, r) {
            if (Object.prototype.hasOwnProperty.call(n, e))
                for (var o = n[e], i = 0, a = o.length; i < a; ++i)
                    r[o[i]] = t
        }
        ;
        var n = {
            marginBlockStart: ["WebkitMarginBefore"],
            marginBlockEnd: ["WebkitMarginAfter"],
            marginInlineStart: ["WebkitMarginStart", "MozMarginStart"],
            marginInlineEnd: ["WebkitMarginEnd", "MozMarginEnd"],
            paddingBlockStart: ["WebkitPaddingBefore"],
            paddingBlockEnd: ["WebkitPaddingAfter"],
            paddingInlineStart: ["WebkitPaddingStart", "MozPaddingStart"],
            paddingInlineEnd: ["WebkitPaddingEnd", "MozPaddingEnd"],
            borderBlockStart: ["WebkitBorderBefore"],
            borderBlockStartColor: ["WebkitBorderBeforeColor"],
            borderBlockStartStyle: ["WebkitBorderBeforeStyle"],
            borderBlockStartWidth: ["WebkitBorderBeforeWidth"],
            borderBlockEnd: ["WebkitBorderAfter"],
            borderBlockEndColor: ["WebkitBorderAfterColor"],
            borderBlockEndStyle: ["WebkitBorderAfterStyle"],
            borderBlockEndWidth: ["WebkitBorderAfterWidth"],
            borderInlineStart: ["WebkitBorderStart", "MozBorderStart"],
            borderInlineStartColor: ["WebkitBorderStartColor", "MozBorderStartColor"],
            borderInlineStartStyle: ["WebkitBorderStartStyle", "MozBorderStartStyle"],
            borderInlineStartWidth: ["WebkitBorderStartWidth", "MozBorderStartWidth"],
            borderInlineEnd: ["WebkitBorderEnd", "MozBorderEnd"],
            borderInlineEndColor: ["WebkitBorderEndColor", "MozBorderEndColor"],
            borderInlineEndStyle: ["WebkitBorderEndStyle", "MozBorderEndStyle"],
            borderInlineEndWidth: ["WebkitBorderEndWidth", "MozBorderEndWidth"]
        }
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t) {
            if ("position" === e && "sticky" === t)
                return ["-webkit-sticky", "sticky"]
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(3))
          , a = o(n(4))
          , s = o(n(5))
          , c = o(n(6))
          , u = o(n(7))
          , l = r(n(1))
          , f = o(n(16))
          , d = n(14);
        function p(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                u.default)(e);
                if (t) {
                    var o = (0,
                    u.default)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                c.default)(this, n)
            }
        }
        var h = function(e) {
            (0,
            s.default)(n, e);
            var t = p(n);
            function n(e) {
                return (0,
                i.default)(this, n),
                t.call(this, e)
            }
            return (0,
            a.default)(n, [{
                key: "listData",
                value: function(e) {
                    this._listData = e
                }
            }, {
                key: "renderLoopChildren",
                value: function() {
                    var e = this
                      , t = []
                      , n = this.getChildren()
                      , r = this.props
                      , o = {
                        flexShrink: 0,
                        flexGrow: 0,
                        height: "fit-content",
                        paddingTop: 5,
                        paddingBottom: 5
                    };
                    return this._listData && this._listData.forEach((function(i, a) {
                        n.forEach((function(n) {
                            var s = n.props._originProps.filter
                              , c = s && l.dataParser(s, {
                                data: i
                            });
                            void 0 !== c && !0 !== c && "true" !== c || t.push(l.h("div", {
                                key: a,
                                className: "list-item",
                                style: o
                            }, d.loopMergeSubData.call(e, n, i, a, r._id)))
                        }
                        ))
                    }
                    )),
                    t
                }
            }, {
                key: "renderView",
                value: function() {
                    return l.h("div", {
                        ref: "adaptive",
                        style: {
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "nowrap"
                        }
                    }, this.renderLoopChildren())
                }
            }]),
            n
        }(f.default);
        l.registerView("AdaptiveLinearLayout", h),
        t.default = h
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(38))
          , a = o(n(3))
          , s = o(n(4))
          , c = o(n(5))
          , u = o(n(6))
          , l = o(n(7))
          , f = o(n(10));
        o(n(19));
        var d = r(n(1))
          , p = o(n(16))
          , h = r(n(8));
        function v(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                l.default)(e);
                if (t) {
                    var o = (0,
                    l.default)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                u.default)(this, n)
            }
        }
        function m(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function g(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? m(Object(n), !0).forEach((function(t) {
                    (0,
                    f.default)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var y = /(\$|\@)?subdata/
          , b = /^[d][A-Z]/;
        function w(e) {
            if (b.test(e)) {
                var t = e.slice(1);
                e = t[0].toLowerCase() + t.slice(1)
            }
            return e
        }
        function _(e, t, n, r) {
            var o = this;
            if (e) {
                var i = this.props._tplId
                  , a = this.props._tplContext
                  , s = e.props
                  , c = g({
                    key: "".concat(s._id, "-").concat(n)
                }, s)
                  , u = c._id = "cc".concat(++a.componentIdSeq)
                  , l = s._originProps;
                for (var f in l) {
                    var p = l[f]
                      , v = w(f);
                    if (y.test(p)) {
                        var m = {
                            data: t,
                            _tplId: i
                        };
                        "on" === v.slice(0, 2) ? c[v] = d.eventHandlerParser(p, m) : c[v] = d.dataParser(p, m)
                    }
                }
                a.componentIndexSet.push({
                    id: u,
                    props: c,
                    pid: r
                });
                var b = s.children;
                return b && (Array.isArray(b) ? b = b.map((function(e) {
                    return _.call(o, e, t, n, u)
                }
                )) : h.isObject(b) && (b = _.call(this, b, t, n, u))),
                d.driver.cloneElement(e, c, b)
            }
        }
        var O = function(e) {
            (0,
            c.default)(n, e);
            var t = v(n);
            function n() {
                return (0,
                a.default)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            s.default)(n, [{
                key: "listData",
                value: function(e) {
                    this._listData = e
                }
            }, {
                key: "renderLoopChildren",
                value: function() {
                    var e = this
                      , t = []
                      , n = this.getChildren()
                      , r = this.props
                      , o = {
                        flexShrink: 0,
                        flexGrow: 0,
                        height: "fit-content"
                    };
                    return Array.isArray(this._listData) && this._listData.forEach((function(i, a) {
                        n.forEach((function(n) {
                            var s = n.props._id
                              , c = n.props._originProps.filter
                              , u = c && d.dataParser(c, {
                                data: i
                            })
                              , l = n.props._originProps.visibility
                              , f = l && d.dataParser(l, {
                                _tplId: r._tplId,
                                data: i
                            })
                              , p = o;
                            n.props.weight && (p = g(g({}, o), {}, {
                                flex: n.props.weight,
                                width: "1%"
                            })),
                            "gone" === f || void 0 !== u && !0 !== u && "true" !== u || t.push(d.h("div", {
                                key: "".concat(s, "-").concat(a),
                                className: "list-item",
                                style: p
                            }, _.call(e, n, i, a, r._id)))
                        }
                        ))
                    }
                    )),
                    t
                }
            }, {
                key: "renderView",
                value: function() {
                    return this.renderLoopChildren()
                }
            }]),
            n
        }(p.default);
        O.defaultProps = {
            orientation: "horizontal"
        },
        d.registerDataParser("subdata", (function(e, t, n) {
            var r = (0,
            i.default)(e, 1)[0];
            return r ? h.deepGet(n.data, r) : n.data
        }
        )),
        d.registerView("ListLayout", O),
        d.registerView("DLoopLinearLayout", O),
        t.default = O
    }
    , function(e, t, n) {
        var r = n(39)
          , o = n(40)
          , i = n(41)
          , a = n(43);
        e.exports = function(e, t) {
            return r(e) || o(e, t) || i(e, t) || a()
        }
    }
    , function(e) {
        e.exports = function(e) {
            if (Array.isArray(e))
                return e
        }
    }
    , function(e) {
        e.exports = function(e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var n = []
                  , r = !0
                  , o = !1
                  , i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    o = !0,
                    i = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (o)
                            throw i
                    }
                }
                return n
            }
        }
    }
    , function(e, t, n) {
        var r = n(42);
        e.exports = function(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return r(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
            }
        }
    }
    , function(e) {
        e.exports = function(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
    }
    , function(e) {
        e.exports = function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(3))
          , a = o(n(4))
          , s = o(n(5))
          , c = o(n(6))
          , u = o(n(7))
          , l = r(n(1))
          , f = o(n(13));
        function d(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                u.default)(e);
                if (t) {
                    var o = (0,
                    u.default)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                c.default)(this, n)
            }
        }
        n(8);
        var p = function(e) {
            (0,
            s.default)(n, e);
            var t = d(n);
            function n() {
                return (0,
                i.default)(this, n),
                t.apply(this, arguments)
            }
            return (0,
            a.default)(n, [{
                key: "flexDirection",
                value: function(e) {
                    this.setStyles({
                        flexDirection: e
                    })
                }
            }, {
                key: "flexWrap",
                value: function(e) {
                    this.setStyles({
                        flexWrap: e
                    })
                }
            }, {
                key: "justifyContent",
                value: function(e) {
                    this.setStyles({
                        justifyContent: e
                    })
                }
            }, {
                key: "alignItems",
                value: function(e) {
                    this.setStyles({
                        alignItems: e
                    })
                }
            }, {
                key: "alignContent",
                value: function(e) {
                    this.setStyles({
                        alignContent: e
                    })
                }
            }, {
                key: "renderView",
                value: function() {
                    return this.props.children
                }
            }]),
            n
        }(f.default);
        p.defaultProps = {},
        l.registerView("FlexLayout", p),
        l.registerView("HFlexLayout", p),
        t.default = p
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(3))
          , a = o(n(4))
          , s = o(n(11))
          , c = o(n(5))
          , u = o(n(6))
          , l = o(n(7))
          , f = o(n(10))
          , d = r(n(1))
          , p = o(n(13))
          , h = n(14);
        function v(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                l.default)(e);
                if (t) {
                    var o = (0,
                    l.default)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                u.default)(this, n)
            }
        }
        var m = function(e) {
            (0,
            c.default)(n, e);
            var t = v(n);
            function n(e) {
                var r;
                (0,
                i.default)(this, n),
                r = t.call(this, e),
                (0,
                f.default)((0,
                s.default)(r), "itemHeight", (function(e) {
                    r._itemHeight = d.unitParser(e)
                }
                )),
                (0,
                f.default)((0,
                s.default)(r), "needSeparator", ["lineColor", "lineWidth", function(e) {
                    r._needSeparator = r._lineColor && r._lineWidth && "true" === e,
                    r._borderStyle = r._needSeparator ? "".concat(r._lineWidth, " solid ").concat(r._lineColor) : ""
                }
                ]),
                (0,
                f.default)((0,
                s.default)(r), "listData", ["columnCount", function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                      , t = Number(r._columnCount);
                    r._listData = [];
                    for (var n = 0; n < e.length / r._columnCount; n++) {
                        var o = n * t;
                        r._listData.push(e.slice(o, o + t))
                    }
                }
                ]);
                var o = e.columnCount
                  , a = e.itemWidth
                  , c = e.itemHeight;
                return o && a && c || (d.utils.log.error("GridLayout \u63a7\u4ef6 columnCount/itemWidth/itemHeight \u4e3a\u5fc5\u586b\u5c5e\u6027"),
                r._error = !1),
                r.setStyles({
                    flexDirection: "column"
                }),
                r
            }
            return (0,
            a.default)(n, [{
                key: "columnCount",
                value: function(e) {
                    this._columnCount = e
                }
            }, {
                key: "itemWidth",
                value: function(e) {
                    this._itemWidth = d.unitParser(e)
                }
            }, {
                key: "rowCount",
                value: function() {}
            }, {
                key: "rowSpacing",
                value: function(e) {
                    this._rowSpacing = d.unitParser(e)
                }
            }, {
                key: "columnSpacing",
                value: function(e) {
                    this._columnSpacing = d.unitParser(e)
                }
            }, {
                key: "lineColor",
                value: function(e) {
                    this._lineColor = e
                }
            }, {
                key: "lineWidth",
                value: function(e) {
                    this._lineWidth = d.unitParser(e)
                }
            }, {
                key: "renderLoopChildren",
                value: function() {
                    var e = this
                      , t = []
                      , n = this.getChildren()
                      , r = this.props;
                    return this._listData.length,
                    Array.isArray(this._listData) && this._listData.map((function(o, i) {
                        var a = {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            borderTop: i && e._borderStyle ? e._borderStyle : ""
                        }
                          , s = o.map((function(t, o) {
                            return n.map((function(n) {
                                var a = n.props._id
                                  , s = i * e._columnCount + o
                                  , c = "".concat(a, "-").concat(i, "-").concat(o)
                                  , u = {
                                    overflow: "hidden",
                                    width: e._itemWidth,
                                    height: e._itemHeight,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginLeft: o && e._columnSpacing ? e._columnSpacing : 0,
                                    borderLeft: o && e._borderStyle ? e._borderStyle : "",
                                    marginTop: i && e._rowSpacing ? e._rowSpacing : 0
                                };
                                return d.h("div", {
                                    key: c,
                                    className: "grid-item",
                                    style: u
                                }, h.loopMergeSubData.call(e, n, t, s, r._id))
                            }
                            ))
                        }
                        ));
                        t.push(d.h("div", {
                            key: "gridrow".concat(i),
                            className: "grid-row",
                            style: a
                        }, s))
                    }
                    )),
                    t
                }
            }, {
                key: "renderView",
                value: function() {
                    return this._error ? null : this.renderLoopChildren()
                }
            }]),
            n
        }(p.default);
        m.defaultProps = {
            rowSpacing: 0,
            needSeparator: !1,
            lineWidth: 0
        },
        d.registerView("GridLayout", m),
        t.default = m
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(3))
          , a = o(n(4))
          , s = o(n(5))
          , c = o(n(6))
          , u = o(n(7))
          , l = r(n(1))
          , f = o(n(13))
          , d = n(14);
        function p(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                u.default)(e);
                if (t) {
                    var o = (0,
                    u.default)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                c.default)(this, n)
            }
        }
        var h = function(e) {
            (0,
            s.default)(n, e);
            var t = p(n);
            function n(e) {
                var r;
                return (0,
                i.default)(this, n),
                (r = t.call(this, e)).setStyles({
                    overflow: "auto"
                }),
                r
            }
            return (0,
            a.default)(n, [{
                key: "listData",
                value: function(e) {
                    console.log(e),
                    this._listData = e
                }
            }, {
                key: "paddingRight",
                value: function(e) {
                    this._paddingRight = l.unitParser(e)
                }
            }, {
                key: "renderLoopChildren",
                value: function() {
                    var e = this
                      , t = []
                      , n = this.getChildren()
                      , r = this.props
                      , o = {};
                    return Array.isArray(this._listData) && this._listData.forEach((function(i, a) {
                        n.forEach((function(n) {
                            var s = n.props._id;
                            t.push(l.h("div", {
                                key: "".concat(s, "-").concat(a),
                                className: "scroller-item",
                                style: o
                            }, d.loopMergeSubData.call(e, n, i, a, r._id)))
                        }
                        ))
                    }
                    )),
                    this._paddingRight && t.length && t.push(l.h("div", {
                        style: {
                            paddingRight: this._paddingRight
                        }
                    })),
                    t
                }
            }, {
                key: "renderView",
                value: function() {
                    return this.renderLoopChildren()
                }
            }]),
            n
        }(f.default);
        h.defaultProps = {
            rowSpacing: 0,
            needSeparator: !1,
            lineWidth: 0
        },
        l.registerView("ScrollerLayout", h),
        t.default = h
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(10))
          , a = o(n(3))
          , s = o(n(4))
          , c = o(n(5))
          , u = o(n(6))
          , l = o(n(7))
          , f = r(n(1))
          , d = o(n(12));
        o(n(48));
        var p = n(8);
        function h(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(Object(n), !0).forEach((function(t) {
                    (0,
                    i.default)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function m(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                l.default)(e);
                if (t) {
                    var o = (0,
                    l.default)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                u.default)(this, n)
            }
        }
        var g = /(gw|img|sc01|sc\d+|g\d+|i|s)\.alicdn\.com/
          , y = /(\.(gif))$/
          , b = [".png_", ".jpeg_", ".jpg_", ".webp_"]
          , w = [80, 120, 220, 350, 480, 640]
          , _ = {
            "/gw.alicdn.com/": "/s.alicdn.com/@img/",
            "/img.alicdn.com/": "/s.alicdn.com/@img/"
        };
        function O(e, t, n) {
            if (!g.test(n) || y.test(n))
                return n;
            for (var r = !1, o = 0; o < b.length; o++)
                if (n.indexOf(b[o]) > 0) {
                    r = !0;
                    break
                }
            if (r)
                return n;
            var i = parseInt(e) || -1
              , a = parseInt(t) || -1
              , s = "_640x640";
            if (i > 0)
                for (var c = 2 * Math.max(i, a), u = 0, l = w.length; u < l; u++)
                    if (w[u] > c) {
                        var f = w[u];
                        s = "_".concat(f, "x").concat(f);
                        break
                    }
            var d = s + "q80.jpg";
            return function(e) {
                var t = /sc\d+.alicdn.com/;
                if (t.test(e))
                    e = e.replace(t, "s.alicdn.com/@sc01");
                else
                    for (var n in _)
                        e = e.replace(n, _[n]);
                return e
            }(function(e) {
                for (var t = e, n = e.split("/").pop(), r = 0, o = [".png_", ".jpeg_", ".jpg_", ".webp_"]; r < o.length; r++) {
                    var i = o[r]
                      , a = n.indexOf(i);
                    if (a > 0) {
                        t = e.substr(0, e.length - (n.length - a)),
                        t += i.substr(0, i.length - 1);
                        break
                    }
                }
                return t
            }(n)) + d
        }
        var x = function(e) {
            (0,
            c.default)(n, e);
            var t = m(n);
            function n(e) {
                var r;
                return (0,
                a.default)(this, n),
                (r = t.call(this, e)).setStyles({
                    width: "100%",
                    height: "100%"
                }, "img"),
                r.setStyles({
                    overflow: "hidden"
                }),
                r.imageData = {},
                r.forceOriginalImg = f.getGlobalConfig("forceOriginalImg") || (0,
                p.isTrue)(e.forceOriginal),
                r
            }
            return (0,
            s.default)(n, [{
                key: "componentDidMount",
                value: function() {
                    window.__lazyload && window.__lazyload.observeIntersection && window.__lazyload.observeIntersection(this.$img)
                }
            }, {
                key: "imageName",
                value: function() {}
            }, {
                key: "image",
                value: function() {}
            }, {
                key: "imageUrl",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                      , t = this.props
                      , n = t.width
                      , r = t.height
                      , o = t.aspectRatio
                      , i = "";
                    if (e && !this.forceOriginalImg && (i = O(n, r, e)),
                    "match_content" === n && void 0 === o || "match_content" === r && void 0 === o)
                        this.imageData = {
                            isAutoImg: !0,
                            imgSrc: i || e,
                            fallbackSrc: e
                        };
                    else if (this.imageData = {
                        isAutoImg: !1,
                        imgSrc: i || e,
                        fallbackSrc: e
                    },
                    o) {
                        var a = {}
                          , s = String(n)
                          , c = String(r)
                          , u = /match_/;
                        if (u.test(s) && r && !u.test(c)) {
                            var l = parseFloat(f.unitParser(c));
                            a.width = l * o + "px"
                        } else if (u.test(c) && s && !u.test(s)) {
                            var d = parseFloat(f.unitParser(s));
                            a.height = d / o + "px"
                        }
                        this.setStyles(a, "img")
                    }
                }
            }, {
                key: "aspectRatio",
                value: function(e) {
                    this.aspectRatioValue = e
                }
            }, {
                key: "scaleType",
                value: function(e) {
                    var t = {};
                    switch (e) {
                    case "fitXY":
                        t.width = "100%",
                        t.height = "100%";
                        break;
                    case "fitCenter":
                    case "centerInside":
                        t.width = "auto",
                        t.height = "auto",
                        t.maxWidth = "100%",
                        t.maxHeight = "100%",
                        "match_parent" == this.props.width && (t.width = "100%"),
                        "match_parent" == this.props.height && (t.height = "100%"),
                        this.setStyles({
                            justifyContent: "center",
                            alignItems: "center"
                        });
                        break;
                    case "centerCrop":
                        t.objectFit = "cover",
                        t.width = "100%",
                        t.height = "100%"
                    }
                    this.setStyles(t, "img")
                }
            }, {
                key: "dynamicImageLoaded",
                value: function() {
                    var e = this.imageData
                      , t = e.imgSrc
                      , n = e.isAutoImg
                      , r = this.$wrap;
                    if (n && r) {
                        var o = this.$img || {}
                          , i = o.naturalHeight
                          , a = void 0 === i ? null : i
                          , s = o.naturalWidth
                          , c = void 0 === s ? null : s
                          , u = this.props
                          , l = u.width
                          , f = u.height
                          , d = null;
                        if (a && c && (d = this.aspectRatioValue || c / a),
                        !d)
                            return;
                        if ("match_content" === l && "match_content" === f && (r.style.height = a,
                        r.style.width = c),
                        "match_content" === f && "match_content" !== l) {
                            var p = r.parentElement.offsetWidth;
                            r.style.height = "".concat(Math.ceil(parseFloat("match_parent" === l ? p : l) * (1 / d)), "px")
                        }
                        if ("match_content" === l && "match_content" !== f) {
                            var h = r.parentElement.offsetHeight;
                            r.style.width = "".concat(Math.ceil(d * parseFloat("match_parent" === f ? h : f)), "px")
                        }
                        this.calcLayoutSize()
                    }
                    r && (r.style.backgroundImage = "url(".concat(t, ")"))
                }
            }, {
                key: "dynamicImageLoadError",
                value: function() {
                    var e = this.imageData.fallbackSrc
                      , t = this.props
                      , n = t.width
                      , r = t.height;
                    this.forceOriginalImg || "match_parent" !== n || "match_parent" !== r || (e = O(n, r, e)),
                    e && this.$wrap && (this.$wrap.style.backgroundImage = "url(".concat(e, ")"))
                }
            }, {
                key: "renderView",
                value: function() {
                    var e = this
                      , t = (this.imageData || {}).imgSrc
                      , n = this.props
                      , r = (n.width,
                    n.height,
                    n.htmlAlt);
                    if (n.aspectRatio,
                    t && "undefined" !== t) {
                        var o = this.getStyles("img");
                        return f.h("img", {
                            onLoad: function() {
                                return e.dynamicImageLoaded()
                            },
                            onError: function() {
                                return e.dynamicImageLoadError()
                            },
                            className: "__dximg",
                            src: t,
                            ref: function(t) {
                                return e.$img = t
                            },
                            alt: r || null,
                            style: v({}, o)
                        })
                    }
                    return f.h("div", {
                        style: this.getStyles("img")
                    })
                }
            }]),
            n
        }(d.default);
        x.defaultProps = {
            scaleType: "fitCenter"
        },
        f.registerView("ImageView", x),
        f.registerView("DImageView", x),
        t.default = x
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var n = window.localStorage;
        t.default = function() {
            if (void 0 !== window.DXSUPPORTWEBP)
                return window.DXSUPPORTWEBP;
            var e = n.getItem("dx-isSupportWebp");
            if ("true" === e)
                return window.DXSUPPORTWEBP = "true" === e,
                window.DXSUPPORTWEBP;
            var t = 0 == document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp");
            try {
                n.setItem("dx-isSupportWebp", t ? "true" : "false")
            } catch (e) {
                console.warn(e)
            }
            return window.DXSUPPORTWEBP = t,
            t
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(3))
          , a = o(n(4))
          , s = o(n(11))
          , c = o(n(5))
          , u = o(n(6))
          , l = o(n(7))
          , f = o(n(10))
          , d = r(n(1))
          , p = o(n(12))
          , h = n(8);
        function v(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function m(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? v(Object(n), !0).forEach((function(t) {
                    (0,
                    f.default)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function g(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                l.default)(e);
                if (t) {
                    var o = (0,
                    l.default)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                u.default)(this, n)
            }
        }
        var y = function(e) {
            (0,
            c.default)(n, e);
            var t = g(n);
            function n() {
                var e;
                (0,
                i.default)(this, n);
                for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                    o[a] = arguments[a];
                return e = t.call.apply(t, [this].concat(o)),
                (0,
                f.default)((0,
                s.default)(e), "_checked", !1),
                (0,
                f.default)((0,
                s.default)(e), "_enabled", !0),
                (0,
                f.default)((0,
                s.default)(e), "switchOn", ["onColor", "offColor", function(e) {
                    var t = (0,
                    h.toLikeBoolean)(e);
                    this.setStyles({
                        backgroundColor: t ? this._onColor : this._offColor
                    }),
                    this._checked = t
                }
                ]),
                (0,
                f.default)((0,
                s.default)(e), "enabled", ["switchOn", function(t) {
                    var n = (0,
                    h.toLikeBoolean)(t);
                    n || e.setStyles({
                        backgroundColor: "#ccc"
                    }),
                    e._enabled = n
                }
                ]),
                (0,
                f.default)((0,
                s.default)(e), "toggleCheck", (function() {
                    var t = !e._checked;
                    e.setStyles({
                        backgroundColor: t ? e._onColor : e._offColor
                    });
                    var n = e.getEvents("switch").onChange;
                    n && n.handler({
                        value: t
                    })
                }
                )),
                e
            }
            return (0,
            a.default)(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = this
                      , t = this.$switch;
                    this.$switch && this.$switch.parentNode && (t = this.$switch.parentNode),
                    (0,
                    h.bindGestureEvent)(t, {
                        tap: function() {
                            e._enabled && e.toggleCheck()
                        }
                    })
                }
            }, {
                key: "componentWillMount",
                value: function() {
                    this._preprocessingStyle()
                }
            }, {
                key: "_preprocessingStyle",
                value: function() {
                    var e = this.props.height
                      , t = d.unitParser(e)
                      , n = t.replace(/(\d*)/, (function(e) {
                        return e - 2
                    }
                    ));
                    this.setStyles({
                        borderRadius: t
                    }),
                    this.setStyles(m(m({}, b), {}, {
                        width: n,
                        height: n
                    }), "switch"),
                    this.setStyles({
                        left: "1px"
                    }, "switchNormal"),
                    this.setStyles({
                        right: "1px"
                    }, "switchActive"),
                    this.setStyles({
                        boxShadow: "inset 0 0 0 1px #ccc"
                    })
                }
            }, {
                key: "onColor",
                value: function(e) {
                    this._onColor = d.colorParser(e)
                }
            }, {
                key: "offColor",
                value: function(e) {
                    this._offColor = d.colorParser(e)
                }
            }, {
                key: "onChange",
                value: function(e) {
                    this.setEvents({
                        onChange: e
                    }, "switch")
                }
            }, {
                key: "renderView",
                value: function() {
                    var e = this;
                    return d.h("div", {
                        style: m(m({}, this.getStyles("switch")), this.getStyles(this._checked ? "switchActive" : "switchNormal")),
                        ref: function(t) {
                            return e.$switch = t
                        }
                    })
                }
            }]),
            n
        }(p.default)
          , b = {
            position: "absolute",
            top: "1px",
            borderRadius: "50%",
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 2px 5px 1px #ccc"
        };
        y.defaultProps = {
            width: "25np",
            height: "12.5np",
            onColor: "#ff5000",
            offColor: "#FFFFFF",
            switchOn: 0
        },
        d.registerView("Switch", y),
        d.registerView("DSwitch", y),
        t.default = y
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(3))
          , a = o(n(4))
          , s = o(n(11))
          , c = o(n(5))
          , u = o(n(6))
          , l = o(n(7))
          , f = o(n(10))
          , d = r(n(1))
          , p = o(n(12))
          , h = n(8);
        function v(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                l.default)(e);
                if (t) {
                    var o = (0,
                    l.default)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                u.default)(this, n)
            }
        }
        var m = /^((http(s)?)|(data:image))/
          , g = function(e, t) {
            if (m.test(e))
                return e;
            var n = d.getLocalImage(e);
            return n || d.getLocalImage(t)
        }
          , y = function(e) {
            (0,
            c.default)(n, e);
            var t = v(n);
            function n() {
                var e;
                (0,
                i.default)(this, n);
                for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                    o[a] = arguments[a];
                return e = t.call.apply(t, [this].concat(o)),
                (0,
                f.default)((0,
                s.default)(e), "_enabled", !0),
                (0,
                f.default)((0,
                s.default)(e), "_checked", !1),
                (0,
                f.default)((0,
                s.default)(e), "_selfChecked", null),
                (0,
                f.default)((0,
                s.default)(e), "toggleCheck", (function() {
                    e._selfChecked = !e._checked,
                    e.forceUpdate();
                    var t = e.getEvents("checkbox").onChange;
                    t && t.handler({
                        value: e._selfChecked
                    })
                }
                )),
                e
            }
            return (0,
            a.default)(n, [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    (0,
                    h.bindGestureEvent)(this.$checkbox, {
                        tap: function() {
                            e._enabled && e.toggleCheck()
                        }
                    })
                }
            }, {
                key: "_updateImages",
                value: function() {
                    this.setStyles({
                        borderRadius: "50%",
                        width: "100%",
                        height: "100%"
                    }, "checkbox");
                    var e = this._checked
                      , t = this._enabled
                      , n = e ? "checked" : "unchecked"
                      , r = this["_".concat(t ? "" : "dis").concat(n, "Img")];
                    this.setStyles({
                        background: "url(".concat(r, ") 0% 0% / 100% 100%")
                    }, "checkbox")
                }
            }, {
                key: "enabled",
                value: function(e) {
                    this._enabled = (0,
                    h.toLikeBoolean)(e)
                }
            }, {
                key: "checked",
                value: function(e) {
                    var t = this._selfChecked;
                    null !== t ? (this._checked = t,
                    this._selfChecked = null) : this._checked = (0,
                    h.toLikeBoolean)(e)
                }
            }, {
                key: "checkImg",
                value: function(e) {
                    this._checkedImg = g(e, "dinamicx_checked")
                }
            }, {
                key: "disCheckImg",
                value: function(e) {
                    this._discheckedImg = g(e, "dinamicx_discheck")
                }
            }, {
                key: "uncheckImg",
                value: function(e) {
                    this._uncheckedImg = g(e, "dinamicx_uncheck")
                }
            }, {
                key: "disUncheckImg",
                value: function(e) {
                    this._disuncheckedImg = g(e, "dinamicx_disunchk")
                }
            }, {
                key: "onChange",
                value: function(e) {
                    this.setEvents({
                        onChange: e
                    }, "checkbox")
                }
            }, {
                key: "renderView",
                value: function() {
                    var e = this;
                    return this._updateImages(),
                    d.h("div", {
                        style: this.getStyles("checkbox"),
                        ref: function(t) {
                            return e.$checkbox = t
                        }
                    })
                }
            }]),
            n
        }(p.default);
        y.defaultProps = {
            enabled: 1,
            checked: 0,
            checkImg: "dinamicx_checked",
            disCheckImg: "dinamicx_discheck",
            uncheckImg: "dinamicx_uncheck",
            disUncheckImg: "dinamicx_disunchk"
        },
        d.setLocalImage({
            dinamicx_checked: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABEBAMAAADKPY6BAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CkzCJ1kAAAAqUExURUdwTP9rAP9xAP9vAP9pAP9tAP9rAP9tAP9fAP90AP9XAP99AP9nAP9tACJieToAAAAIdFJOUwCH6CSqRmbMw7TcXwAAAy1JREFUSMd1lr+LE0EUxzdeFMuAdnfCgYIecqAiIlwTPQRBhHioaHd4ZRrxKrlOPBlCqhM8hmWLmJAsU1oIy1RayBax0EYC2f/F92tmZ5Lc1o/PfN+b73zfJkn43bv8bvvn9QcHyVnf+YdVVf2eTqfltc7qittbWQY1UDJVHy6tqniutRbKtK/Uo+WKu1Axm1XVfA4HlUqp3cWKRgoleA4d1AdM3oor1t4XGjFOL2Imt6KSvaKQijnJxc8chxUXbKGhJhNKSZRevh+UrBdIybSj9LFCmUGg1VqtQy0KKaZnasVdW1jXEVFEjBn7wVubotoMp+vnghTjLuKOhRqk6GguKjdmKCVH1lLPuvJzcZSJF+tr3Fy4Bj4WvIPn6FQa4rk4ipz0BCHUNY6OKFhDWsxI+oFPc0tLFOqpSVJsGkwu0GLaIiWYLs6FOuoxBcWse0oW+UWRFhJzs9aio5tminFquaPYL6wF9JJaOKbQtV8A8/HljV5P9J6zjElDvyi1n7xiLWZTGiqKWMunJLnIEGipa+WkyC9gyfs9poy5Z/BLEfrlF3T6WLQM6IbwoMgvAGkqOWiEZvEHOb8IhGsmMrki8ksLITJd81VKbOiXHwjx0zWJQEK/MCSX6UoJUE4O3vA9OkhNES32e7K2xfkiSpwW47V8hsdCfiFI6f0CHR0J5QskyDbKRUg/uOmJjM7qb5Ame0D5A5CN0C8jfwHpVfBORpCG+CWXC+i60Z0A5jVD6AnIcOEad8QvujgEDEMiylAsha47BcwzgQRaNsWYNN1DfuLukUhHbbE3hccplWzUWSf2duPFO3orEMo6d0fuqaUUQYi54nOXtQz8g6U3AphG8I5y92CbNWX278XTxdfYduHBposSU7R0XARxTZ0vfUcZ+SDjxJwF+0i0DH0cpgv54v3S8qFq43zxyTCpo5nlLufLMAz4aB+VTkunXhOcddE+Qr+Mg2XDWafjlAqXDdxTvI8oDk24smDxxfuI/RItvmTPxvuIao4XlnC8j9TyEk4a8T5CSmvVD0HU0e7K34p6H5Wrfivo58Tvo9U/J/KLQ1rO+sWRH6W/iz9K/wEP1oz20WaXfgAAAABJRU5ErkJggg==",
            dinamicx_discheck: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5BAMAAAB+Np62AAAAIVBMVEVHcEzNzc3Nzc3Nzc3Nzc3Nzc3T09PNzc3Pz8/Nzc3MzMz103I3AAAACnRSTlMAz1LsjLEVZyI/uIMIOwAAAVdJREFUOMuFlTFPw0AMha9RVdKtA2K4CSTE0KnA1EydOxXB1KmdKjF1YMpUqbB3ZiKkSMW/kgvNOXdnn89Lm3x6iWM/+5TCGNw+Pdb3L3eKi3cN57jcUXgDGNW1ACn+AC9+vIcPC5/C1KUlhLHtYJ9AOHZ0SSksBKkjLjlq3zxkIfye6Z6n9S6aE+aVRSB8N7QXo1VDxzEKTS90lI6UyqMQTpFCYbmYpKq3wqb1yr2vre2KSdlIPm3Scy7V9uaM1tFIL7CWmpGW+LeIS2FC6JXjhomykuf2d9VJ4ctqFwNNpN2Tt2pNpIZq+2n/Yk9qcl6iEdah1HzvHFudF43UrewMr4x4b6SZbw7s0UHlgdT0qOcNZRaUDb1RH0ILHl1fTUNvn1xPGvE47JZz52FD/SzPgjxH8gwm5leefXlvJHaOvK8Su07ek4kdK+/nxG5PnAuJM4U9j/4A+2ARe5cQ9TAAAAAASUVORK5CYII=",
            dinamicx_uncheck: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAANlBMVEVHcEzMzMzNzc3V1dXOzs7Nzc3Nzc3Nzc3Nzc3Nzc3b29vMzMz////19fXu7u7a2trk5OTR0dG06x/LAAAAC3RSTlMAN84GVqG36X8jB0no5zwAAAGJSURBVFjDrVjZtoQgDFOEqUvZ/v9nRwGvy1UHMHmdMadNWmhpmlsMsleCaJqIhOrl0JRilGr++ghSciygaP8zrDxtLsVnesAnh2bYKKwzWvMMrY2zG80vdbo+/dO78Pke2vn0Y989hiFSDIYvYVI84iEYGfW0mm+hIw3JO46Yijf8CBOT6p84LP+EvWeJHI4z4O5YIofhLJhrFhnk0JwJHYQ5qTsEX7I5Zpbg0cHpThTksstIdGdBHBfBnWQZMr29cHpLaOk5z8VYxP389X6xIDtZ2l0glitgt1DaQndPPsdQVG0gMRQVzmSqU2RVhcZU8J4r4VPxq/I6O1bckg/VyrpKS6lauRqxamW9N6s/MvSeqydxoQtVvcGryaoRb3SNyop35qz20Ctzgj3UTO9JJgwJJB2IsBCLIcUGKXtIA0KOAsihhDkeIQc15MqAXF6YaxRyoWNGC8iQgxm3IIMfZgSFDMOYsRyzIGBWFczShFnfMIskZqXFLNeYNR/04AB6+gA9wpQ+B30B3RGo3Y8v7Z8AAAAASUVORK5CYII=",
            dinamicx_disunchk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5BAMAAAB+Np62AAAAJFBMVEVHcEzNzc3Ozs7Ozs7Nzc3Nzc3Nzc3Ozs7MzMzx8fHa2trr6+ssMFmhAAAACHRSTlMA0kwgje2zY5e6RVIAAAFESURBVDjLhZW/TsMwEMZNygN0YMgIG2MGQIyMHQsSUkaQGDoiwZCR0j/6SF6gl7xACi+QtC+HjUudNufzrT995/P57rNS+xi8Pz8u7l/eFBdXMWycJX14gX1Mzzn4vW1pu6n7+AbIW7KxAZYHyaPUQaISeOjSrAv/1K8OngJdSNRg7ugEPweQqhpPTprTUZROnGF9TKn+PznqS43409JrRqrFi2RXU8vQxtYVoWAgVTb1CZtYp54aeskmNqnNW8Q5C3XVQz0R+OIpYWYatfbQem6Kaj200WXdwgNphURluY+WutUjgd6pSeGjle5lLNChSgU6VqmvGbodYwWBfgS08rlyzfJ95V7JfZbfSH5feTYGKHwlz0IzGZhneRfkPfLs4GrnDfL+yrsv+0bAc2S/Cnid7JMBj5X9OeDtgX8h8Kew/9Ev78HvEWic5SIAAAAASUVORK5CYII="
        }),
        d.registerView("CheckBox", y),
        d.registerView("DCheckBox", y),
        t.default = y
    }
    , function(e, t, n) {
        "use strict";
        var r = n(2)
          , o = n(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(18))
          , a = o(n(3))
          , s = o(n(4))
          , c = o(n(11))
          , u = o(n(5))
          , l = o(n(6))
          , f = o(n(7))
          , d = o(n(10))
          , p = r(n(1))
          , h = o(n(20))
          , v = n(8);
        function m(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function g(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? m(Object(n), !0).forEach((function(t) {
                    (0,
                    d.default)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function y(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                f.default)(e);
                if (t) {
                    var o = (0,
                    f.default)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                l.default)(this, n)
            }
        }
        var b = function(e) {
            (0,
            u.default)(n, e);
            var t = y(n);
            function n(e) {
                var r;
                return (0,
                a.default)(this, n),
                r = t.call(this, e),
                (0,
                d.default)((0,
                c.default)(r), "state", {
                    _holderHelperName: "",
                    _holderIndex: null
                }),
                (0,
                d.default)((0,
                c.default)(r), "blur", (function() {
                    var e = r.getEvents("textInput").onFinish;
                    e && e.handler({
                        value: r.$inputText.value
                    })
                }
                )),
                (0,
                d.default)((0,
                c.default)(r), "input", (function() {
                    var e = r.getEvents("textInput").onChange;
                    e && e.handler({
                        value: r.$inputText.value
                    })
                }
                )),
                (0,
                d.default)((0,
                c.default)(r), "focus", (function() {
                    var e = r.getEvents("textInput").onBegin;
                    e && e.handler({
                        value: r.$inputText.value
                    })
                }
                )),
                r.setStyles(_, "textInput"),
                r
            }
            return (0,
            s.default)(n, [{
                key: "componentDidMount",
                value: function() {
                    (0,
                    v.bindGestureEvent)(this.$inputText, {
                        tap: function() {}
                    })
                }
            }, {
                key: "text",
                value: function(e) {
                    this.setAttrs({
                        value: e
                    }, "textInput")
                }
            }, {
                key: "textSize",
                value: function(e) {
                    this.setStyles({
                        fontSize: p.unitParser(e)
                    }, "textInput")
                }
            }, {
                key: "placeholderColor",
                value: function() {}
            }, {
                key: "textColor",
                value: function(e) {
                    this.setStyles({
                        color: p.colorParser(e)
                    }, "textInput")
                }
            }, {
                key: "keyboard",
                value: function(e) {
                    this.setAttrs({
                        type: w[e]
                    }, "textInput")
                }
            }, {
                key: "maxLength",
                value: function(e) {
                    this.setAttrs({
                        maxLength: e
                    }, "textInput")
                }
            }, {
                key: "placeholder",
                value: function(e) {
                    this.setAttrs({
                        placeholder: e
                    }, "textInput")
                }
            }, {
                key: "textGravity",
                value: function(e) {
                    this.setStyles({
                        textAlign: e
                    }, "textInput")
                }
            }, {
                key: "onFinish",
                value: function(e) {
                    this.setEvents({
                        onFinish: e
                    }, "textInput")
                }
            }, {
                key: "onChange",
                value: function(e) {
                    this.setEvents({
                        onChange: e
                    }, "textInput")
                }
            }, {
                key: "onBegin",
                value: function(e) {
                    this.setEvents({
                        onBegin: e
                    }, "textInput")
                }
            }, {
                key: "renderView",
                value: function() {
                    var e = this
                      , t = this.getStyles("font")
                      , n = this.getStyles("textInput")
                      , r = g(g({}, t), n);
                    return p.h("input", (0,
                    i.default)({
                        ref: function(t) {
                            return e.$inputText = t
                        },
                        onFocus: function(t) {
                            return e.focus(t)
                        },
                        onInput: function(t) {
                            return e.input(t)
                        },
                        onBlur: function(t) {
                            return e.blur(t)
                        },
                        style: r
                    }, this.getAttrs("textInput"), {
                        className: this.state._holderHelperName
                    }))
                }
            }]),
            n
        }(h.default)
          , w = {
            0: "text",
            1: "number",
            2: "tel"
        }
          , _ = {
            width: "100%",
            height: "100%",
            outline: "none",
            border: "none",
            padding: 0,
            margin: 0,
            userSelect: "auto"
        };
        b.defaultProps = {
            maxLength: -1,
            textSize: "12np",
            textGravity: "left",
            keyboard: 0
        },
        p.registerView("TextInput", b),
        p.registerView("DTextInput", b),
        t.default = b
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
        function o(e, t, n) {
            if (e.hasOwnProperty(t)) {
                for (var o = {}, i = e[t], a = r(t), s = Object.keys(n), c = 0; c < s.length; c++) {
                    var u = s[c];
                    if (u === t)
                        for (var l = 0; l < i.length; l++)
                            o[i[l] + a] = n[t];
                    o[u] = n[u]
                }
                return o
            }
            return n
        }
        function i(e, t, n, r, o) {
            for (var i = 0, a = e.length; i < a; ++i) {
                var s = e[i](t, n, r, o);
                if (s)
                    return s
            }
        }
        function a(e, t) {
            -1 === e.indexOf(t) && e.push(t)
        }
        function s(e, t) {
            if (Array.isArray(t))
                for (var n = 0, r = t.length; n < r; ++n)
                    a(e, t[n]);
            else
                a(e, t)
        }
        function c(e) {
            return e instanceof Object && !Array.isArray(e)
        }
        function u(e) {
            var t = e.prefixMap
              , n = e.plugins;
            return function e(r) {
                for (var a in r) {
                    var u = r[a];
                    if (c(u))
                        r[a] = e(u);
                    else if (Array.isArray(u)) {
                        for (var l = [], f = 0, d = u.length; f < d; ++f)
                            s(l, i(n, a, u[f], r, t) || u[f]);
                        l.length > 0 && (r[a] = l)
                    } else {
                        var p = i(n, a, u, r, t);
                        p && (r[a] = p),
                        r = o(t, a, r)
                    }
                }
                return r
            }
        }
        n.r(t),
        n.d(t, "createPrefixer", (function() {
            return u
        }
        )),
        n.d(t, "prefix", (function() {
            return V
        }
        ));
        var l = ["Webkit"]
          , f = ["ms"]
          , d = ["Webkit", "ms"]
          , p = ["-webkit-", "-moz-", ""]
          , h = {
            "zoom-in": !0,
            "zoom-out": !0,
            grab: !0,
            grabbing: !0
        }
          , v = n(9)
          , m = n.n(v)
          , g = ["-webkit-", ""]
          , y = ["-webkit-", ""]
          , b = {
            flex: ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex", "flex"],
            "inline-flex": ["-webkit-inline-box", "-moz-inline-box", "-ms-inline-flexbox", "-webkit-inline-flex", "inline-flex"]
        }
          , w = {
            "space-around": "justify",
            "space-between": "justify",
            "flex-start": "start",
            "flex-end": "end",
            "wrap-reverse": "multiple",
            wrap: "multiple"
        }
          , _ = {
            alignItems: "WebkitBoxAlign",
            justifyContent: "WebkitBoxPack",
            flexWrap: "WebkitBoxLines",
            flexGrow: "WebkitBoxFlex"
        }
          , O = ["-webkit-", "-moz-", ""]
          , x = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi
          , S = function(e, t) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return function(e, t) {
                    var n = []
                      , r = !0
                      , o = !1
                      , i = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
                        !t || n.length !== t); r = !0)
                            ;
                    } catch (e) {
                        o = !0,
                        i = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (o)
                                throw i
                        }
                    }
                    return n
                }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        };
        function k(e) {
            return "number" == typeof e && !isNaN(e)
        }
        function P(e) {
            return "string" == typeof e && e.includes("/")
        }
        var E = ["center", "end", "start", "stretch"]
          , j = {
            "inline-grid": ["-ms-inline-grid", "inline-grid"],
            grid: ["-ms-grid", "grid"]
        }
          , C = {
            alignSelf: function(e, t) {
                E.indexOf(e) > -1 && (t.msGridRowAlign = e)
            },
            gridColumn: function(e, t) {
                if (k(e))
                    t.msGridColumn = e;
                else if (P(e)) {
                    var n = e.split("/")
                      , r = S(n, 2)
                      , o = r[0]
                      , i = r[1];
                    C.gridColumnStart(+o, t);
                    var a = i.split(/ ?span /)
                      , s = S(a, 2)
                      , c = s[0]
                      , u = s[1];
                    "" === c ? C.gridColumnEnd(+o + +u, t) : C.gridColumnEnd(+i, t)
                } else
                    C.gridColumnStart(e, t)
            },
            gridColumnEnd: function(e, t) {
                var n = t.msGridColumn;
                k(e) && k(n) && (t.msGridColumnSpan = e - n)
            },
            gridColumnStart: function(e, t) {
                k(e) && (t.msGridColumn = e)
            },
            gridRow: function(e, t) {
                if (k(e))
                    t.msGridRow = e;
                else if (P(e)) {
                    var n = e.split("/")
                      , r = S(n, 2)
                      , o = r[0]
                      , i = r[1];
                    C.gridRowStart(+o, t);
                    var a = i.split(/ ?span /)
                      , s = S(a, 2)
                      , c = s[0]
                      , u = s[1];
                    "" === c ? C.gridRowEnd(+o + +u, t) : C.gridRowEnd(+i, t)
                } else
                    C.gridRowStart(e, t)
            },
            gridRowEnd: function(e, t) {
                var n = t.msGridRow;
                k(e) && k(n) && (t.msGridRowSpan = e - n)
            },
            gridRowStart: function(e, t) {
                k(e) && (t.msGridRow = e)
            },
            gridTemplateColumns: function(e, t) {
                t.msGridColumns = e
            },
            gridTemplateRows: function(e, t) {
                t.msGridRows = e
            },
            justifySelf: function(e, t) {
                E.indexOf(e) > -1 && (t.msGridColumnAlign = e)
            }
        }
          , A = ["-webkit-", ""]
          , T = {
            marginBlockStart: ["WebkitMarginBefore"],
            marginBlockEnd: ["WebkitMarginAfter"],
            marginInlineStart: ["WebkitMarginStart", "MozMarginStart"],
            marginInlineEnd: ["WebkitMarginEnd", "MozMarginEnd"],
            paddingBlockStart: ["WebkitPaddingBefore"],
            paddingBlockEnd: ["WebkitPaddingAfter"],
            paddingInlineStart: ["WebkitPaddingStart", "MozPaddingStart"],
            paddingInlineEnd: ["WebkitPaddingEnd", "MozPaddingEnd"],
            borderBlockStart: ["WebkitBorderBefore"],
            borderBlockStartColor: ["WebkitBorderBeforeColor"],
            borderBlockStartStyle: ["WebkitBorderBeforeStyle"],
            borderBlockStartWidth: ["WebkitBorderBeforeWidth"],
            borderBlockEnd: ["WebkitBorderAfter"],
            borderBlockEndColor: ["WebkitBorderAfterColor"],
            borderBlockEndStyle: ["WebkitBorderAfterStyle"],
            borderBlockEndWidth: ["WebkitBorderAfterWidth"],
            borderInlineStart: ["WebkitBorderStart", "MozBorderStart"],
            borderInlineStartColor: ["WebkitBorderStartColor", "MozBorderStartColor"],
            borderInlineStartStyle: ["WebkitBorderStartStyle", "MozBorderStartStyle"],
            borderInlineStartWidth: ["WebkitBorderStartWidth", "MozBorderStartWidth"],
            borderInlineEnd: ["WebkitBorderEnd", "MozBorderEnd"],
            borderInlineEndColor: ["WebkitBorderEndColor", "MozBorderEndColor"],
            borderInlineEndStyle: ["WebkitBorderEndStyle", "MozBorderEndStyle"],
            borderInlineEndWidth: ["WebkitBorderEndWidth", "MozBorderEndWidth"]
        }
          , R = ["-webkit-", "-moz-", ""]
          , I = {
            maxHeight: !0,
            maxWidth: !0,
            width: !0,
            height: !0,
            columnWidth: !0,
            minWidth: !0,
            minHeight: !0
        }
          , N = {
            "min-content": !0,
            "max-content": !0,
            "fill-available": !0,
            "fit-content": !0,
            "contain-floats": !0
        }
          , D = n(21)
          , M = n.n(D)
          , L = {
            transition: !0,
            transitionProperty: !0,
            WebkitTransition: !0,
            WebkitTransitionProperty: !0,
            MozTransition: !0,
            MozTransitionProperty: !0
        }
          , B = {
            Webkit: "-webkit-",
            Moz: "-moz-",
            ms: "-ms-"
        }
          , V = u({
            prefixMap: {
                appearance: ["Webkit", "Moz"],
                textEmphasisPosition: l,
                textEmphasis: l,
                textEmphasisStyle: l,
                textEmphasisColor: l,
                boxDecorationBreak: l,
                maskImage: l,
                maskMode: l,
                maskRepeat: l,
                maskPosition: l,
                maskClip: l,
                maskOrigin: l,
                maskSize: l,
                maskComposite: l,
                mask: l,
                maskBorderSource: l,
                maskBorderMode: l,
                maskBorderSlice: l,
                maskBorderWidth: l,
                maskBorderOutset: l,
                maskBorderRepeat: l,
                maskBorder: l,
                maskType: l,
                textDecorationStyle: l,
                textDecorationSkip: l,
                textDecorationLine: l,
                textDecorationColor: l,
                userSelect: ["Webkit", "Moz", "ms"],
                backdropFilter: l,
                fontKerning: l,
                scrollSnapType: d,
                scrollSnapPointsX: d,
                scrollSnapPointsY: d,
                scrollSnapDestination: d,
                scrollSnapCoordinate: d,
                clipPath: l,
                shapeImageThreshold: l,
                shapeImageMargin: l,
                shapeImageOutside: l,
                filter: l,
                hyphens: d,
                flowInto: d,
                flowFrom: d,
                breakBefore: d,
                breakAfter: d,
                breakInside: d,
                regionFragment: d,
                writingMode: d,
                textOrientation: l,
                tabSize: ["Moz"],
                fontFeatureSettings: l,
                columnCount: l,
                columnFill: l,
                columnGap: l,
                columnRule: l,
                columnRuleColor: l,
                columnRuleStyle: l,
                columnRuleWidth: l,
                columns: l,
                columnSpan: l,
                columnWidth: l,
                wrapFlow: f,
                wrapThrough: f,
                wrapMargin: f,
                textSizeAdjust: d
            },
            plugins: [function(e, t) {
                if ("string" == typeof t && "text" === t)
                    return ["-webkit-text", "text"]
            }
            , function(e, t) {
                if ("string" == typeof t && !m()(t) && t.indexOf("cross-fade(") > -1)
                    return g.map((function(e) {
                        return t.replace(/cross-fade\(/g, e + "cross-fade(")
                    }
                    ))
            }
            , function(e, t) {
                if ("cursor" === e && h.hasOwnProperty(t))
                    return p.map((function(e) {
                        return e + t
                    }
                    ))
            }
            , function(e, t) {
                if ("string" == typeof t && !m()(t) && t.indexOf("filter(") > -1)
                    return y.map((function(e) {
                        return t.replace(/filter\(/g, e + "filter(")
                    }
                    ))
            }
            , function(e, t, n) {
                "flexDirection" === e && "string" == typeof t && (t.indexOf("column") > -1 ? n.WebkitBoxOrient = "vertical" : n.WebkitBoxOrient = "horizontal",
                t.indexOf("reverse") > -1 ? n.WebkitBoxDirection = "reverse" : n.WebkitBoxDirection = "normal"),
                _.hasOwnProperty(e) && (n[_[e]] = w[t] || t)
            }
            , function(e, t) {
                if ("string" == typeof t && !m()(t) && x.test(t))
                    return O.map((function(e) {
                        return t.replace(x, (function(t) {
                            return e + t
                        }
                        ))
                    }
                    ))
            }
            , function(e, t, n) {
                if ("display" === e && t in j)
                    return j[t];
                e in C && (0,
                C[e])(t, n)
            }
            , function(e, t) {
                if ("string" == typeof t && !m()(t) && t.indexOf("image-set(") > -1)
                    return A.map((function(e) {
                        return t.replace(/image-set\(/g, e + "image-set(")
                    }
                    ))
            }
            , function(e, t, n) {
                if (Object.prototype.hasOwnProperty.call(T, e))
                    for (var r = T[e], o = 0, i = r.length; o < i; ++o)
                        n[r[o]] = t
            }
            , function(e, t) {
                if ("position" === e && "sticky" === t)
                    return ["-webkit-sticky", "sticky"]
            }
            , function(e, t) {
                if (I.hasOwnProperty(e) && N.hasOwnProperty(t))
                    return R.map((function(e) {
                        return e + t
                    }
                    ))
            }
            , function(e, t, n, o) {
                if ("string" == typeof t && L.hasOwnProperty(e)) {
                    var i = function(e, t) {
                        if (m()(e))
                            return e;
                        for (var n = e.split(/,(?![^()]*(?:\([^()]*\))?\))/g), r = 0, o = n.length; r < o; ++r) {
                            var i = n[r]
                              , a = [i];
                            for (var s in t) {
                                var c = M()(s);
                                if (i.indexOf(c) > -1 && "order" !== c)
                                    for (var u = t[s], l = 0, f = u.length; l < f; ++l)
                                        a.unshift(i.replace(c, B[u[l]] + c))
                            }
                            n[r] = a.join(",")
                        }
                        return n.join(",")
                    }(t, o)
                      , a = i.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter((function(e) {
                        return !/-moz-|-ms-/.test(e)
                    }
                    )).join(",");
                    if (e.indexOf("Webkit") > -1)
                        return a;
                    var s = i.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter((function(e) {
                        return !/-webkit-|-ms-/.test(e)
                    }
                    )).join(",");
                    return e.indexOf("Moz") > -1 ? s : (n["Webkit" + r(e)] = a,
                    n["Moz" + r(e)] = s,
                    i)
                }
            }
            , function(e, t) {
                if ("display" === e && b.hasOwnProperty(t))
                    return b[t]
            }
            ]
        })
    }
    ]))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }
    )),
    n.d(t, "g", (function() {
        return s
    }
    )),
    n.d(t, "b", (function() {
        return c
    }
    )),
    n.d(t, "f", (function() {
        return u
    }
    )),
    n.d(t, "d", (function() {
        return l
    }
    )),
    n.d(t, "c", (function() {
        return f
    }
    )),
    n.d(t, "e", (function() {
        return d
    }
    ));
    var r, o = n(14);
    try {
        var i = localStorage.getItem("__dx_util_random__");
        i ? r = parseFloat(i) : (r = Math.random(),
        localStorage.setItem("__dx_util_random__", r))
    } catch (e) {
        r = Math.random()
    }
    var a = function(e) {
        window.__lazyload && window.__lazyload.observeIntersection(e)
    };
    function s(e) {
        return void 0 === e && (e = (window.location.search || "").slice(1)),
        e.split("&").reduce((function(e, t) {
            return t ? (e[t.split("=")[0]] = t.split("=").slice(1).join(""),
            e) : e
        }
        ), {})
    }
    function c() {
        var e = new URL(location.href)
          , t = e.searchParams.get("page");
        if (t)
            if (t.startsWith("category_")) {
                var n = t.split("_");
                if (2 === n.length)
                    return n[1]
            } else {
                var r = e.searchParams.get("categoryIds");
                if (r)
                    return r
            }
        else if (e.pathname) {
            var o = /_p(\d+)$/.exec(e.pathname);
            if (o && o[1])
                return o[1]
        } else {
            var i = e.searchParams.get("categoryIds");
            if (i)
                return i
        }
        return null
    }
    var u = function(e) {
        var t = 0
          , n = function(e) {
            e && (t += e.offsetTop,
            e.offsetParent && n(this, e.offsetParent))
        };
        return n(e),
        t
    }
      , l = function(e) {
        for (var t = e + "=", n = decodeURIComponent(document.cookie).split(";"), r = 0; r < n.length; r++) {
            for (var o = n[r]; " " == o.charAt(0); )
                o = o.substring(1);
            if (0 == o.indexOf(t))
                return o.substring(t.length, o.length)
        }
        return ""
    }
      , f = function(e, t) {
        Object(o.a)({
            api: "https://insights.alibaba.com/openservice/gatewayService",
            data: {
                modelId: 484,
                categoryIds: e
            },
            onSuccess: function(e) {
                e.data && t(e.data.list || [])
            },
            onError: function() {}
        })
    };
    function d(e) {
        void 0 === e && (e = "");
        var t = e
          , n = window.location.host;
        if ("www.alibaba.com" != n && e.indexOf("//www.alibaba.com/") > -1) {
            var r = /(.+).alibaba.com/.exec(n);
            r && r[1] && (t = e.replace("//www.alibaba.com/", "//" + r[1] + ".alibaba.com/"))
        }
        return t
    }
}
, function(e, t, n) {
    var r;
    /*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
    !function() {
        "use strict";
        var n = {}.hasOwnProperty;
        function o() {
            for (var e = [], t = 0; t < arguments.length; t++) {
                var r = arguments[t];
                if (r) {
                    var i = typeof r;
                    if ("string" === i || "number" === i)
                        e.push(r);
                    else if (Array.isArray(r)) {
                        if (r.length) {
                            var a = o.apply(null, r);
                            a && e.push(a)
                        }
                    } else if ("object" === i)
                        if (r.toString === Object.prototype.toString)
                            for (var s in r)
                                n.call(r, s) && r[s] && e.push(s);
                        else
                            e.push(r.toString())
                }
            }
            return e.join(" ")
        }
        e.exports ? (o.default = o,
        e.exports = o) : void 0 === (r = function() {
            return o
        }
        .apply(t, [])) || (e.exports = r)
    }()
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.isRpx = l,
    t.calcRpx = f,
    t.getRpx = d,
    t.setRpx = p,
    t.getViewportWidth = h,
    t.setViewportWidth = v,
    t.setDecimalPixelTransformer = function(e) {
        c = e
    }
    ,
    t.setUnitPrecision = function(e) {
        s = e
    }
    ,
    t.cached = m,
    t.setTargetPlatform = g,
    t.convertUnit = void 0;
    var r, o, i = /"[^"]+"|'[^']+'|url\([^\)]+\)|(\d*\.?\d+)rpx/g, a = "web", s = 4, c = function(e, t) {
        return t ? parseFloat(e) * d() + "px" : e
    }, u = function(e, t) {
        return t ? (n = parseFloat(e) / (h() / 100),
        r = s,
        o = Math.pow(10, r + 1),
        i = Math.floor(n * o),
        10 * Math.round(i / 10) / o + "vw") : e;
        var n, r, o, i
    };
    function l(e) {
        return "string" == typeof e && i.test(e)
    }
    function f(e) {
        return "web" === a ? e.replace(i, u) : "weex" === a ? e.replace(i, c) : e
    }
    function d() {
        return r
    }
    function p(e) {
        r = e
    }
    function h() {
        return o
    }
    function v(e) {
        o = e
    }
    function m(e) {
        var t = new Map;
        return function() {
            var n = arguments.length <= 0 ? void 0 : arguments[0];
            return t.has(n) || t.set(n, e.apply(void 0, arguments)),
            t.get(n)
        }
    }
    function g(e) {
        a = e
    }
    void 0 === d() && p(1),
    void 0 === h() && v(750);
    var y = m((function(e, t, n) {
        return n && g(n),
        l(e) ? f(e) : e
    }
    ));
    t.convertUnit = y
}
, function(e, t, n) {
    "use strict";
    var r, o;
    n.d(t, "a", (function() {
        return o
    }
    )),
    n.d(t, "b", (function() {
        return i
    }
    )),
    function(e) {
        e.FreeBlock = "freeBlock",
        e.NativeCommonProductCard = "native_common_product_card"
    }(o || (o = {}));
    var i = ((r = {})[o.NativeCommonProductCard] = {
        name: "icbu_dx_gallery_list_product_card_10",
        url: "https://ossgw.alicdn.com/rapid-oss-bucket/1582287038076/gallery_list_product_card.js"
    },
    r)
}
, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return r
    }
    )),
    n.d(t, "a", (function() {
        return o
    }
    ));
    function r(e, t) {
        var n = {};
        for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
    }
    function o(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function a(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                var t;
                e.done ? o(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(a, s)
            }
            c((r = r.apply(e, t || [])).next())
        }
        ))
    }
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.default = t.getImageWidth = t.getImageHeight = t.optimizeImage = t.parseImage = void 0;
    var r = c(n(26))
      , o = n(54);
    t.parseVideo = o.parseVideo,
    t.getVideoUrl = o.getVideoUrl,
    t.checkIsUrl = o.checkIsUrl;
    var i = c(n(55))
      , a = c(n(56))
      , s = c(n(57));
    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var u = r.default;
    t.parseImage = u;
    var l = i.default;
    t.optimizeImage = l;
    var f = a.default;
    t.getImageHeight = f;
    var d = s.default;
    t.getImageWidth = d;
    var p = {
        parseImage: r.default,
        parseVideo: o.parseVideo,
        getVideoUrl: o.getVideoUrl,
        checkIsUrl: o.checkIsUrl,
        optimizeImage: i.default,
        getImageHeight: a.default,
        getImageWidth: s.default
    };
    t.default = p
}
, function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "$adapter", (function() {
        return Wn
    }
    )),
    n.d(t, "$env", (function() {
        return Fn
    }
    )),
    n.d(t, "$helper", (function() {
        return Un
    }
    )),
    n.d(t, "$logger", (function() {
        return Hn
    }
    )),
    n.d(t, "$i18n", (function() {
        return qn
    }
    )),
    n.d(t, "$fetch", (function() {
        return zn
    }
    )),
    n.d(t, "$emitter", (function() {
        return Gn
    }
    )),
    n.d(t, "$perf", (function() {
        return Jn
    }
    )),
    n.d(t, "$hook", (function() {
        return $n
    }
    )),
    n.d(t, "version", (function() {
        return Kn
    }
    )),
    n.d(t, "$call", (function() {
        return Xn
    }
    ));
    var r = {
        get timeOffset() {
            return 0
        },
        loadFile: function(e, t, n) {
            fetch(e, {
                method: "get"
            }).then((function(e) {
                e.text().then((function(e) {
                    t && t(e)
                }
                ))
            }
            )).catch((function(e) {
                n && n(e)
            }
            ))
        }
    }
      , o = n(3)
      , i = {
        is: o.a
    }
      , a = function(e, t) {
        return Object.prototype.toString.call(e) === t
    }
      , s = {
        integer: function(e) {
            return /^[1-9]\d*$/.test(e)
        },
        decimal: function(e) {
            return /^[-+]?[0-9]\d*(\.\d+)?$/.test(e)
        },
        string: function(e) {
            return a(e, "[object String]")
        },
        object: function(e) {
            return a(e, "[object Object]")
        },
        number: function(e) {
            return a(e, "[object Number]")
        },
        func: function(e) {
            return a(e, "[object Function]")
        },
        date: function(e) {
            return a(e, "[object Date]")
        },
        bool: function(e) {
            return a(e, "[object Boolean]")
        },
        array: function(e) {
            return a(e, "[object Array]")
        },
        existy: function(e) {
            return null != e
        },
        url: function(e) {
            return "string" == typeof e && /^(https?:)?[/]{2}/.test(e)
        }
    };
    var c = {
        JSON: function(e) {
            function t() {
                return e.apply(this, arguments)
            }
            return t.toString = function() {
                return e.toString()
            }
            ,
            t
        }((function(e) {
            try {
                if (s.string(e))
                    return JSON.parse(e)
            } catch (e) {
                console.warn(e)
            }
        }
        )),
        bool: function(e) {
            return Boolean(e)
        }
    }
      , u = {
        get: function(e, t) {
            var n = t.split(".")
              , r = e;
            if (r) {
                for (var o = 0; o < n.length; o++) {
                    var i = n[o];
                    if (!r || void 0 === r[i])
                        return;
                    r = r[i]
                }
                return r
            }
        }
    }
      , l = function() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
        var r = Array(e)
          , o = 0;
        for (t = 0; t < n; t++)
            for (var i = arguments[t], a = 0, s = i.length; a < s; a++,
            o++)
                r[o] = i[a];
        return r
    }
      , f = {
        matchRate: function(e) {
            return void 0 === e || ~~(100 * Math.random()) < e
        },
        getICBUKitData: function(e) {
            return u.get(e, "result") || u.get(e, "data")
        },
        call: function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            if (s.func(e))
                return e.apply(void 0, t)
        },
        noop: function() {},
        mirror: function(e, t) {
            var n = function(e) {
                return function() {
                    for (var n = [], r = 0; r < arguments.length; r++)
                        n[r] = arguments[r];
                    if (s.func(t))
                        return t.apply(void 0, l([e], n));
                    var o = t[e];
                    s.func(o) && o.apply(void 0, n)
                }
            };
            if (s.string(e))
                return n(e);
            if (s.array(e)) {
                var r = {};
                return e.forEach((function(e) {
                    r[e] = n(e)
                }
                )),
                r
            }
        }
    }
      , d = {
        pick: function(e, t, n) {
            var r = {};
            if (!s.object(e))
                return r;
            s.array(t) || (t = [t]);
            for (var o = 0; o < t.length; o++) {
                var i = t[o];
                n && !Object.prototype.hasOwnProperty.call(e, i) || (r[i] = e[i])
            }
            return r
        },
        filter: function(e, t) {
            if (!s.object(e))
                return e;
            var n = {};
            for (var r in e) {
                var o = e[r];
                !0 === f.call(t, o) && (n[r] = o)
            }
            return n
        },
        map: function(e, t) {
            var n = {};
            for (var r in e)
                n[r] = f.call(t, r, e[r]);
            return n
        },
        merge: function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            return t.forEach((function(t) {
                s.object(t) && Object.keys(t).forEach((function(n) {
                    var r = Object.getOwnPropertyDescriptor(t, n);
                    r && Object.defineProperty(e, n, r)
                }
                ))
            }
            )),
            e
        },
        assign: function(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            if (!s.object(e))
                return e;
            var r = {};
            for (var o in e) {
                for (var i = e[o], a = void 0, c = t.length - 1; c >= 0; c--) {
                    var u = t[c];
                    if (s.object(u) && (a = u[o]),
                    void 0 !== a)
                        break
                }
                void 0 !== a && (i = a),
                r[o] = i
            }
            return r
        }
    }
      , p = {
        format: function(e, t) {
            var n;
            return n = t && (t instanceof Array || t.constructor === Object) ? t : [].slice.call(arguments, 1, arguments.length),
            e.replace(/\{(.+?)\}/g, (function(e, t) {
                var r = t;
                /^\d+$/.test(t) && (r = ~~t);
                var o = n[r];
                return void 0 === o && (o = e),
                o
            }
            ))
        },
        capitalize: function(e) {
            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1)
        },
        hash: function(e) {
            for (var t = 5381, n = e.length; n; )
                t = 33 * t ^ e.charCodeAt(--n);
            return t >>> 0
        },
        simpleRandom: function() {
            return Date.now() + "_" + Math.ceil(1e5 * Math.random())
        },
        extract: function(e, t, n) {
            var r = t.exec(e);
            if (r)
                return s.number(n) ? r[n] : s.object(n) ? d.map(n, (function(e, t) {
                    return s.number(t) ? r[t] : void 0
                }
                )) : void 0
        },
        isEqual: function(e, t, n) {
            return e = String(e),
            t = String(t),
            n && (e = e.toLowerCase(),
            t = t.toLowerCase()),
            e === t
        },
        isMTOP: function(e) {
            return /^mtop\./.test(e)
        }
    }
      , h = {
        get rawUrl() {
            var e = h.parse() || {};
            return "" + e.host + e.path
        },
        get query() {
            return (h.parse() || {}).query || {}
        },
        get host() {
            return (h.parse() || {}).host
        },
        get hash() {
            return (h.parse() || {}).hash || {}
        },
        get path() {
            return (h.parse() || {}).path || ""
        },
        parse: function(e) {
            if (!e && "undefined" == typeof location)
                return;
            e = e || (null === location || void 0 === location ? void 0 : location.href);
            var t = p.extract(e, /^(https?):\/\/(.+?)(:(\d+))?(\/(.*?))?([#?].*)?$/gi, {
                protocol: 1,
                host: 2,
                port: 4,
                path: 5,
                extendString: 7
            });
            if (!t)
                return;
            var n = p.extract(t.extendString, /\?(.+?)(#.*)?$/, 1)
              , r = p.extract(t.extendString, /#(.+?)(\?.*)?$/, 1);
            delete t.extendString,
            Object.assign(t, {
                queryString: n,
                hashString: r,
                query: h.paramsToObject(n),
                hash: h.paramsToObject(r)
            }),
            t.rawUrl = t.host,
            t.port && (t.rawUrl += ":" + t.port);
            return t.rawUrl += t.path,
            t
        },
        appendQuery: function(e, t) {
            var n = h.parse(e);
            return Object.assign(n.query, t),
            h.stringify(n)
        },
        paramsToObject: function(e) {
            var t = {};
            if (!e)
                return t;
            var n = e.match(/(\w+)=([^&]+)/gi);
            if (!n)
                return t;
            for (var r = 0; r < n.length; r++) {
                var o = n[r].split("=");
                t[o[0]] = o[1]
            }
            return t
        },
        objectToParams: function(e, t, n) {
            if (void 0 === t && (t = !1),
            void 0 === n && (n = "&"),
            !s.object(e))
                return "";
            var r = [];
            for (var o in e) {
                var i = e[o]
                  , a = i;
                s.object(i) ? a = h.objectToParams(i) : s.array(i) && (a = i.join(",")),
                t && (a = encodeURIComponent(a)),
                r.push(o + "=" + a)
            }
            return r.join(n)
        },
        stringify: function(e) {
            var t = e.host
              , n = e.protocol
              , r = e.path
              , o = e.query
              , i = e.hash
              , a = e.port
              , s = n + "://" + t;
            a && (s += ":" + a),
            s += r;
            var c = h.objectToParams(o)
              , u = h.objectToParams(i);
            return c && (s += "?" + c),
            u && (s += "#" + u),
            s
        }
    };
    var v = h
      , m = {
        util: f,
        object: d,
        string: p,
        url: v,
        is: s,
        to: c,
        xPath: u
    };
    function g() {}
    function y(e, t) {
        return this._callbacks = this._callbacks || {},
        (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
        this
    }
    function b(e, t) {
        if (this._callbacks = this._callbacks || {},
        0 == arguments.length)
            return this._callbacks = {},
            this;
        var n, r = this._callbacks["$" + e];
        if (!r)
            return this;
        if (1 == arguments.length)
            return delete this._callbacks["$" + e],
            this;
        for (var o = 0; o < r.length; o++)
            if ((n = r[o]) === t || n.fn === t) {
                r.splice(o, 1);
                break
            }
        return this
    }
    g.prototype.on = y,
    g.prototype.addEventListener = y,
    g.prototype.once = function(e, t) {
        function n() {
            this.off(e, n),
            t.apply(this, arguments)
        }
        return n.fn = t,
        this.on(e, n),
        this
    }
    ,
    g.prototype.off = b,
    g.prototype.removeListener = b,
    g.prototype.removeAllListeners = b,
    g.prototype.removeEventListener = b,
    g.prototype.emit = function(e) {
        this._callbacks = this._callbacks || {};
        var t = [].slice.call(arguments, 1)
          , n = this._callbacks["$" + e];
        if (n)
            for (var r = 0, o = (n = n.slice(0)).length; r < o; ++r)
                n[r].apply(this, t);
        return this
    }
    ,
    g.prototype.listeners = function(e) {
        return this._callbacks = this._callbacks || {},
        this._callbacks["$" + e] || []
    }
    ,
    g.prototype.hasListeners = function(e) {
        return !!this.listeners(e).length
    }
    ;
    var w, _ = new g, O = {
        Emitter: g,
        on: _.on,
        emit: _.emit,
        off: _.off
    }, x = "5.0", S = "redfox", k = S, P = (w = {},
    ["setTitle", "fetchStart", "fetchEnd", "fetchError", "localeReady"].forEach((function(e) {
        w[e] = k + ":" + e
    }
    )),
    w), E = function() {
        return (E = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }, j = E(E({}, O), {
        eventName: P
    }), C = {
        get systemVersion() {
            if (i.is.windVane) {
                var e = navigator.userAgent.match(/AliApp\(\w+\/((\d+\.){2}\d+\.*[\w]*)/);
                if (e && e.length > 1)
                    return e[1]
            }
            return ""
        },
        leVersion: function(e) {
            return this.compareVersion(e, null) >= 0
        },
        geVersion: function(e) {
            return this.compareVersion(e, null) <= 0
        },
        getSystemVersion: function(e) {
            Mt.env.getPlatFormInfo((function(t) {
                void 0 === t && (t = {});
                var n = "";
                t && t.version && (n = t.version),
                e(n)
            }
            ))
        },
        getSystemVerCode: function(e) {
            Mt.env.getPlatFormInfo((function(t) {
                void 0 === t && (t = {});
                var n = "0";
                t && t.versionCode && (n = t.versionCode),
                e(parseInt(n))
            }
            ))
        },
        leVersionAsync: function(e, t) {
            var n = this;
            this.getSystemVersion((function(r) {
                t({
                    result: n.compareVersion(e, r) >= 0
                })
            }
            ))
        },
        geVersionAsync: function(e, t) {
            var n = this;
            this.getSystemVersion((function(r) {
                t({
                    result: n.compareVersion(e, r) <= 0
                })
            }
            ))
        },
        get isDebug() {
            return !!this.systemVersion && !/^(\d+\.){2}\d+$/gi.test(this.systemVersion)
        },
        setTitle: function(e) {
            j.emit(j.eventName.setTitle, e),
            Mt.app.setTitle(e)
        },
        setNavbar: function(e) {
            Mt.app.setNavbar(e)
        },
        compareVersion: function(e, t) {
            var n = t || this.systemVersion;
            if (!n)
                return 0;
            for (var r = e.split("."), o = n.split("."), i = 0; i < 3; i++) {
                var a = Number(r[i])
                  , s = Number(o[i]);
                if (a > s)
                    return 1;
                if (s > a)
                    return -1;
                if (!isNaN(a) && isNaN(s))
                    return 1;
                if (isNaN(a) && !isNaN(s))
                    return -1
            }
            return 0
        }
    }, A = function() {
        function e() {
            this.times = {},
            this.startStash = {}
        }
        return e.prototype.get = function(e) {
            var t = this.times;
            return e ? t[e] : t
        }
        ,
        e.prototype.set = function(e, t) {
            var n = this.times
              , r = this.startStash
              , o = n[e];
            if (m.is.existy(o))
                return o;
            var i = t || r[e] || Date.now();
            if (m.is.existy(r[e]))
                return n[e] = (t || Date.now()) - r[e],
                delete r[e],
                n[e];
            r[e] = i
        }
        ,
        e
    }(), T = {
        tech: S,
        redfoxVersion: x
    }, R = {
        set: function(e, t) {
            m.is.object(e) ? Object.assign(T, e) : T[e] = t
        },
        get: function(e) {
            return e ? T[e] : Object.assign({}, T)
        }
    }, I = function() {
        return (I = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }, N = {}, D = function(e) {
        return "/sc.mobile.redfox-" + e
    }, M = {
        Time: A,
        time: new A,
        get: R.get,
        set: R.set,
        initial: function(e) {
            var t = m.url;
            (e = Object.assign({
                rawUrl: t.rawUrl,
                displayName: (t.path || "").replace(/^\//, "").replace(/\/index\.html?/, "").replace(/[^\w]/gi, "_"),
                pageName: encodeURIComponent(t.rawUrl),
                bundleType: "app",
                techEnv: i.is.web ? "web" : "weex",
                wk_trace: Date.now()
            }, e)).enablePrefetchX = t.query.wh_prefetch ? "Y" : "N",
            e.wk_trace = "" + e.wk_trace,
            R.set(e)
        },
        click: function(e, t, n) {
            n && (e = D(e)),
            Mt.logger.click(e, t)
        },
        expose: function(e, t, n) {
            n && (e = D(e)),
            Mt.logger.expose(e, t)
        },
        enter: function() {
            Mt.logger.enter()
        },
        update: function() {
            Mt.logger.update()
        },
        _sendPagePV_: function(e) {
            Mt.logger._sendPagePV_(e)
        },
        spaEnter: function() {
            window.goldlog && window.goldlog.sendPV({
                is_auto: !1
            }, I({}, R.get()))
        },
        spaUpdate: function(e, t) {
            Mt.logger.spaUpdate(e, t)
        },
        once: function(e, t, n, r) {
            N[e] || (N[e] = !0,
            this.click(t, n, r))
        },
        timesheet: function(e) {
            var t = e.type
              , n = e.key
              , r = e.value
              , o = e.params
              , i = e.once;
            if (n && t) {
                r || (r = this.time.get(n)),
                o = Object.assign({}, o, {
                    type: t,
                    key: n,
                    value: r
                });
                i ? this.once("timesheet" + t + n, "timesheet", o, !0) : this.click("timesheet", o, !0)
            }
        }
    }, L = {}, B = !1, V = new A, W = function() {
        var e = V.get()
          , t = {};
        for (var n in e)
            t[n + "Time"] = e[n];
        return t
    }, F = {
        time: V,
        initial: function(e) {
            this.set("initial", e || R.get("wk_trace"))
        },
        firstScreen: function(e) {
            this.get("initial") || this.initial(),
            B || (B = !0,
            e = e || Date.now(),
            this.setDiffAbs("jsFullTime"),
            Object.assign(L, {
                timeOffset: Mt.timeOffset,
                firstScreen: e
            }, W()),
            Mt.logger.firstScreen(L),
            i.is.web && window.__bl && (window.__bl.pipe = ["performance", {
                cfpt: e - performance.timing.navigationStart
            }]))
        },
        get: function(e) {
            return e ? L[e] : L
        },
        set: function(e, t) {
            var n = m.is;
            n.string(e) && !n.existy(t) && (t = Date.now());
            var r = function(e, t) {
                var n, r, o = m.is;
                if (o.string(e) ? ((n = {})[e] = t,
                r = n) : o.object(e) && (r = e),
                r) {
                    var i = {};
                    for (var a in r)
                        L.hasOwnProperty(a) || (i[a] = r[a]);
                    return i
                }
            }(e, t);
            Object.assign(L, r, W())
        },
        setDiffAbs: function(e, t, n) {
            var r = m.is
              , o = L[t || "initial"];
            if (r.number(o)) {
                var i = L[n];
                r.number(i) || (i = Date.now());
                var a = Math.abs(o - i);
                this.set(e, a)
            }
        }
    }, U = function() {
        return !("undefined" == typeof window || !window) && (/iphone/gi.test(window.navigator.userAgent) && window.screen.height >= 812)
    }, H = 0, q = 0;
    o.a.web && U() && (H = 33e3 / screen.width,
    q = 25500 / screen.width);
    var z, G = {
        isIphoneXSeries: U(),
        isIphoneX: U(),
        statusBarHeight: H,
        navBarHeight: 0,
        bottomBarHeight: q
    }, J = {
        get appBarHeight() {
            var e = 104;
            return o.a.windVane && (e = o.a.android ? 112 : G.navBarHeight || 88),
            e
        },
        get navbarHeight() {
            return this.appBarHeight + this.statusBarHeight
        },
        get statusBarHeight() {
            var e = 0;
            return (o.a.weex || o.a.windVane) && (e = G.statusBarHeight || 40,
            o.a.android && (e = 48)),
            e
        },
        get screenWidth() {
            return 750
        },
        get screenHeight() {
            var e = window.innerHeight
              , t = window.innerWidth;
            return Math.round(e * this.screenWidth / t)
        },
        get bottomBarHeight() {
            return G.bottomBarHeight || 0
        }
    }, $ = {
        getSpeed: function() {},
        setSpeed: function() {},
        detectConnection: function(e) {
            return Mt.env.detectConnection(e)
        }
    }, K = m.util.call, X = {
        isLogin: function(e) {
            Mt.user.isLogin(e)
        },
        getUserInfo: function(e) {
            F.time.set("envUserInfo"),
            Mt.user.getUserInfo((function(t) {
                F.time.set("envUserInfo"),
                K(e, t)
            }
            ))
        },
        login: function(e, t) {
            Mt.user.login(e, t)
        }
    }, Y = m.util.call, Z = ["MM/dd/yyyy,US,en,en-us", "dd/MM/yyyy,GB,en,en-us", "dd/MM/yyyy,FR,fr,fr-fr", "dd/MM/yyyy,ES,es,es-es", "dd/MM/yyyy,IN,en,en-us", "dd/MM/yyyy,ID,id,in-id", "dd/MM/yyyy,ID,in,in-id", "dd/MM/yyyy,PT,pt,pt-pt", "dd/MM/yyyy,TR,tr,tr-tr", "dd/MM/yyyy,UR,ur,en-us", "dd/MM/yyyy,TH,th,th-th", "dd/MM/yyyy,AR,ar,ar-sa", "dd/MM/yyyy,MS,ms,ms-my", "MM/dd/yyyy,CA,fr,fr-fr", "dd/MM/yyyy,AU,en,en-us", "dd.MM.yyyy,DE,de,de-de", "dd.MM.yyyy,RU,ru,ru-ru", "yyyy/MM/dd,JP,ja,ja-jp", "MM/dd/yyyy,IT,it,it-it", "yyyy/MM/dd,CN,zh-Hans,zh-cn", "yyyy/MM/dd,CN,zh-Hant,zh-tw", "MM/dd/yyyy,KO,ko,ko-kr", "MM/dd/yyyy,VN,vi,vi-vn", "MM/dd/yyyy,IW,iw,iw-il", "MM/dd/yyyy,IW,he,iw-il", "MM/dd/yyyy,IN,hi,hi-in", "MM/dd/yyyy,NL,nl,nl-nl"], Q = {
        dateFormat: "yyyy-MM-dd",
        dateTimeFormat: "yyyy-MM-dd hh:mm:ss",
        language: "en",
        currency: "USD",
        region: "us",
        mcms: "en-us"
    }, ee = {
        get defaultLocale() {
            return Object.assign({}, Q)
        },
        get locale() {
            var e = o.a.web && window.__alibaba_environment__;
            if (e) {
                var t = {
                    language: e.appLanguage,
                    region: e.appCountry,
                    currency: e.appCurrency
                }
                  , n = m.object.pick(t, ["region", "currency"], !0);
                return z = this.findLocale(t.language || "en"),
                Object.assign(z, n),
                z
            }
            return Object.assign({}, z || Q)
        },
        findLocale: function(e) {
            for (var t = 0; t < Z.length; t++) {
                var n = Z[t].split(",")
                  , r = n[0]
                  , o = n[1]
                  , i = n[2]
                  , a = n[3]
                  , s = /^\w\w-\w\w$/gi.test(e) ? a : i;
                if (m.string.isEqual(e, s, !0))
                    return {
                        region: o,
                        mcms: a,
                        language: i,
                        dateFormat: r,
                        dateTimeFormat: r + " hh:mm:ss"
                    }
            }
            return this.defaultLocale
        },
        getLocale: function(e) {
            var t = this;
            if (z)
                return Y(e, z);
            F.time.set("envLocale"),
            Mt.env.getLocale((function(n) {
                F.time.set("envLocale");
                var r = m.object.pick(n, ["region", "currency"], !0);
                z = t.findLocale(n.language || "en"),
                Object.assign(z, r),
                j.emit(j.eventName.localeReady),
                Y(e, t.locale)
            }
            ))
        },
        factory: function(e) {
            return m.is.object(e) && e[o.a.weex ? "weex" : "web"] || e
        },
        is: o.a,
        device: J,
        speed: $,
        user: X,
        app: C
    }, te = function() {
        return (te = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }, ne = {
        ES: "spanish",
        PT: "portuguese",
        FR: "french",
        DE: "german",
        IT: "italian",
        TR: "turkish",
        TH: "thai",
        JP: "japanese",
        RU: "russian",
        KO: "korean",
        NL: "dutch",
        VN: "vietnamese",
        ID: "indonesian",
        AR: "arabic",
        IW: "hebrew",
        CN: "chinese"
    }, re = te(te({}, v), {
        getSubDomain: function(e) {
            return e = e || ee.locale.region,
            ne[e.toUpperCase()] || ""
        },
        getTFSUrl: function(e) {
            return m.is.url(e) ? e : "https://gw.alicdn.com/tfs/" + e
        },
        getHome: function(e) {
            var t = this.getSubDomain(e);
            return "https://m." + (t += t ? "." : "") + "alibaba.com/"
        },
        getDetail: function(e) {
            void 0 === e && (e = {});
            var t, n = e.id, r = e.subject, i = void 0 === r ? "product" : r, a = e.region, s = Object.assign({}, e.query);
            if (o.a.app)
                t = "enalibaba://detail/",
                Object.assign(s, {
                    id: n
                });
            else {
                i = i.replace(/[^\w]/gi, "-");
                var c = this.getSubDomain(a) ? "p-detail/product-" + n + ".html" : "product/" + n + "/" + i + ".html";
                t = "" + this.getHome(a) + c
            }
            var u = v.objectToParams(s);
            return u && (t += "?" + u),
            t
        },
        getMiniSite: function(e) {
            var t, n = (e = Object.assign({
                tab: "index"
            }, e)).id, r = e.tab, i = e.query, a = void 0 === i ? {} : i, s = e.host, c = ee.locale;
            if (Object.assign(a, {
                language: c.language,
                currency: c.currency
            }),
            o.a.app)
                t = "https://alisite-mobile.alibaba.com/minisite/" + n + "/" + r + ".htm",
                Object.assign(a, {
                    wx_navbar_transparent: !0,
                    wx_screen_direc: "portrait"
                });
            else {
                if (!s)
                    return;
                t = "//" + s + "/" + r + ".html"
            }
            return t += "?" + v.objectToParams(a)
        },
        getPerformance: function(e) {
            if (performance) {
                var t = function(e, t, n) {
                    var r = e.serverTiming
                      , o = r && r.find((function(e) {
                        return e.name === t
                    }
                    ));
                    return o && o[n]
                };
                try {
                    var n = [];
                    return performance.getEntriesByName(e).forEach((function(e) {
                        var r = {
                            rt: t(e, "rt", "duration"),
                            eagleid: t(e, "eagleid", "description"),
                            size: e.encodedBodySize,
                            duration: e.duration
                        };
                        n.push(r)
                    }
                    )),
                    n
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }), oe = {
        assign: function(e, t, n) {
            s.object(t) && !s.existy(n) && (n = t,
            t = null);
            var r = n || {}
              , i = (r.closeCurrent,
            r.ignoreTrack);
            /^\/\//.test(e) && (e = "https:" + e);
            var a = M.get("spm_id") || "";
            if (a && o.a.web) {
                var c = "";
                c = /^\w+\.\w+$/.test(a) ? a + ".0.0" : a;
                var u = e.indexOf("?") > -1 ? "&" : "?";
                e = "" + e + u + "spm=" + c
            }
            !0 !== i && M.click("goto-assign", {
                target: e
            }, !0),
            Mt.goto.assign(e, t)
        },
        detail: function(e) {
            var t = e.id
              , n = e.loggerParams
              , r = re.getDetail(e);
            M.click("goto-detail", {
                product_id: t,
                loggerParams: n
            }, !0),
            this.assign(r, {
                ignoreTrack: !0
            })
        },
        minisite: function(e) {
            var t = e.id
              , n = e.tab
              , r = e.loggerParams
              , o = re.getMiniSite(e);
            o ? (M.click("goto-minisite", {
                company_id: t,
                tab: n,
                loggerParams: r
            }, !0),
            this.assign(o, {
                ignoreTrack: !0
            })) : console.error("Parameter is incorrect")
        },
        back: function() {
            Mt.goto.back()
        },
        reload: function(e) {
            Mt.goto.reload(e)
        },
        home: function(e) {
            e = e || {};
            var t = "//m.alibaba.com/";
            o.a.windVane && (t = "enalibaba://",
            o.a.iOS ? t += "home" : (t += "sc-home",
            e.frag = "home")),
            t += "?" + re.objectToParams(e),
            this.assign(t)
        }
    }, ie = {
        util: f,
        object: d,
        string: p,
        url: re,
        is: s,
        to: c,
        xPath: u,
        goto: oe
    }, ae = function() {
        return (ae = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }, se = function(e, t) {
        var n = {};
        for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
    }, ce = ie.util.call, ue = function(e, t, n, r, o) {
        return function(i) {
            var a = ie.is;
            if (a.string(i))
                try {
                    i = JSON.parse(i)
                } catch (e) {
                    return ce(r, e)
                }
            if (!i)
                return M.click("windVane", {
                    status: "empty",
                    className: e,
                    methodName: t
                }, !0),
                void ce(r);
            var s = a.array(i.ret) ? i.ret[0] : i.ret;
            "HY_SUCCESS" !== s && a.existy(s) ? ce(r, s) : ce(n, o ? o(i) : i)
        }
    }, le = {
        getPerformanceInfo: function() {},
        getPerformanceLogInfo: function(e, t) {
            var n = {}
              , r = Date.now();
            ke.isMethodAvailable("performance", "getInfo", (function(o) {
                o ? (ee.is.android && le.callKit(e, "performance", "recordInfo", {
                    key: "clientOffset"
                }),
                le.callKit(e, "performance", "getInfo", {}, (function(e) {
                    var o = ie.util.getICBUKitData(e)
                      , i = void 0 !== o.mainDocZCacheTime
                      , a = 0
                      , s = 0;
                    if (o) {
                        var c = 1 * o.clientOffset;
                        for (var u in n.offset = r - c,
                        o) {
                            var l = o[u];
                            ie.is.url(u) && i ? (u.indexOf(".css") > -1 && -1 === l && a++,
                            u.indexOf(".js") > -1 && -1 === l && s++) : n[u] = l
                        }
                    }
                    n = ae(ae({}, n), {
                        nonCacheForCSS: i ? a : -1,
                        nonCacheForJS: i ? s : -1
                    }),
                    t(n)
                }
                ))) : t(n)
            }
            ))
        },
        getPlatFormInfo: function(e, t, n) {
            var r = "getPlatFormInfo"
              , o = ue("ALICommon", r, t, n)
              , i = Date.now();
            e.call("ALICommon", r, {}, (function(e) {
                var t = Date.now();
                F.set(r, t - i),
                o(e)
            }
            ))
        },
        fetchData: function(e, t, n, r) {
            var o = ue("ALICommon", "fetchData", n, r);
            e.call("ALICommon", "fetchData", t, o)
        },
        fetchDataByICBUKit: function(e, t, n, r) {
            var o = t.apiName
              , i = t.parameters
              , a = t.apiVersion
              , s = t.method
              , c = void 0 === s ? "GET" : s
              , u = t.auth
              , l = void 0 === u ? 0 : u
              , f = se(t, ["apiName", "parameters", "apiVersion", "method", "auth"])
              , d = ae({
                api: o,
                data: i,
                v: a || "1.0",
                method: c,
                needLogin: l
            }, f)
              , p = ue("ALICommon", "network_sendMtop", n, r, (function(e) {
                var t = ie.util.getICBUKitData(e)
                  , n = ie.xPath.get(t, "data")
                  , r = t._mtopStat_;
                return r && (n._mtopStat_ = r),
                n
            }
            ))
              , h = Date.now();
            le.callKit(e, "network", "sendMtop", d, (function(e) {
                var t = Date.now();
                F.set("network_sendMtop", t - h),
                p(e)
            }
            ), r)
        },
        doRouter: function(e, t, n) {
            e.call("ALICommon", "doRouter", t, n)
        },
        call: function(e, t, n, r, o, i, a) {
            r = r || {};
            var s = ue(t = t || "ALICommon", n, o, i);
            e.call(t, n, r, s, i, a)
        },
        callKit: function(e, t, n, r, o, i, a) {
            r = r || {};
            var s = ue(t, n, o, i);
            var c = {
                module: t,
                method: n,
                parameters: r
            };
            e.call("dispatcher", "invoke", c, s, i, a)
        }
    }, fe = le, de = {};
    window.__imkLog = de;
    var pe, he = function(e, t) {
        de[e] || (de[e] = {
            success: 0,
            fail: 0,
            call: 0
        }),
        de[e][t] += 1
    };
    var ve = {
        get instance() {
            return pe || (pe = function() {
                var e = window
                  , t = window.lib || (window.lib = {})
                  , n = e.Promise
                  , r = e.document
                  , o = e.navigator.userAgent
                  , i = /Windows\sPhone\s(?:OS\s)?[\d\.]+/i.test(o) || /Windows\sNT\s[\d\.]+/i.test(o)
                  , a = i && e.WindVane_Win_Private && e.WindVane_Win_Private.call
                  , s = /iPhone|iPad|iPod/i.test(o)
                  , c = /Android/i.test(o)
                  , u = o.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/)
                  , l = Object.prototype.hasOwnProperty
                  , f = t.windvane = e.WindVane || (e.WindVane = {
                    version: "3.0.7"
                })
                  , d = Math.floor(65536 * Math.random())
                  , p = 1
                  , h = [];
                function v(e, t) {
                    e = e.toString().split("."),
                    t = t.toString().split(".");
                    for (var n = 0; n < e.length || n < t.length; n++) {
                        var r = parseInt(e[n], 10)
                          , o = parseInt(t[n], 10);
                        if (window.isNaN(r) && (r = 0),
                        window.isNaN(o) && (o = 0),
                        r < o)
                            return -1;
                        if (r > o)
                            return 1
                    }
                    return 0
                }
                var m = {
                    isAvailable: 1 === v(u = u ? (u[1] || "0.0.0").replace(/\_/g, ".") : "0.0.0", "0"),
                    isNewBridgeAvailable: 1 === v(u, c ? "8.3.0" : "8.2.0"),
                    call2: function(e, t, n, r, o) {
                        var i = e.indexOf(".");
                        return m.call(e.substr(0, i), e.substr(i + 1), t, n, r, o)
                    },
                    call: function(t, r, o, i, a, s) {
                        var u, l;
                        "number" == typeof arguments[arguments.length - 1] && (s = arguments[arguments.length - 1]),
                        "function" != typeof i && (i = null),
                        "function" != typeof a && (a = null),
                        !n || i || a || (l = new n((function(e, t) {
                            i = e,
                            a = t
                        }
                        )));
                        var f = ("" + r).indexOf(".") > -1;
                        if ((!c || !f) && m.isNewBridgeAvailable && e.__windvane__ && (!e.__windvane__.call && e.__windvane__.windVaneCoreJs && new Function(e.__windvane__.windVaneCoreJs())(),
                        e.__windvane__.call))
                            return e.__windvane__.call(t + "." + r, o, i, a, s),
                            l;
                        u = g.getSid();
                        var d = {
                            success: i,
                            failure: a
                        };
                        return s > 0 && (d.timeout = setTimeout((function() {
                            m.onFailure(u, {
                                ret: "HY_TIMEOUT"
                            })
                        }
                        ), s)),
                        g.registerCall(u, d),
                        g.registerGC(u, s),
                        m.isAvailable ? g.callMethod(t, r, o, u) : m.onFailure(u, {
                            ret: "HY_NOT_IN_WINDVANE"
                        }),
                        l
                    },
                    fireEvent: function(e, t) {
                        var n = r.createEvent("HTMLEvents");
                        n.initEvent(e, !1, !0),
                        n.param = g.parseData(t),
                        r.dispatchEvent(n)
                    },
                    getParam: function(e) {
                        return g.getParam(e)
                    },
                    setData: function() {},
                    find: function(e, t) {
                        t || g.unregisterCall(e, !1)
                    },
                    onSuccess: function(e, t, n) {
                        g.onComplete(e, t, "success", n)
                    },
                    onFailure: function(e, t) {
                        g.onComplete(e, t, "failure")
                    }
                };
                m.isNewBridgeAvailable && e.__windvane__ && e.__windvane__.callSync && (m.callSync = function(t, n) {
                    if (s)
                        return e.__windvane__.callSync(t, n);
                    if (c) {
                        var r = {
                            name: t
                        };
                        n && (r.params = JSON.stringify(n));
                        var o = e.__windvane__.callSync(r);
                        if (o)
                            try {
                                return JSON.parse(o)
                            } catch (e) {}
                    }
                }
                );
                var g = {
                    params: {},
                    calls: {},
                    getSid: function() {
                        return (d + p++) % 65536 + ""
                    },
                    buildParam: function(e) {
                        return e && "object" == typeof e ? JSON.stringify(e) : e || ""
                    },
                    getParam: function(e) {
                        return this.params["param_" + e] || ""
                    },
                    setParam: function(e, t) {
                        this.params["param_" + e] = t
                    },
                    parseData: function(e) {
                        var t;
                        if (e && "string" == typeof e)
                            try {
                                t = JSON.parse(e)
                            } catch (n) {
                                t = {
                                    ret: "HY_RESULT_PARSE_ERROR",
                                    originValue: e
                                }
                            }
                        else
                            t = e || {};
                        return t
                    },
                    registerCall: function(e, t) {
                        this.calls[e] = t
                    },
                    unregisterCall: function(e, t) {
                        var n = this.calls[e] || {}
                          , r = n.timeout;
                        return r && clearTimeout(r),
                        t || delete this.calls[e],
                        n
                    },
                    useIframe: function(e, t) {
                        var n = h.pop();
                        n || ((n = r.createElement("iframe")).setAttribute("frameborder", "0"),
                        n.style.cssText = "width:0;height:0;border:0;display:none;"),
                        n.setAttribute("id", "iframe_" + e),
                        n.setAttribute("src", t),
                        n.parentNode || setTimeout((function() {
                            r.body.appendChild(n)
                        }
                        ), 5)
                    },
                    retrieveIframe: function(e) {
                        var t = r.querySelector("#iframe_" + e);
                        if (t)
                            if (h.length >= 3)
                                try {
                                    r.body.removeChild(t)
                                } catch (e) {}
                            else
                                h.indexOf(t) < 0 && h.push(t)
                    },
                    callMethod: function(t, n, r, o) {
                        var u = g.buildParam(r);
                        if (i)
                            a ? e.WindVane_Win_Private.call(t, n, o, u) : this.onComplete(o, {
                                ret: "HY_NO_HANDLER_ON_WP"
                            }, "failure");
                        else if (s) {
                            this.setParam(o, u);
                            var l = "hybrid://" + t + ":" + o + "/" + n + "?" + encodeURIComponent(u);
                            this.useIframe(o, l)
                        } else if (c) {
                            this.setParam(o, r);
                            l = "hybrid://" + t + ":" + o + "/" + n + "?" + u;
                            window.prompt(l, "wv_hybrid:")
                        } else
                            this.onComplete(o, {
                                ret: "HY_NOT_SUPPORT_DEVICE"
                            }, "failure")
                    },
                    registerGC: function(e, t) {
                        var n = this
                          , r = Math.max(t || 0, 6e5)
                          , o = Math.max(t || 0, 6e4);
                        setTimeout((function() {
                            n.unregisterCall(e)
                        }
                        ), r),
                        s && setTimeout((function() {
                            n.params["param_" + e] && delete n.params["param_" + e]
                        }
                        ), o)
                    },
                    onComplete: function(e, t, n, r) {
                        var o = this.unregisterCall(e, r)
                          , i = o.success
                          , a = o.failure
                          , c = (t = this.parseData(t)).ret;
                        "string" == typeof c && ((t = t.value || t).ret || (t.ret = [c])),
                        "success" === n ? i && i(t) : "failure" === n && a && a(t),
                        s && (this.retrieveIframe(e),
                        this.params["param_" + e] && delete this.params["param_" + e])
                    }
                };
                for (var y in m)
                    l.call(f, y) || (f[y] = m[y]);
                return f
            }()),
            pe
        },
        getPerformanceInfo: function(e) {
            fe.getPerformanceInfo(this.instance, e)
        },
        getPerformanceLogInfo: function(e) {
            fe.getPerformanceLogInfo(this.instance, e)
        },
        getPlatFormInfo: function(e) {
            fe.getPlatFormInfo(this.instance, e)
        },
        fetchData: function(e, t, n) {
            fe.fetchData(this.instance, e, t, n)
        },
        fetchDataByICBUKit: function(e, t, n) {
            fe.fetchDataByICBUKit(this.instance, e, t, n)
        },
        doRouter: function(e, t) {
            fe.doRouter(this.instance, e, t)
        },
        call: function(e, t, n, r, o, i) {
            fe.call(this.instance, e, t, n, r, o, i)
        },
        callKit: function(e, t, n, r, o, i) {
            he(e + "." + t, "call"),
            fe.callKit(this.instance, e, t, n, r, o, i)
        }
    }
      , me = {
        "network.sendMtop": "7.13.1",
        "userTrack.commitExposure": "7.13.1",
        "userTrack.commitClick": "7.13.1",
        "userTrack.commitEnter": "7.13.1"
    }
      , ge = {}
      , ye = function() {
        return i.is.AliBuyer ? C.geVersion("7.13.1") : !!i.is.AliSeller || void 0
    }
      , be = {
        isMethodAvailable: function(e, t, n) {
            var r = e + "." + t;
            if (!ge[r])
                return ye() ? void (me[r] && C.geVersion(me[r]) ? m.util.call(n, !0) : ve.callKit("container", "isAvailable", {
                    module: e,
                    method: t
                }, (function(e) {
                    var t = m.xPath.get(m.util.getICBUKitData(e), "available");
                    ge[r] = t,
                    m.util.call(n, t)
                }
                ))) : (ge[r] = !1,
                void m.util.call(n, !1));
            m.util.call(n, ge[r])
        },
        setTitle: function(e) {
            i.is.web && (document.title = e),
            i.is.windVane && ve.call(null, "setNavigationInfo", {
                titleText: e
            })
        }
    }
      , we = {
        setTitle: be.setTitle,
        setNavbar: function() {},
        on: function(e, t) {
            window.addEventListener("message", (function(n) {
                m.xPath.get(n, "data.eventName") === "@ali/redfox-" + e && (n.origin.indexOf(".alibaba.com") > -1 ? t(m.xPath.get(n, "data.data")) : console.info("origin\u9a8c\u8bc1\u4e0d\u6b63\u786e\uff0cevent\u5931\u6548", n))
            }
            ), !1)
        },
        emit: function(e, t) {
            void 0 === t && (t = {});
            for (var n = window.frames, r = [window.parent], o = n.length, i = 0; i < o; i++)
                r.push(n[i]);
            r.forEach((function(n) {
                n.postMessage({
                    eventName: "@ali/redfox-" + e,
                    data: t
                }, location.origin)
            }
            ))
        },
        isMethodAvailable: function(e, t, n) {
            n(!1)
        }
    }
      , _e = function(e, t, n, r) {
        return new (n || (n = Promise))((function(o, i) {
            function a(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    i(e)
                }
            }
            function s(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }
            function c(e) {
                var t;
                e.done ? o(e.value) : (t = e.value,
                t instanceof n ? t : new n((function(e) {
                    e(t)
                }
                ))).then(a, s)
            }
            c((r = r.apply(e, t || [])).next())
        }
        ))
    }
      , Oe = function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: s(0),
            throw: s(1),
            return: s(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function s(i) {
            return function(s) {
                return function(i) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (n = 1,
                            r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, i[1])).done)
                                return o;
                            switch (r = 0,
                            o && (i = [2 & i[0], o.value]),
                            i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                r = i[1],
                                i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys,
                                (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1],
                                    o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2],
                                    a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            i = t.call(e, a)
                        } catch (e) {
                            i = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & i[0])
                        throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }
      , xe = {};
    var Se = {
        setTitle: be.setTitle,
        setNavbar: function() {},
        on: function(e, t) {
            !function(e, t) {
                _e(this, void 0, void 0, (function() {
                    var n, r;
                    return Oe(this, (function() {
                        return n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                            var t = 16 * Math.random() | 0;
                            return ("x" == e ? t : 3 & t | 8).toString(16)
                        }
                        )),
                        ee.is.web && (r = n + "-" + e,
                        xe[e] = r,
                        ve.call("WVBroadcast", "createChannel", {
                            instanceId: r,
                            name: e
                        }),
                        document.addEventListener("Broadcast.Message." + r, (function(e) {
                            var n = e.param;
                            t(n)
                        }
                        ))),
                        [2]
                    }
                    ))
                }
                ))
            }(e, (function(e) {
                try {
                    var n = null;
                    n = "string" == typeof e ? JSON.parse(e) : e,
                    t(n)
                } catch (e) {}
            }
            ))
        },
        emit: function(e, t) {
            void 0 === t && (t = {}),
            ve.callKit("broadcast", "emit", {
                name: e,
                data: t
            })
        },
        isMethodAvailable: be.isMethodAvailable
    }
      , ke = i.is.windVane ? Se : we
      , Pe = {};
    "undefined" != typeof localStorage && localStorage && (Pe = localStorage);
    var Ee = {
        getItem: function(e) {
            return new Promise((function(t, n) {
                Pe.getItem ? t(Pe.getItem(e)) : n()
            }
            ))
        },
        setItem: function(e, t) {
            return new Promise((function(n, r) {
                Pe.setItem ? (Pe.setItem(e, t),
                n(null)) : r()
            }
            ))
        },
        removeItem: function(e) {
            return new Promise((function(t, n) {
                Pe.removeItem ? (Pe.removeItem(e),
                t(null)) : n()
            }
            ))
        },
        getAllKeys: function() {
            return new Promise((function(e) {
                Pe.length ? e(Object.keys(Pe)) : e([])
            }
            ))
        },
        clear: function() {
            return new Promise((function(e, t) {
                Pe.clear ? (Pe.clear(),
                e(null)) : Ee.getAllKeys().then((function(n) {
                    Promise.all(n.map((function(e) {
                        return Ee.removeItem(e)
                    }
                    ))).then((function() {
                        return e(null)
                    }
                    )).catch(t)
                }
                ))
            }
            ))
        },
        length: function() {
            return new Promise((function(e) {
                null != Pe.length ? e(Pe.length) : e(0)
            }
            ))
        }
    }
      , je = Ee;
    function Ce() {}
    var Ae = decodeURIComponent;
    encodeURIComponent;
    function Te(e) {
        return "string" == typeof e
    }
    function Re(e) {
        return e
    }
    var Ie = {
        get: function(e, t) {
            !function(e) {
                if (t = e,
                !Te(t) || "" === t)
                    throw new TypeError("Cookie name must be a non-empty string");
                var t
            }(e),
            t = "function" == typeof t ? {
                converter: t
            } : t || {};
            var n = function(e, t) {
                var n = {};
                if (Te(e) && e.length > 0)
                    for (var r = t ? Ae : Re, o = e.split(/;\s/g), i = void 0, a = void 0, s = void 0, c = 0, u = o.length; c < u; c++) {
                        if ((s = o[c].match(/([^=]+)=/i))instanceof Array)
                            try {
                                i = Ae(s[1]),
                                a = r(o[c].substring(s[1].length + 1))
                            } catch (e) {}
                        else
                            i = Ae(o[c]),
                            a = "";
                        i && (n[i] = a)
                    }
                return n
            }(document.cookie, !t.raw);
            return (t.converter || Re)(n[e])
        },
        set: Ce,
        remove: Ce
    }
      , Ne = m.util.call
      , De = function(e) {
        var t = Ie.get("xman_us_t")
          , n = !!t && -1 !== t.indexOf("sign=y");
        Ne(e, n)
    }
      , Me = {
        getCToken: function() {
            return m.url.paramsToObject(Ie.get("xman_us_t")).ctoken
        },
        getUserInfo: function(e) {
            var t, n, r = {
                userId: (t = "",
                n = (Ie.get("ali_apache_track") || "").match(/mid=([^&"]+)/),
                m.is.array(n) && n.length > 0 && (t = n[1].split("|")[0]),
                t),
                cna: Ie.get("cna") || "",
                aliBeaconId: Ie.get("ali_beacon_id") || ""
            };
            Ne(e, r)
        },
        isLogin: De,
        login: function(e, t) {
            var n = (t = t || {}).isFocusLogin;
            function r() {
                var e = "https://m.alibaba.com/login.html?return_url=" + encodeURIComponent(t.returnUrl);
                location.assign(e)
            }
            t = Object.assign({
                returnUrl: location.href
            }, t),
            n ? r() : De((function(t) {
                if (t)
                    return Ne(e);
                r()
            }
            ))
        }
    }
      , Le = m.util.call
      , Be = m.util.noop
      , Ve = {
        back: function() {
            if (i.is.windVane) {
                if (i.is.AliBuyer && location.href.indexOf("wx_no_anim=true") > -1 && i.is.iOS)
                    return void ve.call(null, "finishThisPage", {});
                ve.callKit("navigation", "pop", {})
            } else
                history && history.back()
        },
        assign: function(e, t) {
            if (i.is.windVane)
                i.is.AliSeller ? ve.callKit("navigation", "push", {
                    url: e,
                    animated: !0
                }, (function() {
                    Le(t)
                }
                )) : ve.call(null, "doRouter", {
                    url: e
                }, (function() {
                    Le(t)
                }
                ), Be);
            else {
                var n = window._locationAssign;
                n ? n(e) : location.assign(e)
            }
        },
        reload: function(e) {
            location.reload(e)
        }
    }
      , We = null
      , Fe = m.util.call
      , Ue = m.util.noop
      , He = function(e) {
        i.is.AliSeller ? ve.callKit("user", "getBaseInfo", {}, (function(t) {
            var n = m.util.getICBUKitData(t);
            n.userId = n.loginId,
            Fe(e, !0, n)
        }
        )) : ve.call(null, "hasUserLogined", {}, (function(t) {
            m.is.string(t) && (t = JSON.parse(t));
            var n = 1 === t.isLoginIn || "1" === t.isLoginIn;
            Fe(e, n, t)
        }
        ), null)
    }
      , qe = {
        getCToken: Ue,
        login: function(e, t) {
            (t = t || {}).isFocusLogin;
            var n = {
                status: "notLogin"
            };
            He((function(t) {
                if (t)
                    return n.status = "fromSession",
                    Fe(e, n);
                We = e,
                document.addEventListener("WV.Event.APP.Active", (function() {
                    setTimeout((function() {
                        He((function(e) {
                            e ? (n.status = "fromLogin",
                            Fe(We, n),
                            We = null) : Fe(We, n)
                        }
                        ))
                    }
                    ), 500)
                }
                ), !1),
                Ve.assign("enalibaba://signIn")
            }
            ))
        },
        getUserInfo: function(e) {
            i.is.AliSeller ? ve.callKit("user", "getBaseInfo", {}, (function(t) {
                var n = m.util.getICBUKitData(t);
                n.userId = n.loginId,
                Fe(e, n)
            }
            )) : ve.call(null, "hasUserLogined", {}, (function(t) {
                m.is.string(t) && (t = JSON.parse(t)),
                t.userId = t.loginId,
                Fe(e, t)
            }
            ), null)
        },
        isLogin: He
    }
      , ze = i.is.windVane ? qe : Me
      , Ge = ie.util.call
      , Je = {}
      , $e = 0
      , Ke = function(e) {
        if (Je.platform)
            return F.set("PlatFormInfoReadCount", $e),
            Ge(e, Je.platform);
        $e++;
        var t = Date.now()
          , n = function(n) {
            ie.is.string(n) && (n = JSON.parse(n)),
            M.timesheet({
                type: "native",
                key: "getPlatFormInfo",
                params: {
                    source: "normal"
                },
                value: Date.now() - t,
                once: !0
            }),
            Je.platform = n,
            Ge(e, n)
        };
        ve.getPlatFormInfo(n)
    }
      , Xe = {
        getLocaleFromWindVane: function(e) {
            var t = ee.is.web && window.__alibaba_environment__;
            if (t) {
                var n = {
                    language: t.appLanguage,
                    region: t.appCountry,
                    currency: t.appCurrency
                };
                return Ge(e, n)
            }
            ee.is.AliBuyer ? Ke((function(t) {
                if (!t)
                    return Ge(e, {});
                var n = {
                    language: t.currentLang,
                    region: t.localeCode,
                    currency: t.currency || t.currencyCode
                };
                Ge(e, n)
            }
            )) : Mt.windVane.callKit("locale", "getLocaleInfo", {}, (function(t) {
                var n = {
                    language: ie.util.getICBUKitData(t).languageMcms.replace("_", "-"),
                    region: "",
                    currency: ""
                };
                Ge(e, n)
            }
            ))
        },
        getPlatFormInfo: Ke,
        detectConnection: function(e) {
            var t = {
                type: "unknown"
            };
            ee.is.windVane ? ve.call("WVNetwork", "getNetworkType", {}, (function(n) {
                var r = ie.xPath.get(n, "type");
                e(t = {
                    type: r
                })
            }
            )) : e(t)
        }
    }
      , Ye = ie.util.call
      , Ze = {
        getLocale: function(e) {
            if (ee.is.windVane)
                return Xe.getLocaleFromWindVane(e);
            var t = ie.url.paramsToObject(Ie.get("sc_g_cfg_f") || "")
              , n = t.sc_b_locale || "";
            Ye(e, {
                currency: t.sc_b_currency,
                language: n.replace("_", "-")
            })
        },
        getPlatFormInfo: Xe.getPlatFormInfo,
        detectConnection: Xe.detectConnection
    }
      , Qe = function(e, t) {
        var n, r = t.callbackKey, o = t.callbackName, i = t.params, a = ie.url.parse(e);
        return Object.assign(a.query, ((n = {})[r] = o,
        n), i),
        ie.url.stringify(a)
    }
      , et = function(e) {
        var t = null == e ? void 0 : e.fetchOptions;
        return Object.assign({}, {
            callbackName: "jsonp_" + ie.string.simpleRandom(),
            callbackKey: "callback",
            timeout: 15e3
        }, e, t)
    }
      , tt = ie.util.call;
    function nt(e) {
        document.getElementsByTagName("head")[0].removeChild(e)
    }
    function rt(e) {
        try {
            delete window[e]
        } catch (t) {
            window[e] = void 0
        }
    }
    var ot = function(e, t, n, r) {
        var o, i = et(t), a = document.createElement("script"), s = i.callbackName, c = i.timeout, u = Qe(e, i);
        window[s] = function(e) {
            var t = ie.url.getPerformance(u);
            tt(n, e, t && t[0]),
            o && clearTimeout(o),
            nt(a),
            rt(s)
        }
        ,
        a.setAttribute("src", u),
        document.getElementsByTagName("head")[0].appendChild(a),
        o = setTimeout((function() {
            tt(r, new Error("JSONP request to " + u + " timed out")),
            nt(a),
            window[s] = function() {
                rt(s)
            }
        }
        ), c)
    }
      , it = function() {
        return (it = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
      , at = m.util.call
      , st = m.string.isMTOP
      , ct = {
        isMTOP: st,
        getFetchType: function(e, t) {
            var n = t.type;
            return !n && st(e) && (n = "mtop"),
            !n && /^http/.test(e) && (n = "jsonp"),
            n
        },
        normalFetch: function(e, t, n, r) {
            if (e) {
                var o = it({
                    method: t.method,
                    credentials: "same-origin"
                }, t.fetchOptions);
                if (t.method || (t.method = "get"),
                "post" === t.method.toLowerCase() && m.is.object(t.params)) {
                    var i = t.fetchOptions.headers["Content-Type"];
                    i && i.indexOf("application/json") > -1 ? o.body = JSON.stringify(t.params) : o.body = function(e) {
                        var t, n, r = new FormData;
                        for (var o in e)
                            r.append(o, (t = e[o],
                            n = void 0,
                            ((n = m.is).object(t) || n.array(t)) && (t = JSON.stringify(t)),
                            t));
                        return r
                    }(t.params)
                } else
                    "get" === t.method.toLowerCase() ? m.is.object(t.params) && (e = m.url.appendQuery(e, t.params)) : o.body = t.params;
                fetch(e, o).then((function(e) {
                    return e.json()
                }
                )).then((function(e) {
                    at(n, e)
                }
                )).catch((function(e) {
                    at(r, e)
                }
                ))
            } else
                at(r, {
                    message: "no apiName, " + JSON.stringify(t)
                })
        },
        call: function(e, t, n, r, o) {
            var i = this.getFetchType(e, t)
              , a = this.normalFetch;
            switch (i) {
            case "mtop":
                a = o;
                break;
            case "jsonp":
                a = ot
            }
            "mtop" !== i && (t.params = Object.assign({
                ctoken: ze.getCToken(),
                _tb_token_: Ie.get("_tb_token_")
            }, t.params)),
            at(a, e, t, n, r)
        }
    }
      , ut = ie.util.call
      , lt = function(e, t, n, r) {
        ee.getLocale((function(o) {
            void 0 === o && (o = {}),
            t.params = t.params || {},
            ["language", "currency", "countryCode"].forEach((function(e) {
                t.params[e] = t.params[e] || o[e]
            }
            )),
            function(e, t, n, r) {
                var o = window.lib && window.lib.mtop
                  , i = t.v
                  , a = t.params
                  , s = t.ecode
                  , c = t.env
                  , u = (t.fetchOptions || {}).dataType;
                if (!o)
                    return ut(r, "mtop.js is not found.");
                var l, f = "acs", d = "h";
                "pre" === c && (l = "pre-acs"),
                /\.us$/.test(e) && (f = "trade-acs",
                d = "m"),
                o.config.prefix = l || f,
                o.config.subDomain = d,
                o.config.mainDomain = "alibaba.com";
                var p = {
                    api: e,
                    v: i || "1.0",
                    data: JSON.stringify(a),
                    appKey: o.config.appKey || "24889839",
                    ecode: s,
                    H5Request: !0
                };
                u && (p.dataType = u),
                o.request(p).then((function(e) {
                    ut(n, e)
                }
                ), (function(e) {
                    var t = e.ret
                      , n = (void 0 === t ? [] : t)[0]
                      , o = 200;
                    n && n.indexOf("SESSION_EXPIRED") > -1 && (o = 401),
                    ut(r, {
                        message: n = n || "mtop fetch error",
                        statusCode: o
                    })
                }
                ))
            }(e, t, n, r)
        }
        ))
    }
      , ft = function() {
        return (ft = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
      , dt = function(e, t, n, r) {
        var o, i = ft({
            parameters: t.params,
            apiVersion: t.v,
            auth: t.ecode,
            method: t.method
        }, t.fetchOptions), a = ct.isMTOP(e) ? "apiName" : "interfaceName";
        return i[a] = e,
        o = t.ecode,
        void ke.isMethodAvailable("network", "sendMtop", (function(e) {
            !e || !ee.is.AliSeller && o ? ve.fetchData(i, n, r) : ve.fetchDataByICBUKit(i, n, r)
        }
        ))
    }
      , pt = i.is.windVane ? function(e, t, n, r) {
        ct.call(e, t, n, r, dt)
    }
    : function(e, t, n, r) {
        ct.call(e, t, n, r, lt)
    }
      , ht = {}
      , vt = {
        register: function(e, t) {
            var n = ht[e];
            n || (n = ht[e] = []);
            var r = ie.is;
            r.array(t) || (t = [t]),
            t.forEach((function(e) {
                r.func(e) && n.push(e)
            }
            ))
        },
        call: function(e, t) {
            var n = ht[e]
              , r = ie.is
              , o = ie.util.call
              , i = 0;
            return {
                next: function(e) {
                    var a = function() {
                        if (!r.array(n) || n.length <= i)
                            return o(e, t);
                        var s = n[i++];
                        o(s, t, a)
                    };
                    a()
                }
            }
        },
        unregister: function() {}
    }
      , mt = function() {
        return (mt = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    };
    function gt(e, t) {
        var n = e.isSSRPlus
          , r = e.isSnapShot
          , o = r ? void 0 : n ? e.ssrStartTime : e.fetchStart
          , i = r ? void 0 : n ? e.ssrEndTime : e.fetchEnd
          , a = r ? e.snapshotTime : e.SSRPlusTime || window.__BB.didMount
          , s = null == e ? void 0 : e.initial
          , c = _t(r ? a : o, s)
          , u = {
            apiFetch: _t(i, o),
            apiRT: e.apiRT,
            didMount: a,
            apiFetchStart: o,
            apiFetchEnd: i,
            jsPureTime: c,
            isSnapShot: e.isSnapShot ? "Y" : "N",
            isUseDataCache: "preload" === e.fetchWorkerType ? "Y" : "N",
            isSSRPlus: e.isSSRPlus ? "Y" : "N",
            isUsePrefetch: e.prefetchXTime ? "Y" : "N"
        };
        if (e.jsPureTime = c,
        t) {
            var l = mt(mt({}, t), {
                nativeFetch: (null == t ? void 0 : t.nativePrefetchEnd) - (null == t ? void 0 : t.nativePrefetchStart) || e.mtopTime,
                containerInitial: (null == t ? void 0 : t.nativeWebViewLoadStart) - (null == t ? void 0 : t.nativeWebViewCreateStart),
                isUseCache: "true" === (null == t ? void 0 : t.mainDocIsZCache) || !0 === (null == t ? void 0 : t.mainDocIsZCache) ? "Y" : "N"
            });
            delete l.mainDocIsZCache,
            u = mt(mt({}, u), l);
            var f = t.mainDocZCacheTime;
            f && (e.mainDocTime = f)
        }
        return function(e) {
            var t = e.offset || 0
              , n = ["nativeStart", "nativeContainerStart", "nativeWebViewCreateStart", "nativeWebViewCreateEnd", "nativePrefetchStart", "nativePrefetchEnd", "nativeWebViewLoadStart"]
              , r = ["exposed", "apiFetchStart", "apiFetchEnd", "didMount", "jsPureTime"]
              , o = ["isUseCache", "isUseDataCache", "isSSRPlus", "isSnapShot", "isUsePrefetch", "containerInitial", "nativeFetch", "apiFetch", "nonCacheForCSS", "nonCacheForJS", "apiRT"]
              , i = {};
            for (var a in e) {
                var s = e[a];
                void 0 === s ? i[a] = void 0 : n.includes(a) ? i[a] = 1 * s + t : r.includes(a) ? i[a] = 1 * s : o.includes(a) && (i[a] = s)
            }
            return i
        }(u)
    }
    function yt(e) {
        var t = e.exposed
          , n = e.bbData
          , r = e.extendParams;
        Object.assign(window.__BB, n, {
            extendParams: r,
            exposed: t
        }),
        function(e) {
            var t = performance.timing.navigationStart
              , n = _t(performance.timing.responseStart, t)
              , r = _t(e.exposed, t)
              , o = _t(e.bbData.didMount, t);
            if (r > 15e3 || o > 15e3 || n > 15e3)
                return !1;
            return !0
        }(e) && setTimeout((function() {
            !function(e) {
                var t = "https://s.alicdn.com/@g/woodpeckerx/jssdk/wpkReporter.js"
                  , n = performance.timing.navigationStart
                  , r = performance.timing.responseStart;
                i.is.windVane ? i.is.android ? wt(t, o) : i.is.iOS && o() : wt(t, o);
                function o() {
                    var t, o, a, s, c, u, l, f, d, p = null;
                    if (window.wpkReporter) {
                        try {
                            var h = (null === (t = document.getElementsByTagName("meta")["wpk-bid"]) || void 0 === t ? void 0 : t.content) || "1rzf0qwp-hlppmnjl";
                            (p = new window.wpkReporter({
                                bid: h,
                                rel: function() {
                                    return x + "-" + (i.is.windVane ? "app" : "h5")
                                },
                                cluster: "intl",
                                onlyCustomInUCCore: i.is.android,
                                plugins: [],
                                supportBeaconBody: !1
                            })).installAll()
                        } catch (e) {
                            console.error("init wpkReporter fail", e)
                        }
                        if (window.__wpk = p,
                        p) {
                            var v = _t(r, n)
                              , m = {
                                wl_avgv1: v,
                                wl_avgv2: _t(null === (o = e.extendParams) || void 0 === o ? void 0 : o.initial, r),
                                wl_avgv3: e.bbData.jsPureTime,
                                wl_avgv4: e.bbData.apiFetch,
                                wl_avgv5: _t(null === (a = window.__BB) || void 0 === a ? void 0 : a.didMount, e.bbData.apiFetchEnd)
                            }
                              , g = {
                                wl_avgv1: v,
                                wl_avgv2: _t(null === (s = e.extendParams) || void 0 === s ? void 0 : s.initial, n),
                                wl_avgv3: _t(e.bbData.apiFetchStart, n),
                                wl_avgv4: _t(e.bbData.apiFetchEnd, n),
                                wl_avgv5: _t(null === (c = window.__BB) || void 0 === c ? void 0 : c.didMount, n)
                            }
                              , y = {
                                c1: null === (u = null == e ? void 0 : e.bbData) || void 0 === u ? void 0 : u.isUseCache,
                                c2: "N",
                                c3: null === (l = null == e ? void 0 : e.bbData) || void 0 === l ? void 0 : l.isUsePrefetch,
                                c4: null === (f = null == e ? void 0 : e.bbData) || void 0 === f ? void 0 : f.isSSRPlus,
                                c5: null === (d = null == e ? void 0 : e.bbData) || void 0 === d ? void 0 : d.isSnapShot
                            }
                              , b = [mt(mt({
                                category: 107,
                                msg: "\u5168\u94fe\u8def\u76d1\u63a7-\u65b0"
                            }, m), y), mt(mt({
                                category: 108,
                                msg: "\u5168\u94fe\u8def\u76d1\u63a7-\u65f6\u95f4\u70b9"
                            }, g), y)];
                            if (bt) {
                                var w = "";
                                if ("false" === bt.isEarlyPrefetch)
                                    try {
                                        w = JSON.stringify(window.__earlyPrefetchData || window.__epd2)
                                    } catch (e) {}
                                b.push({
                                    category: 104,
                                    msg: "\u9996\u5c4fAPI-\u65b0",
                                    wl_avgv1: bt.totalTime,
                                    wl_avgv2: bt.fetchRT,
                                    wl_avgv3: bt.duration,
                                    w_succ: "true" === bt.isEarlyPrefetch ? 1 : 0,
                                    bl1: w
                                })
                            }
                            b.forEach((function(e) {
                                p.report(e)
                            }
                            ))
                        }
                    }
                }
            }(e)
        }
        ), 2e3)
    }
    var bt = null;
    function wt(e, t) {
        void 0 === t && (t = function() {}
        );
        var n = document.createElement("script");
        n.src = e,
        n.onload = t,
        document.head.append(n)
    }
    function _t(e, t) {
        return e && t ? Math.abs(e - t) : null
    }
    var Ot = {}
      , xt = function(e, t, n) {
        var r = R.get("pageName")
          , o = "exp" === e ? "EXP" : "CLK";
        n = Object.assign({}, n, R.get()),
        n = m.object.filter(n, (function(e) {
            return m.is.existy(e)
        }
        ));
        var i = R.get("spm_id");
        if ((n.spmc || n.spmd) && i) {
            var a = i.split(".");
            n.spm_id = a[0] + "." + a[1] + "." + (n.spmc || "") + "." + (n.spmd || ""),
            delete n.spmc,
            delete n.spmd
        }
        var s = m.url.objectToParams(n);
        /^\/.+\..+\..+$/.test(t) || (t = "/sc.mobile." + t),
        vt.call("$logger.beforeSend", {
            extend: s,
            params: n,
            event: e,
            eventType: o,
            pageName: r,
            logKey: t
        }).next((function(e) {
            (window.goldlog_queue || (window.goldlog_queue = [])).push({
                action: "goldlog.record",
                arguments: [t, o, e.extend, "GET"]
            })
        }
        ))
    }
      , St = {
        reportPerformance: function() {},
        firstScreen: function(e) {
            window.__BB = window.__BB || {};
            var t = window.__BB.extendParams || {}
              , n = Object.assign({}, t, Ot, R.get(), e)
              , r = gt(n);
            yt({
                exposed: n.snapshotTime || n.SSRPlusTime || e.firstScreen,
                bbData: r,
                extendParams: n
            })
        },
        click: function(e, t) {
            xt("click", e, t)
        },
        expose: function(e, t) {
            xt("exp", e, t)
        },
        enter: function() {},
        update: function() {},
        spaUpdate: function() {},
        _sendPagePV_: function() {}
    }
      , kt = function() {
        return (kt = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
      , Pt = {}
      , Et = {}
      , jt = !1
      , Ct = window.goldlog_queue || (window.goldlog_queue = [])
      , At = function(e, t, n) {
        var r = R.get("pageName");
        if (r) {
            var o = R.get("spm_id");
            if (n = Object.assign({}, n, R.get()),
            ((n = m.object.filter(n, (function(e) {
                return m.is.existy(e)
            }
            ))).spmc || n.spmd) && o) {
                var i = o.split(".");
                n.spm_id = i[0] + "." + i[1] + "." + (n.spmc || "") + "." + (n.spmd || ""),
                delete n.spmc,
                delete n.spmd
            }
            ["rawUrl", "pageName"].forEach((function(e) {
                n[e] = encodeURIComponent(n[e])
            }
            )),
            n.rawUrl && (n.rawUrl = n.rawUrl.replace(/%2F/g, "-").replace(/%/g, ":"));
            var a = kt({
                "spm-cnt": n.spm_id
            }, n);
            for (var s in a) {
                var c = typeof a[s];
                "number" !== c && "boolean" !== c || (a[s] = a[s] + "")
            }
            vt.call("$logger.beforeSend", {
                extend: a,
                params: n,
                event: e,
                pageName: r,
                logKey: t
            }).next((function(o) {
                var i = {
                    click: "commitClick",
                    expose: "commitExposure",
                    enter: "commitEnter",
                    update: "commitUpdate"
                }[e]
                  , a = {
                    pageName: r,
                    args: o.extend
                };
                "click" === e ? a.controlName = t : "expose" === e ? (a.exposeName = t,
                a.exposeTime = 0) : "enter" !== e && "update" !== e || (a.pageURL = n.spm_id),
                C.leVersion("7.13.1") || ve.callKit("userTrack", i, a)
            }
            ))
        } else
            setTimeout((function() {
                At(e, t, n)
            }
            ), 500)
    }
      , Tt = function(e) {
        var t = function() {
            At(e ? "update" : "enter", "", {
                pageName: R.get("pageName")
            });
            try {
                Ct.push({
                    action: "goldlog.setMetaInfo",
                    arguments: ["isonepage", "1|Page_" + R.get("pageName")]
                })
            } catch (e) {}
        };
        t(),
        document.addEventListener("WV.Event.APP.Active", (function() {
            setTimeout((function() {
                t()
            }
            ), 500)
        }
        ), !1)
    }
      , Rt = function() {
        i.is.iOS && ve.callKit("userTrack", "commitPageAppear", {}, (function() {}
        ))
    }
      , It = {
        reportPerformance: function() {},
        firstScreen: function(e) {
            window.__BB = window.__BB || {};
            var t = window.__BB.extendParams || {}
              , n = Object.assign({}, t, Pt, R.get(), e);
            delete n.pageUrl,
            ve.getPerformanceLogInfo((function(t) {
                var r = gt(n, t);
                yt({
                    exposed: n.snapshotTime || n.SSRPlusTime || e.firstScreen,
                    bbData: r,
                    extendParams: n
                })
            }
            ))
        },
        click: function(e, t) {
            At("click", e, t)
        },
        expose: function(e, t) {
            At("expose", e, t)
        },
        enter: function() {
            Tt()
        },
        update: function() {
            Tt(!0)
        },
        spaUpdate: function(e, t) {
            void 0 === e && (e = {}),
            void 0 === t && (t = !1),
            function(e) {
                if (!i.is.windVane)
                    return;
                var t = 0;
                !function n() {
                    var r;
                    try {
                        var o = window.goldlog;
                        if (o && o.getMetaInfo && o.getMetaInfo("aplus_chnl")) {
                            var i = "icbuWindVane" === (null === (r = o.getMetaInfo("aplus_chnl")) || void 0 === r ? void 0 : r.bridgeName);
                            if (i)
                                return void e(i)
                        }
                    } catch (e) {
                        console.info(e)
                    }
                    t >= 10 ? e(!1) : (t++,
                    setTimeout(n, 400))
                }()
            }((function(n) {
                (t && (Et = e),
                n) && (jt = !0,
                window.goldlog.sendPV());
                Rt(),
                i.is.iOS && At("update", "", kt({
                    pageName: R.get("pageName")
                }, Et)),
                document.addEventListener("WV.Event.APP.Active", (function() {
                    Rt(),
                    At("update", "", kt({
                        pageName: R.get("pageName")
                    }, Et))
                }
                ), !1)
            }
            ))
        },
        _sendPagePV_: function(e) {
            if (void 0 === e && (e = {}),
            jt)
                return jt = !1,
                Et = e,
                void At("update", "", kt({
                    pageName: R.get("pageName")
                }, Et));
            Et = e,
            ve.callKit("userTrack", "commitPageDisAppear", {}, (function() {}
            )),
            Rt(),
            At("update", "", kt({
                pageName: R.get("pageName")
            }, Et))
        }
    };
    var Nt, Dt = i.is.windVane ? It : St, Mt = {
        timeOffset: r.timeOffset,
        loadFile: r.loadFile,
        app: ke,
        storage: je,
        user: ze,
        cookie: Ie,
        env: Ze,
        fetch: pt,
        windVane: ve,
        goto: Ve,
        jsonp: ot,
        logger: Dt
    }, Lt = {}, Bt = function(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n]
              , o = r[t] || {}
              , i = r["en-us"] || {};
            for (var a in o) {
                var s = o[a] || i[a];
                Vt.set(a, s)
            }
        }
    }, Vt = {
        has: function(e) {
            return void 0 !== Lt[e]
        },
        get: function(e) {
            return Lt[e] || e
        },
        set: function(e, t) {
            var n = ie.is;
            n.string(e) ? Lt[e] = t : n.object(e) && Object.assign(Lt, e)
        },
        load: function(e, t) {
            if (e)
                if (ie.is.array(e) || (e = [e]),
                t) {
                    var n = ee.findLocale(t);
                    Bt(e, n.mcms)
                } else
                    ee.getLocale((function(t) {
                        Bt(e, t.mcms)
                    }
                    ))
        }
    }, Wt = f.call, Ft = function(e, t, n) {
        var r = (n = n || {})[t];
        if (void 0 === r)
            return "";
        switch (e) {
        case "$":
            return decodeURIComponent(r);
        case "@":
            return encodeURIComponent(r);
        default:
            return r
        }
    }, Ut = function(e, t, n) {
        for (var r, o = 0; o < e.length; o++) {
            var i = e[o]
              , a = /^([@#$])(.+)\1$/gi.exec(i);
            if (a) {
                var c = a[1]
                  , l = a[2];
                if ("" !== (r = Ft(c, l, t)))
                    return r
            } else {
                var f = /^\$props\.(.+)$/gi.exec(i);
                if (f) {
                    if (r = u.get(n, f[1]),
                    s.existy(r))
                        return r
                } else
                    r = i
            }
        }
        return r
    }, Ht = function(e, t, n, r) {
        var o = {};
        for (var i in e) {
            var a = e[i]
              , c = void 0;
            c = s.object(t) && t.hasOwnProperty(i) ? t[i] : s.object(a) && a.detectable ? Ut(a.expression, n, r) : a,
            o[i] = c
        }
        return o
    }, qt = function(e) {
        return "preload_" + e
    }, zt = function(e, t, n) {
        var r = Object.assign({
            freshAge: 3600,
            cacheAge: 86400,
            downloadTimestamp: Date.now()
        }, {
            response: t
        }, n);
        Mt.storage.setItem(e, JSON.stringify(r))
    }, Gt = function(e, t) {
        return Mt.storage.getItem(e).then((function(n) {
            var r;
            try {
                if (n) {
                    var o = JSON.parse(n)
                      , i = o.downloadTimestamp
                      , a = o.cacheAge
                      , s = o.freshAge
                      , c = o.response
                      , u = (Date.now() - i) / 1e3;
                    u > a ? Mt.storage.removeItem(e) : r = {
                        isFresh: u <= s,
                        cacheKey: e,
                        response: c
                    }
                }
            } catch (e) {
                console.warn(e)
            }
            return Wt(t, r)
        }
        ))
    }, Jt = function(e, t, n) {
        var r, i = e.apiConfig, a = e.params, c = e.method, u = i.api, l = i.data, f = {
            v: i.v,
            ecode: i.ecode,
            method: c || "GET"
        };
        if (s.string(u))
            r = u;
        else if (s.object(u)) {
            var d = o.a.weex || o.a.windVane ? u.weex || u.app : u.web;
            s.string(d) ? r = d : s.object(d) && (r = d.apiName,
            Object.assign(f, {
                type: d.type,
                method: d.method,
                options: d.options
            }))
        }
        return Object.assign(f, {
            apiName: r,
            params: Ht(l, a, t, n)
        }),
        f
    }, $t = function(e, t) {
        var n = e.params
          , r = e.apiName
          , i = {};
        if (Object.keys(n).sort().forEach((function(e) {
            return i[e] = n[e]
        }
        )),
        p.isMTOP(r) && o.a.windVane) {
            var a = JSON.stringify({
                apiName: r,
                data: i
            });
            Wt(t, p.hash(a))
        } else
            ee.getLocale((function(e) {
                var n = JSON.stringify({
                    language: e.language,
                    currency: e.currency,
                    region: e.region,
                    apiName: r,
                    data: i
                });
                Wt(t, p.hash(n))
            }
            ))
    }, Kt = Ut, Xt = function(e, t, n, r, o) {
        var i = r.apiName
          , a = r.key
          , s = r.isFirstScreen
          , c = r.fetchRT
          , u = r.traceId
          , l = r.response
          , f = r.params
          , d = r.mtopStat
          , p = void 0 === d ? {} : d
          , h = p.netTotalTime
          , v = p.buildParamsTime
          , m = p.totalTime
          , g = p.waitCallbackTime
          , y = Date.now() + Mt.timeOffset
          , b = n + Mt.timeOffset
          , w = Object.assign({
            modelId: f && f.modelId,
            bodySize: l && JSON.stringify(l).length || 0,
            status: t,
            fetchRT: c,
            traceId: u,
            startTimestamp: b,
            endTimestamp: y,
            apiName: encodeURIComponent(i),
            uniqueKey: a,
            isFirstScreen: s,
            isEarlyPrefetch: "false",
            duration: y - b,
            netTotalTime: h,
            buildParamsTime: v,
            totalTime: m,
            waitCallbackTime: g
        }, o);
        M.click(e, w, !0),
        s && function(e) {
            void 0 === e && (e = {}),
            bt || (window.__redfox_api = e,
            bt = e)
        }(w)
    }, Yt = ie.util.call, Zt = {}, Qt = {}, en = function(e) {
        e.success = !0,
        vt.call("$fetch.success", e).next(e.successHandler)
    }, tn = function(e, t, n) {
        Xt("api", "success", t, e, n)
    }, nn = function(e, t) {
        var n = t.errorHandler
          , r = t.apiName;
        console.error("API=>" + r + ", message=>" + ie.xPath.get(e, "message")),
        Yt(n, e, t)
    }, rn = function(e, t, n) {
        Xt("api", "error", n, t, {
            reason: e,
            errorMsg: ie.xPath.get(e, "errorMessage")
        })
    }, on = function(e, t) {
        return Zt[e] = t
    }, an = function(e) {
        return Zt[e]
    }, sn = function(e) {
        return Qt[e]
    }, cn = function(e, t) {
        return Qt[e] = t
    }, un = function(e) {
        return delete Qt[e]
    }, ln = function(e) {
        var t = e.response
          , n = e.isPrefetch
          , r = e.key
          , o = {
            workerType: e.workerType,
            response: t
        };
        on(r, o),
        n && cn(r, o)
    }, fn = function(e) {
        var t = e.useCache
          , n = e.key
          , r = an(n)
          , o = !1;
        if (t.session && r) {
            var i = r.workerType
              , a = r.response;
            e.response = a,
            e.workerType = i,
            e.useSession = !0,
            en(e),
            o = !0
        }
        return o
    }, dn = function(e) {
        var t = e.useCache
          , n = e.key
          , r = sn(n)
          , o = !1;
        if (t.prefetch && r) {
            var i = r.workerType
              , a = r.response;
            e.response = a,
            e.workerType = i,
            e.usePrefetch = !0,
            un(n),
            en(e),
            o = !0
        }
        return o
    }, pn = nn, hn = rn, vn = en, mn = tn, gn = function(e) {
        var t = e.v
          , n = e.ecode
          , r = e.apiName
          , o = e.key
          , i = e.params
          , a = e.onValidate
          , s = e.env
          , c = e.method
          , u = e.fetchOptions
          , l = e.type
          , f = Date.now()
          , d = function(t) {
            var n = ie.is.object(t)
              , r = {
                message: n ? ie.xPath.get(t, "message") || ie.xPath.get(t, "errorMessage") : t,
                stack: n ? t.stack : null,
                toString: function() {
                    return JSON.stringify(r)
                }
            };
            rn(r, e, f),
            nn(r, e)
        };
        Mt.fetch(r, {
            key: o,
            params: i,
            v: t,
            ecode: n,
            env: s,
            method: c,
            fetchOptions: u,
            type: l
        }, (function(t, n) {
            e.endTime = Date.now(),
            e.response = t,
            e.workerType = "fetch",
            e.success = !0,
            vt.call("$fetch.validate", e).next((function(e) {
                var r = Yt(a, e) || {};
                if (!1 !== r.success) {
                    en(e);
                    var o = function(e, t, n) {
                        if (ee.is.web)
                            return {
                                rt0: n && 1e3 * n.rt,
                                rt1: t && t.time,
                                rd: n && ~~n.duration
                            }
                    }(0, t, n);
                    tn(e, f, o)
                } else
                    d(ie.xPath.get(r, "message"))
            }
            ))
        }
        ), d)
    }, yn = m.util.call, bn = new j.Emitter, wn = {}, _n = {}, On = function(e) {
        var t = (e.apiConfig || {}).isFirstScreen;
        return void 0 === t && (t = e.isFirstScreen),
        t
    }, xn = function(e) {
        return "running_" + e
    }, Sn = function(e) {
        if (e.isPreload)
            return kn(e);
        dn(e) || fn(e) || function(e) {
            var t = e.isPrefetch
              , n = e.useCache
              , r = void 0 === n ? {} : n
              , o = e.key
              , i = e.isPreload;
            if (t || !r.preload || i)
                return kn(e);
            var a = qt(o);
            Gt(a, (function(t) {
                if (!t)
                    return kn(e);
                vn(Object.assign({}, e, {
                    response: t.response,
                    workerType: "preload"
                })),
                t.isFresh || kn(Object.assign({}, e, {
                    refresh: !0
                }))
            }
            ))
        }(e)
    }, kn = function(e) {
        var t = e.key
          , n = e.errorHandler
          , r = e.useCache;
        if (!wn[t] || !r.session)
            return wn[t] = !0,
            void Pn(e);
        bn.once(xn(t), (function() {
            dn(e) || fn(e) || yn(n)
        }
        ))
    }, Pn = function(e) {
        vt.call("$fetch.before", e).next((function(e) {
            var t = e.response
              , n = e.success
              , r = e.onValidate;
            n && t ? vt.call("$fetch.validate", e).next((function(e) {
                var t = yn(r, e) || {};
                if (!1 === t.success) {
                    var n = {
                        message: m.xPath.get(t, "message"),
                        stack: null,
                        toString: function() {
                            return JSON.stringify(n)
                        }
                    };
                    return hn(n, e, e.startTime),
                    void pn(n, e)
                }
                return e.endTime = Date.now(),
                mn(e, e.startTime, {
                    isEarlyPrefetch: "true"
                }),
                vn(e)
            }
            )) : gn(e)
        }
        ))
    }, En = function(e, t, n, r) {
        var o = n.replace(/\./gi, "_").replace(/[A-Z]/g, (function(e) {
            return "_" + e.toLowerCase()
        }
        ))
          , i = t[S + "_" + o];
        if ("0" === i)
            return !1;
        if ("1" === i)
            return !0;
        var a = m.xPath.get(e, n);
        return void 0 === a && (a = r),
        a
    }, jn = function() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
        var r = Array(e)
          , o = 0;
        for (t = 0; t < n; t++)
            for (var i = arguments[t], a = 0, s = i.length; a < s; a++,
            o++)
                r[o] = i[a];
        return r
    }, Cn = ie.util.call, An = ee.is.iOS && ee.app.geVersion("7.31.0"), Tn = !1, Rn = "prefetchX", In = {
        status: []
    }, Nn = function(e) {
        return "string" == typeof e && !!e.match(/\$.*\$/)
    }, Dn = function(e) {
        var t = decodeURIComponent(ie.url.query.wh_prefetch)
          , n = (JSON.parse(t) || {}).params;
        for (var r in n)
            n[r] = e[r];
        return In.prefetchDataString = JSON.stringify(e),
        In.orderedPrefetchString = JSON.stringify(n),
        n
    }, Mn = function(e, t) {
        var n = {
            apiName: e.apiName,
            params: Dn(e.params),
            isAuth: e.ecode || 0,
            apiVersion: e.apiVersion || "1.0"
        };
        e.ecode && e.apiVersion || In.status.push("auto complete 'isAuth':" + e.ecode + "and 'apiVersion':" + e.apiVersion);
        var r, o = Date.now();
        F.set("prefetchXStart"),
        F.time.set("prefetchXStart");
        var i, a = 0, s = function(n) {
            In.status.push("windvane fail: " + (n && n.error)),
            Xt(Rn, "windvane fail", Date.now(), e),
            clearTimeout(r),
            Cn(t, e)
        }, c = function(n) {
            Tn = !0,
            F.set(Rn + "End"),
            F.set(Rn + "ReadCount", a),
            F.setDiffAbs(Rn + "Time", "prefetchXStart"),
            clearTimeout(r),
            n = n || {},
            ie.is.string(n) && (n = JSON.parse(n)),
            ie.is.existy(n.api) && n.api.toLowerCase() === e.apiName.toLowerCase() && n.data && (n = n.data),
            e.workerType = Rn,
            e.response = n,
            e.success = !0,
            In.status.push("success"),
            Cn(t, e)
        }, u = function() {
            !function(e, t, n) {
                !function() {
                    Nt = setTimeout((function() {
                        t(null)
                    }
                    ), 50);
                    var r = "fetchEarlyData";
                    F.set(r + "Start"),
                    Mt.windVane.call(null, r, e, (function(e) {
                        "success" === e.status && (clearTimeout(Nt),
                        F.set(r + "End"),
                        t(e.data))
                    }
                    ), (function() {
                        clearTimeout(Nt),
                        n()
                    }
                    ), null)
                }()
            }(n, (function(e) {
                a++,
                e ? (In.status.push("read success, times:" + a),
                c(e)) : a < 200 && u()
            }
            ), s)
        };
        r = setTimeout((function() {
            Xt(Rn, "timeout", o, e),
            In.status.push("read timeout:" + a),
            Cn(t, e)
        }
        ), 3e3),
        In.status.push("start read prefetch"),
        ee.is.android && ee.app.geVersion("7.23.0") || An ? (i = "fetchEarlyData2",
        In.status.push("use " + i),
        F.set(i + "Start"),
        Mt.windVane.call(null, i, n, (function(e) {
            "success" === e.status ? c(e.data) : s(e)
        }
        ), (function(e) {
            s(e)
        }
        ), null)) : u()
    }, Ln = ie.util.call;
    vt.register("$fetch.before", [function(e, t) {
        var n = e.isFirstScreen
          , r = e.isPreload
          , o = e.useCache;
        if (window.__earlyPrefetchData = In,
        In.status.push("start"),
        r || !o.prefetchX || !ee.is.windVane || !ee.is.web || !n || Tn)
            return Cn(t, e);
        In.status.push("fetch config ok");
        var i = ie.url.query.wh_prefetch;
        if (!i || "false" === i)
            return In.status.push("no wh_prefetch"),
            Cn(t, e);
        var a = function(e) {
            var t = e.apiName
              , n = e.params
              , r = decodeURIComponent(ie.url.query.wh_prefetch)
              , o = JSON.parse(r) || {}
              , i = o.apiName
              , a = void 0 === i ? "" : i
              , s = o.params
              , c = void 0 === s ? {} : s
              , u = !0
              , l = {
                errorParamTotal: 0
            };
            t != a && (l.apiError = 1,
            In.status.push("apiName not match"),
            u = !1);
            var f = [Object.keys(n), Object.keys(c)]
              , d = f[0]
              , p = f[1];
            if (d.length !== p.length) {
                l.paramsLengthError = 1;
                var h = jn(d, p)
                  , v = h.filter((function(e) {
                    return !d.includes(e)
                }
                ))
                  , m = h.filter((function(e) {
                    return !p.includes(e)
                }
                ));
                v.length > 0 && In.status.push("params not match " + v.join(",")),
                m.length > 0 && In.status.push("url not match " + m.join(",")),
                u = !1
            }
            for (var g in c) {
                var y = Nn(c[g]) ? Kt([c[g], ""], ie.url.query, {}) : c[g]
                  , b = n[g];
                y !== b && y === decodeURIComponent(b) && (b = n[g] = decodeURIComponent(b)),
                y !== b && (u = !1,
                In.status.push("params invalid, key:" + g + " ,currentValue:" + b + ",prefetchValue:" + y),
                l.paramError = 1,
                l.errorParamTotal++)
            }
            return u || (l.currentParams = encodeURIComponent(JSON.stringify(n)),
            l.prefetchXParams = encodeURIComponent(JSON.stringify(c)),
            Xt(Rn, "notMatch", Date.now(), e, l)),
            u
        }(e);
        if (In.status.push("isMatch: " + a),
        !a)
            return Cn(t, e);
        Mn(e, t),
        An || Cn(t, e)
    }
    ]),
    vt.register("$fetch.validate", [function(e, t) {
        var n = e.response || {}
          , r = n.traceId
          , o = n.time
          , i = n.data || {};
        r = r || i.__traceId__,
        o = o || i.__time__;
        var a = /^mtop\./.test(e.apiName) && !ee.is.app;
        if (e.data = a ? n.data : e.response,
        e.traceId = r,
        e.fetchRT = o,
        ee.is.windVane) {
            var s = n._mtopStat_ || n.mtopStat || {};
            delete n._mtopStat_,
            delete n.mtopStat,
            e.traceId = s.eagleId,
            e.fetchRT = s.serverRT,
            e.mtopTime = s.totalTime,
            e.mtopStat = s
        }
        Ln(t, e)
    }
    ]);
    var Bn = function(e, t, n) {
        var r = j.eventName;
        j.emit(r.fetchStart, e, t, n);
        var o = e.onSuccess
          , i = e.onError
          , a = e.reportPerformance
          , s = F.time
          , c = t ? "prefetch" : "fetch"
          , u = On(e);
        u && (F.set(c + "Start"),
        F.setDiffAbs(c + "StartTime"),
        s.set(c)),
        e.errorHandler = function(e, t) {
            var n = t.key;
            delete wn[n],
            t.reason = e,
            yn(i, t),
            j.emit(r.fetchError, t)
        }
        ,
        e.successHandler = function(n) {
            var i = m.object.pick(n, ["response", "data", "workerType", "fetchRT", "success", "refresh", "usePrefetch", "useSession", "mtopTime"]);
            i.duration = Date.now() - n.startTime,
            "preload" !== n.workerType && (ln(n),
            function(e, t, n) {
                if (n && n.enable) {
                    var r = qt(e)
                      , o = m.object.pick(n, ["freshAge", "cacheAge"], !0);
                    o.source = S + ".storage",
                    zt(r, t, o)
                }
            }(n.key, n.response, e.storage)),
            j.emit(r.fetchEnd, i);
            var l = n.key
              , f = n.apiName
              , d = n.params
              , p = n.workerType
              , h = {
                key: l,
                apiName: f,
                params: d
            }
              , v = !!wn[l];
            if (v && delete wn[l],
            u) {
                s.set(c),
                F.set(c + "End"),
                F.set("fetchWorkerType", p);
                if (t)
                    F.set("prefetchKey", l),
                    _n.prefetchOptions = h;
                else {
                    F.set("apiRT", i.fetchRT || -1),
                    F.set("mtopTime", i.mtopTime || -1);
                    var g = F.get("prefetchKey");
                    if (g) {
                        var y = g === l;
                        F.set("fetchKeyMatch", y),
                        y || M.click("prefetch", {
                            status: "notMatch",
                            prefetchOptions: encodeURIComponent(JSON.stringify(_n.prefetchOptions || {})),
                            currentOptions: encodeURIComponent(JSON.stringify(h || {}))
                        }, !0)
                    }
                    F.set("fetchKey", l),
                    !1 !== a && F.firstScreen()
                }
            }
            t || yn(o, i),
            v && bn.emit(xn(l), n)
        }
        ,
        function(e, t, n) {
            var r = m.url.query
              , o = En(e, r, "disableCache", !1)
              , i = {};
            ["preload", "prefetchX", "prefetch", "session"].forEach((function(t) {
                var n = !1;
                if (!o) {
                    var a = !0;
                    "preload" === t && (a = !1),
                    n = En(e, r, "useCache." + t, a)
                }
                i[t] = n
            }
            ));
            var a = {
                storage: e.storage,
                useCache: i,
                isPreload: e.isPreload,
                method: e.method,
                env: e.env,
                isFirstScreen: On(e),
                isPrefetch: t,
                disableCache: o,
                startTime: Date.now(),
                key: null
            }
              , s = e.onPrepare
              , c = e.successHandler
              , u = e.errorHandler
              , l = e.onValidate
              , f = Jt(e, m.url.query, n)
              , d = yn(s, f) || f
              , p = d.apiName
              , h = d.params
              , v = d.method
              , g = d.type
              , y = d.options
              , b = d.v
              , w = d.ecode;
            $t({
                params: h,
                apiName: p
            }, (function(t) {
                a.key = t,
                e.isPreload && (h.__preload__ = 1),
                Object.assign(a, {
                    v: b,
                    ecode: w,
                    onValidate: l,
                    successHandler: c,
                    errorHandler: u,
                    apiName: p,
                    params: h,
                    method: v,
                    type: g,
                    fetchOptions: y
                }),
                Sn(a)
            }
            ))
        }(e, t, n)
    };
    var Vn = window.Redfox
      , Wn = ie.xPath.get(Vn, "$adapter") || Mt
      , Fn = ie.xPath.get(Vn, "$env") || ee
      , Un = ie.xPath.get(Vn, "$helper") || ie
      , Hn = ie.xPath.get(Vn, "$logger") || M
      , qn = ie.xPath.get(Vn, "$i18n") || Vt
      , zn = ie.xPath.get(Vn, "$fetch") || Bn
      , Gn = ie.xPath.get(Vn, "$emitter") || j
      , Jn = ie.xPath.get(Vn, "$perf") || F
      , $n = ie.xPath.get(Vn, "$hook") || vt
      , Kn = x
      , Xn = Un.util.call
      , Yn = Vn || {
        version: Kn,
        $noop: function() {},
        $call: Xn,
        $emitter: Gn,
        $hook: $n,
        $adapter: Wn,
        $env: Fn,
        $helper: Un,
        $logger: Hn,
        $i18n: qn,
        $perf: Jn,
        $fetch: zn
    };
    window.lib = window.lib || {},
    window.lib.Redfox3 = window.lib.Redfox = Yn;
    t.default = Yn
}
, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return r
    }
    )),
    n.d(t, "b", (function() {
        return a
    }
    )),
    n.d(t, "a", (function() {
        return s
    }
    )),
    n.d(t, "d", (function() {
        return c
    }
    ));
    var r = function(e) {
        return void 0 === e && (e = {}),
        Object.keys(e).map((function(t) {
            var n = e[t];
            return void 0 === n && (n = ""),
            t + "=" + (n = function(e) {
                var t = /[&=\s]/g;
                return t.test(e) ? (console.warn && console.warn("\u6253\u70b9\u4e1a\u52a1\u4e32 " + e + " \u4e2d\u4e0d\u5141\u8bb8\u542b\u6709\u4fdd\u7559\u5b57\u7b26 &="),
                e.replace(t, "")) : e
            }(n.toString()))
        }
        )).join("&")
    }
      , o = function(e, t, n) {
        if (void 0 === t && (t = "CLK"),
        void 0 === n && (n = {}),
        0 !== e.indexOf("/"))
            throw new Error("\u6253\u70b9\u7684\u9ec4\u91d1\u4ee4\u7bad\u4e0d\u6b63\u786e, \u4ee5/\u5f00\u5934");
        n.floorName && (n.floorName = n.floorName.replace(/[^\d_a-zA-Z@\-%]/g, "")),
        n.floorName || -1 !== e.indexOf(".nav_") || console.warn && console.warn("floorName\u4e0d\u5408\u6cd5\uff0c\u6253\u70b9floorName\u7279\u6b8a\u5b57\u7b26\u5df2\u8fc7\u6ee4\uff0c\u53ea\u5141\u8bb8/[^\\d_a-zA-Z@\\-%]/g, \u6587\u6863\uff1ahttps://yuque.antfin-inc.com/ncms/oxxyex/kib0mw");
        var o = r(n);
        window.goldlog ? window.goldlog.record(e, t, o, "GET") : (window.goldlog_queue = window.goldlog_queue || [],
        window.goldlog_queue.push({
            action: "goldlog.record",
            arguments: [e, t, o, "GET"]
        }))
    }
      , i = "/sc.mobile.intelligent."
      , a = function(e) {
        o(e.gokey ? e.gokey : i + "nav_exp", "EXP", e.params)
    }
      , s = function(e) {
        o(e.gokey ? e.gokey : i + "nav_clk", "CLK", e.params)
    };
    function c(e) {
        var t = /[^\d_a-zA-Z\-%]/g;
        return e.navNames && ("object" == typeof e.navNames ? (e.navNames = e.navNames.map((function(e) {
            return encodeURIComponent(e.toString()).replace(t, "")
        }
        )),
        e.navNames = e.navNames.join("#")) : "string" == typeof e.navNames && (e.navNames = e.navNames.replace(",", "#"))),
        e.parentNavName && (e.parentNavName = encodeURIComponent(e.parentNavName).replace(t, "")),
        e
    }
    window.__p4pdot = function(e, t) {
        var n = e;
        if (n) {
            var r = Date.now()
              , i = "p4plog_" + r;
            n = -1 === n.indexOf("?") ? n + "?_log_t=" + i : n + "&_log_t=" + i;
            var a = new Image;
            window[i] = a;
            var s = function() {
                try {
                    delete window[i]
                } catch (e) {
                    window[i] = null
                }
                a.onload = null
            };
            a.onload = function() {
                s()
            }
            ,
            a.onerror = function() {
                s()
            }
            ,
            a.src = n,
            o("/sc.p4p.click", "CLK", {
                floorName: t || "p4p_click_2019_1111",
                page_url: encodeURIComponent(window.location.href),
                eurl: encodeURIComponent(n),
                log_time: r
            })
        }
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return s
    }
    )),
    n.d(t, "b", (function() {
        return a
    }
    ));
    var r = n(12)
      , o = n(6);
    function i() {
        return (i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    var a = function(e) {
        var t = e.api
          , n = e.data
          , a = e.onSuccess
          , s = e.onError;
        t || reject("api\u4e0d\u80fd\u4e3a\u7a7a");
        for (var c = Object(o.g)() || {}, u = Object(o.d)("sc_g_cfg_f").split("&"), l = {}, f = 0; f < u.length; f++) {
            var d = u[f].split("=");
            l[d[0]] = d[1],
            "sc_b_locale" == d[0] && (l.language = d[1].split("_")[0])
        }
        var p = Object(o.d)("gangesweb-buckettest")
          , h = /^(\d+\.\d+\.\d+\.\d+).+/g.exec(p);
        l.language,
        l.sc_b_currency,
        l.sc_b_site,
        Object(o.d)("cna"),
        l.sc_b_locale,
        h && h[1] && h[1],
        r.default.$fetch({
            apiConfig: {
                api: {
                    web: {
                        apiName: t,
                        type: "mtop",
                        options: {
                            headers: {}
                        }
                    }
                },
                v: "1.0",
                env: "freepage_pc",
                data: i({
                    env: "freepage_pc",
                    endpoint: "pc"
                }, n)
            },
            env: "pre" === c.env ? "pre" : "",
            disableCache: !0,
            onError: function(e) {
                s && s(e.data)
            },
            onSuccess: function(e) {
                e.data ? a && a(e.data) : s && s(e.data)
            }
        })
    }
      , s = function(e) {
        var t = e.api
          , n = e.data
          , o = e.onSuccess
          , a = e.onError;
        r.default.$fetch({
            apiConfig: {
                api: {
                    web: {
                        apiName: t,
                        type: "jsonp",
                        options: {}
                    }
                },
                data: i({}, n, {
                    endpoint: "pc"
                })
            },
            onError: function(e) {
                a && a(e.data)
            },
            onSuccess: function(e) {
                e.data ? o && o(e.data) : a && a(e.data)
            }
        })
    }
}
, function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "setTagNamePrefix", (function() {
        return p
    }
    )),
    n.d(t, "createBody", (function() {
        return h
    }
    )),
    n.d(t, "createEmpty", (function() {
        return v
    }
    )),
    n.d(t, "createText", (function() {
        return m
    }
    )),
    n.d(t, "updateText", (function() {
        return g
    }
    )),
    n.d(t, "createElement", (function() {
        return b
    }
    )),
    n.d(t, "appendChild", (function() {
        return w
    }
    )),
    n.d(t, "removeChild", (function() {
        return _
    }
    )),
    n.d(t, "replaceChild", (function() {
        return O
    }
    )),
    n.d(t, "insertAfter", (function() {
        return x
    }
    )),
    n.d(t, "insertBefore", (function() {
        return S
    }
    )),
    n.d(t, "addEventListener", (function() {
        return k
    }
    )),
    n.d(t, "removeEventListener", (function() {
        return P
    }
    )),
    n.d(t, "removeAttribute", (function() {
        return E
    }
    )),
    n.d(t, "setAttribute", (function() {
        return j
    }
    )),
    n.d(t, "setStyle", (function() {
        return C
    }
    )),
    n.d(t, "beforeRender", (function() {
        return A
    }
    )),
    n.d(t, "afterRender", (function() {
        return T
    }
    )),
    n.d(t, "removeChildren", (function() {
        return R
    }
    )),
    n.d(t, "setViewportWidth", (function() {
        return r.setViewportWidth
    }
    )),
    n.d(t, "setUnitPrecision", (function() {
        return r.setUnitPrecision
    }
    ));
    var r = n(8);
    var o = /opa|ntw|ne[ch]|ex(?:s|g|n|p|$)|^ord|zoo|grid|orp|ows|mnc|^columns$|bs|erim|onit/i
      , i = /^on[A-Z]/
      , a = "http://www.w3.org/2000/svg"
      , s = ""
      , c = !1
      , u = !1
      , l = Object(r.cached)((function(e) {
        return e.replace(/-([a-z])/gi, (function(e, t) {
            return t.toUpperCase()
        }
        ))
    }
    ))
      , f = Object(r.cached)((function(e) {
        return !o.test(e)
    }
    ))
      , d = Object(r.cached)((function(e) {
        return i.test(e)
    }
    ));
    function p(e) {
        s = e
    }
    function h() {
        return document.body
    }
    function v(e) {
        var t, n = e._parent;
        if (u) {
            var r = y(n);
            if (r) {
                if (8 === r.nodeType)
                    return r;
                O(t = document.createComment(""), r, n)
            } else
                (t = document.createComment("")).__a = !0
        } else
            t = document.createComment("");
        return t
    }
    function m(e, t) {
        var n, r = t._parent;
        if (u) {
            var o = y(r);
            if (o) {
                if (3 === o.nodeType)
                    return e !== o.textContent && (o.textContent = e),
                    o;
                O(n = document.createTextNode(e), o, r)
            } else
                (n = document.createTextNode(e)).__a = !0
        } else
            n = document.createTextNode(e);
        return n
    }
    function g(e, t) {
        e.textContent = t
    }
    function y(e) {
        var t = e.childNodes;
        null == e.__i && (e.__i = 0);
        var n = t[e.__i++];
        return n && 8 === n.nodeType && "|" === n.data ? t[e.__i++] : n
    }
    function b(e, t, n, r) {
        var o, i = n._parent;
        c = "svg" === e || i && i.namespaceURI === a;
        var f = null;
        function p() {
            if (c)
                o = document.createElementNS(a, e);
            else if (s) {
                var t = "function" == typeof t ? t(e) : t;
                o = document.createElement(t + e)
            } else
                o = document.createElement(e)
        }
        if (u)
            if (f = y(i))
                if (e === f.nodeName.toLowerCase()) {
                    for (var h = f.attributes, v = h.length; v--; ) {
                        var m = h[v].name
                          , g = t[m];
                        if ("class" === m && null == t.className && null == g || "style" === m && (null == g || 0 === Object.keys(g).length) || "class" !== m && "style" !== m && null == g)
                            f.removeAttribute(m);
                        else if ("style" === m)
                            for (var b = f.style.length; 0 < b; b--) {
                                var w = f.style[b - 1]
                                  , _ = l(w);
                                null == g[_] && (f.style[_] = "")
                            }
                    }
                    o = f
                } else
                    p(),
                    O(o, f, i);
            else
                p(),
                o.__a = !0;
        else
            p();
        for (var x in t) {
            var S = t[x];
            "children" !== x && (null != S && ("style" === x ? C(o, S, r) : d(x) ? k(o, x.slice(2).toLowerCase(), S) : j(o, x, S, c)))
        }
        return o
    }
    function w(e, t) {
        if (!u || e.__a)
            return t.appendChild(e)
    }
    function _(e, t) {
        (t = t || e.parentNode) && t.removeChild(e)
    }
    function O(e, t, n) {
        (n = n || t.parentNode).replaceChild(e, t)
    }
    function x(e, t, n) {
        n = n || t.parentNode;
        var r = t.nextSibling;
        r ? r !== e && S(e, r, n) : w(e, n)
    }
    function S(e, t, n) {
        (n = n || t.parentNode).insertBefore(e, t)
    }
    function k(e, t, n) {
        return e.addEventListener(t, n)
    }
    function P(e, t, n) {
        return e.removeEventListener(t, n)
    }
    function E(e, t) {
        if ("dangerouslySetInnerHTML" === t)
            return e.innerHTML = null;
        if ("className" === t && (t = "class"),
        t in e)
            try {
                e[t] = null
            } catch (e) {}
        e.removeAttribute(t)
    }
    function j(e, t, n, r) {
        if ("dangerouslySetInnerHTML" === t)
            return e.innerHTML !== n.__html && (e.innerHTML = n.__html),
            void (e.__h = !0);
        if ("className" === t && (t = "class"),
        !r && t in e)
            try {
                e[t] = n
            } catch (r) {
                e.setAttribute(t, n)
            }
        else
            e.setAttribute(t, n)
    }
    function C(e, t, n) {
        for (var o in t) {
            var i = t[o]
              , a = void 0;
            "number" == typeof i && f(o) ? n ? (a = i + "rpx",
            a = Object(r.convertUnit)(a)) : a = i + "px" : a = Object(r.convertUnit)(i),
            "-" === o[0] && "-" === o[1] ? e.style.setProperty(o, a) : e.style[o] = a
        }
    }
    function A(e) {
        var t = e.hydrate;
        if (u && !t)
            throw new Error("Nested render found.");
        u = t
    }
    function T(e) {
        var t = e.container;
        u && (!function e(t) {
            if (!t.__h) {
                var n = t.childNodes.length
                  , r = t.__i || 0;
                if (n - r > 0)
                    for (var o = n - 1; o >= r; o--)
                        t.removeChild(t.childNodes[o]);
                for (var i = t.childNodes.length - 1; i >= 0; i--)
                    e(t.childNodes[i])
            }
        }(t),
        u = !1)
    }
    function R(e) {
        e.textContent = ""
    }
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.default = void 0;
    var r, o = (r = n(38)) && r.__esModule ? r : {
        default: r
    };
    var i = function(e) {
        if (null == e)
            return null;
        if (e.ownerDocument || e.nodeType)
            return e;
        if (e._nativeNode)
            return e._nativeNode;
        if ("string" == typeof e)
            return (0,
            o.default)(e);
        if ("function" != typeof e.render)
            throw new Error("findDOMNode: find by neither component nor DOM node.");
        var t = e._internal;
        if (t) {
            for (; !t._nativeNode; )
                if (null == (t = t._renderedComponent))
                    return null;
            return t._nativeNode
        }
        throw new Error("findDOMNode: find on an unmounted component.")
    };
    t.default = i
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return l
    }
    ));
    var r = n(10)
      , o = n(0)
      , i = n(7)
      , a = n.n(i)
      , s = n(13);
    function c() {
        return (c = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    var u = ["product", "supplier", "entrance", "nav", "custom"];
    function l(e) {
        var t, n = e.className, i = e.type, l = e.dotParams, f = void 0 === l ? {} : l, d = e.spmd, p = e.children, h = e.htmlType, v = (e.goldKeyObj,
        Object(r.b)(e, ["className", "type", "dotParams", "spmd", "children", "htmlType", "goldKeyObj"])), m = a()(((t = {})[n] = n,
        t)), g = (d || f.spmd || "").toString().replace(/[^\d_a-zA-Z]/g, "");
        i && -1 !== u.indexOf(i) || console.error && console.error("DotElement\u7684type\u5c5e\u6027\u8bbe\u7f6e\u9519\u8bef\uff0c type=" + i, "\u6587\u6863\uff1ahttps://yuque.antfin-inc.com/ncms/oxxyex/kib0mw");
        var y = Object(s.c)(Object.assign({
            intelligent: 1
        }, f));
        return "nav" === i && (y = Object(s.c)(Object.assign({
            intelligent: 1
        }, Object(s.d)(f)))),
        Object(o.createElement)(h || "div", c({}, v, {
            className: m,
            "data-logtype": i,
            "data-spm": g || null,
            "data-params": y
        }), p)
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0)
      , o = n(1)
      , i = n(15)
      , a = n(16)
      , s = n.n(a)
      , c = n(19)
      , u = n.n(c)
      , l = {
        renderDriver: i,
        findDOMNode: s.a,
        cloneElement: u.a
    }
      , f = n(5)
      , d = n(4);
    function p(e) {
        if (e) {
            var t = e.name
              , n = void 0 === t ? void 0 : t
              , r = e.template
              , o = e.url;
            return r || o ? o && !o.endsWith(".js") ? (console.warn("DX \u6a21\u7248\u9519\u8bef - URL \u4e0d\u5408\u6cd5:", o, n || ""),
            !1) : !n || !n.startsWith("icbu_vv") || (console.warn("DX \u6a21\u7248\u9519\u8bef - \u8df3\u8fc7 DX \u6a21\u7248\u6e32\u67d3\uff1a", n || ""),
            !1) : (console.warn("DX \u6a21\u7248\u9519\u8bef - \u6ca1\u6709\u6a21\u7248\u6216 URL:", o, n || ""),
            !1)
        }
    }
    var h = n(9);
    function v() {
        var e = window.PAGE_DATA && window.PAGE_DATA.common && window.PAGE_DATA.common.lang;
        return "ar_SA" == e || "iw_IL" == e
    }
    function m() {
        for (var e = this.props, t = e._id, n = e._tplContext.componentIndexSet, r = n.length - 1; r >= 0; r--) {
            if (n[r].id === t)
                return void (n[r].context = this)
        }
    }
    var g = {};
    function y(e) {
        return g[e]
    }
    var b = n(2);
    function w(e, t) {
        return (w = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    var _ = function(e) {
        var t, n;
        function r() {
            return e.apply(this, arguments) || this
        }
        return n = e,
        (t = r).prototype = Object.create(n.prototype),
        t.prototype.constructor = t,
        w(t, n),
        r.prototype.rtlAutoFlip = function(e) {
            "true" === e && v() && this.setStyles({
                transform: "rotate(180deg)"
            })
        }
        ,
        r
    }(f.ImageView);
    o.registerView("ALIImageView", _);
    function O() {
        return (O = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function x(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (n)
            return (n = n.call(e)).next.bind(n);
        if (Array.isArray(e) || (n = function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return S(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return S(e, t)
        }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0;
            return function() {
                return r >= e.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: e[r++]
                }
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function k(e, t) {
        return (k = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    var P = function(e) {
        var t, n;
        function r() {
            for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                r[o] = arguments[o];
            return (t = e.call.apply(e, [this].concat(r)) || this)._supportHTMLStyle = !1,
            t
        }
        n = e,
        (t = r).prototype = Object.create(n.prototype),
        t.prototype.constructor = t,
        k(t, n);
        var o = r.prototype;
        return o.supportHTMLStyle = function(e) {
            this._supportHTMLStyle = e
        }
        ,
        o.componentDidMount = function() {
            if (this.$span && this.$span.children)
                for (var e, t = x(this.$span.children); !(e = t()).done; ) {
                    var n = e.value;
                    "img" === n.tagName.toLowerCase() && (n.style.height = this.fontSize,
                    n.style.marginLeft = "2px",
                    n.style.marginRight = "2px")
                }
        }
        ,
        o.renderView = function() {
            var e = this;
            return Object(b.createElement)("span", {
                style: this.getStyles("font"),
                dangerouslySetInnerHTML: {
                    __html: this.textContent
                },
                ref: function(t) {
                    return e.$span = t
                }
            })
        }
        ,
        o.render = function() {
            var e = this.props;
            m.call(this);
            var t = e.htmlHeading
              , n = "div";
            return t && (n = t),
            Object(b.createElement)(n, O({
                key: e._id,
                "view-name": this.getViewName(),
                style: this.getStyles()
            }, this.getAttrs()), this.renderView && this.renderView(e))
        }
        ,
        r
    }(f.TextView);
    o.registerView("ALITextView", P);
    function E() {
        return (E = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function j(e, t) {
        e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        C(e, t)
    }
    function C(e, t) {
        return (C = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    var A = function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n._data = {},
            n._mode = "ALIVideoViewModeJustPlay",
            n._autoPlay = !1,
            n._timer = null,
            n.state = {
                isPlaying: !1,
                isMuted: !1
            },
            n
        }
        j(t, e);
        var n = t.prototype;
        return n.componentWillMount = function() {
            this._preprocessingStyle()
        }
        ,
        n.componentDidMount = function() {
            var e = this;
            this.$video && (this.$video.addEventListener("play", (function() {
                e.startTimer(),
                e.setState({
                    isPlaying: !0
                })
            }
            )),
            this.$video.addEventListener("pause", (function() {
                e.stopTimer(),
                e.setState({
                    isPlaying: !1
                })
            }
            )),
            this.$video.addEventListener("ended", (function() {
                e.setState({
                    isPlaying: !1
                })
            }
            )))
        }
        ,
        n.startTimer = function() {
            var e, t = this;
            this._timer || ("ALIVideoViewModeHavePlayBtnProgressDuration" === (e = this._mode) || "ALIVideoViewModeHavePlayBtnProgressDurationMute" == e) && (this._timer = setInterval((function() {
                if (t.$video.duration > 0) {
                    var e = t.$video.currentTime / t.$video.duration;
                    t.setState({
                        progress: e
                    })
                }
            }
            ), 1e3))
        }
        ,
        n.stopTimer = function() {
            this._timer && clearInterval(this._timer)
        }
        ,
        n._preprocessingStyle = function() {
            this.setStyles({
                overflow: "hidden"
            })
        }
        ,
        n.data = function(e) {
            this._data = e
        }
        ,
        n.mode = function(e) {
            this._mode = e
        }
        ,
        n.autoPlay = function(e) {
            this._autoPlay = "1" === e
        }
        ,
        n.renderView = function() {
            var e, t, n = this, r = this.$video;
            if (r) {
                var o = Math.ceil(r.currentTime)
                  , i = Math.ceil(r.duration);
                e = (o < 10 ? "0" : "") + o + ":" + (i < 10 ? "0" : "") + i,
                t = r.muted
            }
            var a = function(e) {
                var t = {
                    playControl: !1,
                    progressBar: !1,
                    time: !1,
                    mute: !1,
                    originalControl: !1
                };
                switch (e) {
                case "ALIVideoViewModeJustPlay":
                    break;
                case "ALIVideoViewModeHavePlayBtn":
                    t.playControl = !0;
                    break;
                case "ALIVideoViewModeHavePlayBtnProgressDuration":
                    t.playControl = !0,
                    t.progressBar = !0,
                    t.time = !0;
                    break;
                case "ALIVideoViewModeHavePlayBtnProgressDurationMute":
                    t.playControl = !0,
                    t.progressBar = !0,
                    t.time = !0,
                    t.mute = !0;
                    break;
                case "ALIVideoViewModeCompletePlayer":
                    t.originalControl = !0
                }
                return t
            }(this._mode)
              , s = {};
            return this._autoPlay && (s.autoPlay = "autoPlay",
            s.muted = "1"),
            a.originalControl && (s.controls = "1"),
            Object(b.createElement)("div", {
                style: {
                    position: "relative",
                    width: "100%",
                    height: "100%"
                }
            }, Object(b.createElement)("video", E({
                muted: !0,
                playsinline: !0,
                preload: "none",
                poster: this._data.coverImg,
                style: E({}, T),
                ref: function(e) {
                    return n.$video = e
                },
                onClick: function() {
                    a.playControl && (n.state.isPlaying ? n.$video.pause() : n.$video.play(),
                    n.setState({
                        isPlaying: !n.state.isPlaying
                    }))
                }
            }, s), Object(b.createElement)("source", {
                src: this._data.videoUrl
            })), a.playControl && Object(b.createElement)(R, {
                visible: !this.state.isPlaying
            }), a.time && Object(b.createElement)("div", {
                style: {
                    bottom: 0,
                    width: "100%",
                    height: "8vw",
                    position: "absolute"
                }
            }, Object(b.createElement)("div", {
                style: {
                    height: "1px",
                    width: 100 * this.state.progress + "%",
                    backgroundColor: "#FF5000",
                    transition: "width 0.5s linear",
                    position: "absolute",
                    bottom: 0,
                    margin: "0 8px 0 8px"
                }
            }), Object(b.createElement)("span", {
                style: {
                    position: "absolute",
                    right: "2vw",
                    color: "white"
                }
            }, e), a.mute && Object(b.createElement)(I, {
                muted: t,
                onClick: function() {
                    var e = !n.state.isMuted;
                    n.setState({
                        isMuted: e
                    }),
                    n.$video.muted = e
                }
            })))
        }
        ,
        t
    }(f.View)
      , T = {
        width: "100%",
        height: "100%"
    }
      , R = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        return j(t, e),
        t.prototype.render = function() {
            return Object(b.createElement)("div", {
                style: E({}, {
                    position: "absolute",
                    width: "10vw",
                    height: "10vw",
                    backgroundColor: "rgba(0,0,0,0.2)",
                    borderRadius: "50%",
                    border: "2px solid white",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    "justify-content": "center",
                    "align-items": "center"
                }, {
                    visibility: this.props.visible ? "visible" : "hidden"
                })
            }, Object(b.createElement)("img", {
                style: {
                    width: "30%",
                    height: "auto"
                },
                src: "https://sc02.alicdn.com/kf/H6c9684a5796c47ec939d2fd1a3c3a6676.png"
            }))
        }
        ,
        t
    }(o.Component)
      , I = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        return j(t, e),
        t.prototype.render = function() {
            return Object(b.createElement)("div", {
                style: E({}, {
                    position: "absolute",
                    width: "6vw",
                    height: "6vw",
                    backgroundColor: "rgba(255,255,255,0.3)",
                    borderRadius: "50%",
                    left: "2vw",
                    display: "flex",
                    "justify-content": "center",
                    "align-items": "center"
                }),
                onClick: this.props.onClick
            }, Object(b.createElement)("img", {
                style: {
                    width: "40%",
                    height: "auto"
                },
                src: this.props.muted ? "https://sc01.alicdn.com/kf/H9751bb7be71a4befa17de3964d283fc5Z.png" : "https://sc01.alicdn.com/kf/H5f852d8a75654a90bfb7eb84aaf63b28e.png"
            }))
        }
        ,
        t
    }(o.Component);
    o.registerView("ALIVideoView", A);
    var N = function() {
        return y("request")
    }
      , D = document.querySelector('input[name="_csrf_token_"]')
      , M = D ? D.value : ""
      , L = function(e, t) {
        return void 0 === e && (e = ""),
        void 0 === t && (t = M),
        new Promise((function(n) {
            y("signIn")().then((function() {
                N().post("/api/favorite/addFavorite.do?objectType=company&objectId=" + e + "&companyId=" + e + "&urlRule=D&_csrf_token_=" + t + "&timestamp=" + +new Date).then((function(e) {
                    200 === e.responseCode && e.entity && -1 !== e.entity.check && n({
                        success: !0,
                        fid: e.entity.check
                    })
                }
                ))
            }
            ))
        }
        ))
    }
      , B = function(e, t) {
        return void 0 === t && (t = M),
        new Promise((function(n) {
            N().post("/api/favorite/delFavorite.do?id=" + e + "&_csrf_token_=" + t + "&timestamp=" + +new Date).then((function(e) {
                200 === e.responseCode && e.entity && e.entity.remove && n({
                    success: !0
                })
            }
            ))
        }
        ))
    };
    function V() {
        return (V = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function W(e, t) {
        return (W = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    var F = function(e) {
        var t, n;
        function r() {
            for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                r[o] = arguments[o];
            return (t = e.call.apply(e, [this].concat(r)) || this)._followed = !1,
            t._favoriteId = null,
            t.toggleCheck = function() {
                t._followed ? B(t._favoriteId).then((function(e) {
                    e.success && (t._followed = !1,
                    t._favoriteId = null,
                    t.forceUpdate())
                }
                )) : L(t.data.companyId).then((function(e) {
                    e.success && (t._followed = !0,
                    t._favoriteId = e.fid,
                    t.forceUpdate())
                }
                ))
            }
            ,
            t
        }
        n = e,
        (t = r).prototype = Object.create(n.prototype),
        t.prototype.constructor = t,
        W(t, n);
        var i = r.prototype;
        return i.componentWillMount = function() {
            this._preprocessingStyle()
        }
        ,
        i._preprocessingStyle = function() {
            var e = this.props.height
              , t = o.unitParser(e);
            "match_parent" == t && (t = "100px"),
            this.setStyles(V({
                borderRadius: t
            }, U), "btn"),
            this.setStyles({
                backgroundColor: "#FFEDE0",
                color: "#FF6600"
            }, "followed"),
            this.setStyles({
                backgroundColor: "#FF6600",
                color: "#FFFFFF"
            }, "unfollowed")
        }
        ,
        i.componentDidMount = function() {
            var e, t = this;
            Object(f.bindGestureEvent)(this.$btn, {
                tap: function() {
                    t.toggleCheck()
                }
            }),
            (e = this.data.companyId,
            N().get("/api/favorite/checkFavorite.do?objectType=company&objectId=" + e + "&timestamp=" + +new Date).then((function(e) {
                if (200 === e.responseCode && e.entity)
                    return {
                        isFavorite: -1 !== e.entity.check,
                        fid: e.entity.check
                    }
            }
            ))).then((function(e) {
                e && e.isFavorite && (t._followed = !0,
                t._favoriteId = e.fid,
                t.forceUpdate())
            }
            ))
        }
        ,
        i.data = function(e) {
            e && (this.data = e)
        }
        ,
        i.renderView = function() {
            var e = this
              , t = this._followed
              , n = y("i18n") || {};
            return Object(b.createElement)("span", {
                style: V({}, this.getStyles("btn"), this.getStyles(t ? "followed" : "unfollowed")),
                ref: function(t) {
                    return e.$btn = t
                }
            }, t ? n.feed_detail_following || "Following" : n.feeds_follow || "Follow")
        }
        ,
        r
    }(f.View)
      , U = {
        display: "flex",
        width: "100%",
        textAlign: "center",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        "min-height": "25px",
        "padding-left": "12px",
        "padding-right": "12px",
        "white-space": "nowrap",
        "text-overflow": "ellipsis"
    };
    F.defaultProps = {
        data: {}
    },
    o.registerView("ALICompanyFollowButton", F);
    var H = o.dataParser
      , q = function(e) {
        return e ? Object.keys(e).map((function(t) {
            var n = e[t];
            return void 0 === n && (n = ""),
            t + "=" + (n = function(e) {
                var t = /[&=\s]/g;
                return t.test(e) ? (console.warn && console.warn("\u6253\u70b9\u4e1a\u52a1\u4e32 " + e + " \u4e2d\u4e0d\u5141\u8bb8\u542b\u6709\u4fdd\u7559\u5b57\u7b26 &="),
                e.replace(t, "")) : e
            }(n.toString()))
        }
        )).join("&") : ""
    }
      , z = function(e) {
        e.accessibilityText;
        var t, n, r, o = e.onTap, i = "", a = "", s = "", c = {}, u = "", l = "";
        if (o && o.options) {
            var f, d = /^@link{(.*)}$/g.exec(o.pattern);
            d && d[1] && (f = H(d[1], o.options)),
            f || (f = o.options.data),
            f.traceInfo && (a = f.traceInfo.name,
            /product$/.test(a) ? s = "product" : /supplier$/.test(a) ? s = "supplier" : /entrance$/.test(a) ? s = "entrance" : /nav$/.test(a) && (s = "nav"),
            window.__pageTraceInfoParam && (c = window.__pageTraceInfoParam),
            (c = Object.assign(c, f.traceInfo.param || {})).floorName = f.traceInfo.floorName || f.traceInfo.name || "",
            f.traceInfo.clickParam && (c.clickParam = f.traceInfo.clickParam)),
            f.trackInfo && (c.trackInfo = f.trackInfo),
            f.clickParam && (c.clickParam = f.clickParam);
            var p = (t = f.traceInfo,
            n = t && t.name,
            r = window.goldlog && window.goldlog.spm_ab && window.goldlog.spm_ab.join(".") || "a2706.8172434",
            !n || n.length < 1 ? r + ".0.0" : r + "." + n + ".0." + Math.random().toString(36).substring(3));
            u = function(e) {
                void 0 === e && (e = "");
                var t = e
                  , n = window.location.host;
                if (-1 === n.indexOf("m.")) {
                    if ("www.alibaba.com" != n && e.indexOf("//www.alibaba.com/freepage") > -1) {
                        var r = /(.+).alibaba.com/.exec(n);
                        r && r[1] && (t = e.replace("//www.alibaba.com/", "//" + r[1] + ".alibaba.com/"))
                    }
                    return t
                }
                var o = /m.(.+).alibaba.com/.exec(n);
                return o && o[1] && (t = e.replace("//m.alibaba.com/", "//m." + o[1] + ".alibaba.com/")),
                t
            }(function(e, t) {
                if (void 0 === e && (e = ""),
                !e)
                    return "";
                if (!t)
                    return e;
                if (e.startsWith("//") ? e = window.location.protocol + e : e.startsWith("/") && (e = window.location.origin + e),
                e.indexOf("?spm=") > -1 || e.indexOf("&spm=") > -1) {
                    var n = new URL(e);
                    n.searchParams.set("spm", t),
                    e = n.href
                } else
                    e += (e.indexOf("?") < 0 ? "?" : "&") + "spm=" + t;
                return e
            }(f.action, p)),
            l = f.eurl,
            !s && c && (s = "entrance")
        }
        return c && (i = q(Object.assign({
            intelligent: 1
        }, c)),
        "nav" === s && (i = q(Object.assign({
            intelligent: 1
        }, function(e) {
            var t = /[^\d_a-zA-Z\-%]/g;
            e.navNames && ("object" == typeof e.navNames ? (e.navNames = e.navNames.map((function(e) {
                return encodeURIComponent(e.toString()).replace(t, "")
            }
            )),
            e.navNames = e.navNames.join("#")) : "string" == typeof e.navNames && (e.navNames = e.navNames.replace(",", "#")));
            e.parentNavName && (e.parentNavName = encodeURIComponent(e.parentNavName).replace(t, ""));
            return e
        }(c))))),
        {
            eurl: l,
            href: u,
            type: s,
            params: i
        }
    };
    function G(e) {
        window.__p4pdot && e.eurl && e.href.indexOf("www.alibaba.com/") > -1 && (console.log(e, window.__p4pdot),
        window.__p4pdot(e.eurl))
    }
    function J() {
        return (J = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function $(e, t) {
        return ($ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    var K = function(e) {
        var t, n;
        function r() {
            return e.apply(this, arguments) || this
        }
        return n = e,
        (t = r).prototype = Object.create(n.prototype),
        t.prototype.constructor = t,
        $(t, n),
        r.prototype.render = function() {
            var e = this.props;
            m.call(this);
            var t = e.accessibilityText
              , n = e.onTap
              , r = z(e);
            return r.href ? Object(b.createElement)("a", J({
                "data-logtype": r.type ? r.type : "otherlink",
                "data-params": r.params,
                key: e._id,
                "view-name": "SeoLinearLayout",
                style: this.getStyles()
            }, this.getAttrs(), {
                href: r.href,
                title: t || null,
                target: o.utils.env.isPC ? "_blank" : "_self",
                onClick: function(e) {
                    G(r),
                    o.utils.env.isPC || e.preventDefault()
                }
            }), this.renderView && this.renderView(e)) : Object(b.createElement)("div", J({
                key: e._id,
                "view-name": this.getViewName(),
                style: this.getStyles()
            }, this.getAttrs(), {
                "data-logtype": r.type ? r.type : null,
                "data-params": n && r.type ? r.params : null,
                onClick: function() {
                    G(r)
                }
            }), this.renderView && this.renderView(e))
        }
        ,
        r
    }(f.LinearLayout);
    K.defaultProps = {
        orientation: "horizontal"
    },
    o.registerView("LinearLayout", K),
    o.registerView("DLinearLayout", K);
    function X() {
        return (X = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function Y(e, t) {
        return (Y = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    var Z = function(e) {
        var t, n;
        function r() {
            return e.apply(this, arguments) || this
        }
        return n = e,
        (t = r).prototype = Object.create(n.prototype),
        t.prototype.constructor = t,
        Y(t, n),
        r.prototype.render = function() {
            var e = this.props;
            m.call(this);
            var t = e.accessibilityText
              , n = e.onTap
              , r = z(e);
            return r.href ? Object(b.createElement)("a", X({
                "data-logtype": r.type ? r.type : "otherlink",
                "data-params": r.params,
                key: e._id,
                "view-name": "SeoFrameLayout",
                style: this.getStyles()
            }, this.getAttrs(), {
                href: r.href,
                title: t,
                target: o.utils.env.isPC ? "_blank" : "_self",
                onClick: function(e) {
                    G(r),
                    o.utils.env.isPC || e.preventDefault()
                }
            }), this.renderView && this.renderView(e)) : Object(b.createElement)("div", X({
                key: e._id,
                "view-name": this.getViewName(),
                style: this.getStyles()
            }, this.getAttrs(), {
                "data-logtype": r.type ? r.type : null,
                "data-params": n && r.type ? r.params : null,
                onClick: function() {
                    G(r)
                }
            }), this.renderView && this.renderView(e))
        }
        ,
        r
    }(f.FrameLayout);
    o.registerView("FrameLayout", Z),
    o.registerView("DFrameLayout", Z);
    function Q(e, t) {
        return (Q = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    o.registerView("CountDownView", f.View),
    v() && o.setGlobalConfig("__rtl", !0),
    o.registerDataParser("isRTL", v),
    o.registerDataParser("onBindData", (function() {}
    )),
    o.registerDataParser("platform", (function(e) {
        var t = e[0];
        return t && "h5" == t.toLowerCase()
    }
    )),
    o.registerEventHandler("link", (function(e) {
        var t = e[0].action;
        t && t.length > 0 || console.error("DX Click - URL \u4e3a\u7a7a...", e)
    }
    )),
    o.utils.env.deviceWidth = 375,
    o.utils.env.isPC = !0,
    o.setDriver(l);
    var ee = o.Template
      , te = function(e) {
        var t, n;
        function o() {
            return e.apply(this, arguments) || this
        }
        n = e,
        (t = o).prototype = Object.create(n.prototype),
        t.prototype.constructor = t,
        Q(t, n);
        var i = o.prototype;
        return i.render = function() {
            var e, t = this.props, n = t.data, o = t.templateDTO, i = o.name, a = o.template, s = o.url, c = o.urlH5 || s;
            if (a) {
                var u = JSON.parse(a);
                e = Object(r.createElement)(ee, {
                    tpl: u,
                    data: n,
                    device: "pc",
                    componentFinishFirstPaint: this.componentFinishFirstPaint
                })
            } else
                s ? e = Object(r.createElement)(ee, {
                    url: c,
                    data: n,
                    device: "pc",
                    componentFinishFirstPaint: this.componentFinishFirstPaint
                }) : console.error("DX \u6a21\u7248\u9519\u8bef - \u6e32\u67d3\u5931\u8d25:", c, i || "", n);
            return e
        }
        ,
        i.componentFinishFirstPaint = function() {
            window.isFirstDXRender || (window.isFirstDXRender = !0,
            window.onHeroElementLoad && window.onHeroElementLoad())
        }
        ,
        o
    }(r.Component);
    Object(d.b)("v_virtual", {
        render: function(e) {
            var t, n = e.moduleWarp, o = e.containerElement, i = n.templateDTO, a = null === (t = n.data) || void 0 === t ? void 0 : t.data;
            p(i) && (o && (o.innerHTML = ""),
            Object(d.c)(Object(r.createElement)(te, {
                data: a,
                templateDTO: i
            }), o))
        }
    }),
    Object(d.b)("list", {
        render: function(e) {
            var t, n = e.moduleWarp, o = e.containerElement, i = n.templateDTO, a = null === (t = n.data) || void 0 === t ? void 0 : t.data;
            n.data.type === h.a.NativeCommonProductCard && (i = h.b[h.a.NativeCommonProductCard]),
            p(i) && (o && (o.innerHTML = ""),
            Object(d.c)(Object(r.createElement)(te, {
                data: a,
                templateDTO: i
            }), o))
        }
    });
    t.a = te
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.default = function(e, t) {
        if (!(0,
        i.default)(e))
            throw Error("cloneElement: not a valid element.");
        var n = Object.assign({}, e.props)
          , r = e.key
          , o = e.ref
          , l = e._owner;
        if (t) {
            var f;
            for (var d in void 0 !== t.ref && (o = t.ref,
            l = a.owner),
            void 0 !== t.key && (r = String(t.key)),
            e.type && e.type.defaultProps && (f = e.type.defaultProps),
            t)
                t.hasOwnProperty(d) && !u.hasOwnProperty(d) && (void 0 === t[d] && void 0 !== f ? n[d] = f[d] : n[d] = t[d])
        }
        for (var p = arguments.length, h = new Array(p > 2 ? p - 2 : 0), v = 2; v < p; v++)
            h[v - 2] = arguments[v];
        h.length && (n.children = c(h));
        return new s(e.type,r,o,n,l)
    }
    ;
    var r, o = n(0), i = (r = n(22)) && r.__esModule ? r : {
        default: r
    };
    var a = o.shared.Host
      , s = o.shared.Element
      , c = o.shared.flattenChildren
      , u = {
        key: !0,
        ref: !0
    }
}
, function(e, t, n) {
    e.exports = n(31)
}
, function(e, t, n) {
    !function(e) {
        "use strict";
        var t = {}
          , n = {}.hasOwnProperty;
        e.$slot = function(e) {
            var t = e.$slots
              , n = e.name
              , r = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    0 <= t.indexOf(n) || (o[n] = e[n]);
                return o
            }(e, ["$slots", "name"])
              , o = t ? t[n] : null;
            return "function" == typeof o ? o(r) : null
        }
        ,
        e.classnames = function e() {
            for (var t = [], r = 0; r < arguments.length; r++) {
                var o = arguments[r];
                if (o) {
                    var i = typeof o;
                    if ("string" == i || "number" == i)
                        t.push(o);
                    else if (Array.isArray(o) && o.length) {
                        var a = e.apply(null, o);
                        a && t.push(a)
                    } else if ("object" == i)
                        for (var s in o)
                            n.call(o, s) && o[s] && t.push(s)
                }
            }
            return t.join(" ")
        }
        ,
        e.createCondition = function(e) {
            if (Array.isArray(e))
                for (var t = 0, n = e.length; t < n; t++) {
                    var r = e[t]
                      , o = r[0]
                      , i = r[1];
                    if (o())
                        return i()
                }
            return null
        }
        ,
        e.createJSXMemo = function(e, n) {
            return t.hasOwnProperty(n) ? t[n] : t[n] = "function" == typeof e ? e() : e
        }
        ,
        e.createList = function(e, t) {
            var n, r, o, i, a, s;
            if (Array.isArray(e) || "string" == typeof e)
                for (n = new Array(e.length),
                r = 0,
                o = e.length; r < o; r++)
                    n[r] = t.call(this, e[r], r);
            else if ("number" == typeof e)
                for (n = new Array(e),
                r = 0; r < e; r++)
                    n[r] = t.call(this, r + 1, r);
            else if (s = e,
            "[object Object]" === {}.toString.call(s))
                for (i = Object.keys(e),
                n = new Array(i.length),
                r = 0,
                o = i.length; r < o; r++)
                    a = i[r],
                    n[r] = t.call(this, e[a], a, r);
            return n
        }
        ,
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }(t)
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.default = function(e) {
        return "object" == typeof e && null !== e && e.type && e.props
    }
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.setViewportWidth = function(e) {
        f = e
    }
    ,
    t.setUnitPrecision = function(e) {
        d = e
    }
    ,
    t.setTagNamePrefix = function(e) {
        c = e
    }
    ,
    t.createBody = function() {
        return document.body
    }
    ,
    t.createEmpty = function(e) {
        var t, n = e._parent;
        if (l) {
            var r = v(n);
            if (r) {
                if (8 === r.nodeType)
                    return r;
                g(t = document.createComment(""), r, n)
            } else
                (t = document.createComment("")).__a = !0
        } else
            t = document.createComment("");
        return t
    }
    ,
    t.createText = function(e, t) {
        var n, r = t._parent;
        if (l) {
            var o = v(r);
            if (o) {
                if (3 === o.nodeType)
                    return e !== o.textContent && (o.textContent = e),
                    o;
                g(n = document.createTextNode(e), o, r)
            } else
                (n = document.createTextNode(e)).__a = !0
        } else
            n = document.createTextNode(e);
        return n
    }
    ,
    t.updateText = function(e, t) {
        e.textContent = t
    }
    ,
    t.createElement = function(e, t, n) {
        var r, o = n._parent;
        u = "svg" === e || o && o.namespaceURI === a;
        var s = null;
        function f() {
            if (u)
                r = document.createElementNS(a, e);
            else if (c) {
                var t = "function" == typeof t ? t(e) : t;
                r = document.createElement(t + e)
            } else
                r = document.createElement(e)
        }
        if (l)
            if (s = v(o))
                if (e === s.nodeName.toLowerCase()) {
                    for (var d = s.attributes, p = d.length; p--; ) {
                        var h = d[p].name
                          , m = t[h];
                        if ("class" === h && null == t.className && null == m || "style" === h && (null == m || 0 === Object.keys(m).length) || "class" !== h && "style" !== h && null == m)
                            s.removeAttribute(h);
                        else if ("style" === h)
                            for (var y = 0; y < s.style.length; y++) {
                                var O = s.style[y];
                                m[O] || (s.style[O] = "")
                            }
                    }
                    r = s
                } else
                    f(),
                    g(r, s, o);
            else
                f(),
                r.__a = !0;
        else
            f();
        for (var x in t) {
            var S = t[x];
            "children" !== x && (null != S && ("style" === x ? _(r, S) : i.test(x) ? b(r, x.slice(2).toLowerCase(), S) : w(r, x, S)))
        }
        return r
    }
    ,
    t.appendChild = m,
    t.removeChild = function(e, t) {
        (t = t || e.parentNode) && t.removeChild(e)
    }
    ,
    t.replaceChild = g,
    t.insertAfter = function(e, t, n) {
        n = n || t.parentNode;
        var r = t.nextSibling;
        r ? r !== e && y(e, r, n) : m(e, n)
    }
    ,
    t.insertBefore = y,
    t.addEventListener = b,
    t.removeEventListener = function(e, t, n) {
        return e.removeEventListener(t, n)
    }
    ,
    t.removeAttribute = function(e, t) {
        if ("dangerouslySetInnerHTML" === t)
            return e.innerHTML = null;
        "className" === t && (t = "class");
        if (t in e)
            try {
                e[t] = null
            } catch (e) {}
        e.removeAttribute(t)
    }
    ,
    t.setAttribute = w,
    t.setStyle = _,
    t.beforeRender = function(e) {
        var t = e.hydrate;
        l = t
    }
    ,
    t.afterRender = function(e) {
        var t = e.container;
        l && (!function e(t) {
            var n = t.childNodes.length
              , r = t.__i || 0;
            if (n - r > 0)
                for (var o = n - 1; o >= r; o--)
                    t.removeChild(t.childNodes[o]);
            for (var i = t.childNodes.length - 1; i >= 0; i--)
                e(t.childNodes[i])
        }(t),
        l = !1)
    }
    ;
    var r = /\d+rpx/
      , o = /[-+]?\d*\.?\d+(rpx)/g
      , i = /^on[A-Z]/
      , a = "http://www.w3.org/2000/svg"
      , s = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridRow: !0,
        gridColumn: !0,
        fontWeight: !0,
        webkitLineClamp: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
    }
      , c = ""
      , u = !1
      , l = !1
      , f = 750
      , d = 4;
    function p(e) {
        return t = parseFloat(e) / (f / 100),
        n = d,
        r = Math.pow(10, n + 1),
        o = Math.floor(t * r),
        10 * Math.round(o / 10) / r + "vw";
        var t, n, r, o
    }
    function h(e) {
        return r.test(e) ? function(e) {
            return e.replace(o, p)
        }(e) : e
    }
    function v(e) {
        return null == e.__i && (e.__i = 0),
        e.childNodes[e.__i++]
    }
    function m(e, t) {
        if (!l || e.__a)
            return t.appendChild(e)
    }
    function g(e, t, n) {
        (n = n || t.parentNode).replaceChild(e, t)
    }
    function y(e, t, n) {
        (n = n || t.parentNode).insertBefore(e, t)
    }
    function b(e, t, n) {
        return e.addEventListener(t, n)
    }
    function w(e, t, n) {
        if ("dangerouslySetInnerHTML" === t) {
            var r = n.__html;
            if (e.innerHTML !== r)
                return e.innerHTML = r
        }
        if ("className" === t && (t = "class"),
        t in e)
            try {
                e[t] = n
            } catch (r) {
                e.setAttribute(t, n)
            }
        else
            e.setAttribute(t, n)
    }
    function _(e, t) {
        var n = e.style;
        for (var r in t) {
            var o = t[r];
            n[r] = "number" != typeof o || s[r] ? h(o) : o + "px"
        }
    }
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.default = function(e) {
        var t = r.get(e);
        if (!t)
            return !1;
        return r.remove(e),
        t._internal.unmountComponent(),
        !0
    }
    ;
    var r = n(0).shared.Instance
}
, function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "default", (function() {
        return m
    }
    ));
    var r = n(0)
      , o = n(4)
      , i = n(14)
      , a = n(6)
      , s = n(9)
      , c = n(27)
      , u = n.n(c)
      , l = n(28)
      , f = n.n(l)
      , d = n(18);
    n(52);
    function p(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (n)
            return (n = n.call(e)).next.bind(n);
        if (Array.isArray(e) || (n = function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return h(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return h(e, t)
        }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0;
            return function() {
                return r >= e.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: e[r++]
                }
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function v(e, t) {
        return (v = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    var m = function(e) {
        var t, n;
        function o(t) {
            var n = e.call(this, t) || this
              , r = t.tabModuleList
              , o = t.events
              , i = !!o;
            return n.loading = !1,
            n.state = {
                pageIndex: i ? 1 : 0,
                selectedTabIndex: 0,
                tabModuleList: r,
                events: o,
                moduleList: [],
                templateURLMap: {},
                end: !1,
                isPageEvent: i
            },
            n
        }
        n = e,
        (t = o).prototype = Object.create(n.prototype),
        t.prototype.constructor = t,
        v(t, n);
        var c = o.prototype;
        return c.componentDidMount = function() {
            var e = this;
            this.loadData(this.state.pageIndex);
            var t = null;
            window.addEventListener("scroll", (function() {
                t && clearTimeout(t),
                t = setTimeout((function() {
                    t = null,
                    e.checkLoadMore()
                }
                ), 60)
            }
            ))
        }
        ,
        c.checkLoadMore = function() {
            var e = this
              , t = window.scrollY || window.pageYOffset
              , n = document.getElementById("loaddingDiv")
              , r = Object(a.f)(n);
            if (t > 0 && r - t < 1e3) {
                var o = this.state.pageIndex + 1;
                this.loadData(o, (function(t) {
                    t && t.length > 0 ? e.setState({
                        pageIndex: o
                    }) : e.setState({
                        end: !0
                    })
                }
                ))
            }
        }
        ,
        c.loadData = function(e, t) {
            var n = this;
            void 0 === t && (t = function() {}
            );
            var r = this.state
              , o = r.selectedTabIndex
              , a = r.tabModuleList
              , s = r.events
              , c = r.end;
            if (!this.loading && !c) {
                var u;
                if (a)
                    u = a[o].events[0];
                else
                    s && (u = s[0]);
                if (u && u.request) {
                    var l = Object.assign(Object.assign({}, u.request.param), {
                        pageIndex: e
                    });
                    this.loading = !0,
                    Object(i.b)({
                        api: u.request.api,
                        data: l,
                        onSuccess: function(r) {
                            var o = r;
                            if (o && o.sharedTemplates)
                                for (var i, a = p(o.sharedTemplates); !(i = a()).done; ) {
                                    var s = i.value
                                      , c = s.name
                                      , u = s.urlH5
                                      , l = s.url
                                      , f = u || l;
                                    c && f && (n.state.templateURLMap[c] = f)
                                }
                            var d = (o.body || {}).moduleList;
                            d && d.length > 0 ? 0 == e ? n.setState({
                                moduleList: d,
                                end: !1
                            }) : n.setState({
                                end: d.length < 20,
                                moduleList: n.state.moduleList.concat(d)
                            }) : n.setState({
                                end: !0
                            }),
                            n.loading = !1,
                            t && t(d, !1)
                        },
                        onError: function() {}
                    })
                } else
                    t && t(null, !1)
            }
        }
        ,
        c.render = function() {
            var e = this
              , t = this.state
              , n = t.tabModuleList
              , o = t.moduleList
              , i = (t.loading,
            t.end)
              , a = t.selectedTabIndex;
            return Object(r.createElement)("div", {
                className: "fp-tab-list"
            }, n && Object(r.createElement)(f.a, null, Object(r.createElement)(u.a, {
                activeTab1Index: a,
                ui: {
                    tab1Style: {
                        type: "text"
                    },
                    tab2Style: {
                        type: "text"
                    }
                },
                tabList: n.map((function(e) {
                    return {
                        name: e.data.title
                    }
                }
                )),
                onTabChange: function(t) {
                    a !== t && (e.loading = !1,
                    e.setState({
                        selectedTabIndex: t,
                        pageIndex: 0,
                        moduleList: []
                    }, (function() {
                        e.loadData(0)
                    }
                    )))
                }
            })), Object(r.createElement)("div", {
                className: "flexContainer"
            }, o.map((function(t, n) {
                var o = t.freeBlockTemplateName
                  , i = t.type
                  , a = e.state.templateURLMap[o];
                if (i === s.a.NativeCommonProductCard) {
                    var c = s.b[s.a.NativeCommonProductCard];
                    c && (o = c.name,
                    a = c.url)
                }
                if (t.data && o && a) {
                    var u = t.modulePerLine || "1";
                    return 2 == u && (u = 5),
                    Object(r.createElement)("div", {
                        key: n,
                        className: "flexColFloor flex" + u + "ColFloor"
                    }, Object(r.createElement)(d.a, {
                        data: t.data,
                        templateDTO: {
                            name: o,
                            url: a
                        }
                    }))
                }
            }
            ))), Object(r.createElement)("div", {
                id: "loaddingDiv"
            }, !i && Object(r.createElement)("div", {
                class: "loading"
            })))
        }
        ,
        o
    }(r.Component);
    function g(e) {
        var t, n = e.moduleWarp, i = e.containerElement, a = (null === (t = n.data) || void 0 === t ? void 0 : t.data).moduleList;
        i.innerHTML = "",
        Object(o.c)(Object(r.createElement)(m, {
            tabModuleList: a
        }), i)
    }
    Object(o.b)("tab", {
        render: g
    }),
    Object(o.b)("tab_with_list", {
        render: g
    }),
    Object(o.b)("fp-list", {
        render: function(e) {
            var t = e.fpPageEvents
              , n = e.containerElement;
            if (t && 0 !== t.length) {
                var i = document.getElementById("fp-list");
                i && (i.innerHTML = ""),
                Object(o.c)(Object(r.createElement)(m, {
                    events: t
                }), n || i)
            }
        }
    })
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.default = void 0;
    var r = [/\/\/sc0[1234]\.alicdn\.com/, /\/\/s\.alicdn\.com\/@sc0[1234]/, /\/\/(img|gw)\.alicdn\.com/, /\/\/s\.alicdn\.com\/@img/, /\/\/(ossgw)\.alicdn\.com/, /\/\/s\.alicdn\.com\/@ossgw/];
    var o = function(e, t, n, o, i) {
        var a = e ? e.replace(/_\d+x\d+(xz)?(q\d+)?\.(png|jpg|jpeg)(_\.webp)?/, "") : "";
        a = a.replace(/http(s?):/g, "");
        var s = null
          , c = !1;
        if (r.forEach((function(e) {
            e.test(a) && (c = !0)
        }
        )),
        !c)
            return a;
        if (/\/\/(sc01|sc02|sc03|sc04|img|gw|ossgw)\.alicdn\.com/.test(a)) {
            var u = a.match(/(sc01|sc02|sc03|sc04|img|gw|ossgw).alicdn.com/);
            if (u && u.length >= 2) {
                var l = "gw" === u[1] ? "img" : u[1];
                a = a.replace(/(sc01|sc02|sc03|sc04|img|gw|ossgw).alicdn.com/, "s.alicdn.com/@" + l)
            }
        }
        if (/\/\/s\.alicdn\.com\/@sc0[1234]/.test(a))
            s = t;
        else if (/\/\/s\.alicdn\.com\/@img/.test(a))
            s = o || t;
        else if (/\/\/s\.alicdn\.com\/@ossgw/.test(a) && !/x-oss-process/.test(a)) {
            var f = t && o ? Math.min(t, o) : t || o;
            return a + "?x-oss-process=image/resize,l_" + f + ",limit_1/"
        }
        if (/.gif/.test(a))
            return a;
        var d = "";
        return s && (d = s ? "_" + s + "x" + s : ""),
        n && (d += d ? "xz" : ""),
        i && (d += d ? "q" + i : "_q" + i),
        a = d ? "" + a + d + ".jpg" : a
    };
    t.default = o
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.default = void 0;
    var r = s(n(41))
      , o = n(0)
      , i = s(n(42))
      , a = n(50);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function c() {
        return (c = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    var u = r.default;
    function l(e) {
        var t = u.__cache || (u.__cache = {})
          , n = function e() {
            var t = []
              , n = arguments[0]
              , r = Object.prototype.toString.call(n).slice(8, -1).toLowerCase();
            if ("string" === r)
                (n = n.trim()) && t.push(n);
            else if ("array" === r)
                n.forEach((function(n) {
                    (n = e(n).trim()) && t.push(n)
                }
                ));
            else if ("object" === r)
                for (var o in n)
                    (o = o.trim()) && n.hasOwnProperty(o) && n[o] && t.push(o);
            return t.join(" ").trim()
        }(e)
          , r = n.split(/\s+/)
          , o = t[n];
        return o || (o = {},
        1 === r.length ? o = u[r[0].trim()] : r.forEach((function(e) {
            "object" == typeof u[e.trim()] && (o = Object.assign(o, u[e.trim()]))
        }
        )),
        t[n] = o),
        o
    }
    t.default = function(e) {
        var t = e.activeTab1Index
          , n = e.activeTab2Index
          , r = e.tabList
          , s = e.ui
          , u = void 0 === s ? {} : s
          , f = e.log
          , d = void 0 === f ? {} : f
          , p = e.onTabChange
          , h = u.tab1Style
          , v = u.tab2Style
          , m = (0,
        o.useState)(t || 0)
          , g = m[0]
          , y = m[1]
          , b = (0,
        o.useState)(n || 0)
          , w = b[0]
          , _ = b[1]
          , O = r[g]
          , x = h && h.backgroundColor ? "dark" : "light"
          , S = c({
            textColor: "#333",
            textHighlightColor: "white",
            backgroundColor: "white",
            backgroundHighlightColor: "#FF6A00",
            type: "text"
        }, h)
          , k = c({
            textColor: "#333",
            textHighlightColor: S ? S.backgroundHighlightColor : "#FF6A00",
            backgroundColor: "white",
            backgroundHighlightColor: "white",
            type: "text"
        }, v);
        return r && r.length > 0 && r.forEach((function(e, t) {
            var n = c({}, d, {
                navNames: ["" + (e.dotName || "")],
                navLevel: 1,
                index: t + 1
            });
            e.dotParams = (0,
            a.setNavDotParams)(n),
            e.subTabList && e.subTabList.length > 0 && e.subTabList.forEach((function(t, n) {
                var r = c({}, d, {
                    navNames: ["" + (t.dotName || "")],
                    navLevel: 2,
                    index: n + 1
                });
                t.dotParams = (0,
                a.setNavDotParams)(function(e, t) {
                    return e && t && (e.parentNavName = t.dotName),
                    e
                }(r, e))
            }
            ))
        }
        )),
        (0,
        o.useEffect)((function() {
            y(t || 0),
            _(n || 0)
        }
        ), [t, n, r]),
        (0,
        o.createElement)("div", {
            className: "hugo2-pc-navi-flex-container " + u.containerClassName,
            style: l("hugo2-pc-navi-flex-container " + u.containerClassName)
        }, r && r.length ? (0,
        o.createElement)(i.default, {
            key: "level1tab",
            level: 1,
            tabList: r,
            ui: S,
            activeIndex: g,
            theme: x,
            onChange: function(e) {
                y(e),
                _(0),
                p && p(e, 0)
            }
        }) : null, O && O.subTabList && O.subTabList.length ? (0,
        o.createElement)(i.default, {
            key: "level2_" + g + "_tab",
            level: 2,
            tabList: O.subTabList,
            ui: k,
            activeIndex: w,
            theme: "light",
            onChange: function(e) {
                y(g),
                _(e),
                p && p(g, e)
            }
        }) : null)
    }
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.default = t.getElementOffset = void 0;
    var r, o = n(21), i = (r = n(51)) && r.__esModule ? r : {
        default: r
    }, a = n(0);
    var s = i.default;
    function c(e) {
        var t = s.__cache || (s.__cache = {})
          , n = function e() {
            var t = []
              , n = arguments[0]
              , r = Object.prototype.toString.call(n).slice(8, -1).toLowerCase();
            if ("string" === r)
                (n = n.trim()) && t.push(n);
            else if ("array" === r)
                n.forEach((function(n) {
                    (n = e(n).trim()) && t.push(n)
                }
                ));
            else if ("object" === r)
                for (var o in n)
                    (o = o.trim()) && n.hasOwnProperty(o) && n[o] && t.push(o);
            return t.join(" ").trim()
        }(e)
          , r = n.split(/\s+/)
          , o = t[n];
        return o || (o = {},
        1 === r.length ? o = s[r[0].trim()] : r.forEach((function(e) {
            "object" == typeof s[e.trim()] && (o = Object.assign(o, s[e.trim()]))
        }
        )),
        t[n] = o),
        o
    }
    var u = function(e) {
        for (var t = e.offsetTop, n = e.offsetLeft, r = e.offsetParent; null !== r; )
            t += r.offsetTop,
            n += r.offsetLeft,
            r = r.offsetParent;
        return {
            top: t,
            left: n
        }
    };
    t.getElementOffset = u;
    t.default = function(e) {
        void 0 === e && (e = {});
        var t = e
          , n = t.children
          , r = t.style
          , i = t.id
          , l = t.fixedTopHeight
          , f = void 0 === l ? 0 : l
          , d = (0,
        a.useRef)(null)
          , p = (0,
        a.useState)("auto")
          , h = p[0]
          , v = p[1]
          , m = (0,
        a.useState)(!1)
          , g = m[0]
          , y = m[1];
        (0,
        a.useEffect)((function() {
            var e = u(d.current).top;
            v(d.current.clientHeight + "px"),
            window.addEventListener("scroll", (function() {
                var t = window.pageYOffset;
                y(t >= e)
            }
            ))
        }
        ), []);
        var b = r || {};
        return g && (b.top = f),
        (0,
        a.createElement)("div", {
            className: "hugo-sticky-wrapper",
            style: Object.assign({}, s["hugo-sticky-wrapper"], {
                height: h
            }),
            ref: d,
            id: i || "hugo-sticky-wrapper"
        }, (0,
        a.createElement)("div", {
            style: Object.assign({}, c((0,
            o.classnames)({
                "hugo-sticky-container": !0,
                isfixed: g
            })), b),
            className: (0,
            o.classnames)({
                "hugo-sticky-container": !0,
                isfixed: g
            })
        }, n))
    }
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.default = void 0;
    var r, o = (r = n(49)) && r.__esModule ? r : {
        default: r
    }, i = n(0);
    var a = o.default;
    function s(e) {
        var t = a.__cache || (a.__cache = {})
          , n = function e() {
            var t = []
              , n = arguments[0]
              , r = Object.prototype.toString.call(n).slice(8, -1).toLowerCase();
            if ("string" === r)
                (n = n.trim()) && t.push(n);
            else if ("array" === r)
                n.forEach((function(n) {
                    (n = e(n).trim()) && t.push(n)
                }
                ));
            else if ("object" === r)
                for (var o in n)
                    (o = o.trim()) && n.hasOwnProperty(o) && n[o] && t.push(o);
            return t.join(" ").trim()
        }(e)
          , r = n.split(/\s+/)
          , o = t[n];
        return o || (o = {},
        1 === r.length ? o = a[r[0].trim()] : r.forEach((function(e) {
            "object" == typeof a[e.trim()] && (o = Object.assign(o, a[e.trim()]))
        }
        )),
        t[n] = o),
        o
    }
    var c = function(e) {
        var t = e.type
          , n = e.classname
          , r = e.style;
        return t ? (0,
        i.createElement)("span", {
            className: "iconfont " + t + " " + n,
            style: Object.assign({}, s("iconfont " + t + " " + n), r)
        }) : null
    };
    t.default = c
}
, function(e, t, n) {
    e.exports = n(59)
}
, function(e, t, n) {
    var r = function(e) {
        "use strict";
        var t = Object.prototype
          , n = t.hasOwnProperty
          , r = "function" == typeof Symbol ? Symbol : {}
          , o = r.iterator || "@@iterator"
          , i = r.asyncIterator || "@@asyncIterator"
          , a = r.toStringTag || "@@toStringTag";
        function s(e, t, n) {
            return Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            e[t]
        }
        try {
            s({}, "")
        } catch (e) {
            s = function(e, t, n) {
                return e[t] = n
            }
        }
        function c(e, t, n, r) {
            var o = t && t.prototype instanceof f ? t : f
              , i = Object.create(o.prototype)
              , a = new x(r || []);
            return i._invoke = function(e, t, n) {
                var r = "suspendedStart";
                return function(o, i) {
                    if ("executing" === r)
                        throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o)
                            throw i;
                        return k()
                    }
                    for (n.method = o,
                    n.arg = i; ; ) {
                        var a = n.delegate;
                        if (a) {
                            var s = w(a, n);
                            if (s) {
                                if (s === l)
                                    continue;
                                return s
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if ("suspendedStart" === r)
                                throw r = "completed",
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var c = u(e, t, n);
                        if ("normal" === c.type) {
                            if (r = n.done ? "completed" : "suspendedYield",
                            c.arg === l)
                                continue;
                            return {
                                value: c.arg,
                                done: n.done
                            }
                        }
                        "throw" === c.type && (r = "completed",
                        n.method = "throw",
                        n.arg = c.arg)
                    }
                }
            }(e, n, a),
            i
        }
        function u(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        e.wrap = c;
        var l = {};
        function f() {}
        function d() {}
        function p() {}
        var h = {};
        h[o] = function() {
            return this
        }
        ;
        var v = Object.getPrototypeOf
          , m = v && v(v(S([])));
        m && m !== t && n.call(m, o) && (h = m);
        var g = p.prototype = f.prototype = Object.create(h);
        function y(e) {
            ["next", "throw", "return"].forEach((function(t) {
                s(e, t, (function(e) {
                    return this._invoke(t, e)
                }
                ))
            }
            ))
        }
        function b(e, t) {
            var r;
            this._invoke = function(o, i) {
                function a() {
                    return new t((function(r, a) {
                        !function r(o, i, a, s) {
                            var c = u(e[o], e, i);
                            if ("throw" !== c.type) {
                                var l = c.arg
                                  , f = l.value;
                                return f && "object" == typeof f && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                    r("next", e, a, s)
                                }
                                ), (function(e) {
                                    r("throw", e, a, s)
                                }
                                )) : t.resolve(f).then((function(e) {
                                    l.value = e,
                                    a(l)
                                }
                                ), (function(e) {
                                    return r("throw", e, a, s)
                                }
                                ))
                            }
                            s(c.arg)
                        }(o, i, r, a)
                    }
                    ))
                }
                return r = r ? r.then(a, a) : a()
            }
        }
        function w(e, t) {
            var n = e.iterator[t.method];
            if (void 0 === n) {
                if (t.delegate = null,
                "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return",
                    t.arg = void 0,
                    w(e, t),
                    "throw" === t.method))
                        return l;
                    t.method = "throw",
                    t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return l
            }
            var r = u(n, e.iterator, t.arg);
            if ("throw" === r.type)
                return t.method = "throw",
                t.arg = r.arg,
                t.delegate = null,
                l;
            var o = r.arg;
            return o ? o.done ? (t[e.resultName] = o.value,
            t.next = e.nextLoc,
            "return" !== t.method && (t.method = "next",
            t.arg = void 0),
            t.delegate = null,
            l) : o : (t.method = "throw",
            t.arg = new TypeError("iterator result is not an object"),
            t.delegate = null,
            l)
        }
        function _(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]),
            2 in e && (t.finallyLoc = e[2],
            t.afterLoc = e[3]),
            this.tryEntries.push(t)
        }
        function O(e) {
            var t = e.completion || {};
            t.type = "normal",
            delete t.arg,
            e.completion = t
        }
        function x(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            e.forEach(_, this),
            this.reset(!0)
        }
        function S(e) {
            if (e) {
                var t = e[o];
                if (t)
                    return t.call(e);
                if ("function" == typeof e.next)
                    return e;
                if (!isNaN(e.length)) {
                    var r = -1
                      , i = function t() {
                        for (; ++r < e.length; )
                            if (n.call(e, r))
                                return t.value = e[r],
                                t.done = !1,
                                t;
                        return t.value = void 0,
                        t.done = !0,
                        t
                    };
                    return i.next = i
                }
            }
            return {
                next: k
            }
        }
        function k() {
            return {
                value: void 0,
                done: !0
            }
        }
        return d.prototype = g.constructor = p,
        p.constructor = d,
        d.displayName = s(p, a, "GeneratorFunction"),
        e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
        }
        ,
        e.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p,
            s(e, a, "GeneratorFunction")),
            e.prototype = Object.create(g),
            e
        }
        ,
        e.awrap = function(e) {
            return {
                __await: e
            }
        }
        ,
        y(b.prototype),
        b.prototype[i] = function() {
            return this
        }
        ,
        e.AsyncIterator = b,
        e.async = function(t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new b(c(t, n, r, o),i);
            return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                return e.done ? e.value : a.next()
            }
            ))
        }
        ,
        y(g),
        s(g, a, "Generator"),
        g[o] = function() {
            return this
        }
        ,
        g.toString = function() {
            return "[object Generator]"
        }
        ,
        e.keys = function(e) {
            var t = [];
            for (var n in e)
                t.push(n);
            return t.reverse(),
            function n() {
                for (; t.length; ) {
                    var r = t.pop();
                    if (r in e)
                        return n.value = r,
                        n.done = !1,
                        n
                }
                return n.done = !0,
                n
            }
        }
        ,
        e.values = S,
        x.prototype = {
            constructor: x,
            reset: function(e) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = void 0,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = void 0,
                this.tryEntries.forEach(O),
                !e)
                    for (var t in this)
                        "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type)
                    throw e.arg;
                return this.rval
            },
            dispatchException: function(e) {
                if (this.done)
                    throw e;
                var t = this;
                function r(n, r) {
                    return a.type = "throw",
                    a.arg = e,
                    t.next = n,
                    r && (t.method = "next",
                    t.arg = void 0),
                    !!r
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var i = this.tryEntries[o]
                      , a = i.completion;
                    if ("root" === i.tryLoc)
                        return r("end");
                    if (i.tryLoc <= this.prev) {
                        var s = n.call(i, "catchLoc")
                          , c = n.call(i, "finallyLoc");
                        if (s && c) {
                            if (this.prev < i.catchLoc)
                                return r(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc)
                                return r(i.finallyLoc)
                        } else if (s) {
                            if (this.prev < i.catchLoc)
                                return r(i.catchLoc, !0)
                        } else {
                            if (!c)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc)
                                return r(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var o = this.tryEntries[r];
                    if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break
                    }
                }
                i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = e,
                a.arg = t,
                i ? (this.method = "next",
                this.next = i.finallyLoc,
                l) : this.complete(a)
            },
            complete: function(e, t) {
                if ("throw" === e.type)
                    throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                this.method = "return",
                this.next = "end") : "normal" === e.type && t && (this.next = t),
                l
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e)
                        return this.complete(n.completion, n.afterLoc),
                        O(n),
                        l
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var o = r.arg;
                            O(n)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(e, t, n) {
                return this.delegate = {
                    iterator: S(e),
                    resultName: t,
                    nextLoc: n
                },
                "next" === this.method && (this.arg = void 0),
                l
            }
        },
        e
    }(e.exports);
    try {
        regeneratorRuntime = r
    } catch (e) {
        Function("r", "regeneratorRuntime = r")(r)
    }
}
, function(e, t, n) {
    !function() {
        var t = {
            n: 1,
            t: !1,
            driver: null,
            rootComponents: {},
            rootInstances: {},
            owner: null
        };
        function n(e, t, n, r, o) {
            return {
                type: e,
                key: t,
                ref: n,
                props: r,
                _owner: o
            }
        }
        function r(e) {
            return null === e
        }
        function o(e) {
            return "function" == typeof e
        }
        function i(e) {
            return "object" == typeof e
        }
        function a(e) {
            return "[object Object]" === f.toString.call(e)
        }
        function s(e) {
            return Array.isArray(e)
        }
        function c(e) {
            return "string" == typeof e
        }
        function u(e) {
            return "number" == typeof e
        }
        function l() {}
        var f = {};
        function d(e) {
            if (null == e)
                return e;
            var t = [];
            return function e(t, n) {
                if (s(t))
                    for (var r = 0, o = t.length; r < o; r++)
                        e(t[r], n);
                else
                    n.push(t)
            }(e, t),
            t.length - 1 ? t : t[0]
        }
        var p = []
          , h = []
          , v = []
          , m = setTimeout;
        function g(e) {
            for (var t; t = e.shift(); )
                t()
        }
        function y(e) {
            0 === p.length && m(b),
            p.push(e)
        }
        function b() {
            g(p)
        }
        function w(e) {
            0 === h.length && m(_),
            h.push(e)
        }
        function _() {
            g(h)
        }
        function O(e) {
            v.push(e)
        }
        function x(e, n, r) {
            var o = void 0 === r ? "" : " got: " + (a(o = r) ? Object.keys(o) : o);
            return Error(e + ": #" + n + ", " + ((n = t.owner) ? "check <" + n.i() + ">" : "no owner") + "." + o)
        }
        function S(e, t) {
            throw x("Error", e, t)
        }
        function k(e, t) {
            var n = x("Warn", e, t);
            m((function() {
                throw n
            }
            ), 0)
        }
        var P = {
            key: !0,
            ref: !0
        };
        function E(e, r, o) {
            var i, a = {}, c = null, u = null;
            if (null != r)
                for (i in u = void 0 === r.ref ? null : r.ref,
                c = void 0 === r.key ? null : "" + r.key,
                r)
                    P[i] || (a[i] = r[i]);
            var f = arguments.length - 2;
            if (0 < f)
                if (1 != f || s(o)) {
                    var p = o;
                    if (1 < f) {
                        p = Array(f);
                        for (var h = 0; h < f; h++)
                            p[h] = arguments[h + 2]
                    }
                    a.children = d(p)
                } else
                    a.children = o;
            if (e && e.defaultProps) {
                var v = e.defaultProps;
                for (i in v)
                    void 0 === a[i] && (a[i] = v[i])
            }
            return null == e && (e = l,
            k(0)),
            new n(e,c,u,a,t.owner)
        }
        function j(e, t, n) {
            for (var r = 0, o = e && e.length; r < o; r++)
                e[r].call(t, n)
        }
        var C = f.hasOwnProperty;
        function A(e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
        }
        function T(e, t) {
            if (A(e, t))
                return !0;
            if (!i(e) || r(e) || !i(t) || r(t))
                return !1;
            var n = Object.keys(e);
            if (n.length !== Object.keys(t).length)
                return !1;
            for (var o = 0; o < n.length; o++)
                if (!C.call(t, n[o]) || !A(e[n[o]], t[n[o]]))
                    return !1;
            return !0
        }
        var R = "_internal"
          , I = "_instance"
          , N = "_nativeNode"
          , D = "_renderedComponent";
        function M() {
            return t.owner && t.owner[I]
        }
        function L() {
            var e = M();
            if (e)
                return e;
            S(1)
        }
        function B(e, t) {
            if (!r(t) && e.length === t.length) {
                for (var n = 0; n < e.length; n++)
                    if (!A(e[n], t[n]))
                        return;
                return 1
            }
        }
        function V(e) {
            var n = L()
              , r = n.getHookID()
              , i = n.getHooks();
            return i[r] || (o(e) && (e = e()),
            i[r] = [e, function(e) {
                t.t || _();
                var a = i[r]
                  , s = a[2];
                o(e) && (e = e(s)),
                A(e, s) || (a[2] = e,
                M() === n ? n.r = !0 : n.u())
            }
            , e]),
            A((e = i[r])[0], e[2]) || (e[0] = e[2],
            n.e = !0),
            e
        }
        function W(e, t) {
            F(e, t)
        }
        function F(e, t, n) {
            var r, o, i, a, s = L(), c = s.getHookID(), u = s.getHooks();
            t = void 0 === t ? null : t,
            u[c] ? (i = (r = u[c]).o,
            o = r.f,
            r.f = t,
            r.s = o,
            i.current = e) : (i = function e(t) {
                if (!t && n)
                    return w((function() {
                        return e(!0)
                    }
                    ));
                (t = e.current) && (a.current = t(),
                e.current = null)
            }
            ,
            a = function e(t) {
                if (!t && n)
                    return w((function() {
                        return e(!0)
                    }
                    ));
                (t = e.current) && (t(),
                e.current = null)
            }
            ,
            i.current = e,
            u[c] = {
                o: i,
                c: a,
                s: t,
                f: t
            },
            s.didMount.push(i),
            s.willUnmount.push((function() {
                return a(!0)
            }
            )),
            s.didUpdate.push((function() {
                var e = u[c]
                  , t = e.f
                  , n = e.o;
                null != t && B(t, e.s) || (a(),
                n())
            }
            )))
        }
        function U(e, t) {
            var n, o = (n = L()).getHookID();
            return t = void 0 === t ? null : t,
            (n = n.getHooks())[o] && !r(t) && B(t, n[o][1]) || (n[o] = [e(), t]),
            n[o][0]
        }
        function H(e) {
            return s(e) ? e : [e]
        }
        function q(e, t) {
            for (var n; e && e[R]; ) {
                if (t(e)) {
                    n = e;
                    break
                }
                e = e[R].h
            }
            return n
        }
        var z = 0;
        function G(e, t) {
            e.prototype = Object.create(t.prototype),
            (e.prototype.constructor = e).__proto__ = t
        }
        var J = function() {
            function e(e) {
                this.l = e
            }
            var n = e.prototype;
            return n.a = function(e, n, r) {
                this._parent = e,
                this.h = n,
                this._context = r,
                this._mountID = t.n++
            }
            ,
            n.v = function() {
                this.l = this[N] = this._parent = this.h = this._context = null,
                this[I] && (this[I] = this[I][R] = null)
            }
            ,
            n.d = function(e, t, n, r) {
                return this.a(e, t, n),
                this._(r),
                (r = {})[R] = this,
                r
            }
            ,
            n.unmountComponent = function(e) {
                this[N] && !e && t.driver.removeChild(this[N], this._parent),
                this.v()
            }
            ,
            n.i = function() {
                var e = this.l
                  , t = e && e.type;
                return t && t.displayName || t && t.name || t || e
            }
            ,
            n._ = function(e) {
                var n = this.p()
                  , r = this._parent;
                e ? e(n, r) : t.driver.appendChild(n, r)
            }
            ,
            n.p = function() {
                return null == this[N] ? this[N] = this.m() : this[N]
            }
            ,
            n.w = function() {
                return this.p()
            }
            ,
            e
        }()
          , $ = function(e) {
            function n() {
                return e.apply(this, arguments) || this
            }
            G(n, e);
            var r = n.prototype;
            return r.m = function() {
                return t.driver.createEmpty(this)
            }
            ,
            r.y = function() {}
            ,
            n
        }(J);
        function K(e, t, n) {
            var r = e ? e.ref : null
              , o = t ? t.ref : null;
            r !== o && (r && Y(e._owner, r, n),
            o && X(t._owner, o, n))
        }
        function X(e, t, n) {
            e ? (n = n.w(),
            o(t) ? t(n) : i(t) ? t.current = n : e[I].refs[t] = n) : k(3)
        }
        function Y(e, t, n) {
            o(t) ? t(null) : (n = n.w(),
            i(t) && t.current === n ? t.current = null : e[I].refs[t] === n && delete e[I].refs[t])
        }
        function Z(e) {
            return e = a(e) && null !== e && e.type ? new (c(e.type) ? t.b : t.j)(e) : c(e) || u(e) ? new t.C(e + "") : s(e) ? new t.g(e) : (void 0 === e || r(e) || !1 === e || !0 === e || k(2, e),
            new t.O(e))
        }
        function Q(e, t) {
            var n = r(e)
              , o = r(t);
            return n || o ? n === o : s(e) && s(t) || (c(e) || u(e) ? c(t) || u(t) : i(e) && i(t) && e.type === t.type && e.key === t.key)
        }
        function ee(e, t, n) {
            return t = t && t.key,
            n = "." + n.toString(36),
            c(t) && void 0 === e[t = "$" + t] ? t : n
        }
        function te(e) {
            for (var n = e; n = e.h && e.h[R]; )
                if (n instanceof t.j)
                    e = n;
                else {
                    for (var r = Object.keys(n.k), o = e.I - 1; 0 <= o; o--) {
                        var i = n.k[r[o]].p();
                        if (!s(i))
                            return i;
                        if (0 < i.length)
                            return i[i.length - 1]
                    }
                    if (!(n instanceof t.g))
                        return null;
                    e = n
                }
        }
        var ne = function() {
            function e(e, t) {
                this.props = e,
                this.context = t,
                this.refs = {}
            }
            var t = e.prototype;
            return t.setState = function(e, t) {
                this.updater.setState(this, e, t)
            }
            ,
            t.forceUpdate = function(e) {
                this.updater.forceUpdate(this, e)
            }
            ,
            e
        }()
          , re = function(e) {
            function t(t, n) {
                return (n = e.call(this, t, n) || this).R = !0,
                n
            }
            return G(t, e),
            t
        }(ne)
          , oe = 1
          , ie = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.P = [],
                t.x = oe++,
                t
            }
            G(t, e);
            var n = t.prototype;
            return n.w = function() {
                return this.A().w()
            }
            ,
            n.A = function() {
                return this[R][D]
            }
            ,
            n.u = function(e) {
                this.P = e,
                this.forceUpdate()
            }
            ,
            n.render = function() {
                return this.P
            }
            ,
            t
        }(ne)
          , ae = {
            set: function(e, n) {
                e._r || (e._r = n).x && (t.rootInstances[n.x] = n,
                t.rootComponents[n.x] = n[R])
            },
            get: function(e) {
                return e._r
            },
            remove: function(e) {
                var n = this.get(e);
                n && (e._r = null,
                n.x && (delete t.rootComponents[n.x],
                delete t.rootInstances[n.x]))
            },
            mount: function(e, n, r) {
                var o = r.parent
                  , i = r.hydrate;
                r = t.driver;
                null == n && (n = r.createBody()),
                i = {
                    element: e,
                    container: n,
                    hydrate: i
                },
                r.beforeRender && r.beforeRender(i),
                o && (s = (a = o[R]).S(a._context));
                var a = this.get(n);
                if (a && a.x)
                    return s && (a[R].D = s),
                    a.u(e),
                    r.afterRender && r.afterRender(i),
                    a;
                var s = Z(E(ie)).d(n, o, s || {});
                return this.set(n, s),
                s.u(e),
                r.afterRender && r.afterRender(i),
                s
            }
        }
          , se = Object.assign
          , ce = "style"
          , ue = "children"
          , le = /^on[A-Z]/
          , fe = function(e) {
            function n() {
                return e.apply(this, arguments) || this
            }
            G(n, e);
            var i = n.prototype;
            return i.d = function(e, t, n, r) {
                this.a(e, t, n);
                var o = this.l
                  , i = o.props
                  , a = o.type;
                e = i[ue],
                t = i.append || "tree";
                return this.H = se({}, i[ce]),
                ((i = {
                    type: a,
                    props: i
                })[R] = this)[I] = i,
                "tree" === t ? (this.N(e, n),
                this._(r)) : (this._(r),
                this.N(e, n)),
                o && o.ref && X(o._owner, o.ref, this),
                i
            }
            ,
            i.N = function(e, t) {
                if (null == e)
                    return e;
                var n = this.p();
                return this.U(n, H(e), t)
            }
            ,
            i.U = function(e, t, n, r) {
                for (var o = this.k = {}, i = [], a = 0, s = t.length; a < s; a++) {
                    var c = t[a]
                      , u = Z(c);
                    (o[ee(o, c, a)] = u).I = a,
                    u = u.d(e, this[I], n, r),
                    i.push(u)
                }
                return i
            }
            ,
            i.F = function(e) {
                var t = this.k;
                if (t) {
                    for (var n in t)
                        t[n].unmountComponent(e);
                    this.k = null
                }
            }
            ,
            i.unmountComponent = function(e) {
                var n;
                this[N] && ((n = this.l.ref) && Y(this.l._owner, n, this),
                ae.remove(this[N]),
                e || t.driver.removeChild(this[N], this._parent)),
                this.F(!0),
                this.H = null,
                this.v()
            }
            ,
            i.y = function(e, t, n, r) {
                K(e, this.l = t, this),
                e = e.props,
                t = t.props,
                this.L(e, t),
                null == e[ue] || s(e[ue]) && 0 === e[ue].length ? this.N(t[ue], r) : this.M(t[ue], r)
            }
            ,
            i.L = function(e, n) {
                var r, i, a, s, c = t.driver, u = this.p();
                for (r in e)
                    if (r !== ue && null != e[r] && !n.hasOwnProperty(r))
                        if (r === ce) {
                            for (i in this.H)
                                (a = a || {})[i] = "";
                            this.H = null
                        } else
                            le.test(r) ? o(s = e[r]) && c.removeEventListener(u, r.slice(2).toLowerCase(), s) : c.removeAttribute(u, r, e[r]);
                for (r in n) {
                    var l, f = n[r], d = r === ce ? this.H : null != e ? e[r] : void 0;
                    if (r !== ue && d !== f && (null != f || null != d))
                        if (r === ce)
                            if (f ? f = this.H = se({}, f) : this.H = null,
                            null != d) {
                                for (i in d)
                                    f && (f[i] || 0 === f[i]) || ((a = a || {})[i] = "");
                                for (i in f)
                                    d[i] !== f[i] && ((a = a || {})[i] = f[i])
                            } else
                                a = f;
                        else
                            le.test(r) ? (l = r.slice(2).toLowerCase(),
                            o(d) && c.removeEventListener(u, l, d, n),
                            o(f) && c.addEventListener(u, l, f, n)) : null != f ? c.setAttribute(u, r, f) : c.removeAttribute(u, r, e[r])
                }
                a && c.setStyle(u, a)
            }
            ,
            i.M = function(e, n) {
                var o = this.k
                  , i = t.driver;
                if (null != e || null != o) {
                    var a = {};
                    if (null != e)
                        for (var c = 0, u = (e = H(e)).length; c < u; c++) {
                            var l = e[c]
                              , f = ee(a, l, c)
                              , d = o && o[f]
                              , p = d && d.l
                              , h = d && d._context;
                            null != d && Q(p, l) ? (p === l && h === n || d.y(p, l, n, n),
                            a[f] = d) : (d && (d.T = !0),
                            a[f] = Z(l))
                        }
                    var v = this.p()
                      , m = s(v)
                      , g = null
                      , y = null
                      , b = !1
                      , w = !1
                      , _ = null
                      , O = !(!i.removeChildren || !(r(e) || e && !e.length) || m);
                    if (null != o) {
                        for (var x in o) {
                            var S = o[x]
                              , k = S.T || !a[x];
                            g ? k && S.unmountComponent(O) : (w = k,
                            s(y = (g = S).p()) && (b = 0 === y.length,
                            y = y[0]))
                        }
                        (m && 0 === v.length || b) && (_ = te(this))
                    }
                    var P, E = function(e, t) {
                        for (var n = 0, r = (e = H(e)).length; n < r; n++)
                            _ ? i.insertAfter(e[r - 1 - n], _) : y ? i.insertBefore(e[n], y) : t && i.appendChild(e[n], t)
                    }, j = 0;
                    for (P in a) {
                        var C, A = a[P], T = o && o[P];
                        T === A ? (C = T.p(),
                        T.I !== j && E(C)) : (m && (v = this._parent),
                        A.d(v, this[I], n, E)),
                        A.I = j++,
                        s(_ = A.p()) && (_ = _[_.length - 1])
                    }
                    w && g.unmountComponent(O),
                    O && i.removeChildren(this[N]),
                    this.k = a
                }
            }
            ,
            i.m = function() {
                var e = this[I]
                  , n = t.driver.createElement(e.type, e.props, this);
                return ae.set(n, e),
                n
            }
            ,
            n
        }(J)
          , de = function(e) {
            function n() {
                return e.apply(this, arguments) || this
            }
            G(n, e);
            var r = n.prototype;
            return r.y = function(e, n) {
                e !== (n = "" + n) && (this.l = n,
                t.driver.updateText(this.p(), n))
            }
            ,
            r.m = function() {
                return t.driver.createText(this.l, this)
            }
            ,
            n
        }(J)
          , pe = function(e) {
            function t(t, n) {
                var r = e.call(this) || this;
                r.V = !0,
                r.W = t,
                r.Z = 0,
                r.$ = 0,
                r.q = {},
                r.r = !1,
                r.e = !1,
                r.z = null,
                r.B = {},
                r.didMount = [],
                r.didUpdate = [],
                r.willUnmount = [],
                r.state = f,
                t._forwardRef && (r.G = r._forwardRef = n);
                var o = t.J;
                return o && (r.shouldComponentUpdate = function(e) {
                    for (var t = !0, n = o.length - 1; -1 < n && !(t = o[n](r.props, e)); n--)
                        ;
                    return !t || r.G !== r._forwardRef
                }
                ),
                r
            }
            G(t, e);
            var n = t.prototype;
            return n.getHooks = function() {
                return this.q
            }
            ,
            n.getHookID = function() {
                return ++this.Z
            }
            ,
            n.useContext = function(e) {
                var t, n, r = this, o = e._contextID, i = this.B[o];
                return i || (t = e.K(this),
                i = this.B[o] = {
                    Q: t
                },
                t && (t.X(n = function(e) {
                    i.Y !== e && (r.e = !0,
                    r.u())
                }
                ),
                this.willUnmount.push((function() {
                    return t.nn(n)
                }
                )))),
                i.Y = i.Q ? i.Q.getValue() : e._defaultValue
            }
            ,
            n.componentWillMount = function() {
                this.e = !0
            }
            ,
            n.componentDidMount = function() {
                j(this.didMount)
            }
            ,
            n.componentWillReceiveProps = function() {
                this.e = !0
            }
            ,
            n.componentDidUpdate = function() {
                j(this.didUpdate)
            }
            ,
            n.componentWillUnmount = function() {
                j(this.willUnmount)
            }
            ,
            n.u = function() {
                this[R].tn = !0,
                this.setState(f)
            }
            ,
            n.render = function() {
                this.Z = 0,
                this.$ = 0,
                this.r = !1;
                for (var e = this.W(this.props, this._forwardRef || this.context); this.r; )
                    this.$++,
                    24 < this.$ && S(4),
                    this.Z = 0,
                    this.r = !1,
                    e = this.W(this.props, this._forwardRef || this.context);
                return this.e && (this.z = e,
                this.e = !1),
                this.z
            }
            ,
            t
        }(ne)
          , he = [];
        function ve(e) {
            return e.in
        }
        function me(e) {
            var n, r, o = e[R];
            o && (t.t = !0,
            n = o.l,
            r = o._context,
            e = o.D || r,
            o.D = void 0,
            (ve(o) || o.tn) && (o.y(n, n, r, e),
            g(v)),
            t.t = !1)
        }
        function ge(e, t) {
            return t[R]._mountID - e[R]._mountID
        }
        function ye() {
            if (t.t)
                return y(ye);
            var e, n = he;
            if (0 < n.length)
                for (_(),
                he = [],
                1 < n.length && (n = n.filter((function(e) {
                    return !!e[R]
                }
                )).sort(ge)); e = n.pop(); )
                    me(e)
        }
        function be(e, t) {
            ~he.indexOf(e) || he.push(e),
            t ? 1 < he.length || y(ye) : ye()
        }
        function we(e, t, n) {
            var r, o, i = e[R];
            i && (n && (o = n,
            ((r = i).rn || (r.rn = [])).push(o)),
            r = i[D],
            t ? (o = t,
            (ve(t = i) || (t.in = [])).push(o),
            !i.un && r && be(e, !0)) : (i.tn = !0,
            r && be(e)))
        }
        var _e = {
            setState: function(e, n, r) {
                t.t || _(),
                we(e, n, r)
            },
            forceUpdate: function(e, t) {
                we(e, null, t)
            }
        };
        function Oe(e, t, n) {
            try {
                return e()
            } catch (e) {
                n ? n(e) : (r = e,
                (o = q(t, (function(e) {
                    return e.componentDidCatch || e.constructor && e.constructor.getDerivedStateFromError
                }
                ))) ? O((function() {
                    var e = o[R];
                    e && Oe((function() {
                        var e;
                        o.componentDidCatch && o.componentDidCatch(r),
                        o.constructor && o.constructor.getDerivedStateFromError && (e = o.constructor.getDerivedStateFromError(),
                        o.setState(e))
                    }
                    ), e.h)
                }
                )) : m((function() {
                    throw r
                }
                ), 0))
            }
            var r, o
        }
        function xe(e, t) {
            O((function() {
                Oe(e, t)
            }
            ))
        }
        function Se(e, t) {
            e && xe((function() {
                j(e, t)
            }
            ), t)
        }
        var ke = function(e) {
            function n() {
                return e.apply(this, arguments) || this
            }
            G(n, e);
            var r = n.prototype;
            return r.d = function(e, n, r, i) {
                this.a(e, n, r);
                var a, s, c = (e = this.l).type, u = e.ref, l = e.props, f = c.prototype, d = this.en(r);
                if (Oe((function() {
                    f && f.render ? a = new c(l,d) : o(c) ? a = new pe(c,u) : S(6, c)
                }
                ), n),
                a)
                    return a.props = l,
                    a.context = d,
                    a.refs = {},
                    a.updater = _e,
                    void 0 === ((a[R] = this)[I] = a).state && (a.state = null),
                    a.componentWillMount && Oe((function() {
                        a.componentWillMount()
                    }
                    ), a),
                    a.state = (t.owner = this).on(l, d),
                    n = this.rn,
                    this.rn = null,
                    Oe((function() {
                        s = a.render()
                    }
                    ), a),
                    t.owner = null,
                    this[D] = Z(s),
                    this[D].d(this._parent, a, this.S(r), i),
                    !e.type._forwardRef && u && X(e._owner, u, this),
                    a.componentDidMount && xe((function() {
                        a.componentDidMount()
                    }
                    ), a),
                    Se(n, a),
                    a
            }
            ,
            r.unmountComponent = function(e) {
                var t, n, r = this[I];
                r && r.componentWillUnmount && Oe((function() {
                    r.componentWillUnmount()
                }
                ), r),
                null != this[D] && (n = (t = this.l).ref,
                !t.type._forwardRef && n && Y(t._owner, n, this),
                this[D].unmountComponent(e),
                this[D] = null),
                this.in = null,
                this.tn = !1,
                this.v()
            }
            ,
            r.en = function(e) {
                var t = {}
                  , n = this.l.type.contextTypes;
                if (n)
                    for (var r in n)
                        t[r] = e[r];
                return t
            }
            ,
            r.S = function(e) {
                var t;
                return (t = (t = this[I]).getChildContext && t.getChildContext()) ? se({}, e, t) : e
            }
            ,
            r.on = function(e, t) {
                var n = this[I]
                  , r = this.in;
                if (!r)
                    return n.state;
                this.in = null;
                for (var i = se({}, n.state), a = 0; a < r.length; a++) {
                    var s = r[a];
                    se(i, o(s) ? s.call(n, i, e, t) : s)
                }
                return i
            }
            ,
            r.y = function(e, t, n, r) {
                var o = this
                  , i = this[I];
                i && Oe((function() {
                    var n, a;
                    o._context === r ? n = i.context : (n = o.en(r),
                    d = !0),
                    a = t.props,
                    e !== t && (d = !0),
                    d && i.componentWillReceiveProps && (o.un = !0,
                    i.componentWillReceiveProps(a, n),
                    o.un = !1),
                    o.l.type._forwardRef ? (i.G = e.ref,
                    i._forwardRef = t.ref) : K(e, t, o);
                    var s, c = !0, u = i.props, l = i.state, f = o.on(a, n), d = o.rn;
                    o.rn = null,
                    o.tn || (i.shouldComponentUpdate ? c = i.shouldComponentUpdate(a, f, n) : i.R && (c = !T(u, a) || !T(l, f))),
                    c ? (o.tn = !1,
                    s = i.context,
                    i.componentWillUpdate && i.componentWillUpdate(a, f, n),
                    o.l = t,
                    o._context = r,
                    i.props = a,
                    i.state = f,
                    i.context = n,
                    o.fn(r),
                    i.componentDidUpdate && xe((function() {
                        i.componentDidUpdate(u, l, s)
                    }
                    ), i)) : (o.l = t,
                    o._context = r,
                    i.props = a,
                    i.state = f,
                    i.context = n),
                    Se(d, i)
                }
                ), i)
            }
            ,
            r.fn = function(e) {
                var n, r, o, i, a, c = this[D], u = c.l, l = this[I];
                t.owner = this,
                n = l.render(),
                t.owner = null,
                Q(u, n) ? (r = c._context,
                o = this.S(e),
                u === n && r === o || c.y(u, n, r, o)) : (i = null,
                s(a = c.p()) && 0 === a.length && null == l.x && (i = te(c)),
                c.unmountComponent(!0),
                this[D] = Z(n),
                this[D].d(this._parent, l, this.S(e), (function(e, n) {
                    var r = t.driver;
                    a = H(a),
                    e = H(e);
                    for (var o = 0; o < e.length; o++) {
                        var s = e[o];
                        a[o] ? r.replaceChild(s, a[o]) : i ? r.insertAfter(s, i) : r.appendChild(s, n),
                        i = s
                    }
                    for (var c = e.length; c < a.length; c++)
                        r.removeChild(a[c])
                }
                )))
            }
            ,
            r.p = function() {
                var e = this[D];
                if (e)
                    return e.p()
            }
            ,
            r.w = function() {
                var e = this[I];
                return e.V ? null : e
            }
            ,
            n
        }(J)
          , Pe = function(e) {
            function n() {
                return e.apply(this, arguments) || this
            }
            G(n, e);
            var r = n.prototype;
            return r.d = function(e, n, r, o) {
                this.a(e, n, r);
                n = this[I] = {};
                var i = [];
                if ((n[R] = this).U(this._parent, this.l, r, (function(e) {
                    e = H(e);
                    for (var t = 0; t < e.length; t++)
                        i.push(e[t])
                }
                )),
                o)
                    o(i, e);
                else
                    for (var a = 0; a < i.length; a++)
                        t.driver.appendChild(i[a], e);
                return n
            }
            ,
            r.unmountComponent = function(e) {
                if (!e)
                    for (var n = this.p(), r = 0, o = n.length; r < o; r++)
                        t.driver.removeChild(n[r]);
                this.F(!0),
                this.v()
            }
            ,
            r.y = function(e, t, n, r) {
                this.l = t,
                this.M(this.l, r)
            }
            ,
            r.p = function() {
                var e = this.k || {};
                return [].concat.apply([], Object.keys(e).map((function(t) {
                    return e[t].p()
                }
                )))
            }
            ,
            n
        }(fe);
        re = {
            __proto__: null,
            createElement: E,
            createContext: function(e) {
                var t = "_c" + z++;
                function n(e) {
                    return q(e, (function(e) {
                        return e.sn === t
                    }
                    ))
                }
                return {
                    Provider: function() {
                        function n() {
                            this.sn = t,
                            this.cn = []
                        }
                        var r = n.prototype;
                        return r.X = function(e) {
                            this.cn.push(e)
                        }
                        ,
                        r.nn = function(e) {
                            this.cn = this.cn.filter((function(t) {
                                return t !== e
                            }
                            ))
                        }
                        ,
                        r._getChildContext = function() {
                            var e = {};
                            return e[t] = this,
                            e
                        }
                        ,
                        r.getValue = function() {
                            return void 0 !== this.props.value ? this.props.value : e
                        }
                        ,
                        r.componentDidUpdate = function(e) {
                            this.props.value !== e.value && j(this.cn, null, this.getValue())
                        }
                        ,
                        r.render = function() {
                            return this.props.children
                        }
                        ,
                        n
                    }(),
                    Consumer: function(r, i) {
                        var a = this
                          , s = V((function() {
                            return i[t] || n(a)
                        }
                        ))[0]
                          , c = s ? s.getValue() : e
                          , u = V(c)
                          , l = u[1];
                        if (c === u[0])
                            return W((function() {
                                if (s)
                                    return s.X(l),
                                    function() {
                                        s.nn(l)
                                    }
                            }
                            ), []),
                            o(r = H(r.children)[0]) ? r(c) : void 0;
                        l(c)
                    },
                    _contextID: t,
                    _defaultValue: e,
                    K: n
                }
            },
            createRef: function() {
                return {
                    current: null
                }
            },
            forwardRef: function(e) {
                return e._forwardRef = !0,
                e
            },
            memo: function(e, t) {
                return t = t || T,
                e.J ? e.J.push(t) : e.J = [t],
                e
            },
            Fragment: function(e) {
                return e.children
            },
            render: function(e, n, r, i) {
                var a;
                return o(r) && (i = r,
                r = null),
                a = (a = r = r || f).driver,
                t.O = $,
                t.b = fe,
                t.C = de,
                t.g = Pe,
                t.j = ke,
                (t.driver = a || t.driver) || S(5),
                r = ae.mount(e, n, r).w(),
                i && i.call(r),
                r
            },
            Component: ne,
            version: "1.1.0",
            shared: {
                Host: t,
                Instance: ae,
                Element: n,
                flattenChildren: d
            },
            useState: V,
            useContext: function(e) {
                return L().useContext(e)
            },
            useEffect: function(e, t) {
                F(e, t, !0)
            },
            useLayoutEffect: W,
            useRef: function(e) {
                var t = L()
                  , n = t.getHookID();
                return (t = t.getHooks())[n] || (t[n] = {
                    current: e
                }),
                t[n]
            },
            useCallback: function(e, t) {
                return U((function() {
                    return e
                }
                ), t)
            },
            useMemo: U,
            useReducer: function(e, n, r) {
                var i = L()
                  , a = i.getHookID()
                  , s = i.getHooks()
                  , c = s[a];
                if (!c)
                    return n = o(r) ? r(n) : n,
                    s[a] = [n, function(e) {
                        t.t || _();
                        var n, r, o = s[a][2];
                        M() === i ? (o.hn.push(e),
                        i.r = !0) : A(r = (0,
                        o.ln)(n = o.an, e), n) || (o.an = r,
                        o.hn.push(e),
                        i.u())
                    }
                    , {
                        hn: [],
                        ln: e,
                        an: n
                    }];
                var u = c[2]
                  , l = c[0];
                if (0 < i.$)
                    for (var f = 0; f < u.hn.length; f++)
                        l = e(l, u.hn[f]);
                else
                    l = u.an;
                return A(l, c[0]) || (c[0] = l,
                i.e = !0),
                u.ln = e,
                u.an = l,
                u.hn.length = 0,
                s[a]
            },
            useImperativeHandle: function(e, t, n) {
                W((function() {
                    return o(e) ? (e(t()),
                    function() {
                        return e(null)
                    }
                    ) : null != e ? (e.current = t(),
                    function() {
                        e.current = null
                    }
                    ) : void 0
                }
                ), s(n) ? n.concat([e]) : null)
            },
            PureComponent: re
        },
        e.exports = re
    }()
}
, function(e, t) {
    "undefined" == typeof window && (window = {
        ctrl: {},
        lib: {}
    }),
    !window.ctrl && (window.ctrl = {}),
    !window.lib && (window.lib = {}),
    function(e, t) {
        function n() {
            var e = {}
              , t = new l((function(t, n) {
                e.resolve = t,
                e.reject = n
            }
            ));
            return e.promise = t,
            e
        }
        function r(e, t) {
            for (var n in t)
                void 0 === e[n] && (e[n] = t[n]);
            return e
        }
        function o(e) {
            var t = [];
            for (var n in e)
                e[n] && t.push(n + "=" + encodeURIComponent(e[n]));
            return t.join("&")
        }
        function i(e) {
            return "[object Object]" == {}.toString.call(e)
        }
        function a(e) {
            var t = new RegExp("(?:^|;\\s*)" + e + "\\=([^;]+)(?:;\\s*|$)").exec(document.cookie);
            return t ? t[1] : void 0
        }
        function s(e, t, n) {
            var r = new Date;
            r.setTime(r.getTime() - 864e5);
            document.cookie = e + "=;path=/;domain=." + t + ";expires=" + r.toGMTString(),
            document.cookie = e + "=;path=/;domain=." + n + "." + t + ";expires=" + r.toGMTString()
        }
        function c(e, t) {
            for (var n = e.split("."), r = t.split("."), o = 0; 3 > o; o++) {
                var i = Number(n[o])
                  , a = Number(r[o]);
                if (i > a)
                    return 1;
                if (a > i)
                    return -1;
                if (!isNaN(i) && isNaN(a))
                    return 1;
                if (isNaN(i) && !isNaN(a))
                    return -1
            }
            return 0
        }
        function u(e) {
            this.id = "" + (new Date).getTime() + ++g,
            this.params = r(e || {}, {
                v: "*",
                data: {},
                type: "get",
                dataType: "jsonp"
            }),
            this.params.type = this.params.type.toLowerCase(),
            "object" == typeof this.params.data && (this.params.data = JSON.stringify(this.params.data)),
            this.middlewares = p.slice(0)
        }
        var l = e.Promise
          , f = (l || {
            resolve: function() {}
        }).resolve();
        String.prototype.trim || (String.prototype.trim = function() {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }
        );
        var d = {
            useJsonpResultType: !1,
            safariGoLogin: !0,
            useAlipayJSBridge: !1
        }
          , p = []
          , h = {
            ERROR: -1,
            SUCCESS: 0,
            TOKEN_EXPIRED: 1,
            SESSION_EXPIRED: 2
        };
        (function() {
            var t = e.location.hostname;
            if (!t) {
                var n = e.parent.location.hostname;
                n && ~n.indexOf("zebra.alibaba-inc.com") && (t = n)
            }
            var r = new RegExp("([^.]*?)\\.?((?:" + ["taobao.net", "taobao.com", "tmall.com", "tmall.hk", "alibaba-inc.com"].join(")|(?:").replace(/\./g, "\\.") + "))","i")
              , o = t.match(r) || []
              , i = o[2] || "taobao.com"
              , a = o[1] || "m";
            "taobao.net" !== i || "x" !== a && "waptest" !== a && "daily" !== a ? "taobao.net" === i && "demo" === a ? a = "demo" : "alibaba-inc.com" === i && "zebra" === a ? a = "zebra" : "waptest" !== a && "wapa" !== a && "m" !== a && (a = "m") : a = "waptest";
            var s = "h5api";
            "taobao.net" === i && "waptest" === a && (s = "acs"),
            d.mainDomain = i,
            d.subDomain = a,
            d.prefix = s
        }
        )(),
        function() {
            var t = e.navigator.userAgent
              , n = t.match(/WindVane[\/\s]([\d\.\_]+)/);
            n && (d.WindVaneVersion = n[1]);
            var r = t.match(/AliApp\(([^\/]+)\/([\d\.\_]+)\)/i);
            r && (d.AliAppName = r[1],
            d.AliAppVersion = r[2]);
            var o = t.match(/AMapClient\/([\d\.\_]+)/i);
            o && (d.AliAppName = "AMAP",
            d.AliAppVersion = o[1])
        }();
        var v = /[Android|Adr]/.test(e.navigator.userAgent)
          , m = "AP" === d.AliAppName && c(d.AliAppVersion, "10.1.2") >= 0 || "KB" === d.AliAppName && c(d.AliAppVersion, "7.1.62") >= 0 || v && "AMAP" === d.AliAppName && c(d.AliAppVersion, "1.0.1") >= 0
          , g = 0;
        u.prototype.use = function(e) {
            if (!e)
                throw new Error("middleware is undefined");
            return this.middlewares.push(e),
            this
        }
        ,
        u.prototype.__processRequestMethod = function(e) {
            var t = this.params
              , n = this.options;
            "get" === t.type && "jsonp" === t.dataType ? n.getJSONP = !0 : "get" === t.type && "originaljsonp" === t.dataType ? n.getOriginalJSONP = !0 : "get" === t.type && "json" === t.dataType ? n.getJSON = !0 : "post" === t.type && (n.postJSON = !0),
            e()
        }
        ,
        u.prototype.__processRequestType = function(n) {
            var r = this
              , o = this.params
              , a = this.options;
            if (!0 === d.H5Request && (a.H5Request = !0),
            !0 === d.WindVaneRequest && (a.WindVaneRequest = !0),
            !1 === a.H5Request && !0 === a.WindVaneRequest) {
                if (!m && (!t.windvane || parseFloat(a.WindVaneVersion) < 5.4))
                    throw new Error("WINDVANE_NOT_FOUND::\u7f3a\u5c11WindVane\u73af\u5883");
                if (m && !e.AlipayJSBridge)
                    throw new Error("ALIPAY_NOT_READY::\u652f\u4ed8\u5b9d\u901a\u9053\u672a\u51c6\u5907\u597d\uff0c\u652f\u4ed8\u5b9d\u8bf7\u89c1 https://lark.alipay.com/mtbsdkdocs/mtopjssdkdocs/pucq6z")
            } else if (!0 === a.H5Request)
                a.WindVaneRequest = !1;
            else if (void 0 === a.WindVaneRequest && void 0 === a.H5Request) {
                if (t.windvane && parseFloat(a.WindVaneVersion) >= 5.4 ? a.WindVaneRequest = !0 : a.H5Request = !0,
                m) {
                    if (a.WindVaneRequest = a.H5Request = void 0,
                    e.AlipayJSBridge)
                        if (i(o.data))
                            a.WindVaneRequest = !0;
                        else
                            try {
                                i(JSON.parse(o.data)) ? a.WindVaneRequest = !0 : a.H5Request = !0
                            } catch (e) {
                                a.H5Request = !0
                            }
                    else
                        a.H5Request = !0;
                    "AMAP" !== d.AliAppName || o.useNebulaJSbridgeWithAMAP || (a.WindVaneRequest = a.H5Request = void 0,
                    a.H5Request = !0)
                }
                window.self !== window.top && (a.H5Request = !0)
            }
            var s = e.navigator.userAgent.toLowerCase();
            return s.indexOf("youku") > -1 && a.mainDomain.indexOf("youku.com") < 0 && (a.WindVaneRequest = !1,
            a.H5Request = !0),
            a.mainDomain.indexOf("youku.com") > -1 && s.indexOf("youku") < 0 && (a.WindVaneRequest = !1,
            a.H5Request = !0),
            n ? n().then((function() {
                var e = a.retJson.ret;
                if (e instanceof Array && (e = e.join(",")),
                !0 === a.WindVaneRequest && m && a.retJson.error || !e || e.indexOf("PARAM_PARSE_ERROR") > -1 || e.indexOf("HY_FAILED") > -1 || e.indexOf("HY_NO_HANDLER") > -1 || e.indexOf("HY_CLOSED") > -1 || e.indexOf("HY_EXCEPTION") > -1 || e.indexOf("HY_NO_PERMISSION") > -1) {
                    if (!m || !isNaN(a.retJson.error) || -1 !== a.retJson.error.indexOf("FAIL_SYS_ACCESS_DENIED"))
                        return m && i(o.data) && (o.data = JSON.stringify(o.data)),
                        d.H5Request = !0,
                        r.__sequence([r.__processRequestType, r.__processToken, r.__processRequestUrl, r.middlewares, r.__processRequest]);
                    void 0 === a.retJson.api && void 0 === a.retJson.v && (a.retJson.api = o.api,
                    a.retJson.v = o.v,
                    a.retJson.ret = [a.retJson.error + "::" + a.retJson.errorMessage],
                    a.retJson.data = {})
                }
            }
            )) : void 0
        }
        ;
        var y = "_m_h5_c"
          , b = "_m_h5_tk";
        u.prototype.__getTokenFromAlipay = function() {
            var t = n()
              , r = this.options
              , o = (e.navigator.userAgent,
            !!location.protocol.match(/^https?\:$/));
            return !0 === r.useAlipayJSBridge && !o && m && e.AlipayJSBridge && e.AlipayJSBridge.call ? e.AlipayJSBridge.call("getMtopToken", (function(e) {
                e && e.token && (r.token = e.token),
                t.resolve()
            }
            ), (function() {
                t.resolve()
            }
            )) : t.resolve(),
            t.promise
        }
        ,
        u.prototype.__getTokenFromCookie = function() {
            var e = this.options;
            return e.CDR && a(y) ? e.token = a(y).split(";")[0] : e.token = e.token || a(b),
            e.token && (e.token = e.token.split("_")[0]),
            l.resolve()
        }
        ,
        u.prototype.__waitWKWebViewCookie = function(t) {
            var n = this.options;
            n.waitWKWebViewCookieFn && n.H5Request && e.webkit && e.webkit.messageHandlers ? n.waitWKWebViewCookieFn(t) : t()
        }
        ,
        u.prototype.__processToken = function(e) {
            var t = this
              , n = this.options;
            return this.params,
            n.token && delete n.token,
            !0 !== n.WindVaneRequest ? f.then((function() {
                return t.__getTokenFromAlipay()
            }
            )).then((function() {
                return t.__getTokenFromCookie()
            }
            )).then(e).then((function() {
                var e = n.retJson
                  , r = e.ret;
                if (r instanceof Array && (r = r.join(",")),
                r.indexOf("TOKEN_EMPTY") > -1 || (!0 === n.CDR || !0 === n.syncCookieMode) && r.indexOf("ILLEGAL_ACCESS") > -1 || r.indexOf("TOKEN_EXOIRED") > -1) {
                    if (n.maxRetryTimes = n.maxRetryTimes || 5,
                    n.failTimes = n.failTimes || 0,
                    n.H5Request && ++n.failTimes < n.maxRetryTimes) {
                        var o = [t.__waitWKWebViewCookie, t.__processToken, t.__processRequestUrl, t.middlewares, t.__processRequest];
                        if (!0 === n.syncCookieMode && t.constructor.__cookieProcessorId !== t.id)
                            if (t.constructor.__cookieProcessor) {
                                o = [function(e) {
                                    var n = function() {
                                        t.constructor.__cookieProcessor = null,
                                        t.constructor.__cookieProcessorId = null,
                                        e()
                                    };
                                    t.constructor.__cookieProcessor ? t.constructor.__cookieProcessor.then(n).catch(n) : e()
                                }
                                , t.__waitWKWebViewCookie, t.__processToken, t.__processRequestUrl, t.middlewares, t.__processRequest]
                            } else
                                t.constructor.__cookieProcessor = t.__requestProcessor,
                                t.constructor.__cookieProcessorId = t.id;
                        return t.__sequence(o)
                    }
                    n.maxRetryTimes > 0 && (s(y, n.pageDomain, "*"),
                    s(b, n.mainDomain, n.subDomain),
                    s("_m_h5_tk_enc", n.mainDomain, n.subDomain)),
                    e.retType = h.TOKEN_EXPIRED
                }
            }
            )) : void e()
        }
        ,
        u.prototype.__processRequestUrl = function(t) {
            var n = this.params
              , r = this.options;
            if (r.hostSetting && r.hostSetting[e.location.hostname]) {
                var o = r.hostSetting[e.location.hostname];
                o.prefix && (r.prefix = o.prefix),
                o.subDomain && (r.subDomain = o.subDomain),
                o.mainDomain && (r.mainDomain = o.mainDomain)
            }
            if (!0 === r.H5Request) {
                var i = "//" + (r.prefix ? r.prefix + "." : "") + (r.subDomain ? r.subDomain + "." : "") + r.mainDomain + "/h5/" + n.api.toLowerCase() + "/" + n.v.toLowerCase() + "/"
                  , a = n.appKey || ("waptest" === r.subDomain ? "4272" : "12574478")
                  , s = (new Date).getTime()
                  , c = function(e) {
                    function t(e, t) {
                        return e << t | e >>> 32 - t
                    }
                    function n(e, t) {
                        var n, r, o, i, a;
                        return o = 2147483648 & e,
                        i = 2147483648 & t,
                        a = (1073741823 & e) + (1073741823 & t),
                        (n = 1073741824 & e) & (r = 1073741824 & t) ? 2147483648 ^ a ^ o ^ i : n | r ? 1073741824 & a ? 3221225472 ^ a ^ o ^ i : 1073741824 ^ a ^ o ^ i : a ^ o ^ i
                    }
                    function r(e, r, o, i, a, s, c) {
                        return e = n(e, n(n(function(e, t, n) {
                            return e & t | ~e & n
                        }(r, o, i), a), c)),
                        n(t(e, s), r)
                    }
                    function o(e, r, o, i, a, s, c) {
                        return e = n(e, n(n(function(e, t, n) {
                            return e & n | t & ~n
                        }(r, o, i), a), c)),
                        n(t(e, s), r)
                    }
                    function i(e, r, o, i, a, s, c) {
                        return e = n(e, n(n(function(e, t, n) {
                            return e ^ t ^ n
                        }(r, o, i), a), c)),
                        n(t(e, s), r)
                    }
                    function a(e, r, o, i, a, s, c) {
                        return e = n(e, n(n(function(e, t, n) {
                            return t ^ (e | ~n)
                        }(r, o, i), a), c)),
                        n(t(e, s), r)
                    }
                    function s(e) {
                        var t, n = "", r = "";
                        for (t = 0; 3 >= t; t++)
                            n += (r = "0" + (e >>> 8 * t & 255).toString(16)).substr(r.length - 2, 2);
                        return n
                    }
                    var c, u, l, f, d, p, h, v, m, g;
                    for (g = function(e) {
                        for (var t, n = e.length, r = n + 8, o = 16 * ((r - r % 64) / 64 + 1), i = new Array(o - 1), a = 0, s = 0; n > s; )
                            a = s % 4 * 8,
                            i[t = (s - s % 4) / 4] = i[t] | e.charCodeAt(s) << a,
                            s++;
                        return a = s % 4 * 8,
                        i[t = (s - s % 4) / 4] = i[t] | 128 << a,
                        i[o - 2] = n << 3,
                        i[o - 1] = n >>> 29,
                        i
                    }(e = function(e) {
                        e = e.replace(/\r\n/g, "\n");
                        for (var t = "", n = 0; n < e.length; n++) {
                            var r = e.charCodeAt(n);
                            128 > r ? t += String.fromCharCode(r) : r > 127 && 2048 > r ? (t += String.fromCharCode(r >> 6 | 192),
                            t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224),
                            t += String.fromCharCode(r >> 6 & 63 | 128),
                            t += String.fromCharCode(63 & r | 128))
                        }
                        return t
                    }(e)),
                    p = 1732584193,
                    h = 4023233417,
                    v = 2562383102,
                    m = 271733878,
                    c = 0; c < g.length; c += 16)
                        u = p,
                        l = h,
                        f = v,
                        d = m,
                        p = r(p, h, v, m, g[c + 0], 7, 3614090360),
                        m = r(m, p, h, v, g[c + 1], 12, 3905402710),
                        v = r(v, m, p, h, g[c + 2], 17, 606105819),
                        h = r(h, v, m, p, g[c + 3], 22, 3250441966),
                        p = r(p, h, v, m, g[c + 4], 7, 4118548399),
                        m = r(m, p, h, v, g[c + 5], 12, 1200080426),
                        v = r(v, m, p, h, g[c + 6], 17, 2821735955),
                        h = r(h, v, m, p, g[c + 7], 22, 4249261313),
                        p = r(p, h, v, m, g[c + 8], 7, 1770035416),
                        m = r(m, p, h, v, g[c + 9], 12, 2336552879),
                        v = r(v, m, p, h, g[c + 10], 17, 4294925233),
                        h = r(h, v, m, p, g[c + 11], 22, 2304563134),
                        p = r(p, h, v, m, g[c + 12], 7, 1804603682),
                        m = r(m, p, h, v, g[c + 13], 12, 4254626195),
                        v = r(v, m, p, h, g[c + 14], 17, 2792965006),
                        p = o(p, h = r(h, v, m, p, g[c + 15], 22, 1236535329), v, m, g[c + 1], 5, 4129170786),
                        m = o(m, p, h, v, g[c + 6], 9, 3225465664),
                        v = o(v, m, p, h, g[c + 11], 14, 643717713),
                        h = o(h, v, m, p, g[c + 0], 20, 3921069994),
                        p = o(p, h, v, m, g[c + 5], 5, 3593408605),
                        m = o(m, p, h, v, g[c + 10], 9, 38016083),
                        v = o(v, m, p, h, g[c + 15], 14, 3634488961),
                        h = o(h, v, m, p, g[c + 4], 20, 3889429448),
                        p = o(p, h, v, m, g[c + 9], 5, 568446438),
                        m = o(m, p, h, v, g[c + 14], 9, 3275163606),
                        v = o(v, m, p, h, g[c + 3], 14, 4107603335),
                        h = o(h, v, m, p, g[c + 8], 20, 1163531501),
                        p = o(p, h, v, m, g[c + 13], 5, 2850285829),
                        m = o(m, p, h, v, g[c + 2], 9, 4243563512),
                        v = o(v, m, p, h, g[c + 7], 14, 1735328473),
                        p = i(p, h = o(h, v, m, p, g[c + 12], 20, 2368359562), v, m, g[c + 5], 4, 4294588738),
                        m = i(m, p, h, v, g[c + 8], 11, 2272392833),
                        v = i(v, m, p, h, g[c + 11], 16, 1839030562),
                        h = i(h, v, m, p, g[c + 14], 23, 4259657740),
                        p = i(p, h, v, m, g[c + 1], 4, 2763975236),
                        m = i(m, p, h, v, g[c + 4], 11, 1272893353),
                        v = i(v, m, p, h, g[c + 7], 16, 4139469664),
                        h = i(h, v, m, p, g[c + 10], 23, 3200236656),
                        p = i(p, h, v, m, g[c + 13], 4, 681279174),
                        m = i(m, p, h, v, g[c + 0], 11, 3936430074),
                        v = i(v, m, p, h, g[c + 3], 16, 3572445317),
                        h = i(h, v, m, p, g[c + 6], 23, 76029189),
                        p = i(p, h, v, m, g[c + 9], 4, 3654602809),
                        m = i(m, p, h, v, g[c + 12], 11, 3873151461),
                        v = i(v, m, p, h, g[c + 15], 16, 530742520),
                        p = a(p, h = i(h, v, m, p, g[c + 2], 23, 3299628645), v, m, g[c + 0], 6, 4096336452),
                        m = a(m, p, h, v, g[c + 7], 10, 1126891415),
                        v = a(v, m, p, h, g[c + 14], 15, 2878612391),
                        h = a(h, v, m, p, g[c + 5], 21, 4237533241),
                        p = a(p, h, v, m, g[c + 12], 6, 1700485571),
                        m = a(m, p, h, v, g[c + 3], 10, 2399980690),
                        v = a(v, m, p, h, g[c + 10], 15, 4293915773),
                        h = a(h, v, m, p, g[c + 1], 21, 2240044497),
                        p = a(p, h, v, m, g[c + 8], 6, 1873313359),
                        m = a(m, p, h, v, g[c + 15], 10, 4264355552),
                        v = a(v, m, p, h, g[c + 6], 15, 2734768916),
                        h = a(h, v, m, p, g[c + 13], 21, 1309151649),
                        p = a(p, h, v, m, g[c + 4], 6, 4149444226),
                        m = a(m, p, h, v, g[c + 11], 10, 3174756917),
                        v = a(v, m, p, h, g[c + 2], 15, 718787259),
                        h = a(h, v, m, p, g[c + 9], 21, 3951481745),
                        p = n(p, u),
                        h = n(h, l),
                        v = n(v, f),
                        m = n(m, d);
                    return (s(p) + s(h) + s(v) + s(m)).toLowerCase()
                }(r.token + "&" + s + "&" + a + "&" + n.data)
                  , u = {
                    jsv: "2.6.1",
                    appKey: a,
                    t: s,
                    sign: c
                }
                  , l = {
                    data: n.data,
                    ua: n.ua
                };
                Object.keys(n).forEach((function(e) {
                    void 0 === u[e] && void 0 === l[e] && "headers" !== e && "ext_headers" !== e && "ext_querys" !== e && (u[e] = n[e])
                }
                )),
                n.ext_querys && Object.keys(n.ext_querys).forEach((function(e) {
                    u[e] = n.ext_querys[e]
                }
                )),
                r.getJSONP ? u.type = "jsonp" : r.getOriginalJSONP ? u.type = "originaljsonp" : (r.getJSON || r.postJSON) && (u.type = "originaljson"),
                void 0 !== n.valueType && ("original" === n.valueType ? r.getJSONP || r.getOriginalJSONP ? u.type = "originaljsonp" : (r.getJSON || r.postJSON) && (u.type = "originaljson") : "string" === n.valueType && (r.getJSONP || r.getOriginalJSONP ? u.type = "jsonp" : (r.getJSON || r.postJSON) && (u.type = "json"))),
                !0 === r.useJsonpResultType && "originaljson" === u.type && delete u.type,
                r.dangerouslySetProtocol && (i = r.dangerouslySetProtocol + ":" + i),
                r.querystring = u,
                r.postdata = l,
                r.path = i
            }
            t()
        }
        ,
        u.prototype.__processUnitPrefix = function(e) {
            e()
        }
        ;
        var w = 0;
        u.prototype.__requestJSONP = function(e) {
            function t(e) {
                if (u && clearTimeout(u),
                l.parentNode && l.parentNode.removeChild(l),
                "TIMEOUT" === e)
                    window[c] = function() {
                        window[c] = void 0;
                        try {
                            delete window[c]
                        } catch (e) {}
                    }
                    ;
                else {
                    window[c] = void 0;
                    try {
                        delete window[c]
                    } catch (e) {}
                }
            }
            var r = n()
              , i = this.params
              , a = this.options
              , s = i.timeout || 2e4
              , c = "mtopjsonp" + (i.jsonpIncPrefix || "") + ++w
              , u = setTimeout((function() {
                e(a.timeoutErrMsg || "TIMEOUT::\u63a5\u53e3\u8d85\u65f6"),
                t("TIMEOUT")
            }
            ), s);
            a.querystring.callback = c;
            var l = document.createElement("script");
            return l.src = a.path + "?" + o(a.querystring) + "&" + o(a.postdata),
            l.async = !0,
            l.onerror = function() {
                t("ABORT"),
                e(a.abortErrMsg || "ABORT::\u63a5\u53e3\u5f02\u5e38\u9000\u51fa")
            }
            ,
            window[c] = function() {
                a.results = Array.prototype.slice.call(arguments),
                t(),
                r.resolve()
            }
            ,
            function(e) {
                (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0] || document.firstElementChild || document).appendChild(e)
            }(l),
            r.promise
        }
        ,
        u.prototype.__requestJSON = function(t) {
            function r(e) {
                f && clearTimeout(f),
                "TIMEOUT" === e && u.abort()
            }
            var i = n()
              , s = this.params
              , c = this.options
              , u = new e.XMLHttpRequest
              , l = s.timeout || 2e4
              , f = setTimeout((function() {
                t(c.timeoutErrMsg || "TIMEOUT::\u63a5\u53e3\u8d85\u65f6"),
                r("TIMEOUT")
            }
            ), l);
            c.CDR && a(y) && (c.querystring.c = decodeURIComponent(a(y))),
            u.onreadystatechange = function() {
                if (4 == u.readyState) {
                    var e, n, o = u.status;
                    if (o >= 200 && 300 > o || 304 == o) {
                        r(),
                        e = u.responseText,
                        n = u.getAllResponseHeaders() || "";
                        try {
                            (e = /^\s*$/.test(e) ? {} : JSON.parse(e)).responseHeaders = n,
                            c.results = [e],
                            i.resolve()
                        } catch (e) {
                            t("PARSE_JSON_ERROR::\u89e3\u6790JSON\u5931\u8d25")
                        }
                    } else
                        r("ABORT"),
                        t(c.abortErrMsg || "ABORT::\u63a5\u53e3\u5f02\u5e38\u9000\u51fa")
                }
            }
            ;
            var d, p, h = c.path + "?" + o(c.querystring);
            c.getJSON ? (d = "GET",
            h += "&" + o(c.postdata)) : c.postJSON && (d = "POST",
            p = o(c.postdata)),
            u.open(d, h, !0),
            u.withCredentials = !0,
            u.setRequestHeader("Accept", "application/json"),
            u.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            var v = s.ext_headers || s.headers;
            if (v)
                for (var m in v)
                    u.setRequestHeader(m, v[m]);
            return u.send(p),
            i.promise
        }
        ,
        u.prototype.__requestWindVane = function() {
            function e(e) {
                i.results = [e],
                r.resolve()
            }
            var r = n()
              , o = this.params
              , i = this.options
              , a = o.data
              , s = o.api
              , c = o.v
              , u = i.postJSON ? 1 : 0
              , l = i.getJSON || i.postJSON || i.getOriginalJSONP ? "originaljson" : "";
            void 0 !== o.valueType && ("original" === o.valueType ? l = "originaljson" : "string" === o.valueType && (l = "")),
            !0 === i.useJsonpResultType && (l = "");
            var f, d, p = "https" === location.protocol ? 1 : 0, h = o.isSec || 0, v = o.sessionOption || "AutoLoginOnly", m = o.ecode || 0, g = o.ext_headers || {}, y = o.ext_querys || {};
            f = 2 * (d = void 0 !== o.timer ? parseInt(o.timer) : void 0 !== o.timeout ? parseInt(o.timeout) : 2e4),
            !0 === o.needLogin && void 0 === o.sessionOption && (v = "AutoLoginAndManualLogin"),
            void 0 !== o.secType && void 0 === o.isSec && (h = o.secType);
            var b = {
                api: s,
                v: c,
                post: String(u),
                type: l,
                isHttps: String(p),
                ecode: String(m),
                isSec: String(h),
                param: JSON.parse(a),
                timer: d,
                sessionOption: v,
                ext_headers: g,
                ext_querys: y
            };
            o.ttid && !0 === i.dangerouslySetWVTtid && (b.ttid = o.ttid),
            Object.assign && o.dangerouslySetWindvaneParams && Object.assign(b, o.dangerouslySetWindvaneParams);
            var w = "MtopWVPlugin";
            return "string" == typeof o.customWindVaneClassName && (w = o.customWindVaneClassName),
            t.windvane.call(w, "send", b, e, e, f),
            r.promise
        }
        ,
        u.prototype.__requestAlipay = function() {
            var t = n()
              , r = this.params
              , o = this.options
              , a = {
                apiName: r.api,
                apiVersion: r.v,
                needEcodeSign: "1" === String(r.ecode),
                headers: r.ext_headers || {},
                usePost: !!o.postJSON
            };
            i(r.data) || (r.data = JSON.parse(r.data)),
            a.data = r.data,
            r.ttid && !0 === o.dangerouslySetWVTtid && (a.ttid = r.ttid),
            (o.getJSON || o.postJSON || o.getOriginalJSONP) && (a.type = "originaljson"),
            void 0 !== r.valueType && ("original" === r.valueType ? a.type = "originaljson" : "string" === r.valueType && delete a.type),
            !0 === o.useJsonpResultType && delete a.type,
            Object.assign && r.dangerouslySetAlipayParams && Object.assign(a, r.dangerouslySetAlipayParams);
            var s = "mtop";
            return "string" == typeof r.customAlipayJSBridgeApi && (s = r.customAlipayJSBridgeApi),
            e.AlipayJSBridge.call(s, a, (function(e) {
                o.results = [e],
                t.resolve()
            }
            )),
            t.promise
        }
        ,
        u.prototype.__processRequest = function(e, t) {
            var n = this;
            return f.then((function() {
                var e = n.options;
                if (e.H5Request && (e.getJSONP || e.getOriginalJSONP))
                    return n.__requestJSONP(t);
                if (e.H5Request && (e.getJSON || e.postJSON))
                    return n.__requestJSON(t);
                if (e.WindVaneRequest)
                    return m ? n.__requestAlipay(t) : n.__requestWindVane(t);
                throw new Error("UNEXCEPT_REQUEST::\u9519\u8bef\u7684\u8bf7\u6c42\u7c7b\u578b")
            }
            )).then(e).then((function() {
                var e = n.options
                  , t = (n.params,
                e.results[0])
                  , r = t && t.ret || [];
                t.ret = r,
                r instanceof Array && (r = r.join(","));
                var o = t.c;
                e.CDR && o && function(e, t, n) {
                    var r = n || {};
                    document.cookie = e.replace(/[^+#$&^`|]/g, encodeURIComponent).replace("(", "%28").replace(")", "%29") + "=" + t.replace(/[^+#$&\/:<-\[\]-}]/g, encodeURIComponent) + (r.domain ? ";domain=" + r.domain : "") + (r.path ? ";path=" + r.path : "") + (r.secure ? ";secure" : "") + (r.httponly ? ";HttpOnly" : "") + (r.sameSite ? ";Samesite=" + r.sameSite : "")
                }(y, o, {
                    domain: e.pageDomain,
                    path: "/",
                    secure: e.secure,
                    sameSite: e.sameSite
                }),
                r.indexOf("SUCCESS") > -1 ? t.retType = h.SUCCESS : t.retType = h.ERROR,
                e.retJson = t
            }
            ))
        }
        ,
        u.prototype.__sequence = function(e) {
            var t = this
              , r = []
              , o = [];
            e.forEach((function e(i) {
                if (i instanceof Array)
                    i.forEach(e);
                else {
                    var a, s = n(), c = n();
                    r.push((function() {
                        return s = n(),
                        (a = i.call(t, (function(e) {
                            return s.resolve(e),
                            c.promise
                        }
                        ), (function(e) {
                            return s.reject(e),
                            c.promise
                        }
                        ))) && (a = a.catch((function(e) {
                            s.reject(e)
                        }
                        ))),
                        s.promise
                    }
                    )),
                    o.push((function(e) {
                        return c.resolve(e),
                        a
                    }
                    ))
                }
            }
            ));
            for (var i, a = f; i = r.shift(); )
                a = a.then(i);
            for (; i = o.pop(); )
                a = a.then(i);
            return a
        }
        ;
        var _ = function(e) {
            e()
        }
          , O = function(e) {
            e()
        };
        u.prototype.request = function(n) {
            var o = this;
            if (this.options = r(n || {}, d),
            !l) {
                var i = "\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301Promise\uff0c\u8bf7\u5728windows\u5bf9\u8c61\u4e0a\u6302\u8f7dPromise\u5bf9\u8c61";
                throw t.mtop = {
                    ERROR: i
                },
                new Error(i)
            }
            var a = l.resolve([_, O]).then((function(e) {
                var t = e[0]
                  , n = e[1];
                return o.__sequence([t, o.__processRequestMethod, o.__processRequestType, o.__processToken, o.__processRequestUrl, o.middlewares, o.__processRequest, n])
            }
            )).then((function() {
                var e = o.options.retJson;
                return e.retType !== h.SUCCESS ? l.reject(e) : o.options.successCallback ? void o.options.successCallback(e) : l.resolve(e)
            }
            )).catch((function(e) {
                var n;
                return e instanceof Error ? (console.error(e.stack),
                n = {
                    ret: [e.message],
                    stack: [e.stack],
                    retJson: h.ERROR
                }) : n = "string" == typeof e ? {
                    ret: [e],
                    retJson: h.ERROR
                } : void 0 !== e ? e : o.options.retJson,
                t.mtop.errorListener && t.mtop.errorListener({
                    api: o.params.api,
                    data: o.params.data,
                    v: o.params.v,
                    retJson: n
                }),
                o.options.failureCallback ? void o.options.failureCallback(n) : l.reject(n)
            }
            ));
            return this.__processRequestType(),
            o.options.H5Request && (o.constructor.__firstProcessor || (o.constructor.__firstProcessor = a),
            _ = function(e) {
                o.constructor.__firstProcessor.then(e).catch(e)
            }
            ),
            ("get" === this.params.type && "json" === this.params.dataType || "post" === this.params.type) && (n.pageDomain = n.pageDomain || function(e) {
                try {
                    return ".com" !== e.substring(e.lastIndexOf(".")) ? (e.split(".") || []).length <= 3 ? e : e.split(".").slice(1).join(".") : e.substring(e.lastIndexOf(".", e.lastIndexOf(".") - 1) + 1)
                } catch (t) {
                    return e.substring(e.lastIndexOf(".", e.lastIndexOf(".") - 1) + 1)
                }
            }(e.location.hostname),
            n.mainDomain !== n.pageDomain && (n.maxRetryTimes = 4,
            n.CDR = !0)),
            this.__requestProcessor = a,
            a
        }
        ,
        t.mtop = function(e) {
            return new u(e)
        }
        ,
        t.mtop.request = function(e, t, n) {
            var r = {
                H5Request: e.H5Request,
                WindVaneRequest: e.WindVaneRequest,
                LoginRequest: e.LoginRequest,
                AntiCreep: e.AntiCreep,
                AntiFlood: e.AntiFlood,
                successCallback: t,
                failureCallback: n || t
            };
            return new u(e).request(r)
        }
        ,
        t.mtop.H5Request = function(e, t, n) {
            return new u(e).request({
                H5Request: !0,
                successCallback: t,
                failureCallback: n || t
            })
        }
        ,
        t.mtop.middlewares = p,
        t.mtop.config = d,
        t.mtop.RESPONSE_TYPE = h,
        t.mtop.CLASS = u
    }(window, window.lib || (window.lib = {})),
    function(e, t) {
        function n(e) {
            return e.preventDefault(),
            !1
        }
        function r(t, r) {
            var o = this
              , i = e.dpr || 1
              , a = document.createElement("div")
              , s = document.documentElement.getBoundingClientRect()
              , c = Math.max(s.width, window.innerWidth) / i
              , u = Math.max(s.height, window.innerHeight) / i;
            a.style.cssText = ["-webkit-transform:scale(" + i + ") translateZ(0)", "-ms-transform:scale(" + i + ") translateZ(0)", "transform:scale(" + i + ") translateZ(0)", "-webkit-transform-origin:0 0", "-ms-transform-origin:0 0", "transform-origin:0 0", "width:" + c + "px", "height:" + u + "px", "z-index:2147483647", "position:" + (c > 800 ? "fixed" : "absolute"), "left:0", "top:0px", "background:" + (c > 800 ? "rgba(0,0,0,.5)" : "#FFF"), "display:none"].join(";");
            var l = document.createElement("div");
            l.style.cssText = ["width:100%", "height:52px", "background:#EEE", "line-height:52px", "text-align:left", "box-sizing:border-box", "padding-left:20px", "position:absolute", "left:0", "top:0", "font-size:16px", "font-weight:bold", "color:#333"].join(";"),
            l.innerText = t;
            var f = navigator.userAgent.match(/.*(iPhone|iPad|Android|ios|SymbianOS|Windows Phone).*/i)
              , d = document.createElement("img");
            d.style.cssText = ["display:block", "position:absolute", "margin-top:15px", "right:0", "top:0", "height:15px", "line-height:52px", "padding:0 20px", "color:#999"].join(";"),
            d.src = "https://gw.alicdn.com/tfs/TB1QZN.CYj1gK0jSZFuXXcrHpXa-200-200.png";
            var p = document.createElement("iframe");
            p.style.cssText = ["width:100%", "height:100%", "border:0", "overflow:hidden"].join(";"),
            f ? (l.appendChild(d),
            a.appendChild(l)) : (d.style.cssText = ["position:absolute", "width:15px", "height:15px", "top:102px", "left:" + (c / 2 - 185 + 390) + "px", "cursor: pointer", "border:0", "z-index:1", "overflow:hidden"].join(";"),
            a.appendChild(d),
            p.style.cssText = ["position:absolute", "top:92px", "left:" + (c / 2 - 185) + "px", "width:420px", "height:320px", "border:0", "background:#FFF", "overflow:hidden"].join(";")),
            a.appendChild(p),
            a.className = "J_MIDDLEWARE_FRAME_WIDGET",
            document.body.appendChild(a),
            p.src = r,
            d.addEventListener("click", (function() {
                o.hide();
                var e = document.createEvent("HTMLEvents");
                e.initEvent("close", !1, !1),
                a.dispatchEvent(e)
            }
            ), !1),
            this.addEventListener = function() {
                a.addEventListener.apply(a, arguments)
            }
            ,
            this.removeEventListener = function() {
                a.removeEventListener.apply(a, arguments)
            }
            ,
            this.show = function() {
                document.addEventListener("touchmove", n, !1),
                a.style.display = "block",
                window.scrollTo(0, 0)
            }
            ,
            this.hide = function() {
                document.removeEventListener("touchmove", n),
                window.scrollTo(0, -s.top),
                a.parentNode && a.parentNode.removeChild(a)
            }
        }
        if (!t || !t.mtop || t.mtop.ERROR)
            throw new Error("Mtop \u521d\u59cb\u5316\u5931\u8d25\uff01");
        var o = e.Promise
          , i = t.mtop.CLASS
          , a = t.mtop.config
          , s = t.mtop.RESPONSE_TYPE;
        t.mtop.middlewares.push((function(e) {
            var n = this
              , r = this.options
              , o = this.params;
            return e().then((function() {
                var e = r.retJson
                  , i = e.ret
                  , c = navigator.userAgent.toLowerCase()
                  , u = c.indexOf("safari") > -1 && c.indexOf("chrome") < 0 && c.indexOf("qqbrowser") < 0;
                if (i instanceof Array && (i = i.join(",")),
                (i.indexOf("SESSION_EXPIRED") > -1 || i.indexOf("SID_INVALID") > -1 || i.indexOf("AUTH_REJECT") > -1 || i.indexOf("NEED_LOGIN") > -1) && (e.retType = s.SESSION_EXPIRED,
                !r.WindVaneRequest && (!0 === a.LoginRequest || !0 === r.LoginRequest || !0 === o.needLogin))) {
                    if (!t.login)
                        throw new Error("LOGIN_NOT_FOUND::\u7f3a\u5c11lib.login");
                    if (!0 !== r.safariGoLogin || !u || "taobao.com" === r.pageDomain)
                        return t.login.goLoginAsync().then((function() {
                            return n.__sequence([n.__processToken, n.__processRequestUrl, n.__processUnitPrefix, n.middlewares, n.__processRequest])
                        }
                        )).catch((function(e) {
                            throw "CANCEL" === e ? new Error("LOGIN_CANCEL::\u7528\u6237\u53d6\u6d88\u767b\u5f55") : new Error("LOGIN_FAILURE::\u7528\u6237\u767b\u5f55\u5931\u8d25")
                        }
                        ));
                    t.login.goLogin()
                }
            }
            ))
        }
        )),
        t.mtop.loginRequest = function(e, t, n) {
            return new i(e).request({
                LoginRequest: !0,
                H5Request: !0,
                successCallback: t,
                failureCallback: n || t
            })
        }
        ,
        t.mtop.antiFloodRequest = function(e, t, n) {
            return new i(e).request({
                AntiFlood: !0,
                successCallback: t,
                failureCallback: n || t
            })
        }
        ,
        t.mtop.middlewares.push((function(e) {
            var t = this.options;
            return this.params,
            !0 !== t.H5Request || !0 !== a.AntiFlood && !0 !== t.AntiFlood ? void e() : e().then((function() {
                var e = t.retJson
                  , n = e.ret;
                n instanceof Array && (n = n.join(",")),
                n.indexOf("FAIL_SYS_USER_VALIDATE") > -1 && e.data.url && (t.AntiFloodReferer ? location.href = e.data.url.replace(/(http_referer=).+/, "$1" + t.AntiFloodReferer) : location.href = e.data.url)
            }
            ))
        }
        )),
        t.mtop.antiCreepRequest = function(e, t, n) {
            return new i(e).request({
                AntiCreep: !0,
                successCallback: t,
                failureCallback: n || t
            })
        }
        ,
        t.mtop.middlewares.push((function(t) {
            var n = this
              , i = this.options
              , s = this.params;
            return !1 !== i.AntiCreep && (i.AntiCreep = !0),
            !0 !== s.forceAntiCreep && !0 !== i.H5Request || !0 !== a.AntiCreep && !0 !== i.AntiCreep ? void t() : t().then((function() {
                var t = i.retJson
                  , a = t.ret;
                if (a instanceof Array && (a = a.join(",")),
                (a.indexOf("RGV587_ERROR::SM") > -1 || a.indexOf("ASSIST_FLAG") > -1) && t.data.url) {
                    var c = "_m_h5_smt"
                      , u = function(e) {
                        var t = new RegExp("(?:^|;\\s*)" + e + "\\=([^;]+)(?:;\\s*|$)").exec(document.cookie);
                        return t ? t[1] : void 0
                    }(c)
                      , l = !1;
                    if (!0 === i.saveAntiCreepToken && u)
                        for (var f in u = JSON.parse(u))
                            s[f] && (l = !0);
                    if (!0 === i.saveAntiCreepToken && u && !l) {
                        for (var f in u)
                            s[f] = u[f];
                        return n.__sequence([n.__processToken, n.__processRequestUrl, n.__processUnitPrefix, n.middlewares, n.__processRequest])
                    }
                    return new o((function(o, a) {
                        function u() {
                            f.removeEventListener("close", u),
                            e.removeEventListener("message", l),
                            a("USER_INPUT_CANCEL::\u7528\u6237\u53d6\u6d88\u8f93\u5165")
                        }
                        function l(t) {
                            var r;
                            try {
                                r = JSON.parse(t.data) || {}
                            } catch (e) {}
                            if (r && "child" === r.type) {
                                var d;
                                f.removeEventListener("close", u),
                                e.removeEventListener("message", l),
                                f.hide();
                                try {
                                    for (var p in "string" == typeof (d = JSON.parse(decodeURIComponent(r.content))) && (d = JSON.parse(d)),
                                    d)
                                        s[p] = d[p];
                                    !0 === i.saveAntiCreepToken ? (document.cookie = c + "=" + JSON.stringify(d) + ";",
                                    e.location.reload()) : n.__sequence([n.__processToken, n.__processRequestUrl, n.__processUnitPrefix, n.middlewares, n.__processRequest]).then(o)
                                } catch (e) {
                                    a("USER_INPUT_FAILURE::\u7528\u6237\u8f93\u5165\u5931\u8d25")
                                }
                            }
                        }
                        var f = new r("",t.data.url);
                        f.addEventListener("close", u, !1),
                        e.addEventListener("message", l, !1),
                        f.show()
                    }
                    ))
                }
            }
            ))
        }
        ))
    }(window, window.lib || (window.lib = {})),
    e.exports = window.lib.mtop
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.default = void 0;
    var r = n(0).shared.flattenChildren;
    function o(e) {
        return e = r(e, []),
        Array.isArray(e) ? e : [].concat(e)
    }
    var i = {
        map: function(e, t, n) {
            return null == e ? null : (e = o(e)).map((function(e, r) {
                return t.call(n, e, r)
            }
            ))
        },
        forEach: function(e, t, n) {
            if (null == e)
                return null;
            (e = o(e)).forEach((function(e, r) {
                return t.call(n, e, r)
            }
            ))
        },
        count: function(e) {
            return null == e ? 0 : o(e).length
        },
        only: function(e) {
            if (1 !== (e = i.toArray(e)).length)
                throw new Error("Children.only: expected to receive a single element child.");
            return e[0]
        },
        toArray: function(e) {
            return null == e ? [] : o(e).filter((function(e) {
                return null !== e
            }
            ))
        }
    }
      , a = i;
    t.default = a
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.default = function(e) {
        var t = r.createElement.bind(null, e);
        return t.type = e,
        t
    }
    ;
    var r = n(0)
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.default = t.render = void 0;
    var r = n(0)
      , o = function(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                }
        return t.default = e,
        t
    }(n(23))
      , i = u(n(37));
    t.hydrate = i.default;
    var a = u(n(24));
    t.unmountComponentAtNode = a.default;
    var s = u(n(16));
    t.findDOMNode = s.default;
    var c = u(n(39));
    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.createPortal = c.default;
    var l = function(e, t, n) {
        return (0,
        r.render)(e, t, {
            driver: o
        }, n)
    };
    t.render = l;
    var f = {
        render: l,
        hydrate: i.default,
        unmountComponentAtNode: a.default,
        findDOMNode: s.default,
        createPortal: c.default
    };
    t.default = f
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.default = void 0;
    var r = n(0)
      , o = function(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                }
        return t.default = e,
        t
    }(n(23));
    t.default = function(e, t, n) {
        (0,
        r.render)(e, t, {
            hydrate: !0,
            driver: o
        }, n)
    }
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.default = function(e) {
        return document.getElementById(e)
    }
    ;
    n(0)
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.default = function(e, t) {
        return (0,
        o.createElement)(a, {
            element: e,
            container: t
        })
    }
    ;
    var r, o = n(0), i = (r = n(24)) && r.__esModule ? r : {
        default: r
    };
    var a = function(e) {
        var t, n;
        function r(t, n) {
            return e.call(this, t, n) || this
        }
        n = e,
        (t = r).prototype = Object.create(n.prototype),
        t.prototype.constructor = t,
        t.__proto__ = n;
        var a = r.prototype;
        return a.componentDidMount = function() {
            this.renderPortal()
        }
        ,
        a.componentDidUpdate = function(e) {
            e.container !== this.props.container && (0,
            i.default)(e.container),
            this.renderPortal()
        }
        ,
        a.componentWillUnmount = function() {
            (0,
            i.default)(this.props.container)
        }
        ,
        a.renderPortal = function() {
            (0,
            o.render)(this.props.element, this.props.container, {
                parent: this
            })
        }
        ,
        a.render = function() {
            return null
        }
        ,
        r
    }(o.Component)
}
, function(e, t) {
    var n, r, o = e.exports = {};
    function i() {
        throw new Error("setTimeout has not been defined")
    }
    function a() {
        throw new Error("clearTimeout has not been defined")
    }
    function s(e) {
        if (n === setTimeout)
            return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout)
            return n = setTimeout,
            setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }
    !function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var c, u = [], l = !1, f = -1;
    function d() {
        l && c && (l = !1,
        c.length ? u = c.concat(u) : f = -1,
        u.length && p())
    }
    function p() {
        if (!l) {
            var e = s(d);
            l = !0;
            for (var t = u.length; t; ) {
                for (c = u,
                u = []; ++f < t; )
                    c && c[f].run();
                f = -1,
                t = u.length
            }
            c = null,
            l = !1,
            function(e) {
                if (r === clearTimeout)
                    return clearTimeout(e);
                if ((r === a || !r) && clearTimeout)
                    return r = clearTimeout,
                    clearTimeout(e);
                try {
                    r(e)
                } catch (t) {
                    try {
                        return r.call(null, e)
                    } catch (t) {
                        return r.call(this, e)
                    }
                }
            }(e)
        }
    }
    function h(e, t) {
        this.fun = e,
        this.array = t
    }
    function v() {}
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        u.push(new h(e,t)),
        1 !== u.length || l || s(p)
    }
    ,
    h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    o.title = "browser",
    o.browser = !0,
    o.env = {},
    o.argv = [],
    o.version = "",
    o.versions = {},
    o.on = v,
    o.addListener = v,
    o.once = v,
    o.off = v,
    o.removeListener = v,
    o.removeAllListeners = v,
    o.emit = v,
    o.prependListener = v,
    o.prependOnceListener = v,
    o.listeners = function() {
        return []
    }
    ,
    o.binding = function() {
        throw new Error("process.binding is not supported")
    }
    ,
    o.cwd = function() {
        return "/"
    }
    ,
    o.chdir = function() {
        throw new Error("process.chdir is not supported")
    }
    ,
    o.umask = function() {
        return 0
    }
}
, function(e, t, n) {}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.default = void 0;
    var r = s(n(43))
      , o = n(0)
      , i = s(n(44))
      , a = s(n(29));
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function c() {
        return (c = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    var u = r.default;
    function l(e) {
        var t = u.__cache || (u.__cache = {})
          , n = function e() {
            var t = []
              , n = arguments[0]
              , r = Object.prototype.toString.call(n).slice(8, -1).toLowerCase();
            if ("string" === r)
                (n = n.trim()) && t.push(n);
            else if ("array" === r)
                n.forEach((function(n) {
                    (n = e(n).trim()) && t.push(n)
                }
                ));
            else if ("object" === r)
                for (var o in n)
                    (o = o.trim()) && n.hasOwnProperty(o) && n[o] && t.push(o);
            return t.join(" ").trim()
        }(e)
          , r = n.split(/\s+/)
          , o = t[n];
        return o || (o = {},
        1 === r.length ? o = u[r[0].trim()] : r.forEach((function(e) {
            "object" == typeof u[e.trim()] && (o = Object.assign(o, u[e.trim()]))
        }
        )),
        t[n] = o),
        o
    }
    t.default = function(e) {
        var t = e.tabList
          , n = e.ui
          , r = e.activeIndex
          , s = e.level
          , f = e.onChange
          , d = e.theme
          , p = "pic-text-vertical" === n.type ? 8 : 6
          , h = p - 1
          , v = Math.min(p, t.length)
          , m = t.length > p
          , g = (0,
        o.useState)(0)
          , y = g[0]
          , b = g[1];
        if (!t || !t.length)
            return null;
        var w = {
            fontSize: "20px",
            fontWeight: "bold"
        };
        return n.iconStyle && (w = c({}, w, n.iconStyle)),
        (0,
        o.useEffect)((function() {
            var e = 0;
            m && 0 !== r && (e = r + 6 - 2 < t.length ? r - 1 : t.length - 6),
            b(e)
        }
        ), [r]),
        (0,
        o.createElement)("div", {
            className: "tab-wrapper level-" + s + " " + (m ? "scroll" : ""),
            style: l("tab-wrapper level-" + s + " " + (m ? "scroll" : ""))
        }, (0,
        o.createElement)("div", {
            className: "tab-inner-wrapper " + n.type,
            style: Object.assign({}, l("tab-inner-wrapper " + n.type), {
                marginLeft: -1 * y * 100 / v + "%",
                width: 100 / v * t.length + "%",
                background: n.backgroundColor
            })
        }, t.map((function(e, t) {
            return (0,
            o.createElement)(i.default, {
                tabIndex: t,
                tab: e,
                activeIndex: r,
                col: v,
                ui: n,
                theme: d,
                onChange: f,
                level: s
            })
        }
        ))), (0,
        o.createElement)("div", {
            className: "pre arrow " + (m && 0 !== y ? "show" : ""),
            onClick: function() {
                b(Math.max(y - h, 0))
            },
            style: l("pre arrow " + (m && 0 !== y ? "show" : ""))
        }, (0,
        o.createElement)("div", {
            className: "blur-wrapper",
            style: u["blur-wrapper"]
        }, (0,
        o.createElement)("div", {
            className: "blur",
            style: u.blur
        })), (0,
        o.createElement)("div", {
            className: "img-wrapper",
            style: Object.assign({}, u["img-wrapper"], {
                background: n.backgroundColor
            })
        }, (0,
        o.createElement)(a.default, {
            type: "icon-arrow-right",
            classname: "rotated",
            style: w
        }))), (0,
        o.createElement)("div", {
            className: "next arrow " + (m && y + p < t.length ? "show" : ""),
            onClick: function() {
                b(Math.min(y + h, t.length - v))
            },
            style: l("next arrow " + (m && y + p < t.length ? "show" : ""))
        }, (0,
        o.createElement)("div", {
            className: "blur-wrapper",
            style: u["blur-wrapper"]
        }, (0,
        o.createElement)("div", {
            className: "blur",
            style: u.blur
        })), (0,
        o.createElement)("div", {
            className: "img-wrapper",
            style: Object.assign({}, u["img-wrapper"], {
                background: n.backgroundColor
            })
        }, (0,
        o.createElement)(a.default, {
            type: "icon-arrow-right",
            style: w
        }))))
    }
}
, function(e, t, n) {}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.default = void 0;
    var r = n(21)
      , o = n(0)
      , i = n(45);
    function a() {
        return (a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function s(e, t) {
        return (s = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    var c = function(e) {
        var t, n;
        function c(t) {
            var n = e.call(this, t) || this;
            return n.state = {
                hover: !1
            },
            n
        }
        return n = e,
        (t = c).prototype = Object.create(n.prototype),
        t.prototype.constructor = t,
        s(t, n),
        c.prototype.render = function() {
            var e = this
              , t = this.state.hover
              , n = this.props
              , s = n.tabIndex
              , c = n.activeIndex
              , u = n.col
              , l = n.tab
              , f = n.ui
              , d = n.onChange
              , p = n.level
              , h = c === s || t
              , v = h ? f.textHighlightColor : f.textColor
              , m = h && 1 === p ? f.backgroundHighlightColor : f.backgroundColor
              , g = h ? {
                borderTop: "9px solid " + (1 === p ? f.backgroundHighlightColor : "#FF6A00")
            } : {}
              , y = l.name || l.label || l._serverLabel || l._serverCategoryName;
            return (0,
            o.createElement)(i.DotElement, {
                type: "nav",
                spmd: p + "_" + s,
                dotParams: a({}, l.dotParams),
                key: "tab" + s,
                onClick: function() {
                    d(s)
                },
                style: {
                    width: 100 / u + "%",
                    background: m
                },
                onMouseEnter: function() {
                    e.setState({
                        hover: !0
                    })
                },
                onMouseLeave: function() {
                    e.setState({
                        hover: !1
                    })
                },
                className: (0,
                r.classnames)({
                    "tab-item": !0,
                    active: h
                })
            }, h && (0,
            o.createElement)("div", {
                className: "triangle",
                style: a({}, g)
            }), l.image && "text" !== f.type && (0,
            o.createElement)("div", {
                className: "img-wrapper tab-item-image"
            }, (0,
            o.createElement)("img", {
                className: "image",
                src: l.image
            }), (0,
            o.createElement)("div", {
                class: "poster-mask"
            })), (0,
            o.createElement)("div", {
                className: "text-wrapper",
                title: y
            }, (0,
            o.createElement)("div", {
                className: "text",
                style: {
                    color: v
                }
            }, y)))
        }
        ,
        c
    }(o.Component);
    t.default = c
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.DotElement = void 0;
    var r, o = (r = n(46)) && r.__esModule ? r : {
        default: r
    }, i = n(0), a = n(12), s = n(47);
    t.setNavDotParams = s.setNavDotParams;
    var c = n(48);
    function u() {
        return (u = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    t.dotTabExp = c.dotTabExp,
    t.dotTab = c.dotTab,
    t.dotEntrance = c.dotEntrance,
    t.dotEntranceExp = c.dotEntranceExp,
    t.dotProduct = c.dotProduct,
    t.dotProductExp = c.dotProductExp,
    t.dotSupplier = c.dotSupplier,
    t.dotSupplierExp = c.dotSupplierExp,
    t.dotCustom = c.dotCustom,
    t.dotCustomExp = c.dotCustomExp,
    t.commonDot = c.commonDot;
    var l = function(e, t) {
        var n = {};
        for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
    }
      , f = o.default;
    function d(e) {
        var t = f.__cache || (f.__cache = {})
          , n = function e() {
            var t = []
              , n = arguments[0]
              , r = Object.prototype.toString.call(n).slice(8, -1).toLowerCase();
            if ("string" === r)
                (n = n.trim()) && t.push(n);
            else if ("array" === r)
                n.forEach((function(n) {
                    (n = e(n).trim()) && t.push(n)
                }
                ));
            else if ("object" === r)
                for (var o in n)
                    (o = o.trim()) && n.hasOwnProperty(o) && n[o] && t.push(o);
            return t.join(" ").trim()
        }(e)
          , r = n.split(/\s+/)
          , o = t[n];
        return o || (o = {},
        1 === r.length ? o = f[r[0].trim()] : r.forEach((function(e) {
            "object" == typeof f[e.trim()] && (o = Object.assign(o, f[e.trim()]))
        }
        )),
        t[n] = o),
        o
    }
    var p = a.$env.is.web
      , h = function(e) {
        var t = ""
          , n = ""
          , r = ""
          , o = ""
          , i = function(e) {
            e && (e.attributes && e.attributes["data-spm"] ? (t = e.attributes["data-spm"].value,
            e.attributes.id && (o = e.attributes.id.value || ""),
            e.attributes["data-modulename"] && (n = e.attributes["data-modulename"].value || ""),
            e.attributes["data-moduleversion"] && (r = e.attributes["data-moduleversion"].value || "")) : e && "BODY" !== e.tagName && i(e.parentElement))
        };
        return i(e.srcElement),
        {
            id: o,
            spmc: t,
            moduleName: n,
            moduleVersion: r
        }
    }
      , v = function() {
        var e = "";
        if (!a.$env.is.app && window.location) {
            var t = a.$helper.url.parse(window.location.href);
            t && (e = t.query.spm)
        }
        return e
    }
      , m = ["product", "supplier", "entrance", "nav", "custom"];
    window.dotAppearCache = window.dotAppearCache || {};
    var g = "\u6587\u6863\uff1ahttps://yuque.antfin-inc.com/ncms/oxxyex/kib0mw";
    t.DotElement = function(e) {
        var t = e.style
          , n = e.dotParams
          , r = e.type
          , o = e.dotType
          , f = void 0 === o ? "all" : o
          , y = e.elementTag
          , b = void 0 === y ? "div" : y
          , w = e.onClick
          , _ = e.onAppear
          , O = e.children
          , x = (e.expTime,
        e.url)
          , S = e.className
          , k = e.goldKeyObj
          , P = void 0 === k ? {} : k
          , E = e.device
          , j = l(e, ["style", "dotParams", "type", "dotType", "elementTag", "onClick", "onAppear", "children", "expTime", "url", "className", "goldKeyObj", "device"])
          , C = (n || {}).spmd
          , A = void 0 === C ? "" : C
          , T = a.$env.is.web && !a.$env.is.iOS && !a.$env.is.android;
        "pc" === E ? T = !0 : "mobile" === E && (T = !1);
        var R = (0,
        i.useRef)(null)
          , I = n.floorName;
        n.floorName && (n.floorName = n.floorName.replace(/[^\d_a-zA-Z@\-%]/g, "")),
        (0,
        i.useEffect)((function() {
            var e = !1;
            if (window && window.location && window.location.href.indexOf("checkdot=true") > -1 && (e = !0),
            r && -1 !== m.indexOf(r) || console.error && console.error("DotElement\u7684type\u5c5e\u6027\u8bbe\u7f6e\u9519\u8bef\uff0c type=" + r, R.current, g),
            n) {
                if (e) {
                    var t = !1;
                    n.floorName || "nav" === r || (t = !0,
                    console.warn && console.warn("floorName\u503c\u4e3a" + I + " \u4e0d\u5408\u6cd5\uff0c\u5e76\u4e14\u53ea\u5141\u8bb8/[^\\d_a-zA-Z@\\-%]/g, \u6587\u6863\uff1ahttps://yuque.antfin-inc.com/ncms/oxxyex/kib0mw"),
                    console.warn && console.warn("type=" + r + "\u7684\u5143\u7d20dotParams.floorName\u4e0d\u80fd\u4e3a\u7a7a", n, R.current, g)),
                    "product" === r || "supplier" === r ? n.trackInfo || (t = !0,
                    console.warn && console.warn("type=" + r + "\u7684\u5143\u7d20dotParams.trackInfo\u4e0d\u80fd\u4e3a\u7a7a", n, R.current, g)) : "entrance" === r || "nav" === r && (n.navNames && 0 !== n.navNames.length || (t = !0,
                    console.warn && console.warn("type=" + r + "\u7684\u5143\u7d20dotParams.navNames\u4e0d\u80fd\u4e3a\u7a7a", n, R.current, g))),
                    t || console.log("\u6253\u70b9\u8bbe\u7f6e\u4fe1\u606f\uff1a", r, n, R.current)
                }
            } else
                console.error && console.error("DotElement\u7684dotParams\u5c5e\u6027\u4e3a\u7a7a", R.current, g)
        }
        ), []);
        var N = A.toString().replace(/[^\d_a-zA-Z]/g, "");
        if (n.floorName && "nav" !== r) {
            var D = n.floorName.split("@@");
            D.length > 1 && (n.navLevel = "" + (D.length - 1))
        }
        var M = {
            params: Object.assign(Object.assign({}, n), {
                spmd: N,
                spmc: n.floorName || ""
            })
        };
        "nav" === r && (M = {
            params: Object.assign(Object.assign({}, (0,
            s.setNavDotParams)(n)), {
                spmd: N,
                spmc: n.floorName || ""
            })
        });
        var L = function(e) {
            var t = h(e)
              , n = M.params.spmc || t.spmc || "";
            t.id && (n = t.spmc.replace(t.id, M.params.floorName)),
            M.params = Object.assign(M.params, Object.assign(Object.assign({}, t), {
                spmc: n
            }));
            var o = v();
            o && (M.params.spm_url = o),
            "clk" !== f && ("nav" === r ? (0,
            c.dotTabExp)(M) : "product" === r ? (0,
            c.dotProductExp)(M) : "supplier" === r ? (0,
            c.dotSupplierExp)(M) : "entrance" === r ? (0,
            c.dotEntranceExp)(M) : "custom" === r && (0,
            c.dotCustomExp)(Object.assign(Object.assign({}, M), {
                gokey: P.exp
            }))),
            _ && _()
        }
          , B = function(e) {
            var t = h(e)
              , n = M.params.spmc || t.spmc || "";
            t.id && (n = t.spmc.replace(t.id, M.params.floorName)),
            M.params = Object.assign(M.params, Object.assign(Object.assign({}, t), {
                spmc: n
            }));
            var o = v();
            o && (M.params.spm_url = o),
            "exp" !== f && ("nav" === r ? (0,
            c.dotTab)(M) : "product" === r ? (0,
            c.dotProduct)(M) : "supplier" === r ? (0,
            c.dotSupplier)(M) : "entrance" === r ? (0,
            c.dotEntrance)(M) : "custom" === r && (0,
            c.dotCustom)(Object.assign(Object.assign({}, M), {
                gokey: P.clk
            }))),
            x && T || (w ? w() : x && !T && a.$helper.goto.assign(x))
        }
          , V = "hugo-dotelement " + (S || "");
        if (T && x) {
            var W = x;
            return 0 === x.indexOf("//") && (W = (window.location.protocol || "https:") + x),
            (0,
            i.createElement)("a", u({}, j, {
                className: V,
                style: Object.assign({}, d(V), t),
                onAppear: L,
                onClick: B,
                href: W,
                target: "_blank",
                ref: R
            }), O)
        }
        return (0,
        i.createElement)(b, Object.assign(Object.assign({}, j), {
            className: V,
            style: t,
            onAppear: L,
            onClick: B,
            ref: R,
            "data-simplify-url": p && x ? x : null
        }), O)
    }
}
, function(e, t, n) {}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.setNavDotParams = function(e) {
        var t = /[^\d_a-zA-Z\-%]/g;
        e.navNames && ("object" == typeof e.navNames ? (e.navNames = e.navNames.map((function(e) {
            return encodeURIComponent(e.toString()).replace(t, "")
        }
        )),
        e.navNames = e.navNames.join("#")) : "string" == typeof e.navNames && (e.navNames = e.navNames.replace(",", "#")));
        e.parentNavName && (e.parentNavName = encodeURIComponent(e.parentNavName).replace(t, ""));
        return e
    }
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.dotCustomExp = t.dotCustom = t.dotSupplierExp = t.dotSupplier = t.dotProductExp = t.dotProduct = t.dotEntranceExp = t.dotEntrance = t.dotTabExp = t.dotTab = t.commonDot = t.checklogKey = void 0;
    var r = n(12)
      , o = function(e) {
        return 0 === e.indexOf("/")
    };
    t.checklogKey = o;
    var i = function(e, t, n) {
        o(t) ? (n.floorName && (n.floorName = n.floorName.replace(/[^\d_a-zA-Z@\-%]/g, "")),
        n.intelligent = 1,
        "exp" === e ? r.$logger.expose(t, n) : r.$logger.click(t, n)) : console.warn && console.warn("\u9ec4\u91d1\u4ee4\u7bad\u4e0d\u6b63\u786e, \u4ee5/\u5f00\u5934")
    };
    t.commonDot = i;
    t.dotTab = function(e) {
        i("clk", "/sc.sales.intelligent.nav_clk", e.params)
    }
    ;
    t.dotTabExp = function(e) {
        i("exp", "/sc.sales.intelligent.nav_exp", e.params)
    }
    ;
    t.dotEntrance = function(e) {
        i("clk", "/sc.sales.intelligent.entrance_clk", e.params)
    }
    ;
    t.dotEntranceExp = function(e) {
        i("exp", "/sc.sales.intelligent.entrance_exp", e.params)
    }
    ;
    t.dotProduct = function(e) {
        i("clk", "/sc.sales.intelligent.product_clk", e.params)
    }
    ;
    t.dotProductExp = function(e) {
        i("exp", "/sc.sales.intelligent.product_exp", e.params)
    }
    ;
    t.dotSupplier = function(e) {
        i("clk", "/sc.sales.intelligent.supplier_clk", e.params)
    }
    ;
    t.dotSupplierExp = function(e) {
        i("exp", "/sc.sales.intelligent.supplier_exp", e.params)
    }
    ;
    t.dotCustom = function(e) {
        i("clk", e.gokey || "/sc.sales.intelligent.custom_clk", e.params)
    }
    ;
    t.dotCustomExp = function(e) {
        i("exp", e.gokey || "/sc.sales.intelligent.custom_exp", e.params)
    }
}
, function(e, t, n) {}
, function(e, t, n) {
    "use strict";
    function r(e) {
        var t = /[^\d_a-zA-Z\-%]/g;
        return e.navNames && "object" == typeof e.navNames && (e.navNames = e.navNames.map((function(e) {
            return encodeURIComponent(e).replace(t, "")
        }
        )),
        e.navNames = e.navNames.join("#")),
        e.categoryIds && "object" == typeof e.categoryIds && (e.categoryIds = e.categoryIds.map((function(e) {
            return (e || "").toString().replace(",", "|")
        }
        )).join("#")),
        e.parentNavName && (e.parentNavName = encodeURIComponent(e.parentNavName).replace(t, "")),
        e.parentCategoryIds && (e.parentCategoryIds = e.parentCategoryIds.replace(",", "|")),
        e
    }
    n.r(t),
    n.d(t, "setNavDotParams", (function() {
        return r
    }
    ))
}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return /^(https?:)?\/\/cloud\.video\.taobao\.com/.test(e) ? e.replace(/\.taobao\.com/, ".alibaba.com") : e
    }
    t.__esModule = !0,
    t.parseVideo = r,
    t.checkIsUrl = t.getVideoUrl = void 0;
    var o = function(e) {
        var t = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);
        return !(!e || !e.match(t))
    };
    t.checkIsUrl = o;
    t.getVideoUrl = function(e) {
        return o(e) ? r(e) : e ? "//cloud.video.alibaba.com/play/u/242826731/p/e/6/t/1/d/sd/" + e + ".mp4" : ""
    }
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.default = void 0;
    var r, o = (r = n(26)) && r.__esModule ? r : {
        default: r
    };
    var i = function(e, t) {
        void 0 === t && (t = {});
        var n = t
          , r = n.fileSize
          , i = n.tpsSize
          , a = n.xz
          , s = n.quality;
        return (0,
        o.default)(e, r, a, i, s)
    };
    t.default = i
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.default = void 0;
    var r = function(e, t) {
        var n;
        try {
            var r = e.match(/(\d+)-(\d+)\.(?:png|jpg|gif)/) || []
              , o = r[1] || 0
              , i = r[2] || 0;
            n = t ? parseInt(i * Number(t) / o) : 1 * i
        } catch (e) {
            n = 0
        }
        return n
    };
    t.default = r
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.default = void 0;
    var r = function(e, t) {
        var n;
        try {
            var r = e.match(/(\d+)-(\d+)\.(?:png|jpg|gif)/) || []
              , o = r[1] || 0
              , i = r[2] || 0;
            n = t ? parseInt(o * Number(t) / i) : 1 * o
        } catch (e) {
            n = 0
        }
        return n
    };
    t.default = r
}
, function(e, t, n) {}
, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(4)
      , o = n(0);
    window.createElement = o.createElement;
    var i = function(e, t) {
        var n, o = document.getElementById(e);
        if (!o) {
            var i = document.getElementById("floorListContainer");
            (o = document.createElement("DIV")).setAttribute("id", e),
            o.setAttribute("class", "flex1ColFloor"),
            i ? i.appendChild(o) : document.body.appendChild(o)
        }
        var a = null == (n = t.data) ? void 0 : n.layout;
        t.data && "IndustryJFY" == t.data.typeName && (a = "local_layout_industry_jfy_pc"),
        "local_layout_industry_jfy" === a && (t.data.layout = "local_layout_industry_jfy_pc"),
        a || "native_tab" != t.data.type || (a = t.data.layout = "tab"),
        Object(r.a)({
            name: a,
            moduleWarp: t
        }).then((function(e) {
            e ? e.render({
                moduleWarp: t,
                containerElement: o
            }) : console.error("[FreePage] Component did not found: ", a)
        }
        ))
    }
      , a = (n(33),
    n(18),
    n(25),
    n(7))
      , s = n.n(a)
      , c = n(10);
    function u() {
        return (u = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
        ).apply(this, arguments)
    }
    var l = function(e) {
        var t, n = e.type, r = e.className, i = Object(c.b)(e, ["type", "className"]), a = s()(((t = {
            industry_iconfont: !0
        })[r] = r,
        t));
        return a += " icon-" + (n || ""),
        Object(o.createElement)("i", u({}, i, {
            className: a
        }))
    }
      , f = n(17)
      , d = function(e) {
        var t, n = e.lists, r = void 0 === n ? [] : n, i = e.className, a = void 0 === i ? "" : i, c = s()(((t = {
            "page-path": !0
        })[a] = a,
        t));
        return Object(o.createElement)("div", {
            className: c
        }, r.map((function(e, t) {
            return t === r.length - 1 ? Object(o.createElement)("h1", {
                className: "path",
                key: t
            }, e.name) : Object(o.createElement)("a", {
                href: e.url || e.action,
                className: "path",
                key: t
            }, e.name)
        }
        )))
    }
      , p = n(6);
    n(53);
    function h(e) {
        var t = e.navMainName
          , n = e.givenMenuData
          , r = void 0 === n ? [] : n
          , i = e.config
          , a = void 0 === i ? {} : i
          , c = e.floorName
          , u = a.isLinkBlank
          , d = void 0 !== u && u
          , h = Object(o.useState)(0)
          , v = h[0]
          , m = h[1]
          , g = Object(o.useState)(r)
          , y = g[0]
          , b = g[1];
        return Object(o.useEffect)((function() {
            if (0 === r.length) {
                var e = Object(p.g)()
                  , t = {
                    categoryIds: ""
                };
                e.paramMap && (t = JSON.parse(decodeURIComponent(e.paramMap))),
                Object(p.c)(t.categoryIds, (function(e) {
                    b(e)
                }
                ))
            }
        }
        ), []),
        Object(o.createElement)("div", {
            className: "industry-category-tree"
        }, t && Object(o.createElement)("div", {
            className: "category-head"
        }, t), y.map((function(e, t) {
            return Object(o.createElement)("div", {
                className: "nav",
                key: t
            }, Object(o.createElement)("div", {
                className: "name"
            }, Object(o.createElement)(f.a, {
                type: "nav",
                spmd: t,
                dotParams: {
                    floorName: c || "treenav",
                    navNames: e.categoryId,
                    navLevel: "1",
                    index: t.toString()
                },
                htmlType: "a",
                href: e.url || e.action,
                target: d ? "_blank" : "_self"
            }, Object(o.createElement)(o.Fragment, null, e.name)), (null === e.children || e.children.length > 0) && Object(o.createElement)(l, {
                className: "opt industry_iconfont",
                type: v === t ? "arrow_up" : "arrow_down",
                onClick: function() {
                    null === e.children && Object(p.c)(e.categoryId, (function(t) {
                        e.children = t,
                        b(Object.assign([], y))
                    }
                    )),
                    m(t === v ? -1 : t)
                }
            })), Object(o.createElement)("div", {
                className: s()({
                    subnav: !0,
                    hide: v !== t
                })
            }, e.children && e.children.map((function(e, t) {
                return Object(o.createElement)("div", {
                    className: "subname",
                    key: t
                }, Object(o.createElement)(f.a, {
                    type: "nav",
                    spmd: t,
                    dotParams: {
                        floorName: c || "treenav",
                        navNames: e.categoryId,
                        navLevel: "2",
                        index: t.toString()
                    },
                    htmlType: "a",
                    href: e.url || e.action,
                    target: d ? "_blank" : "_self"
                }, Object(o.createElement)(o.Fragment, null, e.name)))
            }
            ))))
        }
        )))
    }
    Object(r.b)("left_category_nav", {
        render: function(e) {
            var t, n = e.moduleWarp, i = (e.containerElement,
            null === (t = n.data) || void 0 === t ? void 0 : t.data), a = i.opData, s = i, c = document.getElementById("left-category-nav");
            if (s.categoryList && s.categoryList.length,
            s.pathList) {
                var u = document.getElementById("page-path");
                u && (u.innerHTML = "",
                u && Object(r.c)(Object(o.createElement)(d, {
                    lists: s.pathList
                }), u))
            }
            c && (c.innerHTML = "",
            Object(r.c)(Object(o.createElement)(h, {
                navMainName: a.navMainName,
                givenMenuData: s.categoryList
            }), c))
        }
    });
    var v = n(11)
      , m = n.n(v);
    function g(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (n)
            return (n = n.call(e)).next.bind(n);
        if (Array.isArray(e) || (n = function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return y(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return y(e, t)
        }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0;
            return function() {
                return r >= e.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: e[r++]
                }
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    var b = "IntersectionObserver"in window
      , w = "MutationObserver"in window
      , _ = function(e) {
        return e.dataset && e.dataset.src || ""
    }
      , O = m.a.parseImage
      , x = (m.a.parseVideo,
    m.a.optimizeImage,
    m.a.getImageHeight,
    function(e) {
        return /_(\d+)x(\d+).([a-z]{3,4})$/.test(e) ? RegExp.$1 >= 720 ? 720 : RegExp.$1 <= 100 ? 200 : "" : ""
    }
    )
      , S = function(e) {
        var t = _(e);
        if (!t)
            return "";
        if (e.className.indexOf("unCompressImg") >= 0)
            return t;
        var n = x(t);
        return O(t, n, "", n, 50),
        t
    }
      , k = function(e) {
        if (function(e) {
            return "object" == typeof e && e.tagName && "IMG" === e.tagName.toUpperCase()
        }(e)) {
            !function(e) {
                e.className.indexOf("lazyload-blur") > -1 && (e.className = e.className.replace("lazyload-blur", ""))
            }(e);
            var t = S(e) || e.src;
            e.src = t
        } else
            e.style.backgroundImage = "url(" + S(e) + ")"
    }
      , P = {
        inited: !1,
        init: function() {
            var e = this;
            this.inited || (b && (this.intOb = new IntersectionObserver((function(t) {
                for (var n, r = g(t); !(n = r()).done; ) {
                    var o = n.value;
                    if (o.intersectionRatio > 0) {
                        var i = o.target;
                        e.intOb.unobserve(i),
                        k(i)
                    }
                }
            }
            ),{
                threshold: [.01]
            })),
            [].forEach.call(document.querySelectorAll("[data-src], .lazyload"), (function(t) {
                e.observeIntersection(t)
            }
            )),
            w && (this.mutOb = new MutationObserver((function(t) {
                t.forEach((function(t) {
                    if ("attributes" === t.type && "data-src" === t.attributeName) {
                        var n = t.target;
                        e.observeIntersection(n)
                    }
                }
                ))
            }
            ))),
            document.addEventListener("animationStart", this.onAnimation.bind(this), !1),
            document.addEventListener("webkitAnimationStart", this.onAnimation.bind(this), !1),
            this.inited = !0)
        },
        onAnimation: function(e) {
            var t = e.target;
            "imgInserted" === e.animationName && (_(t) ? this.observeIntersection(t) : this.observeMutation(t))
        },
        observeIntersection: function(e) {
            e && (b ? this.intOb.observe(e) : k(e))
        },
        observeMutation: function(e) {
            e && w && this.mutOb.observe(e, {
                attributes: !0,
                childList: !0,
                subtree: !0
            })
        }
    };
    P.init(),
    window.__lazyload = P;
    P.observeIntersection;
    var E;
    n(58);
    (E = window.goldlog_queue || (window.goldlog_queue = [])).push({
        action: "goldlog.setMetaInfo",
        arguments: ["aplus-auto-exp-watchdom", "throttle"]
    }),
    E.push({
        action: "goldlog.setMetaInfo",
        arguments: ["aplus-auto-exp", [{
            logkey: "/sc.sales.intelligent.product_exp",
            cssSelector: "[data-logtype=product]",
            props: ["data-params"]
        }, {
            logkey: "/sc.sales.intelligent.supplier_exp",
            cssSelector: "[data-logtype=supplier]",
            props: ["data-params"]
        }, {
            logkey: "/sc.sales.intelligent.entrance_exp",
            cssSelector: "[data-logtype=entrance]",
            props: ["data-params"]
        }, {
            logkey: "/sc.sales.intelligent.nav_exp",
            cssSelector: "[data-logtype=nav]",
            props: ["data-params"]
        }, {
            logkey: "/sc.sales.intelligent.custom_exp",
            cssSelector: "[data-logtype=custom]",
            props: ["data-params"]
        }, {
            logkey: "/sc.sales.intelligent.entrance_exp",
            tag: "a",
            cssSelector: "[data-logtype=otherlink]",
            props: ["data-params"]
        }, {
            logkey: "/sc.sales.product-recommend",
            tag: "a",
            cssSelector: "[data-aplus-auto-filter=true]",
            props: ["data-params"]
        }]]
    }),
    E.push({
        action: "goldlog.setMetaInfo",
        arguments: ["aplus-auto-clk", [{
            logkey: "/sc.sales.product-recommend",
            tag: "a",
            cssSelector: "[data-aplus-auto-filter=true]",
            props: ["data-params"]
        }, {
            logkey: "/sc.sales.intelligent.entrance_clk",
            tag: "a",
            cssSelector: "[data-logtype=otherlink]",
            props: ["data-params"]
        }, {
            logkey: "/sc.sales.intelligent.product_clk",
            cssSelector: "[data-logtype=product]",
            props: ["data-params"]
        }, {
            logkey: "/sc.sales.intelligent.supplier_clk",
            cssSelector: "[data-logtype=supplier]",
            props: ["data-params"]
        }, {
            logkey: "/sc.sales.intelligent.entrance_clk",
            cssSelector: "[data-logtype=entrance]",
            props: ["data-params"]
        }, {
            logkey: "/sc.sales.intelligent.nav_clk",
            cssSelector: "[data-logtype=nav]",
            props: ["data-params"]
        }, {
            logkey: "/sc.sales.intelligent.custom_clk",
            cssSelector: "[data-logtype=custom]",
            props: ["data-params"]
        }]]
    }),
    E.push({
        action: "goldlog.setMetaInfo",
        arguments: ["aplus-auto-exp-userfn", function(e) {
            return ""
        }
        ]
    }),
    E.push({
        action: "goldlog.setMetaInfo",
        arguments: ["aplus-auto-clk-userfn", function(e) {
            return ""
        }
        ]
    }),
    window.renderComponents = function(e, t) {
        if (e) {
            var n = e.modules
              , o = void 0 === n ? {} : n;
            if (t && o[t]) {
                if (o[t].rendered)
                    return;
                return o[t].rendered = !0,
                void i(t, o[t])
            }
            for (var a in o) {
                var s = o[a];
                s.rendered || (s.rendered = !0,
                i(a, s))
            }
            e.fpPageEvents && e.fpPageEvents.length > 0 && !window.__FPListLoaded && (window.__FPListLoaded = !0,
            Object(r.a)({
                name: "fp-list"
            }).then((function(t) {
                t && t.render && t.render({
                    fpPageEvents: e.fpPageEvents
                })
            }
            )))
        }
    }
}
]);
//# sourceMappingURL=index.js.map
