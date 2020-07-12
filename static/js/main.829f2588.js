! function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "/", t(t.s = 141)
}([function(e, t, n) {
    "use strict";
    e.exports = n(148)
}, function(e, t) {
    var n = Array.isArray;
    e.exports = n
}, function(e, t) {
    e.exports = {}
}, function(e, t, n) {
    function o(e, t, n) {
        return r(a, e, t, n)
    }
    var r = n(190),
        a = n(192);
    e.exports = o
}, function(e, t, n) {
    var o = n(92),
        r = "object" == typeof self && self && self.Object === Object && self,
        a = o || r || Function("return this")();
    e.exports = a
}, function(e, t) {
    function n(e) {
        return null != e && "object" == typeof e
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
    e.exports = n
}, function(e, t, n) {
    function o(e) {
        return null != e && a(e.length) && !r(e)
    }
    var r = n(48),
        a = n(60);
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        return null == e ? void 0 === e ? u : s : c && c in Object(e) ? a(e) : i(e)
    }
    var r = n(15),
        a = n(195),
        i = n(196),
        s = "[object Null]",
        u = "[object Undefined]",
        c = r ? r.toStringTag : void 0;
    e.exports = o
}, function(e, t, n) {
    function o(e, t) {
        var n = a(e, t);
        return r(n) ? n : void 0
    }
    var r = n(194),
        a = n(199);
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        return i(e) ? r(e) : a(e)
    }
    var r = n(109),
        a = n(62),
        i = n(7);
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        return "function" == typeof e ? e : null == e ? i : "object" == typeof e ? s(e) ? a(e[0], e[1]) : r(e) : u(e)
    }
    var r = n(272),
        a = n(283),
        i = n(14),
        s = n(1),
        u = n(290);
    e.exports = o
}, function(e, t) {
    function n(e, t) {
        for (var n = -1, o = null == e ? 0 : e.length, r = Array(o); ++n < o;) r[n] = t(e[n], n, e);
        return r
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function r(e, t) {
        var n = {};
        for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
        return n
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        },
        i = n(0),
        s = o(i),
        u = n(44),
        c = o(u),
        l = function(e, t) {
            var n = e.children,
                o = e.color,
                i = e.size,
                u = e.style,
                c = e.width,
                l = e.height,
                f = r(e, ["children", "color", "size", "style", "width", "height"]),
                d = t.reactIconBase,
                p = void 0 === d ? {} : d,
                h = i || p.size || "1em";
            return s.default.createElement("svg", a({
                children: n,
                fill: "currentColor",
                preserveAspectRatio: "xMidYMid meet",
                height: l || h,
                width: c || h
            }, p, f, {
                style: a({
                    verticalAlign: "middle",
                    color: o || p.color
                }, p.style || {}, u)
            }))
        };
    l.propTypes = {
        color: c.default.string,
        size: c.default.oneOfType([c.default.string, c.default.number]),
        width: c.default.oneOfType([c.default.string, c.default.number]),
        height: c.default.oneOfType([c.default.string, c.default.number]),
        style: c.default.object
    }, l.contextTypes = {
        reactIconBase: c.default.shape(l.propTypes)
    }, t.default = l, e.exports = t.default
}, function(e, t) {
    function n(e) {
        return e
    }
    e.exports = n
}, function(e, t, n) {
    var o = n(4),
        r = o.Symbol;
    e.exports = r
}, function(e, t, n) {
    function o(e) {
        return "symbol" == typeof e || a(e) && r(e) == i
    }
    var r = n(8),
        a = n(5),
        i = "[object Symbol]";
    e.exports = o
}, function(e, t, n) {
    var o = n(253),
        r = n(64),
        a = n(254),
        i = n(255),
        s = n(91),
        u = n(8),
        c = n(93),
        l = c(o),
        f = c(r),
        d = c(a),
        p = c(i),
        h = c(s),
        y = u;
    (o && "[object DataView]" != y(new o(new ArrayBuffer(1))) || r && "[object Map]" != y(new r) || a && "[object Promise]" != y(a.resolve()) || i && "[object Set]" != y(new i) || s && "[object WeakMap]" != y(new s)) && (y = function(e) {
        var t = u(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            o = n ? c(n) : "";
        if (o) switch (o) {
            case l:
                return "[object DataView]";
            case f:
                return "[object Map]";
            case d:
                return "[object Promise]";
            case p:
                return "[object Set]";
            case h:
                return "[object WeakMap]"
        }
        return t
    }), e.exports = y
}, function(e, t, n) {
    function o(e) {
        if ("string" == typeof e || r(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -a ? "-0" : t
    }
    var r = n(16),
        a = 1 / 0;
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var o = n(159),
        r = (n(82), n(165));
    n.d(t, "a", function() {
        return o.a
    }), n.d(t, "b", function() {
        return r.a
    })
}, function(e, t, n) {
    "use strict";

    function o(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }
    n.d(t, "h", function() {
        return M
    }), n.d(t, "e", function() {
        return A
    }), n.d(t, "g", function() {
        return I
    }), n.d(t, "f", function() {
        return U
    }), n.d(t, "d", function() {
        return z
    }), n.d(t, "c", function() {
        return B
    }), n.d(t, "b", function() {
        return F
    });
    var r = n(189),
        a = n.n(r),
        i = n(298),
        s = n.n(i),
        u = n(135),
        c = n.n(u),
        l = n(305),
        f = n.n(l),
        d = n(308),
        p = n.n(d),
        h = n(311),
        y = n.n(h),
        m = n(136),
        g = n.n(m),
        v = n(316),
        b = n.n(v),
        w = n(320),
        x = (n.n(w), n(138)),
        k = n.n(x),
        S = n(323),
        _ = n.n(S),
        C = n(324),
        E = n.n(C),
        R = n(42),
        T = n(25),
        O = n(344),
        L = c()(O.a),
        D = {
            selected: [],
            substances: R.a
        },
        P = function(e, t) {
            return a()(t)(e) ? s()(_()(t))(e) : e.concat(t)
        },
        j = function(e, t, n) {
            return f()(t + ".lastTouched", n)(e)
        },
        N = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
                t = arguments[1],
                n = t.type,
                o = t.payload;
            if ("toggleSelected" === n) {
                var r = o.id,
                    a = o.now,
                    i = P(e.selected, r),
                    s = j(e.substances, r, a);
                return Object.assign({}, e, {
                    selected: i,
                    substances: s
                })
            }
            return "resetSelection" === n ? f()("selected", [])(e) : e
        };
    t.a = N;
    var M = function(e) {
            return {
                type: "toggleSelected",
                payload: {
                    id: e,
                    now: Date.now()
                }
            }
        },
        A = p()([L, c()("selected")]),
        I = p()([L, c()("substances"), E()("name")]),
        U = function(e) {
            return c()(e)(R.a)
        },
        z = function(e, t) {
            return a()(t)(A(e))
        },
        B = (p()([A, c()("length")]), function(e) {
            return y()(function(t) {
                return g()(b()(t.ids, e))
            })(T.a) || {}
        }),
        F = function(e) {
            var t = [].concat(o(A(e))),
                n = [],
                r = [];
            return k()(function() {
                var e = t.pop();
                k()(function(t) {
                    return r.push([e, t])
                })(n), n.push(e)
            })(t.reverse()), r
        }
}, function(e, t) {
    function n(e, t) {
        var n = typeof e;
        return !!(t = null == t ? o : t) && ("number" == n || "symbol" != n && r.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    var o = 9007199254740991,
        r = /^(?:0|[1-9]\d*)$/;
    e.exports = n
}, function(e, t) {
    function n(e, t) {
        return e === t || e !== e && t !== t
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        return function(t) {
            return e(t)
        }
    }
    e.exports = n
}, function(e, t, n) {
    var o = n(3),
        r = o("map", n(340));
    r.placeholder = n(2), e.exports = r
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return s
    });
    var o = n(342),
        r = n.n(o),
        a = n(343),
        i = n.n(a),
        s = [{
            id: "synergy",
            name: "Baixo risco e Sinergia",
            description: "Estas drogas trabalham juntas para causar um efeito maior do que a soma de suas partes, e elas não são propensar a causar reações adversas ou indesejáveis quando usadas com cuidado. Pesquisas adicionais devem sempre ser feitas antes de combinar drogas."
        }, {
            id: "low",
            name: "Baixo risco sem sinergia",
            description: "Os efeitos são cumulativos. A combinação é improvável de causar alguma reação adversa ou indesejável além daquelas que ordinariamente são esperadas destas drogas"
        }, {
            id: "decrease",
            name: "Low Risk & Decrease",
            description: "Effects are substractive. The combination is unlikely to cause any adverse or undersirable reaction beyond those that might ordinarily be expected from these drugs."
        }, {
            id: "caution",
            name: "Caution",
            description: "These combinations are not usually physically harmful, but may produce undesirable effects, such as physical discomfort or overstimulation. Extreme use may cause physical health issues. Synergistic effects may be unpredictable. Care should be taken when choosing to use this combination."
        }, {
            id: "unsafe",
            name: "Unsafe",
            description: "There is considerable risk of physical harm when taking these combinations, they should be avoided where possible."
        }, {
            id: "danger",
            name: "Dangerous",
            description: "These combinations are considered extremely harmful and should always be avoided. Reactions to these drugs taken in combination are highly unpredictable and have a potential to cause death."
        }, {
            id: "unknown",
            name: "Unknown",
            description: "Effects are unknown."
        }],
        u = {
            "Baixo risco e Sinergia": "synergy",
            "Baixo risco sem sinergia": "low",
            "Low Risk & Decrease": "decrease",
            Caution: "caution",
            Unsafe: "unsafe",
            Dangerous: "danger"
        },
        c = function(e) {
            return u[e] || "unknown"
        },
        l = [];
    r()(i.a, function(e, t, n) {
        r()(e, function(e, n) {
            l.push(Object.assign({
                ids: [t, n]
            }, e, {
                interaction: c(e.status)
            }))
        })
    });
    t.a = l
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" === typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    var o = n(83),
        r = n(179),
        a = n(180);
    n(181), n(86), n(85);
    n.d(t, "c", function() {
        return o.b
    }), n.d(t, "b", function() {
        return r.a
    }), n.d(t, "a", function() {
        return a.a
    })
}, function(e, t, n) {
    function o(e) {
        return function() {
            var t = arguments;
            switch (t.length) {
                case 0:
                    return new e;
                case 1:
                    return new e(t[0]);
                case 2:
                    return new e(t[0], t[1]);
                case 3:
                    return new e(t[0], t[1], t[2]);
                case 4:
                    return new e(t[0], t[1], t[2], t[3]);
                case 5:
                    return new e(t[0], t[1], t[2], t[3], t[4]);
                case 6:
                    return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                case 7:
                    return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
            }
            var n = r(e.prototype),
                o = e.apply(n, t);
            return a(o) ? o : n
        }
    }
    var r = n(29),
        a = n(6);
    e.exports = o
}, function(e, t, n) {
    var o = n(6),
        r = Object.create,
        a = function() {
            function e() {}
            return function(t) {
                if (!o(t)) return {};
                if (r) return r(t);
                e.prototype = t;
                var n = new e;
                return e.prototype = void 0, n
            }
        }();
    e.exports = a
}, function(e, t) {
    function n(e, t) {
        var n = -1,
            o = e.length;
        for (t || (t = Array(o)); ++n < o;) t[n] = e[n];
        return t
    }
    e.exports = n
}, function(e, t) {
    function n(e, t) {
        for (var n = -1, o = null == e ? 0 : e.length; ++n < o && !1 !== t(e[n], n, e););
        return e
    }
    e.exports = n
}, function(e, t, n) {
    function o(e) {
        var t = r(e),
            n = t % 1;
        return t === t ? n ? t - n : t : 0
    }
    var r = n(217);
    e.exports = o
}, function(e, t, n) {
    function o(e, t, n, o) {
        var i = !n;
        n || (n = {});
        for (var s = -1, u = t.length; ++s < u;) {
            var c = t[s],
                l = o ? o(n[c], e[c], c, n, e) : void 0;
            void 0 === l && (l = e[c]), i ? a(n, c, l) : r(n, c, l)
        }
        return n
    }
    var r = n(56),
        a = n(57);
    e.exports = o
}, function(e, t, n) {
    var o = n(219),
        r = n(5),
        a = Object.prototype,
        i = a.hasOwnProperty,
        s = a.propertyIsEnumerable,
        u = o(function() {
            return arguments
        }()) ? o : function(e) {
            return r(e) && i.call(e, "callee") && !s.call(e, "callee")
        };
    e.exports = u
}, function(e, t, n) {
    (function(e) {
        var o = n(4),
            r = n(220),
            a = "object" == typeof t && t && !t.nodeType && t,
            i = a && "object" == typeof e && e && !e.nodeType && e,
            s = i && i.exports === a,
            u = s ? o.Buffer : void 0,
            c = u ? u.isBuffer : void 0,
            l = c || r;
        e.exports = l
    }).call(t, n(58)(e))
}, function(e, t) {
    function n(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || o)
    }
    var o = Object.prototype;
    e.exports = n
}, function(e, t, n) {
    function o(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var o = e[t];
            this.set(o[0], o[1])
        }
    }
    var r = n(224),
        a = n(225),
        i = n(226),
        s = n(227),
        u = n(228);
    o.prototype.clear = r, o.prototype.delete = a, o.prototype.get = i, o.prototype.has = s, o.prototype.set = u, e.exports = o
}, function(e, t, n) {
    function o(e, t) {
        for (var n = e.length; n--;)
            if (r(e[n][0], t)) return n;
        return -1
    }
    var r = n(22);
    e.exports = o
}, function(e, t, n) {
    var o = n(9),
        r = o(Object, "create");
    e.exports = r
}, function(e, t, n) {
    function o(e, t) {
        var n = e.__data__;
        return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
    }
    var r = n(242);
    e.exports = o
}, function(e, t, n) {
    var o = n(134),
        r = n(303),
        a = r(o);
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var o = n(331),
        r = n.n(o),
        a = n(336),
        i = n.n(a),
        s = n(337),
        u = n.n(s),
        c = n(24),
        l = n.n(c),
        f = n(138),
        d = n.n(f),
        p = n(341),
        h = n.n(p),
        y = function() {
            function e(e, t) {
                var n = [],
                    o = !0,
                    r = !1,
                    a = void 0;
                try {
                    for (var i, s = e[Symbol.iterator](); !(o = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); o = !0);
                } catch (e) {
                    r = !0, a = e
                } finally {
                    try {
                        !o && s.return && s.return()
                    } finally {
                        if (r) throw a
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        m = i()(h.a.tableOrder),
        g = u()(h.a.groupNames, m),
        v = {},
        b = (l()(function(e) {
            var t = y(e, 2),
                n = t[0],
                o = t[1];
            d()(function(e) {
                v[e] = n
            })(o)
        })(g), l()(function(e) {
            return {
                id: e.toLowerCase(),
                name: e,
                type: v[e]
            }
        })(m));
    t.a = r()("id", b)
}, function(e, t, n) {
    "use strict";

    function o(e) {
        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }
    var r = Object.getOwnPropertySymbols,
        a = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;
    e.exports = function() {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e]
                }).join("")) return !1;
            var o = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                o[e] = e
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function(e, t) {
        for (var n, s, u = o(e), c = 1; c < arguments.length; c++) {
            n = Object(arguments[c]);
            for (var l in n) a.call(n, l) && (u[l] = n[l]);
            if (r) {
                s = r(n);
                for (var f = 0; f < s.length; f++) i.call(n, s[f]) && (u[s[f]] = n[s[f]])
            }
        }
        return u
    }
}, function(e, t, n) {
    e.exports = n(160)()
}, function(e, t, n) {
    "use strict";

    function o(e) {
        "undefined" !== typeof console && "function" === typeof console.error && console.error(e);
        try {
            throw new Error(e)
        } catch (e) {}
    }
    t.a = o
}, function(e, t, n) {
    "use strict";

    function o(e) {
        if (!Object(i.a)(e) || Object(r.a)(e) != s) return !1;
        var t = Object(a.a)(e);
        if (null === t) return !0;
        var n = f.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && l.call(n) == d
    }
    var r = n(168),
        a = n(173),
        i = n(175),
        s = "[object Object]",
        u = Function.prototype,
        c = Object.prototype,
        l = u.toString,
        f = c.hasOwnProperty,
        d = l.call(Object);
    t.a = o
}, function(e, t, n) {
    function o(e, t, n, o, k, S, _, C) {
        var E = t & m;
        if (!E && "function" != typeof e) throw new TypeError(h);
        var R = o ? o.length : 0;
        if (R || (t &= ~(b | w), o = k = void 0), _ = void 0 === _ ? _ : x(p(_), 0), C = void 0 === C ? C : p(C), R -= k ? k.length : 0, t & w) {
            var T = o,
                O = k;
            o = k = void 0
        }
        var L = E ? void 0 : c(e),
            D = [e, t, n, o, k, T, O, S, _, C];
        if (L && l(D, L), e = D[0], t = D[1], n = D[2], o = D[3], k = D[4], C = D[9] = void 0 === D[9] ? E ? 0 : e.length : x(D[9] - R, 0), !C && t & (g | v) && (t &= ~(g | v)), t && t != y) P = t == g || t == v ? i(e, t, C) : t != b && t != (y | b) || k.length ? s.apply(void 0, D) : u(e, t, n, o);
        else var P = a(e, t, n);
        return d((L ? r : f)(P, D), e, t)
    }
    var r = n(89),
        a = n(200),
        i = n(201),
        s = n(94),
        u = n(215),
        c = n(52),
        l = n(216),
        f = n(100),
        d = n(102),
        p = n(32),
        h = "Expected a function",
        y = 1,
        m = 2,
        g = 8,
        v = 16,
        b = 32,
        w = 64,
        x = Math.max;
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        if (!a(e)) return !1;
        var t = r(e);
        return t == s || t == u || t == i || t == c
    }
    var r = n(8),
        a = n(6),
        i = "[object AsyncFunction]",
        s = "[object Function]",
        u = "[object GeneratorFunction]",
        c = "[object Proxy]";
    e.exports = o
}, function(e, t) {
    function n(e, t, n) {
        switch (n.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, n[0]);
            case 2:
                return e.call(t, n[0], n[1]);
            case 3:
                return e.call(t, n[0], n[1], n[2])
        }
        return e.apply(t, n)
    }
    e.exports = n
}, function(e, t, n) {
    function o(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = i, this.__views__ = []
    }
    var r = n(29),
        a = n(51),
        i = 4294967295;
    o.prototype = r(a.prototype), o.prototype.constructor = o, e.exports = o
}, function(e, t) {
    function n() {}
    e.exports = n
}, function(e, t, n) {
    var o = n(90),
        r = n(203),
        a = o ? function(e) {
            return o.get(e)
        } : r;
    e.exports = a
}, function(e, t, n) {
    function o(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
    }
    var r = n(29),
        a = n(51);
    o.prototype = r(a.prototype), o.prototype.constructor = o, e.exports = o
}, function(e, t, n) {
    var o = n(209),
        r = n(101),
        a = r(o);
    e.exports = a
}, function(e, t) {
    function n(e, t) {
        for (var n = -1, r = e.length, a = 0, i = []; ++n < r;) {
            var s = e[n];
            s !== t && s !== o || (e[n] = o, i[a++] = n)
        }
        return i
    }
    var o = "__lodash_placeholder__";
    e.exports = n
}, function(e, t, n) {
    function o(e, t, n) {
        var o = e[t];
        s.call(e, t) && a(o, n) && (void 0 !== n || t in e) || r(e, t, n)
    }
    var r = n(57),
        a = n(22),
        i = Object.prototype,
        s = i.hasOwnProperty;
    e.exports = o
}, function(e, t, n) {
    function o(e, t, n) {
        "__proto__" == t && r ? r(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : e[t] = n
    }
    var r = n(103);
    e.exports = o
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, t, n) {
    var o = n(221),
        r = n(23),
        a = n(61),
        i = a && a.isTypedArray,
        s = i ? r(i) : o;
    e.exports = s
}, function(e, t) {
    function n(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= o
    }
    var o = 9007199254740991;
    e.exports = n
}, function(e, t, n) {
    (function(e) {
        var o = n(92),
            r = "object" == typeof t && t && !t.nodeType && t,
            a = r && "object" == typeof e && e && !e.nodeType && e,
            i = a && a.exports === r,
            s = i && o.process,
            u = function() {
                try {
                    var e = a && a.require && a.require("util").types;
                    return e || s && s.binding && s.binding("util")
                } catch (e) {}
            }();
        e.exports = u
    }).call(t, n(58)(e))
}, function(e, t, n) {
    function o(e) {
        if (!r(e)) return a(e);
        var t = [];
        for (var n in Object(e)) s.call(e, n) && "constructor" != n && t.push(n);
        return t
    }
    var r = n(36),
        a = n(222),
        i = Object.prototype,
        s = i.hasOwnProperty;
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        var t = this.__data__ = new r(e);
        this.size = t.size
    }
    var r = n(37),
        a = n(229),
        i = n(230),
        s = n(231),
        u = n(232),
        c = n(233);
    o.prototype.clear = a, o.prototype.delete = i, o.prototype.get = s, o.prototype.has = u, o.prototype.set = c, e.exports = o
}, function(e, t, n) {
    var o = n(9),
        r = n(4),
        a = o(r, "Map");
    e.exports = a
}, function(e, t, n) {
    function o(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var o = e[t];
            this.set(o[0], o[1])
        }
    }
    var r = n(234),
        a = n(241),
        i = n(243),
        s = n(244),
        u = n(245);
    o.prototype.clear = r, o.prototype.delete = a, o.prototype.get = i, o.prototype.has = s, o.prototype.set = u, e.exports = o
}, function(e, t, n) {
    var o = n(67),
        r = n(114),
        a = Object.prototype,
        i = a.propertyIsEnumerable,
        s = Object.getOwnPropertySymbols,
        u = s ? function(e) {
            return null == e ? [] : (e = Object(e), o(s(e), function(t) {
                return i.call(e, t)
            }))
        } : r;
    e.exports = u
}, function(e, t) {
    function n(e, t) {
        for (var n = -1, o = null == e ? 0 : e.length, r = 0, a = []; ++n < o;) {
            var i = e[n];
            t(i, n, e) && (a[r++] = i)
        }
        return a
    }
    e.exports = n
}, function(e, t) {
    function n(e, t) {
        for (var n = -1, o = t.length, r = e.length; ++n < o;) e[r + n] = t[n];
        return e
    }
    e.exports = n
}, function(e, t, n) {
    var o = n(111),
        r = o(Object.getPrototypeOf, Object);
    e.exports = r
}, function(e, t, n) {
    function o(e) {
        var t = new e.constructor(e.byteLength);
        return new r(t).set(new r(e)), t
    }
    var r = n(118);
    e.exports = o
}, function(e, t, n) {
    function o(e, t) {
        return r(e) ? e : a(e, t) ? [e] : i(s(e))
    }
    var r = n(1),
        a = n(72),
        i = n(127),
        s = n(128);
    e.exports = o
}, function(e, t, n) {
    function o(e, t) {
        if (r(e)) return !1;
        var n = typeof e;
        return !("number" != n && "symbol" != n && "boolean" != n && null != e && !a(e)) || (s.test(e) || !i.test(e) || null != t && e in Object(t))
    }
    var r = n(1),
        a = n(16),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        s = /^\w*$/;
    e.exports = o
}, function(e, t, n) {
    function o(e, t, n, i, s) {
        var u = -1,
            c = e.length;
        for (n || (n = a), s || (s = []); ++u < c;) {
            var l = e[u];
            t > 0 && n(l) ? t > 1 ? o(l, t - 1, n, i, s) : r(s, l) : i || (s[s.length] = l)
        }
        return s
    }
    var r = n(68),
        a = n(293);
    e.exports = o
}, function(e, t) {
    e.exports = {
        cap: !1,
        curry: !1,
        fixed: !1,
        immutable: !1,
        rearg: !1
    }
}, function(e, t, n) {
    function o(e, t) {
        return i(a(e, t, r), e + "")
    }
    var r = n(14),
        a = n(132),
        i = n(54);
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var o = n(0),
        r = n.n(o),
        a = n(351),
        i = n.n(a),
        s = n(352),
        u = n.n(s),
        c = n(353),
        l = n.n(c),
        f = n(354),
        d = n.n(f),
        p = n(355),
        h = n.n(p),
        y = n(356),
        m = n.n(y),
        g = n(357),
        v = n.n(g),
        b = (n(25), function(e) {
            return {
                backgroundColor: e,
                padding: 3,
                width: 25,
                height: 25
            }
        }),
        w = {
            synergy: r.a.createElement(i.a, {
                color: "white",
                style: b("#0a89dd")
            }),
            low: r.a.createElement(u.a, {
                color: "white",
                style: b("#35afff")
            }),
            decrease: r.a.createElement(l.a, {
                color: "white",
                style: b("#006cb3")
            }),
            caution: r.a.createElement(d.a, {
                color: "white",
                style: b("#d5c625")
            }),
            unsafe: r.a.createElement(h.a, {
                color: "white",
                style: b("#d98427")
            }),
            danger: r.a.createElement(m.a, {
                color: "white",
                style: b("#d12128")
            }),
            unknown: r.a.createElement(v.a, {
                color: "white",
                style: b("#6f6f6f")
            })
        },
        x = function(e) {
            var t = e.interaction;
            return w[t]
        };
    t.a = x
}, function(e, t, n) {
    "use strict";

    function o() {}

    function r(e) {
        try {
            return e.then
        } catch (e) {
            return g = e, v
        }
    }

    function a(e, t) {
        try {
            return e(t)
        } catch (e) {
            return g = e, v
        }
    }

    function i(e, t, n) {
        try {
            e(t, n)
        } catch (e) {
            return g = e, v
        }
    }

    function s(e) {
        if ("object" !== typeof this) throw new TypeError("Promises must be constructed via new");
        if ("function" !== typeof e) throw new TypeError("Promise constructor's argument is not a function");
        this._75 = 0, this._83 = 0, this._18 = null, this._38 = null, e !== o && y(e, this)
    }

    function u(e, t, n) {
        return new e.constructor(function(r, a) {
            var i = new s(o);
            i.then(r, a), c(e, new h(t, n, i))
        })
    }

    function c(e, t) {
        for (; 3 === e._83;) e = e._18;
        if (s._47 && s._47(e), 0 === e._83) return 0 === e._75 ? (e._75 = 1, void(e._38 = t)) : 1 === e._75 ? (e._75 = 2, void(e._38 = [e._38, t])) : void e._38.push(t);
        l(e, t)
    }

    function l(e, t) {
        m(function() {
            var n = 1 === e._83 ? t.onFulfilled : t.onRejected;
            if (null === n) return void(1 === e._83 ? f(t.promise, e._18) : d(t.promise, e._18));
            var o = a(n, e._18);
            o === v ? d(t.promise, g) : f(t.promise, o)
        })
    }

    function f(e, t) {
        if (t === e) return d(e, new TypeError("A promise cannot be resolved with itself."));
        if (t && ("object" === typeof t || "function" === typeof t)) {
            var n = r(t);
            if (n === v) return d(e, g);
            if (n === e.then && t instanceof s) return e._83 = 3, e._18 = t, void p(e);
            if ("function" === typeof n) return void y(n.bind(t), e)
        }
        e._83 = 1, e._18 = t, p(e)
    }

    function d(e, t) {
        e._83 = 2, e._18 = t, s._71 && s._71(e, t), p(e)
    }

    function p(e) {
        if (1 === e._75 && (c(e, e._38), e._38 = null), 2 === e._75) {
            for (var t = 0; t < e._38.length; t++) c(e, e._38[t]);
            e._38 = null
        }
    }

    function h(e, t, n) {
        this.onFulfilled = "function" === typeof e ? e : null, this.onRejected = "function" === typeof t ? t : null, this.promise = n
    }

    function y(e, t) {
        var n = !1,
            o = i(e, function(e) {
                n || (n = !0, f(t, e))
            }, function(e) {
                n || (n = !0, d(t, e))
            });
        n || o !== v || (n = !0, d(t, g))
    }
    var m = n(144),
        g = null,
        v = {};
    e.exports = s, s._47 = null, s._71 = null, s._44 = o, s.prototype.then = function(e, t) {
        if (this.constructor !== s) return u(this, e, t);
        var n = new s(o);
        return c(this, new h(e, t, n)), n
    }
}, function(e, t, n) {
    "use strict";

    function o(e, t, n, o, a, i, s, u) {
        if (r(t), !e) {
            var c;
            if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var l = [n, o, a, i, s, u],
                    f = 0;
                c = new Error(t.replace(/%s/g, function() {
                    return l[f++]
                })), c.name = "Invariant Violation"
            }
            throw c.framesToPop = 1, c
        }
    }
    var r = function(e) {};
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var o = {};
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return function() {
            return e
        }
    }
    var r = function() {};
    r.thatReturns = o, r.thatReturnsFalse = o(!1), r.thatReturnsTrue = o(!0), r.thatReturnsNull = o(null), r.thatReturnsThis = function() {
        return this
    }, r.thatReturnsArgument = function(e) {
        return e
    }, e.exports = r
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return a
    }), n.d(t, "a", function() {
        return i
    });
    var o = n(44),
        r = n.n(o),
        a = r.a.shape({
            trySubscribe: r.a.func.isRequired,
            tryUnsubscribe: r.a.func.isRequired,
            notifyNestedSubs: r.a.func.isRequired,
            isSubscribed: r.a.func.isRequired
        }),
        i = r.a.shape({
            subscribe: r.a.func.isRequired,
            dispatch: r.a.func.isRequired,
            getState: r.a.func.isRequired
        })
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }

    function a(e, t) {
        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function i(e, t) {
        var n = {};
        for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
        return n
    }

    function s() {}

    function u(e, t) {
        var n = {
            run: function(o) {
                try {
                    var r = e(t.getState(), o);
                    (r !== n.props || n.error) && (n.shouldComponentUpdate = !0, n.props = r, n.error = null)
                } catch (e) {
                    n.shouldComponentUpdate = !0, n.error = e
                }
            }
        };
        return n
    }

    function c(e) {
        var t, n, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            l = c.getDisplayName,
            d = void 0 === l ? function(e) {
                return "ConnectAdvanced(" + e + ")"
            } : l,
            w = c.methodName,
            x = void 0 === w ? "connectAdvanced" : w,
            k = c.renderCountProp,
            S = void 0 === k ? void 0 : k,
            _ = c.shouldHandleStateChanges,
            C = void 0 === _ || _,
            E = c.storeKey,
            R = void 0 === E ? "store" : E,
            T = c.withRef,
            O = void 0 !== T && T,
            L = i(c, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef"]),
            D = R + "Subscription",
            P = v++,
            j = (t = {}, t[R] = m.a, t[D] = m.b, t),
            N = (n = {}, n[D] = m.b, n);
        return function(t) {
            p()("function" == typeof t, "You must pass a component to the function returned by " + x + ". Instead received " + JSON.stringify(t));
            var n = t.displayName || t.name || "Component",
                i = d(n),
                c = g({}, L, {
                    getDisplayName: d,
                    methodName: x,
                    renderCountProp: S,
                    shouldHandleStateChanges: C,
                    storeKey: R,
                    withRef: O,
                    displayName: i,
                    wrappedComponentName: n,
                    WrappedComponent: t
                }),
                l = function(n) {
                    function l(e, t) {
                        o(this, l);
                        var a = r(this, n.call(this, e, t));
                        return a.version = P, a.state = {}, a.renderCount = 0, a.store = e[R] || t[R], a.propsMode = Boolean(e[R]), a.setWrappedInstance = a.setWrappedInstance.bind(a), p()(a.store, 'Could not find "' + R + '" in either the context or props of "' + i + '". Either wrap the root component in a <Provider>, or explicitly pass "' + R + '" as a prop to "' + i + '".'), a.initSelector(), a.initSubscription(), a
                    }
                    return a(l, n), l.prototype.getChildContext = function() {
                        var e, t = this.propsMode ? null : this.subscription;
                        return e = {}, e[D] = t || this.context[D], e
                    }, l.prototype.componentDidMount = function() {
                        C && (this.subscription.trySubscribe(), this.selector.run(this.props), this.selector.shouldComponentUpdate && this.forceUpdate())
                    }, l.prototype.componentWillReceiveProps = function(e) {
                        this.selector.run(e)
                    }, l.prototype.shouldComponentUpdate = function() {
                        return this.selector.shouldComponentUpdate
                    }, l.prototype.componentWillUnmount = function() {
                        this.subscription && this.subscription.tryUnsubscribe(), this.subscription = null, this.notifyNestedSubs = s, this.store = null, this.selector.run = s, this.selector.shouldComponentUpdate = !1
                    }, l.prototype.getWrappedInstance = function() {
                        return p()(O, "To access the wrapped instance, you need to specify { withRef: true } in the options argument of the " + x + "() call."), this.wrappedInstance
                    }, l.prototype.setWrappedInstance = function(e) {
                        this.wrappedInstance = e
                    }, l.prototype.initSelector = function() {
                        var t = e(this.store.dispatch, c);
                        this.selector = u(t, this.store), this.selector.run(this.props)
                    }, l.prototype.initSubscription = function() {
                        if (C) {
                            var e = (this.propsMode ? this.props : this.context)[D];
                            this.subscription = new y.a(this.store, e, this.onStateChange.bind(this)), this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription)
                        }
                    }, l.prototype.onStateChange = function() {
                        this.selector.run(this.props), this.selector.shouldComponentUpdate ? (this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate, this.setState(b)) : this.notifyNestedSubs()
                    }, l.prototype.notifyNestedSubsOnComponentDidUpdate = function() {
                        this.componentDidUpdate = void 0, this.notifyNestedSubs()
                    }, l.prototype.isSubscribed = function() {
                        return Boolean(this.subscription) && this.subscription.isSubscribed()
                    }, l.prototype.addExtraProps = function(e) {
                        if (!O && !S && (!this.propsMode || !this.subscription)) return e;
                        var t = g({}, e);
                        return O && (t.ref = this.setWrappedInstance), S && (t[S] = this.renderCount++), this.propsMode && this.subscription && (t[D] = this.subscription), t
                    }, l.prototype.render = function() {
                        var e = this.selector;
                        if (e.shouldComponentUpdate = !1, e.error) throw e.error;
                        return Object(h.createElement)(t, this.addExtraProps(e.props))
                    }, l
                }(h.Component);
            return l.WrappedComponent = t, l.displayName = i, l.childContextTypes = N, l.contextTypes = j, l.propTypes = j, f()(l, t)
        }
    }
    t.a = c;
    var l = n(162),
        f = n.n(l),
        d = n(163),
        p = n.n(d),
        h = n(0),
        y = (n.n(h), n(164)),
        m = n(81),
        g = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        },
        v = 0,
        b = {}
}, function(e, t, n) {
    "use strict";

    function o(e, t, n) {
        function s() {
            g === m && (g = m.slice())
        }

        function u() {
            return y
        }

        function c(e) {
            if ("function" !== typeof e) throw new Error("Expected listener to be a function.");
            var t = !0;
            return s(), g.push(e),
                function() {
                    if (t) {
                        t = !1, s();
                        var n = g.indexOf(e);
                        g.splice(n, 1)
                    }
                }
        }

        function l(e) {
            if (!Object(r.a)(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if ("undefined" === typeof e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (v) throw new Error("Reducers may not dispatch actions.");
            try {
                v = !0, y = h(y, e)
            } finally {
                v = !1
            }
            for (var t = m = g, n = 0; n < t.length; n++) {
                (0, t[n])()
            }
            return e
        }

        function f(e) {
            if ("function" !== typeof e) throw new Error("Expected the nextReducer to be a function.");
            h = e, l({
                type: i.INIT
            })
        }

        function d() {
            var e, t = c;
            return e = {
                subscribe: function(e) {
                    function n() {
                        e.next && e.next(u())
                    }
                    if ("object" !== typeof e) throw new TypeError("Expected the observer to be an object.");
                    return n(), {
                        unsubscribe: t(n)
                    }
                }
            }, e[a.a] = function() {
                return this
            }, e
        }
        var p;
        if ("function" === typeof t && "undefined" === typeof n && (n = t, t = void 0), "undefined" !== typeof n) {
            if ("function" !== typeof n) throw new Error("Expected the enhancer to be a function.");
            return n(o)(e, t)
        }
        if ("function" !== typeof e) throw new Error("Expected the reducer to be a function.");
        var h = e,
            y = t,
            m = [],
            g = m,
            v = !1;
        return l({
            type: i.INIT
        }), p = {
            dispatch: l,
            subscribe: c,
            getState: u,
            replaceReducer: f
        }, p[a.a] = d, p
    }
    n.d(t, "a", function() {
        return i
    }), t.b = o;
    var r = n(46),
        a = n(176),
        i = {
            INIT: "@@redux/INIT"
        }
}, function(e, t, n) {
    "use strict";
    var o = n(169),
        r = o.a.Symbol;
    t.a = r
}, function(e, t, n) {
    "use strict"
}, function(e, t, n) {
    "use strict";

    function o() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return 0 === t.length ? function(e) {
            return e
        } : 1 === t.length ? t[0] : t.reduce(function(e, t) {
            return function() {
                return e(t.apply(void 0, arguments))
            }
        })
    }
    t.a = o
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return function(t, n) {
            function o() {
                return r
            }
            var r = e(t, n);
            return o.dependsOnOwnProps = !1, o
        }
    }

    function r(e) {
        return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length
    }

    function a(e, t) {
        return function(t, n) {
            var o = (n.displayName, function(e, t) {
                return o.dependsOnOwnProps ? o.mapToProps(e, t) : o.mapToProps(e)
            });
            return o.dependsOnOwnProps = !0, o.mapToProps = function(t, n) {
                o.mapToProps = e, o.dependsOnOwnProps = r(e);
                var a = o(t, n);
                return "function" === typeof a && (o.mapToProps = a, o.dependsOnOwnProps = r(a), a = o(t, n)), a
            }, o
        }
    }
    t.a = o, t.b = a;
    n(88)
}, function(e, t, n) {
    "use strict";
    n(46), n(45)
}, function(e, t, n) {
    var o = n(14),
        r = n(90),
        a = r ? function(e, t) {
            return r.set(e, t), e
        } : o;
    e.exports = a
}, function(e, t, n) {
    var o = n(91),
        r = o && new o;
    e.exports = r
}, function(e, t, n) {
    var o = n(9),
        r = n(4),
        a = o(r, "WeakMap");
    e.exports = a
}, function(e, t, n) {
    (function(t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.exports = n
    }).call(t, n(26))
}, function(e, t) {
    function n(e) {
        if (null != e) {
            try {
                return r.call(e)
            } catch (e) {}
            try {
                return e + ""
            } catch (e) {}
        }
        return ""
    }
    var o = Function.prototype,
        r = o.toString;
    e.exports = n
}, function(e, t, n) {
    function o(e, t, n, b, w, x, k, S, _, C) {
        function E() {
            for (var p = arguments.length, h = Array(p), y = p; y--;) h[y] = arguments[y];
            if (L) var m = c(E),
                g = i(h, m);
            if (b && (h = r(h, b, w, L)), x && (h = a(h, x, k, L)), p -= g, L && p < C) {
                var v = f(h, m);
                return u(e, t, o, E.placeholder, n, h, v, S, _, C - p)
            }
            var j = T ? n : this,
                N = O ? j[e] : e;
            return p = h.length, S ? h = l(h, S) : D && p > 1 && h.reverse(), R && _ < p && (h.length = _), this && this !== d && this instanceof E && (N = P || s(N)), N.apply(j, h)
        }
        var R = t & g,
            T = t & p,
            O = t & h,
            L = t & (y | m),
            D = t & v,
            P = O ? void 0 : s(e);
        return E
    }
    var r = n(95),
        a = n(96),
        i = n(202),
        s = n(28),
        u = n(97),
        c = n(107),
        l = n(214),
        f = n(55),
        d = n(4),
        p = 1,
        h = 2,
        y = 8,
        m = 16,
        g = 128,
        v = 512;
    e.exports = o
}, function(e, t) {
    function n(e, t, n, r) {
        for (var a = -1, i = e.length, s = n.length, u = -1, c = t.length, l = o(i - s, 0), f = Array(c + l), d = !r; ++u < c;) f[u] = t[u];
        for (; ++a < s;)(d || a < i) && (f[n[a]] = e[a]);
        for (; l--;) f[u++] = e[a++];
        return f
    }
    var o = Math.max;
    e.exports = n
}, function(e, t) {
    function n(e, t, n, r) {
        for (var a = -1, i = e.length, s = -1, u = n.length, c = -1, l = t.length, f = o(i - u, 0), d = Array(f + l), p = !r; ++a < f;) d[a] = e[a];
        for (var h = a; ++c < l;) d[h + c] = t[c];
        for (; ++s < u;)(p || a < i) && (d[h + n[s]] = e[a++]);
        return d
    }
    var o = Math.max;
    e.exports = n
}, function(e, t, n) {
    function o(e, t, n, o, p, h, y, m, g, v) {
        var b = t & l,
            w = b ? y : void 0,
            x = b ? void 0 : y,
            k = b ? h : void 0,
            S = b ? void 0 : h;
        t |= b ? f : d, (t &= ~(b ? d : f)) & c || (t &= ~(s | u));
        var _ = [e, t, p, k, w, S, x, m, g, v],
            C = n.apply(void 0, _);
        return r(e) && a(C, _), C.placeholder = o, i(C, e, t)
    }
    var r = n(98),
        a = n(100),
        i = n(102),
        s = 1,
        u = 2,
        c = 4,
        l = 8,
        f = 32,
        d = 64;
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        var t = i(e),
            n = s[t];
        if ("function" != typeof n || !(t in r.prototype)) return !1;
        if (e === n) return !0;
        var o = a(n);
        return !!o && e === o[0]
    }
    var r = n(50),
        a = n(52),
        i = n(99),
        s = n(205);
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        for (var t = e.name + "", n = r[t], o = i.call(r, t) ? n.length : 0; o--;) {
            var a = n[o],
                s = a.func;
            if (null == s || s == e) return a.name
        }
        return t
    }
    var r = n(204),
        a = Object.prototype,
        i = a.hasOwnProperty;
    e.exports = o
}, function(e, t, n) {
    var o = n(89),
        r = n(101),
        a = r(o);
    e.exports = a
}, function(e, t) {
    function n(e) {
        var t = 0,
            n = 0;
        return function() {
            var i = a(),
                s = r - (i - n);
            if (n = i, s > 0) {
                if (++t >= o) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
    var o = 800,
        r = 16,
        a = Date.now;
    e.exports = n
}, function(e, t, n) {
    function o(e, t, n) {
        var o = t + "";
        return i(e, a(o, s(r(o), n)))
    }
    var r = n(207),
        a = n(208),
        i = n(54),
        s = n(211);
    e.exports = o
}, function(e, t, n) {
    var o = n(9),
        r = function() {
            try {
                var e = o(Object, "defineProperty");
                return e({}, "", {}), e
            } catch (e) {}
        }();
    e.exports = r
}, function(e, t, n) {
    function o(e, t) {
        return !!(null == e ? 0 : e.length) && r(e, t, 0) > -1
    }
    var r = n(105);
    e.exports = o
}, function(e, t, n) {
    function o(e, t, n) {
        return t === t ? i(e, t, n) : r(e, a, n)
    }
    var r = n(106),
        a = n(212),
        i = n(213);
    e.exports = o
}, function(e, t) {
    function n(e, t, n, o) {
        for (var r = e.length, a = n + (o ? 1 : -1); o ? a-- : ++a < r;)
            if (t(e[a], a, e)) return a;
        return -1
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        return e.placeholder
    }
    e.exports = n
}, function(e, t, n) {
    function o(e, t) {
        return e && r(t, a(t), e)
    }
    var r = n(33),
        a = n(10);
    e.exports = o
}, function(e, t, n) {
    function o(e, t) {
        var n = i(e),
            o = !n && a(e),
            l = !n && !o && s(e),
            d = !n && !o && !l && c(e),
            p = n || o || l || d,
            h = p ? r(e.length, String) : [],
            y = h.length;
        for (var m in e) !t && !f.call(e, m) || p && ("length" == m || l && ("offset" == m || "parent" == m) || d && ("buffer" == m || "byteLength" == m || "byteOffset" == m) || u(m, y)) || h.push(m);
        return h
    }
    var r = n(110),
        a = n(34),
        i = n(1),
        s = n(35),
        u = n(21),
        c = n(59),
        l = Object.prototype,
        f = l.hasOwnProperty;
    e.exports = o
}, function(e, t) {
    function n(e, t) {
        for (var n = -1, o = Array(e); ++n < e;) o[n] = t(n);
        return o
    }
    e.exports = n
}, function(e, t) {
    function n(e, t) {
        return function(n) {
            return e(t(n))
        }
    }
    e.exports = n
}, function(e, t, n) {
    function o(e, t, n, j, N, M) {
        var A, I = t & C,
            U = t & E,
            z = t & R;
        if (n && (A = N ? n(e, j, N, M) : n(e)), void 0 !== A) return A;
        if (!k(e)) return e;
        var B = b(e);
        if (B) {
            if (A = m(e), !I) return l(e, A)
        } else {
            var F = y(e),
                W = F == O || F == L;
            if (w(e)) return c(e, I);
            if (F == D || F == T || W && !N) {
                if (A = U || W ? {} : v(e), !I) return U ? d(e, u(A, e)) : f(e, s(A, e))
            } else {
                if (!P[F]) return N ? e : {};
                A = g(e, F, I)
            }
        }
        M || (M = new r);
        var q = M.get(e);
        if (q) return q;
        if (M.set(e, A), S(e)) return e.forEach(function(r) {
            A.add(o(r, t, n, r, e, M))
        }), A;
        if (x(e)) return e.forEach(function(r, a) {
            A.set(a, o(r, t, n, a, e, M))
        }), A;
        var H = z ? U ? h : p : U ? keysIn : _,
            V = B ? void 0 : H(e);
        return a(V || e, function(r, a) {
            V && (a = r, r = e[a]), i(A, a, o(r, t, n, a, e, M))
        }), A
    }
    var r = n(63),
        a = n(31),
        i = n(56),
        s = n(108),
        u = n(246),
        c = n(249),
        l = n(30),
        f = n(250),
        d = n(251),
        p = n(116),
        h = n(252),
        y = n(17),
        m = n(256),
        g = n(257),
        v = n(262),
        b = n(1),
        w = n(35),
        x = n(263),
        k = n(6),
        S = n(265),
        _ = n(10),
        C = 1,
        E = 2,
        R = 4,
        T = "[object Arguments]",
        O = "[object Function]",
        L = "[object GeneratorFunction]",
        D = "[object Object]",
        P = {};
    P[T] = P["[object Array]"] = P["[object ArrayBuffer]"] = P["[object DataView]"] = P["[object Boolean]"] = P["[object Date]"] = P["[object Float32Array]"] = P["[object Float64Array]"] = P["[object Int8Array]"] = P["[object Int16Array]"] = P["[object Int32Array]"] = P["[object Map]"] = P["[object Number]"] = P[D] = P["[object RegExp]"] = P["[object Set]"] = P["[object String]"] = P["[object Symbol]"] = P["[object Uint8Array]"] = P["[object Uint8ClampedArray]"] = P["[object Uint16Array]"] = P["[object Uint32Array]"] = !0, P["[object Error]"] = P[O] = P["[object WeakMap]"] = !1, e.exports = o
}, function(e, t, n) {
    function o(e) {
        return i(e) ? r(e, !0) : a(e)
    }
    var r = n(109),
        a = n(247),
        i = n(7);
    e.exports = o
}, function(e, t) {
    function n() {
        return []
    }
    e.exports = n
}, function(e, t, n) {
    var o = n(68),
        r = n(69),
        a = n(66),
        i = n(114),
        s = Object.getOwnPropertySymbols,
        u = s ? function(e) {
            for (var t = []; e;) o(t, a(e)), e = r(e);
            return t
        } : i;
    e.exports = u
}, function(e, t, n) {
    function o(e) {
        return r(e, i, a)
    }
    var r = n(117),
        a = n(66),
        i = n(10);
    e.exports = o
}, function(e, t, n) {
    function o(e, t, n) {
        var o = t(e);
        return a(e) ? o : r(o, n(e))
    }
    var r = n(68),
        a = n(1);
    e.exports = o
}, function(e, t, n) {
    var o = n(4),
        r = o.Uint8Array;
    e.exports = r
}, function(e, t, n) {
    function o(e, t, n, i, s) {
        return e === t || (null == e || null == t || !a(e) && !a(t) ? e !== e && t !== t : r(e, t, n, i, o, s))
    }
    var r = n(274),
        a = n(5);
    e.exports = o
}, function(e, t, n) {
    function o(e, t, n, o, c, l) {
        var f = n & s,
            d = e.length,
            p = t.length;
        if (d != p && !(f && p > d)) return !1;
        var h = l.get(e);
        if (h && l.get(t)) return h == t;
        var y = -1,
            m = !0,
            g = n & u ? new r : void 0;
        for (l.set(e, t), l.set(t, e); ++y < d;) {
            var v = e[y],
                b = t[y];
            if (o) var w = f ? o(b, v, y, t, e, l) : o(v, b, y, e, t, l);
            if (void 0 !== w) {
                if (w) continue;
                m = !1;
                break
            }
            if (g) {
                if (!a(t, function(e, t) {
                        if (!i(g, t) && (v === e || c(v, e, n, o, l))) return g.push(t)
                    })) {
                    m = !1;
                    break
                }
            } else if (v !== b && !c(v, b, n, o, l)) {
                m = !1;
                break
            }
        }
        return l.delete(e), l.delete(t), m
    }
    var r = n(121),
        a = n(277),
        i = n(122),
        s = 1,
        u = 2;
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.__data__ = new r; ++t < n;) this.add(e[t])
    }
    var r = n(65),
        a = n(275),
        i = n(276);
    o.prototype.add = o.prototype.push = a, o.prototype.has = i, e.exports = o
}, function(e, t) {
    function n(e, t) {
        return e.has(t)
    }
    e.exports = n
}, function(e, t, n) {
    function o(e) {
        return e === e && !r(e)
    }
    var r = n(6);
    e.exports = o
}, function(e, t) {
    function n(e, t) {
        return function(n) {
            return null != n && (n[e] === t && (void 0 !== t || e in Object(n)))
        }
    }
    e.exports = n
}, function(e, t, n) {
    function o(e, t, n) {
        var o = null == e ? void 0 : r(e, t);
        return void 0 === o ? n : o
    }
    var r = n(126);
    e.exports = o
}, function(e, t, n) {
    function o(e, t) {
        t = r(t, e);
        for (var n = 0, o = t.length; null != e && n < o;) e = e[a(t[n++])];
        return n && n == o ? e : void 0
    }
    var r = n(71),
        a = n(18);
    e.exports = o
}, function(e, t, n) {
    var o = n(284),
        r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        a = /\\(\\)?/g,
        i = o(function(e) {
            var t = [];
            return 46 === e.charCodeAt(0) && t.push(""), e.replace(r, function(e, n, o, r) {
                t.push(o ? r.replace(a, "$1") : n || e)
            }), t
        });
    e.exports = i
}, function(e, t, n) {
    function o(e) {
        return null == e ? "" : r(e)
    }
    var r = n(286);
    e.exports = o
}, function(e, t) {
    function n(e) {
        return function(t) {
            return null == t ? void 0 : t[e]
        }
    }
    e.exports = n
}, function(e, t, n) {
    function o(e) {
        return i(a(e, void 0, r), e + "")
    }
    var r = n(131),
        a = n(132),
        i = n(54);
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        return (null == e ? 0 : e.length) ? r(e, 1) : []
    }
    var r = n(73);
    e.exports = o
}, function(e, t, n) {
    function o(e, t, n) {
        return t = a(void 0 === t ? e.length - 1 : t, 0),
            function() {
                for (var o = arguments, i = -1, s = a(o.length - t, 0), u = Array(s); ++i < s;) u[i] = o[t + i];
                i = -1;
                for (var c = Array(t + 1); ++i < t;) c[i] = o[i];
                return c[t] = n(u), r(e, this, c)
            }
    }
    var r = n(49),
        a = Math.max;
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        return null == e ? [] : r(e, a(e))
    }
    var r = n(297),
        a = n(10);
    e.exports = o
}, function(e, t, n) {
    function o(e, t) {
        return e && r(e, t, a)
    }
    var r = n(301),
        a = n(10);
    e.exports = o
}, function(e, t, n) {
    var o = n(3),
        r = o("get", n(125));
    r.placeholder = n(2), e.exports = r
}, function(e, t, n) {
    var o = n(3),
        r = o("isEmpty", n(315), n(74));
    r.placeholder = n(2), e.exports = r
}, function(e, t, n) {
    function o(e) {
        return a(e) && r(e)
    }
    var r = n(7),
        a = n(5);
    e.exports = o
}, function(e, t, n) {
    e.exports = n(321)
}, function(e, t, n) {
    function o(e) {
        return "function" == typeof e ? e : r
    }
    var r = n(14);
    e.exports = o
}, function(e, t, n) {
    function o(e, t) {
        var n = -1,
            o = a(e) ? Array(e.length) : [];
        return r(e, function(e, r, a) {
            o[++n] = t(e, r, a)
        }), o
    }
    var r = n(41),
        a = n(7);
    e.exports = o
}, function(e, t, n) {
    n(142), e.exports = n(147)
}, function(e, t, n) {
    "use strict";
    "undefined" === typeof Promise && (n(143).enable(), window.Promise = n(145)), n(146), Object.assign = n(43)
}, function(e, t, n) {
    "use strict";

    function o() {
        c = !1, s._47 = null, s._71 = null
    }

    function r(e) {
        function t(t) {
            (e.allRejections || i(f[t].error, e.whitelist || u)) && (f[t].displayId = l++, e.onUnhandled ? (f[t].logged = !0, e.onUnhandled(f[t].displayId, f[t].error)) : (f[t].logged = !0, a(f[t].displayId, f[t].error)))
        }

        function n(t) {
            f[t].logged && (e.onHandled ? e.onHandled(f[t].displayId, f[t].error) : f[t].onUnhandled || (console.warn("Promise Rejection Handled (id: " + f[t].displayId + "):"), console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' + f[t].displayId + ".")))
        }
        e = e || {}, c && o(), c = !0;
        var r = 0,
            l = 0,
            f = {};
        s._47 = function(e) {
            2 === e._83 && f[e._56] && (f[e._56].logged ? n(e._56) : clearTimeout(f[e._56].timeout), delete f[e._56])
        }, s._71 = function(e, n) {
            0 === e._75 && (e._56 = r++, f[e._56] = {
                displayId: null,
                error: n,
                timeout: setTimeout(t.bind(null, e._56), i(n, u) ? 100 : 2e3),
                logged: !1
            })
        }
    }

    function a(e, t) {
        console.warn("Possible Unhandled Promise Rejection (id: " + e + "):"), ((t && (t.stack || t)) + "").split("\n").forEach(function(e) {
            console.warn("  " + e)
        })
    }

    function i(e, t) {
        return t.some(function(t) {
            return e instanceof t
        })
    }
    var s = n(77),
        u = [ReferenceError, TypeError, RangeError],
        c = !1;
    t.disable = o, t.enable = r
}, function(e, t, n) {
    "use strict";
    (function(t) {
        function n(e) {
            i.length || (a(), s = !0), i[i.length] = e
        }

        function o() {
            for (; u < i.length;) {
                var e = u;
                if (u += 1, i[e].call(), u > c) {
                    for (var t = 0, n = i.length - u; t < n; t++) i[t] = i[t + u];
                    i.length -= u, u = 0
                }
            }
            i.length = 0, u = 0, s = !1
        }

        function r(e) {
            return function() {
                function t() {
                    clearTimeout(n), clearInterval(o), e()
                }
                var n = setTimeout(t, 0),
                    o = setInterval(t, 50)
            }
        }
        e.exports = n;
        var a, i = [],
            s = !1,
            u = 0,
            c = 1024,
            l = "undefined" !== typeof t ? t : self,
            f = l.MutationObserver || l.WebKitMutationObserver;
        a = "function" === typeof f ? function(e) {
            var t = 1,
                n = new f(e),
                o = document.createTextNode("");
            return n.observe(o, {
                    characterData: !0
                }),
                function() {
                    t = -t, o.data = t
                }
        }(o) : r(o), n.requestFlush = a, n.makeRequestCallFromTimer = r
    }).call(t, n(26))
}, function(e, t, n) {
    "use strict";

    function o(e) {
        var t = new r(r._44);
        return t._83 = 1, t._18 = e, t
    }
    var r = n(77);
    e.exports = r;
    var a = o(!0),
        i = o(!1),
        s = o(null),
        u = o(void 0),
        c = o(0),
        l = o("");
    r.resolve = function(e) {
        if (e instanceof r) return e;
        if (null === e) return s;
        if (void 0 === e) return u;
        if (!0 === e) return a;
        if (!1 === e) return i;
        if (0 === e) return c;
        if ("" === e) return l;
        if ("object" === typeof e || "function" === typeof e) try {
            var t = e.then;
            if ("function" === typeof t) return new r(t.bind(e))
        } catch (e) {
            return new r(function(t, n) {
                n(e)
            })
        }
        return o(e)
    }, r.all = function(e) {
        var t = Array.prototype.slice.call(e);
        return new r(function(e, n) {
            function o(i, s) {
                if (s && ("object" === typeof s || "function" === typeof s)) {
                    if (s instanceof r && s.then === r.prototype.then) {
                        for (; 3 === s._83;) s = s._18;
                        return 1 === s._83 ? o(i, s._18) : (2 === s._83 && n(s._18), void s.then(function(e) {
                            o(i, e)
                        }, n))
                    }
                    var u = s.then;
                    if ("function" === typeof u) {
                        return void new r(u.bind(s)).then(function(e) {
                            o(i, e)
                        }, n)
                    }
                }
                t[i] = s, 0 === --a && e(t)
            }
            if (0 === t.length) return e([]);
            for (var a = t.length, i = 0; i < t.length; i++) o(i, t[i])
        })
    }, r.reject = function(e) {
        return new r(function(t, n) {
            n(e)
        })
    }, r.race = function(e) {
        return new r(function(t, n) {
            e.forEach(function(e) {
                r.resolve(e).then(t, n)
            })
        })
    }, r.prototype.catch = function(e) {
        return this.then(null, e)
    }
}, function(e, t) {
    ! function(e) {
        "use strict";

        function t(e) {
            if ("string" !== typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
            return e.toLowerCase()
        }

        function n(e) {
            return "string" !== typeof e && (e = String(e)), e
        }

        function o(e) {
            var t = {
                next: function() {
                    var t = e.shift();
                    return {
                        done: void 0 === t,
                        value: t
                    }
                }
            };
            return g.iterable && (t[Symbol.iterator] = function() {
                return t
            }), t
        }

        function r(e) {
            this.map = {}, e instanceof r ? e.forEach(function(e, t) {
                this.append(t, e)
            }, this) : Array.isArray(e) ? e.forEach(function(e) {
                this.append(e[0], e[1])
            }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                this.append(t, e[t])
            }, this)
        }

        function a(e) {
            if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0
        }

        function i(e) {
            return new Promise(function(t, n) {
                e.onload = function() {
                    t(e.result)
                }, e.onerror = function() {
                    n(e.error)
                }
            })
        }

        function s(e) {
            var t = new FileReader,
                n = i(t);
            return t.readAsArrayBuffer(e), n
        }

        function u(e) {
            var t = new FileReader,
                n = i(t);
            return t.readAsText(e), n
        }

        function c(e) {
            for (var t = new Uint8Array(e), n = new Array(t.length), o = 0; o < t.length; o++) n[o] = String.fromCharCode(t[o]);
            return n.join("")
        }

        function l(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer
        }

        function f() {
            return this.bodyUsed = !1, this._initBody = function(e) {
                if (this._bodyInit = e, e)
                    if ("string" === typeof e) this._bodyText = e;
                    else if (g.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                else if (g.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                else if (g.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                else if (g.arrayBuffer && g.blob && b(e)) this._bodyArrayBuffer = l(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else {
                    if (!g.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !w(e)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = l(e)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" === typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : g.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, g.blob && (this.blob = function() {
                var e = a(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? a(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(s)
            }), this.text = function() {
                var e = a(this);
                if (e) return e;
                if (this._bodyBlob) return u(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(c(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, g.formData && (this.formData = function() {
                return this.text().then(h)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }

        function d(e) {
            var t = e.toUpperCase();
            return x.indexOf(t) > -1 ? t : e
        }

        function p(e, t) {
            t = t || {};
            var n = t.body;
            if (e instanceof p) {
                if (e.bodyUsed) throw new TypeError("Already read");
                this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new r(e.headers)), this.method = e.method, this.mode = e.mode, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new r(t.headers)), this.method = d(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n)
        }

        function h(e) {
            var t = new FormData;
            return e.trim().split("&").forEach(function(e) {
                if (e) {
                    var n = e.split("="),
                        o = n.shift().replace(/\+/g, " "),
                        r = n.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(o), decodeURIComponent(r))
                }
            }), t
        }

        function y(e) {
            var t = new r;
            return e.split(/\r?\n/).forEach(function(e) {
                var n = e.split(":"),
                    o = n.shift().trim();
                if (o) {
                    var r = n.join(":").trim();
                    t.append(o, r)
                }
            }), t
        }

        function m(e, t) {
            t || (t = {}), this.type = "default", this.status = "status" in t ? t.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new r(t.headers), this.url = t.url || "", this._initBody(e)
        }
        if (!e.fetch) {
            var g = {
                searchParams: "URLSearchParams" in e,
                iterable: "Symbol" in e && "iterator" in Symbol,
                blob: "FileReader" in e && "Blob" in e && function() {
                    try {
                        return new Blob, !0
                    } catch (e) {
                        return !1
                    }
                }(),
                formData: "FormData" in e,
                arrayBuffer: "ArrayBuffer" in e
            };
            if (g.arrayBuffer) var v = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                b = function(e) {
                    return e && DataView.prototype.isPrototypeOf(e)
                },
                w = ArrayBuffer.isView || function(e) {
                    return e && v.indexOf(Object.prototype.toString.call(e)) > -1
                };
            r.prototype.append = function(e, o) {
                e = t(e), o = n(o);
                var r = this.map[e];
                this.map[e] = r ? r + "," + o : o
            }, r.prototype.delete = function(e) {
                delete this.map[t(e)]
            }, r.prototype.get = function(e) {
                return e = t(e), this.has(e) ? this.map[e] : null
            }, r.prototype.has = function(e) {
                return this.map.hasOwnProperty(t(e))
            }, r.prototype.set = function(e, o) {
                this.map[t(e)] = n(o)
            }, r.prototype.forEach = function(e, t) {
                for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
            }, r.prototype.keys = function() {
                var e = [];
                return this.forEach(function(t, n) {
                    e.push(n)
                }), o(e)
            }, r.prototype.values = function() {
                var e = [];
                return this.forEach(function(t) {
                    e.push(t)
                }), o(e)
            }, r.prototype.entries = function() {
                var e = [];
                return this.forEach(function(t, n) {
                    e.push([n, t])
                }), o(e)
            }, g.iterable && (r.prototype[Symbol.iterator] = r.prototype.entries);
            var x = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            p.prototype.clone = function() {
                return new p(this, {
                    body: this._bodyInit
                })
            }, f.call(p.prototype), f.call(m.prototype), m.prototype.clone = function() {
                return new m(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new r(this.headers),
                    url: this.url
                })
            }, m.error = function() {
                var e = new m(null, {
                    status: 0,
                    statusText: ""
                });
                return e.type = "error", e
            };
            var k = [301, 302, 303, 307, 308];
            m.redirect = function(e, t) {
                if (-1 === k.indexOf(t)) throw new RangeError("Invalid status code");
                return new m(null, {
                    status: t,
                    headers: {
                        location: e
                    }
                })
            }, e.Headers = r, e.Request = p, e.Response = m, e.fetch = function(e, t) {
                return new Promise(function(n, o) {
                    var r = new p(e, t),
                        a = new XMLHttpRequest;
                    a.onload = function() {
                        var e = {
                            status: a.status,
                            statusText: a.statusText,
                            headers: y(a.getAllResponseHeaders() || "")
                        };
                        e.url = "responseURL" in a ? a.responseURL : e.headers.get("X-Request-URL");
                        var t = "response" in a ? a.response : a.responseText;
                        n(new m(t, e))
                    }, a.onerror = function() {
                        o(new TypeError("Network request failed"))
                    }, a.ontimeout = function() {
                        o(new TypeError("Network request failed"))
                    }, a.open(r.method, r.url, !0), "include" === r.credentials && (a.withCredentials = !0), "responseType" in a && g.blob && (a.responseType = "blob"), r.headers.forEach(function(e, t) {
                        a.setRequestHeader(t, e)
                    }), a.send("undefined" === typeof r._bodyInit ? null : r._bodyInit)
                })
            }, e.fetch.polyfill = !0
        }
    }("undefined" !== typeof self ? self : this)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(0),
        r = n.n(o),
        a = n(149),
        i = n.n(a),
        s = n(157),
        u = (n.n(s), n(158)),
        c = n(364);
    i.a.render(r.a.createElement(u.a, null), document.getElementById("root")), Object(c.a)()
}, function(e, t, n) {
    "use strict";

    function o(e) {
        for (var t = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, o = 0; o < t; o++) n += "&args[]=" + encodeURIComponent(arguments[o + 1]);
        v(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n)
    }

    function r(e, t, n) {
        this.props = e, this.context = t, this.refs = b, this.updater = n || P
    }

    function a() {}

    function i(e, t, n) {
        this.props = e, this.context = t, this.refs = b, this.updater = n || P
    }

    function s(e, t, n) {
        var o = void 0,
            r = {},
            a = null,
            i = null;
        if (null != t)
            for (o in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (a = "" + t.key), t) M.call(t, o) && !A.hasOwnProperty(o) && (r[o] = t[o]);
        var s = arguments.length - 2;
        if (1 === s) r.children = n;
        else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            r.children = u
        }
        if (e && e.defaultProps)
            for (o in s = e.defaultProps) void 0 === r[o] && (r[o] = s[o]);
        return {
            $$typeof: k,
            type: e,
            key: a,
            ref: i,
            props: r,
            _owner: N.current
        }
    }

    function u(e) {
        return "object" === typeof e && null !== e && e.$$typeof === k
    }

    function c(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + ("" + e).replace(/[=:]/g, function(e) {
            return t[e]
        })
    }

    function l(e, t, n, o) {
        if (U.length) {
            var r = U.pop();
            return r.result = e, r.keyPrefix = t, r.func = n, r.context = o, r.count = 0, r
        }
        return {
            result: e,
            keyPrefix: t,
            func: n,
            context: o,
            count: 0
        }
    }

    function f(e) {
        e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > U.length && U.push(e)
    }

    function d(e, t, n, r) {
        var a = typeof e;
        "undefined" !== a && "boolean" !== a || (e = null);
        var i = !1;
        if (null === e) i = !0;
        else switch (a) {
            case "string":
            case "number":
                i = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case k:
                    case S:
                        i = !0
                }
        }
        if (i) return n(r, e, "" === t ? "." + p(e, 0) : t), 1;
        if (i = 0, t = "" === t ? "." : t + ":", Array.isArray(e))
            for (var s = 0; s < e.length; s++) {
                a = e[s];
                var u = t + p(a, s);
                i += d(a, u, n, r)
            } else if (null === e || "undefined" === typeof e ? u = null : (u = D && e[D] || e["@@iterator"], u = "function" === typeof u ? u : null), "function" === typeof u)
                for (e = u.call(e), s = 0; !(a = e.next()).done;) a = a.value, u = t + p(a, s++), i += d(a, u, n, r);
            else "object" === a && (n = "" + e, o("31", "[object Object]" === n ? "object with keys {" + Object.keys(e).join(", ") + "}" : n, ""));
        return i
    }

    function p(e, t) {
        return "object" === typeof e && null !== e && null != e.key ? c(e.key) : t.toString(36)
    }

    function h(e, t) {
        e.func.call(e.context, t, e.count++)
    }

    function y(e, t, n) {
        var o = e.result,
            r = e.keyPrefix;
        e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? m(e, o, n, w.thatReturnsArgument) : null != e && (u(e) && (t = r + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(I, "$&/") + "/") + n, e = {
            $$typeof: k,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        }), o.push(e))
    }

    function m(e, t, n, o, r) {
        var a = "";
        null != n && (a = ("" + n).replace(I, "$&/") + "/"), t = l(t, a, o, r), null == e || d(e, "", y, t), f(t)
    }
    var g = n(43),
        v = n(78),
        b = n(79),
        w = n(80),
        x = "function" === typeof Symbol && Symbol.for,
        k = x ? Symbol.for("react.element") : 60103,
        S = x ? Symbol.for("react.portal") : 60106,
        _ = x ? Symbol.for("react.fragment") : 60107,
        C = x ? Symbol.for("react.strict_mode") : 60108,
        E = x ? Symbol.for("react.profiler") : 60114,
        R = x ? Symbol.for("react.provider") : 60109,
        T = x ? Symbol.for("react.context") : 60110,
        O = x ? Symbol.for("react.async_mode") : 60111,
        L = x ? Symbol.for("react.forward_ref") : 60112;
    x && Symbol.for("react.timeout");
    var D = "function" === typeof Symbol && Symbol.iterator,
        P = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        };
    r.prototype.isReactComponent = {}, r.prototype.setState = function(e, t) {
        "object" !== typeof e && "function" !== typeof e && null != e && o("85"), this.updater.enqueueSetState(this, e, t, "setState")
    }, r.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, a.prototype = r.prototype;
    var j = i.prototype = new a;
    j.constructor = i, g(j, r.prototype), j.isPureReactComponent = !0;
    var N = {
            current: null
        },
        M = Object.prototype.hasOwnProperty,
        A = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        },
        I = /\/+/g,
        U = [],
        z = {
            Children: {
                map: function(e, t, n) {
                    if (null == e) return e;
                    var o = [];
                    return m(e, o, null, t, n), o
                },
                forEach: function(e, t, n) {
                    if (null == e) return e;
                    t = l(null, null, t, n), null == e || d(e, "", h, t), f(t)
                },
                count: function(e) {
                    return null == e ? 0 : d(e, "", w.thatReturnsNull, null)
                },
                toArray: function(e) {
                    var t = [];
                    return m(e, t, null, w.thatReturnsArgument), t
                },
                only: function(e) {
                    return u(e) || o("143"), e
                }
            },
            createRef: function() {
                return {
                    current: null
                }
            },
            Component: r,
            PureComponent: i,
            createContext: function(e, t) {
                return void 0 === t && (t = null), e = {
                    $$typeof: T,
                    _calculateChangedBits: t,
                    _defaultValue: e,
                    _currentValue: e,
                    _currentValue2: e,
                    _changedBits: 0,
                    _changedBits2: 0,
                    Provider: null,
                    Consumer: null
                }, e.Provider = {
                    $$typeof: R,
                    _context: e
                }, e.Consumer = e
            },
            forwardRef: function(e) {
                return {
                    $$typeof: L,
                    render: e
                }
            },
            Fragment: _,
            StrictMode: C,
            unstable_AsyncMode: O,
            unstable_Profiler: E,
            createElement: s,
            cloneElement: function(e, t, n) {
                (null === e || void 0 === e) && o("267", e);
                var r = void 0,
                    a = g({}, e.props),
                    i = e.key,
                    s = e.ref,
                    u = e._owner;
                if (null != t) {
                    void 0 !== t.ref && (s = t.ref, u = N.current), void 0 !== t.key && (i = "" + t.key);
                    var c = void 0;
                    e.type && e.type.defaultProps && (c = e.type.defaultProps);
                    for (r in t) M.call(t, r) && !A.hasOwnProperty(r) && (a[r] = void 0 === t[r] && void 0 !== c ? c[r] : t[r])
                }
                if (1 === (r = arguments.length - 2)) a.children = n;
                else if (1 < r) {
                    c = Array(r);
                    for (var l = 0; l < r; l++) c[l] = arguments[l + 2];
                    a.children = c
                }
                return {
                    $$typeof: k,
                    type: e.type,
                    key: i,
                    ref: s,
                    props: a,
                    _owner: u
                }
            },
            createFactory: function(e) {
                var t = s.bind(null, e);
                return t.type = e, t
            },
            isValidElement: u,
            version: "16.4.2",
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                ReactCurrentOwner: N,
                assign: g
            }
        },
        B = {
            default: z
        },
        F = B && z || B;
    e.exports = F.default ? F.default : F
}, function(e, t, n) {
    "use strict";

    function o() {
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)
        } catch (e) {
            console.error(e)
        }
    }
    o(), e.exports = n(150)
}, function(e, t, n) {
    "use strict";

    function o(e) {
        for (var t = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, o = 0; o < t; o++) n += "&args[]=" + encodeURIComponent(arguments[o + 1]);
        Mo(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n)
    }

    function r(e, t, n, o, r, a, i, s, u) {
        this._hasCaughtError = !1, this._caughtError = null;
        var c = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, c)
        } catch (e) {
            this._caughtError = e, this._hasCaughtError = !0
        }
    }

    function a() {
        if (Ho._hasRethrowError) {
            var e = Ho._rethrowError;
            throw Ho._rethrowError = null, Ho._hasRethrowError = !1, e
        }
    }

    function i() {
        if (Vo)
            for (var e in $o) {
                var t = $o[e],
                    n = Vo.indexOf(e);
                if (-1 < n || o("96", e), !Ko[n]) {
                    t.extractEvents || o("97", e), Ko[n] = t, n = t.eventTypes;
                    for (var r in n) {
                        var a = void 0,
                            i = n[r],
                            u = t,
                            c = r;
                        Xo.hasOwnProperty(c) && o("99", c), Xo[c] = i;
                        var l = i.phasedRegistrationNames;
                        if (l) {
                            for (a in l) l.hasOwnProperty(a) && s(l[a], u, c);
                            a = !0
                        } else i.registrationName ? (s(i.registrationName, u, c), a = !0) : a = !1;
                        a || o("98", r, e)
                    }
                }
            }
    }

    function s(e, t, n) {
        Qo[e] && o("100", e), Qo[e] = t, Go[e] = t.eventTypes[n].dependencies
    }

    function u(e) {
        Vo && o("101"), Vo = Array.prototype.slice.call(e), i()
    }

    function c(e) {
        var t, n = !1;
        for (t in e)
            if (e.hasOwnProperty(t)) {
                var r = e[t];
                $o.hasOwnProperty(t) && $o[t] === r || ($o[t] && o("102", t), $o[t] = r, n = !0)
            } n && i()
    }

    function l(e, t, n, o) {
        t = e.type || "unknown-event", e.currentTarget = er(o), Ho.invokeGuardedCallbackAndCatchFirstError(t, n, void 0, e), e.currentTarget = null
    }

    function f(e, t) {
        return null == t && o("30"), null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
    }

    function d(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
    }

    function p(e, t) {
        if (e) {
            var n = e._dispatchListeners,
                o = e._dispatchInstances;
            if (Array.isArray(n))
                for (var r = 0; r < n.length && !e.isPropagationStopped(); r++) l(e, t, n[r], o[r]);
            else n && l(e, t, n, o);
            e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e)
        }
    }

    function h(e) {
        return p(e, !0)
    }

    function y(e) {
        return p(e, !1)
    }

    function m(e, t) {
        var n = e.stateNode;
        if (!n) return null;
        var r = Jo(n);
        if (!r) return null;
        n = r[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
                (r = !r.disabled) || (e = e.type, r = !("button" === e || "input" === e || "select" === e || "textarea" === e)), e = !r;
                break e;
            default:
                e = !1
        }
        return e ? null : (n && "function" !== typeof n && o("231", t, typeof n), n)
    }

    function g(e, t) {
        null !== e && (tr = f(tr, e)), e = tr, tr = null, e && (t ? d(e, h) : d(e, y), tr && o("95"), Ho.rethrowCaughtError())
    }

    function v(e, t, n, o) {
        for (var r = null, a = 0; a < Ko.length; a++) {
            var i = Ko[a];
            i && (i = i.extractEvents(e, t, n, o)) && (r = f(r, i))
        }
        g(r, !1)
    }

    function b(e) {
        if (e[ar]) return e[ar];
        for (; !e[ar];) {
            if (!e.parentNode) return null;
            e = e.parentNode
        }
        return e = e[ar], 5 === e.tag || 6 === e.tag ? e : null
    }

    function w(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        o("33")
    }

    function x(e) {
        return e[ir] || null
    }

    function k(e) {
        do {
            e = e.return
        } while (e && 5 !== e.tag);
        return e || null
    }

    function S(e, t, n) {
        for (var o = []; e;) o.push(e), e = k(e);
        for (e = o.length; 0 < e--;) t(o[e], "captured", n);
        for (e = 0; e < o.length; e++) t(o[e], "bubbled", n)
    }

    function _(e, t, n) {
        (t = m(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = f(n._dispatchListeners, t), n._dispatchInstances = f(n._dispatchInstances, e))
    }

    function C(e) {
        e && e.dispatchConfig.phasedRegistrationNames && S(e._targetInst, _, e)
    }

    function E(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
            var t = e._targetInst;
            t = t ? k(t) : null, S(t, _, e)
        }
    }

    function R(e, t, n) {
        e && n && n.dispatchConfig.registrationName && (t = m(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = f(n._dispatchListeners, t), n._dispatchInstances = f(n._dispatchInstances, e))
    }

    function T(e) {
        e && e.dispatchConfig.registrationName && R(e._targetInst, null, e)
    }

    function O(e) {
        d(e, C)
    }

    function L(e, t, n, o) {
        if (n && o) e: {
            for (var r = n, a = o, i = 0, s = r; s; s = k(s)) i++;s = 0;
            for (var u = a; u; u = k(u)) s++;
            for (; 0 < i - s;) r = k(r),
            i--;
            for (; 0 < s - i;) a = k(a),
            s--;
            for (; i--;) {
                if (r === a || r === a.alternate) break e;
                r = k(r), a = k(a)
            }
            r = null
        }
        else r = null;
        for (a = r, r = []; n && n !== a && (null === (i = n.alternate) || i !== a);) r.push(n), n = k(n);
        for (n = []; o && o !== a && (null === (i = o.alternate) || i !== a);) n.push(o), o = k(o);
        for (o = 0; o < r.length; o++) R(r[o], "bubbled", e);
        for (e = n.length; 0 < e--;) R(n[e], "captured", t)
    }

    function D(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n["ms" + e] = "MS" + t, n["O" + e] = "o" + t.toLowerCase(), n
    }

    function P(e) {
        if (lr[e]) return lr[e];
        if (!cr[e]) return e;
        var t, n = cr[e];
        for (t in n)
            if (n.hasOwnProperty(t) && t in fr) return lr[e] = n[t];
        return e
    }

    function j() {
        return !gr && Io.canUseDOM && (gr = "textContent" in document.documentElement ? "textContent" : "innerText"), gr
    }

    function N() {
        if (vr._fallbackText) return vr._fallbackText;
        var e, t, n = vr._startText,
            o = n.length,
            r = M(),
            a = r.length;
        for (e = 0; e < o && n[e] === r[e]; e++);
        var i = o - e;
        for (t = 1; t <= i && n[o - t] === r[a - t]; t++);
        return vr._fallbackText = r.slice(e, 1 < t ? 1 - t : void 0), vr._fallbackText
    }

    function M() {
        return "value" in vr._root ? vr._root.value : vr._root[j()]
    }

    function A(e, t, n, o) {
        this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface;
        for (var r in e) e.hasOwnProperty(r) && ((t = e[r]) ? this[r] = t(n) : "target" === r ? this.target = o : this[r] = n[r]);
        return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? zo.thatReturnsTrue : zo.thatReturnsFalse, this.isPropagationStopped = zo.thatReturnsFalse, this
    }

    function I(e, t, n, o) {
        if (this.eventPool.length) {
            var r = this.eventPool.pop();
            return this.call(r, e, t, n, o), r
        }
        return new this(e, t, n, o)
    }

    function U(e) {
        e instanceof this || o("223"), e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
    }

    function z(e) {
        e.eventPool = [], e.getPooled = I, e.release = U
    }

    function B(e, t) {
        switch (e) {
            case "keyup":
                return -1 !== Sr.indexOf(t.keyCode);
            case "keydown":
                return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "blur":
                return !0;
            default:
                return !1
        }
    }

    function F(e) {
        return e = e.detail, "object" === typeof e && "data" in e ? e.data : null
    }

    function W(e, t) {
        switch (e) {
            case "compositionend":
                return F(t);
            case "keypress":
                return 32 !== t.which ? null : (Lr = !0, Tr);
            case "textInput":
                return e = t.data, e === Tr && Lr ? null : e;
            default:
                return null
        }
    }

    function q(e, t) {
        if (Dr) return "compositionend" === e || !_r && B(e, t) ? (e = N(), vr._root = null, vr._startText = null, vr._fallbackText = null, Dr = !1, e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return Rr ? null : t.data;
            default:
                return null
        }
    }

    function H(e) {
        if (e = Zo(e)) {
            jr && "function" === typeof jr.restoreControlledState || o("194");
            var t = Jo(e.stateNode);
            jr.restoreControlledState(e.stateNode, e.type, t)
        }
    }

    function V(e) {
        Mr ? Ar ? Ar.push(e) : Ar = [e] : Mr = e
    }

    function $() {
        return null !== Mr || null !== Ar
    }

    function K() {
        if (Mr) {
            var e = Mr,
                t = Ar;
            if (Ar = Mr = null, H(e), t)
                for (e = 0; e < t.length; e++) H(t[e])
        }
    }

    function X(e, t) {
        return e(t)
    }

    function Q(e, t, n) {
        return e(t, n)
    }

    function G() {}

    function Y(e, t) {
        if (Ur) return e(t);
        Ur = !0;
        try {
            return X(e, t)
        } finally {
            Ur = !1, $() && (G(), K())
        }
    }

    function J(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!zr[e.type] : "textarea" === t
    }

    function Z(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
    }

    function ee(e, t) {
        return !(!Io.canUseDOM || t && !("addEventListener" in document)) && (e = "on" + e, t = e in document, t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = "function" === typeof t[e]), t)
    }

    function te(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
    }

    function ne(e) {
        var t = te(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            o = "" + e[t];
        if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
            var r = n.get,
                a = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return r.call(this)
                },
                set: function(e) {
                    o = "" + e, a.call(this, e)
                }
            }), Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }), {
                getValue: function() {
                    return o
                },
                setValue: function(e) {
                    o = "" + e
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function oe(e) {
        e._valueTracker || (e._valueTracker = ne(e))
    }

    function re(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            o = "";
        return e && (o = te(e) ? e.checked ? "true" : "false" : e.value), (e = o) !== n && (t.setValue(e), !0)
    }

    function ae(e) {
        return null === e || "undefined" === typeof e ? null : (e = Jr && e[Jr] || e["@@iterator"], "function" === typeof e ? e : null)
    }

    function ie(e) {
        var t = e.type;
        if ("function" === typeof t) return t.displayName || t.name;
        if ("string" === typeof t) return t;
        switch (t) {
            case Qr:
                return "AsyncMode";
            case Xr:
                return "Context.Consumer";
            case Hr:
                return "ReactFragment";
            case qr:
                return "ReactPortal";
            case $r:
                return "Profiler(" + e.pendingProps.id + ")";
            case Kr:
                return "Context.Provider";
            case Vr:
                return "StrictMode";
            case Yr:
                return "Timeout"
        }
        if ("object" === typeof t && null !== t) switch (t.$$typeof) {
            case Gr:
                return e = t.render.displayName || t.render.name || "", "" !== e ? "ForwardRef(" + e + ")" : "ForwardRef"
        }
        return null
    }

    function se(e) {
        var t = "";
        do {
            e: switch (e.tag) {
                case 0:
                case 1:
                case 2:
                case 5:
                    var n = e._debugOwner,
                        o = e._debugSource,
                        r = ie(e),
                        a = null;
                    n && (a = ie(n)), n = o, r = "\n    in " + (r || "Unknown") + (n ? " (at " + n.fileName.replace(/^.*[\\\/]/, "") + ":" + n.lineNumber + ")" : a ? " (created by " + a + ")" : "");
                    break e;
                default:
                    r = ""
            }
            t += r,
            e = e.return
        } while (e);
        return t
    }

    function ue(e) {
        return !!ea.call(na, e) || !ea.call(ta, e) && (Zr.test(e) ? na[e] = !0 : (ta[e] = !0, !1))
    }

    function ce(e, t, n, o) {
        if (null !== n && 0 === n.type) return !1;
        switch (typeof t) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return !o && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
            default:
                return !1
        }
    }

    function le(e, t, n, o) {
        if (null === t || "undefined" === typeof t || ce(e, t, n, o)) return !0;
        if (o) return !1;
        if (null !== n) switch (n.type) {
            case 3:
                return !t;
            case 4:
                return !1 === t;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
        return !1
    }

    function fe(e, t, n, o, r) {
        this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = o, this.attributeNamespace = r, this.mustUseProperty = n, this.propertyName = e, this.type = t
    }

    function de(e) {
        return e[1].toUpperCase()
    }

    function pe(e, t, n, o) {
        var r = oa.hasOwnProperty(t) ? oa[t] : null;
        (null !== r ? 0 === r.type : !o && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (le(t, n, r, o) && (n = null), o || null === r ? ue(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : r.mustUseProperty ? e[r.propertyName] = null === n ? 3 !== r.type && "" : n : (t = r.attributeName, o = r.attributeNamespace, null === n ? e.removeAttribute(t) : (r = r.type, n = 3 === r || 4 === r && !0 === n ? "" : "" + n, o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n))))
    }

    function he(e, t) {
        var n = t.checked;
        return Uo({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked
        })
    }

    function ye(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
            o = null != t.checked ? t.checked : t.defaultChecked;
        n = we(null != t.value ? t.value : n), e._wrapperState = {
            initialChecked: o,
            initialValue: n,
            controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        }
    }

    function me(e, t) {
        null != (t = t.checked) && pe(e, "checked", t, !1)
    }

    function ge(e, t) {
        me(e, t);
        var n = we(t.value);
        null != n && ("number" === t.type ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n)), t.hasOwnProperty("value") ? be(e, t.type, n) : t.hasOwnProperty("defaultValue") && be(e, t.type, we(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
    }

    function ve(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            t = "" + e._wrapperState.initialValue;
            var o = e.value;
            n || t === o || (e.value = t), e.defaultValue = t
        }
        n = e.name, "" !== n && (e.name = ""), e.defaultChecked = !e.defaultChecked, e.defaultChecked = !e.defaultChecked, "" !== n && (e.name = n)
    }

    function be(e, t, n) {
        "number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }

    function we(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
                return e;
            default:
                return ""
        }
    }

    function xe(e, t, n) {
        return e = A.getPooled(aa.change, e, t, n), e.type = "change", V(n), O(e), e
    }

    function ke(e) {
        g(e, !1)
    }

    function Se(e) {
        if (re(w(e))) return e
    }

    function _e(e, t) {
        if ("change" === e) return t
    }

    function Ce() {
        ia && (ia.detachEvent("onpropertychange", Ee), sa = ia = null)
    }

    function Ee(e) {
        "value" === e.propertyName && Se(sa) && (e = xe(sa, e, Z(e)), Y(ke, e))
    }

    function Re(e, t, n) {
        "focus" === e ? (Ce(), ia = t, sa = n, ia.attachEvent("onpropertychange", Ee)) : "blur" === e && Ce()
    }

    function Te(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Se(sa)
    }

    function Oe(e, t) {
        if ("click" === e) return Se(t)
    }

    function Le(e, t) {
        if ("input" === e || "change" === e) return Se(t)
    }

    function De(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = fa[e]) && !!t[e]
    }

    function Pe() {
        return De
    }

    function je(e) {
        var t = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            if (0 !== (2 & t.effectTag)) return 1;
            for (; t.return;)
                if (t = t.return, 0 !== (2 & t.effectTag)) return 1
        }
        return 3 === t.tag ? 2 : 3
    }

    function Ne(e) {
        2 !== je(e) && o("188")
    }

    function Me(e) {
        var t = e.alternate;
        if (!t) return t = je(e), 3 === t && o("188"), 1 === t ? null : e;
        for (var n = e, r = t;;) {
            var a = n.return,
                i = a ? a.alternate : null;
            if (!a || !i) break;
            if (a.child === i.child) {
                for (var s = a.child; s;) {
                    if (s === n) return Ne(a), e;
                    if (s === r) return Ne(a), t;
                    s = s.sibling
                }
                o("188")
            }
            if (n.return !== r.return) n = a, r = i;
            else {
                s = !1;
                for (var u = a.child; u;) {
                    if (u === n) {
                        s = !0, n = a, r = i;
                        break
                    }
                    if (u === r) {
                        s = !0, r = a, n = i;
                        break
                    }
                    u = u.sibling
                }
                if (!s) {
                    for (u = i.child; u;) {
                        if (u === n) {
                            s = !0, n = i, r = a;
                            break
                        }
                        if (u === r) {
                            s = !0, r = i, n = a;
                            break
                        }
                        u = u.sibling
                    }
                    s || o("189")
                }
            }
            n.alternate !== r && o("190")
        }
        return 3 !== n.tag && o("188"), n.stateNode.current === n ? e : t
    }

    function Ae(e) {
        if (!(e = Me(e))) return null;
        for (var t = e;;) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) t.child.return = t, t = t.child;
            else {
                if (t === e) break;
                for (; !t.sibling;) {
                    if (!t.return || t.return === e) return null;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return null
    }

    function Ie(e) {
        if (!(e = Me(e))) return null;
        for (var t = e;;) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child && 4 !== t.tag) t.child.return = t, t = t.child;
            else {
                if (t === e) break;
                for (; !t.sibling;) {
                    if (!t.return || t.return === e) return null;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return null
    }

    function Ue(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
    }

    function ze(e, t) {
        var n = e[0];
        e = e[1];
        var o = "on" + (e[0].toUpperCase() + e.slice(1));
        t = {
            phasedRegistrationNames: {
                bubbled: o,
                captured: o + "Capture"
            },
            dependencies: [n],
            isInteractive: t
        }, Ra[e] = t, Ta[n] = t
    }

    function Be(e) {
        var t = e.targetInst;
        do {
            if (!t) {
                e.ancestors.push(t);
                break
            }
            var n;
            for (n = t; n.return;) n = n.return;
            if (!(n = 3 !== n.tag ? null : n.stateNode.containerInfo)) break;
            e.ancestors.push(t), t = b(n)
        } while (t);
        for (n = 0; n < e.ancestors.length; n++) t = e.ancestors[n], v(e.topLevelType, t, e.nativeEvent, Z(e.nativeEvent))
    }

    function Fe(e) {
        Pa = !!e
    }

    function We(e, t) {
        if (!t) return null;
        var n = (La(e) ? He : Ve).bind(null, e);
        t.addEventListener(e, n, !1)
    }

    function qe(e, t) {
        if (!t) return null;
        var n = (La(e) ? He : Ve).bind(null, e);
        t.addEventListener(e, n, !0)
    }

    function He(e, t) {
        Q(Ve, e, t)
    }

    function Ve(e, t) {
        if (Pa) {
            var n = Z(t);
            if (n = b(n), null === n || "number" !== typeof n.tag || 2 === je(n) || (n = null), Da.length) {
                var o = Da.pop();
                o.topLevelType = e, o.nativeEvent = t, o.targetInst = n, e = o
            } else e = {
                topLevelType: e,
                nativeEvent: t,
                targetInst: n,
                ancestors: []
            };
            try {
                Y(Be, e)
            } finally {
                e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, 10 > Da.length && Da.push(e)
            }
        }
    }

    function $e(e) {
        return Object.prototype.hasOwnProperty.call(e, Aa) || (e[Aa] = Ma++, Na[e[Aa]] = {}), Na[e[Aa]]
    }

    function Ke(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function Xe(e, t) {
        var n = Ke(e);
        e = 0;
        for (var o; n;) {
            if (3 === n.nodeType) {
                if (o = e + n.textContent.length, e <= t && o >= t) return {
                    node: n,
                    offset: t - e
                };
                e = o
            }
            e: {
                for (; n;) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = Ke(n)
        }
    }

    function Qe(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
    }

    function Ge(e, t) {
        if (Wa || null == za || za !== Bo()) return null;
        var n = za;
        return "selectionStart" in n && Qe(n) ? n = {
            start: n.selectionStart,
            end: n.selectionEnd
        } : window.getSelection ? (n = window.getSelection(), n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        }) : n = void 0, Fa && Fo(Fa, n) ? null : (Fa = n, e = A.getPooled(Ua.select, Ba, e, t), e.type = "select", e.target = za, O(e), e)
    }

    function Ye(e) {
        var t = "";
        return Ao.Children.forEach(e, function(e) {
            null == e || "string" !== typeof e && "number" !== typeof e || (t += e)
        }), t
    }

    function Je(e, t) {
        return e = Uo({
            children: void 0
        }, t), (t = Ye(t.children)) && (e.children = t), e
    }

    function Ze(e, t, n, o) {
        if (e = e.options, t) {
            t = {};
            for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
            for (n = 0; n < e.length; n++) r = t.hasOwnProperty("$" + e[n].value), e[n].selected !== r && (e[n].selected = r), r && o && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + n, t = null, r = 0; r < e.length; r++) {
                if (e[r].value === n) return e[r].selected = !0, void(o && (e[r].defaultSelected = !0));
                null !== t || e[r].disabled || (t = e[r])
            }
            null !== t && (t.selected = !0)
        }
    }

    function et(e, t) {
        var n = t.value;
        e._wrapperState = {
            initialValue: null != n ? n : t.defaultValue,
            wasMultiple: !!t.multiple
        }
    }

    function tt(e, t) {
        return null != t.dangerouslySetInnerHTML && o("91"), Uo({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }

    function nt(e, t) {
        var n = t.value;
        null == n && (n = t.defaultValue, t = t.children, null != t && (null != n && o("92"), Array.isArray(t) && (1 >= t.length || o("93"), t = t[0]), n = "" + t), null == n && (n = "")), e._wrapperState = {
            initialValue: "" + n
        }
    }

    function ot(e, t) {
        var n = t.value;
        null != n && (n = "" + n, n !== e.value && (e.value = n), null == t.defaultValue && (e.defaultValue = n)), null != t.defaultValue && (e.defaultValue = t.defaultValue)
    }

    function rt(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && (e.value = t)
    }

    function at(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function it(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e ? at(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
    }

    function st(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
        }
        e.textContent = t
    }

    function ut(e, t) {
        e = e.style;
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var o = 0 === n.indexOf("--"),
                    r = n,
                    a = t[n];
                r = null == a || "boolean" === typeof a || "" === a ? "" : o || "number" !== typeof a || 0 === a || yi.hasOwnProperty(r) && yi[r] ? ("" + a).trim() : a + "px", "float" === n && (n = "cssFloat"), o ? e.setProperty(n, r) : e[n] = r
            }
    }

    function ct(e, t, n) {
        t && (gi[e] && (null != t.children || null != t.dangerouslySetInnerHTML) && o("137", e, n()), null != t.dangerouslySetInnerHTML && (null != t.children && o("60"), "object" === typeof t.dangerouslySetInnerHTML && "__html" in t.dangerouslySetInnerHTML || o("61")), null != t.style && "object" !== typeof t.style && o("62", n()))
    }

    function lt(e, t) {
        if (-1 === e.indexOf("-")) return "string" === typeof t.is;
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }

    function ft(e, t) {
        e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument;
        var n = $e(e);
        t = Go[t];
        for (var o = 0; o < t.length; o++) {
            var r = t[o];
            if (!n.hasOwnProperty(r) || !n[r]) {
                switch (r) {
                    case "scroll":
                        qe("scroll", e);
                        break;
                    case "focus":
                    case "blur":
                        qe("focus", e), qe("blur", e), n.blur = !0, n.focus = !0;
                        break;
                    case "cancel":
                    case "close":
                        ee(r, !0) && qe(r, e);
                        break;
                    case "invalid":
                    case "submit":
                    case "reset":
                        break;
                    default:
                        -1 === mr.indexOf(r) && We(r, e)
                }
                n[r] = !0
            }
        }
    }

    function dt(e, t, n, o) {
        return n = 9 === n.nodeType ? n : n.ownerDocument, o === di.html && (o = at(e)), o === di.html ? "script" === e ? (e = n.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : e = "string" === typeof t.is ? n.createElement(e, {
            is: t.is
        }) : n.createElement(e) : e = n.createElementNS(o, e), e
    }

    function pt(e, t) {
        return (9 === t.nodeType ? t : t.ownerDocument).createTextNode(e)
    }

    function ht(e, t, n, o) {
        var r = lt(t, n);
        switch (t) {
            case "iframe":
            case "object":
                We("load", e);
                var a = n;
                break;
            case "video":
            case "audio":
                for (a = 0; a < mr.length; a++) We(mr[a], e);
                a = n;
                break;
            case "source":
                We("error", e), a = n;
                break;
            case "img":
            case "image":
            case "link":
                We("error", e), We("load", e), a = n;
                break;
            case "form":
                We("reset", e), We("submit", e), a = n;
                break;
            case "details":
                We("toggle", e), a = n;
                break;
            case "input":
                ye(e, n), a = he(e, n), We("invalid", e), ft(o, "onChange");
                break;
            case "option":
                a = Je(e, n);
                break;
            case "select":
                et(e, n), a = Uo({}, n, {
                    value: void 0
                }), We("invalid", e), ft(o, "onChange");
                break;
            case "textarea":
                nt(e, n), a = tt(e, n), We("invalid", e), ft(o, "onChange");
                break;
            default:
                a = n
        }
        ct(t, a, vi);
        var i, s = a;
        for (i in s)
            if (s.hasOwnProperty(i)) {
                var u = s[i];
                "style" === i ? ut(e, u, vi) : "dangerouslySetInnerHTML" === i ? null != (u = u ? u.__html : void 0) && hi(e, u) : "children" === i ? "string" === typeof u ? ("textarea" !== t || "" !== u) && st(e, u) : "number" === typeof u && st(e, "" + u) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (Qo.hasOwnProperty(i) ? null != u && ft(o, i) : null != u && pe(e, i, u, r))
            } switch (t) {
            case "input":
                oe(e), ve(e, n, !1);
                break;
            case "textarea":
                oe(e), rt(e, n);
                break;
            case "option":
                null != n.value && e.setAttribute("value", n.value);
                break;
            case "select":
                e.multiple = !!n.multiple, t = n.value, null != t ? Ze(e, !!n.multiple, t, !1) : null != n.defaultValue && Ze(e, !!n.multiple, n.defaultValue, !0);
                break;
            default:
                "function" === typeof a.onClick && (e.onclick = zo)
        }
    }

    function yt(e, t, n, o, r) {
        var a = null;
        switch (t) {
            case "input":
                n = he(e, n), o = he(e, o), a = [];
                break;
            case "option":
                n = Je(e, n), o = Je(e, o), a = [];
                break;
            case "select":
                n = Uo({}, n, {
                    value: void 0
                }), o = Uo({}, o, {
                    value: void 0
                }), a = [];
                break;
            case "textarea":
                n = tt(e, n), o = tt(e, o), a = [];
                break;
            default:
                "function" !== typeof n.onClick && "function" === typeof o.onClick && (e.onclick = zo)
        }
        ct(t, o, vi), t = e = void 0;
        var i = null;
        for (e in n)
            if (!o.hasOwnProperty(e) && n.hasOwnProperty(e) && null != n[e])
                if ("style" === e) {
                    var s = n[e];
                    for (t in s) s.hasOwnProperty(t) && (i || (i = {}), i[t] = "")
                } else "dangerouslySetInnerHTML" !== e && "children" !== e && "suppressContentEditableWarning" !== e && "suppressHydrationWarning" !== e && "autoFocus" !== e && (Qo.hasOwnProperty(e) ? a || (a = []) : (a = a || []).push(e, null));
        for (e in o) {
            var u = o[e];
            if (s = null != n ? n[e] : void 0, o.hasOwnProperty(e) && u !== s && (null != u || null != s))
                if ("style" === e)
                    if (s) {
                        for (t in s) !s.hasOwnProperty(t) || u && u.hasOwnProperty(t) || (i || (i = {}), i[t] = "");
                        for (t in u) u.hasOwnProperty(t) && s[t] !== u[t] && (i || (i = {}), i[t] = u[t])
                    } else i || (a || (a = []), a.push(e, i)), i = u;
            else "dangerouslySetInnerHTML" === e ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, null != u && s !== u && (a = a || []).push(e, "" + u)) : "children" === e ? s === u || "string" !== typeof u && "number" !== typeof u || (a = a || []).push(e, "" + u) : "suppressContentEditableWarning" !== e && "suppressHydrationWarning" !== e && (Qo.hasOwnProperty(e) ? (null != u && ft(r, e), a || s === u || (a = [])) : (a = a || []).push(e, u))
        }
        return i && (a = a || []).push("style", i), a
    }

    function mt(e, t, n, o, r) {
        "input" === n && "radio" === r.type && null != r.name && me(e, r), lt(n, o), o = lt(n, r);
        for (var a = 0; a < t.length; a += 2) {
            var i = t[a],
                s = t[a + 1];
            "style" === i ? ut(e, s, vi) : "dangerouslySetInnerHTML" === i ? hi(e, s) : "children" === i ? st(e, s) : pe(e, i, s, o)
        }
        switch (n) {
            case "input":
                ge(e, r);
                break;
            case "textarea":
                ot(e, r);
                break;
            case "select":
                e._wrapperState.initialValue = void 0, t = e._wrapperState.wasMultiple, e._wrapperState.wasMultiple = !!r.multiple, n = r.value, null != n ? Ze(e, !!r.multiple, n, !1) : t !== !!r.multiple && (null != r.defaultValue ? Ze(e, !!r.multiple, r.defaultValue, !0) : Ze(e, !!r.multiple, r.multiple ? [] : "", !1))
        }
    }

    function gt(e, t, n, o, r) {
        switch (t) {
            case "iframe":
            case "object":
                We("load", e);
                break;
            case "video":
            case "audio":
                for (o = 0; o < mr.length; o++) We(mr[o], e);
                break;
            case "source":
                We("error", e);
                break;
            case "img":
            case "image":
            case "link":
                We("error", e), We("load", e);
                break;
            case "form":
                We("reset", e), We("submit", e);
                break;
            case "details":
                We("toggle", e);
                break;
            case "input":
                ye(e, n), We("invalid", e), ft(r, "onChange");
                break;
            case "select":
                et(e, n), We("invalid", e), ft(r, "onChange");
                break;
            case "textarea":
                nt(e, n), We("invalid", e), ft(r, "onChange")
        }
        ct(t, n, vi), o = null;
        for (var a in n)
            if (n.hasOwnProperty(a)) {
                var i = n[a];
                "children" === a ? "string" === typeof i ? e.textContent !== i && (o = ["children", i]) : "number" === typeof i && e.textContent !== "" + i && (o = ["children", "" + i]) : Qo.hasOwnProperty(a) && null != i && ft(r, a)
            } switch (t) {
            case "input":
                oe(e), ve(e, n, !0);
                break;
            case "textarea":
                oe(e), rt(e, n);
                break;
            case "select":
            case "option":
                break;
            default:
                "function" === typeof n.onClick && (e.onclick = zo)
        }
        return o
    }

    function vt(e, t) {
        return e.nodeValue !== t
    }

    function bt(e, t) {
        switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                return !!t.autoFocus
        }
        return !1
    }

    function wt(e, t) {
        return "textarea" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && "string" === typeof t.dangerouslySetInnerHTML.__html
    }

    function xt(e) {
        for (e = e.nextSibling; e && 1 !== e.nodeType && 3 !== e.nodeType;) e = e.nextSibling;
        return e
    }

    function kt(e) {
        for (e = e.firstChild; e && 1 !== e.nodeType && 3 !== e.nodeType;) e = e.nextSibling;
        return e
    }

    function St(e) {
        return {
            current: e
        }
    }

    function _t(e) {
        0 > Ei || (e.current = Ci[Ei], Ci[Ei] = null, Ei--)
    }

    function Ct(e, t) {
        Ei++, Ci[Ei] = e.current, e.current = t
    }

    function Et(e) {
        return Tt(e) ? Oi : Ri.current
    }

    function Rt(e, t) {
        var n = e.type.contextTypes;
        if (!n) return qo;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t) return o.__reactInternalMemoizedMaskedChildContext;
        var r, a = {};
        for (r in n) a[r] = t[r];
        return o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
    }

    function Tt(e) {
        return 2 === e.tag && null != e.type.childContextTypes
    }

    function Ot(e) {
        Tt(e) && (_t(Ti, e), _t(Ri, e))
    }

    function Lt(e) {
        _t(Ti, e), _t(Ri, e)
    }

    function Dt(e, t, n) {
        Ri.current !== qo && o("168"), Ct(Ri, t, e), Ct(Ti, n, e)
    }

    function Pt(e, t) {
        var n = e.stateNode,
            r = e.type.childContextTypes;
        if ("function" !== typeof n.getChildContext) return t;
        n = n.getChildContext();
        for (var a in n) a in r || o("108", ie(e) || "Unknown", a);
        return Uo({}, t, n)
    }

    function jt(e) {
        if (!Tt(e)) return !1;
        var t = e.stateNode;
        return t = t && t.__reactInternalMemoizedMergedChildContext || qo, Oi = Ri.current, Ct(Ri, t, e), Ct(Ti, Ti.current, e), !0
    }

    function Nt(e, t) {
        var n = e.stateNode;
        if (n || o("169"), t) {
            var r = Pt(e, Oi);
            n.__reactInternalMemoizedMergedChildContext = r, _t(Ti, e), _t(Ri, e), Ct(Ri, r, e)
        } else _t(Ti, e);
        Ct(Ti, t, e)
    }

    function Mt(e, t, n, o) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.expirationTime = 0, this.alternate = null
    }

    function At(e, t, n) {
        var o = e.alternate;
        return null === o ? (o = new Mt(e.tag, t, e.key, e.mode), o.type = e.type, o.stateNode = e.stateNode, o.alternate = e, e.alternate = o) : (o.pendingProps = t, o.effectTag = 0, o.nextEffect = null, o.firstEffect = null, o.lastEffect = null), o.expirationTime = n, o.child = e.child, o.memoizedProps = e.memoizedProps, o.memoizedState = e.memoizedState, o.updateQueue = e.updateQueue, o.sibling = e.sibling, o.index = e.index, o.ref = e.ref, o
    }

    function It(e, t, n) {
        var r = e.type,
            a = e.key;
        if (e = e.props, "function" === typeof r) var i = r.prototype && r.prototype.isReactComponent ? 2 : 0;
        else if ("string" === typeof r) i = 5;
        else switch (r) {
            case Hr:
                return Ut(e.children, t, n, a);
            case Qr:
                i = 11, t |= 3;
                break;
            case Vr:
                i = 11, t |= 2;
                break;
            case $r:
                return r = new Mt(15, e, a, 4 | t), r.type = $r, r.expirationTime = n, r;
            case Yr:
                i = 16, t |= 2;
                break;
            default:
                e: {
                    switch ("object" === typeof r && null !== r ? r.$$typeof : null) {
                        case Kr:
                            i = 13;
                            break e;
                        case Xr:
                            i = 12;
                            break e;
                        case Gr:
                            i = 14;
                            break e;
                        default:
                            o("130", null == r ? r : typeof r, "")
                    }
                    i = void 0
                }
        }
        return t = new Mt(i, e, a, t), t.type = r, t.expirationTime = n, t
    }

    function Ut(e, t, n, o) {
        return e = new Mt(10, e, o, t), e.expirationTime = n, e
    }

    function zt(e, t, n) {
        return e = new Mt(6, e, null, t), e.expirationTime = n, e
    }

    function Bt(e, t, n) {
        return t = new Mt(4, null !== e.children ? e.children : [], e.key, t), t.expirationTime = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function Ft(e, t, n) {
        return t = new Mt(3, null, null, t ? 3 : 0), e = {
            current: t,
            containerInfo: e,
            pendingChildren: null,
            earliestPendingTime: 0,
            latestPendingTime: 0,
            earliestSuspendedTime: 0,
            latestSuspendedTime: 0,
            latestPingedTime: 0,
            pendingCommitExpirationTime: 0,
            finishedWork: null,
            context: null,
            pendingContext: null,
            hydrate: n,
            remainingExpirationTime: 0,
            firstBatch: null,
            nextScheduledRoot: null
        }, t.stateNode = e
    }

    function Wt(e) {
        return function(t) {
            try {
                return e(t)
            } catch (e) {}
        }
    }

    function qt(e) {
        if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (t.isDisabled || !t.supportsFiber) return !0;
        try {
            var n = t.inject(e);
            Li = Wt(function(e) {
                return t.onCommitFiberRoot(n, e)
            }), Di = Wt(function(e) {
                return t.onCommitFiberUnmount(n, e)
            })
        } catch (e) {}
        return !0
    }

    function Ht(e) {
        "function" === typeof Li && Li(e)
    }

    function Vt(e) {
        "function" === typeof Di && Di(e)
    }

    function $t(e) {
        return {
            expirationTime: 0,
            baseState: e,
            firstUpdate: null,
            lastUpdate: null,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null
        }
    }

    function Kt(e) {
        return {
            expirationTime: e.expirationTime,
            baseState: e.baseState,
            firstUpdate: e.firstUpdate,
            lastUpdate: e.lastUpdate,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null
        }
    }

    function Xt(e) {
        return {
            expirationTime: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
            nextEffect: null
        }
    }

    function Qt(e, t, n) {
        null === e.lastUpdate ? e.firstUpdate = e.lastUpdate = t : (e.lastUpdate.next = t, e.lastUpdate = t), (0 === e.expirationTime || e.expirationTime > n) && (e.expirationTime = n)
    }

    function Gt(e, t, n) {
        var o = e.alternate;
        if (null === o) {
            var r = e.updateQueue,
                a = null;
            null === r && (r = e.updateQueue = $t(e.memoizedState))
        } else r = e.updateQueue, a = o.updateQueue, null === r ? null === a ? (r = e.updateQueue = $t(e.memoizedState), a = o.updateQueue = $t(o.memoizedState)) : r = e.updateQueue = Kt(a) : null === a && (a = o.updateQueue = Kt(r));
        null === a || r === a ? Qt(r, t, n) : null === r.lastUpdate || null === a.lastUpdate ? (Qt(r, t, n), Qt(a, t, n)) : (Qt(r, t, n), a.lastUpdate = t)
    }

    function Yt(e, t, n) {
        var o = e.updateQueue;
        o = null === o ? e.updateQueue = $t(e.memoizedState) : Jt(e, o), null === o.lastCapturedUpdate ? o.firstCapturedUpdate = o.lastCapturedUpdate = t : (o.lastCapturedUpdate.next = t, o.lastCapturedUpdate = t), (0 === o.expirationTime || o.expirationTime > n) && (o.expirationTime = n)
    }

    function Jt(e, t) {
        var n = e.alternate;
        return null !== n && t === n.updateQueue && (t = e.updateQueue = Kt(t)), t
    }

    function Zt(e, t, n, o, r, a) {
        switch (n.tag) {
            case 1:
                return e = n.payload, "function" === typeof e ? e.call(a, o, r) : e;
            case 3:
                e.effectTag = -1025 & e.effectTag | 64;
            case 0:
                if (e = n.payload, null === (r = "function" === typeof e ? e.call(a, o, r) : e) || void 0 === r) break;
                return Uo({}, o, r);
            case 2:
                Pi = !0
        }
        return o
    }

    function en(e, t, n, o, r) {
        if (Pi = !1, !(0 === t.expirationTime || t.expirationTime > r)) {
            t = Jt(e, t);
            for (var a = t.baseState, i = null, s = 0, u = t.firstUpdate, c = a; null !== u;) {
                var l = u.expirationTime;
                l > r ? (null === i && (i = u, a = c), (0 === s || s > l) && (s = l)) : (c = Zt(e, t, u, c, n, o), null !== u.callback && (e.effectTag |= 32, u.nextEffect = null, null === t.lastEffect ? t.firstEffect = t.lastEffect = u : (t.lastEffect.nextEffect = u, t.lastEffect = u))), u = u.next
            }
            for (l = null, u = t.firstCapturedUpdate; null !== u;) {
                var f = u.expirationTime;
                f > r ? (null === l && (l = u, null === i && (a = c)), (0 === s || s > f) && (s = f)) : (c = Zt(e, t, u, c, n, o), null !== u.callback && (e.effectTag |= 32, u.nextEffect = null, null === t.lastCapturedEffect ? t.firstCapturedEffect = t.lastCapturedEffect = u : (t.lastCapturedEffect.nextEffect = u, t.lastCapturedEffect = u))), u = u.next
            }
            null === i && (t.lastUpdate = null), null === l ? t.lastCapturedUpdate = null : e.effectTag |= 32, null === i && null === l && (a = c), t.baseState = a, t.firstUpdate = i, t.firstCapturedUpdate = l, t.expirationTime = s, e.memoizedState = c
        }
    }

    function tn(e, t) {
        "function" !== typeof e && o("191", e), e.call(t)
    }

    function nn(e, t, n) {
        for (null !== t.firstCapturedUpdate && (null !== t.lastUpdate && (t.lastUpdate.next = t.firstCapturedUpdate, t.lastUpdate = t.lastCapturedUpdate), t.firstCapturedUpdate = t.lastCapturedUpdate = null), e = t.firstEffect, t.firstEffect = t.lastEffect = null; null !== e;) {
            var o = e.callback;
            null !== o && (e.callback = null, tn(o, n)), e = e.nextEffect
        }
        for (e = t.firstCapturedEffect, t.firstCapturedEffect = t.lastCapturedEffect = null; null !== e;) t = e.callback, null !== t && (e.callback = null, tn(t, n)), e = e.nextEffect
    }

    function on(e, t) {
        return {
            value: e,
            source: t,
            stack: se(t)
        }
    }

    function rn(e) {
        var t = e.type._context;
        Ct(Mi, t._changedBits, e), Ct(Ni, t._currentValue, e), Ct(ji, e, e), t._currentValue = e.pendingProps.value, t._changedBits = e.stateNode
    }

    function an(e) {
        var t = Mi.current,
            n = Ni.current;
        _t(ji, e), _t(Ni, e), _t(Mi, e), e = e.type._context, e._currentValue = n, e._changedBits = t
    }

    function sn(e) {
        return e === Ai && o("174"), e
    }

    function un(e, t) {
        Ct(zi, t, e), Ct(Ui, e, e), Ct(Ii, Ai, e);
        var n = t.nodeType;
        switch (n) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : it(null, "");
                break;
            default:
                n = 8 === n ? t.parentNode : t, t = n.namespaceURI || null, n = n.tagName, t = it(t, n)
        }
        _t(Ii, e), Ct(Ii, t, e)
    }

    function cn(e) {
        _t(Ii, e), _t(Ui, e), _t(zi, e)
    }

    function ln(e) {
        Ui.current === e && (_t(Ii, e), _t(Ui, e))
    }

    function fn(e, t, n) {
        var o = e.memoizedState;
        t = t(n, o), o = null === t || void 0 === t ? o : Uo({}, o, t), e.memoizedState = o, null !== (e = e.updateQueue) && 0 === e.expirationTime && (e.baseState = o)
    }

    function dn(e, t, n, o, r, a) {
        var i = e.stateNode;
        return e = e.type, "function" === typeof i.shouldComponentUpdate ? i.shouldComponentUpdate(n, r, a) : !e.prototype || !e.prototype.isPureReactComponent || (!Fo(t, n) || !Fo(o, r))
    }

    function pn(e, t, n, o) {
        e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, o), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, o), t.state !== e && Bi.enqueueReplaceState(t, t.state, null)
    }

    function hn(e, t) {
        var n = e.type,
            o = e.stateNode,
            r = e.pendingProps,
            a = Et(e);
        o.props = r, o.state = e.memoizedState, o.refs = qo, o.context = Rt(e, a), a = e.updateQueue, null !== a && (en(e, a, r, o, t), o.state = e.memoizedState), a = e.type.getDerivedStateFromProps, "function" === typeof a && (fn(e, a, r), o.state = e.memoizedState), "function" === typeof n.getDerivedStateFromProps || "function" === typeof o.getSnapshotBeforeUpdate || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || (n = o.state, "function" === typeof o.componentWillMount && o.componentWillMount(), "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), n !== o.state && Bi.enqueueReplaceState(o, o.state, null), null !== (a = e.updateQueue) && (en(e, a, r, o, t), o.state = e.memoizedState)), "function" === typeof o.componentDidMount && (e.effectTag |= 4)
    }

    function yn(e, t, n) {
        if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
            if (n._owner) {
                n = n._owner;
                var r = void 0;
                n && (2 !== n.tag && o("110"), r = n.stateNode), r || o("147", e);
                var a = "" + e;
                return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === a ? t.ref : (t = function(e) {
                    var t = r.refs === qo ? r.refs = {} : r.refs;
                    null === e ? delete t[a] : t[a] = e
                }, t._stringRef = a, t)
            }
            "string" !== typeof e && o("148"), n._owner || o("254", e)
        }
        return e
    }

    function mn(e, t) {
        "textarea" !== e.type && o("31", "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, "")
    }

    function gn(e) {
        function t(t, n) {
            if (e) {
                var o = t.lastEffect;
                null !== o ? (o.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.effectTag = 8
            }
        }

        function n(n, o) {
            if (!e) return null;
            for (; null !== o;) t(n, o), o = o.sibling;
            return null
        }

        function r(e, t) {
            for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
            return e
        }

        function a(e, t, n) {
            return e = At(e, t, n), e.index = 0, e.sibling = null, e
        }

        function i(t, n, o) {
            return t.index = o, e ? null !== (o = t.alternate) ? (o = o.index, o < n ? (t.effectTag = 2, n) : o) : (t.effectTag = 2, n) : n
        }

        function s(t) {
            return e && null === t.alternate && (t.effectTag = 2), t
        }

        function u(e, t, n, o) {
            return null === t || 6 !== t.tag ? (t = zt(n, e.mode, o), t.return = e, t) : (t = a(t, n, o), t.return = e, t)
        }

        function c(e, t, n, o) {
            return null !== t && t.type === n.type ? (o = a(t, n.props, o), o.ref = yn(e, t, n), o.return = e, o) : (o = It(n, e.mode, o), o.ref = yn(e, t, n), o.return = e, o)
        }

        function l(e, t, n, o) {
            return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Bt(n, e.mode, o), t.return = e, t) : (t = a(t, n.children || [], o), t.return = e, t)
        }

        function f(e, t, n, o, r) {
            return null === t || 10 !== t.tag ? (t = Ut(n, e.mode, o, r), t.return = e, t) : (t = a(t, n, o), t.return = e, t)
        }

        function d(e, t, n) {
            if ("string" === typeof t || "number" === typeof t) return t = zt("" + t, e.mode, n), t.return = e, t;
            if ("object" === typeof t && null !== t) {
                switch (t.$$typeof) {
                    case Wr:
                        return n = It(t, e.mode, n), n.ref = yn(e, null, t), n.return = e, n;
                    case qr:
                        return t = Bt(t, e.mode, n), t.return = e, t
                }
                if (Fi(t) || ae(t)) return t = Ut(t, e.mode, n, null), t.return = e, t;
                mn(e, t)
            }
            return null
        }

        function p(e, t, n, o) {
            var r = null !== t ? t.key : null;
            if ("string" === typeof n || "number" === typeof n) return null !== r ? null : u(e, t, "" + n, o);
            if ("object" === typeof n && null !== n) {
                switch (n.$$typeof) {
                    case Wr:
                        return n.key === r ? n.type === Hr ? f(e, t, n.props.children, o, r) : c(e, t, n, o) : null;
                    case qr:
                        return n.key === r ? l(e, t, n, o) : null
                }
                if (Fi(n) || ae(n)) return null !== r ? null : f(e, t, n, o, null);
                mn(e, n)
            }
            return null
        }

        function h(e, t, n, o, r) {
            if ("string" === typeof o || "number" === typeof o) return e = e.get(n) || null, u(t, e, "" + o, r);
            if ("object" === typeof o && null !== o) {
                switch (o.$$typeof) {
                    case Wr:
                        return e = e.get(null === o.key ? n : o.key) || null, o.type === Hr ? f(t, e, o.props.children, r, o.key) : c(t, e, o, r);
                    case qr:
                        return e = e.get(null === o.key ? n : o.key) || null, l(t, e, o, r)
                }
                if (Fi(o) || ae(o)) return e = e.get(n) || null, f(t, e, o, r, null);
                mn(t, o)
            }
            return null
        }

        function y(o, a, s, u) {
            for (var c = null, l = null, f = a, y = a = 0, m = null; null !== f && y < s.length; y++) {
                f.index > y ? (m = f, f = null) : m = f.sibling;
                var g = p(o, f, s[y], u);
                if (null === g) {
                    null === f && (f = m);
                    break
                }
                e && f && null === g.alternate && t(o, f), a = i(g, a, y), null === l ? c = g : l.sibling = g, l = g, f = m
            }
            if (y === s.length) return n(o, f), c;
            if (null === f) {
                for (; y < s.length; y++)(f = d(o, s[y], u)) && (a = i(f, a, y), null === l ? c = f : l.sibling = f, l = f);
                return c
            }
            for (f = r(o, f); y < s.length; y++)(m = h(f, o, y, s[y], u)) && (e && null !== m.alternate && f.delete(null === m.key ? y : m.key), a = i(m, a, y), null === l ? c = m : l.sibling = m, l = m);
            return e && f.forEach(function(e) {
                return t(o, e)
            }), c
        }

        function m(a, s, u, c) {
            var l = ae(u);
            "function" !== typeof l && o("150"), null == (u = l.call(u)) && o("151");
            for (var f = l = null, y = s, m = s = 0, g = null, v = u.next(); null !== y && !v.done; m++, v = u.next()) {
                y.index > m ? (g = y, y = null) : g = y.sibling;
                var b = p(a, y, v.value, c);
                if (null === b) {
                    y || (y = g);
                    break
                }
                e && y && null === b.alternate && t(a, y), s = i(b, s, m), null === f ? l = b : f.sibling = b, f = b, y = g
            }
            if (v.done) return n(a, y), l;
            if (null === y) {
                for (; !v.done; m++, v = u.next()) null !== (v = d(a, v.value, c)) && (s = i(v, s, m), null === f ? l = v : f.sibling = v, f = v);
                return l
            }
            for (y = r(a, y); !v.done; m++, v = u.next()) null !== (v = h(y, a, m, v.value, c)) && (e && null !== v.alternate && y.delete(null === v.key ? m : v.key), s = i(v, s, m), null === f ? l = v : f.sibling = v, f = v);
            return e && y.forEach(function(e) {
                return t(a, e)
            }), l
        }
        return function(e, r, i, u) {
            var c = "object" === typeof i && null !== i && i.type === Hr && null === i.key;
            c && (i = i.props.children);
            var l = "object" === typeof i && null !== i;
            if (l) switch (i.$$typeof) {
                case Wr:
                    e: {
                        for (l = i.key, c = r; null !== c;) {
                            if (c.key === l) {
                                if (10 === c.tag ? i.type === Hr : c.type === i.type) {
                                    n(e, c.sibling), r = a(c, i.type === Hr ? i.props.children : i.props, u), r.ref = yn(e, c, i), r.return = e, e = r;
                                    break e
                                }
                                n(e, c);
                                break
                            }
                            t(e, c), c = c.sibling
                        }
                        i.type === Hr ? (r = Ut(i.props.children, e.mode, u, i.key), r.return = e, e = r) : (u = It(i, e.mode, u), u.ref = yn(e, r, i), u.return = e, e = u)
                    }
                    return s(e);
                case qr:
                    e: {
                        for (c = i.key; null !== r;) {
                            if (r.key === c) {
                                if (4 === r.tag && r.stateNode.containerInfo === i.containerInfo && r.stateNode.implementation === i.implementation) {
                                    n(e, r.sibling), r = a(r, i.children || [], u), r.return = e, e = r;
                                    break e
                                }
                                n(e, r);
                                break
                            }
                            t(e, r), r = r.sibling
                        }
                        r = Bt(i, e.mode, u),
                        r.return = e,
                        e = r
                    }
                    return s(e)
            }
            if ("string" === typeof i || "number" === typeof i) return i = "" + i, null !== r && 6 === r.tag ? (n(e, r.sibling), r = a(r, i, u), r.return = e, e = r) : (n(e, r), r = zt(i, e.mode, u), r.return = e, e = r), s(e);
            if (Fi(i)) return y(e, r, i, u);
            if (ae(i)) return m(e, r, i, u);
            if (l && mn(e, i), "undefined" === typeof i && !c) switch (e.tag) {
                case 2:
                case 1:
                    u = e.type, o("152", u.displayName || u.name || "Component")
            }
            return n(e, r)
        }
    }

    function vn(e, t) {
        var n = new Mt(5, null, null, 0);
        n.type = "DELETED", n.stateNode = t, n.return = e, n.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
    }

    function bn(e, t) {
        switch (e.tag) {
            case 5:
                var n = e.type;
                return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
            case 6:
                return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
            default:
                return !1
        }
    }

    function wn(e) {
        if ($i) {
            var t = Vi;
            if (t) {
                var n = t;
                if (!bn(e, t)) {
                    if (!(t = xt(n)) || !bn(e, t)) return e.effectTag |= 2, $i = !1, void(Hi = e);
                    vn(Hi, n)
                }
                Hi = e, Vi = kt(t)
            } else e.effectTag |= 2, $i = !1, Hi = e
        }
    }

    function xn(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag;) e = e.return;
        Hi = e
    }

    function kn(e) {
        if (e !== Hi) return !1;
        if (!$i) return xn(e), $i = !0, !1;
        var t = e.type;
        if (5 !== e.tag || "head" !== t && "body" !== t && !wt(t, e.memoizedProps))
            for (t = Vi; t;) vn(e, t), t = xt(t);
        return xn(e), Vi = Hi ? xt(e.stateNode) : null, !0
    }

    function Sn() {
        Vi = Hi = null, $i = !1
    }

    function _n(e, t, n) {
        Cn(e, t, n, t.expirationTime)
    }

    function Cn(e, t, n, o) {
        t.child = null === e ? qi(t, null, n, o) : Wi(t, e.child, n, o)
    }

    function En(e, t) {
        var n = t.ref;
        (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128)
    }

    function Rn(e, t, n, o, r) {
        En(e, t);
        var a = 0 !== (64 & t.effectTag);
        if (!n && !a) return o && Nt(t, !1), Dn(e, t);
        n = t.stateNode, Br.current = t;
        var i = a ? null : n.render();
        return t.effectTag |= 1, a && (Cn(e, t, null, r), t.child = null), Cn(e, t, i, r), t.memoizedState = n.state, t.memoizedProps = n.props, o && Nt(t, !0), t.child
    }

    function Tn(e) {
        var t = e.stateNode;
        t.pendingContext ? Dt(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Dt(e, t.context, !1), un(e, t.containerInfo)
    }

    function On(e, t, n, o) {
        var r = e.child;
        for (null !== r && (r.return = e); null !== r;) {
            switch (r.tag) {
                case 12:
                    var a = 0 | r.stateNode;
                    if (r.type === t && 0 !== (a & n)) {
                        for (a = r; null !== a;) {
                            var i = a.alternate;
                            if (0 === a.expirationTime || a.expirationTime > o) a.expirationTime = o, null !== i && (0 === i.expirationTime || i.expirationTime > o) && (i.expirationTime = o);
                            else {
                                if (null === i || !(0 === i.expirationTime || i.expirationTime > o)) break;
                                i.expirationTime = o
                            }
                            a = a.return
                        }
                        a = null
                    } else a = r.child;
                    break;
                case 13:
                    a = r.type === e.type ? null : r.child;
                    break;
                default:
                    a = r.child
            }
            if (null !== a) a.return = r;
            else
                for (a = r; null !== a;) {
                    if (a === e) {
                        a = null;
                        break
                    }
                    if (null !== (r = a.sibling)) {
                        r.return = a.return, a = r;
                        break
                    }
                    a = a.return
                }
            r = a
        }
    }

    function Ln(e, t, n) {
        var o = t.type._context,
            r = t.pendingProps,
            a = t.memoizedProps,
            i = !0;
        if (Ti.current) i = !1;
        else if (a === r) return t.stateNode = 0, rn(t), Dn(e, t);
        var s = r.value;
        if (t.memoizedProps = r, null === a) s = 1073741823;
        else if (a.value === r.value) {
            if (a.children === r.children && i) return t.stateNode = 0, rn(t), Dn(e, t);
            s = 0
        } else {
            var u = a.value;
            if (u === s && (0 !== u || 1 / u === 1 / s) || u !== u && s !== s) {
                if (a.children === r.children && i) return t.stateNode = 0, rn(t), Dn(e, t);
                s = 0
            } else if (s = "function" === typeof o._calculateChangedBits ? o._calculateChangedBits(u, s) : 1073741823, 0 === (s |= 0)) {
                if (a.children === r.children && i) return t.stateNode = 0, rn(t), Dn(e, t)
            } else On(t, o, s, n)
        }
        return t.stateNode = s, rn(t), _n(e, t, r.children), t.child
    }

    function Dn(e, t) {
        if (null !== e && t.child !== e.child && o("153"), null !== t.child) {
            e = t.child;
            var n = At(e, e.pendingProps, e.expirationTime);
            for (t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, n = n.sibling = At(e, e.pendingProps, e.expirationTime), n.return = t;
            n.sibling = null
        }
        return t.child
    }

    function Pn(e, t, n) {
        if (0 === t.expirationTime || t.expirationTime > n) {
            switch (t.tag) {
                case 3:
                    Tn(t);
                    break;
                case 2:
                    jt(t);
                    break;
                case 4:
                    un(t, t.stateNode.containerInfo);
                    break;
                case 13:
                    rn(t)
            }
            return null
        }
        switch (t.tag) {
            case 0:
                null !== e && o("155");
                var r = t.type,
                    a = t.pendingProps,
                    i = Et(t);
                return i = Rt(t, i), r = r(a, i), t.effectTag |= 1, "object" === typeof r && null !== r && "function" === typeof r.render && void 0 === r.$$typeof ? (i = t.type, t.tag = 2, t.memoizedState = null !== r.state && void 0 !== r.state ? r.state : null, i = i.getDerivedStateFromProps, "function" === typeof i && fn(t, i, a), a = jt(t), r.updater = Bi, t.stateNode = r, r._reactInternalFiber = t, hn(t, n), e = Rn(e, t, !0, a, n)) : (t.tag = 1, _n(e, t, r), t.memoizedProps = a, e = t.child), e;
            case 1:
                return a = t.type, n = t.pendingProps, Ti.current || t.memoizedProps !== n ? (r = Et(t), r = Rt(t, r), a = a(n, r), t.effectTag |= 1, _n(e, t, a), t.memoizedProps = n, e = t.child) : e = Dn(e, t), e;
            case 2:
                if (a = jt(t), null === e)
                    if (null === t.stateNode) {
                        var s = t.pendingProps,
                            u = t.type;
                        r = Et(t);
                        var c = 2 === t.tag && null != t.type.contextTypes;
                        i = c ? Rt(t, r) : qo, s = new u(s, i), t.memoizedState = null !== s.state && void 0 !== s.state ? s.state : null, s.updater = Bi, t.stateNode = s, s._reactInternalFiber = t, c && (c = t.stateNode, c.__reactInternalMemoizedUnmaskedChildContext = r, c.__reactInternalMemoizedMaskedChildContext = i), hn(t, n), r = !0
                    } else {
                        u = t.type, r = t.stateNode, c = t.memoizedProps, i = t.pendingProps, r.props = c;
                        var l = r.context;
                        s = Et(t), s = Rt(t, s);
                        var f = u.getDerivedStateFromProps;
                        (u = "function" === typeof f || "function" === typeof r.getSnapshotBeforeUpdate) || "function" !== typeof r.UNSAFE_componentWillReceiveProps && "function" !== typeof r.componentWillReceiveProps || (c !== i || l !== s) && pn(t, r, i, s), Pi = !1;
                        var d = t.memoizedState;
                        l = r.state = d;
                        var p = t.updateQueue;
                        null !== p && (en(t, p, i, r, n), l = t.memoizedState), c !== i || d !== l || Ti.current || Pi ? ("function" === typeof f && (fn(t, f, i), l = t.memoizedState), (c = Pi || dn(t, c, i, d, l, s)) ? (u || "function" !== typeof r.UNSAFE_componentWillMount && "function" !== typeof r.componentWillMount || ("function" === typeof r.componentWillMount && r.componentWillMount(), "function" === typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount()), "function" === typeof r.componentDidMount && (t.effectTag |= 4)) : ("function" === typeof r.componentDidMount && (t.effectTag |= 4), t.memoizedProps = i, t.memoizedState = l), r.props = i, r.state = l, r.context = s, r = c) : ("function" === typeof r.componentDidMount && (t.effectTag |= 4), r = !1)
                    }
                else u = t.type, r = t.stateNode, i = t.memoizedProps, c = t.pendingProps, r.props = i, l = r.context, s = Et(t), s = Rt(t, s), f = u.getDerivedStateFromProps, (u = "function" === typeof f || "function" === typeof r.getSnapshotBeforeUpdate) || "function" !== typeof r.UNSAFE_componentWillReceiveProps && "function" !== typeof r.componentWillReceiveProps || (i !== c || l !== s) && pn(t, r, c, s), Pi = !1, l = t.memoizedState, d = r.state = l, p = t.updateQueue, null !== p && (en(t, p, c, r, n), d = t.memoizedState), i !== c || l !== d || Ti.current || Pi ? ("function" === typeof f && (fn(t, f, c), d = t.memoizedState), (f = Pi || dn(t, i, c, l, d, s)) ? (u || "function" !== typeof r.UNSAFE_componentWillUpdate && "function" !== typeof r.componentWillUpdate || ("function" === typeof r.componentWillUpdate && r.componentWillUpdate(c, d, s), "function" === typeof r.UNSAFE_componentWillUpdate && r.UNSAFE_componentWillUpdate(c, d, s)), "function" === typeof r.componentDidUpdate && (t.effectTag |= 4), "function" === typeof r.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" !== typeof r.componentDidUpdate || i === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" !== typeof r.getSnapshotBeforeUpdate || i === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = c, t.memoizedState = d), r.props = c, r.state = d, r.context = s, r = f) : ("function" !== typeof r.componentDidUpdate || i === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" !== typeof r.getSnapshotBeforeUpdate || i === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), r = !1);
                return Rn(e, t, r, a, n);
            case 3:
                return Tn(t), a = t.updateQueue, null !== a ? (r = t.memoizedState, r = null !== r ? r.element : null, en(t, a, t.pendingProps, null, n), (a = t.memoizedState.element) === r ? (Sn(), e = Dn(e, t)) : (r = t.stateNode, (r = (null === e || null === e.child) && r.hydrate) && (Vi = kt(t.stateNode.containerInfo), Hi = t, r = $i = !0), r ? (t.effectTag |= 2, t.child = qi(t, null, a, n)) : (Sn(), _n(e, t, a)), e = t.child)) : (Sn(), e = Dn(e, t)), e;
            case 5:
                return sn(zi.current), a = sn(Ii.current), r = it(a, t.type), a !== r && (Ct(Ui, t, t), Ct(Ii, r, t)), null === e && wn(t), a = t.type, c = t.memoizedProps, r = t.pendingProps, i = null !== e ? e.memoizedProps : null, Ti.current || c !== r || ((c = 1 & t.mode && !!r.hidden) && (t.expirationTime = 1073741823), c && 1073741823 === n) ? (c = r.children, wt(a, r) ? c = null : i && wt(a, i) && (t.effectTag |= 16), En(e, t), 1073741823 !== n && 1 & t.mode && r.hidden ? (t.expirationTime = 1073741823, t.memoizedProps = r, e = null) : (_n(e, t, c), t.memoizedProps = r, e = t.child)) : e = Dn(e, t), e;
            case 6:
                return null === e && wn(t), t.memoizedProps = t.pendingProps, null;
            case 16:
                return null;
            case 4:
                return un(t, t.stateNode.containerInfo), a = t.pendingProps, Ti.current || t.memoizedProps !== a ? (null === e ? t.child = Wi(t, null, a, n) : _n(e, t, a), t.memoizedProps = a, e = t.child) : e = Dn(e, t), e;
            case 14:
                return a = t.type.render, n = t.pendingProps, r = t.ref, Ti.current || t.memoizedProps !== n || r !== (null !== e ? e.ref : null) ? (a = a(n, r), _n(e, t, a), t.memoizedProps = n, e = t.child) : e = Dn(e, t), e;
            case 10:
                return n = t.pendingProps, Ti.current || t.memoizedProps !== n ? (_n(e, t, n), t.memoizedProps = n, e = t.child) : e = Dn(e, t), e;
            case 11:
                return n = t.pendingProps.children, Ti.current || null !== n && t.memoizedProps !== n ? (_n(e, t, n), t.memoizedProps = n, e = t.child) : e = Dn(e, t), e;
            case 15:
                return n = t.pendingProps, t.memoizedProps === n ? e = Dn(e, t) : (_n(e, t, n.children), t.memoizedProps = n, e = t.child), e;
            case 13:
                return Ln(e, t, n);
            case 12:
                e: if (r = t.type, i = t.pendingProps, c = t.memoizedProps, a = r._currentValue, s = r._changedBits, Ti.current || 0 !== s || c !== i) {
                    if (t.memoizedProps = i, u = i.unstable_observedBits, void 0 !== u && null !== u || (u = 1073741823), t.stateNode = u, 0 !== (s & u)) On(t, r, s, n);
                    else if (c === i) {
                        e = Dn(e, t);
                        break e
                    }
                    n = i.children, n = n(a), t.effectTag |= 1, _n(e, t, n), e = t.child
                } else e = Dn(e, t);
                return e;
            default:
                o("156")
        }
    }

    function jn(e) {
        e.effectTag |= 4
    }

    function Nn(e, t) {
        var n = t.pendingProps;
        switch (t.tag) {
            case 1:
                return null;
            case 2:
                return Ot(t), null;
            case 3:
                cn(t), Lt(t);
                var r = t.stateNode;
                return r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (kn(t), t.effectTag &= -3), Ki(t), null;
            case 5:
                ln(t), r = sn(zi.current);
                var a = t.type;
                if (null !== e && null != t.stateNode) {
                    var i = e.memoizedProps,
                        s = t.stateNode,
                        u = sn(Ii.current);
                    s = yt(s, a, i, n, r), Xi(e, t, s, a, i, n, r, u), e.ref !== t.ref && (t.effectTag |= 128)
                } else {
                    if (!n) return null === t.stateNode && o("166"), null;
                    if (e = sn(Ii.current), kn(t)) n = t.stateNode, a = t.type, i = t.memoizedProps, n[ar] = t, n[ir] = i, r = gt(n, a, i, e, r), t.updateQueue = r, null !== r && jn(t);
                    else {
                        e = dt(a, n, r, e), e[ar] = t, e[ir] = n;
                        e: for (i = t.child; null !== i;) {
                            if (5 === i.tag || 6 === i.tag) e.appendChild(i.stateNode);
                            else if (4 !== i.tag && null !== i.child) {
                                i.child.return = i, i = i.child;
                                continue
                            }
                            if (i === t) break;
                            for (; null === i.sibling;) {
                                if (null === i.return || i.return === t) break e;
                                i = i.return
                            }
                            i.sibling.return = i.return, i = i.sibling
                        }
                        ht(e, a, n, r), bt(a, n) && jn(t), t.stateNode = e
                    }
                    null !== t.ref && (t.effectTag |= 128)
                }
                return null;
            case 6:
                if (e && null != t.stateNode) Qi(e, t, e.memoizedProps, n);
                else {
                    if ("string" !== typeof n) return null === t.stateNode && o("166"), null;
                    r = sn(zi.current), sn(Ii.current), kn(t) ? (r = t.stateNode, n = t.memoizedProps, r[ar] = t, vt(r, n) && jn(t)) : (r = pt(n, r), r[ar] = t, t.stateNode = r)
                }
                return null;
            case 14:
            case 16:
            case 10:
            case 11:
            case 15:
                return null;
            case 4:
                return cn(t), Ki(t), null;
            case 13:
                return an(t), null;
            case 12:
                return null;
            case 0:
                o("167");
            default:
                o("156")
        }
    }

    function Mn(e, t) {
        var n = t.source;
        null === t.stack && null !== n && se(n), null !== n && ie(n), t = t.value, null !== e && 2 === e.tag && ie(e);
        try {
            t && t.suppressReactErrorLogging || console.error(t)
        } catch (e) {
            e && e.suppressReactErrorLogging || console.error(e)
        }
    }

    function An(e) {
        var t = e.ref;
        if (null !== t)
            if ("function" === typeof t) try {
                t(null)
            } catch (t) {
                Gn(e, t)
            } else t.current = null
    }

    function In(e) {
        switch ("function" === typeof Vt && Vt(e), e.tag) {
            case 2:
                An(e);
                var t = e.stateNode;
                if ("function" === typeof t.componentWillUnmount) try {
                    t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
                } catch (t) {
                    Gn(e, t)
                }
                break;
            case 5:
                An(e);
                break;
            case 4:
                Bn(e)
        }
    }

    function Un(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag
    }

    function zn(e) {
        e: {
            for (var t = e.return; null !== t;) {
                if (Un(t)) {
                    var n = t;
                    break e
                }
                t = t.return
            }
            o("160"),
            n = void 0
        }
        var r = t = void 0;
        switch (n.tag) {
            case 5:
                t = n.stateNode, r = !1;
                break;
            case 3:
            case 4:
                t = n.stateNode.containerInfo, r = !0;
                break;
            default:
                o("161")
        }
        16 & n.effectTag && (st(t, ""), n.effectTag &= -17);e: t: for (n = e;;) {
            for (; null === n.sibling;) {
                if (null === n.return || Un(n.return)) {
                    n = null;
                    break e
                }
                n = n.return
            }
            for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag;) {
                if (2 & n.effectTag) continue t;
                if (null === n.child || 4 === n.tag) continue t;
                n.child.return = n, n = n.child
            }
            if (!(2 & n.effectTag)) {
                n = n.stateNode;
                break e
            }
        }
        for (var a = e;;) {
            if (5 === a.tag || 6 === a.tag)
                if (n)
                    if (r) {
                        var i = t,
                            s = a.stateNode,
                            u = n;
                        8 === i.nodeType ? i.parentNode.insertBefore(s, u) : i.insertBefore(s, u)
                    } else t.insertBefore(a.stateNode, n);
            else r ? (i = t, s = a.stateNode, 8 === i.nodeType ? i.parentNode.insertBefore(s, i) : i.appendChild(s)) : t.appendChild(a.stateNode);
            else if (4 !== a.tag && null !== a.child) {
                a.child.return = a, a = a.child;
                continue
            }
            if (a === e) break;
            for (; null === a.sibling;) {
                if (null === a.return || a.return === e) return;
                a = a.return
            }
            a.sibling.return = a.return, a = a.sibling
        }
    }

    function Bn(e) {
        for (var t = e, n = !1, r = void 0, a = void 0;;) {
            if (!n) {
                n = t.return;
                e: for (;;) {
                    switch (null === n && o("160"), n.tag) {
                        case 5:
                            r = n.stateNode, a = !1;
                            break e;
                        case 3:
                        case 4:
                            r = n.stateNode.containerInfo, a = !0;
                            break e
                    }
                    n = n.return
                }
                n = !0
            }
            if (5 === t.tag || 6 === t.tag) {
                e: for (var i = t, s = i;;)
                    if (In(s), null !== s.child && 4 !== s.tag) s.child.return = s, s = s.child;
                    else {
                        if (s === i) break;
                        for (; null === s.sibling;) {
                            if (null === s.return || s.return === i) break e;
                            s = s.return
                        }
                        s.sibling.return = s.return, s = s.sibling
                    }a ? (i = r, s = t.stateNode, 8 === i.nodeType ? i.parentNode.removeChild(s) : i.removeChild(s)) : r.removeChild(t.stateNode)
            }
            else if (4 === t.tag ? r = t.stateNode.containerInfo : In(t), null !== t.child) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e) return;
                t = t.return, 4 === t.tag && (n = !1)
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }

    function Fn(e, t) {
        switch (t.tag) {
            case 2:
                break;
            case 5:
                var n = t.stateNode;
                if (null != n) {
                    var r = t.memoizedProps;
                    e = null !== e ? e.memoizedProps : r;
                    var a = t.type,
                        i = t.updateQueue;
                    t.updateQueue = null, null !== i && (n[ir] = r, mt(n, i, a, e, r))
                }
                break;
            case 6:
                null === t.stateNode && o("162"), t.stateNode.nodeValue = t.memoizedProps;
                break;
            case 3:
            case 15:
            case 16:
                break;
            default:
                o("163")
        }
    }

    function Wn(e, t, n) {
        n = Xt(n), n.tag = 3, n.payload = {
            element: null
        };
        var o = t.value;
        return n.callback = function() {
            yo(o), Mn(e, t)
        }, n
    }

    function qn(e, t, n) {
        n = Xt(n), n.tag = 3;
        var o = e.stateNode;
        return null !== o && "function" === typeof o.componentDidCatch && (n.callback = function() {
            null === ls ? ls = new Set([this]) : ls.add(this);
            var n = t.value,
                o = t.stack;
            Mn(e, t), this.componentDidCatch(n, {
                componentStack: null !== o ? o : ""
            })
        }), n
    }

    function Hn(e, t, n, o, r, a) {
        n.effectTag |= 512, n.firstEffect = n.lastEffect = null, o = on(o, n), e = t;
        do {
            switch (e.tag) {
                case 3:
                    return e.effectTag |= 1024, o = Wn(e, o, a), void Yt(e, o, a);
                case 2:
                    if (t = o, n = e.stateNode, 0 === (64 & e.effectTag) && null !== n && "function" === typeof n.componentDidCatch && (null === ls || !ls.has(n))) return e.effectTag |= 1024, o = qn(e, t, a), void Yt(e, o, a)
            }
            e = e.return
        } while (null !== e)
    }

    function Vn(e) {
        switch (e.tag) {
            case 2:
                Ot(e);
                var t = e.effectTag;
                return 1024 & t ? (e.effectTag = -1025 & t | 64, e) : null;
            case 3:
                return cn(e), Lt(e), t = e.effectTag, 1024 & t ? (e.effectTag = -1025 & t | 64, e) : null;
            case 5:
                return ln(e), null;
            case 16:
                return t = e.effectTag, 1024 & t ? (e.effectTag = -1025 & t | 64, e) : null;
            case 4:
                return cn(e), null;
            case 13:
                return an(e), null;
            default:
                return null
        }
    }

    function $n() {
        if (null !== ns)
            for (var e = ns.return; null !== e;) {
                var t = e;
                switch (t.tag) {
                    case 2:
                        Ot(t);
                        break;
                    case 3:
                        cn(t), Lt(t);
                        break;
                    case 5:
                        ln(t);
                        break;
                    case 4:
                        cn(t);
                        break;
                    case 13:
                        an(t)
                }
                e = e.return
            }
        os = null, rs = 0, as = -1, is = !1, ns = null, cs = !1
    }

    function Kn(e) {
        for (;;) {
            var t = e.alternate,
                n = e.return,
                o = e.sibling;
            if (0 === (512 & e.effectTag)) {
                t = Nn(t, e, rs);
                var r = e;
                if (1073741823 === rs || 1073741823 !== r.expirationTime) {
                    var a = 0;
                    switch (r.tag) {
                        case 3:
                        case 2:
                            var i = r.updateQueue;
                            null !== i && (a = i.expirationTime)
                    }
                    for (i = r.child; null !== i;) 0 !== i.expirationTime && (0 === a || a > i.expirationTime) && (a = i.expirationTime), i = i.sibling;
                    r.expirationTime = a
                }
                if (null !== t) return t;
                if (null !== n && 0 === (512 & n.effectTag) && (null === n.firstEffect && (n.firstEffect = e.firstEffect), null !== e.lastEffect && (null !== n.lastEffect && (n.lastEffect.nextEffect = e.firstEffect), n.lastEffect = e.lastEffect), 1 < e.effectTag && (null !== n.lastEffect ? n.lastEffect.nextEffect = e : n.firstEffect = e, n.lastEffect = e)), null !== o) return o;
                if (null === n) {
                    cs = !0;
                    break
                }
                e = n
            } else {
                if (null !== (e = Vn(e, is, rs))) return e.effectTag &= 511, e;
                if (null !== n && (n.firstEffect = n.lastEffect = null, n.effectTag |= 512), null !== o) return o;
                if (null === n) break;
                e = n
            }
        }
        return null
    }

    function Xn(e) {
        var t = Pn(e.alternate, e, rs);
        return null === t && (t = Kn(e)), Br.current = null, t
    }

    function Qn(e, t, n) {
        ts && o("243"), ts = !0, t === rs && e === os && null !== ns || ($n(), os = e, rs = t, as = -1, ns = At(os.current, null, rs), e.pendingCommitExpirationTime = 0);
        var r = !1;
        for (is = !n || rs <= Yi;;) {
            try {
                if (n)
                    for (; null !== ns && !ho();) ns = Xn(ns);
                else
                    for (; null !== ns;) ns = Xn(ns)
            } catch (t) {
                if (null === ns) r = !0, yo(t);
                else {
                    null === ns && o("271"), n = ns;
                    var a = n.return;
                    if (null === a) {
                        r = !0, yo(t);
                        break
                    }
                    Hn(e, a, n, t, is, rs, Ji), ns = Kn(n)
                }
            }
            break
        }
        if (ts = !1, r) return null;
        if (null === ns) {
            if (cs) return e.pendingCommitExpirationTime = t, e.current.alternate;
            is && o("262"), 0 <= as && setTimeout(function() {
                var t = e.current.expirationTime;
                0 !== t && (0 === e.remainingExpirationTime || e.remainingExpirationTime < t) && ro(e, t)
            }, as), mo(e.current.expirationTime)
        }
        return null
    }

    function Gn(e, t) {
        var n;
        e: {
            for (ts && !us && o("263"), n = e.return; null !== n;) {
                switch (n.tag) {
                    case 2:
                        var r = n.stateNode;
                        if ("function" === typeof n.type.getDerivedStateFromCatch || "function" === typeof r.componentDidCatch && (null === ls || !ls.has(r))) {
                            e = on(t, e), e = qn(n, e, 1), Gt(n, e, 1), Zn(n, 1), n = void 0;
                            break e
                        }
                        break;
                    case 3:
                        e = on(t, e), e = Wn(n, e, 1), Gt(n, e, 1), Zn(n, 1), n = void 0;
                        break e
                }
                n = n.return
            }
            3 === e.tag && (n = on(t, e), n = Wn(e, n, 1), Gt(e, n, 1), Zn(e, 1)),
            n = void 0
        }
        return n
    }

    function Yn() {
        var e = 2 + 25 * (1 + ((eo() - 2 + 500) / 25 | 0));
        return e <= Zi && (e = Zi + 1), Zi = e
    }

    function Jn(e, t) {
        return e = 0 !== es ? es : ts ? us ? 1 : rs : 1 & t.mode ? Cs ? 2 + 10 * (1 + ((e - 2 + 15) / 10 | 0)) : 2 + 25 * (1 + ((e - 2 + 500) / 25 | 0)) : 1, Cs && (0 === vs || e > vs) && (vs = e), e
    }

    function Zn(e, t) {
        for (; null !== e;) {
            if ((0 === e.expirationTime || e.expirationTime > t) && (e.expirationTime = t), null !== e.alternate && (0 === e.alternate.expirationTime || e.alternate.expirationTime > t) && (e.alternate.expirationTime = t), null === e.return) {
                if (3 !== e.tag) break;
                var n = e.stateNode;
                !ts && 0 !== rs && t < rs && $n();
                var r = n.current.expirationTime;
                ts && !us && os === n || ro(n, r), Ts > Rs && o("185")
            }
            e = e.return
        }
    }

    function eo() {
        return Ji = ki() - Gi, Yi = 2 + (Ji / 10 | 0)
    }

    function to(e) {
        var t = es;
        es = 2 + 25 * (1 + ((eo() - 2 + 500) / 25 | 0));
        try {
            return e()
        } finally {
            es = t
        }
    }

    function no(e, t, n, o, r) {
        var a = es;
        es = 1;
        try {
            return e(t, n, o, r)
        } finally {
            es = a
        }
    }

    function oo(e) {
        if (0 !== ps) {
            if (e > ps) return;
            null !== hs && _i(hs)
        }
        var t = ki() - Gi;
        ps = e, hs = Si(io, {
            timeout: 10 * (e - 2) - t
        })
    }

    function ro(e, t) {
        if (null === e.nextScheduledRoot) e.remainingExpirationTime = t, null === ds ? (fs = ds = e, e.nextScheduledRoot = e) : (ds = ds.nextScheduledRoot = e, ds.nextScheduledRoot = fs);
        else {
            var n = e.remainingExpirationTime;
            (0 === n || t < n) && (e.remainingExpirationTime = t)
        }
        ys || (Ss ? _s && (ms = e, gs = 1, fo(e, 1, !1)) : 1 === t ? so() : oo(t))
    }

    function ao() {
        var e = 0,
            t = null;
        if (null !== ds)
            for (var n = ds, r = fs; null !== r;) {
                var a = r.remainingExpirationTime;
                if (0 === a) {
                    if ((null === n || null === ds) && o("244"), r === r.nextScheduledRoot) {
                        fs = ds = r.nextScheduledRoot = null;
                        break
                    }
                    if (r === fs) fs = a = r.nextScheduledRoot, ds.nextScheduledRoot = a, r.nextScheduledRoot = null;
                    else {
                        if (r === ds) {
                            ds = n, ds.nextScheduledRoot = fs, r.nextScheduledRoot = null;
                            break
                        }
                        n.nextScheduledRoot = r.nextScheduledRoot, r.nextScheduledRoot = null
                    }
                    r = n.nextScheduledRoot
                } else {
                    if ((0 === e || a < e) && (e = a, t = r), r === ds) break;
                    n = r, r = r.nextScheduledRoot
                }
            }
        n = ms, null !== n && n === t && 1 === e ? Ts++ : Ts = 0, ms = t, gs = e
    }

    function io(e) {
        uo(0, !0, e)
    }

    function so() {
        uo(1, !1, null)
    }

    function uo(e, t, n) {
        if (ks = n, ao(), t)
            for (; null !== ms && 0 !== gs && (0 === e || e >= gs) && (!bs || eo() >= gs);) eo(), fo(ms, gs, !bs), ao();
        else
            for (; null !== ms && 0 !== gs && (0 === e || e >= gs);) fo(ms, gs, !1), ao();
        null !== ks && (ps = 0, hs = null), 0 !== gs && oo(gs), ks = null, bs = !1, lo()
    }

    function co(e, t) {
        ys && o("253"), ms = e, gs = t, fo(e, t, !1), so(), lo()
    }

    function lo() {
        if (Ts = 0, null !== Es) {
            var e = Es;
            Es = null;
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                try {
                    n._onComplete()
                } catch (e) {
                    ws || (ws = !0, xs = e)
                }
            }
        }
        if (ws) throw e = xs, xs = null, ws = !1, e
    }

    function fo(e, t, n) {
        ys && o("245"), ys = !0, n ? (n = e.finishedWork, null !== n ? po(e, n, t) : null !== (n = Qn(e, t, !0)) && (ho() ? e.finishedWork = n : po(e, n, t))) : (n = e.finishedWork, null !== n ? po(e, n, t) : null !== (n = Qn(e, t, !1)) && po(e, n, t)), ys = !1
    }

    function po(e, t, n) {
        var r = e.firstBatch;
        if (null !== r && r._expirationTime <= n && (null === Es ? Es = [r] : Es.push(r), r._defer)) return e.finishedWork = t, void(e.remainingExpirationTime = 0);
        if (e.finishedWork = null, us = ts = !0, n = t.stateNode, n.current === t && o("177"), r = n.pendingCommitExpirationTime, 0 === r && o("261"), n.pendingCommitExpirationTime = 0, eo(), Br.current = null, 1 < t.effectTag)
            if (null !== t.lastEffect) {
                t.lastEffect.nextEffect = t;
                var a = t.firstEffect
            } else a = t;
        else a = t.firstEffect;
        wi = Pa;
        var i = Bo();
        if (Qe(i)) {
            if ("selectionStart" in i) var s = {
                start: i.selectionStart,
                end: i.selectionEnd
            };
            else e: {
                var u = window.getSelection && window.getSelection();
                if (u && 0 !== u.rangeCount) {
                    s = u.anchorNode;
                    var c = u.anchorOffset,
                        l = u.focusNode;
                    u = u.focusOffset;
                    try {
                        s.nodeType, l.nodeType
                    } catch (e) {
                        s = null;
                        break e
                    }
                    var f = 0,
                        d = -1,
                        p = -1,
                        h = 0,
                        y = 0,
                        m = i,
                        g = null;
                    t: for (;;) {
                        for (var v; m !== s || 0 !== c && 3 !== m.nodeType || (d = f + c), m !== l || 0 !== u && 3 !== m.nodeType || (p = f + u), 3 === m.nodeType && (f += m.nodeValue.length), null !== (v = m.firstChild);) g = m, m = v;
                        for (;;) {
                            if (m === i) break t;
                            if (g === s && ++h === c && (d = f), g === l && ++y === u && (p = f), null !== (v = m.nextSibling)) break;
                            m = g, g = m.parentNode
                        }
                        m = v
                    }
                    s = -1 === d || -1 === p ? null : {
                        start: d,
                        end: p
                    }
                } else s = null
            }
            s = s || {
                start: 0,
                end: 0
            }
        } else s = null;
        for (xi = {
                focusedElem: i,
                selectionRange: s
            }, Fe(!1), ss = a; null !== ss;) {
            i = !1, s = void 0;
            try {
                for (; null !== ss;) {
                    if (256 & ss.effectTag) {
                        var b = ss.alternate;
                        switch (c = ss, c.tag) {
                            case 2:
                                if (256 & c.effectTag && null !== b) {
                                    var w = b.memoizedProps,
                                        x = b.memoizedState,
                                        k = c.stateNode;
                                    k.props = c.memoizedProps, k.state = c.memoizedState;
                                    var S = k.getSnapshotBeforeUpdate(w, x);
                                    k.__reactInternalSnapshotBeforeUpdate = S
                                }
                                break;
                            case 3:
                            case 5:
                            case 6:
                            case 4:
                                break;
                            default:
                                o("163")
                        }
                    }
                    ss = ss.nextEffect
                }
            } catch (e) {
                i = !0, s = e
            }
            i && (null === ss && o("178"), Gn(ss, s), null !== ss && (ss = ss.nextEffect))
        }
        for (ss = a; null !== ss;) {
            b = !1, w = void 0;
            try {
                for (; null !== ss;) {
                    var _ = ss.effectTag;
                    if (16 & _ && st(ss.stateNode, ""), 128 & _) {
                        var C = ss.alternate;
                        if (null !== C) {
                            var E = C.ref;
                            null !== E && ("function" === typeof E ? E(null) : E.current = null)
                        }
                    }
                    switch (14 & _) {
                        case 2:
                            zn(ss), ss.effectTag &= -3;
                            break;
                        case 6:
                            zn(ss), ss.effectTag &= -3, Fn(ss.alternate, ss);
                            break;
                        case 4:
                            Fn(ss.alternate, ss);
                            break;
                        case 8:
                            x = ss, Bn(x), x.return = null, x.child = null, x.alternate && (x.alternate.child = null, x.alternate.return = null)
                    }
                    ss = ss.nextEffect
                }
            } catch (e) {
                b = !0, w = e
            }
            b && (null === ss && o("178"), Gn(ss, w), null !== ss && (ss = ss.nextEffect))
        }
        if (E = xi, C = Bo(), _ = E.focusedElem, b = E.selectionRange, C !== _ && Wo(document.documentElement, _)) {
            null !== b && Qe(_) && (C = b.start, E = b.end, void 0 === E && (E = C), "selectionStart" in _ ? (_.selectionStart = C, _.selectionEnd = Math.min(E, _.value.length)) : window.getSelection && (C = window.getSelection(), w = _[j()].length, E = Math.min(b.start, w), b = void 0 === b.end ? E : Math.min(b.end, w), !C.extend && E > b && (w = b, b = E, E = w), w = Xe(_, E), x = Xe(_, b), w && x && (1 !== C.rangeCount || C.anchorNode !== w.node || C.anchorOffset !== w.offset || C.focusNode !== x.node || C.focusOffset !== x.offset) && (k = document.createRange(), k.setStart(w.node, w.offset), C.removeAllRanges(), E > b ? (C.addRange(k), C.extend(x.node, x.offset)) : (k.setEnd(x.node, x.offset), C.addRange(k))))), C = [];
            for (E = _; E = E.parentNode;) 1 === E.nodeType && C.push({
                element: E,
                left: E.scrollLeft,
                top: E.scrollTop
            });
            for ("function" === typeof _.focus && _.focus(), _ = 0; _ < C.length; _++) E = C[_], E.element.scrollLeft = E.left, E.element.scrollTop = E.top
        }
        for (xi = null, Fe(wi), wi = null, n.current = t, ss = a; null !== ss;) {
            a = !1, _ = void 0;
            try {
                for (C = r; null !== ss;) {
                    var R = ss.effectTag;
                    if (36 & R) {
                        var T = ss.alternate;
                        switch (E = ss, b = C, E.tag) {
                            case 2:
                                var O = E.stateNode;
                                if (4 & E.effectTag)
                                    if (null === T) O.props = E.memoizedProps, O.state = E.memoizedState, O.componentDidMount();
                                    else {
                                        var L = T.memoizedProps,
                                            D = T.memoizedState;
                                        O.props = E.memoizedProps, O.state = E.memoizedState, O.componentDidUpdate(L, D, O.__reactInternalSnapshotBeforeUpdate)
                                    } var P = E.updateQueue;
                                null !== P && (O.props = E.memoizedProps, O.state = E.memoizedState, nn(E, P, O, b));
                                break;
                            case 3:
                                var N = E.updateQueue;
                                if (null !== N) {
                                    if (w = null, null !== E.child) switch (E.child.tag) {
                                        case 5:
                                            w = E.child.stateNode;
                                            break;
                                        case 2:
                                            w = E.child.stateNode
                                    }
                                    nn(E, N, w, b)
                                }
                                break;
                            case 5:
                                var M = E.stateNode;
                                null === T && 4 & E.effectTag && bt(E.type, E.memoizedProps) && M.focus();
                                break;
                            case 6:
                            case 4:
                            case 15:
                            case 16:
                                break;
                            default:
                                o("163")
                        }
                    }
                    if (128 & R) {
                        E = void 0;
                        var A = ss.ref;
                        if (null !== A) {
                            var I = ss.stateNode;
                            switch (ss.tag) {
                                case 5:
                                    E = I;
                                    break;
                                default:
                                    E = I
                            }
                            "function" === typeof A ? A(E) : A.current = E
                        }
                    }
                    var U = ss.nextEffect;
                    ss.nextEffect = null, ss = U
                }
            } catch (e) {
                a = !0, _ = e
            }
            a && (null === ss && o("178"), Gn(ss, _), null !== ss && (ss = ss.nextEffect))
        }
        ts = us = !1, "function" === typeof Ht && Ht(t.stateNode), t = n.current.expirationTime, 0 === t && (ls = null), e.remainingExpirationTime = t
    }

    function ho() {
        return !(null === ks || ks.timeRemaining() > Os) && (bs = !0)
    }

    function yo(e) {
        null === ms && o("246"), ms.remainingExpirationTime = 0, ws || (ws = !0, xs = e)
    }

    function mo(e) {
        null === ms && o("246"), ms.remainingExpirationTime = e
    }

    function go(e, t) {
        var n = Ss;
        Ss = !0;
        try {
            return e(t)
        } finally {
            (Ss = n) || ys || so()
        }
    }

    function vo(e, t) {
        if (Ss && !_s) {
            _s = !0;
            try {
                return e(t)
            } finally {
                _s = !1
            }
        }
        return e(t)
    }

    function bo(e, t) {
        ys && o("187");
        var n = Ss;
        Ss = !0;
        try {
            return no(e, t)
        } finally {
            Ss = n, so()
        }
    }

    function wo(e, t, n) {
        if (Cs) return e(t, n);
        Ss || ys || 0 === vs || (uo(vs, !1, null), vs = 0);
        var o = Cs,
            r = Ss;
        Ss = Cs = !0;
        try {
            return e(t, n)
        } finally {
            Cs = o, (Ss = r) || ys || so()
        }
    }

    function xo(e) {
        var t = Ss;
        Ss = !0;
        try {
            no(e)
        } finally {
            (Ss = t) || ys || uo(1, !1, null)
        }
    }

    function ko(e, t, n, r, a) {
        var i = t.current;
        if (n) {
            n = n._reactInternalFiber;
            var s;
            e: {
                for (2 === je(n) && 2 === n.tag || o("170"), s = n; 3 !== s.tag;) {
                    if (Tt(s)) {
                        s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }(s = s.return) || o("171")
                }
                s = s.stateNode.context
            }
            n = Tt(n) ? Pt(n, s) : s
        } else n = qo;
        return null === t.context ? t.context = n : t.pendingContext = n, t = a, a = Xt(r), a.payload = {
            element: e
        }, t = void 0 === t ? null : t, null !== t && (a.callback = t), Gt(i, a, r), Zn(i, r), r
    }

    function So(e) {
        var t = e._reactInternalFiber;
        return void 0 === t && ("function" === typeof e.render ? o("188") : o("268", Object.keys(e))), e = Ae(t), null === e ? null : e.stateNode
    }

    function _o(e, t, n, o) {
        var r = t.current;
        return r = Jn(eo(), r), ko(e, t, n, r, o)
    }

    function Co(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
            case 5:
            default:
                return e.child.stateNode
        }
    }

    function Eo(e) {
        var t = e.findFiberByHostInstance;
        return qt(Uo({}, e, {
            findHostInstanceByFiber: function(e) {
                return e = Ae(e), null === e ? null : e.stateNode
            },
            findFiberByHostInstance: function(e) {
                return t ? t(e) : null
            }
        }))
    }

    function Ro(e, t, n) {
        var o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
            $$typeof: qr,
            key: null == o ? null : "" + o,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }

    function To(e) {
        this._expirationTime = Yn(), this._root = e, this._callbacks = this._next = null, this._hasChildren = this._didComplete = !1, this._children = null, this._defer = !0
    }

    function Oo() {
        this._callbacks = null, this._didCommit = !1, this._onCommit = this._onCommit.bind(this)
    }

    function Lo(e, t, n) {
        this._internalRoot = Ft(e, t, n)
    }

    function Do(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
    }

    function Po(e, t) {
        if (t || (t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null, t = !(!t || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
            for (var n; n = e.lastChild;) e.removeChild(n);
        return new Lo(e, !1, t)
    }

    function jo(e, t, n, r, a) {
        Do(n) || o("200");
        var i = n._reactRootContainer;
        if (i) {
            if ("function" === typeof a) {
                var s = a;
                a = function() {
                    var e = Co(i._internalRoot);
                    s.call(e)
                }
            }
            null != e ? i.legacy_renderSubtreeIntoContainer(e, t, a) : i.render(t, a)
        } else {
            if (i = n._reactRootContainer = Po(n, r), "function" === typeof a) {
                var u = a;
                a = function() {
                    var e = Co(i._internalRoot);
                    u.call(e)
                }
            }
            vo(function() {
                null != e ? i.legacy_renderSubtreeIntoContainer(e, t, a) : i.render(t, a)
            })
        }
        return Co(i._internalRoot)
    }

    function No(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        return Do(t) || o("200"), Ro(e, t, null, n)
    }
    var Mo = n(78),
        Ao = n(0),
        Io = n(151),
        Uo = n(43),
        zo = n(80),
        Bo = n(152),
        Fo = n(153),
        Wo = n(154),
        qo = n(79);
    Ao || o("227");
    var Ho = {
            _caughtError: null,
            _hasCaughtError: !1,
            _rethrowError: null,
            _hasRethrowError: !1,
            invokeGuardedCallback: function(e, t, n, o, a, i, s, u, c) {
                r.apply(Ho, arguments)
            },
            invokeGuardedCallbackAndCatchFirstError: function(e, t, n, o, r, a, i, s, u) {
                if (Ho.invokeGuardedCallback.apply(this, arguments), Ho.hasCaughtError()) {
                    var c = Ho.clearCaughtError();
                    Ho._hasRethrowError || (Ho._hasRethrowError = !0, Ho._rethrowError = c)
                }
            },
            rethrowCaughtError: function() {
                return a.apply(Ho, arguments)
            },
            hasCaughtError: function() {
                return Ho._hasCaughtError
            },
            clearCaughtError: function() {
                if (Ho._hasCaughtError) {
                    var e = Ho._caughtError;
                    return Ho._caughtError = null, Ho._hasCaughtError = !1, e
                }
                o("198")
            }
        },
        Vo = null,
        $o = {},
        Ko = [],
        Xo = {},
        Qo = {},
        Go = {},
        Yo = {
            plugins: Ko,
            eventNameDispatchConfigs: Xo,
            registrationNameModules: Qo,
            registrationNameDependencies: Go,
            possibleRegistrationNames: null,
            injectEventPluginOrder: u,
            injectEventPluginsByName: c
        },
        Jo = null,
        Zo = null,
        er = null,
        tr = null,
        nr = {
            injectEventPluginOrder: u,
            injectEventPluginsByName: c
        },
        or = {
            injection: nr,
            getListener: m,
            runEventsInBatch: g,
            runExtractedEventsInBatch: v
        },
        rr = Math.random().toString(36).slice(2),
        ar = "__reactInternalInstance$" + rr,
        ir = "__reactEventHandlers$" + rr,
        sr = {
            precacheFiberNode: function(e, t) {
                t[ar] = e
            },
            getClosestInstanceFromNode: b,
            getInstanceFromNode: function(e) {
                return e = e[ar], !e || 5 !== e.tag && 6 !== e.tag ? null : e
            },
            getNodeFromInstance: w,
            getFiberCurrentPropsFromNode: x,
            updateFiberProps: function(e, t) {
                e[ir] = t
            }
        },
        ur = {
            accumulateTwoPhaseDispatches: O,
            accumulateTwoPhaseDispatchesSkipTarget: function(e) {
                d(e, E)
            },
            accumulateEnterLeaveDispatches: L,
            accumulateDirectDispatches: function(e) {
                d(e, T)
            }
        },
        cr = {
            animationend: D("Animation", "AnimationEnd"),
            animationiteration: D("Animation", "AnimationIteration"),
            animationstart: D("Animation", "AnimationStart"),
            transitionend: D("Transition", "TransitionEnd")
        },
        lr = {},
        fr = {};
    Io.canUseDOM && (fr = document.createElement("div").style, "AnimationEvent" in window || (delete cr.animationend.animation, delete cr.animationiteration.animation, delete cr.animationstart.animation), "TransitionEvent" in window || delete cr.transitionend.transition);
    var dr = P("animationend"),
        pr = P("animationiteration"),
        hr = P("animationstart"),
        yr = P("transitionend"),
        mr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        gr = null,
        vr = {
            _root: null,
            _startText: null,
            _fallbackText: null
        },
        br = "dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),
        wr = {
            type: null,
            target: null,
            currentTarget: zo.thatReturnsNull,
            eventPhase: null,
            bubbles: null,
            cancelable: null,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: null,
            isTrusted: null
        };
    Uo(A.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = zo.thatReturnsTrue)
        },
        stopPropagation: function() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = zo.thatReturnsTrue)
        },
        persist: function() {
            this.isPersistent = zo.thatReturnsTrue
        },
        isPersistent: zo.thatReturnsFalse,
        destructor: function() {
            var e, t = this.constructor.Interface;
            for (e in t) this[e] = null;
            for (t = 0; t < br.length; t++) this[br[t]] = null
        }
    }), A.Interface = wr, A.extend = function(e) {
        function t() {}

        function n() {
            return o.apply(this, arguments)
        }
        var o = this;
        t.prototype = o.prototype;
        var r = new t;
        return Uo(r, n.prototype), n.prototype = r, n.prototype.constructor = n, n.Interface = Uo({}, o.Interface, e), n.extend = o.extend, z(n), n
    }, z(A);
    var xr = A.extend({
            data: null
        }),
        kr = A.extend({
            data: null
        }),
        Sr = [9, 13, 27, 32],
        _r = Io.canUseDOM && "CompositionEvent" in window,
        Cr = null;
    Io.canUseDOM && "documentMode" in document && (Cr = document.documentMode);
    var Er = Io.canUseDOM && "TextEvent" in window && !Cr,
        Rr = Io.canUseDOM && (!_r || Cr && 8 < Cr && 11 >= Cr),
        Tr = String.fromCharCode(32),
        Or = {
            beforeInput: {
                phasedRegistrationNames: {
                    bubbled: "onBeforeInput",
                    captured: "onBeforeInputCapture"
                },
                dependencies: ["compositionend", "keypress", "textInput", "paste"]
            },
            compositionEnd: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionEnd",
                    captured: "onCompositionEndCapture"
                },
                dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
            },
            compositionStart: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionStart",
                    captured: "onCompositionStartCapture"
                },
                dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
            },
            compositionUpdate: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionUpdate",
                    captured: "onCompositionUpdateCapture"
                },
                dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
            }
        },
        Lr = !1,
        Dr = !1,
        Pr = {
            eventTypes: Or,
            extractEvents: function(e, t, n, o) {
                var r = void 0,
                    a = void 0;
                if (_r) e: {
                    switch (e) {
                        case "compositionstart":
                            r = Or.compositionStart;
                            break e;
                        case "compositionend":
                            r = Or.compositionEnd;
                            break e;
                        case "compositionupdate":
                            r = Or.compositionUpdate;
                            break e
                    }
                    r = void 0
                }
                else Dr ? B(e, n) && (r = Or.compositionEnd) : "keydown" === e && 229 === n.keyCode && (r = Or.compositionStart);
                return r ? (Rr && (Dr || r !== Or.compositionStart ? r === Or.compositionEnd && Dr && (a = N()) : (vr._root = o, vr._startText = M(), Dr = !0)), r = xr.getPooled(r, t, n, o), a ? r.data = a : null !== (a = F(n)) && (r.data = a), O(r), a = r) : a = null, (e = Er ? W(e, n) : q(e, n)) ? (t = kr.getPooled(Or.beforeInput, t, n, o), t.data = e, O(t)) : t = null, null === a ? t : null === t ? a : [a, t]
            }
        },
        jr = null,
        Nr = {
            injectFiberControlledHostComponent: function(e) {
                jr = e
            }
        },
        Mr = null,
        Ar = null,
        Ir = {
            injection: Nr,
            enqueueStateRestore: V,
            needsStateRestore: $,
            restoreStateIfNeeded: K
        },
        Ur = !1,
        zr = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        },
        Br = Ao.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        Fr = "function" === typeof Symbol && Symbol.for,
        Wr = Fr ? Symbol.for("react.element") : 60103,
        qr = Fr ? Symbol.for("react.portal") : 60106,
        Hr = Fr ? Symbol.for("react.fragment") : 60107,
        Vr = Fr ? Symbol.for("react.strict_mode") : 60108,
        $r = Fr ? Symbol.for("react.profiler") : 60114,
        Kr = Fr ? Symbol.for("react.provider") : 60109,
        Xr = Fr ? Symbol.for("react.context") : 60110,
        Qr = Fr ? Symbol.for("react.async_mode") : 60111,
        Gr = Fr ? Symbol.for("react.forward_ref") : 60112,
        Yr = Fr ? Symbol.for("react.timeout") : 60113,
        Jr = "function" === typeof Symbol && Symbol.iterator,
        Zr = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        ea = Object.prototype.hasOwnProperty,
        ta = {},
        na = {},
        oa = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        oa[e] = new fe(e, 0, !1, e, null)
    }), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(e) {
        var t = e[0];
        oa[t] = new fe(t, 1, !1, e[1], null)
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        oa[e] = new fe(e, 2, !1, e.toLowerCase(), null)
    }), ["autoReverse", "externalResourcesRequired", "preserveAlpha"].forEach(function(e) {
        oa[e] = new fe(e, 2, !1, e, null)
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        oa[e] = new fe(e, 3, !1, e.toLowerCase(), null)
    }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        oa[e] = new fe(e, 3, !0, e.toLowerCase(), null)
    }), ["capture", "download"].forEach(function(e) {
        oa[e] = new fe(e, 4, !1, e.toLowerCase(), null)
    }), ["cols", "rows", "size", "span"].forEach(function(e) {
        oa[e] = new fe(e, 6, !1, e.toLowerCase(), null)
    }), ["rowSpan", "start"].forEach(function(e) {
        oa[e] = new fe(e, 5, !1, e.toLowerCase(), null)
    });
    var ra = /[\-:]([a-z])/g;
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(ra, de);
        oa[t] = new fe(t, 1, !1, e, null)
    }), "xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(ra, de);
        oa[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink")
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(ra, de);
        oa[t] = new fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace")
    }), oa.tabIndex = new fe("tabIndex", 1, !1, "tabindex", null);
    var aa = {
            change: {
                phasedRegistrationNames: {
                    bubbled: "onChange",
                    captured: "onChangeCapture"
                },
                dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
            }
        },
        ia = null,
        sa = null,
        ua = !1;
    Io.canUseDOM && (ua = ee("input") && (!document.documentMode || 9 < document.documentMode));
    var ca = {
            eventTypes: aa,
            _isInputEventSupported: ua,
            extractEvents: function(e, t, n, o) {
                var r = t ? w(t) : window,
                    a = void 0,
                    i = void 0,
                    s = r.nodeName && r.nodeName.toLowerCase();
                if ("select" === s || "input" === s && "file" === r.type ? a = _e : J(r) ? ua ? a = Le : (a = Te, i = Re) : (s = r.nodeName) && "input" === s.toLowerCase() && ("checkbox" === r.type || "radio" === r.type) && (a = Oe), a && (a = a(e, t))) return xe(a, n, o);
                i && i(e, r, t), "blur" === e && (e = r._wrapperState) && e.controlled && "number" === r.type && be(r, "number", r.value)
            }
        },
        la = A.extend({
            view: null,
            detail: null
        }),
        fa = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        },
        da = la.extend({
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            pageX: null,
            pageY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: Pe,
            button: null,
            buttons: null,
            relatedTarget: function(e) {
                return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
            }
        }),
        pa = da.extend({
            pointerId: null,
            width: null,
            height: null,
            pressure: null,
            tiltX: null,
            tiltY: null,
            pointerType: null,
            isPrimary: null
        }),
        ha = {
            mouseEnter: {
                registrationName: "onMouseEnter",
                dependencies: ["mouseout", "mouseover"]
            },
            mouseLeave: {
                registrationName: "onMouseLeave",
                dependencies: ["mouseout", "mouseover"]
            },
            pointerEnter: {
                registrationName: "onPointerEnter",
                dependencies: ["pointerout", "pointerover"]
            },
            pointerLeave: {
                registrationName: "onPointerLeave",
                dependencies: ["pointerout", "pointerover"]
            }
        },
        ya = {
            eventTypes: ha,
            extractEvents: function(e, t, n, o) {
                var r = "mouseover" === e || "pointerover" === e,
                    a = "mouseout" === e || "pointerout" === e;
                if (r && (n.relatedTarget || n.fromElement) || !a && !r) return null;
                if (r = o.window === o ? o : (r = o.ownerDocument) ? r.defaultView || r.parentWindow : window, a ? (a = t, t = (t = n.relatedTarget || n.toElement) ? b(t) : null) : a = null, a === t) return null;
                var i = void 0,
                    s = void 0,
                    u = void 0,
                    c = void 0;
                return "mouseout" === e || "mouseover" === e ? (i = da, s = ha.mouseLeave, u = ha.mouseEnter, c = "mouse") : "pointerout" !== e && "pointerover" !== e || (i = pa, s = ha.pointerLeave, u = ha.pointerEnter, c = "pointer"), e = null == a ? r : w(a), r = null == t ? r : w(t), s = i.getPooled(s, a, n, o), s.type = c + "leave", s.target = e, s.relatedTarget = r, n = i.getPooled(u, t, n, o), n.type = c + "enter", n.target = r, n.relatedTarget = e, L(s, n, a, t), [s, n]
            }
        },
        ma = A.extend({
            animationName: null,
            elapsedTime: null,
            pseudoElement: null
        }),
        ga = A.extend({
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        va = la.extend({
            relatedTarget: null
        }),
        ba = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        wa = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        xa = la.extend({
            key: function(e) {
                if (e.key) {
                    var t = ba[e.key] || e.key;
                    if ("Unidentified" !== t) return t
                }
                return "keypress" === e.type ? (e = Ue(e), 13 === e ? "Enter" : String.fromCharCode(e)) : "keydown" === e.type || "keyup" === e.type ? wa[e.keyCode] || "Unidentified" : ""
            },
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: Pe,
            charCode: function(e) {
                return "keypress" === e.type ? Ue(e) : 0
            },
            keyCode: function(e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            },
            which: function(e) {
                return "keypress" === e.type ? Ue(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            }
        }),
        ka = da.extend({
            dataTransfer: null
        }),
        Sa = la.extend({
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: Pe
        }),
        _a = A.extend({
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null
        }),
        Ca = da.extend({
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: null,
            deltaMode: null
        }),
        Ea = [
            ["abort", "abort"],
            [dr, "animationEnd"],
            [pr, "animationIteration"],
            [hr, "animationStart"],
            ["canplay", "canPlay"],
            ["canplaythrough", "canPlayThrough"],
            ["drag", "drag"],
            ["dragenter", "dragEnter"],
            ["dragexit", "dragExit"],
            ["dragleave", "dragLeave"],
            ["dragover", "dragOver"],
            ["durationchange", "durationChange"],
            ["emptied", "emptied"],
            ["encrypted", "encrypted"],
            ["ended", "ended"],
            ["error", "error"],
            ["gotpointercapture", "gotPointerCapture"],
            ["load", "load"],
            ["loadeddata", "loadedData"],
            ["loadedmetadata", "loadedMetadata"],
            ["loadstart", "loadStart"],
            ["lostpointercapture", "lostPointerCapture"],
            ["mousemove", "mouseMove"],
            ["mouseout", "mouseOut"],
            ["mouseover", "mouseOver"],
            ["playing", "playing"],
            ["pointermove", "pointerMove"],
            ["pointerout", "pointerOut"],
            ["pointerover", "pointerOver"],
            ["progress", "progress"],
            ["scroll", "scroll"],
            ["seeking", "seeking"],
            ["stalled", "stalled"],
            ["suspend", "suspend"],
            ["timeupdate", "timeUpdate"],
            ["toggle", "toggle"],
            ["touchmove", "touchMove"],
            [yr, "transitionEnd"],
            ["waiting", "waiting"],
            ["wheel", "wheel"]
        ],
        Ra = {},
        Ta = {};
    [
        ["blur", "blur"],
        ["cancel", "cancel"],
        ["click", "click"],
        ["close", "close"],
        ["contextmenu", "contextMenu"],
        ["copy", "copy"],
        ["cut", "cut"],
        ["dblclick", "doubleClick"],
        ["dragend", "dragEnd"],
        ["dragstart", "dragStart"],
        ["drop", "drop"],
        ["focus", "focus"],
        ["input", "input"],
        ["invalid", "invalid"],
        ["keydown", "keyDown"],
        ["keypress", "keyPress"],
        ["keyup", "keyUp"],
        ["mousedown", "mouseDown"],
        ["mouseup", "mouseUp"],
        ["paste", "paste"],
        ["pause", "pause"],
        ["play", "play"],
        ["pointercancel", "pointerCancel"],
        ["pointerdown", "pointerDown"],
        ["pointerup", "pointerUp"],
        ["ratechange", "rateChange"],
        ["reset", "reset"],
        ["seeked", "seeked"],
        ["submit", "submit"],
        ["touchcancel", "touchCancel"],
        ["touchend", "touchEnd"],
        ["touchstart", "touchStart"],
        ["volumechange", "volumeChange"]
    ].forEach(function(e) {
        ze(e, !0)
    }), Ea.forEach(function(e) {
        ze(e, !1)
    });
    var Oa = {
            eventTypes: Ra,
            isInteractiveTopLevelEventType: function(e) {
                return void 0 !== (e = Ta[e]) && !0 === e.isInteractive
            },
            extractEvents: function(e, t, n, o) {
                var r = Ta[e];
                if (!r) return null;
                switch (e) {
                    case "keypress":
                        if (0 === Ue(n)) return null;
                    case "keydown":
                    case "keyup":
                        e = xa;
                        break;
                    case "blur":
                    case "focus":
                        e = va;
                        break;
                    case "click":
                        if (2 === n.button) return null;
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        e = da;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        e = ka;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        e = Sa;
                        break;
                    case dr:
                    case pr:
                    case hr:
                        e = ma;
                        break;
                    case yr:
                        e = _a;
                        break;
                    case "scroll":
                        e = la;
                        break;
                    case "wheel":
                        e = Ca;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        e = ga;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        e = pa;
                        break;
                    default:
                        e = A
                }
                return t = e.getPooled(r, t, n, o), O(t), t
            }
        },
        La = Oa.isInteractiveTopLevelEventType,
        Da = [],
        Pa = !0,
        ja = {
            get _enabled() {
                return Pa
            },
            setEnabled: Fe,
            isEnabled: function() {
                return Pa
            },
            trapBubbledEvent: We,
            trapCapturedEvent: qe,
            dispatchEvent: Ve
        },
        Na = {},
        Ma = 0,
        Aa = "_reactListenersID" + ("" + Math.random()).slice(2),
        Ia = Io.canUseDOM && "documentMode" in document && 11 >= document.documentMode,
        Ua = {
            select: {
                phasedRegistrationNames: {
                    bubbled: "onSelect",
                    captured: "onSelectCapture"
                },
                dependencies: "blur contextmenu focus keydown keyup mousedown mouseup selectionchange".split(" ")
            }
        },
        za = null,
        Ba = null,
        Fa = null,
        Wa = !1,
        qa = {
            eventTypes: Ua,
            extractEvents: function(e, t, n, o) {
                var r, a = o.window === o ? o.document : 9 === o.nodeType ? o : o.ownerDocument;
                if (!(r = !a)) {
                    e: {
                        a = $e(a),
                        r = Go.onSelect;
                        for (var i = 0; i < r.length; i++) {
                            var s = r[i];
                            if (!a.hasOwnProperty(s) || !a[s]) {
                                a = !1;
                                break e
                            }
                        }
                        a = !0
                    }
                    r = !a
                }
                if (r) return null;
                switch (a = t ? w(t) : window, e) {
                    case "focus":
                        (J(a) || "true" === a.contentEditable) && (za = a, Ba = t, Fa = null);
                        break;
                    case "blur":
                        Fa = Ba = za = null;
                        break;
                    case "mousedown":
                        Wa = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                        return Wa = !1, Ge(n, o);
                    case "selectionchange":
                        if (Ia) break;
                    case "keydown":
                    case "keyup":
                        return Ge(n, o)
                }
                return null
            }
        };
    nr.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), Jo = sr.getFiberCurrentPropsFromNode, Zo = sr.getInstanceFromNode, er = sr.getNodeFromInstance, nr.injectEventPluginsByName({
        SimpleEventPlugin: Oa,
        EnterLeaveEventPlugin: ya,
        ChangeEventPlugin: ca,
        SelectEventPlugin: qa,
        BeforeInputEventPlugin: Pr
    });
    var Ha = "function" === typeof requestAnimationFrame ? requestAnimationFrame : void 0,
        Va = Date,
        $a = setTimeout,
        Ka = clearTimeout,
        Xa = void 0;
    if ("object" === typeof performance && "function" === typeof performance.now) {
        var Qa = performance;
        Xa = function() {
            return Qa.now()
        }
    } else Xa = function() {
        return Va.now()
    };
    var Ga = void 0,
        Ya = void 0;
    if (Io.canUseDOM) {
        var Ja = "function" === typeof Ha ? Ha : function() {
                o("276")
            },
            Za = null,
            ei = null,
            ti = -1,
            ni = !1,
            oi = !1,
            ri = 0,
            ai = 33,
            ii = 33,
            si = {
                didTimeout: !1,
                timeRemaining: function() {
                    var e = ri - Xa();
                    return 0 < e ? e : 0
                }
            },
            ui = function(e, t) {
                var n = e.scheduledCallback,
                    o = !1;
                try {
                    n(t), o = !0
                } finally {
                    Ya(e), o || (ni = !0, window.postMessage(ci, "*"))
                }
            },
            ci = "__reactIdleCallback$" + Math.random().toString(36).slice(2);
        window.addEventListener("message", function(e) {
            if (e.source === window && e.data === ci && (ni = !1, null !== Za)) {
                if (null !== Za) {
                    var t = Xa();
                    if (!(-1 === ti || ti > t)) {
                        e = -1;
                        for (var n = [], o = Za; null !== o;) {
                            var r = o.timeoutTime; - 1 !== r && r <= t ? n.push(o) : -1 !== r && (-1 === e || r < e) && (e = r), o = o.next
                        }
                        if (0 < n.length)
                            for (si.didTimeout = !0, t = 0, o = n.length; t < o; t++) ui(n[t], si);
                        ti = e
                    }
                }
                for (e = Xa(); 0 < ri - e && null !== Za;) e = Za, si.didTimeout = !1, ui(e, si), e = Xa();
                null === Za || oi || (oi = !0, Ja(li))
            }
        }, !1);
        var li = function(e) {
            oi = !1;
            var t = e - ri + ii;
            t < ii && ai < ii ? (8 > t && (t = 8), ii = t < ai ? ai : t) : ai = t, ri = e + ii, ni || (ni = !0, window.postMessage(ci, "*"))
        };
        Ga = function(e, t) {
            var n = -1;
            return null != t && "number" === typeof t.timeout && (n = Xa() + t.timeout), (-1 === ti || -1 !== n && n < ti) && (ti = n), e = {
                scheduledCallback: e,
                timeoutTime: n,
                prev: null,
                next: null
            }, null === Za ? Za = e : null !== (t = e.prev = ei) && (t.next = e), ei = e, oi || (oi = !0, Ja(li)), e
        }, Ya = function(e) {
            if (null !== e.prev || Za === e) {
                var t = e.next,
                    n = e.prev;
                e.next = null, e.prev = null, null !== t ? null !== n ? (n.next = t, t.prev = n) : (t.prev = null, Za = t) : null !== n ? (n.next = null, ei = n) : ei = Za = null
            }
        }
    } else {
        var fi = new Map;
        Ga = function(e) {
            var t = {
                    scheduledCallback: e,
                    timeoutTime: 0,
                    next: null,
                    prev: null
                },
                n = $a(function() {
                    e({
                        timeRemaining: function() {
                            return 1 / 0
                        },
                        didTimeout: !1
                    })
                });
            return fi.set(e, n), t
        }, Ya = function(e) {
            var t = fi.get(e.scheduledCallback);
            fi.delete(e), Ka(t)
        }
    }
    var di = {
            html: "http://www.w3.org/1999/xhtml",
            mathml: "http://www.w3.org/1998/Math/MathML",
            svg: "http://www.w3.org/2000/svg"
        },
        pi = void 0,
        hi = function(e) {
            return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, n, o, r) {
                MSApp.execUnsafeLocalFunction(function() {
                    return e(t, n)
                })
            } : e
        }(function(e, t) {
            if (e.namespaceURI !== di.svg || "innerHTML" in e) e.innerHTML = t;
            else {
                for (pi = pi || document.createElement("div"), pi.innerHTML = "<svg>" + t + "</svg>", t = pi.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                for (; t.firstChild;) e.appendChild(t.firstChild)
            }
        }),
        yi = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        mi = ["Webkit", "ms", "Moz", "O"];
    Object.keys(yi).forEach(function(e) {
        mi.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), yi[t] = yi[e]
        })
    });
    var gi = Uo({
            menuitem: !0
        }, {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        }),
        vi = zo.thatReturns(""),
        bi = {
            createElement: dt,
            createTextNode: pt,
            setInitialProperties: ht,
            diffProperties: yt,
            updateProperties: mt,
            diffHydratedProperties: gt,
            diffHydratedText: vt,
            warnForUnmatchedText: function() {},
            warnForDeletedHydratableElement: function() {},
            warnForDeletedHydratableText: function() {},
            warnForInsertedHydratedElement: function() {},
            warnForInsertedHydratedText: function() {},
            restoreControlledState: function(e, t, n) {
                switch (t) {
                    case "input":
                        if (ge(e, n), t = n.name, "radio" === n.type && null != t) {
                            for (n = e; n.parentNode;) n = n.parentNode;
                            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                var r = n[t];
                                if (r !== e && r.form === e.form) {
                                    var a = x(r);
                                    a || o("90"), re(r), ge(r, a)
                                }
                            }
                        }
                        break;
                    case "textarea":
                        ot(e, n);
                        break;
                    case "select":
                        null != (t = n.value) && Ze(e, !!n.multiple, t, !1)
                }
            }
        },
        wi = null,
        xi = null,
        ki = Xa,
        Si = Ga,
        _i = Ya;
    new Set;
    var Ci = [],
        Ei = -1,
        Ri = St(qo),
        Ti = St(!1),
        Oi = qo,
        Li = null,
        Di = null,
        Pi = !1,
        ji = St(null),
        Ni = St(null),
        Mi = St(0),
        Ai = {},
        Ii = St(Ai),
        Ui = St(Ai),
        zi = St(Ai),
        Bi = {
            isMounted: function(e) {
                return !!(e = e._reactInternalFiber) && 2 === je(e)
            },
            enqueueSetState: function(e, t, n) {
                e = e._reactInternalFiber;
                var o = eo();
                o = Jn(o, e);
                var r = Xt(o);
                r.payload = t, void 0 !== n && null !== n && (r.callback = n), Gt(e, r, o), Zn(e, o)
            },
            enqueueReplaceState: function(e, t, n) {
                e = e._reactInternalFiber;
                var o = eo();
                o = Jn(o, e);
                var r = Xt(o);
                r.tag = 1, r.payload = t, void 0 !== n && null !== n && (r.callback = n), Gt(e, r, o), Zn(e, o)
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternalFiber;
                var n = eo();
                n = Jn(n, e);
                var o = Xt(n);
                o.tag = 2, void 0 !== t && null !== t && (o.callback = t), Gt(e, o, n), Zn(e, n)
            }
        },
        Fi = Array.isArray,
        Wi = gn(!0),
        qi = gn(!1),
        Hi = null,
        Vi = null,
        $i = !1,
        Ki = void 0,
        Xi = void 0,
        Qi = void 0;
    Ki = function() {}, Xi = function(e, t, n) {
        (t.updateQueue = n) && jn(t)
    }, Qi = function(e, t, n, o) {
        n !== o && jn(t)
    };
    var Gi = ki(),
        Yi = 2,
        Ji = Gi,
        Zi = 0,
        es = 0,
        ts = !1,
        ns = null,
        os = null,
        rs = 0,
        as = -1,
        is = !1,
        ss = null,
        us = !1,
        cs = !1,
        ls = null,
        fs = null,
        ds = null,
        ps = 0,
        hs = void 0,
        ys = !1,
        ms = null,
        gs = 0,
        vs = 0,
        bs = !1,
        ws = !1,
        xs = null,
        ks = null,
        Ss = !1,
        _s = !1,
        Cs = !1,
        Es = null,
        Rs = 1e3,
        Ts = 0,
        Os = 1,
        Ls = {
            updateContainerAtExpirationTime: ko,
            createContainer: function(e, t, n) {
                return Ft(e, t, n)
            },
            updateContainer: _o,
            flushRoot: co,
            requestWork: ro,
            computeUniqueAsyncExpiration: Yn,
            batchedUpdates: go,
            unbatchedUpdates: vo,
            deferredUpdates: to,
            syncUpdates: no,
            interactiveUpdates: wo,
            flushInteractiveUpdates: function() {
                ys || 0 === vs || (uo(vs, !1, null), vs = 0)
            },
            flushControlled: xo,
            flushSync: bo,
            getPublicRootInstance: Co,
            findHostInstance: So,
            findHostInstanceWithNoPortals: function(e) {
                return e = Ie(e), null === e ? null : e.stateNode
            },
            injectIntoDevTools: Eo
        };
    Nr.injectFiberControlledHostComponent(bi), To.prototype.render = function(e) {
        this._defer || o("250"), this._hasChildren = !0, this._children = e;
        var t = this._root._internalRoot,
            n = this._expirationTime,
            r = new Oo;
        return ko(e, t, null, n, r._onCommit), r
    }, To.prototype.then = function(e) {
        if (this._didComplete) e();
        else {
            var t = this._callbacks;
            null === t && (t = this._callbacks = []), t.push(e)
        }
    }, To.prototype.commit = function() {
        var e = this._root._internalRoot,
            t = e.firstBatch;
        if (this._defer && null !== t || o("251"), this._hasChildren) {
            var n = this._expirationTime;
            if (t !== this) {
                this._hasChildren && (n = this._expirationTime = t._expirationTime, this.render(this._children));
                for (var r = null, a = t; a !== this;) r = a, a = a._next;
                null === r && o("251"), r._next = a._next, this._next = t, e.firstBatch = this
            }
            this._defer = !1, co(e, n), t = this._next, this._next = null, t = e.firstBatch = t, null !== t && t._hasChildren && t.render(t._children)
        } else this._next = null, this._defer = !1
    }, To.prototype._onComplete = function() {
        if (!this._didComplete) {
            this._didComplete = !0;
            var e = this._callbacks;
            if (null !== e)
                for (var t = 0; t < e.length; t++)(0, e[t])()
        }
    }, Oo.prototype.then = function(e) {
        if (this._didCommit) e();
        else {
            var t = this._callbacks;
            null === t && (t = this._callbacks = []), t.push(e)
        }
    }, Oo.prototype._onCommit = function() {
        if (!this._didCommit) {
            this._didCommit = !0;
            var e = this._callbacks;
            if (null !== e)
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    "function" !== typeof n && o("191", n), n()
                }
        }
    }, Lo.prototype.render = function(e, t) {
        var n = this._internalRoot,
            o = new Oo;
        return t = void 0 === t ? null : t, null !== t && o.then(t), _o(e, n, null, o._onCommit), o
    }, Lo.prototype.unmount = function(e) {
        var t = this._internalRoot,
            n = new Oo;
        return e = void 0 === e ? null : e, null !== e && n.then(e), _o(null, t, null, n._onCommit), n
    }, Lo.prototype.legacy_renderSubtreeIntoContainer = function(e, t, n) {
        var o = this._internalRoot,
            r = new Oo;
        return n = void 0 === n ? null : n, null !== n && r.then(n), _o(t, o, e, r._onCommit), r
    }, Lo.prototype.createBatch = function() {
        var e = new To(this),
            t = e._expirationTime,
            n = this._internalRoot,
            o = n.firstBatch;
        if (null === o) n.firstBatch = e, e._next = null;
        else {
            for (n = null; null !== o && o._expirationTime <= t;) n = o, o = o._next;
            e._next = o, null !== n && (n._next = e)
        }
        return e
    }, X = Ls.batchedUpdates, Q = Ls.interactiveUpdates, G = Ls.flushInteractiveUpdates;
    var Ds = {
        createPortal: No,
        findDOMNode: function(e) {
            return null == e ? null : 1 === e.nodeType ? e : So(e)
        },
        hydrate: function(e, t, n) {
            return jo(null, e, t, !0, n)
        },
        render: function(e, t, n) {
            return jo(null, e, t, !1, n)
        },
        unstable_renderSubtreeIntoContainer: function(e, t, n, r) {
            return (null == e || void 0 === e._reactInternalFiber) && o("38"), jo(e, t, n, !1, r)
        },
        unmountComponentAtNode: function(e) {
            return Do(e) || o("40"), !!e._reactRootContainer && (vo(function() {
                jo(null, null, e, !1, function() {
                    e._reactRootContainer = null
                })
            }), !0)
        },
        unstable_createPortal: function() {
            return No.apply(void 0, arguments)
        },
        unstable_batchedUpdates: go,
        unstable_deferredUpdates: to,
        unstable_interactiveUpdates: wo,
        flushSync: bo,
        unstable_flushControlled: xo,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            EventPluginHub: or,
            EventPluginRegistry: Yo,
            EventPropagators: ur,
            ReactControlledComponent: Ir,
            ReactDOMComponentTree: sr,
            ReactDOMEventListener: ja
        },
        unstable_createRoot: function(e, t) {
            return new Lo(e, !0, null != t && !0 === t.hydrate)
        }
    };
    Eo({
        findFiberByHostInstance: b,
        bundleType: 0,
        version: "16.4.2",
        rendererPackageName: "react-dom"
    });
    var Ps = {
            default: Ds
        },
        js = Ps && Ds || Ps;
    e.exports = js.default ? js.default : js
}, function(e, t, n) {
    "use strict";
    var o = !("undefined" === typeof window || !window.document || !window.document.createElement),
        r = {
            canUseDOM: o,
            canUseWorkers: "undefined" !== typeof Worker,
            canUseEventListeners: o && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: o && !!window.screen,
            isInWorker: !o
        };
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function o(e) {
        if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
        try {
            return e.activeElement || e.body
        } catch (t) {
            return e.body
        }
    }
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e === 1 / t : e !== e && t !== t
    }

    function r(e, t) {
        if (o(e, t)) return !0;
        if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var i = 0; i < n.length; i++)
            if (!a.call(t, n[i]) || !o(e[n[i]], t[n[i]])) return !1;
        return !0
    }
    var a = Object.prototype.hasOwnProperty;
    e.exports = r
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        return !(!e || !t) && (e === t || !r(e) && (r(t) ? o(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
    }
    var r = n(155);
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return r(e) && 3 == e.nodeType
    }
    var r = n(156);
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e) {
        var t = e ? e.ownerDocument || e : document,
            n = t.defaultView || window;
        return !(!e || !("function" === typeof n.Node ? e instanceof n.Node : "object" === typeof e && "number" === typeof e.nodeType && "string" === typeof e.nodeName))
    }
    e.exports = o
}, function(e, t) {}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }

    function a(e, t) {
        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var i = n(0),
        s = n.n(i),
        u = n(19),
        c = n(27),
        l = n(186),
        f = n(187),
        d = n(188),
        p = n(345),
        h = n(363),
        y = (n.n(h), function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }()),
        m = Object(c.c)(d.a, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
        g = function(e) {
            function t() {
                return o(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return a(t, e), y(t, [{
                key: "render",
                value: function() {
                    return s.a.createElement(u.a, {
                        store: m
                    }, s.a.createElement("div", {
                        className: "App"
                    }, s.a.createElement("header", null, s.a.createElement(f.a, null), s.a.createElement(l.a, null)), s.a.createElement("div", {
                        style: {
                            marginTop: "2%"
                        },
                        className: "container-fluid"
                    }, s.a.createElement("div", {
                        className: "jumbotron"
                    }, s.a.createElement("h1", {
                        className: "App-title"
                    }, "Drug Combinations"), s.a.createElement("p", null, "This is an app version of our combo chart you can find ", s.a.createElement("a", {
                        href: "https://wiki.tripsit.me/wiki/Drug_combinations",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, " here"), " "), s.a.createElement(p.a, null)))))
                }
            }]), t
        }(i.Component);
    t.a = g
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }

    function a(e, t) {
        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var i = n(0),
        s = (n.n(i), n(44)),
        u = n.n(s),
        c = n(81);
    n(45);
    t.a = function() {
        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "store",
            n = arguments[1],
            s = n || t + "Subscription",
            l = function(e) {
                function n(a, i) {
                    o(this, n);
                    var s = r(this, e.call(this, a, i));
                    return s[t] = a.store, s
                }
                return a(n, e), n.prototype.getChildContext = function() {
                    var e;
                    return e = {}, e[t] = this[t], e[s] = null, e
                }, n.prototype.render = function() {
                    return i.Children.only(this.props.children)
                }, n
            }(i.Component);
        return l.propTypes = {
            store: c.a.isRequired,
            children: u.a.element.isRequired
        }, l.childContextTypes = (e = {}, e[t] = c.a.isRequired, e[s] = c.b, e), l
    }()
}, function(e, t, n) {
    "use strict";

    function o() {}
    var r = n(161);
    e.exports = function() {
        function e(e, t, n, o, a, i) {
            if (i !== r) {
                var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw s.name = "Invariant Violation", s
            }
        }

        function t() {
            return e
        }
        e.isRequired = e;
        var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t
        };
        return n.checkPropTypes = o, n.PropTypes = n, n
    }
}, function(e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function(e, t, n) {
    "use strict";

    function o(e, t, n) {
        if ("string" !== typeof t) {
            if (f) {
                var d = l(t);
                d && d !== f && o(e, d, n)
            }
            var p = s(t);
            u && (p = p.concat(u(t)));
            for (var h = 0; h < p.length; ++h) {
                var y = p[h];
                if (!r[y] && !a[y] && (!n || !n[y])) {
                    var m = c(t, y);
                    try {
                        i(e, y, m)
                    } catch (e) {}
                }
            }
            return e
        }
        return e
    }
    var r = {
            childContextTypes: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        },
        a = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        },
        i = Object.defineProperty,
        s = Object.getOwnPropertyNames,
        u = Object.getOwnPropertySymbols,
        c = Object.getOwnPropertyDescriptor,
        l = Object.getPrototypeOf,
        f = l && l(Object);
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var o = function(e, t, n, o, r, a, i, s) {
        if (!e) {
            var u;
            if (void 0 === t) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var c = [n, o, r, a, i, s],
                    l = 0;
                u = new Error(t.replace(/%s/g, function() {
                    return c[l++]
                })), u.name = "Invariant Violation"
            }
            throw u.framesToPop = 1, u
        }
    };
    e.exports = o
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r() {
        var e = [],
            t = [];
        return {
            clear: function() {
                t = a, e = a
            },
            notify: function() {
                for (var n = e = t, o = 0; o < n.length; o++) n[o]()
            },
            get: function() {
                return t
            },
            subscribe: function(n) {
                var o = !0;
                return t === e && (t = e.slice()), t.push(n),
                    function() {
                        o && e !== a && (o = !1, t === e && (t = e.slice()), t.splice(t.indexOf(n), 1))
                    }
            }
        }
    }
    n.d(t, "a", function() {
        return s
    });
    var a = null,
        i = {
            notify: function() {}
        },
        s = function() {
            function e(t, n, r) {
                o(this, e), this.store = t, this.parentSub = n, this.onStateChange = r, this.unsubscribe = null, this.listeners = i
            }
            return e.prototype.addNestedSub = function(e) {
                return this.trySubscribe(), this.listeners.subscribe(e)
            }, e.prototype.notifyNestedSubs = function() {
                this.listeners.notify()
            }, e.prototype.isSubscribed = function() {
                return Boolean(this.unsubscribe)
            }, e.prototype.trySubscribe = function() {
                this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange), this.listeners = r())
            }, e.prototype.tryUnsubscribe = function() {
                this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), this.listeners = i)
            }, e
        }()
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        var n = {};
        for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
        return n
    }

    function r(e, t, n) {
        for (var o = t.length - 1; o >= 0; o--) {
            var r = t[o](e);
            if (r) return r
        }
        return function(t, o) {
            throw new Error("Invalid value of type " + typeof e + " for " + n + " argument when connecting component " + o.wrappedComponentName + ".")
        }
    }

    function a(e, t) {
        return e === t
    }
    var i = n(82),
        s = n(166),
        u = n(167),
        c = n(182),
        l = n(183),
        f = n(184),
        d = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        };
    t.a = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.connectHOC,
            n = void 0 === t ? i.a : t,
            p = e.mapStateToPropsFactories,
            h = void 0 === p ? c.a : p,
            y = e.mapDispatchToPropsFactories,
            m = void 0 === y ? u.a : y,
            g = e.mergePropsFactories,
            v = void 0 === g ? l.a : g,
            b = e.selectorFactory,
            w = void 0 === b ? f.a : b;
        return function(e, t, i) {
            var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                c = u.pure,
                l = void 0 === c || c,
                f = u.areStatesEqual,
                p = void 0 === f ? a : f,
                y = u.areOwnPropsEqual,
                g = void 0 === y ? s.a : y,
                b = u.areStatePropsEqual,
                x = void 0 === b ? s.a : b,
                k = u.areMergedPropsEqual,
                S = void 0 === k ? s.a : k,
                _ = o(u, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]),
                C = r(e, h, "mapStateToProps"),
                E = r(t, m, "mapDispatchToProps"),
                R = r(i, v, "mergeProps");
            return n(w, d({
                methodName: "connect",
                getDisplayName: function(e) {
                    return "Connect(" + e + ")"
                },
                shouldHandleStateChanges: Boolean(e),
                initMapStateToProps: C,
                initMapDispatchToProps: E,
                initMergeProps: R,
                pure: l,
                areStatesEqual: p,
                areOwnPropsEqual: g,
                areStatePropsEqual: x,
                areMergedPropsEqual: S
            }, _))
        }
    }()
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e === 1 / t : e !== e && t !== t
    }

    function r(e, t) {
        if (o(e, t)) return !0;
        if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var i = 0; i < n.length; i++)
            if (!a.call(t, n[i]) || !o(e[n[i]], t[n[i]])) return !1;
        return !0
    }
    t.a = r;
    var a = Object.prototype.hasOwnProperty
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return "function" === typeof e ? Object(s.b)(e, "mapDispatchToProps") : void 0
    }

    function r(e) {
        return e ? void 0 : Object(s.a)(function(e) {
            return {
                dispatch: e
            }
        })
    }

    function a(e) {
        return e && "object" === typeof e ? Object(s.a)(function(t) {
            return Object(i.a)(e, t)
        }) : void 0
    }
    var i = n(27),
        s = n(87);
    t.a = [o, r, a]
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return null == e ? void 0 === e ? u : s : c && c in Object(e) ? Object(a.a)(e) : Object(i.a)(e)
    }
    var r = n(84),
        a = n(171),
        i = n(172),
        s = "[object Null]",
        u = "[object Undefined]",
        c = r.a ? r.a.toStringTag : void 0;
    t.a = o
}, function(e, t, n) {
    "use strict";
    var o = n(170),
        r = "object" == typeof self && self && self.Object === Object && self,
        a = o.a || r || Function("return this")();
    t.a = a
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.a = n
    }).call(t, n(26))
}, function(e, t, n) {
    "use strict";

    function o(e) {
        var t = i.call(e, u),
            n = e[u];
        try {
            e[u] = void 0;
            var o = !0
        } catch (e) {}
        var r = s.call(e);
        return o && (t ? e[u] = n : delete e[u]), r
    }
    var r = n(84),
        a = Object.prototype,
        i = a.hasOwnProperty,
        s = a.toString,
        u = r.a ? r.a.toStringTag : void 0;
    t.a = o
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return a.call(e)
    }
    var r = Object.prototype,
        a = r.toString;
    t.a = o
}, function(e, t, n) {
    "use strict";
    var o = n(174),
        r = Object(o.a)(Object.getPrototypeOf, Object);
    t.a = r
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        return function(n) {
            return e(t(n))
        }
    }
    t.a = o
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return null != e && "object" == typeof e
    }
    t.a = o
}, function(e, t, n) {
    "use strict";
    (function(e, o) {
        var r, a = n(178);
        r = "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : "undefined" !== typeof e ? e : o;
        var i = Object(a.a)(r);
        t.a = i
    }).call(t, n(26), n(177)(e))
}, function(e, t) {
    e.exports = function(e) {
        if (!e.webpackPolyfill) {
            var t = Object.create(e);
            t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }), Object.defineProperty(t, "exports", {
                enumerable: !0
            }), t.webpackPolyfill = 1
        }
        return t
    }
}, function(e, t, n) {
    "use strict";

    function o(e) {
        var t, n = e.Symbol;
        return "function" === typeof n ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
    }
    t.a = o
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        var n = t && t.type;
        return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
    }

    function r(e) {
        Object.keys(e).forEach(function(t) {
            var n = e[t];
            if ("undefined" === typeof n(void 0, {
                    type: i.a.INIT
                })) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
            if ("undefined" === typeof n(void 0, {
                    type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
                })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + i.a.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
        })
    }

    function a(e) {
        for (var t = Object.keys(e), n = {}, a = 0; a < t.length; a++) {
            var i = t[a];
            "function" === typeof e[i] && (n[i] = e[i])
        }
        var s = Object.keys(n),
            u = void 0;
        try {
            r(n)
        } catch (e) {
            u = e
        }
        return function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments[1];
            if (u) throw u;
            for (var r = !1, a = {}, i = 0; i < s.length; i++) {
                var c = s[i],
                    l = n[c],
                    f = e[c],
                    d = l(f, t);
                if ("undefined" === typeof d) {
                    var p = o(c, t);
                    throw new Error(p)
                }
                a[c] = d, r = r || d !== f
            }
            return r ? a : e
        }
    }
    t.a = a;
    var i = n(83);
    n(46), n(85)
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        return function() {
            return t(e.apply(void 0, arguments))
        }
    }

    function r(e, t) {
        if ("function" === typeof e) return o(e, t);
        if ("object" !== typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        for (var n = Object.keys(e), r = {}, a = 0; a < n.length; a++) {
            var i = n[a],
                s = e[i];
            "function" === typeof s && (r[i] = o(s, t))
        }
        return r
    }
    t.a = r
}, function(e, t, n) {
    "use strict";
    n(86), Object.assign
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return "function" === typeof e ? Object(a.b)(e, "mapStateToProps") : void 0
    }

    function r(e) {
        return e ? void 0 : Object(a.a)(function() {
            return {}
        })
    }
    var a = n(87);
    t.a = [o, r]
}, function(e, t, n) {
    "use strict";

    function o(e, t, n) {
        return s({}, n, e, t)
    }

    function r(e) {
        return function(t, n) {
            var o = (n.displayName, n.pure),
                r = n.areMergedPropsEqual,
                a = !1,
                i = void 0;
            return function(t, n, s) {
                var u = e(t, n, s);
                return a ? o && r(u, i) || (i = u) : (a = !0, i = u), i
            }
        }
    }

    function a(e) {
        return "function" === typeof e ? r(e) : void 0
    }

    function i(e) {
        return e ? void 0 : function() {
            return o
        }
    }
    var s = (n(88), Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    });
    t.a = [a, i]
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        var n = {};
        for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
        return n
    }

    function r(e, t, n, o) {
        return function(r, a) {
            return n(e(r, a), t(o, a), a)
        }
    }

    function a(e, t, n, o, r) {
        function a(r, a) {
            return h = r, y = a, m = e(h, y), g = t(o, y), v = n(m, g, y), p = !0, v
        }

        function i() {
            return m = e(h, y), t.dependsOnOwnProps && (g = t(o, y)), v = n(m, g, y)
        }

        function s() {
            return e.dependsOnOwnProps && (m = e(h, y)), t.dependsOnOwnProps && (g = t(o, y)), v = n(m, g, y)
        }

        function u() {
            var t = e(h, y),
                o = !d(t, m);
            return m = t, o && (v = n(m, g, y)), v
        }

        function c(e, t) {
            var n = !f(t, y),
                o = !l(e, h);
            return h = e, y = t, n && o ? i() : n ? s() : o ? u() : v
        }
        var l = r.areStatesEqual,
            f = r.areOwnPropsEqual,
            d = r.areStatePropsEqual,
            p = !1,
            h = void 0,
            y = void 0,
            m = void 0,
            g = void 0,
            v = void 0;
        return function(e, t) {
            return p ? c(e, t) : a(e, t)
        }
    }

    function i(e, t) {
        var n = t.initMapStateToProps,
            i = t.initMapDispatchToProps,
            s = t.initMergeProps,
            u = o(t, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]),
            c = n(e, u),
            l = i(e, u),
            f = s(e, u);
        return (u.pure ? a : r)(c, l, f, e, u)
    }
    t.a = i;
    n(185)
}, function(e, t, n) {
    "use strict";
    n(45)
}, function(e, t, n) {
    "use strict";
    var o = n(0),
        r = n.n(o),
        a = function() {
            return false
        };
    t.a = a
}, function(e, t, n) {
    "use strict";
    var o = n(0),
        r = n.n(o),
        a = function() {
            return r.a.createElement("div", {
                className: "center"
            }, r.a.createElement("a", {
                href: "/"
            }, r.a.createElement("img", {
                src: "img/chat-banner.png",
                style: {
                    padding: 0,
                    margin: 0,
                    width: "100%",
                    minHeight: 40
                },
                className: "img-responsive",
                alt: "banner"
            })))
        };
    t.a = a
}, function(e, t, n) {
    "use strict";
    var o = n(27),
        r = n(20),
        a = Object(o.b)({
            combos: r.a
        });
    t.a = a
}, function(e, t, n) {
    var o = n(3),
        r = o("includes", n(295));
    r.placeholder = n(2), e.exports = r
}, function(e, t, n) {
    function o(e, t) {
        return 2 == t ? function(t, n) {
            return e.apply(void 0, arguments)
        } : function(t) {
            return e.apply(void 0, arguments)
        }
    }

    function r(e, t) {
        return 2 == t ? function(t, n) {
            return e(t, n)
        } : function(t) {
            return e(t)
        }
    }

    function a(e) {
        for (var t = e ? e.length : 0, n = Array(t); t--;) n[t] = e[t];
        return n
    }

    function i(e) {
        return function(t) {
            return e({}, t)
        }
    }

    function s(e, t) {
        return function() {
            for (var n = arguments.length, o = n - 1, r = Array(n); n--;) r[n] = arguments[n];
            var a = r[t],
                i = r.slice(0, t);
            return a && d.apply(i, a), t != o && d.apply(i, r.slice(t + 1)), e.apply(this, i)
        }
    }

    function u(e, t) {
        return function() {
            var n = arguments.length;
            if (n) {
                for (var o = Array(n); n--;) o[n] = arguments[n];
                var r = o[0] = t.apply(void 0, o);
                return e.apply(void 0, o), r
            }
        }
    }

    function c(e, t, n, d) {
        function p(e, t) {
            if (R.cap) {
                var n = l.iterateeRearg[e];
                if (n) return x(t, n);
                var o = !C && l.iterateeAry[e];
                if (o) return w(t, o)
            }
            return t
        }

        function h(e, t, n) {
            return T || R.curry && n > 1 ? I(t, n) : t
        }

        function y(e, t, n) {
            if (R.fixed && (O || !l.skipFixed[e])) {
                var o = l.methodSpread[e],
                    r = o && o.start;
                return void 0 === r ? N(t, n) : s(t, r)
            }
            return t
        }

        function m(e, t, n) {
            return R.rearg && n > 1 && (L || !l.skipRearg[e]) ? H(t, l.methodRearg[e] || l.aryRearg[n]) : t
        }

        function g(e, t) {
            t = $(t);
            for (var n = -1, o = t.length, r = o - 1, a = A(Object(e)), i = a; null != i && ++n < o;) {
                var s = t[n],
                    u = i[s];
                null == u || F(u) || B(u) || W(u) || (i[s] = A(n == r ? u : Object(u))), i = i[s]
            }
            return a
        }

        function v(e) {
            return Q.runInContext.convert(e)(void 0)
        }

        function b(e, t) {
            var n = l.aliasToReal[e] || e,
                o = l.remap[n] || n,
                r = d;
            return function(e) {
                var a = C ? P : j,
                    i = C ? P[o] : t,
                    s = M(M({}, r), e);
                return c(a, n, i, s)
            }
        }

        function w(e, t) {
            return k(e, function(e) {
                return "function" == typeof e ? r(e, t) : e
            })
        }

        function x(e, t) {
            return k(e, function(e) {
                var n = t.length;
                return o(H(r(e, n), t), n)
            })
        }

        function k(e, t) {
            return function() {
                var n = arguments.length;
                if (!n) return e();
                for (var o = Array(n); n--;) o[n] = arguments[n];
                var r = R.rearg ? 0 : n - 1;
                return o[r] = t(o[r]), e.apply(void 0, o)
            }
        }

        function S(e, t) {
            var n, o = l.aliasToReal[e] || e,
                r = t,
                s = X[o];
            return s ? r = s(t) : R.immutable && (l.mutate.array[o] ? r = u(t, a) : l.mutate.object[o] ? r = u(t, i(t)) : l.mutate.set[o] && (r = u(t, g))), U(K, function(e) {
                return U(l.aryMethod[e], function(t) {
                    if (o == t) {
                        var a = l.methodSpread[o],
                            i = a && a.afterRearg;
                        return n = i ? y(o, m(o, r, e), e) : m(o, y(o, r, e), e), n = p(o, n), n = h(o, n, e), !1
                    }
                }), !n
            }), n || (n = r), n == t && (n = T ? I(n, 1) : function() {
                return t.apply(this, arguments)
            }), n.convert = b(o, t), l.placeholder[o] && (_ = !0, n.placeholder = t.placeholder = D), n
        }
        var _, C = "function" == typeof t,
            E = t === Object(t);
        if (E && (d = n, n = t, t = void 0), null == n) throw new TypeError;
        d || (d = {});
        var R = {
                cap: !("cap" in d) || d.cap,
                curry: !("curry" in d) || d.curry,
                fixed: !("fixed" in d) || d.fixed,
                immutable: !("immutable" in d) || d.immutable,
                rearg: !("rearg" in d) || d.rearg
            },
            T = "curry" in d && d.curry,
            O = "fixed" in d && d.fixed,
            L = "rearg" in d && d.rearg,
            D = C ? n : f,
            P = C ? n.runInContext() : void 0,
            j = C ? n : {
                ary: e.ary,
                assign: e.assign,
                clone: e.clone,
                curry: e.curry,
                forEach: e.forEach,
                isArray: e.isArray,
                isError: e.isError,
                isFunction: e.isFunction,
                isWeakMap: e.isWeakMap,
                iteratee: e.iteratee,
                keys: e.keys,
                rearg: e.rearg,
                toInteger: e.toInteger,
                toPath: e.toPath
            },
            N = j.ary,
            M = j.assign,
            A = j.clone,
            I = j.curry,
            U = j.forEach,
            z = j.isArray,
            B = j.isError,
            F = j.isFunction,
            W = j.isWeakMap,
            q = j.keys,
            H = j.rearg,
            V = j.toInteger,
            $ = j.toPath,
            K = q(l.aryMethod),
            X = {
                castArray: function(e) {
                    return function() {
                        var t = arguments[0];
                        return z(t) ? e(a(t)) : e.apply(void 0, arguments)
                    }
                },
                iteratee: function(e) {
                    return function() {
                        var t = arguments[0],
                            n = arguments[1],
                            o = e(t, n),
                            a = o.length;
                        return R.cap && "number" == typeof n ? (n = n > 2 ? n - 2 : 1, a && a <= n ? o : r(o, n)) : o
                    }
                },
                mixin: function(e) {
                    return function(t) {
                        var n = this;
                        if (!F(n)) return e(n, Object(t));
                        var o = [];
                        return U(q(t), function(e) {
                            F(t[e]) && o.push([e, n.prototype[e]])
                        }), e(n, Object(t)), U(o, function(e) {
                            var t = e[1];
                            F(t) ? n.prototype[e[0]] = t : delete n.prototype[e[0]]
                        }), n
                    }
                },
                nthArg: function(e) {
                    return function(t) {
                        var n = t < 0 ? 1 : V(t) + 1;
                        return I(e(t), n)
                    }
                },
                rearg: function(e) {
                    return function(t, n) {
                        var o = n ? n.length : 0;
                        return I(e(t, n), o)
                    }
                },
                runInContext: function(t) {
                    return function(n) {
                        return c(e, t(n), d)
                    }
                }
            };
        if (!E) return S(t, n);
        var Q = n,
            G = [];
        return U(K, function(e) {
            U(l.aryMethod[e], function(e) {
                var t = Q[l.remap[e] || e];
                t && G.push([e, S(e, t)])
            })
        }), U(q(Q), function(e) {
            var t = Q[e];
            if ("function" == typeof t) {
                for (var n = G.length; n--;)
                    if (G[n][0] == e) return;
                t.convert = b(e, t), G.push([e, t])
            }
        }), U(G, function(e) {
            Q[e[0]] = e[1]
        }), Q.convert = v, _ && (Q.placeholder = D), U(q(Q), function(e) {
            U(l.realToAlias[e] || [], function(t) {
                Q[t] = Q[e]
            })
        }), Q
    }
    var l = n(191),
        f = n(2),
        d = Array.prototype.push;
    e.exports = c
}, function(e, t) {
    t.aliasToReal = {
        each: "forEach",
        eachRight: "forEachRight",
        entries: "toPairs",
        entriesIn: "toPairsIn",
        extend: "assignIn",
        extendAll: "assignInAll",
        extendAllWith: "assignInAllWith",
        extendWith: "assignInWith",
        first: "head",
        conforms: "conformsTo",
        matches: "isMatch",
        property: "get",
        __: "placeholder",
        F: "stubFalse",
        T: "stubTrue",
        all: "every",
        allPass: "overEvery",
        always: "constant",
        any: "some",
        anyPass: "overSome",
        apply: "spread",
        assoc: "set",
        assocPath: "set",
        complement: "negate",
        compose: "flowRight",
        contains: "includes",
        dissoc: "unset",
        dissocPath: "unset",
        dropLast: "dropRight",
        dropLastWhile: "dropRightWhile",
        equals: "isEqual",
        identical: "eq",
        indexBy: "keyBy",
        init: "initial",
        invertObj: "invert",
        juxt: "over",
        omitAll: "omit",
        nAry: "ary",
        path: "get",
        pathEq: "matchesProperty",
        pathOr: "getOr",
        paths: "at",
        pickAll: "pick",
        pipe: "flow",
        pluck: "map",
        prop: "get",
        propEq: "matchesProperty",
        propOr: "getOr",
        props: "at",
        symmetricDifference: "xor",
        symmetricDifferenceBy: "xorBy",
        symmetricDifferenceWith: "xorWith",
        takeLast: "takeRight",
        takeLastWhile: "takeRightWhile",
        unapply: "rest",
        unnest: "flatten",
        useWith: "overArgs",
        where: "conformsTo",
        whereEq: "isMatch",
        zipObj: "zipObject"
    }, t.aryMethod = {
        1: ["assignAll", "assignInAll", "attempt", "castArray", "ceil", "create", "curry", "curryRight", "defaultsAll", "defaultsDeepAll", "floor", "flow", "flowRight", "fromPairs", "invert", "iteratee", "memoize", "method", "mergeAll", "methodOf", "mixin", "nthArg", "over", "overEvery", "overSome", "rest", "reverse", "round", "runInContext", "spread", "template", "trim", "trimEnd", "trimStart", "uniqueId", "words", "zipAll"],
        2: ["add", "after", "ary", "assign", "assignAllWith", "assignIn", "assignInAllWith", "at", "before", "bind", "bindAll", "bindKey", "chunk", "cloneDeepWith", "cloneWith", "concat", "conformsTo", "countBy", "curryN", "curryRightN", "debounce", "defaults", "defaultsDeep", "defaultTo", "delay", "difference", "divide", "drop", "dropRight", "dropRightWhile", "dropWhile", "endsWith", "eq", "every", "filter", "find", "findIndex", "findKey", "findLast", "findLastIndex", "findLastKey", "flatMap", "flatMapDeep", "flattenDepth", "forEach", "forEachRight", "forIn", "forInRight", "forOwn", "forOwnRight", "get", "groupBy", "gt", "gte", "has", "hasIn", "includes", "indexOf", "intersection", "invertBy", "invoke", "invokeMap", "isEqual", "isMatch", "join", "keyBy", "lastIndexOf", "lt", "lte", "map", "mapKeys", "mapValues", "matchesProperty", "maxBy", "meanBy", "merge", "mergeAllWith", "minBy", "multiply", "nth", "omit", "omitBy", "overArgs", "pad", "padEnd", "padStart", "parseInt", "partial", "partialRight", "partition", "pick", "pickBy", "propertyOf", "pull", "pullAll", "pullAt", "random", "range", "rangeRight", "rearg", "reject", "remove", "repeat", "restFrom", "result", "sampleSize", "some", "sortBy", "sortedIndex", "sortedIndexOf", "sortedLastIndex", "sortedLastIndexOf", "sortedUniqBy", "split", "spreadFrom", "startsWith", "subtract", "sumBy", "take", "takeRight", "takeRightWhile", "takeWhile", "tap", "throttle", "thru", "times", "trimChars", "trimCharsEnd", "trimCharsStart", "truncate", "union", "uniqBy", "uniqWith", "unset", "unzipWith", "without", "wrap", "xor", "zip", "zipObject", "zipObjectDeep"],
        3: ["assignInWith", "assignWith", "clamp", "differenceBy", "differenceWith", "findFrom", "findIndexFrom", "findLastFrom", "findLastIndexFrom", "getOr", "includesFrom", "indexOfFrom", "inRange", "intersectionBy", "intersectionWith", "invokeArgs", "invokeArgsMap", "isEqualWith", "isMatchWith", "flatMapDepth", "lastIndexOfFrom", "mergeWith", "orderBy", "padChars", "padCharsEnd", "padCharsStart", "pullAllBy", "pullAllWith", "rangeStep", "rangeStepRight", "reduce", "reduceRight", "replace", "set", "slice", "sortedIndexBy", "sortedLastIndexBy", "transform", "unionBy", "unionWith", "update", "xorBy", "xorWith", "zipWith"],
        4: ["fill", "setWith", "updateWith"]
    }, t.aryRearg = {
        2: [1, 0],
        3: [2, 0, 1],
        4: [3, 2, 0, 1]
    }, t.iterateeAry = {
        dropRightWhile: 1,
        dropWhile: 1,
        every: 1,
        filter: 1,
        find: 1,
        findFrom: 1,
        findIndex: 1,
        findIndexFrom: 1,
        findKey: 1,
        findLast: 1,
        findLastFrom: 1,
        findLastIndex: 1,
        findLastIndexFrom: 1,
        findLastKey: 1,
        flatMap: 1,
        flatMapDeep: 1,
        flatMapDepth: 1,
        forEach: 1,
        forEachRight: 1,
        forIn: 1,
        forInRight: 1,
        forOwn: 1,
        forOwnRight: 1,
        map: 1,
        mapKeys: 1,
        mapValues: 1,
        partition: 1,
        reduce: 2,
        reduceRight: 2,
        reject: 1,
        remove: 1,
        some: 1,
        takeRightWhile: 1,
        takeWhile: 1,
        times: 1,
        transform: 2
    }, t.iterateeRearg = {
        mapKeys: [1],
        reduceRight: [1, 0]
    }, t.methodRearg = {
        assignInAllWith: [1, 0],
        assignInWith: [1, 2, 0],
        assignAllWith: [1, 0],
        assignWith: [1, 2, 0],
        differenceBy: [1, 2, 0],
        differenceWith: [1, 2, 0],
        getOr: [2, 1, 0],
        intersectionBy: [1, 2, 0],
        intersectionWith: [1, 2, 0],
        isEqualWith: [1, 2, 0],
        isMatchWith: [2, 1, 0],
        mergeAllWith: [1, 0],
        mergeWith: [1, 2, 0],
        padChars: [2, 1, 0],
        padCharsEnd: [2, 1, 0],
        padCharsStart: [2, 1, 0],
        pullAllBy: [2, 1, 0],
        pullAllWith: [2, 1, 0],
        rangeStep: [1, 2, 0],
        rangeStepRight: [1, 2, 0],
        setWith: [3, 1, 2, 0],
        sortedIndexBy: [2, 1, 0],
        sortedLastIndexBy: [2, 1, 0],
        unionBy: [1, 2, 0],
        unionWith: [1, 2, 0],
        updateWith: [3, 1, 2, 0],
        xorBy: [1, 2, 0],
        xorWith: [1, 2, 0],
        zipWith: [1, 2, 0]
    }, t.methodSpread = {
        assignAll: {
            start: 0
        },
        assignAllWith: {
            start: 0
        },
        assignInAll: {
            start: 0
        },
        assignInAllWith: {
            start: 0
        },
        defaultsAll: {
            start: 0
        },
        defaultsDeepAll: {
            start: 0
        },
        invokeArgs: {
            start: 2
        },
        invokeArgsMap: {
            start: 2
        },
        mergeAll: {
            start: 0
        },
        mergeAllWith: {
            start: 0
        },
        partial: {
            start: 1
        },
        partialRight: {
            start: 1
        },
        without: {
            start: 1
        },
        zipAll: {
            start: 0
        }
    }, t.mutate = {
        array: {
            fill: !0,
            pull: !0,
            pullAll: !0,
            pullAllBy: !0,
            pullAllWith: !0,
            pullAt: !0,
            remove: !0,
            reverse: !0
        },
        object: {
            assign: !0,
            assignAll: !0,
            assignAllWith: !0,
            assignIn: !0,
            assignInAll: !0,
            assignInAllWith: !0,
            assignInWith: !0,
            assignWith: !0,
            defaults: !0,
            defaultsAll: !0,
            defaultsDeep: !0,
            defaultsDeepAll: !0,
            merge: !0,
            mergeAll: !0,
            mergeAllWith: !0,
            mergeWith: !0
        },
        set: {
            set: !0,
            setWith: !0,
            unset: !0,
            update: !0,
            updateWith: !0
        }
    }, t.placeholder = {
        bind: !0,
        bindKey: !0,
        curry: !0,
        curryRight: !0,
        partial: !0,
        partialRight: !0
    }, t.realToAlias = function() {
        var e = Object.prototype.hasOwnProperty,
            n = t.aliasToReal,
            o = {};
        for (var r in n) {
            var a = n[r];
            e.call(o, a) ? o[a].push(r) : o[a] = [r]
        }
        return o
    }(), t.remap = {
        assignAll: "assign",
        assignAllWith: "assignWith",
        assignInAll: "assignIn",
        assignInAllWith: "assignInWith",
        curryN: "curry",
        curryRightN: "curryRight",
        defaultsAll: "defaults",
        defaultsDeepAll: "defaultsDeep",
        findFrom: "find",
        findIndexFrom: "findIndex",
        findLastFrom: "findLast",
        findLastIndexFrom: "findLastIndex",
        getOr: "get",
        includesFrom: "includes",
        indexOfFrom: "indexOf",
        invokeArgs: "invoke",
        invokeArgsMap: "invokeMap",
        lastIndexOfFrom: "lastIndexOf",
        mergeAll: "merge",
        mergeAllWith: "mergeWith",
        padChars: "pad",
        padCharsEnd: "padEnd",
        padCharsStart: "padStart",
        propertyOf: "get",
        rangeStep: "range",
        rangeStepRight: "rangeRight",
        restFrom: "rest",
        spreadFrom: "spread",
        trimChars: "trim",
        trimCharsEnd: "trimEnd",
        trimCharsStart: "trimStart",
        zipAll: "zip"
    }, t.skipFixed = {
        castArray: !0,
        flow: !0,
        flowRight: !0,
        iteratee: !0,
        mixin: !0,
        rearg: !0,
        runInContext: !0
    }, t.skipRearg = {
        add: !0,
        assign: !0,
        assignIn: !0,
        bind: !0,
        bindKey: !0,
        concat: !0,
        difference: !0,
        divide: !0,
        eq: !0,
        gt: !0,
        gte: !0,
        isEqual: !0,
        lt: !0,
        lte: !0,
        matchesProperty: !0,
        merge: !0,
        multiply: !0,
        overArgs: !0,
        partial: !0,
        partialRight: !0,
        propertyOf: !0,
        random: !0,
        range: !0,
        rangeRight: !0,
        subtract: !0,
        zip: !0,
        zipObject: !0,
        zipObjectDeep: !0
    }
}, function(e, t, n) {
    e.exports = {
        ary: n(193),
        assign: n(108),
        clone: n(223),
        curry: n(267),
        forEach: n(31),
        isArray: n(1),
        isError: n(268),
        isFunction: n(48),
        isWeakMap: n(270),
        iteratee: n(271),
        keys: n(62),
        rearg: n(292),
        toInteger: n(32),
        toPath: n(294)
    }
}, function(e, t, n) {
    function o(e, t, n) {
        return t = n ? void 0 : t, t = e && null == t ? e.length : t, r(e, a, void 0, void 0, void 0, void 0, t)
    }
    var r = n(47),
        a = 128;
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        return !(!i(e) || a(e)) && (r(e) ? h : c).test(s(e))
    }
    var r = n(48),
        a = n(197),
        i = n(6),
        s = n(93),
        u = /[\\^$.*+?()[\]{}|]/g,
        c = /^\[object .+?Constructor\]$/,
        l = Function.prototype,
        f = Object.prototype,
        d = l.toString,
        p = f.hasOwnProperty,
        h = RegExp("^" + d.call(p).replace(u, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        var t = i.call(e, u),
            n = e[u];
        try {
            e[u] = void 0;
            var o = !0
        } catch (e) {}
        var r = s.call(e);
        return o && (t ? e[u] = n : delete e[u]), r
    }
    var r = n(15),
        a = Object.prototype,
        i = a.hasOwnProperty,
        s = a.toString,
        u = r ? r.toStringTag : void 0;
    e.exports = o
}, function(e, t) {
    function n(e) {
        return r.call(e)
    }
    var o = Object.prototype,
        r = o.toString;
    e.exports = n
}, function(e, t, n) {
    function o(e) {
        return !!a && a in e
    }
    var r = n(198),
        a = function() {
            var e = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();
    e.exports = o
}, function(e, t, n) {
    var o = n(4),
        r = o["__core-js_shared__"];
    e.exports = r
}, function(e, t) {
    function n(e, t) {
        return null == e ? void 0 : e[t]
    }
    e.exports = n
}, function(e, t, n) {
    function o(e, t, n) {
        function o() {
            return (this && this !== a && this instanceof o ? u : e).apply(s ? n : this, arguments)
        }
        var s = t & i,
            u = r(e);
        return o
    }
    var r = n(28),
        a = n(4),
        i = 1;
    e.exports = o
}, function(e, t, n) {
    function o(e, t, n) {
        function o() {
            for (var a = arguments.length, d = Array(a), p = a, h = u(o); p--;) d[p] = arguments[p];
            var y = a < 3 && d[0] !== h && d[a - 1] !== h ? [] : c(d, h);
            return (a -= y.length) < n ? s(e, t, i, o.placeholder, void 0, d, y, void 0, void 0, n - a) : r(this && this !== l && this instanceof o ? f : e, this, d)
        }
        var f = a(e);
        return o
    }
    var r = n(49),
        a = n(28),
        i = n(94),
        s = n(97),
        u = n(107),
        c = n(55),
        l = n(4);
    e.exports = o
}, function(e, t) {
    function n(e, t) {
        for (var n = e.length, o = 0; n--;) e[n] === t && ++o;
        return o
    }
    e.exports = n
}, function(e, t) {
    function n() {}
    e.exports = n
}, function(e, t) {
    var n = {};
    e.exports = n
}, function(e, t, n) {
    function o(e) {
        if (u(e) && !s(e) && !(e instanceof r)) {
            if (e instanceof a) return e;
            if (f.call(e, "__wrapped__")) return c(e)
        }
        return new a(e)
    }
    var r = n(50),
        a = n(53),
        i = n(51),
        s = n(1),
        u = n(5),
        c = n(206),
        l = Object.prototype,
        f = l.hasOwnProperty;
    o.prototype = i.prototype, o.prototype.constructor = o, e.exports = o
}, function(e, t, n) {
    function o(e) {
        if (e instanceof r) return e.clone();
        var t = new a(e.__wrapped__, e.__chain__);
        return t.__actions__ = i(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
    }
    var r = n(50),
        a = n(53),
        i = n(30);
    e.exports = o
}, function(e, t) {
    function n(e) {
        var t = e.match(o);
        return t ? t[1].split(r) : []
    }
    var o = /\{\n\/\* \[wrapped with (.+)\] \*/,
        r = /,? & /;
    e.exports = n
}, function(e, t) {
    function n(e, t) {
        var n = t.length;
        if (!n) return e;
        var r = n - 1;
        return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(o, "{\n/* [wrapped with " + t + "] */\n")
    }
    var o = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
    e.exports = n
}, function(e, t, n) {
    var o = n(210),
        r = n(103),
        a = n(14),
        i = r ? function(e, t) {
            return r(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: o(t),
                writable: !0
            })
        } : a;
    e.exports = i
}, function(e, t) {
    function n(e) {
        return function() {
            return e
        }
    }
    e.exports = n
}, function(e, t, n) {
    function o(e, t) {
        return r(i, function(n) {
            var o = "_." + n[0];
            t & n[1] && !a(e, o) && e.push(o)
        }), e.sort()
    }
    var r = n(31),
        a = n(104),
        i = [
            ["ary", 128],
            ["bind", 1],
            ["bindKey", 2],
            ["curry", 8],
            ["curryRight", 16],
            ["flip", 512],
            ["partial", 32],
            ["partialRight", 64],
            ["rearg", 256]
        ];
    e.exports = o
}, function(e, t) {
    function n(e) {
        return e !== e
    }
    e.exports = n
}, function(e, t) {
    function n(e, t, n) {
        for (var o = n - 1, r = e.length; ++o < r;)
            if (e[o] === t) return o;
        return -1
    }
    e.exports = n
}, function(e, t, n) {
    function o(e, t) {
        for (var n = e.length, o = i(t.length, n), s = r(e); o--;) {
            var u = t[o];
            e[o] = a(u, n) ? s[u] : void 0
        }
        return e
    }
    var r = n(30),
        a = n(21),
        i = Math.min;
    e.exports = o
}, function(e, t, n) {
    function o(e, t, n, o) {
        function u() {
            for (var t = -1, a = arguments.length, s = -1, f = o.length, d = Array(f + a), p = this && this !== i && this instanceof u ? l : e; ++s < f;) d[s] = o[s];
            for (; a--;) d[s++] = arguments[++t];
            return r(p, c ? n : this, d)
        }
        var c = t & s,
            l = a(e);
        return u
    }
    var r = n(49),
        a = n(28),
        i = n(4),
        s = 1;
    e.exports = o
}, function(e, t, n) {
    function o(e, t) {
        var n = e[1],
            o = t[1],
            y = n | o,
            m = y < (u | c | d),
            g = o == d && n == f || o == d && n == p && e[7].length <= t[8] || o == (d | p) && t[7].length <= t[8] && n == f;
        if (!m && !g) return e;
        o & u && (e[2] = t[2], y |= n & u ? 0 : l);
        var v = t[3];
        if (v) {
            var b = e[3];
            e[3] = b ? r(b, v, t[4]) : v, e[4] = b ? i(e[3], s) : t[4]
        }
        return v = t[5], v && (b = e[5], e[5] = b ? a(b, v, t[6]) : v, e[6] = b ? i(e[5], s) : t[6]), v = t[7], v && (e[7] = v), o & d && (e[8] = null == e[8] ? t[8] : h(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = y, e
    }
    var r = n(95),
        a = n(96),
        i = n(55),
        s = "__lodash_placeholder__",
        u = 1,
        c = 2,
        l = 4,
        f = 8,
        d = 128,
        p = 256,
        h = Math.min;
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        if (!e) return 0 === e ? e : 0;
        if ((e = r(e)) === a || e === -a) {
            return (e < 0 ? -1 : 1) * i
        }
        return e === e ? e : 0
    }
    var r = n(218),
        a = 1 / 0,
        i = 1.7976931348623157e308;
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return i;
        if (r(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = r(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(s, "");
        var n = c.test(e);
        return n || l.test(e) ? f(e.slice(2), n ? 2 : 8) : u.test(e) ? i : +e
    }
    var r = n(6),
        a = n(16),
        i = NaN,
        s = /^\s+|\s+$/g,
        u = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        f = parseInt;
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        return a(e) && r(e) == i
    }
    var r = n(8),
        a = n(5),
        i = "[object Arguments]";
    e.exports = o
}, function(e, t) {
    function n() {
        return !1
    }
    e.exports = n
}, function(e, t, n) {
    function o(e) {
        return i(e) && a(e.length) && !!s[r(e)]
    }
    var r = n(8),
        a = n(60),
        i = n(5),
        s = {};
    s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1, e.exports = o
}, function(e, t, n) {
    var o = n(111),
        r = o(Object.keys, Object);
    e.exports = r
}, function(e, t, n) {
    function o(e) {
        return r(e, a)
    }
    var r = n(112),
        a = 4;
    e.exports = o
}, function(e, t) {
    function n() {
        this.__data__ = [], this.size = 0
    }
    e.exports = n
}, function(e, t, n) {
    function o(e) {
        var t = this.__data__,
            n = r(t, e);
        return !(n < 0) && (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, !0)
    }
    var r = n(38),
        a = Array.prototype,
        i = a.splice;
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        var t = this.__data__,
            n = r(t, e);
        return n < 0 ? void 0 : t[n][1]
    }
    var r = n(38);
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        return r(this.__data__, e) > -1
    }
    var r = n(38);
    e.exports = o
}, function(e, t, n) {
    function o(e, t) {
        var n = this.__data__,
            o = r(n, e);
        return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this
    }
    var r = n(38);
    e.exports = o
}, function(e, t, n) {
    function o() {
        this.__data__ = new r, this.size = 0
    }
    var r = n(37);
    e.exports = o
}, function(e, t) {
    function n(e) {
        var t = this.__data__,
            n = t.delete(e);
        return this.size = t.size, n
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        return this.__data__.get(e)
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        return this.__data__.has(e)
    }
    e.exports = n
}, function(e, t, n) {
    function o(e, t) {
        var n = this.__data__;
        if (n instanceof r) {
            var o = n.__data__;
            if (!a || o.length < s - 1) return o.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new i(o)
        }
        return n.set(e, t), this.size = n.size, this
    }
    var r = n(37),
        a = n(64),
        i = n(65),
        s = 200;
    e.exports = o
}, function(e, t, n) {
    function o() {
        this.size = 0, this.__data__ = {
            hash: new r,
            map: new(i || a),
            string: new r
        }
    }
    var r = n(235),
        a = n(37),
        i = n(64);
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var o = e[t];
            this.set(o[0], o[1])
        }
    }
    var r = n(236),
        a = n(237),
        i = n(238),
        s = n(239),
        u = n(240);
    o.prototype.clear = r, o.prototype.delete = a, o.prototype.get = i, o.prototype.has = s, o.prototype.set = u, e.exports = o
}, function(e, t, n) {
    function o() {
        this.__data__ = r ? r(null) : {}, this.size = 0
    }
    var r = n(39);
    e.exports = o
}, function(e, t) {
    function n(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
    e.exports = n
}, function(e, t, n) {
    function o(e) {
        var t = this.__data__;
        if (r) {
            var n = t[e];
            return n === a ? void 0 : n
        }
        return s.call(t, e) ? t[e] : void 0
    }
    var r = n(39),
        a = "__lodash_hash_undefined__",
        i = Object.prototype,
        s = i.hasOwnProperty;
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        var t = this.__data__;
        return r ? void 0 !== t[e] : i.call(t, e)
    }
    var r = n(39),
        a = Object.prototype,
        i = a.hasOwnProperty;
    e.exports = o
}, function(e, t, n) {
    function o(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? a : t, this
    }
    var r = n(39),
        a = "__lodash_hash_undefined__";
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        var t = r(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
    var r = n(40);
    e.exports = o
}, function(e, t) {
    function n(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }
    e.exports = n
}, function(e, t, n) {
    function o(e) {
        return r(this, e).get(e)
    }
    var r = n(40);
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        return r(this, e).has(e)
    }
    var r = n(40);
    e.exports = o
}, function(e, t, n) {
    function o(e, t) {
        var n = r(this, e),
            o = n.size;
        return n.set(e, t), this.size += n.size == o ? 0 : 1, this
    }
    var r = n(40);
    e.exports = o
}, function(e, t, n) {
    function o(e, t) {
        return e && r(t, a(t), e)
    }
    var r = n(33),
        a = n(113);
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        if (!r(e)) return i(e);
        var t = a(e),
            n = [];
        for (var o in e)("constructor" != o || !t && u.call(e, o)) && n.push(o);
        return n
    }
    var r = n(6),
        a = n(36),
        i = n(248),
        s = Object.prototype,
        u = s.hasOwnProperty;
    e.exports = o
}, function(e, t) {
    function n(e) {
        var t = [];
        if (null != e)
            for (var n in Object(e)) t.push(n);
        return t
    }
    e.exports = n
}, function(e, t, n) {
    (function(e) {
        function o(e, t) {
            if (t) return e.slice();
            var n = e.length,
                o = c ? c(n) : new e.constructor(n);
            return e.copy(o), o
        }
        var r = n(4),
            a = "object" == typeof t && t && !t.nodeType && t,
            i = a && "object" == typeof e && e && !e.nodeType && e,
            s = i && i.exports === a,
            u = s ? r.Buffer : void 0,
            c = u ? u.allocUnsafe : void 0;
        e.exports = o
    }).call(t, n(58)(e))
}, function(e, t, n) {
    function o(e, t) {
        return r(e, a(e), t)
    }
    var r = n(33),
        a = n(66);
    e.exports = o
}, function(e, t, n) {
    function o(e, t) {
        return r(e, a(e), t)
    }
    var r = n(33),
        a = n(115);
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        return r(e, i, a)
    }
    var r = n(117),
        a = n(115),
        i = n(113);
    e.exports = o
}, function(e, t, n) {
    var o = n(9),
        r = n(4),
        a = o(r, "DataView");
    e.exports = a
}, function(e, t, n) {
    var o = n(9),
        r = n(4),
        a = o(r, "Promise");
    e.exports = a
}, function(e, t, n) {
    var o = n(9),
        r = n(4),
        a = o(r, "Set");
    e.exports = a
}, function(e, t) {
    function n(e) {
        var t = e.length,
            n = new e.constructor(t);
        return t && "string" == typeof e[0] && r.call(e, "index") && (n.index = e.index, n.input = e.input), n
    }
    var o = Object.prototype,
        r = o.hasOwnProperty;
    e.exports = n
}, function(e, t, n) {
    function o(e, t, n) {
        var o = e.constructor;
        switch (t) {
            case g:
                return r(e);
            case c:
            case l:
                return new o(+e);
            case v:
                return a(e, n);
            case b:
            case w:
            case x:
            case k:
            case S:
            case _:
            case C:
            case E:
            case R:
                return u(e, n);
            case f:
                return new o;
            case d:
            case y:
                return new o(e);
            case p:
                return i(e);
            case h:
                return new o;
            case m:
                return s(e)
        }
    }
    var r = n(70),
        a = n(258),
        i = n(259),
        s = n(260),
        u = n(261),
        c = "[object Boolean]",
        l = "[object Date]",
        f = "[object Map]",
        d = "[object Number]",
        p = "[object RegExp]",
        h = "[object Set]",
        y = "[object String]",
        m = "[object Symbol]",
        g = "[object ArrayBuffer]",
        v = "[object DataView]",
        b = "[object Float32Array]",
        w = "[object Float64Array]",
        x = "[object Int8Array]",
        k = "[object Int16Array]",
        S = "[object Int32Array]",
        _ = "[object Uint8Array]",
        C = "[object Uint8ClampedArray]",
        E = "[object Uint16Array]",
        R = "[object Uint32Array]";
    e.exports = o
}, function(e, t, n) {
    function o(e, t) {
        var n = t ? r(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength)
    }
    var r = n(70);
    e.exports = o
}, function(e, t) {
    function n(e) {
        var t = new e.constructor(e.source, o.exec(e));
        return t.lastIndex = e.lastIndex, t
    }
    var o = /\w*$/;
    e.exports = n
}, function(e, t, n) {
    function o(e) {
        return i ? Object(i.call(e)) : {}
    }
    var r = n(15),
        a = r ? r.prototype : void 0,
        i = a ? a.valueOf : void 0;
    e.exports = o
}, function(e, t, n) {
    function o(e, t) {
        var n = t ? r(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length)
    }
    var r = n(70);
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        return "function" != typeof e.constructor || i(e) ? {} : r(a(e))
    }
    var r = n(29),
        a = n(69),
        i = n(36);
    e.exports = o
}, function(e, t, n) {
    var o = n(264),
        r = n(23),
        a = n(61),
        i = a && a.isMap,
        s = i ? r(i) : o;
    e.exports = s
}, function(e, t, n) {
    function o(e) {
        return a(e) && r(e) == i
    }
    var r = n(17),
        a = n(5),
        i = "[object Map]";
    e.exports = o
}, function(e, t, n) {
    var o = n(266),
        r = n(23),
        a = n(61),
        i = a && a.isSet,
        s = i ? r(i) : o;
    e.exports = s
}, function(e, t, n) {
    function o(e) {
        return a(e) && r(e) == i
    }
    var r = n(17),
        a = n(5),
        i = "[object Set]";
    e.exports = o
}, function(e, t, n) {
    function o(e, t, n) {
        t = n ? void 0 : t;
        var i = r(e, a, void 0, void 0, void 0, void 0, void 0, t);
        return i.placeholder = o.placeholder, i
    }
    var r = n(47),
        a = 8;
    o.placeholder = {}, e.exports = o
}, function(e, t, n) {
    function o(e) {
        if (!a(e)) return !1;
        var t = r(e);
        return t == u || t == s || "string" == typeof e.message && "string" == typeof e.name && !i(e)
    }
    var r = n(8),
        a = n(5),
        i = n(269),
        s = "[object DOMException]",
        u = "[object Error]";
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        if (!i(e) || r(e) != s) return !1;
        var t = a(e);
        if (null === t) return !0;
        var n = f.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && l.call(n) == d
    }
    var r = n(8),
        a = n(69),
        i = n(5),
        s = "[object Object]",
        u = Function.prototype,
        c = Object.prototype,
        l = u.toString,
        f = c.hasOwnProperty,
        d = l.call(Object);
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        return a(e) && r(e) == i
    }
    var r = n(17),
        a = n(5),
        i = "[object WeakMap]";
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        return a("function" == typeof e ? e : r(e, i))
    }
    var r = n(112),
        a = n(11),
        i = 1;
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        var t = a(e);
        return 1 == t.length && t[0][2] ? i(t[0][0], t[0][1]) : function(n) {
            return n === e || r(n, e, t)
        }
    }
    var r = n(273),
        a = n(282),
        i = n(124);
    e.exports = o
}, function(e, t, n) {
    function o(e, t, n, o) {
        var u = n.length,
            c = u,
            l = !o;
        if (null == e) return !c;
        for (e = Object(e); u--;) {
            var f = n[u];
            if (l && f[2] ? f[1] !== e[f[0]] : !(f[0] in e)) return !1
        }
        for (; ++u < c;) {
            f = n[u];
            var d = f[0],
                p = e[d],
                h = f[1];
            if (l && f[2]) {
                if (void 0 === p && !(d in e)) return !1
            } else {
                var y = new r;
                if (o) var m = o(p, h, d, e, t, y);
                if (!(void 0 === m ? a(h, p, i | s, o, y) : m)) return !1
            }
        }
        return !0
    }
    var r = n(63),
        a = n(119),
        i = 1,
        s = 2;
    e.exports = o
}, function(e, t, n) {
    function o(e, t, n, o, m, v) {
        var b = c(e),
            w = c(t),
            x = b ? h : u(e),
            k = w ? h : u(t);
        x = x == p ? y : x, k = k == p ? y : k;
        var S = x == y,
            _ = k == y,
            C = x == k;
        if (C && l(e)) {
            if (!l(t)) return !1;
            b = !0, S = !1
        }
        if (C && !S) return v || (v = new r), b || f(e) ? a(e, t, n, o, m, v) : i(e, t, x, n, o, m, v);
        if (!(n & d)) {
            var E = S && g.call(e, "__wrapped__"),
                R = _ && g.call(t, "__wrapped__");
            if (E || R) {
                var T = E ? e.value() : e,
                    O = R ? t.value() : t;
                return v || (v = new r), m(T, O, n, o, v)
            }
        }
        return !!C && (v || (v = new r), s(e, t, n, o, m, v))
    }
    var r = n(63),
        a = n(120),
        i = n(278),
        s = n(281),
        u = n(17),
        c = n(1),
        l = n(35),
        f = n(59),
        d = 1,
        p = "[object Arguments]",
        h = "[object Array]",
        y = "[object Object]",
        m = Object.prototype,
        g = m.hasOwnProperty;
    e.exports = o
}, function(e, t) {
    function n(e) {
        return this.__data__.set(e, o), this
    }
    var o = "__lodash_hash_undefined__";
    e.exports = n
}, function(e, t) {
    function n(e) {
        return this.__data__.has(e)
    }
    e.exports = n
}, function(e, t) {
    function n(e, t) {
        for (var n = -1, o = null == e ? 0 : e.length; ++n < o;)
            if (t(e[n], n, e)) return !0;
        return !1
    }
    e.exports = n
}, function(e, t, n) {
    function o(e, t, n, o, r, S, C) {
        switch (n) {
            case k:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                e = e.buffer, t = t.buffer;
            case x:
                return !(e.byteLength != t.byteLength || !S(new a(e), new a(t)));
            case d:
            case p:
            case m:
                return i(+e, +t);
            case h:
                return e.name == t.name && e.message == t.message;
            case g:
            case b:
                return e == t + "";
            case y:
                var E = u;
            case v:
                var R = o & l;
                if (E || (E = c), e.size != t.size && !R) return !1;
                var T = C.get(e);
                if (T) return T == t;
                o |= f, C.set(e, t);
                var O = s(E(e), E(t), o, r, S, C);
                return C.delete(e), O;
            case w:
                if (_) return _.call(e) == _.call(t)
        }
        return !1
    }
    var r = n(15),
        a = n(118),
        i = n(22),
        s = n(120),
        u = n(279),
        c = n(280),
        l = 1,
        f = 2,
        d = "[object Boolean]",
        p = "[object Date]",
        h = "[object Error]",
        y = "[object Map]",
        m = "[object Number]",
        g = "[object RegExp]",
        v = "[object Set]",
        b = "[object String]",
        w = "[object Symbol]",
        x = "[object ArrayBuffer]",
        k = "[object DataView]",
        S = r ? r.prototype : void 0,
        _ = S ? S.valueOf : void 0;
    e.exports = o
}, function(e, t) {
    function n(e) {
        var t = -1,
            n = Array(e.size);
        return e.forEach(function(e, o) {
            n[++t] = [o, e]
        }), n
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        var t = -1,
            n = Array(e.size);
        return e.forEach(function(e) {
            n[++t] = e
        }), n
    }
    e.exports = n
}, function(e, t, n) {
    function o(e, t, n, o, i, u) {
        var c = n & a,
            l = r(e),
            f = l.length;
        if (f != r(t).length && !c) return !1;
        for (var d = f; d--;) {
            var p = l[d];
            if (!(c ? p in t : s.call(t, p))) return !1
        }
        var h = u.get(e);
        if (h && u.get(t)) return h == t;
        var y = !0;
        u.set(e, t), u.set(t, e);
        for (var m = c; ++d < f;) {
            p = l[d];
            var g = e[p],
                v = t[p];
            if (o) var b = c ? o(v, g, p, t, e, u) : o(g, v, p, e, t, u);
            if (!(void 0 === b ? g === v || i(g, v, n, o, u) : b)) {
                y = !1;
                break
            }
            m || (m = "constructor" == p)
        }
        if (y && !m) {
            var w = e.constructor,
                x = t.constructor;
            w != x && "constructor" in e && "constructor" in t && !("function" == typeof w && w instanceof w && "function" == typeof x && x instanceof x) && (y = !1)
        }
        return u.delete(e), u.delete(t), y
    }
    var r = n(116),
        a = 1,
        i = Object.prototype,
        s = i.hasOwnProperty;
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        for (var t = a(e), n = t.length; n--;) {
            var o = t[n],
                i = e[o];
            t[n] = [o, i, r(i)]
        }
        return t
    }
    var r = n(123),
        a = n(10);
    e.exports = o
}, function(e, t, n) {
    function o(e, t) {
        return s(e) && u(t) ? c(l(e), t) : function(n) {
            var o = a(n, e);
            return void 0 === o && o === t ? i(n, e) : r(t, o, f | d)
        }
    }
    var r = n(119),
        a = n(125),
        i = n(287),
        s = n(72),
        u = n(123),
        c = n(124),
        l = n(18),
        f = 1,
        d = 2;
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        var t = r(e, function(e) {
                return n.size === a && n.clear(), e
            }),
            n = t.cache;
        return t
    }
    var r = n(285),
        a = 500;
    e.exports = o
}, function(e, t, n) {
    function o(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(a);
        var n = function() {
            var o = arguments,
                r = t ? t.apply(this, o) : o[0],
                a = n.cache;
            if (a.has(r)) return a.get(r);
            var i = e.apply(this, o);
            return n.cache = a.set(r, i) || a, i
        };
        return n.cache = new(o.Cache || r), n
    }
    var r = n(65),
        a = "Expected a function";
    o.Cache = r, e.exports = o
}, function(e, t, n) {
    function o(e) {
        if ("string" == typeof e) return e;
        if (i(e)) return a(e, o) + "";
        if (s(e)) return l ? l.call(e) : "";
        var t = e + "";
        return "0" == t && 1 / e == -u ? "-0" : t
    }
    var r = n(15),
        a = n(12),
        i = n(1),
        s = n(16),
        u = 1 / 0,
        c = r ? r.prototype : void 0,
        l = c ? c.toString : void 0;
    e.exports = o
}, function(e, t, n) {
    function o(e, t) {
        return null != e && a(e, t, r)
    }
    var r = n(288),
        a = n(289);
    e.exports = o
}, function(e, t) {
    function n(e, t) {
        return null != e && t in Object(e)
    }
    e.exports = n
}, function(e, t, n) {
    function o(e, t, n) {
        t = r(t, e);
        for (var o = -1, l = t.length, f = !1; ++o < l;) {
            var d = c(t[o]);
            if (!(f = null != e && n(e, d))) break;
            e = e[d]
        }
        return f || ++o != l ? f : !!(l = null == e ? 0 : e.length) && u(l) && s(d, l) && (i(e) || a(e))
    }
    var r = n(71),
        a = n(34),
        i = n(1),
        s = n(21),
        u = n(60),
        c = n(18);
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        return i(e) ? r(s(e)) : a(e)
    }
    var r = n(129),
        a = n(291),
        i = n(72),
        s = n(18);
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        return function(t) {
            return r(t, e)
        }
    }
    var r = n(126);
    e.exports = o
}, function(e, t, n) {
    var o = n(47),
        r = n(130),
        a = r(function(e, t) {
            return o(e, 256, void 0, void 0, void 0, t)
        });
    e.exports = a
}, function(e, t, n) {
    function o(e) {
        return i(e) || a(e) || !!(s && e && e[s])
    }
    var r = n(15),
        a = n(34),
        i = n(1),
        s = r ? r.isConcatSpreadable : void 0;
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        return i(e) ? r(e, c) : s(e) ? [e] : a(u(l(e)))
    }
    var r = n(12),
        a = n(30),
        i = n(1),
        s = n(16),
        u = n(127),
        c = n(18),
        l = n(128);
    e.exports = o
}, function(e, t, n) {
    function o(e, t, n, o) {
        e = a(e) ? e : u(e), n = n && !o ? s(n) : 0;
        var l = e.length;
        return n < 0 && (n = c(l + n, 0)), i(e) ? n <= l && e.indexOf(t, n) > -1 : !!l && r(e, t, n) > -1
    }
    var r = n(105),
        a = n(7),
        i = n(296),
        s = n(32),
        u = n(133),
        c = Math.max;
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        return "string" == typeof e || !a(e) && i(e) && r(e) == s
    }
    var r = n(8),
        a = n(1),
        i = n(5),
        s = "[object String]";
    e.exports = o
}, function(e, t, n) {
    function o(e, t) {
        return r(t, function(t) {
            return e[t]
        })
    }
    var r = n(12);
    e.exports = o
}, function(e, t, n) {
    var o = n(3),
        r = o("reject", n(299));
    r.placeholder = n(2), e.exports = r
}, function(e, t, n) {
    function o(e, t) {
        return (s(e) ? r : a)(e, u(i(t, 3)))
    }
    var r = n(67),
        a = n(300),
        i = n(11),
        s = n(1),
        u = n(304);
    e.exports = o
}, function(e, t, n) {
    function o(e, t) {
        var n = [];
        return r(e, function(e, o, r) {
            t(e, o, r) && n.push(e)
        }), n
    }
    var r = n(41);
    e.exports = o
}, function(e, t, n) {
    var o = n(302),
        r = o();
    e.exports = r
}, function(e, t) {
    function n(e) {
        return function(t, n, o) {
            for (var r = -1, a = Object(t), i = o(t), s = i.length; s--;) {
                var u = i[e ? s : ++r];
                if (!1 === n(a[u], u, a)) break
            }
            return t
        }
    }
    e.exports = n
}, function(e, t, n) {
    function o(e, t) {
        return function(n, o) {
            if (null == n) return n;
            if (!r(n)) return e(n, o);
            for (var a = n.length, i = t ? a : -1, s = Object(n);
                (t ? i-- : ++i < a) && !1 !== o(s[i], i, s););
            return n
        }
    }
    var r = n(7);
    e.exports = o
}, function(e, t) {
    function n(e) {
        if ("function" != typeof e) throw new TypeError(o);
        return function() {
            var t = arguments;
            switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2])
            }
            return !e.apply(this, t)
        }
    }
    var o = "Expected a function";
    e.exports = n
}, function(e, t, n) {
    var o = n(3),
        r = o("set", n(306));
    r.placeholder = n(2), e.exports = r
}, function(e, t, n) {
    function o(e, t, n) {
        return null == e ? e : r(e, t, n)
    }
    var r = n(307);
    e.exports = o
}, function(e, t, n) {
    function o(e, t, n, o) {
        if (!s(e)) return e;
        t = a(t, e);
        for (var c = -1, l = t.length, f = l - 1, d = e; null != d && ++c < l;) {
            var p = u(t[c]),
                h = n;
            if (c != f) {
                var y = d[p];
                h = o ? o(y, p, d) : void 0, void 0 === h && (h = s(y) ? y : i(t[c + 1]) ? [] : {})
            }
            r(d, p, h), d = d[p]
        }
        return e
    }
    var r = n(56),
        a = n(71),
        i = n(21),
        s = n(6),
        u = n(18);
    e.exports = o
}, function(e, t, n) {
    var o = n(3),
        r = o("flow", n(309));
    r.placeholder = n(2), e.exports = r
}, function(e, t, n) {
    var o = n(310),
        r = o();
    e.exports = r
}, function(e, t, n) {
    function o(e) {
        return a(function(t) {
            var n = t.length,
                o = n,
                a = r.prototype.thru;
            for (e && t.reverse(); o--;) {
                var y = t[o];
                if ("function" != typeof y) throw new TypeError(l);
                if (a && !m && "wrapper" == s(y)) var m = new r([], !0)
            }
            for (o = m ? o : n; ++o < n;) {
                y = t[o];
                var g = s(y),
                    v = "wrapper" == g ? i(y) : void 0;
                m = v && c(v[0]) && v[1] == (p | f | d | h) && !v[4].length && 1 == v[9] ? m[s(v[0])].apply(m, v[3]) : 1 == y.length && c(y) ? m[g]() : m.thru(y)
            }
            return function() {
                var e = arguments,
                    o = e[0];
                if (m && 1 == e.length && u(o)) return m.plant(o).value();
                for (var r = 0, a = n ? t[r].apply(this, e) : o; ++r < n;) a = t[r].call(this, a);
                return a
            }
        })
    }
    var r = n(53),
        a = n(130),
        i = n(52),
        s = n(99),
        u = n(1),
        c = n(98),
        l = "Expected a function",
        f = 8,
        d = 32,
        p = 128,
        h = 256;
    e.exports = o
}, function(e, t, n) {
    var o = n(3),
        r = o("find", n(312));
    r.placeholder = n(2), e.exports = r
}, function(e, t, n) {
    var o = n(313),
        r = n(314),
        a = o(r);
    e.exports = a
}, function(e, t, n) {
    function o(e) {
        return function(t, n, o) {
            var s = Object(t);
            if (!a(t)) {
                var u = r(n, 3);
                t = i(t), n = function(e) {
                    return u(s[e], e, s)
                }
            }
            var c = e(t, n, o);
            return c > -1 ? s[u ? t[c] : c] : void 0
        }
    }
    var r = n(11),
        a = n(7),
        i = n(10);
    e.exports = o
}, function(e, t, n) {
    function o(e, t, n) {
        var o = null == e ? 0 : e.length;
        if (!o) return -1;
        var u = null == n ? 0 : i(n);
        return u < 0 && (u = s(o + u, 0)), r(e, a(t, 3), u)
    }
    var r = n(106),
        a = n(11),
        i = n(32),
        s = Math.max;
    e.exports = o
}, function(e, t, n) {
    function o(e) {
        if (null == e) return !0;
        if (u(e) && (s(e) || "string" == typeof e || "function" == typeof e.splice || c(e) || f(e) || i(e))) return !e.length;
        var t = a(e);
        if (t == d || t == p) return !e.size;
        if (l(e)) return !r(e).length;
        for (var n in e)
            if (y.call(e, n)) return !1;
        return !0
    }
    var r = n(62),
        a = n(17),
        i = n(34),
        s = n(1),
        u = n(7),
        c = n(35),
        l = n(36),
        f = n(59),
        d = "[object Map]",
        p = "[object Set]",
        h = Object.prototype,
        y = h.hasOwnProperty;
    e.exports = o
}, function(e, t, n) {
    var o = n(3),
        r = o("difference", n(317));
    r.placeholder = n(2), e.exports = r
}, function(e, t, n) {
    var o = n(318),
        r = n(73),
        a = n(75),
        i = n(137),
        s = a(function(e, t) {
            return i(e) ? o(e, r(t, 1, i, !0)) : []
        });
    e.exports = s
}, function(e, t, n) {
    function o(e, t, n, o) {
        var f = -1,
            d = a,
            p = !0,
            h = e.length,
            y = [],
            m = t.length;
        if (!h) return y;
        n && (t = s(t, u(n))), o ? (d = i, p = !1) : t.length >= l && (d = c, p = !1, t = new r(t));
        e: for (; ++f < h;) {
            var g = e[f],
                v = null == n ? g : n(g);
            if (g = o || 0 !== g ? g : 0, p && v === v) {
                for (var b = m; b--;)
                    if (t[b] === v) continue e;
                y.push(g)
            } else d(t, v, o) || y.push(g)
        }
        return y
    }
    var r = n(121),
        a = n(104),
        i = n(319),
        s = n(12),
        u = n(23),
        c = n(122),
        l = 200;
    e.exports = o
}, function(e, t) {
    function n(e, t, n) {
        for (var o = -1, r = null == e ? 0 : e.length; ++o < r;)
            if (n(t, e[o])) return !0;
        return !1
    }
    e.exports = n
}, function(e, t, n) {
    var o = n(3),
        r = o("values", n(133), n(74));
    r.placeholder = n(2), e.exports = r
}, function(e, t, n) {
    var o = n(3),
        r = o("forEach", n(322));
    r.placeholder = n(2), e.exports = r
}, function(e, t, n) {
    function o(e, t) {
        return (s(e) ? r : a)(e, i(t))
    }
    var r = n(31),
        a = n(41),
        i = n(139),
        s = n(1);
    e.exports = o
}, function(e, t, n) {
    var o = n(3),
        r = o("eq", n(22));
    r.placeholder = n(2), e.exports = r
}, function(e, t, n) {
    var o = n(3),
        r = o("sortBy", n(325));
    r.placeholder = n(2), e.exports = r
}, function(e, t, n) {
    var o = n(73),
        r = n(326),
        a = n(75),
        i = n(330),
        s = a(function(e, t) {
            if (null == e) return [];
            var n = t.length;
            return n > 1 && i(e, t[0], t[1]) ? t = [] : n > 2 && i(t[0], t[1], t[2]) && (t = [t[0]]), r(e, o(t, 1), [])
        });
    e.exports = s
}, function(e, t, n) {
    function o(e, t, n) {
        var o = -1;
        t = r(t.length ? t : [l], u(a));
        var f = i(e, function(e, n, a) {
            return {
                criteria: r(t, function(t) {
                    return t(e)
                }),
                index: ++o,
                value: e
            }
        });
        return s(f, function(e, t) {
            return c(e, t, n)
        })
    }
    var r = n(12),
        a = n(11),
        i = n(140),
        s = n(327),
        u = n(23),
        c = n(328),
        l = n(14);
    e.exports = o
}, function(e, t) {
    function n(e, t) {
        var n = e.length;
        for (e.sort(t); n--;) e[n] = e[n].value;
        return e
    }
    e.exports = n
}, function(e, t, n) {
    function o(e, t, n) {
        for (var o = -1, a = e.criteria, i = t.criteria, s = a.length, u = n.length; ++o < s;) {
            var c = r(a[o], i[o]);
            if (c) {
                if (o >= u) return c;
                return c * ("desc" == n[o] ? -1 : 1)
            }
        }
        return e.index - t.index
    }
    var r = n(329);
    e.exports = o
}, function(e, t, n) {
    function o(e, t) {
        if (e !== t) {
            var n = void 0 !== e,
                o = null === e,
                a = e === e,
                i = r(e),
                s = void 0 !== t,
                u = null === t,
                c = t === t,
                l = r(t);
            if (!u && !l && !i && e > t || i && s && c && !u && !l || o && s && c || !n && c || !a) return 1;
            if (!o && !i && !l && e < t || l && n && a && !o && !i || u && n && a || !s && a || !c) return -1
        }
        return 0
    }
    var r = n(16);
    e.exports = o
}, function(e, t, n) {
    function o(e, t, n) {
        if (!s(n)) return !1;
        var o = typeof t;
        return !!("number" == o ? a(n) && i(t, n.length) : "string" == o && t in n) && r(n[t], e)
    }
    var r = n(22),
        a = n(7),
        i = n(21),
        s = n(6);
    e.exports = o
}, function(e, t, n) {
    var o = n(3),
        r = o("keyBy", n(332));
    r.placeholder = n(2), e.exports = r
}, function(e, t, n) {
    var o = n(57),
        r = n(333),
        a = r(function(e, t, n) {
            o(e, n, t)
        });
    e.exports = a
}, function(e, t, n) {
    function o(e, t) {
        return function(n, o) {
            var u = s(n) ? r : a,
                c = t ? t() : {};
            return u(n, e, i(o, 2), c)
        }
    }
    var r = n(334),
        a = n(335),
        i = n(11),
        s = n(1);
    e.exports = o
}, function(e, t) {
    function n(e, t, n, o) {
        for (var r = -1, a = null == e ? 0 : e.length; ++r < a;) {
            var i = e[r];
            t(o, i, n(i), e)
        }
        return o
    }
    e.exports = n
}, function(e, t, n) {
    function o(e, t, n, o) {
        return r(e, function(e, r, a) {
            t(o, e, n(e), a)
        }), o
    }
    var r = n(41);
    e.exports = o
}, function(e, t, n) {
    var o = n(3),
        r = o("flatten", n(131), n(74));
    r.placeholder = n(2), e.exports = r
}, function(e, t, n) {
    var o = n(3),
        r = o("zip", n(338));
    r.placeholder = n(2), e.exports = r
}, function(e, t, n) {
    var o = n(75),
        r = n(339),
        a = o(r);
    e.exports = a
}, function(e, t, n) {
    function o(e) {
        if (!e || !e.length) return [];
        var t = 0;
        return e = r(e, function(e) {
            if (u(e)) return t = c(e.length, t), !0
        }), s(t, function(t) {
            return a(e, i(t))
        })
    }
    var r = n(67),
        a = n(12),
        i = n(129),
        s = n(110),
        u = n(137),
        c = Math.max;
    e.exports = o
}, function(e, t, n) {
    function o(e, t) {
        return (s(e) ? r : i)(e, a(t, 3))
    }
    var r = n(12),
        a = n(11),
        i = n(140),
        s = n(1);
    e.exports = o
}, function(e, t) {
    e.exports = {
        url: "http://tripsit.me/combo_beta.json",
        version: "3.0",
        tableOrder: [
            ["LSD", "Cogumelos", "DMT", "Mescalina", "DOx", "NBOMes", "2C-x", "2C-T-x", "5-MeO-xxT", "Cannabis"],
            ["Ketamina", "MXE", "DXM", "Nitrous"],
            ["Amphetamines", "MDMA", "Cocaine", "Caffeine"],
            ["Alcool", "GHB/GBL", "Opioids", "Tramadol", "Benzodiazepines"],
            ["MAOIs", "SSRIs"]
        ],
        groupNames: ["psychedelic", "dissociative", "stimulant", "depressant", "antidepressant"],
        rewriteInteraction: {
            "serotonin syndrome": "dangerous"
        },
        interactionClass: {
            "baixo risco e sinergia": ["synergy", "fa-arrow-up"],
            "Baixo risco sem sinergia": ["safe", "fa-dot-circle-o"],
            "low risk & decrease": ["decrease", "fa-arrow-down"],
            caution: ["caution", "fa-warning"],
            unsafe: ["unsafe", "fa-heartbeat"],
            dangerous: ["dangerous", "fa-times"],
            "serotonin syndrome": ["serotoninsyndrome", "fa-flash"],
            fallback: ["unknown", "fa-question"]
        }
    }
}, function(e, t, n) {
    function o(e, t) {
        return e && r(e, a(t))
    }
    var r = n(134),
        a = n(139);
    e.exports = o
}, function(e, t) {
    e.exports = {
        lsd: {
            cogumelos: {
                status: "Baixo risco e Sinergia"
            },
            dmt: {
                status: "Baixo risco e Sinergia"
            },
            mescalina: {
                status: "Baixo risco e Sinergia"
            },
            dox: {
                status: "Baixo risco e Sinergia"
            },
            nbomes: {
                status: "Baixo risco e Sinergia"
            },
            "2c-x": {
                status: "Baixo risco e Sinergia"
            },
            "2c-t-x": {
                status: "Baixo risco e Sinergia"
            },
            amt: {
                status: "Baixo risco e Sinergia"
            },
            "5-meo-xxt": {
                status: "Baixo risco e Sinergia"
            },
            cannabis: {
                status: "Caution",
                note: "Cannabis has an unexpectedly strong and somewhat unpredictable synergy with psychedelics."
            },
            ketamina: {
                status: "Baixo risco e Sinergia"
            },
            mxe: {
                status: "Baixo risco e Sinergia"
            },
            dxm: {
                status: "Baixo risco e Sinergia"
            },
            pcp: {
                status: "Baixo risco e Sinergia"
            },
            nitrous: {
                status: "Baixo risco e Sinergia"
            },
            amphetamines: {
                status: "Caution",
                note: "Stimulants increase anxiety levels and the risk of thought loops which can lead to negative experiences"
            },
            mdma: {
                status: "Baixo risco e Sinergia"
            },
            cocaine: {
                status: "Caution",
                note: "Stimulants increase anxiety levels and the risk of thought loops which can lead to negative experiences"
            },
            caffeine: {
                status: "Baixo risco sem sinergia"
            },
            alcool: {
                status: "Low Risk & Decrease"
            },
            "ghb/gbl": {
                status: "Low Risk & Decrease"
            },
            opioids: {
                status: "Baixo risco sem sinergia"
            },
            tramadol: {
                status: "Unsafe",
                note: "Tramadol is well known to lower seizure threshold and psychedelics also cause occasional seizures."
            },
            benzodiazepines: {
                status: "Low Risk & Decrease"
            },
            maois: {
                status: "Low Risk & Decrease"
            },
            ssris: {
                status: "Low Risk & Decrease"
            }
        },
        cogumelos: {
            lsd: {
                status: "Baixo risco e Sinergia"
            },
            dmt: {
                status: "Baixo risco e Sinergia"
            },
            mescalina: {
                status: "Baixo risco e Sinergia"
            },
            dox: {
                status: "Baixo risco e Sinergia"
            },
            nbomes: {
                status: "Baixo risco e Sinergia"
            },
            "2c-x": {
                status: "Baixo risco e Sinergia"
            },
            "2c-t-x": {
                status: "Baixo risco e Sinergia"
            },
            amt: {
                status: "Baixo risco e Sinergia"
            },
            "5-meo-xxt": {
                status: "Baixo risco e Sinergia"
            },
            cannabis: {
                status: "Caution",
                note: "Cannabis has an unexpectedly strong and somewhat unpredictable synergy with psychedelics."
            },
            ketamina: {
                status: "Baixo risco e Sinergia"
            },
            mxe: {
                status: "Baixo risco e Sinergia"
            },
            dxm: {
                status: "Baixo risco e Sinergia"
            },
            pcp: {
                status: "Baixo risco e Sinergia"
            },
            nitrous: {
                status: "Baixo risco e Sinergia"
            },
            amphetamines: {
                status: "Caution",
                note: "Stimulants increase anxiety levels and the risk of thought loops which can lead to negative experiences"
            },
            mdma: {
                status: "Baixo risco e Sinergia"
            },
            cocaine: {
                status: "Caution",
                note: "Stimulants increase anxiety levels and the risk of thought loops which can lead to negative experiences"
            },
            caffeine: {
                status: "Baixo risco sem sinergia"
            },
            alcool: {
                status: "Low Risk & Decrease"
            },
            "ghb/gbl": {
                status: "Low Risk & Decrease"
            },
            opioids: {
                status: "Baixo risco sem sinergia"
            },
            tramadol: {
                status: "Unsafe",
                note: "Tramadol is well known to lower seizure threshold and psychedelics also cause occasional seizures."
            },
            benzodiazepines: {
                status: "Low Risk & Decrease"
            },
            maois: {
                status: "Baixo risco e Sinergia"
            },
            ssris: {
                status: "Low Risk & Decrease"
            }
        },
        dmt: {
            cogumelos: {
                status: "Baixo risco e Sinergia"
            },
            lsd: {
                status: "Baixo risco e Sinergia"
            },
            mescalina: {
                status: "Baixo risco e Sinergia"
            },
            dox: {
                status: "Baixo risco e Sinergia"
            },
            nbomes: {
                status: "Baixo risco e Sinergia"
            },
            "2c-x": {
                status: "Baixo risco e Sinergia"
            },
            "2c-t-x": {
                status: "Baixo risco e Sinergia"
            },
            amt: {
                status: "Baixo risco e Sinergia"
            },
            "5-meo-xxt": {
                status: "Baixo risco e Sinergia"
            },
            cannabis: {
                status: "Caution",
                note: "Cannabis has an unexpectedly strong and somewhat unpredictable synergy with psychedelics."
            },
            ketamina: {
                status: "Baixo risco e Sinergia"
            },
            mxe: {
                status: "Baixo risco e Sinergia"
            },
            dxm: {
                status: "Baixo risco e Sinergia"
            },
            pcp: {
                status: "Baixo risco e Sinergia"
            },
            nitrous: {
                status: "Baixo risco e Sinergia"
            },
            amphetamines: {
                status: "Caution",
                note: "Stimulants increase anxiety levels and the risk of thought loops which can lead to negative experiences"
            },
            mdma: {
                status: "Baixo risco e Sinergia"
            },
            cocaine: {
                status: "Caution",
                note: "Stimulants increase anxiety levels and the risk of thought loops which can lead to negative experiences"
            },
            caffeine: {
                status: "Baixo risco sem sinergia"
            },
            alcool: {
                status: "Low Risk & Decrease"
            },
            "ghb/gbl": {
                status: "Low Risk & Decrease"
            },
            opioids: {
                status: "Baixo risco sem sinergia"
            },
            tramadol: {
                status: "Unsafe",
                note: "Tramadol is well known to lower seizure threshold and psychedelics also cause occasional seizures."
            },
            benzodiazepines: {
                status: "Low Risk & Decrease"
            },
            maois: {
                status: "Baixo risco e Sinergia"
            },
            ssris: {
                status: "Low Risk & Decrease"
            }
        },
        mescalina: {
            cogumelos: {
                status: "Baixo risco e Sinergia"
            },
            lsd: {
                status: "Baixo risco e Sinergia"
            },
            dmt: {
                status: "Baixo risco e Sinergia"
            },
            dox: {
                status: "Caution"
            },
            nbomes: {
                status: "Caution"
            },
            "2c-x": {
                status: "Caution"
            },
            "2c-t-x": {
                status: "Caution"
            },
            amt: {
                status: "Dangerous"
            },
            "5-meo-xxt": {
                status: "Caution",
                note: "The 5-MeO class of tryptamines can be unpredictable in their interactions"
            },
            cannabis: {
                status: "Caution",
                note: "Cannabis has an unexpectedly strong and somewhat unpredictable synergy with psychedelics."
            },
            ketamina: {
                status: "Baixo risco e Sinergia"
            },
            mxe: {
                status: "Baixo risco e Sinergia"
            },
            dxm: {
                status: "Baixo risco e Sinergia"
            },
            pcp: {
                status: "Baixo risco e Sinergia"
            },
            nitrous: {
                status: "Baixo risco e Sinergia"
            },
            amphetamines: {
                status: "Caution",
                note: "The focus and anxiety caused by stimulants is magnified by psychedelics and results in an increased risk of thought loops"
            },
            mdma: {
                status: "Baixo risco e Sinergia"
            },
            cocaine: {
                status: "Caution",
                note: "The focus and anxiety caused by stimulants is magnified by psychedelics and results in an increased risk of thought loops"
            },
            caffeine: {
                status: "Baixo risco sem sinergia",
                note: "High doses of caffeine are uncomfortable and this will be magnified by psychedelics"
            },
            alcool: {
                status: "Low Risk & Decrease"
            },
            "ghb/gbl": {
                status: "Low Risk & Decrease"
            },
            opioids: {
                status: "Baixo risco sem sinergia"
            },
            tramadol: {
                status: "Unsafe",
                note: "This combination can cause seizures due to the lowering of the threshold by tramadol and the potential of mescalina to cause seziures."
            },
            benzodiazepines: {
                status: "Low Risk & Decrease"
            },
            maois: {
                status: "Caution"
            },
            ssris: {
                status: "Low Risk & Decrease"
            }
        },
        dox: {
            cogumelos: {
                status: "Baixo risco e Sinergia"
            },
            lsd: {
                status: "Baixo risco e Sinergia"
            },
            dmt: {
                status: "Baixo risco e Sinergia"
            },
            mescalina: {
                status: "Caution"
            },
            nbomes: {
                status: "Caution"
            },
            "2c-x": {
                status: "Caution"
            },
            "2c-t-x": {
                status: "Caution"
            },
            amt: {
                status: "Dangerous"
            },
            "5-meo-xxt": {
                status: "Caution",
                note: "The 5-MeO class of tryptamines can be unpredictable in their interactions, particularly increasing the risk of unpleasant physical side effects."
            },
            cannabis: {
                status: "Caution",
                note: "Cannabis has an unexpectedly strong and somewhat unpredictable synergy with psychedelics."
            },
            ketamina: {
                status: "Baixo risco e Sinergia",
                note: "ketamina and psychedelics tend to potentiate each other - go slowly."
            },
            mxe: {
                status: "Caution",
                note: "As an NMDA antagonist MXE potentiates DOx which can be unpleasantly intense"
            },
            dxm: {
                status: "Unsafe",
                note: "The DOx class as psychedelic stimulants have the potential to mask the effects of DXM and could lead to redosing to an unsafe level. DXM can also potentiate DOx resulting in an unpleasantly intense experience."
            },
            pcp: {
                status: "Unsafe",
                note: "Details of this combination are not well understood but PCP generally interacts in an unpredictable manner."
            },
            nitrous: {
                status: "Baixo risco e Sinergia"
            },
            amphetamines: {
                status: "Unsafe",
                note: "The combined stimulating effects of the two can lead to an uncomfortable body-load, while the focusing effects of amphetamine can easily lead to thought loops. Coming down from amphetamines while the DOx is still active can be quite anxiogenic. "
            },
            mdma: {
                status: "Caution",
                note: "The combined stimulating effects of the two can be uncomfortable. Coming down on the MDMA while the DOx is still active can be quite anxiogenic. "
            },
            cocaine: {
                status: "Unsafe",
                note: "The combined stimulating effects of the two can lead to an uncomfortable body-load, while the focusing effects of cocaine can easily lead to thought loops. Coming down from cocaine while the DOx is still active can be quite anxiogenic"
            },
            caffeine: {
                status: "Caution",
                note: "High doses of caffeine may cause anxiety which is less manageable when tripping, and since both are stimulating it may cause some physical discomfort."
            },
            alcool: {
                status: "Low Risk & Decrease",
                note: "Drinking on stimulants is risky because the sedative effects of the alcool are  reduced, and these are what the body uses to gauge drunkenness. This typically leads to excessive drinking with greatly reduced inhibitions, high risk of liver damage and increased dehydration. They will also  allow you to drink past a point where you might normally pass out, increasing the risk."
            },
            "ghb/gbl": {
                status: "Low Risk & Decrease"
            },
            opioids: {
                status: "Baixo risco sem sinergia",
                note: "No unexpected interactions."
            },
            tramadol: {
                status: "Unsafe",
                note: "Tramadol is well known to lower seizure threshold and psychedelics also cause occasional seizures."
            },
            benzodiazepines: {
                status: "Low Risk & Decrease"
            },
            maois: {
                status: "Caution",
                note: "MAO-B inhibitors can increase the potency and duration of phenethylamines unpredictably"
            },
            ssris: {
                status: "Low Risk & Decrease"
            }
        },
        nbomes: {
            cogumelos: {
                status: "Baixo risco e Sinergia"
            },
            lsd: {
                status: "Baixo risco e Sinergia"
            },
            dmt: {
                status: "Baixo risco e Sinergia"
            },
            mescalina: {
                status: "Caution"
            },
            dox: {
                status: "Caution"
            },
            "2c-x": {
                status: "Caution"
            },
            "2c-t-x": {
                status: "Caution"
            },
            amt: {
                status: "Dangerous"
            },
            "5-meo-xxt": {
                status: "Caution",
                note: "The 5-MeO class of tryptamines can be unpredictable in their interactions and the NBOMes are known to be unpredictable even alone. This combination is best avoided"
            },
            cannabis: {
                status: "Caution",
                note: "Cannabis has an unexpectedly strong and somewhat unpredictable synergy with psychedelics."
            },
            ketamina: {
                status: "Baixo risco e Sinergia"
            },
            mxe: {
                status: "Caution",
                note: "As an NMDA antagonist MXE potentiates NBOMes which can be unpleasantly intense"
            },
            dxm: {
                status: "Unsafe"
            },
            pcp: {
                status: "Baixo risco e Sinergia"
            },
            nitrous: {
                status: "Baixo risco e Sinergia"
            },
            amphetamines: {
                status: "Unsafe",
                note: "Amphetamines and NBOMes both provide considerable stimulation. When combined they can result in tachycardia, hypertension, vasoconstriction and in extreme cases heart failure. The anxiogenic and focusing effects of stimulants are also not good in combination with psychedelics as they can lead to unpleasant thought loops. NBOMes are known to cause seizures and stimulants can increase this risk."
            },
            mdma: {
                status: "Caution"
            },
            cocaine: {
                status: "Unsafe",
                note: "Cocaine and NBOMes both provide considerable stimulation. When combined they can result in severe vasoconstriction, tachycardia, hypertension, and in extreme cases heart failure."
            },
            caffeine: {
                status: "Caution",
                note: "Caffiene can bring out the natural stimulation from psychedelic drugs to make it uncomfortable. High doses can cause anxiety which is hard to handle while tripping"
            },
            alcool: {
                status: "Low Risk & Decrease"
            },
            "ghb/gbl": {
                status: "Low Risk & Decrease"
            },
            opioids: {
                status: "Baixo risco sem sinergia"
            },
            tramadol: {
                status: "Unsafe",
                note: "Tramadol is well known to lower seizure threshold and NBOMes have also shown a tendency to cause severe seizures"
            },
            benzodiazepines: {
                status: "Low Risk & Decrease"
            },
            maois: {
                status: "Caution",
                note: "MAO-B inhibitors can increase the potency and duration of phenethylamines unpredictably"
            },
            ssris: {
                status: "Low Risk & Decrease"
            }
        },
        "2c-x": {
            cogumelos: {
                status: "Baixo risco e Sinergia"
            },
            lsd: {
                status: "Baixo risco e Sinergia"
            },
            dmt: {
                status: "Baixo risco e Sinergia"
            },
            mescalina: {
                status: "Caution"
            },
            dox: {
                status: "Caution"
            },
            nbomes: {
                status: "Caution"
            },
            "2c-t-x": {
                status: "Caution"
            },
            amt: {
                status: "Dangerous"
            },
            "5-meo-xxt": {
                status: "Caution",
                note: "The 5-MeO psychedelics can interact unpredictably to potentiate other psychedelics"
            },
            cannabis: {
                status: "Caution",
                note: "Cannabis has an unexpectedly strong and somewhat unpredictable synergy with psychedelics."
            },
            ketamina: {
                status: "Baixo risco e Sinergia"
            },
            mxe: {
                status: "Baixo risco e Sinergia"
            },
            dxm: {
                status: "Baixo risco e Sinergia"
            },
            pcp: {
                status: "Baixo risco e Sinergia"
            },
            nitrous: {
                status: "Baixo risco e Sinergia"
            },
            amphetamines: {
                status: "Caution",
                note: "The anxiogenic and focusing effects of stimulants increase the chance of unpleasant thought loops. The combination is generally uneccessary because of the stimulating effects of psychedelics. Combination of the stimulating effects may be uncomfortable."
            },
            mdma: {
                status: "Baixo risco e Sinergia"
            },
            cocaine: {
                status: "Caution",
                note: "The anxiogenic and focusing effects of stimulants increase the chance of unpleasant thought loops. The combination is generally unnecessary because of the stimulating effects of psychedelics. Combination of the stimulating effects may be uncomfortable."
            },
            caffeine: {
                status: "Baixo risco sem sinergia",
                note: "High doses of caffeine may cause anxiety which is less manageable when tripping, and since both are stimulating the combination may cause some physical discomfort."
            },
            alcool: {
                status: "Low Risk & Decrease"
            },
            "ghb/gbl": {
                status: "Low Risk & Decrease"
            },
            opioids: {
                status: "Baixo risco sem sinergia"
            },
            tramadol: {
                status: "Unsafe",
                note: "Tramadol is well known to lower seizure threshold and psychedelics raise the risk of seizures."
            },
            benzodiazepines: {
                status: "Low Risk & Decrease"
            },
            maois: {
                status: "Caution",
                note: "MAO-B inhibitors can increase the potency and duration of phenethylamines unpredictably"
            },
            ssris: {
                status: "Low Risk & Decrease"
            }
        },
        "2c-t-x": {
            cogumelos: {
                status: "Baixo risco e Sinergia"
            },
            lsd: {
                status: "Baixo risco e Sinergia"
            },
            dmt: {
                status: "Baixo risco e Sinergia"
            },
            mescalina: {
                status: "Caution"
            },
            dox: {
                status: "Caution"
            },
            nbomes: {
                status: "Caution"
            },
            "2c-x": {
                status: "Caution"
            },
            amt: {
                status: "Dangerous"
            },
            "5-meo-xxt": {
                status: "Caution",
                note: "Both classes of compounds can be unpredictable alone"
            },
            cannabis: {
                status: "Caution",
                note: "Cannabis has an unexpectedly strong and somewhat unpredictable synergy with psychedelics."
            },
            ketamina: {
                status: "Baixo risco e Sinergia"
            },
            mxe: {
                status: "Caution"
            },
            dxm: {
                status: "Unsafe"
            },
            pcp: {
                status: "Dangerous"
            },
            nitrous: {
                status: "Baixo risco e Sinergia"
            },
            amphetamines: {
                status: "Unsafe",
                note: "Stimulants increase anxiety levels and the risk of thought loops which can lead to negative experiences. In extreme cases, they can result in severe vasoconstriction, tachycardia, hypertension, and in extreme cases heart failure."
            },
            mdma: {
                status: "Caution"
            },
            cocaine: {
                status: "Unsafe",
                note: "Cocaine and 2c-t-x both provide considerable stimulation. When combined they can result in severe vasoconstriction, tachycardia, hypertension, and in extreme cases heart failure."
            },
            caffeine: {
                status: "Baixo risco sem sinergia",
                note: "High doses of caffeine may cause anxiety which is less manageable when tripping, and since both are stimulating the combination may cause some physical discomfort."
            },
            alcool: {
                status: "Low Risk & Decrease",
                note: "Both these classes of compound can interact unpredictably. Caution should be exercised."
            },
            "ghb/gbl": {
                status: "Low Risk & Decrease"
            },
            opioids: {
                status: "Baixo risco sem sinergia",
                note: "No expected interactions, some opioids have serotonin action, and could lead to Serotonin Syndrome or a seizure. These are pretty much only to Pentazocine, Methadone, Tramadol, Tapenatdol."
            },
            tramadol: {
                status: "Unsafe"
            },
            benzodiazepines: {
                status: "Low Risk & Decrease"
            },
            maois: {
                status: "Caution",
                note: "MAO-B inhibitors can increase the potency and duration of phenethylamines unpredictably, which could be dangerous given the unpredictability of the 2C-T-x series"
            },
            ssris: {
                status: "Low Risk & Decrease"
            }
        },
        amt: {
            cogumelos: {
                status: "Baixo risco e Sinergia"
            },
            lsd: {
                status: "Baixo risco e Sinergia"
            },
            dmt: {
                status: "Baixo risco e Sinergia"
            },
            mescalina: {
                status: "Dangerous"
            },
            dox: {
                status: "Dangerous"
            },
            nbomes: {
                status: "Dangerous"
            },
            "2c-x": {
                status: "Dangerous"
            },
            "2c-t-x": {
                status: "Dangerous"
            },
            "5-meo-xxt": {
                status: "Dangerous"
            },
            cannabis: {
                status: "Caution",
                note: "Cannabis has an unexpectedly strong and somewhat unpredictable synergy with psychedelics. Small amounts can reduce nausea with aMT but take care."
            },
            ketamina: {
                status: "Baixo risco e Sinergia"
            },
            mxe: {
                status: "Dangerous"
            },
            dxm: {
                status: "Dangerous"
            },
            pcp: {
                status: "Dangerous"
            },
            nitrous: {
                status: "Baixo risco e Sinergia"
            },
            amphetamines: {
                status: "Dangerous"
            },
            mdma: {
                status: "Dangerous"
            },
            cocaine: {
                status: "Dangerous"
            },
            caffeine: {
                status: "Caution",
                note: "High doses of caffeine may cause anxiety which is less manageable when tripping, and since both are stimulating the combination may cause some physical discomfort."
            },
            alcool: {
                status: "Caution",
                note: "aMT has a broad mechanism of action in the brain and so does alcool so the combination can be unpredictable"
            },
            "ghb/gbl": {
                status: "Low Risk & Decrease"
            },
            opioids: {
                status: "Baixo risco sem sinergia",
                note: "No unexpected interactions"
            },
            tramadol: {
                status: "Dangerous"
            },
            benzodiazepines: {
                status: "Low Risk & Decrease"
            },
            maois: {
                status: "Dangerous",
                note: "aMT is an MAOI on its own. Using enzyme inhibitors can greatly reduce predictability of effects."
            },
            ssris: {
                status: "Dangerous"
            }
        },
        "5-meo-xxt": {
            cogumelos: {
                status: "Baixo risco e Sinergia"
            },
            lsd: {
                status: "Baixo risco e Sinergia"
            },
            dmt: {
                status: "Baixo risco e Sinergia"
            },
            mescalina: {
                status: "Caution",
                note: "The 5-MeO class of tryptamines can be unpredictable in their interactions"
            },
            dox: {
                status: "Caution",
                note: "The 5-MeO class of tryptamines can be unpredictable in their interactions, particularly increasing the risk of unpleasant physical side effects."
            },
            nbomes: {
                status: "Caution",
                note: "The 5-MeO class of tryptamines can be unpredictable in their interactions and the NBOMes are known to be unpredictable even alone. This combination is best avoided"
            },
            "2c-x": {
                status: "Caution",
                note: "The 5-MeO psychedelics can interact unpredictably to potentiate other psychedelics"
            },
            "2c-t-x": {
                status: "Caution",
                note: "Both classes of compounds can be unpredictable alone"
            },
            amt: {
                status: "Dangerous"
            },
            mxe: {
                status: "Baixo risco e Sinergia",
                note: "Little information exists about this combination."
            },
            pcp: {
                status: "Dangerous"
            },
            dxm: {
                status: "Unsafe",
                note: "Little information exists about this combination."
            },
            cannabis: {
                status: "Caution",
                note: "Cannabis has an unexpectedly strong and somewhat unpredictable synergy with psychedelics."
            },
            ketamina: {
                status: "Baixo risco e Sinergia"
            },
            nitrous: {
                status: "Baixo risco e Sinergia"
            },
            amphetamines: {
                status: "Unsafe",
                note: "The anxiogenic and focusing effects of stimulants increase the chance of unpleasant thought loops. The combination is generally unnecessary because of the stimulating effects of psychedelics. "
            },
            mdma: {
                status: "Caution",
                note: "Some of the 5-MeO tryptamines are a bit unpredictable and should be mixed with MDMA with care"
            },
            cocaine: {
                status: "Unsafe",
                note: "The anxiogenic and focusing effects of stimulants increase the chance of unpleasant thought loops. The combination is generally unnecessary because of the stimulating effects of psychedelics. "
            },
            caffeine: {
                status: "Baixo risco sem sinergia",
                note: "High doses of caffeine may cause anxiety which is less manageable when tripping, and since both are stimulating the combination may cause some physical discomfort."
            },
            alcool: {
                status: "Low Risk & Decrease"
            },
            "ghb/gbl": {
                status: "Low Risk & Decrease"
            },
            opioids: {
                status: "Baixo risco sem sinergia"
            },
            tramadol: {
                status: "Unsafe"
            },
            benzodiazepines: {
                status: "Low Risk & Decrease"
            },
            maois: {
                status: "Dangerous"
            },
            ssris: {
                status: "Low Risk & Decrease"
            }
        },
        cannabis: {
            cogumelos: {
                status: "Caution",
                note: "Cannabis has an unexpectedly strong and somewhat unpredictable synergy with psychedelics."
            },
            lsd: {
                status: "Caution",
                note: "Cannabis has an unexpectedly strong and somewhat unpredictable synergy with psychedelics."
            },
            dmt: {
                status: "Caution",
                note: "Cannabis has an unexpectedly strong and somewhat unpredictable synergy with psychedelics."
            },
            mescalina: {
                status: "Caution",
                note: "Cannabis has an unexpectedly strong and somewhat unpredictable synergy with psychedelics."
            },
            dox: {
                status: "Caution",
                note: "Cannabis has an unexpectedly strong and somewhat unpredictable synergy with psychedelics."
            },
            nbomes: {
                status: "Caution",
                note: "Cannabis has an unexpectedly strong and somewhat unpredictable synergy with psychedelics."
            },
            "2c-x": {
                status: "Caution",
                note: "Cannabis has an unexpectedly strong and somewhat unpredictable synergy with psychedelics."
            },
            "2c-t-x": {
                status: "Caution",
                note: "Cannabis has an unexpectedly strong and somewhat unpredictable synergy with psychedelics."
            },
            amt: {
                status: "Caution",
                note: "Cannabis has an unexpectedly strong and somewhat unpredictable synergy with psychedelics. Small amounts can reduce nausea with aMT but take care."
            },
            "5-meo-xxt": {
                status: "Caution",
                note: "Cannabis has an unexpectedly strong and somewhat unpredictable synergy with psychedelics."
            },
            ketamina: {
                status: "Baixo risco e Sinergia"
            },
            mxe: {
                status: "Baixo risco e Sinergia"
            },
            dxm: {
                status: "Baixo risco e Sinergia"
            },
            pcp: {
                status: "Baixo risco e Sinergia"
            },
            nitrous: {
                status: "Baixo risco e Sinergia"
            },
            amphetamines: {
                status: "Caution",
                note: "Stimulants increase anxiety levels and the risk of thought loops which can lead to negative experiences"
            },
            mdma: {
                status: "Baixo risco e Sinergia",
                note: "Large amounts of cannabis may cause strong and somewhat unpredictable experiences in combination with MDMA. Cannabis should be saved for towards the end of the experience if possible."
            },
            cocaine: {
                status: "Caution",
                note: "Stimulants increase anxiety levels and the risk of thought loops which can lead to negative experiences"
            },
            caffeine: {
                status: "Baixo risco sem sinergia"
            },
            alcool: {
                status: "Baixo risco e Sinergia",
                note: "In excess, this combination can cause nausea."
            },
            "ghb/gbl": {
                status: "Baixo risco e Sinergia"
            },
            opioids: {
                status: "Baixo risco e Sinergia"
            },
            tramadol: {
                status: "Baixo risco e Sinergia"
            },
            benzodiazepines: {
                status: "Low Risk & Decrease"
            },
            maois: {
                status: "Baixo risco e Sinergia"
            },
            ssris: {
                status: "Baixo risco sem sinergia"
            }
        },
        ketamina: {
            cogumelos: {
                status: "Baixo risco e Sinergia"
            },
            lsd: {
                status: "Baixo risco e Sinergia"
            },
            dmt: {
                status: "Baixo risco e Sinergia"
            },
            mescalina: {
                status: "Baixo risco e Sinergia"
            },
            dox: {
                status: "Baixo risco e Sinergia",
                note: "ketamina and psychedelics tend to potentiate each other - go slowly."
            },
            nbomes: {
                status: "Baixo risco e Sinergia"
            },
            "2c-x": {
                status: "Baixo risco e Sinergia"
            },
            "2c-t-x": {
                status: "Baixo risco e Sinergia"
            },
            amt: {
                status: "Baixo risco e Sinergia"
            },
            "5-meo-xxt": {
                status: "Baixo risco e Sinergia"
            },
            cannabis: {
                status: "Baixo risco e Sinergia"
            },
            mxe: {
                status: "Baixo risco e Sinergia"
            },
            dxm: {
                status: "Baixo risco sem sinergia"
            },
            pcp: {
                status: "Baixo risco e Sinergia"
            },
            nitrous: {
                status: "Baixo risco e Sinergia"
            },
            amphetamines: {
                status: "Caution",
                note: "No unexpected interactions, though likely to increase blood pressure but not an issue with sensible doses. Moving around on high doses of this combination may be ill advised due to risk of physical injury."
            },
            mdma: {
                status: "Baixo risco e Sinergia",
                note: "No unexpected interactions, though likely to increase blood pressure  but not an issue with sensible doses. Moving around on high doses of  this combination may be ill advised due to risk of physical injury."
            },
            cocaine: {
                status: "Caution",
                note: "No unexpected interactions, though likely to increase blood pressure but not an issue with sensible doses. Moving around on high doses of this combination may be ill advised due to risk of physical injury."
            },
            caffeine: {
                status: "Baixo risco sem sinergia",
                note: "No unexpected interactions."
            },
            alcool: {
                status: "Dangerous",
                note: "Both substances cause ataxia and bring a very high risk of vomiting and unconsciousness. If the user falls unconscious while under the influence there is a severe risk of vomit aspiration if they are not placed in the recovery position."
            },
            "ghb/gbl": {
                status: "Dangerous",
                note: "Both substances cause ataxia and bring a risk of vomiting and unconsciousness. If the user falls unconscious while under the influence there is a severe risk of vomit aspiration if they are not placed in the recovery position."
            },
            opioids: {
                status: "Dangerous",
                note: "Both substances bring a risk of vomiting and unconsciousness. If the user falls unconscious while under the influence there is a severe risk of vomit aspiration if they are not placed in the recovery position."
            },
            tramadol: {
                status: "Dangerous"
            },
            benzodiazepines: {
                status: "Caution",
                note: "Both substances potentiate the ataxia and sedation caused by the other and can lead to unexpected loss of consciousness at high doses. While unconscious, vomit aspiration is a risk if not placed in the recovery position."
            },
            maois: {
                status: "Caution",
                note: "MAO-B inhibitors appear to increase the potency of ketamina. MAO-A inhbitors have some negative reports associated with the combination but there isn't much information available"
            },
            ssris: {
                status: "Baixo risco sem sinergia"
            }
        },
        mxe: {
            cogumelos: {
                status: "Baixo risco e Sinergia"
            },
            lsd: {
                status: "Baixo risco e Sinergia"
            },
            dmt: {
                status: "Baixo risco e Sinergia"
            },
            mescalina: {
                status: "Baixo risco e Sinergia"
            },
            dox: {
                status: "Caution",
                note: "As an NMDA antagonist MXE potentiates DOx which can be unpleasantly intense"
            },
            nbomes: {
                status: "Caution",
                note: "As an NMDA antagonist MXE potentiates NBOMes which can be unpleasantly intense"
            },
            "2c-x": {
                status: "Baixo risco e Sinergia"
            },
            "2c-t-x": {
                status: "Caution"
            },
            amt: {
                status: "Dangerous"
            },
            "5-meo-xxt": {
                status: "Baixo risco e Sinergia",
                note: "Little information exists about this combination."
            },
            cannabis: {
                status: "Baixo risco e Sinergia"
            },
            ketamina: {
                status: "Baixo risco e Sinergia"
            },
            dxm: {
                status: "Baixo risco sem sinergia"
            },
            pcp: {
                status: "Caution",
                note: "There are no reports available about this combination"
            },
            nitrous: {
                status: "Baixo risco e Sinergia"
            },
            amphetamines: {
                status: "Caution",
                note: "Risk of tachycardia, hypertension, and manic states"
            },
            mdma: {
                status: "Caution",
                note: "There have been reports of risky serotonergic interactions when the two are taken at the same time, but MXE taken to the end of an MDMA experience does not appear to cause the same issues."
            },
            cocaine: {
                status: "Caution",
                note: "Stimulants taken with MXE can lead to hypermanic states much more easily, especially if sleep is avoided."
            },
            caffeine: {
                status: "Baixo risco sem sinergia",
                note: "No likely interactions"
            },
            alcool: {
                status: "Dangerous",
                note: "There is a high risk of memory loss, vomiting and severe ataxia from this combination."
            },
            "ghb/gbl": {
                status: "Dangerous",
                note: "Both substances cause ataxia and bring a risk of vomiting and unconsciousness. If the patient falls unconscious while under the influence there is a severe risk of vomit aspiration if they are not placed in the recovery position."
            },
            opioids: {
                status: "Dangerous",
                note: "This combination can potentiate the effects of the opioid"
            },
            tramadol: {
                status: "Dangerous"
            },
            benzodiazepines: {
                status: "Caution",
                note: "Both substances potentiate the ataxia and sedation caused by the other and can lead to unexpected loss of consciousness at high doses. Place affected patients in the recovery position to prevent vomit aspiration from excess."
            },
            maois: {
                status: "Unsafe",
                note: "MAO-B inhibitors appear to increase the potency of MXE. MAO-A inhbitors have some negative reports associated with the combination but there isn't much information available"
            },
            ssris: {
                status: "Caution",
                note: "Depending on the SSRI this combination can be unpredictable"
            }
        },
        dxm: {
            cogumelos: {
                status: "Baixo risco e Sinergia"
            },
            lsd: {
                status: "Baixo risco e Sinergia"
            },
            dmt: {
                status: "Baixo risco e Sinergia"
            },
            mescalina: {
                status: "Baixo risco e Sinergia"
            },
            dox: {
                status: "Unsafe",
                note: "The DOx class as psychedelic stimulants have the potential to mask the effects of DXM and could lead to redosing to an unsafe level. DXM can also potentiate DOx resulting in an unpleasantly intense experience."
            },
            nbomes: {
                status: "Unsafe"
            },
            "2c-x": {
                status: "Baixo risco e Sinergia"
            },
            "2c-t-x": {
                status: "Unsafe"
            },
            amt: {
                status: "Dangerous"
            },
            "5-meo-xxt": {
                status: "Unsafe",
                note: "Little information exists about this combination."
            },
            cannabis: {
                status: "Baixo risco e Sinergia"
            },
            ketamina: {
                status: "Baixo risco sem sinergia"
            },
            mxe: {
                status: "Baixo risco sem sinergia"
            },
            pcp: {
                status: "Dangerous"
            },
            nitrous: {
                status: "Baixo risco e Sinergia"
            },
            amphetamines: {
                status: "Unsafe",
                note: "Both substances raise heart rate, in extreme cases, panic attacks caused by these drugs have led to more serious heart issues."
            },
            mdma: {
                status: "Dangerous"
            },
            cocaine: {
                status: "Unsafe",
                note: "Both substances raise heart rate, in extreme cases, panic attacks caused by these drugs have led to more serious heart issues"
            },
            caffeine: {
                status: "Baixo risco sem sinergia",
                note: "High doses of caffeine may cause anxiety which is less manageable when tripping, and since both are stimulating the combination may cause some physical discomfort."
            },
            alcool: {
                status: "Dangerous",
                note: "Both substances potentiate the ataxia and sedation caused by the other and can lead to unexpected loss of consciousness at high doses. Place affected patients in the recovery position to prevent vomit aspiration from excess. Additionally CNS depression can lead to difficulty breathing. Avoid on anything higher than 1st plateau."
            },
            "ghb/gbl": {
                status: "Dangerous",
                note: "Both substances cause ataxia and bring a risk of vomiting and unconsciousness. If the patient falls unconscious while under the influence there is a severe risk of vomit aspiration if they are not placed in the recovery position. This combination is hard to predict"
            },
            opioids: {
                status: "Dangerous",
                note: "CNS depression, difficult breathing, heart issues, hepatoxic, just very unsafe combination all around. Additionally if one takes dxm, their tolerance of opiates goes down slightly, thus causing additional synergistic effects."
            },
            tramadol: {
                status: "Dangerous"
            },
            benzodiazepines: {
                status: "Caution",
                note: "Small doses of benzos can end a bad trip, but both substances potentiate the ataxia and sedation caused by the other and this can lead to unexpected loss of consciousness at high doses. While unconscious, vomit aspiration is a risk if not placed in the recovery position."
            },
            maois: {
                status: "Dangerous",
                note: "High risk of serotonin syndrome"
            },
            ssris: {
                status: "Dangerous",
                note: "High risk of serotonin syndrome."
            }
        },
        pcp: {
            cogumelos: {
                status: "Baixo risco e Sinergia"
            },
            lsd: {
                status: "Baixo risco e Sinergia"
            },
            dmt: {
                status: "Baixo risco e Sinergia"
            },
            mescalina: {
                status: "Baixo risco e Sinergia"
            },
            dox: {
                status: "Unsafe",
                note: "Details of this combination are not well understood but PCP generally interacts in an unpredictable manner."
            },
            nbomes: {
                status: "Baixo risco e Sinergia"
            },
            "2c-x": {
                status: "Baixo risco e Sinergia"
            },
            "2c-t-x": {
                status: "Dangerous"
            },
            amt: {
                status: "Dangerous"
            },
            "5-meo-xxt": {
                status: "Dangerous"
            },
            cannabis: {
                status: "Baixo risco e Sinergia"
            },
            ketamina: {
                status: "Baixo risco e Sinergia"
            },
            mxe: {
                status: "Caution",
                note: "There are no reports available about this combination"
            },
            dxm: {
                status: "Dangerous"
            },
            nitrous: {
                status: "Baixo risco e Sinergia"
            },
            amphetamines: {
                status: "Unsafe",
                note: "This combination can easily lead to hypermanic states"
            },
            mdma: {
                status: "Unsafe",
                note: "This combination can easily lead to hypermanic states"
            },
            cocaine: {
                status: "Unsafe",
                note: "This combination can easily lead to hypermanic states"
            },
            caffeine: {
                status: "Caution",
                note: "Details of this combination are not well understood but PCP generally interacts in an unpredictable manner."
            },
            alcool: {
                status: "Unsafe",
                note: "Details of this combination are not well understood but PCP generally interacts in an unpredictable manner."
            },
            "ghb/gbl": {
                status: "Dangerous",
                note: "Details of this combination are not well understood but PCP generally interacts in an unpredictable manner."
            },
            opioids: {
                status: "Caution",
                note: "PCP can reduce opioid tolerance, increasing the risk of overdose"
            },
            tramadol: {
                status: "Dangerous"
            },
            benzodiazepines: {
                status: "Unsafe",
                note: "Both substances potentiate the ataxia and sedation caused by the other and can lead to unexpected loss of consciousness at high doses. While unconscious, vomit aspiration is a risk if not placed in the recovery position. Memory blackouts are likely"
            },
            maois: {
                status: "Dangerous",
                note: "This combination is very poorly explored"
            },
            ssris: {
                status: "Unsafe",
                note: "Details of this combination are not well understood but PCP generally interacts in an unpredictable manner."
            }
        },
        nitrous: {
            cogumelos: {
                status: "Baixo risco e Sinergia"
            },
            lsd: {
                status: "Baixo risco e Sinergia"
            },
            dmt: {
                status: "Baixo risco e Sinergia"
            },
            mescalina: {
                status: "Baixo risco e Sinergia"
            },
            dox: {
                status: "Baixo risco e Sinergia"
            },
            nbomes: {
                status: "Baixo risco e Sinergia"
            },
            "2c-x": {
                status: "Baixo risco e Sinergia"
            },
            "2c-t-x": {
                status: "Baixo risco e Sinergia"
            },
            amt: {
                status: "Baixo risco e Sinergia"
            },
            "5-meo-xxt": {
                status: "Baixo risco e Sinergia"
            },
            cannabis: {
                status: "Baixo risco e Sinergia"
            },
            ketamina: {
                status: "Baixo risco e Sinergia"
            },
            mxe: {
                status: "Baixo risco e Sinergia"
            },
            dxm: {
                status: "Baixo risco e Sinergia"
            },
            pcp: {
                status: "Baixo risco e Sinergia"
            },
            amphetamines: {
                status: "Baixo risco e Sinergia"
            },
            mdma: {
                status: "Baixo risco e Sinergia"
            },
            cocaine: {
                status: "Baixo risco e Sinergia"
            },
            caffeine: {
                status: "Baixo risco sem sinergia"
            },
            alcool: {
                status: "Caution",
                note: "Both substances potentiate the ataxia and sedation caused by the other and can lead to unexpected loss of consciousness at high doses. While unconscious, vomit aspiration is a risk if not placed in the recovery position. Memory blackouts are likely."
            },
            "ghb/gbl": {
                status: "Caution",
                note: "Both substances potentiate the ataxia and sedation caused by the other and can lead to unexpected loss of consciousness at high doses. While unconscious, vomit aspiration is a risk if not placed in the recovery position. Memory blackouts are likely."
            },
            opioids: {
                status: "Caution",
                note: "Both substances potentiate the ataxia and sedation caused by the other and can lead to unexpected loss of consciousness at high doses. While unconscious, vomit aspiration is a risk if not placed in the recovery position. Memory blackouts are likely."
            },
            tramadol: {
                status: "Caution",
                note: "Both substances potentiate the ataxia and sedation caused by the other and can lead to unexpected loss of consciousness at high doses. While unconscious, vomit aspiration is a risk if not placed in the recovery position. Memory blackouts are likely."
            },
            benzodiazepines: {
                status: "Low Risk & Decrease"
            },
            maois: {
                status: "Baixo risco sem sinergia"
            },
            ssris: {
                status: "Baixo risco sem sinergia"
            }
        },
        amphetamines: {
            cogumelos: {
                status: "Caution",
                note: "Stimulants increase anxiety levels and the risk of thought loops which can lead to negative experiences"
            },
            lsd: {
                status: "Caution",
                note: "Stimulants increase anxiety levels and the risk of thought loops which can lead to negative experiences"
            },
            dmt: {
                status: "Caution",
                note: "Stimulants increase anxiety levels and the risk of thought loops which can lead to negative experiences"
            },
            mescalina: {
                status: "Caution",
                note: "The focus and anxiety caused by stimulants is magnified by psychedelics and results in an increased risk of thought loops"
            },
            dox: {
                status: "Unsafe",
                note: "The combined stimulating effects of the two can lead to an uncomfortable body-load, while the focusing effects of amphetamine can easily lead to thought loops. Coming down from amphetamines while the DOx is still active can be quite anxiogenic. "
            },
            nbomes: {
                status: "Unsafe",
                note: "Amphetamines and NBOMes both provide considerable stimulation. When combined they can result in tachycardia, hypertension, vasoconstriction and in extreme cases heart failure. The anxiogenic and focusing effects of stimulants are also not good in combination with psychedelics as they can lead to unpleasant thought loops. NBOMes are known to cause seizures and stimulants can increase this risk."
            },
            "2c-x": {
                status: "Caution",
                note: "The anxiogenic and focusing effects of stimulants increase the chance of unpleasant thought loops. The combination is generally uneccessary because of the stimulating effects of psychedelics. Combination of the stimulating effects may be uncomfortable."
            },
            "2c-t-x": {
                status: "Unsafe",
                note: "Stimulants increase anxiety levels and the risk of thought loops which can lead to negative experiences. In extreme cases, they can result in severe vasoconstriction, tachycardia, hypertension, and in extreme cases heart failure."
            },
            amt: {
                status: "Dangerous"
            },
            "5-meo-xxt": {
                status: "Unsafe",
                note: "The anxiogenic and focusing effects of stimulants increase the chance of unpleasant thought loops. The combination is generally unnecessary because of the stimulating effects of psychedelics. "
            },
            cannabis: {
                status: "Caution",
                note: "Stimulants increase anxiety levels and the risk of thought loops which can lead to negative experiences"
            },
            ketamina: {
                status: "Caution",
                note: "No unexpected interactions, though likely to increase blood pressure but not an issue with sensible doses. Moving around on high doses of this combination may be ill advised due to risk of physical injury."
            },
            mxe: {
                status: "Caution",
                note: "Risk of tachycardia, hypertension, and manic states"
            },
            dxm: {
                status: "Unsafe",
                note: "Both substances raise heart rate, in extreme cases, panic attacks caused by these drugs have led to more serious heart issues."
            },
            pcp: {
                status: "Unsafe",
                note: "This combination can easily lead to hypermanic states"
            },
            nitrous: {
                status: "Baixo risco e Sinergia"
            },
            mdma: {
                status: "Baixo risco e Sinergia",
                note: "Amphetamines increase the neurotoxic effects of MDMA"
            },
            cocaine: {
                status: "Caution",
                note: "This combination of stimulants will increase strain on the heart. It is not generally worth it as cocaine has a mild blocking effect on dopamine releasers like amphetamine"
            },
            caffeine: {
                status: "Caution",
                note: "This combination of stimulants is not generally necessary and may increase strain on the heart, as well as potentially causing anxiety and greater physical discomfort."
            },
            alcool: {
                status: "Caution",
                note: "Drinking on stimulants is risky because the sedative effects of the alcool are reduced, and these are what the body uses to gauge drunkenness. This typically leads to excessive drinking with greatly reduced inhibitions, high risk of liver damage and increased dehydration. They will also allow you to drink past a point where you might normally pass out, increasing the risk. If you do decide to do this then you should set a limit of how much you will drink each hour and stick to it, bearing in mind that you will feel the alcool and the stimulant less. Extended release formulations may severely impede sleep, further worsening the hangover."
            },
            "ghb/gbl": {
                status: "Caution",
                note: "Stimulants increase respiration rate allowing a higher dose of sedatives. If the stimulant wears off first then the opiate may overcome the patient and cause respiratory arrest."
            },
            opioids: {
                status: "Caution",
                note: "Stimulants increase respiration rate allowing a higher dose of opiates. If the stimulant wears off first then the opiate may overcome the patient and cause respiratory arrest."
            },
            tramadol: {
                status: "Dangerous",
                note: "Tramadol and stimulants both increase the risk of seizures."
            },
            benzodiazepines: {
                status: "Low Risk & Decrease",
                note: "Both can dull each other's effects, so if one wears off before the other it's possible to overdose due to the lack of counteraction"
            },
            maois: {
                status: "Dangerous",
                note: "MAO-B inhibitors can increase the potency and duration of phenethylamines unpredictably. MAO-A inhibitors with amphetamine can lead to hypertensive crises."
            },
            ssris: {
                status: "Baixo risco sem sinergia"
            }
        },
        mdma: {
            cogumelos: {
                status: "Baixo risco e Sinergia"
            },
            lsd: {
                status: "Baixo risco e Sinergia"
            },
            dmt: {
                status: "Baixo risco e Sinergia"
            },
            mescalina: {
                status: "Baixo risco e Sinergia"
            },
            dox: {
                status: "Caution",
                note: "The combined stimulating effects of the two can be uncomfortable. Coming down on the MDMA while the DOx is still active can be quite anxiogenic. "
            },
            nbomes: {
                status: "Caution"
            },
            "2c-x": {
                status: "Baixo risco e Sinergia"
            },
            "2c-t-x": {
                status: "Caution"
            },
            amt: {
                status: "Dangerous"
            },
            "5-meo-xxt": {
                status: "Caution",
                note: "Some of the 5-MeO tryptamines are a bit unpredictable and should be mixed with MDMA with care"
            },
            cannabis: {
                status: "Baixo risco e Sinergia",
                note: "Large amounts of cannabis may cause strong and somewhat unpredictable experiences in combination with MDMA. Cannabis should be saved for towards the end of the experience if possible."
            },
            ketamina: {
                status: "Baixo risco e Sinergia",
                note: "No unexpected interactions, though likely to increase blood pressure  but not an issue with sensible doses. Moving around on high doses of  this combination may be ill advised due to risk of physical injury."
            },
            mxe: {
                status: "Caution",
                note: "There have been reports of risky serotonergic interactions when the two are taken at the same time, but MXE taken to the end of an MDMA experience does not appear to cause the same issues."
            },
            dxm: {
                status: "Dangerous"
            },
            pcp: {
                status: "Unsafe",
                note: "This combination can easily lead to hypermanic states"
            },
            nitrous: {
                status: "Baixo risco e Sinergia"
            },
            amphetamines: {
                status: "Baixo risco e Sinergia",
                note: "Amphetamines increase the neurotoxic effects of MDMA"
            },
            cocaine: {
                status: "Caution",
                note: "Cocaine blocks some of the desirable effects of MDMA while increasing the risk of heart attack."
            },
            caffeine: {
                status: "Caution",
                note: "Caffiene is not really necessary with MDMA and increases any neurotoxic effects from MDMA"
            },
            alcool: {
                status: "Caution",
                note: "Both MDMA and alcool cause dehydration. Approach this combination with caution, moderation and sufficient hydration. More than a small amount of alcool will dull the euphoria of MDMA"
            },
            "ghb/gbl": {
                status: "Caution",
                note: "Large amounts of GHB/GBL may overwhelm the effects of MDMA on the comedown."
            },
            opioids: {
                status: "Baixo risco sem sinergia"
            },
            tramadol: {
                status: "Dangerous",
                note: "Tramadol and stimulants both increase the risk of seizures."
            },
            benzodiazepines: {
                status: "Low Risk & Decrease"
            },
            maois: {
                status: "Dangerous",
                note: "MAO-B inhibitors can increase the potency and duration of  phenethylamines unpredictably. MAO-A inhibitors with MDMA will lead to hypertensive crises."
            },
            ssris: {
                status: "Low Risk & Decrease"
            }
        },
        cocaine: {
            cogumelos: {
                status: "Caution",
                note: "Stimulants increase anxiety levels and the risk of thought loops which can lead to negative experiences"
            },
            lsd: {
                status: "Caution",
                note: "Stimulants increase anxiety levels and the risk of thought loops which can lead to negative experiences"
            },
            dmt: {
                status: "Caution",
                note: "Stimulants increase anxiety levels and the risk of thought loops which can lead to negative experiences"
            },
            mescalina: {
                status: "Caution",
                note: "The focus and anxiety caused by stimulants is magnified by psychedelics and results in an increased risk of thought loops"
            },
            dox: {
                status: "Unsafe",
                note: "The combined stimulating effects of the two can lead to an uncomfortable body-load, while the focusing effects of cocaine can easily lead to thought loops. Coming down from cocaine while the DOx is still active can be quite anxiogenic"
            },
            nbomes: {
                status: "Unsafe",
                note: "Cocaine and NBOMes both provide considerable stimulation. When combined they can result in severe vasoconstriction, tachycardia, hypertension, and in extreme cases heart failure."
            },
            "2c-x": {
                status: "Caution",
                note: "The anxiogenic and focusing effects of stimulants increase the chance of unpleasant thought loops. The combination is generally unnecessary because of the stimulating effects of psychedelics. Combination of the stimulating effects may be uncomfortable."
            },
            "2c-t-x": {
                status: "Unsafe",
                note: "Cocaine and 2c-t-x both provide considerable stimulation. When combined they can result in severe vasoconstriction, tachycardia, hypertension, and in extreme cases heart failure."
            },
            amt: {
                status: "Dangerous"
            },
            "5-meo-xxt": {
                status: "Unsafe",
                note: "The anxiogenic and focusing effects of stimulants increase the chance of unpleasant thought loops. The combination is generally unnecessary because of the stimulating effects of psychedelics. "
            },
            cannabis: {
                status: "Caution",
                note: "Stimulants increase anxiety levels and the risk of thought loops which can lead to negative experiences"
            },
            ketamina: {
                status: "Caution",
                note: "No unexpected interactions, though likely to increase blood pressure but not an issue with sensible doses. Moving around on high doses of this combination may be ill advised due to risk of physical injury."
            },
            mxe: {
                status: "Caution",
                note: "Stimulants taken with MXE can lead to hypermanic states much more easily, especially if sleep is avoided."
            },
            dxm: {
                status: "Unsafe",
                note: "Both substances raise heart rate, in extreme cases, panic attacks caused by these drugs have led to more serious heart issues"
            },
            pcp: {
                status: "Unsafe",
                note: "This combination can easily lead to hypermanic states"
            },
            nitrous: {
                status: "Baixo risco e Sinergia"
            },
            amphetamines: {
                status: "Caution",
                note: "This combination of stimulants will increase strain on the heart. It is not generally worth it as cocaine has a mild blocking effect on dopamine releasers like amphetamine"
            },
            mdma: {
                status: "Caution",
                note: "Cocaine blocks some of the desirable effects of MDMA while increasing the risk of heart attack."
            },
            caffeine: {
                status: "Caution",
                note: "Both stimulants, risk of tachycardia, hypertension, and in extreme cases heart failure."
            },
            alcool: {
                status: "Unsafe",
                note: "Drinking on stimulants is risky because the sedative effects of the alcool are reduced, and these are what the body uses to gauge drunkenness. This typically leads to excessive drinking with greatly reduced inhibitions, high risk of liver damage and increased dehydration. They will also allow you to drink past a point where you might normally pass out, increasing the risk. If you do decide to do this then you should set a limit of how much you will drink each hour and stick to it, bearing in mind that you will feel the alcool less. Cocaine is potentiated somewhat by alcool because of the formation of cocaethylene."
            },
            "ghb/gbl": {
                status: "Caution",
                note: "Stimulants increase respiration rate allowing a higher dose of sedatives. If the stimulant wears off first then the opiate may overcome the patient and cause respiratory arrest. Likewise the G can wear off and leave a dangerous concentration of cocaine behind"
            },
            opioids: {
                status: "Dangerous",
                note: "Stimulants increase respiration rate allowing a higher dose of opiates. If the stimulant wears off first then the opiate may overcome the patient and cause respiratory arrest."
            },
            tramadol: {
                status: "Dangerous",
                note: "Tramadol and stimulants both increase the risk of seizures."
            },
            benzodiazepines: {
                status: "Low Risk & Decrease"
            },
            maois: {
                status: "Dangerous",
                note: "This combination is poorly explored"
            },
            ssris: {
                status: "Baixo risco sem sinergia",
                note: "May reduce each others' effectiveness. Cocaine can reduce mental stability and therefore exacerbate conditions which SSRIs are used to treat."
            }
        },
        caffeine: {
            cogumelos: {
                status: "Baixo risco sem sinergia"
            },
            lsd: {
                status: "Baixo risco sem sinergia"
            },
            dmt: {
                status: "Baixo risco sem sinergia"
            },
            mescalina: {
                status: "Baixo risco sem sinergia",
                note: "High doses of caffeine are uncomfortable and this will be magnified by psychedelics"
            },
            dox: {
                status: "Caution",
                note: "High doses of caffeine may cause anxiety which is less manageable when tripping, and since both are stimulating it may cause some physical discomfort."
            },
            nbomes: {
                status: "Caution",
                note: "Caffiene can bring out the natural stimulation from psychedelic drugs to make it uncomfortable. High doses can cause anxiety which is hard to handle while tripping"
            },
            "2c-x": {
                status: "Baixo risco sem sinergia",
                note: "High doses of caffeine may cause anxiety which is less manageable when tripping, and since both are stimulating the combination may cause some physical discomfort."
            },
            "2c-t-x": {
                status: "Baixo risco sem sinergia",
                note: "High doses of caffeine may cause anxiety which is less manageable when tripping, and since both are stimulating the combination may cause some physical discomfort."
            },
            amt: {
                status: "Caution",
                note: "High doses of caffeine may cause anxiety which is less manageable when tripping, and since both are stimulating the combination may cause some physical discomfort."
            },
            "5-meo-xxt": {
                status: "Baixo risco sem sinergia",
                note: "High doses of caffeine may cause anxiety which is less manageable when tripping, and since both are stimulating the combination may cause some physical discomfort."
            },
            cannabis: {
                status: "Baixo risco sem sinergia"
            },
            ketamina: {
                status: "Baixo risco sem sinergia",
                note: "No unexpected interactions."
            },
            mxe: {
                status: "Baixo risco sem sinergia",
                note: "No likely interactions"
            },
            dxm: {
                status: "Baixo risco sem sinergia",
                note: "High doses of caffeine may cause anxiety which is less manageable when tripping, and since both are stimulating the combination may cause some physical discomfort."
            },
            pcp: {
                status: "Caution",
                note: "Details of this combination are not well understood but PCP generally interacts in an unpredictable manner."
            },
            nitrous: {
                status: "Baixo risco sem sinergia"
            },
            amphetamines: {
                status: "Caution",
                note: "This combination of stimulants is not generally necessary and may increase strain on the heart, as well as potentially causing anxiety and greater physical discomfort."
            },
            mdma: {
                status: "Caution",
                note: "Caffiene is not really necessary with MDMA and increases any neurotoxic effects from MDMA"
            },
            cocaine: {
                status: "Caution",
                note: "Both stimulants, risk of tachycardia, hypertension, and in extreme cases heart failure."
            },
            alcool: {
                status: "Baixo risco sem sinergia"
            },
            "ghb/gbl": {
                status: "Baixo risco sem sinergia"
            },
            opioids: {
                status: "Baixo risco sem sinergia"
            },
            tramadol: {
                status: "Baixo risco sem sinergia"
            },
            benzodiazepines: {
                status: "Low Risk & Decrease"
            },
            maois: {
                status: "Baixo risco sem sinergia"
            },
            ssris: {
                status: "Baixo risco sem sinergia"
            }
        },
        alcool: {
            cogumelos: {
                status: "Low Risk & Decrease"
            },
            lsd: {
                status: "Low Risk & Decrease"
            },
            dmt: {
                status: "Low Risk & Decrease"
            },
            mescalina: {
                status: "Low Risk & Decrease"
            },
            dox: {
                status: "Low Risk & Decrease",
                note: "Drinking on stimulants is risky because the sedative effects of the alcool are  reduced, and these are what the body uses to gauge drunkenness. This typically leads to excessive drinking with greatly reduced inhibitions, high risk of liver damage and increased dehydration. They will also  allow you to drink past a point where you might normally pass out, increasing the risk."
            },
            nbomes: {
                status: "Low Risk & Decrease"
            },
            "2c-x": {
                status: "Low Risk & Decrease"
            },
            "2c-t-x": {
                status: "Low Risk & Decrease",
                note: "Both these classes of compound can interact unpredictably. Caution should be exercised."
            },
            amt: {
                status: "Caution",
                note: "aMT has a broad mechanism of action in the brain and so does alcool so the combination can be unpredictable"
            },
            "5-meo-xxt": {
                status: "Low Risk & Decrease"
            },
            cannabis: {
                status: "Baixo risco e Sinergia",
                note: "In excess, this combination can cause nausea."
            },
            ketamina: {
                status: "Dangerous",
                note: "Both substances cause ataxia and bring a very high risk of vomiting and unconsciousness. If the user falls unconscious while under the influence there is a severe risk of vomit aspiration if they are not placed in the recovery position."
            },
            mxe: {
                status: "Dangerous",
                note: "There is a high risk of memory loss, vomiting and severe ataxia from this combination."
            },
            dxm: {
                status: "Dangerous",
                note: "Both substances potentiate the ataxia and sedation caused by the other and can lead to unexpected loss of consciousness at high doses. Place affected patients in the recovery position to prevent vomit aspiration from excess. Additionally CNS depression can lead to difficulty breathing. Avoid on anything higher than 1st plateau."
            },
            pcp: {
                status: "Unsafe",
                note: "Details of this combination are not well understood but PCP generally interacts in an unpredictable manner."
            },
            nitrous: {
                status: "Caution",
                note: "Both substances potentiate the ataxia and sedation caused by the other and can lead to unexpected loss of consciousness at high doses. While unconscious, vomit aspiration is a risk if not placed in the recovery position. Memory blackouts are likely."
            },
            amphetamines: {
                status: "Caution",
                note: "Drinking on stimulants is risky because the sedative effects of the alcool are reduced, and these are what the body uses to gauge drunkenness. This typically leads to excessive drinking with greatly reduced inhibitions, high risk of liver damage and increased dehydration. They will also allow you to drink past a point where you might normally pass out, increasing the risk. If you do decide to do this then you should set a limit of how much you will drink each hour and stick to it, bearing in mind that you will feel the alcool and the stimulant less. Extended release formulations may severely impede sleep, further worsening the hangover."
            },
            mdma: {
                status: "Caution",
                note: "Both MDMA and alcool cause dehydration. Approach this combination with caution, moderation and sufficient hydration. More than a small amount of alcool will dull the euphoria of MDMA"
            },
            cocaine: {
                status: "Unsafe",
                note: "Drinking on stimulants is risky because the sedative effects of the alcool are reduced, and these are what the body uses to gauge drunkenness. This typically leads to excessive drinking with greatly reduced inhibitions, high risk of liver damage and increased dehydration. They will also allow you to drink past a point where you might normally pass out, increasing the risk. If you do decide to do this then you should set a limit of how much you will drink each hour and stick to it, bearing in mind that you will feel the alcool less. Cocaine is potentiated somewhat by alcool because of the formation of cocaethylene."
            },
            caffeine: {
                status: "Baixo risco sem sinergia"
            },
            "ghb/gbl": {
                status: "Dangerous",
                note: "Even in very low doses this combination rapidly leads to memory loss, severe ataxia and unconsciousness. There is a high risk of vomit aspiration while unconscious."
            },
            opioids: {
                status: "Dangerous",
                note: "Both substances potentiate the ataxia and sedation caused by the other and can lead to unexpected loss of consciousness at high doses. Place affected patients in the recovery position to prevent vomit aspiration from excess. Memory blackouts are likely"
            },
            tramadol: {
                status: "Dangerous",
                note: "Heavy CNS depressants, risk of seizures. Both substances potentiate the ataxia and sedation caused by the other and can lead to unexpected loss of consciousness at high doses. Place affected patients in the recovery position to prevent vomit aspiration from excess. Memory blackouts are likely."
            },
            benzodiazepines: {
                status: "Dangerous",
                note: "Ethanol ingestion may potentiate the CNS effects of many benzodiazepines. The two substances potentiate each other strongly and unpredictably, very rapidly leading to unconsciousness. While unconscious, vomit aspiration is a risk if not placed in the recovery position. Blacking out and memory loss is almost certain."
            },
            maois: {
                status: "Unsafe",
                note: "Tyramine found in many alcoolic beverages can have dangerous reactions with MAOIs, causing an increase in blood pressure."
            },
            ssris: {
                status: "Caution",
                note: "alcool may potentiate some of the pharmacologic effects of CNS-active agents. Use in combination may result in additive central nervous system depression and/or impairment of judgment, thinking, and  psychomotor skills."
            }
        },
        "ghb/gbl": {
            cogumelos: {
                status: "Low Risk & Decrease"
            },
            lsd: {
                status: "Low Risk & Decrease"
            },
            dmt: {
                status: "Low Risk & Decrease"
            },
            mescalina: {
                status: "Low Risk & Decrease"
            },
            dox: {
                status: "Low Risk & Decrease"
            },
            nbomes: {
                status: "Low Risk & Decrease"
            },
            "2c-x": {
                status: "Low Risk & Decrease"
            },
            "2c-t-x": {
                status: "Low Risk & Decrease"
            },
            amt: {
                status: "Low Risk & Decrease"
            },
            "5-meo-xxt": {
                status: "Low Risk & Decrease"
            },
            cannabis: {
                status: "Baixo risco e Sinergia"
            },
            ketamina: {
                status: "Dangerous",
                note: "Both substances cause ataxia and bring a risk of vomiting and unconsciousness. If the user falls unconscious while under the influence there is a severe risk of vomit aspiration if they are not placed in the recovery position."
            },
            mxe: {
                status: "Dangerous",
                note: "Both substances cause ataxia and bring a risk of vomiting and unconsciousness. If the patient falls unconscious while under the influence there is a severe risk of vomit aspiration if they are not placed in the recovery position."
            },
            dxm: {
                status: "Dangerous",
                note: "Both substances cause ataxia and bring a risk of vomiting and unconsciousness. If the patient falls unconscious while under the influence there is a severe risk of vomit aspiration if they are not placed in the recovery position. This combination is hard to predict"
            },
            pcp: {
                status: "Dangerous",
                note: "Details of this combination are not well understood but PCP generally interacts in an unpredictable manner."
            },
            nitrous: {
                status: "Caution",
                note: "Both substances potentiate the ataxia and sedation caused by the other and can lead to unexpected loss of consciousness at high doses. While unconscious, vomit aspiration is a risk if not placed in the recovery position. Memory blackouts are likely."
            },
            amphetamines: {
                status: "Caution",
                note: "Stimulants increase respiration rate allowing a higher dose of sedatives. If the stimulant wears off first then the opiate may overcome the patient and cause respiratory arrest."
            },
            mdma: {
                status: "Caution",
                note: "Large amounts of GHB/GBL may overwhelm the effects of MDMA on the comedown."
            },
            cocaine: {
                status: "Caution",
                note: "Stimulants increase respiration rate allowing a higher dose of sedatives. If the stimulant wears off first then the opiate may overcome the patient and cause respiratory arrest. Likewise the G can wear off and leave a dangerous concentration of cocaine behind"
            },
            caffeine: {
                status: "Baixo risco sem sinergia"
            },
            alcool: {
                status: "Dangerous",
                note: "Even in very low doses this combination rapidly leads to memory loss, severe ataxia and unconsciousness. There is a high risk of vomit aspiration while unconscious."
            },
            opioids: {
                status: "Dangerous",
                note: "The two substances potentiate each other strongly and unpredictably, very rapidly leading to unconsciousness. While unconscious, vomit aspiration is a risk if not placed in the recovery position"
            },
            tramadol: {
                status: "Dangerous",
                note: "The sedative effects of this combination can lead to dangerous respiratory depression."
            },
            benzodiazepines: {
                status: "Dangerous",
                note: "The two substances potentiate each other strongly and unpredictably, very rapidly leading to unconsciousness. While unconscious, vomit aspiration is a risk if not placed in the recovery position."
            },
            maois: {
                status: "Baixo risco e Sinergia"
            },
            ssris: {
                status: "Baixo risco sem sinergia"
            }
        },
        opioids: {
            cogumelos: {
                status: "Baixo risco sem sinergia"
            },
            lsd: {
                status: "Baixo risco sem sinergia"
            },
            dmt: {
                status: "Baixo risco sem sinergia"
            },
            mescalina: {
                status: "Baixo risco sem sinergia"
            },
            dox: {
                status: "Baixo risco sem sinergia",
                note: "No unexpected interactions."
            },
            nbomes: {
                status: "Baixo risco sem sinergia"
            },
            "2c-x": {
                status: "Baixo risco sem sinergia"
            },
            "2c-t-x": {
                status: "Baixo risco sem sinergia",
                note: "No expected interactions, some opioids have serotonin action, and could lead to Serotonin Syndrome or a seizure. These are pretty much only to Pentazocine, Methadone, Tramadol, Tapenatdol."
            },
            amt: {
                status: "Baixo risco sem sinergia",
                note: "No unexpected interactions"
            },
            "5-meo-xxt": {
                status: "Baixo risco sem sinergia"
            },
            cannabis: {
                status: "Baixo risco e Sinergia"
            },
            ketamina: {
                status: "Dangerous",
                note: "Both substances bring a risk of vomiting and unconsciousness. If the user falls unconscious while under the influence there is a severe risk of vomit aspiration if they are not placed in the recovery position."
            },
            mxe: {
                status: "Dangerous",
                note: "This combination can potentiate the effects of the opioid"
            },
            dxm: {
                status: "Dangerous",
                note: "CNS depression, difficult breathing, heart issues, hepatoxic, just very unsafe combination all around. Additionally if one takes dxm, their tolerance of opiates goes down slightly, thus causing additional synergistic effects."
            },
            pcp: {
                status: "Caution",
                note: "PCP can reduce opioid tolerance, increasing the risk of overdose"
            },
            nitrous: {
                status: "Caution",
                note: "Both substances potentiate the ataxia and sedation caused by the other and can lead to unexpected loss of consciousness at high doses. While unconscious, vomit aspiration is a risk if not placed in the recovery position. Memory blackouts are likely."
            },
            amphetamines: {
                status: "Caution",
                note: "Stimulants increase respiration rate allowing a higher dose of opiates. If the stimulant wears off first then the opiate may overcome the patient and cause respiratory arrest."
            },
            mdma: {
                status: "Baixo risco sem sinergia"
            },
            cocaine: {
                status: "Dangerous",
                note: "Stimulants increase respiration rate allowing a higher dose of opiates. If the stimulant wears off first then the opiate may overcome the patient and cause respiratory arrest."
            },
            caffeine: {
                status: "Baixo risco sem sinergia"
            },
            alcool: {
                status: "Dangerous",
                note: "Both substances potentiate the ataxia and sedation caused by the other and can lead to unexpected loss of consciousness at high doses. Place affected patients in the recovery position to prevent vomit aspiration from excess. Memory blackouts are likely"
            },
            "ghb/gbl": {
                status: "Dangerous",
                note: "The two substances potentiate each other strongly and unpredictably, very rapidly leading to unconsciousness. While unconscious, vomit aspiration is a risk if not placed in the recovery position"
            },
            tramadol: {
                status: "Dangerous",
                note: "Concomitant use of tramadol increases the seizure risk in patients taking other opioids. These agents are often individually epileptogenic and may have additive effects on seizure threshold during coadministration. Central nervous system- and/or respiratory-depressant effects may be additively or synergistically present"
            },
            benzodiazepines: {
                status: "Dangerous",
                note: "Central nervous system and/or respiratory-depressant effects may be additively or synergistically present. The two substances potentiate each other strongly and unpredictably, very rapidly leading to unconsciousness. While unconscious, vomit aspiration is a risk if not placed in the recovery position Blackouts/memory loss likely"
            },
            maois: {
                status: "Caution",
                note: "Coadministration of monoamine oxidase inhibitors (MAOIs) with certain opioids has been associated with rare reports of severe and fatal adverse reactions. There appear to be two types of interaction, an excitatory and a depressive one. Symptoms of the excitatory reaction may include agitation, headache, diaphoresis, hyperpyrexia, flushing, shivering, myoclonus, rigidity, tremor, diarrhea, hypertension, tachycardia, seizures, and coma. Death has occurred in some cases."
            },
            ssris: {
                status: "Baixo risco sem sinergia",
                note: "There have been very infrequent reports of a risk of serotonin syndrome with this combination, though this should not be a practical concern."
            }
        },
        tramadol: {
            cogumelos: {
                status: "Unsafe",
                note: "Tramadol is well known to lower seizure threshold and psychedelics also cause occasional seizures."
            },
            lsd: {
                status: "Unsafe",
                note: "Tramadol is well known to lower seizure threshold and psychedelics also cause occasional seizures."
            },
            dmt: {
                status: "Unsafe",
                note: "Tramadol is well known to lower seizure threshold and psychedelics also cause occasional seizures."
            },
            mescalina: {
                status: "Unsafe",
                note: "This combination can cause seizures due to the lowering of the threshold by tramadol and the potential of mescalina to cause seziures."
            },
            dox: {
                status: "Unsafe",
                note: "Tramadol is well known to lower seizure threshold and psychedelics also cause occasional seizures."
            },
            nbomes: {
                status: "Unsafe",
                note: "Tramadol is well known to lower seizure threshold and NBOMes have also shown a tendency to cause severe seizures"
            },
            "2c-x": {
                status: "Unsafe",
                note: "Tramadol is well known to lower seizure threshold and psychedelics raise the risk of seizures."
            },
            "2c-t-x": {
                status: "Unsafe"
            },
            amt: {
                status: "Dangerous"
            },
            "5-meo-xxt": {
                status: "Unsafe"
            },
            cannabis: {
                status: "Baixo risco e Sinergia"
            },
            ketamina: {
                status: "Dangerous"
            },
            mxe: {
                status: "Dangerous"
            },
            dxm: {
                status: "Dangerous"
            },
            pcp: {
                status: "Dangerous"
            },
            nitrous: {
                status: "Caution",
                note: "Both substances potentiate the ataxia and sedation caused by the other and can lead to unexpected loss of consciousness at high doses. While unconscious, vomit aspiration is a risk if not placed in the recovery position. Memory blackouts are likely."
            },
            amphetamines: {
                status: "Dangerous",
                note: "Tramadol and stimulants both increase the risk of seizures."
            },
            mdma: {
                status: "Dangerous",
                note: "Tramadol and stimulants both increase the risk of seizures."
            },
            cocaine: {
                status: "Dangerous",
                note: "Tramadol and stimulants both increase the risk of seizures."
            },
            caffeine: {
                status: "Baixo risco sem sinergia"
            },
            alcool: {
                status: "Dangerous",
                note: "Heavy CNS depressants, risk of seizures. Both substances potentiate the ataxia and sedation caused by the other and can lead to unexpected loss of consciousness at high doses. Place affected patients in the recovery position to prevent vomit aspiration from excess. Memory blackouts are likely."
            },
            "ghb/gbl": {
                status: "Dangerous",
                note: "The sedative effects of this combination can lead to dangerous respiratory depression."
            },
            opioids: {
                status: "Dangerous",
                note: "Concomitant use of tramadol increases the seizure risk in patients taking other opioids. These agents are often individually epileptogenic and may have additive effects on seizure threshold during coadministration. Central nervous system- and/or respiratory-depressant effects may be additively or synergistically present"
            },
            benzodiazepines: {
                status: "Dangerous",
                note: "Central nervous system- and/or respiratory-depressant effects may be additively or synergistically present. Vomit aspiration a risk when passed out, lay down in recovery position if ingested."
            },
            maois: {
                status: "Dangerous"
            },
            ssris: {
                status: "Dangerous"
            }
        },
        benzodiazepines: {
            cogumelos: {
                status: "Low Risk & Decrease"
            },
            lsd: {
                status: "Low Risk & Decrease"
            },
            dmt: {
                status: "Low Risk & Decrease"
            },
            mescalina: {
                status: "Low Risk & Decrease"
            },
            dox: {
                status: "Low Risk & Decrease"
            },
            nbomes: {
                status: "Low Risk & Decrease"
            },
            "2c-x": {
                status: "Low Risk & Decrease"
            },
            "2c-t-x": {
                status: "Low Risk & Decrease"
            },
            amt: {
                status: "Low Risk & Decrease"
            },
            "5-meo-xxt": {
                status: "Low Risk & Decrease"
            },
            cannabis: {
                status: "Low Risk & Decrease"
            },
            ketamina: {
                status: "Caution",
                note: "Both substances potentiate the ataxia and sedation caused by the other and can lead to unexpected loss of consciousness at high doses. While unconscious, vomit aspiration is a risk if not placed in the recovery position."
            },
            mxe: {
                status: "Caution",
                note: "Both substances potentiate the ataxia and sedation caused by the other and can lead to unexpected loss of consciousness at high doses. Place affected patients in the recovery position to prevent vomit aspiration from excess."
            },
            dxm: {
                status: "Caution",
                note: "Small doses of benzos can end a bad trip, but both substances potentiate the ataxia and sedation caused by the other and this can lead to unexpected loss of consciousness at high doses. While unconscious, vomit aspiration is a risk if not placed in the recovery position."
            },
            pcp: {
                status: "Unsafe",
                note: "Both substances potentiate the ataxia and sedation caused by the other and can lead to unexpected loss of consciousness at high doses. While unconscious, vomit aspiration is a risk if not placed in the recovery position. Memory blackouts are likely"
            },
            nitrous: {
                status: "Low Risk & Decrease"
            },
            amphetamines: {
                status: "Low Risk & Decrease",
                note: "Both can dull each other's effects, so if one wears off before the other it's possible to overdose due to the lack of counteraction"
            },
            mdma: {
                status: "Low Risk & Decrease"
            },
            cocaine: {
                status: "Low Risk & Decrease"
            },
            caffeine: {
                status: "Low Risk & Decrease"
            },
            alcool: {
                status: "Dangerous",
                note: "Ethanol ingestion may potentiate the CNS effects of many benzodiazepines. The two substances potentiate each other strongly and unpredictably, very rapidly leading to unconsciousness. While unconscious, vomit aspiration is a risk if not placed in the recovery position. Blacking out and memory loss is almost certain."
            },
            "ghb/gbl": {
                status: "Dangerous",
                note: "The two substances potentiate each other strongly and unpredictably, very rapidly leading to unconsciousness. While unconscious, vomit aspiration is a risk if not placed in the recovery position."
            },
            opioids: {
                status: "Dangerous",
                note: "Central nervous system and/or respiratory-depressant effects may be additively or synergistically present. The two substances potentiate each other strongly and unpredictably, very rapidly leading to unconsciousness. While unconscious, vomit aspiration is a risk if not placed in the recovery position Blackouts/memory loss likely"
            },
            tramadol: {
                status: "Dangerous",
                note: "Central nervous system- and/or respiratory-depressant effects may be additively or synergistically present. Vomit aspiration a risk when passed out, lay down in recovery position if ingested."
            },
            maois: {
                status: "Baixo risco e Sinergia"
            },
            ssris: {
                status: "Baixo risco sem sinergia"
            }
        },
        maois: {
            cogumelos: {
                status: "Baixo risco e Sinergia"
            },
            lsd: {
                status: "Low Risk & Decrease"
            },
            dmt: {
                status: "Baixo risco e Sinergia"
            },
            mescalina: {
                status: "Caution"
            },
            dox: {
                status: "Caution",
                note: "MAO-B inhibitors can increase the potency and duration of phenethylamines unpredictably"
            },
            nbomes: {
                status: "Caution",
                note: "MAO-B inhibitors can increase the potency and duration of phenethylamines unpredictably"
            },
            "2c-x": {
                status: "Caution",
                note: "MAO-B inhibitors can increase the potency and duration of phenethylamines unpredictably"
            },
            "2c-t-x": {
                status: "Caution",
                note: "MAO-B inhibitors can increase the potency and duration of phenethylamines unpredictably, which could be dangerous given the unpredictability of the 2C-T-x series"
            },
            amt: {
                status: "Dangerous",
                note: "aMT is an MAOI on its own. Using enzyme inhibitors can greatly reduce predictability of effects."
            },
            "5-meo-xxt": {
                status: "Dangerous"
            },
            cannabis: {
                status: "Baixo risco e Sinergia"
            },
            ketamina: {
                status: "Caution",
                note: "MAO-B inhibitors appear to increase the potency of ketamina. MAO-A inhbitors have some negative reports associated with the combination but there isn't much information available"
            },
            mxe: {
                status: "Unsafe",
                note: "MAO-B inhibitors appear to increase the potency of MXE. MAO-A inhbitors have some negative reports associated with the combination but there isn't much information available"
            },
            dxm: {
                status: "Dangerous",
                note: "High risk of serotonin syndrome"
            },
            pcp: {
                status: "Dangerous",
                note: "This combination is very poorly explored"
            },
            nitrous: {
                status: "Baixo risco sem sinergia"
            },
            amphetamines: {
                status: "Dangerous",
                note: "MAO-B inhibitors can increase the potency and duration of phenethylamines unpredictably. MAO-A inhibitors with amphetamine can lead to hypertensive crises."
            },
            mdma: {
                status: "Dangerous",
                note: "MAO-B inhibitors can increase the potency and duration of  phenethylamines unpredictably. MAO-A inhibitors with MDMA will lead to hypertensive crises."
            },
            cocaine: {
                status: "Dangerous",
                note: "This combination is poorly explored"
            },
            caffeine: {
                status: "Baixo risco sem sinergia"
            },
            alcool: {
                status: "Unsafe",
                note: "Tyramine found in many alcoolic beverages can have dangerous reactions with MAOIs, causing an increase in blood pressure."
            },
            "ghb/gbl": {
                status: "Baixo risco e Sinergia"
            },
            opioids: {
                status: "Caution",
                note: "Coadministration of monoamine oxidase inhibitors (MAOIs) with certain opioids has been associated with rare reports of severe and fatal adverse reactions. There appear to be two types of interaction, an excitatory and a depressive one. Symptoms of the excitatory reaction may include agitation, headache, diaphoresis, hyperpyrexia, flushing, shivering, myoclonus, rigidity, tremor, diarrhea, hypertension, tachycardia, seizures, and coma. Death has occurred in some cases."
            },
            tramadol: {
                status: "Dangerous"
            },
            benzodiazepines: {
                status: "Baixo risco e Sinergia"
            },
            ssris: {
                status: "Dangerous"
            }
        },
        ssris: {
            cogumelos: {
                status: "Low Risk & Decrease"
            },
            lsd: {
                status: "Low Risk & Decrease"
            },
            dmt: {
                status: "Low Risk & Decrease"
            },
            mescalina: {
                status: "Low Risk & Decrease"
            },
            dox: {
                status: "Low Risk & Decrease"
            },
            nbomes: {
                status: "Low Risk & Decrease"
            },
            "2c-x": {
                status: "Low Risk & Decrease"
            },
            "2c-t-x": {
                status: "Low Risk & Decrease"
            },
            amt: {
                status: "Dangerous"
            },
            "5-meo-xxt": {
                status: "Low Risk & Decrease"
            },
            cannabis: {
                status: "Baixo risco sem sinergia"
            },
            ketamina: {
                status: "Baixo risco sem sinergia"
            },
            mxe: {
                status: "Caution",
                note: "Depending on the SSRI this combination can be unpredictable"
            },
            dxm: {
                status: "Dangerous",
                note: "High risk of serotonin syndrome."
            },
            pcp: {
                status: "Unsafe",
                note: "Details of this combination are not well understood but PCP generally interacts in an unpredictable manner."
            },
            nitrous: {
                status: "Baixo risco sem sinergia"
            },
            amphetamines: {
                status: "Baixo risco sem sinergia"
            },
            mdma: {
                status: "Low Risk & Decrease"
            },
            cocaine: {
                status: "Baixo risco sem sinergia",
                note: "May reduce each others' effectiveness. Cocaine can reduce mental stability and therefore exacerbate conditions which SSRIs are used to treat."
            },
            caffeine: {
                status: "Baixo risco sem sinergia"
            },
            alcool: {
                status: "Caution",
                note: "alcool may potentiate some of the pharmacologic effects of CNS-active agents. Use in combination may result in additive central nervous system depression and/or impairment of judgment, thinking, and  psychomotor skills."
            },
            "ghb/gbl": {
                status: "Baixo risco sem sinergia"
            },
            opioids: {
                status: "Baixo risco sem sinergia",
                note: "There have been very infrequent reports of a risk of serotonin syndrome with this combination, though this should not be a practical concern."
            },
            tramadol: {
                status: "Dangerous"
            },
            benzodiazepines: {
                status: "Baixo risco sem sinergia"
            },
            maois: {
                status: "Dangerous"
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    t.a = "combos"
}, function(e, t, n) {
    "use strict";
    var o = n(346);
    n.d(t, "a", function() {
        return o.a
    })
}, function(e, t, n) {
    "use strict";
    var o = n(0),
        r = n.n(o),
        a = n(19),
        i = n(24),
        s = n.n(i),
        u = n(347),
        c = n(349),
        l = n(358),
        f = n(360),
        d = n(361),
        p = n(20),
        h = (n(42), s()(function(e) {
            return r.a.createElement(u.a, {
                key: e.id,
                substance: e
            })
        })),
        y = function(e) {
            var t = e.substances;
            e.selected;
            return r.a.createElement("div", null, r.a.createElement(l.a, null), r.a.createElement(d.a, null), r.a.createElement(c.a, null), r.a.createElement("h2", {
                style: {
                    marginTop: 40,
                    marginBottom: 30
                }
            }, "Choose substances:"), h(t), r.a.createElement(f.a, null))
        },
        m = function(e) {
            return {
                substances: Object(p.g)(e),
                selected: Object(p.e)(e)
            }
        };
    t.a = Object(a.b)(m)(y)
}, function(e, t, n) {
    "use strict";
    var o = n(0),
        r = n.n(o),
        a = n(27),
        i = n(19),
        s = (n(42), n(20)),
        u = n(348),
        c = (n.n(u), function(e) {
            var t = e.substance,
                n = e.isSelected,
                o = e.toggleSelected,
                a = t.id,
                i = t.name;
            return r.a.createElement("button", {
                className: "Substance " + (n ? "Substance-selected" : ""),
                onClick: o.bind(null, a)
            }, i)
        }),
        l = function(e, t) {
            return {
                isSelected: Object(s.d)(e, t.substance.id)
            }
        },
        f = function(e) {
            return Object(a.a)({
                toggleSelected: s.h
            }, e)
        };
    t.a = Object(i.b)(l, f)(c)
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    var o = n(0),
        r = n.n(o),
        a = n(19),
        i = n(24),
        s = n.n(i),
        u = n(20),
        c = n(350),
        l = s()(function(e) {
            return r.a.createElement(c.a, {
                key: e.join(","),
                firstId: e[0],
                secondId: e[1]
            })
        }),
        f = function(e) {
            var t = (e.selected, e.combos);
            return r.a.createElement("div", null, l(t))
        },
        d = function(e) {
            return {
                selected: Object(u.e)(e),
                combos: Object(u.b)(e)
            }
        };
    t.a = Object(a.b)(d)(f)
}, function(e, t, n) {
    "use strict";
    var o = n(0),
        r = n.n(o),
        a = n(19),
        i = n(135),
        s = (n.n(i), n(136)),
        u = n.n(s),
        c = n(20),
        l = (n(25), n(42), n(76)),
        f = function(e) {
            var t = e.first,
                n = e.second,
                o = (e.firstId, e.secondId, e.interaction);
            e.name, o.interaction;
            return r.a.createElement("div", null, r.a.createElement("h3", null, t.name, " + ", n.name, " =", " ", r.a.createElement(l.a, {
                interaction: o.interaction
            }), " ", o.status, " ", o.description), u()(o.note) ? null : r.a.createElement("p", null, o.note))
        },
        d = function(e, t) {
            var n = t.firstId,
                o = t.secondId;
            return {
                interaction: Object(c.c)([n, o]),
                first: Object(c.f)(n),
                second: Object(c.f)(o)
            }
        };
    t.a = Object(a.b)(d)(f)
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        },
        a = n(0),
        i = o(a),
        s = n(13),
        u = o(s),
        c = function(e) {
            return i.default.createElement(u.default, r({
                viewBox: "0 0 40 40"
            }, e), i.default.createElement("g", null, i.default.createElement("path", {
                d: "m37.5 21.7q0 1.1-0.9 2l-1.6 1.7q-0.9 0.8-2.1 0.8-1.2 0-2-0.8l-6.5-6.6v15.7q0 1.2-0.9 1.9t-2 0.7h-2.9q-1.1 0-2-0.7t-0.8-1.9v-15.7l-6.6 6.6q-0.8 0.8-2 0.8t-2-0.8l-1.7-1.7q-0.8-0.9-0.8-2 0-1.2 0.8-2.1l14.6-14.5q0.7-0.8 2-0.8 1.2 0 2 0.8l14.5 14.5q0.9 0.9 0.9 2.1z"
            })))
        };
    t.default = c, e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        },
        a = n(0),
        i = o(a),
        s = n(13),
        u = o(s),
        c = function(e) {
            return i.default.createElement(u.default, r({
                viewBox: "0 0 40 40"
            }, e), i.default.createElement("g", null, i.default.createElement("path", {
                d: "m25.9 20q0 2.4-1.7 4t-4.1 1.7-4-1.7-1.7-4 1.7-4 4-1.7 4.1 1.7 1.7 4z m-5.8-12.1q-3.3 0-6.1 1.6t-4.4 4.4-1.6 6.1 1.6 6.1 4.4 4.4 6.1 1.6 6.1-1.6 4.5-4.4 1.6-6.1-1.6-6.1-4.5-4.4-6.1-1.6z m17.2 12.1q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"
            })))
        };
    t.default = c, e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        },
        a = n(0),
        i = o(a),
        s = n(13),
        u = o(s),
        c = function(e) {
            return i.default.createElement(u.default, r({
                viewBox: "0 0 40 40"
            }, e), i.default.createElement("g", null, i.default.createElement("path", {
                d: "m37.5 18.6q0 1.2-0.9 2l-14.5 14.5q-0.9 0.9-2 0.9-1.2 0-2-0.9l-14.6-14.5q-0.8-0.8-0.8-2 0-1.2 0.8-2.1l1.7-1.6q0.9-0.9 2-0.9 1.2 0 2 0.9l6.6 6.5v-15.7q0-1.1 0.8-2t2-0.8h2.9q1.2 0 2 0.8t0.9 2v15.7l6.5-6.5q0.8-0.9 2-0.9 1.2 0 2.1 0.9l1.6 1.6q0.9 0.9 0.9 2.1z"
            })))
        };
    t.default = c, e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        },
        a = n(0),
        i = o(a),
        s = n(13),
        u = o(s),
        c = function(e) {
            return i.default.createElement(u.default, r({
                viewBox: "0 0 40 40"
            }, e), i.default.createElement("g", null, i.default.createElement("path", {
                d: "m22.9 30.7v-4.2q0-0.4-0.3-0.6t-0.5-0.2h-4.2q-0.3 0-0.5 0.2t-0.3 0.6v4.2q0 0.3 0.3 0.5t0.5 0.2h4.2q0.3 0 0.5-0.2t0.3-0.5z m-0.1-8.4l0.4-10.2q0-0.3-0.2-0.4-0.3-0.3-0.5-0.3h-5q-0.2 0-0.5 0.3-0.2 0.1-0.2 0.4l0.4 10.2q0 0.3 0.2 0.4t0.5 0.2h4.2q0.3 0 0.5-0.2t0.2-0.4z m-0.3-20.8l17.1 31.4q0.8 1.4 0 2.8-0.4 0.7-1 1.1t-1.5 0.3h-34.2q-0.8 0-1.5-0.3t-1-1.1q-0.8-1.4 0-2.8l17.1-31.4q0.4-0.7 1.1-1.1t1.4-0.4 1.4 0.4 1.1 1.1z"
            })))
        };
    t.default = c, e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        },
        a = n(0),
        i = o(a),
        s = n(13),
        u = o(s),
        c = function(e) {
            return i.default.createElement(u.default, r({
                viewBox: "0 0 40 40"
            }, e), i.default.createElement("g", null, i.default.createElement("path", {
                d: "m28.6 22.9h6.8q-0.1 0.1-0.2 0.2t-0.2 0.2l-0.1 0-13.9 13.4q-0.4 0.4-1 0.4t-1-0.4l-13.9-13.4q-0.1 0-0.5-0.4h8.3q0.4 0 0.8-0.3t0.5-0.8l1.6-6.3 4.2 14.9q0.2 0.4 0.6 0.7t0.8 0.3q0.5 0 0.9-0.3t0.5-0.7l3.2-10.8 1.3 2.5q0.4 0.8 1.3 0.8z m11.4-9.6q0 3.2-2.3 6.7h-8.2l-2.5-4.9q-0.2-0.4-0.6-0.6t-0.8-0.2q-1 0.1-1.2 1l-2.9 9.6-4.4-15.3q-0.1-0.4-0.5-0.7t-0.9-0.3-0.9 0.3-0.5 0.7l-2.6 10.4h-9.4q-2.3-3.5-2.3-6.7 0-4.9 2.8-7.7t7.9-2.7q1.4 0 2.8 0.4t2.7 1.3 2.1 1.6 1.7 1.5q0.8-0.8 1.7-1.5t2.1-1.6 2.7-1.3 2.8-0.4q5 0 7.9 2.7t2.8 7.7z"
            })))
        };
    t.default = c, e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        },
        a = n(0),
        i = o(a),
        s = n(13),
        u = o(s),
        c = function(e) {
            return i.default.createElement(u.default, r({
                viewBox: "0 0 40 40"
            }, e), i.default.createElement("g", null, i.default.createElement("path", {
                d: "m28.6 25q0-0.5-0.4-1l-4-4 4-4q0.4-0.5 0.4-1 0-0.6-0.4-1.1l-2-2q-0.4-0.4-1-0.4-0.6 0-1 0.4l-4.1 4.1-4-4.1q-0.4-0.4-1-0.4-0.6 0-1 0.4l-2 2q-0.5 0.5-0.5 1.1 0 0.5 0.5 1l4 4-4 4q-0.5 0.5-0.5 1 0 0.7 0.5 1.1l2 2q0.4 0.4 1 0.4 0.6 0 1-0.4l4-4.1 4.1 4.1q0.4 0.4 1 0.4 0.6 0 1-0.4l2-2q0.4-0.4 0.4-1z m8.7-5q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"
            })))
        };
    t.default = c, e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        },
        a = n(0),
        i = o(a),
        s = n(13),
        u = o(s),
        c = function(e) {
            return i.default.createElement(u.default, r({
                viewBox: "0 0 40 40"
            }, e), i.default.createElement("g", null, i.default.createElement("path", {
                d: "m23.2 28v5.4q0 0.4-0.3 0.6t-0.6 0.3h-5.3q-0.4 0-0.7-0.3t-0.2-0.6v-5.4q0-0.3 0.2-0.6t0.7-0.3h5.3q0.4 0 0.6 0.3t0.3 0.6z m7.1-13.4q0 1.2-0.4 2.3t-0.8 1.7-1.2 1.3-1.3 1-1.3 0.8q-0.9 0.5-1.6 1.4t-0.6 1.5q0 0.4-0.2 0.8t-0.7 0.3h-5.3q-0.4 0-0.6-0.4t-0.2-0.8v-1q0-1.9 1.4-3.5t3.2-2.5q1.3-0.6 1.9-1.2t0.5-1.7q0-0.9-1-1.7t-2.4-0.7q-1.4 0-2.4 0.7-0.8 0.5-2.4 2.5-0.3 0.4-0.7 0.4-0.2 0-0.5-0.2l-3.7-2.8q-0.3-0.2-0.3-0.5t0.1-0.6q3.5-6 10.3-6 1.8 0 3.6 0.7t3.3 1.9 2.4 2.8 0.9 3.5z"
            })))
        };
    t.default = c, e.exports = t.default
}, function(e, t, n) {
    "use strict";
    var o = n(0),
        r = n.n(o),
        a = n(24),
        i = n.n(a),
        s = n(359),
        u = (n.n(s), n(76)),
        c = n(25),
        l = i()(function(e) {
            var t = (e.id, e.name);
            e.description;
            return r.a.createElement("div", {
                className: "FlexItem",
                key: e.id
            }, r.a.createElement(u.a, {
                interaction: e.id
            }), " ", t)
        }),
        f = function() {
            return r.a.createElement("div", {
                className: "FlexBox"
            }, l(c.b), r.a.createElement("div", {
                style: {
                    clear: "both"
                }
            }))
        };
    t.a = f
}, function(e, t) {}, function(e, t, n) {
    "use strict";
    var o = n(0),
        r = n.n(o),
        a = function() {
            return r.a.createElement("div", {
                style: {
                    marginTop: 40
                }
            }, r.a.createElement("p", null, "The app, like the  combo chart, is meant as a quick reference guide and additional research ", r.a.createElement("strong", null, "MUST"), " always be done. For additional information check out our ", r.a.createElement("a", {
                href: "http://drugs.tripsit.me/",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Factsheet.")), r.a.createElement("p", null, "For re-use and attribution info see ", r.a.createElement("a", {
                href: "https://wiki.tripsit.me/wiki/Drug_combinations#Use_.26_Attribution",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "here"), " "), r.a.createElement("a", {
                href: "http://tripsit.me/contact-us/",
                target: "_blank",
                rel: "noopener noreferrer"
            }, "Notice something wrong with this page? Let us know!"))
        };
    t.a = a
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
    }

    function a(e, t) {
        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var i = n(0),
        s = n.n(i),
        u = n(24),
        c = n.n(u),
        l = n(362),
        f = (n.n(l), n(76)),
        d = n(25),
        p = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        h = c()(function(e) {
            var t = (e.id, e.name),
                n = e.description;
            return s.a.createElement("div", {
                className: "CategoriesItems",
                key: e.id
            }, s.a.createElement("p", null, s.a.createElement(f.a, {
                interaction: e.id
            }), " ", t, "   "), s.a.createElement("p", null, n))
        }),
        y = function(e) {
            function t(e) {
                o(this, t);
                var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    show: !1
                }, n
            }
            return a(t, e), p(t, [{
                key: "toggle",
                value: function() {
                    this.setState({
                        shown: !this.state.shown
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = {
                            display: this.state.shown ? "flex" : "none"
                        },
                        t = this.state.shown ? "Explanation Explanation-selected" : "Explanation";
                    return s.a.createElement("div", null, s.a.createElement("button", {
                        onClick: this.toggle.bind(this),
                        className: t
                    }, "Expandir explicação"), s.a.createElement("div", {
                        style: e,
                        className: "CategoriesFlex"
                    }, h(d.b), s.a.createElement("div", {
                        style: {
                            clear: "both"
                        }
                    })))
                }
            }]), t
        }(s.a.Component);
    t.a = y
}, function(e, t) {}, function(e, t) {}, function(e, t, n) {
    "use strict";

    function o() {
        if ("serviceWorker" in navigator) {
            if (new URL("", window.location).origin !== window.location.origin) return;
            window.addEventListener("load", function() {
                var e = "/service-worker.js";
                i ? (a(e), navigator.serviceWorker.ready.then(function() {
                    console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")
                })) : r(e)
            })
        }
    }

    function r(e) {
        navigator.serviceWorker.register(e).then(function(e) {
            e.onupdatefound = function() {
                var t = e.installing;
                t.onstatechange = function() {
                    "installed" === t.state && (navigator.serviceWorker.controller ? console.log("New content is available; please refresh.") : console.log("Content is cached for offline use."))
                }
            }
        }).catch(function(e) {
            console.error("Error during service worker registration:", e)
        })
    }

    function a(e) {
        fetch(e).then(function(t) {
            404 === t.status || -1 === t.headers.get("content-type").indexOf("javascript") ? navigator.serviceWorker.ready.then(function(e) {
                e.unregister().then(function() {
                    window.location.reload()
                })
            }) : r(e)
        }).catch(function() {
            console.log("No internet connection found. App is running in offline mode.")
        })
    }
    t.a = o;
    var i = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))
}]);
//# sourceMappingURL=main.829f2588.js.map