function t(t) {
    for(var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)i[r - 1] = arguments[r];
    throw new Error("number" == typeof t ? "[MobX] minified error nr: " + t + (i.length ? " " + i.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + t);
}
function n() {
    return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : ti;
}
function i() {
    si || t("Proxy not available");
}
function r(t) {
    var n = !1;
    return function() {
        if (!n) return n = !0, t.apply(this, arguments);
    };
}
function e(t) {
    return "function" == typeof t;
}
function u(t) {
    switch(typeof t){
        case "string":
        case "symbol":
        case "number":
            return !0;
    }
    return !1;
}
function o(t) {
    return null !== t && "object" == typeof t;
}
function s(t) {
    if (!o(t)) return !1;
    var n = Object.getPrototypeOf(t);
    if (null == n) return !0;
    var i = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
    return "function" == typeof i && i.toString() === ai;
}
function a(t) {
    var n = null == t ? void 0 : t.constructor;
    return !!n && ("GeneratorFunction" === n.name || "GeneratorFunction" === n.displayName);
}
function f(t, n, i) {
    ri(t, n, {
        enumerable: !1,
        writable: !0,
        configurable: !0,
        value: i
    });
}
function c(t, n, i) {
    ri(t, n, {
        enumerable: !1,
        writable: !1,
        configurable: !0,
        value: i
    });
}
function h(t, n) {
    var i = "isMobX" + t;
    return n.prototype[i] = !0, function(t) {
        return o(t) && !0 === t[i];
    };
}
function l(t) {
    return t instanceof Map;
}
function v(t) {
    return t instanceof Set;
}
function d(t) {
    return null === t ? null : "object" == typeof t ? "" + t : t;
}
function b(t, n) {
    return ei.hasOwnProperty.call(t, n);
}
function y(t, n) {
    for(var i = 0; i < n.length; i++){
        var r = n[i];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, "symbol" == typeof (e = function(t) {
            if ("object" != typeof t || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
                var i = n.call(t, "string");
                if ("object" != typeof i) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        }(r.key)) ? e : String(e), r);
    }
    var e;
}
function p(t, n, i) {
    return n && y(t.prototype, n), i && y(t, i), Object.defineProperty(t, "prototype", {
        writable: !1
    }), t;
}
function m() {
    return (m = Object.assign ? Object.assign.bind() : function(t) {
        for(var n = 1; n < arguments.length; n++){
            var i = arguments[n];
            for(var r in i)Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
        }
        return t;
    }).apply(this, arguments);
}
function w(t, n) {
    var i, r;
    t.prototype = Object.create(n.prototype), t.prototype.constructor = t, i = t, r = n, (Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
        return t.__proto__ = n, t;
    })(i, r);
}
function O(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
}
function j(t, n) {
    (null == n || n > t.length) && (n = t.length);
    for(var i = 0, r = new Array(n); i < n; i++)r[i] = t[i];
    return r;
}
function g(t, n) {
    var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (i) return (i = i.call(t)).next.bind(i);
    if (Array.isArray(t) || (i = function(t) {
        if (t) {
            if ("string" == typeof t) return j(t, void 0);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? j(t, void 0) : void 0;
        }
    }(t)) || n && t && "number" == typeof t.length) {
        i && (t = i);
        var r = 0;
        return function() {
            return r >= t.length ? {
                done: !0
            } : {
                done: !1,
                value: t[r++]
            };
        };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _(t) {
    return Object.assign(function(n, i) {
        if (S(i)) return t.t(n, i);
        A(n, i, t);
    }, t);
}
function A(t, n, i) {
    b(t, vi) || f(t, vi, m({}, t[vi])), function(t) {
        return "override" === t.i;
    }(i) || (t[vi][n] = i);
}
function S(t) {
    return "object" == typeof t && "string" == typeof t.kind;
}
function x(t, n, i) {
    void 0 === n && (n = fi), void 0 === i && (i = fi);
    var r = new bi(t);
    return n !== fi && Kt(r, n), i !== fi && Pt(r, i), r;
}
function E(t, n, i) {
    return en(t) ? t : Array.isArray(t) ? Mi.array(t, {
        name: i
    }) : s(t) ? Mi.object(t, void 0, {
        name: i
    }) : l(t) ? Mi.map(t, {
        name: i
    }) : v(t) ? Mi.set(t, {
        name: i
    }) : "function" != typeof t || Tt(t) || Jt(t) ? t : a(t) ? fr(t) : er(i, t);
}
function M(t) {
    return t;
}
function R(t, n) {
    return {
        i: t,
        u: n,
        o: N,
        s: V,
        t: k
    };
}
function N(t, n, i, r) {
    var e;
    if (null != (e = this.u) && e.bound) return null === this.s(t, n, i, !1) ? 0 : 1;
    if (r === t.h) return null === this.s(t, n, i, !1) ? 0 : 2;
    if (Tt(i.value)) return 1;
    var u = T(t, this, n, i, !1);
    return ri(r, n, u), 2;
}
function V(t, n, i, r) {
    var e = T(t, this, n, i);
    return t.l(n, e, r);
}
function k(n, i) {
    var r = i.kind, e = i.name, u = i.addInitializer, o = this;
    if ("field" != r) {
        var s, a, f, c, h, l;
        if ("method" == r) return Tt(n) || (a = n, n = tt(null != (f = null == (c = o.u) ? void 0 : c.name) ? f : e.toString(), a, null != (h = null == (l = o.u) ? void 0 : l.autoAction) && h)), null != (s = this.u) && s.bound && u(function() {
            var t = this[e].bind(this);
            t.isMobxAction = !0, this[e] = t;
        }), n;
        t("Cannot apply '" + o.i + "' to '" + String(e) + "' (kind: " + r + "):\n'" + o.i + "' can only be used on properties with a function value.");
    } else u(function() {
        A(this, e, o);
    });
}
function T(t, n, i, r, e) {
    var u, o, s, a, f, c, h;
    void 0 === e && (e = $i.safeDescriptors);
    var l, v = r.value;
    return null != (u = n.u) && u.bound && (v = v.bind(null != (l = t.v) ? l : t.h)), {
        value: tt(null != (o = null == (s = n.u) ? void 0 : s.name) ? o : i.toString(), v, null != (a = null == (f = n.u) ? void 0 : f.autoAction) && a, null != (c = n.u) && c.bound ? null != (h = t.v) ? h : t.h : void 0),
        configurable: !e || t.p,
        enumerable: !1,
        writable: !e
    };
}
function C(t, n) {
    return {
        i: t,
        u: n,
        o: I,
        s: L,
        t: K
    };
}
function I(t, n, i, r) {
    var e;
    if (r === t.h) return null === this.s(t, n, i, !1) ? 0 : 2;
    if (null != (e = this.u) && e.bound && (!b(t.h, n) || !Jt(t.h[n])) && null === this.s(t, n, i, !1)) return 0;
    if (Jt(i.value)) return 1;
    var u = P(t, 0, 0, i, !1, !1);
    return ri(r, n, u), 2;
}
function L(t, n, i, r) {
    var e, u = P(t, 0, 0, i, null == (e = this.u) ? void 0 : e.bound);
    return t.l(n, u, r);
}
function K(t, n) {
    var i, r = n.name, e = n.addInitializer;
    return Jt(t) || (t = fr(t)), null != (i = this.u) && i.bound && e(function() {
        var t = this[r].bind(this);
        t.isMobXFlow = !0, this[r] = t;
    }), t;
}
function P(t, n, i, r, e, u) {
    void 0 === u && (u = $i.safeDescriptors);
    var o, s = r.value;
    return Jt(s) || (s = fr(s)), e && ((s = s.bind(null != (o = t.v) ? o : t.h)).isMobXFlow = !0), {
        value: s,
        configurable: !u || t.p,
        enumerable: !1,
        writable: !u
    };
}
function D(t, n) {
    return {
        i: t,
        u: n,
        o: B,
        s: G,
        t: W
    };
}
function B(t, n, i) {
    return null === this.s(t, n, i, !1) ? 0 : 1;
}
function G(t, n, i, r) {
    return t.m(n, m({}, this.u, {
        get: i.get,
        set: i.set
    }), r);
}
function W(t, n) {
    var i = this, r = n.name;
    return (0, n.addInitializer)(function() {
        var n = Pn(this)[di], e = m({}, i.u, {
            get: t,
            context: this
        });
        e.name || (e.name = "ObservableObject." + r.toString()), n.O.set(r, new Wi(e));
    }), function() {
        return this[di].j(r);
    };
}
function q(t, n) {
    return {
        i: t,
        u: n,
        o: F,
        s: H,
        t: U
    };
}
function F(t, n, i) {
    return null === this.s(t, n, i, !1) ? 0 : 1;
}
function H(t, n, i, r) {
    var e, u;
    return t.g(n, i.value, null != (e = null == (u = this.u) ? void 0 : u.enhancer) ? e : E, r);
}
function U(t, n) {
    function i(t, n) {
        var i, e, s = Pn(t)[di], a = new Pi(n, null != (i = null == (e = r.u) ? void 0 : e.enhancer) ? i : E, "ObservableObject." + u.toString(), !1);
        s.O.set(u, a), o.add(t);
    }
    var r = this, e = n.kind, u = n.name, o = new WeakSet;
    if ("accessor" == e) return {
        get: function() {
            return o.has(this) || i(this, t.get.call(this)), this[di].j(u);
        },
        set: function(t) {
            return o.has(this) || i(this, t), this[di]._(u, t);
        },
        init: function(t) {
            return o.has(this) || i(this, t), t;
        }
    };
}
function X(t) {
    return {
        i: "true",
        u: t,
        o: z,
        s: $,
        t: J
    };
}
function z(t, n, i, r) {
    var e, u, o, s;
    if (i.get) return Vi.o(t, n, i, r);
    if (i.set) {
        var f = tt(n.toString(), i.set);
        return r === t.h ? null === t.l(n, {
            configurable: !$i.safeDescriptors || t.p,
            set: f
        }) ? 0 : 2 : (ri(r, n, {
            configurable: !0,
            set: f
        }), 2);
    }
    if (r !== t.h && "function" == typeof i.value) return a(i.value) ? (null != (s = this.u) && s.autoBind ? fr.bound : fr).o(t, n, i, r) : (null != (o = this.u) && o.autoBind ? er.bound : er).o(t, n, i, r);
    var c, h = !1 === (null == (e = this.u) ? void 0 : e.deep) ? Mi.ref : Mi;
    return "function" == typeof i.value && null != (u = this.u) && u.autoBind && (i.value = i.value.bind(null != (c = t.v) ? c : t.h)), h.o(t, n, i, r);
}
function $(t, n, i, r) {
    var e, u, o;
    return i.get ? Vi.s(t, n, i, r) : i.set ? t.l(n, {
        configurable: !$i.safeDescriptors || t.p,
        set: tt(n.toString(), i.set)
    }, r) : ("function" == typeof i.value && null != (e = this.u) && e.autoBind && (i.value = i.value.bind(null != (o = t.v) ? o : t.h)), (!1 === (null == (u = this.u) ? void 0 : u.deep) ? Mi.ref : Mi).s(t, n, i, r));
}
function J() {
    t("'" + this.i + "' cannot be used as a decorator");
}
function Y(t) {
    return t || Oi;
}
function Q(t) {
    return !0 === t.deep ? E : !1 === t.deep ? M : (n = t.defaultDecorator) && null != (i = null == (r = n.u) ? void 0 : r.enhancer) ? i : E;
    var n, i, r;
}
function Z(t, n, i) {
    return S(n) ? ji.t(t, n) : u(n) ? void A(t, n, ji) : en(t) ? t : s(t) ? Mi.object(t, n, i) : Array.isArray(t) ? Mi.array(t, n) : l(t) ? Mi.map(t, n) : v(t) ? Mi.set(t, n) : "object" == typeof t && null !== t ? t : Mi.box(t, n);
}
function tt(t, n, i, r) {
    function e() {
        return nt(0, i, n, r || this, arguments);
    }
    return void 0 === i && (i = !1), e.isMobxAction = !0, e.toString = function() {
        return n.toString();
    }, Ii && (Li.value = t, ri(e, "name", Li)), e;
}
function nt(t, n, i, r, e) {
    var u = it(0, n);
    try {
        return i.apply(r, e);
    } catch (t) {
        throw u.A = t, t;
    } finally{
        rt(u);
    }
}
function it(t, n) {
    var i = $i.trackingDerivation, r = !n || !i;
    _t();
    var e = $i.allowStateChanges;
    r && (vt(), e = ut(!0));
    var u = {
        S: r,
        M: i,
        R: e,
        N: bt(!0),
        V: !1,
        k: 0,
        T: Ci++,
        C: Ti
    };
    return Ti = u.T, u;
}
function rt(n) {
    Ti !== n.T && t(30), Ti = n.C, void 0 !== n.A && ($i.suppressReactionErrors = !0), ot(n.R), yt(n.N), At(), n.S && dt(n.M), $i.suppressReactionErrors = !1;
}
function et(t, n) {
    var i = ut(t);
    try {
        return n();
    } finally{
        ot(i);
    }
}
function ut(t) {
    var n = $i.allowStateChanges;
    return $i.allowStateChanges = t, n;
}
function ot(t) {
    $i.allowStateChanges = t;
}
function st(t) {
    return t instanceof Fi;
}
function at(t) {
    switch(t.I){
        case Bi.L:
            return !1;
        case Bi.K:
        case Bi.P:
            return !0;
        case Bi.D:
            for(var n = bt(!0), i = vt(), r = t.B, e = r.length, u = 0; u < e; u++){
                var o = r[u];
                if (qi(o)) {
                    if ($i.disableErrorBoundaries) o.get();
                    else try {
                        o.get();
                    } catch (t) {
                        return dt(i), yt(n), !0;
                    }
                    if (t.I === Bi.P) return dt(i), yt(n), !0;
                }
            }
            return pt(t), dt(i), yt(n), !1;
    }
}
function ft() {
    return null !== $i.trackingDerivation;
}
function ct(t, n, i) {
    var r = bt(!0);
    pt(t), t.G = new Array(t.B.length + 100), t.W = 0, t.q = ++$i.runId;
    var e, u = $i.trackingDerivation;
    if ($i.trackingDerivation = t, $i.inBatch++, !0 === $i.disableErrorBoundaries) e = n.call(i);
    else try {
        e = n.call(i);
    } catch (t) {
        e = new Fi(t);
    }
    return $i.inBatch--, $i.trackingDerivation = u, function(t) {
        for(var n = t.B, i = t.B = t.G, r = Bi.L, e = 0, u = t.W, o = 0; o < u; o++){
            var s = i[o];
            0 === s.F && (s.F = 1, e !== o && (i[e] = s), e++), s.I > r && (r = s.I);
        }
        for(i.length = e, t.G = null, u = n.length; u--;){
            var a = n[u];
            0 === a.F && jt(a, t), a.F = 0;
        }
        for(; e--;){
            var f = i[e];
            1 === f.F && (f.F = 0, Ot(f, t));
        }
        r !== Bi.L && (t.I = r, t.H());
    }(t), yt(r), e;
}
function ht(t) {
    var n = t.B;
    t.B = [];
    for(var i = n.length; i--;)jt(n[i], t);
    t.I = Bi.K;
}
function lt(t) {
    var n = vt();
    try {
        return t();
    } finally{
        dt(n);
    }
}
function vt() {
    var t = $i.trackingDerivation;
    return $i.trackingDerivation = null, t;
}
function dt(t) {
    $i.trackingDerivation = t;
}
function bt(t) {
    var n = $i.allowStateReads;
    return $i.allowStateReads = t, n;
}
function yt(t) {
    $i.allowStateReads = t;
}
function pt(t) {
    if (t.I !== Bi.L) {
        t.I = Bi.L;
        for(var n = t.B, i = n.length; i--;)n[i].U = Bi.L;
    }
}
function mt() {
    return $i;
}
function wt() {
    var t = new Ui;
    for(var n in t)-1 === Hi.indexOf(n) && ($i[n] = t[n]);
    $i.allowStateChanges = !$i.enforceActions;
}
function Ot(t, n) {
    t.X.add(n), t.U > n.I && (t.U = n.I);
}
function jt(t, n) {
    t.X.delete(n), 0 === t.X.size && gt(t);
}
function gt(t) {
    !1 === t.$ && (t.$ = !0, $i.pendingUnobservations.push(t));
}
function _t() {
    $i.inBatch++;
}
function At() {
    if (0 == --$i.inBatch) {
        Mt();
        for(var t = $i.pendingUnobservations, n = 0; n < t.length; n++){
            var i = t[n];
            i.$ = !1, 0 === i.X.size && (i.J && (i.J = !1, i.onBUO()), i instanceof Wi && i.Y());
        }
        $i.pendingUnobservations = [];
    }
}
function St(t) {
    var n = $i.trackingDerivation;
    return null !== n ? (n.q !== t.Z && (t.Z = n.q, n.G[n.W++] = t, !t.J && $i.trackingContext && (t.J = !0, t.onBO())), t.J) : (0 === t.X.size && $i.inBatch > 0 && gt(t), !1);
}
function xt(t) {
    t.U !== Bi.P && (t.U = Bi.P, t.X.forEach(function(t) {
        t.I === Bi.L && t.H(), t.I = Bi.P;
    }));
}
function Et(t) {
    return $i.globalReactionErrorHandlers.push(t), function() {
        var n = $i.globalReactionErrorHandlers.indexOf(t);
        n >= 0 && $i.globalReactionErrorHandlers.splice(n, 1);
    };
}
function Mt() {
    $i.inBatch > 0 || $i.isRunningReactions || Yi(Rt);
}
function Rt() {
    $i.isRunningReactions = !0;
    for(var t = $i.pendingReactions, n = 0; t.length > 0;){
        100 == ++n && (console.error("[mobx] cycle in reaction: " + t[0]), t.splice(0));
        for(var i = t.splice(0), r = 0, e = i.length; r < e; r++)i[r].tt();
    }
    $i.isRunningReactions = !1;
}
function Nt() {
    return console.warn("[mobx.spy] Is a no-op in production builds"), function() {};
}
function Vt(t) {
    return function(n, i) {
        return e(n) ? tt(n.name || "<unnamed action>", n, t) : e(i) ? tt(n, i, t) : S(i) ? (t ? nr : Zi).t(n, i) : u(i) ? A(n, i, t ? nr : Zi) : u(n) ? _(R(t ? "autoAction" : "action", {
            name: n,
            autoAction: t
        })) : void 0;
    };
}
function kt(t) {
    return nt(0, !1, t, this, void 0);
}
function Tt(t) {
    return e(t) && !0 === t.isMobxAction;
}
function Ct(t, n) {
    function i() {
        t(a);
    }
    var r, e, u, o, s;
    void 0 === n && (n = oi);
    var a, f = null != (r = null == (e = n) ? void 0 : e.name) ? r : "Autorun";
    if (n.scheduler || n.delay) {
        var c = It(n), h = !1;
        a = new Ji(f, function() {
            h || (h = !0, c(function() {
                h = !1, a.nt || a.track(i);
            }));
        }, n.onError, n.requiresObservable);
    } else a = new Ji(f, function() {
        this.track(i);
    }, n.onError, n.requiresObservable);
    return null != (u = n) && null != (o = u.signal) && o.aborted || a.it(), a.rt(null == (s = n) ? void 0 : s.signal);
}
function It(t) {
    return t.scheduler ? t.scheduler : t.delay ? function(n) {
        return setTimeout(n, t.delay);
    } : ur;
}
function Lt(t, n, i) {
    function r() {
        if (p = !1, !w.nt) {
            var n = !1;
            w.track(function() {
                var i = et(!1, function() {
                    return t(w);
                });
                n = y || !m(c, i), h = c, c = i;
            }), (y && i.fireImmediately || !y && n) && v(c, h, w), y = !1;
        }
    }
    var e, u, o, s;
    void 0 === i && (i = oi);
    var a, f, c, h, l = null != (e = i.name) ? e : "Reaction", v = rr(l, i.onError ? (a = i.onError, f = n, function() {
        try {
            return f.apply(this, arguments);
        } catch (t) {
            a.call(this, t);
        }
    }) : n), d = !i.scheduler && !i.delay, b = It(i), y = !0, p = !1, m = i.compareStructural ? pi.structural : i.equals || pi.default, w = new Ji(l, function() {
        y || d ? r() : p || (p = !0, b(r));
    }, i.onError, i.requiresObservable);
    return null != (u = i) && null != (o = u.signal) && o.aborted || w.it(), w.rt(null == (s = i) ? void 0 : s.signal);
}
function Kt(t, n, i) {
    return Dt("onBO", t, n, i);
}
function Pt(t, n, i) {
    return Dt("onBUO", t, n, i);
}
function Dt(t, n, i, r) {
    var u = "function" == typeof r ? Un(n, i) : Un(n), o = e(r) ? r : i, s = t + "L";
    return u[s] ? u[s].add(o) : u[s] = new Set([
        o
    ]), function() {
        var t = u[s];
        t && (t.delete(o), 0 === t.size && delete u[s]);
    };
}
function Bt(i) {
    !0 === i.isolateGlobalState && function() {
        if (($i.pendingReactions.length || $i.inBatch || $i.isRunningReactions) && t(36), zi = !0, Xi) {
            var i = n();
            0 == --i.__mobxInstanceCount && (i.__mobxGlobals = void 0), $i = new Ui;
        }
    }();
    var r, e, u = i.useProxies, o = i.enforceActions;
    if (void 0 !== u && ($i.useProxies = "always" === u || "never" !== u && "undefined" != typeof Proxy), "ifavailable" === u && ($i.verifyProxies = !0), void 0 !== o) {
        var s = "always" === o ? "always" : "observed" === o;
        $i.enforceActions = s, $i.allowStateChanges = !0 !== s && "always" !== s;
    }
    [
        "computedRequiresReaction",
        "reactionRequiresObservable",
        "observableRequiresReaction",
        "disableErrorBoundaries",
        "safeDescriptors"
    ].forEach(function(t) {
        t in i && ($i[t] = !!i[t]);
    }), $i.allowStateReads = !$i.observableRequiresReaction, i.reactionScheduler && (r = i.reactionScheduler, e = Yi, Yi = function(t) {
        return r(function() {
            return e(t);
        });
    });
}
function Gt(t, n, i, r) {
    var e = li(n);
    return $n(function() {
        var n = Pn(t, r)[di];
        hi(e).forEach(function(t) {
            n.s(t, e[t], !i || !(t in i) || i[t]);
        });
    }), t;
}
function Wt(t, n) {
    return qt(Un(t, n));
}
function qt(t) {
    var n, i = {
        name: t.et
    };
    return t.B && t.B.length > 0 && (i.dependencies = (n = t.B, Array.from(new Set(n))).map(qt)), i;
}
function Ft(t, n) {
    return Ht(Un(t, n));
}
function Ht(t) {
    var n = {
        name: t.et
    };
    return function(t) {
        return t.X && t.X.size > 0;
    }(t) && (n.observers = Array.from(function(t) {
        return t.X;
    }(t)).map(Ht)), n;
}
function Ut() {
    this.message = "FLOW_CANCELLED";
}
function Xt(t) {
    return t instanceof Ut;
}
function zt(t) {
    e(t.cancel) && t.cancel();
}
function $t(t) {
    return t;
}
function Jt(t) {
    return !0 === (null == t ? void 0 : t.isMobXFlow);
}
function Yt(t, n, i) {
    var r;
    return Ar(t) || Kn(t) || Di(t) ? r = Xn(t) : Bn(t) && (r = Xn(t, n)), r.dehancer = "function" == typeof n ? n : i, function() {
        r.dehancer = void 0;
    };
}
function Qt(t, n, i) {
    return e(i) ? function(t, n, i) {
        return Xn(t, n).ut(i);
    }(t, n, i) : function(t, n) {
        return Xn(t).ut(n);
    }(t, n);
}
function Zt(t, n) {
    if (void 0 === n) return qi(t);
    if (!1 === Bn(t)) return !1;
    if (!t[di].O.has(n)) return !1;
    var i = Un(t, n);
    return qi(i);
}
function tn(t) {
    return Zt(t);
}
function nn(t, n) {
    return Zt(t, n);
}
function rn(t, n) {
    return !!t && (void 0 !== n ? !!Bn(t) && t[di].O.has(n) : Bn(t) || !!t[di] || yi(t) || Qi(t) || qi(t));
}
function en(t) {
    return rn(t);
}
function un(t, n) {
    return rn(t, n);
}
function on(n) {
    return Bn(n) ? n[di].ot() : Ar(n) || Rr(n) ? Array.from(n.keys()) : Kn(n) ? n.map(function(t, n) {
        return n;
    }) : void t(5);
}
function sn(n) {
    return Bn(n) ? on(n).map(function(t) {
        return n[t];
    }) : Ar(n) ? on(n).map(function(t) {
        return n.get(t);
    }) : Rr(n) ? Array.from(n.values()) : Kn(n) ? n.slice() : void t(6);
}
function an(n) {
    return Bn(n) ? on(n).map(function(t) {
        return [
            t,
            n[t]
        ];
    }) : Ar(n) ? on(n).map(function(t) {
        return [
            t,
            n.get(t)
        ];
    }) : Rr(n) ? Array.from(n.entries()) : Kn(n) ? n.map(function(t, n) {
        return [
            n,
            t
        ];
    }) : void t(7);
}
function fn(n, i, r) {
    if (2 !== arguments.length || Rr(n)) Bn(n) ? n[di].st(i, r) : Ar(n) ? n.set(i, r) : Rr(n) ? n.add(i) : Kn(n) ? ("number" != typeof i && (i = parseInt(i, 10)), i < 0 && t("Invalid index: '" + i + "'"), _t(), i >= n.length && (n.length = i + 1), n[i] = r, At()) : t(8);
    else {
        _t();
        var e = i;
        try {
            for(var u in e)fn(n, u, e[u]);
        } finally{
            At();
        }
    }
}
function cn(n, i) {
    Bn(n) ? n[di].at(i) : Ar(n) || Rr(n) ? n.delete(i) : Kn(n) ? ("number" != typeof i && (i = parseInt(i, 10)), n.splice(i, 1)) : t(9);
}
function hn(n, i) {
    return Bn(n) ? n[di].ft(i) : Ar(n) || Rr(n) ? n.has(i) : Kn(n) ? i >= 0 && i < n.length : void t(10);
}
function ln(n, i) {
    if (hn(n, i)) return Bn(n) ? n[di].ct(i) : Ar(n) ? n.get(i) : Kn(n) ? n[i] : void t(11);
}
function vn(n, i, r) {
    if (Bn(n)) return n[di].l(i, r);
    t(39);
}
function dn(n) {
    if (Bn(n)) return n[di].ht();
    t(38);
}
function bn(t, n, i, r) {
    return e(i) ? function(t, n, i, r) {
        return Xn(t, n).lt(i, r);
    }(t, n, i, r) : function(t, n, i) {
        return Xn(t).lt(n, i);
    }(t, n, i);
}
function yn(t, n, i) {
    return t.set(n, i), i;
}
function pn(t) {
    return function t(n, i) {
        if (null == n || "object" != typeof n || n instanceof Date || !en(n)) return n;
        if (Di(n) || qi(n)) return t(n.get(), i);
        if (i.has(n)) return i.get(n);
        if (Kn(n)) {
            var r = yn(i, n, new Array(n.length));
            return n.forEach(function(n, e) {
                r[e] = t(n, i);
            }), r;
        }
        if (Rr(n)) {
            var e = yn(i, n, new Set);
            return n.forEach(function(n) {
                e.add(t(n, i));
            }), e;
        }
        if (Ar(n)) {
            var u = yn(i, n, new Map);
            return n.forEach(function(n, r) {
                u.set(r, t(n, i));
            }), u;
        }
        var o = yn(i, n, {});
        return dn(n).forEach(function(r) {
            ei.propertyIsEnumerable.call(n, r) && (o[r] = t(n[r], i));
        }), o;
    }(t, new Map);
}
function mn() {}
function wn(t, n) {
    void 0 === n && (n = void 0), _t();
    try {
        return t.apply(n);
    } finally{
        At();
    }
}
function On(t, n, i) {
    return 1 === arguments.length || n && "object" == typeof n ? gn(t, n) : jn(t, n, i || {});
}
function jn(t, n, i) {
    var r;
    if ("number" == typeof i.timeout) {
        var e = new Error("WHEN_TIMEOUT");
        r = setTimeout(function() {
            if (!o[di].nt) {
                if (o(), !i.onError) throw e;
                i.onError(e);
            }
        }, i.timeout);
    }
    i.name = "When";
    var u = tt("When-effect", n), o = Ct(function(n) {
        et(!1, t) && (n.dispose(), r && clearTimeout(r), u());
    }, i);
    return o;
}
function gn(t, n) {
    var i, r, e;
    if (null != n && null != (i = n.signal) && i.aborted) return Object.assign(Promise.reject(new Error("WHEN_ABORTED")), {
        cancel: function() {
            return null;
        }
    });
    var u = new Promise(function(i, u) {
        var o, s = jn(t, i, m({}, n, {
            onError: u
        }));
        r = function() {
            s(), u(new Error("WHEN_CANCELLED"));
        }, e = function() {
            s(), u(new Error("WHEN_ABORTED"));
        }, null == n || null == (o = n.signal) || null == o.addEventListener || o.addEventListener("abort", e);
    }).finally(function() {
        var t;
        return null == n || null == (t = n.signal) || null == t.removeEventListener ? void 0 : t.removeEventListener("abort", e);
    });
    return u.cancel = r, u;
}
function _n(t) {
    return t[di];
}
function An(t) {
    return void 0 !== t.vt && t.vt.length > 0;
}
function Sn(t, n) {
    var i = t.vt || (t.vt = []);
    return i.push(n), r(function() {
        var t = i.indexOf(n);
        -1 !== t && i.splice(t, 1);
    });
}
function xn(n, i) {
    var r = vt();
    try {
        for(var e = [].concat(n.vt || []), u = 0, o = e.length; u < o && ((i = e[u](i)) && !i.type && t(14), i); u++);
        return i;
    } finally{
        dt(r);
    }
}
function En(t) {
    return void 0 !== t.dt && t.dt.length > 0;
}
function Mn(t, n) {
    var i = t.dt || (t.dt = []);
    return i.push(n), r(function() {
        var t = i.indexOf(n);
        -1 !== t && i.splice(t, 1);
    });
}
function Rn(t, n) {
    var i = vt(), r = t.dt;
    if (r) {
        for(var e = 0, u = (r = r.slice()).length; e < u; e++)r[e](n);
        dt(i);
    }
}
function Nn(t, n, i) {
    return $n(function() {
        var r = Pn(t, i)[di];
        null != n || (n = function(t) {
            return b(t, vi) || f(t, vi, m({}, t[vi])), t[vi];
        }(t)), hi(n).forEach(function(t) {
            return r.o(t, n[t]);
        });
    }), t;
}
function Vn(t, n, i) {
    return s(t) ? Gt(t, t, n, i) : ($n(function() {
        var r = Pn(t, i)[di];
        if (!t[hr]) {
            var e = Object.getPrototypeOf(t), u = new Set([].concat(hi(t), hi(e)));
            u.delete("constructor"), u.delete(di), f(e, hr, u);
        }
        t[hr].forEach(function(t) {
            return r.o(t, !n || !(t in n) || n[t]);
        });
    }), t);
}
function kn(t, n, r, e) {
    return void 0 === r && (r = "ObservableArray"), void 0 === e && (e = !1), i(), $n(function() {
        var i = new dr(r, n, e, !1);
        c(i.O, di, i);
        var u = new Proxy(i.O, vr);
        return i.v = u, t && t.length && i.bt(0, 0, t), u;
    });
}
function Tn(t, n) {
    "function" == typeof Array.prototype[t] && (br[t] = n(t));
}
function Cn(t) {
    return function() {
        var n = this[di];
        n.yt.reportObserved();
        var i = n.pt(n.O);
        return i[t].apply(i, arguments);
    };
}
function In(t) {
    return function(n, i) {
        var r = this, e = this[di];
        return e.yt.reportObserved(), e.pt(e.O)[t](function(t, e) {
            return n.call(i, t, e, r);
        });
    };
}
function Ln(t) {
    return function() {
        var n = this, i = this[di];
        i.yt.reportObserved();
        var r = i.pt(i.O), e = arguments[0];
        return arguments[0] = function(t, i, r) {
            return e(t, i, r, n);
        }, r[t].apply(r, arguments);
    };
}
function Kn(t) {
    return o(t) && mr(t[di]);
}
function Pn(t, n) {
    var i;
    if (b(t, di)) return t;
    var r = null != (i = null == n ? void 0 : n.name) ? i : "ObservableObject", e = new Vr(t, new Map, String(r), function(t) {
        var n;
        return t ? null != (n = t.defaultDecorator) ? n : X(t) : void 0;
    }(n));
    return f(t, di, e), t;
}
function Dn(t) {
    return Nr[t] || (Nr[t] = {
        get: function() {
            return this[di].j(t);
        },
        set: function(n) {
            return this[di]._(t, n);
        }
    });
}
function Bn(t) {
    return !!o(t) && kr(t[di]);
}
function Gn(t, n, i) {
    var r;
    null == (r = t.h[vi]) || delete r[i];
}
function Wn(t) {
    return {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this[di].ct(t);
        },
        set: function(n) {
            this[di].st(t, n);
        }
    };
}
function qn(t) {
    ri(Kr.prototype, "" + t, Wn(t));
}
function Fn(t) {
    if (t > Ir) {
        for(var n = Ir; n < t + 100; n++)qn(n);
        Ir = t;
    }
}
function Hn(t, n, i) {
    return new Kr(t, n, i);
}
function Un(n, i) {
    if ("object" == typeof n && null !== n) {
        if (Kn(n)) return void 0 !== i && t(23), n[di].yt;
        if (Rr(n)) return n.yt;
        if (Ar(n)) {
            if (void 0 === i) return n.wt;
            var r = n.Ot.get(i) || n.jt.get(i);
            return r || t(25, i, zn(n)), r;
        }
        if (Bn(n)) {
            if (!i) return t(26);
            var u = n[di].O.get(i);
            return u || t(27, i, zn(n)), u;
        }
        if (yi(n) || qi(n) || Qi(n)) return n;
    } else if (e(n) && Qi(n[di])) return n[di];
    t(28);
}
function Xn(n, i) {
    return n || t(29), void 0 !== i ? Xn(Un(n, i)) : yi(n) || qi(n) || Qi(n) || Ar(n) || Rr(n) ? n : n[di] ? n[di] : void t(24, n);
}
function zn(t, n) {
    var i;
    if (void 0 !== n) i = Un(t, n);
    else {
        if (Tt(t)) return t.name;
        i = Bn(t) || Ar(t) || Rr(t) ? Xn(t) : Un(t);
    }
    return i.et;
}
function $n(t) {
    var n = vt(), i = ut(!0);
    _t();
    try {
        return t();
    } finally{
        At(), ot(i), dt(n);
    }
}
function Jn(t, n, i) {
    return void 0 === i && (i = -1), function t(n, i, r, u, o) {
        if (n === i) return 0 !== n || 1 / n == 1 / i;
        if (null == n || null == i) return !1;
        if (n != n) return i != i;
        var s = typeof n;
        if ("function" !== s && "object" !== s && "object" != typeof i) return !1;
        var a = Pr.call(n);
        if (a !== Pr.call(i)) return !1;
        switch(a){
            case "[object RegExp]":
            case "[object String]":
                return "" + n == "" + i;
            case "[object Number]":
                return +n != +n ? +i != +i : 0 == +n ? 1 / +n == 1 / i : +n == +i;
            case "[object Date]":
            case "[object Boolean]":
                return +n == +i;
            case "[object Symbol]":
                return "undefined" != typeof Symbol && Symbol.valueOf.call(n) === Symbol.valueOf.call(i);
            case "[object Map]":
            case "[object Set]":
                r >= 0 && r++;
        }
        n = Yn(n), i = Yn(i);
        var f = "[object Array]" === a;
        if (!f) {
            if ("object" != typeof n || "object" != typeof i) return !1;
            var c = n.constructor, h = i.constructor;
            if (c !== h && !(e(c) && c instanceof c && e(h) && h instanceof h) && "constructor" in n && "constructor" in i) return !1;
        }
        if (0 === r) return !1;
        r < 0 && (r = -1), o = o || [];
        for(var l = (u = u || []).length; l--;)if (u[l] === n) return o[l] === i;
        if (u.push(n), o.push(i), f) {
            if ((l = n.length) !== i.length) return !1;
            for(; l--;)if (!t(n[l], i[l], r - 1, u, o)) return !1;
        } else {
            var v, d = Object.keys(n);
            if (l = d.length, Object.keys(i).length !== l) return !1;
            for(; l--;)if (!b(i, v = d[l]) || !t(n[v], i[v], r - 1, u, o)) return !1;
        }
        return u.pop(), o.pop(), !0;
    }(t, n, i);
}
function Yn(t) {
    return Kn(t) ? t.slice() : l(t) || Ar(t) || v(t) || Rr(t) ? Array.from(t.entries()) : t;
}
function Qn(t) {
    return t[Symbol.iterator] = Zn, t;
}
function Zn() {
    return this;
}
var ti = {}, ni = Object.assign, ii = Object.getOwnPropertyDescriptor, ri = Object.defineProperty, ei = Object.prototype, ui = [];
Object.freeze(ui);
var oi = {};
Object.freeze(oi);
var si = "undefined" != typeof Proxy, ai = Object.toString(), fi = function() {}, ci = void 0 !== Object.getOwnPropertySymbols, hi = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : ci ? function(t) {
    return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Object.getOwnPropertyNames, li = Object.getOwnPropertyDescriptors || function(t) {
    var n = {};
    return hi(t).forEach(function(i) {
        n[i] = ii(t, i);
    }), n;
}, vi = Symbol("mobx-stored-annotations"), di = Symbol("mobx administration"), bi = function() {
    function t(t) {
        void 0 === t && (t = "Atom"), this.et = void 0, this.$ = !1, this.J = !1, this.X = new Set, this.F = 0, this.Z = 0, this.U = Bi.K, this.onBOL = void 0, this.onBUOL = void 0, this.et = t;
    }
    var n = t.prototype;
    return n.onBO = function() {
        this.onBOL && this.onBOL.forEach(function(t) {
            return t();
        });
    }, n.onBUO = function() {
        this.onBUOL && this.onBUOL.forEach(function(t) {
            return t();
        });
    }, n.reportObserved = function() {
        return St(this);
    }, n.reportChanged = function() {
        _t(), xt(this), At();
    }, n.toString = function() {
        return this.et;
    }, t;
}(), yi = h("Atom", bi), pi = {
    identity: function(t, n) {
        return t === n;
    },
    structural: function(t, n) {
        return Jn(t, n);
    },
    default: function(t, n) {
        return Object.is ? Object.is(t, n) : t === n ? 0 !== t || 1 / t == 1 / n : t != t && n != n;
    },
    shallow: function(t, n) {
        return Jn(t, n, 1);
    }
}, mi = _({
    i: "override",
    o: function() {
        return 0;
    },
    s: function() {
        t("'" + this.i + "' can only be used with 'makeObservable'");
    },
    t: function() {
        console.warn("'" + this.i + "' cannot be used with decorators - this is a no-op");
    }
}), wi = X(), Oi = {
    deep: !0,
    name: void 0,
    defaultDecorator: void 0,
    proxy: !0
};
Object.freeze(Oi);
var ji = q("observable"), gi = q("observable.ref", {
    enhancer: M
}), _i = q("observable.shallow", {
    enhancer: function(t, n, i) {
        return null == t || Bn(t) || Kn(t) || Ar(t) || Rr(t) ? t : Array.isArray(t) ? Mi.array(t, {
            name: i,
            deep: !1
        }) : s(t) ? Mi.object(t, void 0, {
            name: i,
            deep: !1
        }) : l(t) ? Mi.map(t, {
            name: i,
            deep: !1
        }) : v(t) ? Mi.set(t, {
            name: i,
            deep: !1
        }) : void 0;
    }
}), Ai = q("observable.struct", {
    enhancer: function(t, n) {
        return Jn(t, n) ? n : t;
    }
}), Si = _(ji);
ni(Z, Si);
var xi, Ei, Mi = ni(Z, {
    box: function(t, n) {
        var i = Y(n);
        return new Pi(t, Q(i), i.name, !0, i.equals);
    },
    array: function(t, n) {
        var i = Y(n);
        return (!1 === $i.useProxies || !1 === i.proxy ? Hn : kn)(t, Q(i), i.name);
    },
    map: function(t, n) {
        var i = Y(n);
        return new _r(t, Q(i), i.name);
    },
    set: function(t, n) {
        var i = Y(n);
        return new Mr(t, Q(i), i.name);
    },
    object: function(t, n, r) {
        return $n(function() {
            return Gt(!1 === $i.useProxies || !1 === (null == r ? void 0 : r.proxy) ? Pn({}, r) : function(t, n) {
                var r, e;
                return i(), null != (e = (r = (t = Pn(t, n))[di]).v) ? e : r.v = new Proxy(t, cr);
            }({}, r), t, n);
        });
    },
    ref: _(gi),
    shallow: _(_i),
    deep: Si,
    struct: _(Ai)
}), Ri = D("computed"), Ni = D("computed.struct", {
    equals: pi.structural
}), Vi = function(t, n) {
    if (S(n)) return Ri.t(t, n);
    if (u(n)) return A(t, n, Ri);
    if (s(t)) return _(D("computed", t));
    var i = s(n) ? n : {};
    return i.get = t, i.name || (i.name = t.name || ""), new Wi(i);
};
Object.assign(Vi, Ri), Vi.struct = _(Ni);
var ki, Ti = 0, Ci = 1, Ii = null != (xi = null == (Ei = ii(function() {}, "name")) ? void 0 : Ei.configurable) && xi, Li = {
    value: "action",
    configurable: !0,
    writable: !1,
    enumerable: !1
};
ki = Symbol.toPrimitive;
var Ki, Pi = function(t) {
    function n(n, i, r, e, u) {
        var o;
        return void 0 === r && (r = "ObservableValue"), void 0 === u && (u = pi.default), (o = t.call(this, r) || this).enhancer = void 0, o.et = void 0, o.equals = void 0, o.gt = !1, o.vt = void 0, o.dt = void 0, o._t = void 0, o.dehancer = void 0, o.enhancer = i, o.et = r, o.equals = u, o._t = i(n, void 0, r), o;
    }
    w(n, t);
    var i = n.prototype;
    return i.dehanceValue = function(t) {
        return void 0 !== this.dehancer ? this.dehancer(t) : t;
    }, i.set = function(t) {
        (t = this.At(t)) !== $i.UNCHANGED && this.St(t);
    }, i.At = function(t) {
        if (An(this)) {
            var n = xn(this, {
                object: this,
                type: lr,
                newValue: t
            });
            if (!n) return $i.UNCHANGED;
            t = n.newValue;
        }
        return t = this.enhancer(t, this._t, this.et), this.equals(this._t, t) ? $i.UNCHANGED : t;
    }, i.St = function(t) {
        var n = this._t;
        this._t = t, this.reportChanged(), En(this) && Rn(this, {
            type: lr,
            object: this,
            newValue: t,
            oldValue: n
        });
    }, i.get = function() {
        return this.reportObserved(), this.dehanceValue(this._t);
    }, i.ut = function(t) {
        return Sn(this, t);
    }, i.lt = function(t, n) {
        return n && t({
            observableKind: "value",
            debugObjectName: this.et,
            object: this,
            type: lr,
            newValue: this._t,
            oldValue: void 0
        }), Mn(this, t);
    }, i.raw = function() {
        return this._t;
    }, i.toJSON = function() {
        return this.get();
    }, i.toString = function() {
        return this.et + "[" + this._t + "]";
    }, i.valueOf = function() {
        return d(this.get());
    }, i[ki] = function() {
        return this.valueOf();
    }, n;
}(bi), Di = h("ObservableValue", Pi);
Ki = Symbol.toPrimitive;
var Bi, Gi, Wi = function() {
    function n(n) {
        this.I = Bi.K, this.B = [], this.G = null, this.J = !1, this.$ = !1, this.X = new Set, this.F = 0, this.q = 0, this.Z = 0, this.U = Bi.L, this.W = 0, this._t = new Fi(null), this.et = void 0, this.xt = void 0, this.Et = !1, this.Mt = !1, this.derivation = void 0, this.Rt = void 0, this.Nt = Gi.NONE, this.Vt = void 0, this.kt = void 0, this.Tt = void 0, this.Ct = void 0, this.onBOL = void 0, this.onBUOL = void 0, n.get || t(31), this.derivation = n.get, this.et = n.name || "ComputedValue", n.set && (this.Rt = tt("ComputedValue-setter", n.set)), this.kt = n.equals || (n.compareStructural || n.struct ? pi.structural : pi.default), this.Vt = n.context, this.Tt = n.requiresReaction, this.Ct = !!n.keepAlive;
    }
    var i = n.prototype;
    return i.H = function() {
        !function(t) {
            t.U === Bi.L && (t.U = Bi.D, t.X.forEach(function(t) {
                t.I === Bi.L && (t.I = Bi.D, t.H());
            }));
        }(this);
    }, i.onBO = function() {
        this.onBOL && this.onBOL.forEach(function(t) {
            return t();
        });
    }, i.onBUO = function() {
        this.onBUOL && this.onBUOL.forEach(function(t) {
            return t();
        });
    }, i.get = function() {
        if (this.Et && t(32, this.et, this.derivation), 0 !== $i.inBatch || 0 !== this.X.size || this.Ct) {
            if (St(this), at(this)) {
                var n = $i.trackingContext;
                this.Ct && !n && ($i.trackingContext = this), this.trackAndCompute() && function(t) {
                    t.U !== Bi.P && (t.U = Bi.P, t.X.forEach(function(n) {
                        n.I === Bi.D ? n.I = Bi.P : n.I === Bi.L && (t.U = Bi.L);
                    }));
                }(this), $i.trackingContext = n;
            }
        } else at(this) && (this.It(), _t(), this._t = this.Lt(!1), At());
        var i = this._t;
        if (st(i)) throw i.cause;
        return i;
    }, i.set = function(n) {
        if (this.Rt) {
            this.Mt && t(33, this.et), this.Mt = !0;
            try {
                this.Rt.call(this.Vt, n);
            } finally{
                this.Mt = !1;
            }
        } else t(34, this.et);
    }, i.trackAndCompute = function() {
        var t = this._t, n = this.I === Bi.K, i = this.Lt(!0), r = n || st(t) || st(i) || !this.kt(t, i);
        return r && (this._t = i), r;
    }, i.Lt = function(t) {
        this.Et = !0;
        var n, i = ut(!1);
        if (t) n = ct(this, this.derivation, this.Vt);
        else if (!0 === $i.disableErrorBoundaries) n = this.derivation.call(this.Vt);
        else try {
            n = this.derivation.call(this.Vt);
        } catch (t) {
            n = new Fi(t);
        }
        return ot(i), this.Et = !1, n;
    }, i.Y = function() {
        this.Ct || (ht(this), this._t = void 0);
    }, i.lt = function(t, n) {
        var i = this, r = !0, e = void 0;
        return Ct(function() {
            var u = i.get();
            if (!r || n) {
                var o = vt();
                t({
                    observableKind: "computed",
                    debugObjectName: i.et,
                    type: lr,
                    object: i,
                    newValue: u,
                    oldValue: e
                }), dt(o);
            }
            r = !1, e = u;
        });
    }, i.It = function() {}, i.toString = function() {
        return this.et + "[" + this.derivation.toString() + "]";
    }, i.valueOf = function() {
        return d(this.get());
    }, i[Ki] = function() {
        return this.valueOf();
    }, n;
}(), qi = h("ComputedValue", Wi);
!function(t) {
    t[t.K = -1] = "NOT_TRACKING_", t[t.L = 0] = "UP_TO_DATE_", t[t.D = 1] = "POSSIBLY_STALE_", t[t.P = 2] = "STALE_";
}(Bi || (Bi = {})), function(t) {
    t[t.NONE = 0] = "NONE", t[t.LOG = 1] = "LOG", t[t.BREAK = 2] = "BREAK";
}(Gi || (Gi = {}));
var Fi = function(t) {
    this.cause = void 0, this.cause = t;
}, Hi = [
    "mobxGuid",
    "spyListeners",
    "enforceActions",
    "computedRequiresReaction",
    "reactionRequiresObservable",
    "observableRequiresReaction",
    "allowStateReads",
    "disableErrorBoundaries",
    "runId",
    "UNCHANGED",
    "useProxies"
], Ui = function() {
    this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0;
}, Xi = !0, zi = !1, $i = function() {
    var i = n();
    return i.__mobxInstanceCount > 0 && !i.__mobxGlobals && (Xi = !1), i.__mobxGlobals && i.__mobxGlobals.version !== (new Ui).version && (Xi = !1), Xi ? i.__mobxGlobals ? (i.__mobxInstanceCount += 1, i.__mobxGlobals.UNCHANGED || (i.__mobxGlobals.UNCHANGED = {}), i.__mobxGlobals) : (i.__mobxInstanceCount = 1, i.__mobxGlobals = new Ui) : (setTimeout(function() {
        zi || t(35);
    }, 1), new Ui);
}(), Ji = function() {
    function t(t, n, i, r) {
        void 0 === t && (t = "Reaction"), this.et = void 0, this.Kt = void 0, this.Pt = void 0, this.Dt = void 0, this.B = [], this.G = [], this.I = Bi.K, this.F = 0, this.q = 0, this.W = 0, this.nt = !1, this.Bt = !1, this.Gt = !1, this.Wt = !1, this.Nt = Gi.NONE, this.et = t, this.Kt = n, this.Pt = i, this.Dt = r;
    }
    var n = t.prototype;
    return n.H = function() {
        this.it();
    }, n.it = function() {
        this.Bt || (this.Bt = !0, $i.pendingReactions.push(this), Mt());
    }, n.isScheduled = function() {
        return this.Bt;
    }, n.tt = function() {
        if (!this.nt) {
            _t(), this.Bt = !1;
            var t = $i.trackingContext;
            if ($i.trackingContext = this, at(this)) {
                this.Gt = !0;
                try {
                    this.Kt();
                } catch (t) {
                    this.qt(t);
                }
            }
            $i.trackingContext = t, At();
        }
    }, n.track = function(t) {
        if (!this.nt) {
            _t(), this.Wt = !0;
            var n = $i.trackingContext;
            $i.trackingContext = this;
            var i = ct(this, t, void 0);
            $i.trackingContext = n, this.Wt = !1, this.Gt = !1, this.nt && ht(this), st(i) && this.qt(i.cause), At();
        }
    }, n.qt = function(t) {
        var n = this;
        if (this.Pt) this.Pt(t, this);
        else {
            if ($i.disableErrorBoundaries) throw t;
            $i.suppressReactionErrors || console.error("[mobx] uncaught error in '" + this + "'", t), $i.globalReactionErrorHandlers.forEach(function(i) {
                return i(t, n);
            });
        }
    }, n.dispose = function() {
        this.nt || (this.nt = !0, this.Wt || (_t(), ht(this), At()));
    }, n.rt = function(t) {
        var n = this, i = function i() {
            n.dispose(), null == t || null == t.removeEventListener || t.removeEventListener("abort", i);
        };
        return null == t || null == t.addEventListener || t.addEventListener("abort", i), i[di] = this, i;
    }, n.toString = function() {
        return "Reaction[" + this.et + "]";
    }, n.trace = function() {}, t;
}(), Yi = function(t) {
    return t();
}, Qi = h("Reaction", Ji), Zi = R("action"), tr = R("action.bound", {
    bound: !0
}), nr = R("autoAction", {
    autoAction: !0
}), ir = R("autoAction.bound", {
    autoAction: !0,
    bound: !0
}), rr = Vt(!1);
Object.assign(rr, Zi);
var er = Vt(!0);
Object.assign(er, nr), rr.bound = _(tr), er.bound = _(ir);
var ur = function(t) {
    return t();
}, or = 0;
Ut.prototype = Object.create(Error.prototype);
var sr = C("flow"), ar = C("flow.bound", {
    bound: !0
}), fr = Object.assign(function(t, n) {
    if (S(n)) return sr.t(t, n);
    if (u(n)) return A(t, n, sr);
    var i = t, r = i.name || "<unnamed flow>", o = function() {
        var t, n = this, u = arguments, o = ++or, s = rr(r + " - runid: " + o + " - init", i).apply(n, u), a = void 0, f = new Promise(function(n, i) {
            function u(t) {
                var n;
                a = void 0;
                try {
                    n = rr(r + " - runid: " + o + " - yield " + h++, s.next).call(s, t);
                } catch (t) {
                    return i(t);
                }
                c(n);
            }
            function f(t) {
                var n;
                a = void 0;
                try {
                    n = rr(r + " - runid: " + o + " - yield " + h++, s.throw).call(s, t);
                } catch (t) {
                    return i(t);
                }
                c(n);
            }
            function c(t) {
                if (!e(null == t ? void 0 : t.then)) return t.done ? n(t.value) : (a = Promise.resolve(t.value)).then(u, f);
                t.then(c, i);
            }
            var h = 0;
            t = i, u(void 0);
        });
        return f.cancel = rr(r + " - runid: " + o + " - cancel", function() {
            try {
                a && zt(a);
                var n = s.return(void 0), i = Promise.resolve(n.value);
                i.then(fi, fi), zt(i), t(new Ut);
            } catch (n) {
                t(n);
            }
        }), f;
    };
    return o.isMobXFlow = !0, o;
}, sr);
fr.bound = _(ar);
var cr = {
    has: function(t, n) {
        return _n(t).ft(n);
    },
    get: function(t, n) {
        return _n(t).ct(n);
    },
    set: function(t, n, i) {
        var r;
        return !!u(n) && (null == (r = _n(t).st(n, i, !0)) || r);
    },
    deleteProperty: function(t, n) {
        var i;
        return !!u(n) && (null == (i = _n(t).at(n, !0)) || i);
    },
    defineProperty: function(t, n, i) {
        var r;
        return null == (r = _n(t).l(n, i)) || r;
    },
    ownKeys: function(t) {
        return _n(t).ht();
    },
    preventExtensions: function() {
        t(13);
    }
}, hr = Symbol("mobx-keys"), lr = "update", vr = {
    get: function(t, n) {
        var i = t[di];
        return n === di ? i : "length" === n ? i.Ft() : "string" != typeof n || isNaN(n) ? b(br, n) ? br[n] : t[n] : i.ct(parseInt(n));
    },
    set: function(t, n, i) {
        var r = t[di];
        return "length" === n && r.Ht(i), "symbol" == typeof n || isNaN(n) ? t[n] = i : r.st(parseInt(n), i), !0;
    },
    preventExtensions: function() {
        t(15);
    }
}, dr = function() {
    function n(t, n, i, r) {
        void 0 === t && (t = "ObservableArray"), this.Ut = void 0, this.Xt = void 0, this.yt = void 0, this.O = [], this.vt = void 0, this.dt = void 0, this.zt = void 0, this.dehancer = void 0, this.v = void 0, this.$t = 0, this.Ut = i, this.Xt = r, this.yt = new bi(t), this.zt = function(t, i) {
            return n(t, i, "ObservableArray[..]");
        };
    }
    var i = n.prototype;
    return i.Jt = function(t) {
        return void 0 !== this.dehancer ? this.dehancer(t) : t;
    }, i.pt = function(t) {
        return void 0 !== this.dehancer && t.length > 0 ? t.map(this.dehancer) : t;
    }, i.ut = function(t) {
        return Sn(this, t);
    }, i.lt = function(t, n) {
        return void 0 === n && (n = !1), n && t({
            observableKind: "array",
            object: this.v,
            debugObjectName: this.yt.et,
            type: "splice",
            index: 0,
            added: this.O.slice(),
            addedCount: this.O.length,
            removed: [],
            removedCount: 0
        }), Mn(this, t);
    }, i.Ft = function() {
        return this.yt.reportObserved(), this.O.length;
    }, i.Ht = function(n) {
        ("number" != typeof n || isNaN(n) || n < 0) && t("Out of range: " + n);
        var i = this.O.length;
        if (n !== i) if (n > i) {
            for(var r = new Array(n - i), e = 0; e < n - i; e++)r[e] = void 0;
            this.bt(i, 0, r);
        } else this.bt(n, i - n);
    }, i.Yt = function(n, i) {
        n !== this.$t && t(16), this.$t += i, this.Xt && i > 0 && Fn(n + i + 1);
    }, i.bt = function(t, n, i) {
        var r = this, e = this.O.length;
        if (void 0 === t ? t = 0 : t > e ? t = e : t < 0 && (t = Math.max(0, e + t)), n = 1 === arguments.length ? e - t : null == n ? 0 : Math.max(0, Math.min(n, e - t)), void 0 === i && (i = ui), An(this)) {
            var u = xn(this, {
                object: this.v,
                type: "splice",
                index: t,
                removedCount: n,
                added: i
            });
            if (!u) return ui;
            n = u.removedCount, i = u.added;
        }
        if (i = 0 === i.length ? i : i.map(function(t) {
            return r.zt(t, void 0);
        }), this.Xt) {
            var o = i.length - n;
            this.Yt(e, o);
        }
        var s = this.Qt(t, n, i);
        return 0 === n && 0 === i.length || this.Zt(t, i, s), this.pt(s);
    }, i.Qt = function(t, n, i) {
        var r;
        if (i.length < 1e4) return (r = this.O).splice.apply(r, [
            t,
            n
        ].concat(i));
        var e = this.O.slice(t, t + n), u = this.O.slice(t + n);
        this.O.length += i.length - n;
        for(var o = 0; o < i.length; o++)this.O[t + o] = i[o];
        for(var s = 0; s < u.length; s++)this.O[t + i.length + s] = u[s];
        return e;
    }, i.tn = function(t, n, i) {
        var r = !this.Ut && !1, e = En(this), u = e || r ? {
            observableKind: "array",
            object: this.v,
            type: lr,
            debugObjectName: this.yt.et,
            index: t,
            newValue: n,
            oldValue: i
        } : null;
        this.yt.reportChanged(), e && Rn(this, u);
    }, i.Zt = function(t, n, i) {
        var r = !this.Ut && !1, e = En(this), u = e || r ? {
            observableKind: "array",
            object: this.v,
            debugObjectName: this.yt.et,
            type: "splice",
            index: t,
            removed: i,
            added: n,
            removedCount: i.length,
            addedCount: n.length
        } : null;
        this.yt.reportChanged(), e && Rn(this, u);
    }, i.ct = function(t) {
        if (!(this.Xt && t >= this.O.length)) return this.yt.reportObserved(), this.Jt(this.O[t]);
        console.warn("[mobx] Out of bounds read: " + t);
    }, i.st = function(n, i) {
        var r = this.O;
        if (this.Xt && n > r.length && t(17, n, r.length), n < r.length) {
            var e = r[n];
            if (An(this)) {
                var u = xn(this, {
                    type: lr,
                    object: this.v,
                    index: n,
                    newValue: i
                });
                if (!u) return;
                i = u.newValue;
            }
            (i = this.zt(i, e)) !== e && (r[n] = i, this.tn(n, i, e));
        } else {
            for(var o = new Array(n + 1 - r.length), s = 0; s < o.length - 1; s++)o[s] = void 0;
            o[o.length - 1] = i, this.bt(r.length, 0, o);
        }
    }, n;
}(), br = {
    clear: function() {
        return this.splice(0);
    },
    replace: function(t) {
        var n = this[di];
        return n.bt(0, n.O.length, t);
    },
    toJSON: function() {
        return this.slice();
    },
    splice: function(t, n) {
        for(var i = arguments.length, r = new Array(i > 2 ? i - 2 : 0), e = 2; e < i; e++)r[e - 2] = arguments[e];
        var u = this[di];
        switch(arguments.length){
            case 0:
                return [];
            case 1:
                return u.bt(t);
            case 2:
                return u.bt(t, n);
        }
        return u.bt(t, n, r);
    },
    spliceWithArray: function(t, n, i) {
        return this[di].bt(t, n, i);
    },
    push: function() {
        for(var t = this[di], n = arguments.length, i = new Array(n), r = 0; r < n; r++)i[r] = arguments[r];
        return t.bt(t.O.length, 0, i), t.O.length;
    },
    pop: function() {
        return this.splice(Math.max(this[di].O.length - 1, 0), 1)[0];
    },
    shift: function() {
        return this.splice(0, 1)[0];
    },
    unshift: function() {
        for(var t = this[di], n = arguments.length, i = new Array(n), r = 0; r < n; r++)i[r] = arguments[r];
        return t.bt(0, 0, i), t.O.length;
    },
    reverse: function() {
        return $i.trackingDerivation && t(37, "reverse"), this.replace(this.slice().reverse()), this;
    },
    sort: function() {
        $i.trackingDerivation && t(37, "sort");
        var n = this.slice();
        return n.sort.apply(n, arguments), this.replace(n), this;
    },
    remove: function(t) {
        var n = this[di], i = n.pt(n.O).indexOf(t);
        return i > -1 && (this.splice(i, 1), !0);
    }
};
Tn("at", Cn), Tn("concat", Cn), Tn("flat", Cn), Tn("includes", Cn), Tn("indexOf", Cn), Tn("join", Cn), Tn("lastIndexOf", Cn), Tn("slice", Cn), Tn("toString", Cn), Tn("toLocaleString", Cn), Tn("toSorted", Cn), Tn("toSpliced", Cn), Tn("with", Cn), Tn("every", In), Tn("filter", In), Tn("find", In), Tn("findIndex", In), Tn("findLast", In), Tn("findLastIndex", In), Tn("flatMap", In), Tn("forEach", In), Tn("map", In), Tn("some", In), Tn("toReversed", In), Tn("reduce", Ln), Tn("reduceRight", Ln);
var yr, pr, mr = h("ObservableArrayAdministration", dr), wr = {}, Or = "add";
yr = Symbol.iterator, pr = Symbol.toStringTag;
var jr, gr, _r = function() {
    function n(n, i, r) {
        var u = this;
        void 0 === i && (i = E), void 0 === r && (r = "ObservableMap"), this.zt = void 0, this.et = void 0, this[di] = wr, this.Ot = void 0, this.jt = void 0, this.wt = void 0, this.vt = void 0, this.dt = void 0, this.dehancer = void 0, this.zt = i, this.et = r, e(Map) || t(18), $n(function() {
            u.wt = x("ObservableMap.keys()"), u.Ot = new Map, u.jt = new Map, n && u.merge(n);
        });
    }
    var i = n.prototype;
    return i.ft = function(t) {
        return this.Ot.has(t);
    }, i.has = function(t) {
        var n = this;
        if (!$i.trackingDerivation) return this.ft(t);
        var i = this.jt.get(t);
        if (!i) {
            var r = i = new Pi(this.ft(t), M, "ObservableMap.key?", !1);
            this.jt.set(t, r), Pt(r, function() {
                return n.jt.delete(t);
            });
        }
        return i.get();
    }, i.set = function(t, n) {
        var i = this.ft(t);
        if (An(this)) {
            var r = xn(this, {
                type: i ? lr : Or,
                object: this,
                newValue: n,
                name: t
            });
            if (!r) return this;
            n = r.newValue;
        }
        return i ? this.nn(t, n) : this.in(t, n), this;
    }, i.delete = function(t) {
        var n = this;
        if (An(this) && !xn(this, {
            type: "delete",
            object: this,
            name: t
        })) return !1;
        if (this.ft(t)) {
            var i = En(this), r = i ? {
                observableKind: "map",
                debugObjectName: this.et,
                type: "delete",
                object: this,
                oldValue: this.Ot.get(t)._t,
                name: t
            } : null;
            return wn(function() {
                var i;
                n.wt.reportChanged(), null == (i = n.jt.get(t)) || i.St(!1), n.Ot.get(t).St(void 0), n.Ot.delete(t);
            }), i && Rn(this, r), !0;
        }
        return !1;
    }, i.nn = function(t, n) {
        var i = this.Ot.get(t);
        if ((n = i.At(n)) !== $i.UNCHANGED) {
            var r = En(this), e = r ? {
                observableKind: "map",
                debugObjectName: this.et,
                type: lr,
                object: this,
                oldValue: i._t,
                name: t,
                newValue: n
            } : null;
            i.St(n), r && Rn(this, e);
        }
    }, i.in = function(t, n) {
        var i = this;
        wn(function() {
            var r, e = new Pi(n, i.zt, "ObservableMap.key", !1);
            i.Ot.set(t, e), n = e._t, null == (r = i.jt.get(t)) || r.St(!0), i.wt.reportChanged();
        });
        var r = En(this);
        r && Rn(this, r ? {
            observableKind: "map",
            debugObjectName: this.et,
            type: Or,
            object: this,
            name: t,
            newValue: n
        } : null);
    }, i.get = function(t) {
        return this.has(t) ? this.Jt(this.Ot.get(t).get()) : this.Jt(void 0);
    }, i.Jt = function(t) {
        return void 0 !== this.dehancer ? this.dehancer(t) : t;
    }, i.keys = function() {
        return this.wt.reportObserved(), this.Ot.keys();
    }, i.values = function() {
        var t = this, n = this.keys();
        return Qn({
            next: function() {
                var i = n.next(), r = i.done;
                return {
                    done: r,
                    value: r ? void 0 : t.get(i.value)
                };
            }
        });
    }, i.entries = function() {
        var t = this, n = this.keys();
        return Qn({
            next: function() {
                var i = n.next(), r = i.done, e = i.value;
                return {
                    done: r,
                    value: r ? void 0 : [
                        e,
                        t.get(e)
                    ]
                };
            }
        });
    }, i[yr] = function() {
        return this.entries();
    }, i.forEach = function(t, n) {
        for(var i, r = g(this); !(i = r()).done;){
            var e = i.value;
            t.call(n, e[1], e[0], this);
        }
    }, i.merge = function(n) {
        var i = this;
        return Ar(n) && (n = new Map(n)), wn(function() {
            s(n) ? (function(t) {
                var n = Object.keys(t);
                if (!ci) return n;
                var i = Object.getOwnPropertySymbols(t);
                return i.length ? [].concat(n, i.filter(function(n) {
                    return ei.propertyIsEnumerable.call(t, n);
                })) : n;
            })(n).forEach(function(t) {
                return i.set(t, n[t]);
            }) : Array.isArray(n) ? n.forEach(function(t) {
                return i.set(t[0], t[1]);
            }) : l(n) ? (n.constructor !== Map && t(19, n), n.forEach(function(t, n) {
                return i.set(n, t);
            })) : null != n && t(20, n);
        }), this;
    }, i.clear = function() {
        var t = this;
        wn(function() {
            lt(function() {
                for(var n, i = g(t.keys()); !(n = i()).done;)t.delete(n.value);
            });
        });
    }, i.replace = function(n) {
        var i = this;
        return wn(function() {
            for(var r, e = function(n) {
                if (l(n) || Ar(n)) return n;
                if (Array.isArray(n)) return new Map(n);
                if (s(n)) {
                    var i = new Map;
                    for(var r in n)i.set(r, n[r]);
                    return i;
                }
                return t(21, n);
            }(n), u = new Map, o = !1, a = g(i.Ot.keys()); !(r = a()).done;){
                var f = r.value;
                if (!e.has(f)) if (i.delete(f)) o = !0;
                else {
                    var c = i.Ot.get(f);
                    u.set(f, c);
                }
            }
            for(var h, v = g(e.entries()); !(h = v()).done;){
                var d = h.value, b = d[0], y = d[1], p = i.Ot.has(b);
                if (i.set(b, y), i.Ot.has(b)) {
                    var m = i.Ot.get(b);
                    u.set(b, m), p || (o = !0);
                }
            }
            if (!o) if (i.Ot.size !== u.size) i.wt.reportChanged();
            else for(var w = i.Ot.keys(), O = u.keys(), j = w.next(), _ = O.next(); !j.done;){
                if (j.value !== _.value) {
                    i.wt.reportChanged();
                    break;
                }
                j = w.next(), _ = O.next();
            }
            i.Ot = u;
        }), this;
    }, i.toString = function() {
        return "[object ObservableMap]";
    }, i.toJSON = function() {
        return Array.from(this);
    }, i.lt = function(t) {
        return Mn(this, t);
    }, i.ut = function(t) {
        return Sn(this, t);
    }, p(n, [
        {
            key: "size",
            get: function() {
                return this.wt.reportObserved(), this.Ot.size;
            }
        },
        {
            key: pr,
            get: function() {
                return "Map";
            }
        }
    ]), n;
}(), Ar = h("ObservableMap", _r), Sr = {};
jr = Symbol.iterator, gr = Symbol.toStringTag;
var xr, Er, Mr = function() {
    function n(n, i, r) {
        var u = this;
        void 0 === i && (i = E), void 0 === r && (r = "ObservableSet"), this.et = void 0, this[di] = Sr, this.Ot = new Set, this.yt = void 0, this.dt = void 0, this.vt = void 0, this.dehancer = void 0, this.zt = void 0, this.et = r, e(Set) || t(22), this.zt = function(t, n) {
            return i(t, n, r);
        }, $n(function() {
            u.yt = x(u.et), n && u.replace(n);
        });
    }
    var i = n.prototype;
    return i.Jt = function(t) {
        return void 0 !== this.dehancer ? this.dehancer(t) : t;
    }, i.clear = function() {
        var t = this;
        wn(function() {
            lt(function() {
                for(var n, i = g(t.Ot.values()); !(n = i()).done;)t.delete(n.value);
            });
        });
    }, i.forEach = function(t, n) {
        for(var i, r = g(this); !(i = r()).done;){
            var e = i.value;
            t.call(n, e, e, this);
        }
    }, i.add = function(t) {
        var n = this;
        if (An(this) && !xn(this, {
            type: Or,
            object: this,
            newValue: t
        })) return this;
        if (!this.has(t)) {
            wn(function() {
                n.Ot.add(n.zt(t, void 0)), n.yt.reportChanged();
            });
            var i = En(this);
            i && Rn(this, i ? {
                observableKind: "set",
                debugObjectName: this.et,
                type: Or,
                object: this,
                newValue: t
            } : null);
        }
        return this;
    }, i.delete = function(t) {
        var n = this;
        if (An(this) && !xn(this, {
            type: "delete",
            object: this,
            oldValue: t
        })) return !1;
        if (this.has(t)) {
            var i = En(this), r = i ? {
                observableKind: "set",
                debugObjectName: this.et,
                type: "delete",
                object: this,
                oldValue: t
            } : null;
            return wn(function() {
                n.yt.reportChanged(), n.Ot.delete(t);
            }), i && Rn(this, r), !0;
        }
        return !1;
    }, i.has = function(t) {
        return this.yt.reportObserved(), this.Ot.has(this.Jt(t));
    }, i.entries = function() {
        var t = 0, n = Array.from(this.keys()), i = Array.from(this.values());
        return Qn({
            next: function() {
                var r = t;
                return t += 1, r < i.length ? {
                    value: [
                        n[r],
                        i[r]
                    ],
                    done: !1
                } : {
                    done: !0
                };
            }
        });
    }, i.keys = function() {
        return this.values();
    }, i.values = function() {
        this.yt.reportObserved();
        var t = this, n = 0, i = Array.from(this.Ot.values());
        return Qn({
            next: function() {
                return n < i.length ? {
                    value: t.Jt(i[n++]),
                    done: !1
                } : {
                    done: !0
                };
            }
        });
    }, i.replace = function(n) {
        var i = this;
        return Rr(n) && (n = new Set(n)), wn(function() {
            Array.isArray(n) || v(n) ? (i.clear(), n.forEach(function(t) {
                return i.add(t);
            })) : null != n && t("Cannot initialize set from " + n);
        }), this;
    }, i.lt = function(t) {
        return Mn(this, t);
    }, i.ut = function(t) {
        return Sn(this, t);
    }, i.toJSON = function() {
        return Array.from(this);
    }, i.toString = function() {
        return "[object ObservableSet]";
    }, i[jr] = function() {
        return this.values();
    }, p(n, [
        {
            key: "size",
            get: function() {
                return this.yt.reportObserved(), this.Ot.size;
            }
        },
        {
            key: gr,
            get: function() {
                return "Set";
            }
        }
    ]), n;
}(), Rr = h("ObservableSet", Mr), Nr = Object.create(null), Vr = function() {
    function n(t, n, i, r) {
        void 0 === n && (n = new Map), void 0 === r && (r = wi), this.h = void 0, this.O = void 0, this.et = void 0, this.rn = void 0, this.wt = void 0, this.dt = void 0, this.vt = void 0, this.v = void 0, this.p = void 0, this.en = void 0, this.un = void 0, this.h = t, this.O = n, this.et = i, this.rn = r, this.wt = new bi("ObservableObject.keys"), this.p = s(this.h);
    }
    var i = n.prototype;
    return i.j = function(t) {
        return this.O.get(t).get();
    }, i._ = function(t, n) {
        var i = this.O.get(t);
        if (i instanceof Wi) return i.set(n), !0;
        if (An(this)) {
            var r = xn(this, {
                type: lr,
                object: this.v || this.h,
                name: t,
                newValue: n
            });
            if (!r) return null;
            n = r.newValue;
        }
        if ((n = i.At(n)) !== $i.UNCHANGED) {
            var e = En(this), u = e ? {
                type: lr,
                observableKind: "object",
                debugObjectName: this.et,
                object: this.v || this.h,
                oldValue: i._t,
                name: t,
                newValue: n
            } : null;
            i.St(n), e && Rn(this, u);
        }
        return !0;
    }, i.ct = function(t) {
        return $i.trackingDerivation && !b(this.h, t) && this.ft(t), this.h[t];
    }, i.st = function(t, n, i) {
        return void 0 === i && (i = !1), b(this.h, t) ? this.O.has(t) ? this._(t, n) : i ? Reflect.set(this.h, t, n) : (this.h[t] = n, !0) : this.s(t, {
            value: n,
            enumerable: !0,
            writable: !0,
            configurable: !0
        }, this.rn, i);
    }, i.ft = function(t) {
        if (!$i.trackingDerivation) return t in this.h;
        this.un || (this.un = new Map);
        var n = this.un.get(t);
        return n || (n = new Pi(t in this.h, M, "ObservableObject.key?", !1), this.un.set(t, n)), n.get();
    }, i.o = function(n, i) {
        if (!0 === i && (i = this.rn), !1 !== i) {
            if (!(n in this.h)) {
                var r;
                if (null != (r = this.h[vi]) && r[n]) return;
                t(1, i.i, this.et + "." + n.toString());
            }
            for(var e = this.h; e && e !== ei;){
                var u = ii(e, n);
                if (u) {
                    var o = i.o(this, n, u, e);
                    if (0 === o) return;
                    if (1 === o) break;
                }
                e = Object.getPrototypeOf(e);
            }
            Gn(this, 0, n);
        }
    }, i.s = function(t, n, i, r) {
        if (void 0 === r && (r = !1), !0 === i && (i = this.rn), !1 === i) return this.l(t, n, r);
        var e = i.s(this, t, n, r);
        return e && Gn(this, 0, t), e;
    }, i.l = function(t, n, i) {
        void 0 === i && (i = !1);
        try {
            _t();
            var r = this.at(t);
            if (!r) return r;
            if (An(this)) {
                var e = xn(this, {
                    object: this.v || this.h,
                    name: t,
                    type: Or,
                    newValue: n.value
                });
                if (!e) return null;
                var u = e.newValue;
                n.value !== u && (n = m({}, n, {
                    value: u
                }));
            }
            if (i) {
                if (!Reflect.defineProperty(this.h, t, n)) return !1;
            } else ri(this.h, t, n);
            this.on(t, n.value);
        } finally{
            At();
        }
        return !0;
    }, i.g = function(t, n, i, r) {
        void 0 === r && (r = !1);
        try {
            _t();
            var e = this.at(t);
            if (!e) return e;
            if (An(this)) {
                var u = xn(this, {
                    object: this.v || this.h,
                    name: t,
                    type: Or,
                    newValue: n
                });
                if (!u) return null;
                n = u.newValue;
            }
            var o = Dn(t), s = {
                configurable: !$i.safeDescriptors || this.p,
                enumerable: !0,
                get: o.get,
                set: o.set
            };
            if (r) {
                if (!Reflect.defineProperty(this.h, t, s)) return !1;
            } else ri(this.h, t, s);
            var a = new Pi(n, i, "ObservableObject.key", !1);
            this.O.set(t, a), this.on(t, a._t);
        } finally{
            At();
        }
        return !0;
    }, i.m = function(t, n, i) {
        void 0 === i && (i = !1);
        try {
            _t();
            var r = this.at(t);
            if (!r) return r;
            if (An(this) && !xn(this, {
                object: this.v || this.h,
                name: t,
                type: Or,
                newValue: void 0
            })) return null;
            n.name || (n.name = "ObservableObject.key"), n.context = this.v || this.h;
            var e = Dn(t), u = {
                configurable: !$i.safeDescriptors || this.p,
                enumerable: !1,
                get: e.get,
                set: e.set
            };
            if (i) {
                if (!Reflect.defineProperty(this.h, t, u)) return !1;
            } else ri(this.h, t, u);
            this.O.set(t, new Wi(n)), this.on(t, void 0);
        } finally{
            At();
        }
        return !0;
    }, i.at = function(t, n) {
        if (void 0 === n && (n = !1), !b(this.h, t)) return !0;
        if (An(this) && !xn(this, {
            object: this.v || this.h,
            name: t,
            type: "remove"
        })) return null;
        try {
            var i, r;
            _t();
            var e, u = En(this), o = this.O.get(t), s = void 0;
            if (!o && u && (s = null == (e = ii(this.h, t)) ? void 0 : e.value), n) {
                if (!Reflect.deleteProperty(this.h, t)) return !1;
            } else delete this.h[t];
            o && (this.O.delete(t), o instanceof Pi && (s = o._t), xt(o)), this.wt.reportChanged(), null == (i = this.un) || null == (r = i.get(t)) || r.set(t in this.h), u && u && Rn(this, {
                type: "remove",
                observableKind: "object",
                object: this.v || this.h,
                debugObjectName: this.et,
                oldValue: s,
                name: t
            });
        } finally{
            At();
        }
        return !0;
    }, i.lt = function(t) {
        return Mn(this, t);
    }, i.ut = function(t) {
        return Sn(this, t);
    }, i.on = function(t, n) {
        var i, r, e = En(this);
        e && e && Rn(this, e ? {
            type: Or,
            observableKind: "object",
            debugObjectName: this.et,
            object: this.v || this.h,
            name: t,
            newValue: n
        } : null), null == (i = this.un) || null == (r = i.get(t)) || r.set(!0), this.wt.reportChanged();
    }, i.ht = function() {
        return this.wt.reportObserved(), hi(this.h);
    }, i.ot = function() {
        return this.wt.reportObserved(), Object.keys(this.h);
    }, n;
}(), kr = h("ObservableObjectAdministration", Vr), Tr = Wn(0), Cr = function() {
    var t = !1, n = {};
    return Object.defineProperty(n, "0", {
        set: function() {
            t = !0;
        }
    }), Object.create(n)[0] = 1, !1 === t;
}(), Ir = 0, Lr = function() {};
xr = Lr, Er = Array.prototype, Object.setPrototypeOf ? Object.setPrototypeOf(xr.prototype, Er) : void 0 !== xr.prototype.__proto__ ? xr.prototype.__proto__ = Er : xr.prototype = Er;
var Kr = function(t, n, i) {
    function r(n, i, r, e) {
        var u;
        return void 0 === r && (r = "ObservableArray"), void 0 === e && (e = !1), u = t.call(this) || this, $n(function() {
            var t = new dr(r, i, e, !0);
            t.v = O(u), c(O(u), di, t), n && n.length && u.spliceWithArray(0, 0, n), Cr && Object.defineProperty(O(u), "0", Tr);
        }), u;
    }
    w(r, t);
    var e = r.prototype;
    return e.concat = function() {
        this[di].yt.reportObserved();
        for(var t = arguments.length, n = new Array(t), i = 0; i < t; i++)n[i] = arguments[i];
        return Array.prototype.concat.apply(this.slice(), n.map(function(t) {
            return Kn(t) ? t.slice() : t;
        }));
    }, e[i] = function() {
        var t = this, n = 0;
        return Qn({
            next: function() {
                return n < t.length ? {
                    value: t[n++],
                    done: !1
                } : {
                    done: !0,
                    value: void 0
                };
            }
        });
    }, p(r, [
        {
            key: "length",
            get: function() {
                return this[di].Ft();
            },
            set: function(t) {
                this[di].Ht(t);
            }
        },
        {
            key: n,
            get: function() {
                return "Array";
            }
        }
    ]), r;
}(Lr, Symbol.toStringTag, Symbol.iterator);
Object.entries(br).forEach(function(t) {
    var n = t[0];
    "concat" !== n && f(Kr.prototype, n, t[1]);
}), Fn(1e3);
var Pr = ei.toString;
[
    "Symbol",
    "Map",
    "Set"
].forEach(function(i) {
    void 0 === n()[i] && t("MobX requires global '" + i + "' to be available or polyfilled");
}), "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: Nt,
    extras: {
        getDebugName: zn
    },
    $mobx: di
});
export { di as $mobx, Ut as FlowCancellationError, _r as ObservableMap, Mr as ObservableSet, Ji as Reaction, et as _allowStateChanges, kt as _allowStateChangesInsideComputed, yt as _allowStateReadsEnd, bt as _allowStateReadsStart, er as _autoAction, rt as _endAction, Xn as _getAdministration, mt as _getGlobalState, Yt as _interceptReads, ft as _isComputingDerivation, wt as _resetGlobalState, it as _startAction, rr as action, Ct as autorun, pi as comparer, Vi as computed, Bt as configure, x as createAtom, vn as defineProperty, an as entries, Gt as extendObservable, fr as flow, $t as flowResult, ln as get, Un as getAtom, zn as getDebugName, Wt as getDependencyTree, Ft as getObserverTree, hn as has, Qt as intercept, Tt as isAction, Di as isBoxedObservable, tn as isComputed, nn as isComputedProp, Jt as isFlow, Xt as isFlowCancellationError, en as isObservable, Kn as isObservableArray, Ar as isObservableMap, Bn as isObservableObject, un as isObservableProp, Rr as isObservableSet, on as keys, Vn as makeAutoObservable, Nn as makeObservable, Mi as observable, bn as observe, Kt as onBecomeObserved, Pt as onBecomeUnobserved, Et as onReactionError, mi as override, dn as ownKeys, Lt as reaction, cn as remove, kt as runInAction, fn as set, Nt as spy, pn as toJS, mn as trace, wn as transaction, lt as untracked, sn as values, On as when };
(async function() {
    if (!window.URLPattern) await import('./urlpattern.min.js');
})();
const allowedOrigins = [
    ''
];
if (window.location) allowedOrigins.push(window.location.origin);
function registerAllowedOrigin(uri) {
    allowedOrigins.push(uri);
}
class AppState {
    constructor(){
        this.state = {};
        Vn(this, {
            state: Mi
        });
    }
}
const appState = new AppState().state;
const scriptHost = {
    server: globalThis.Deno ? true : false,
    client: globalThis.Deno ? false : true
};
const registeredMessages = {};
const registeredDeviceMessages = {};
globalThis.addEventListener('message', (event)=>{
    const eventData = event.data;
    if (!eventData) {
        console.warn('An invalid message structure was received:', eventData);
        return;
    }
    const message = eventData ? eventData.split('::') : [];
    const subject = message[0];
    const data = message[1];
    let listenerFound = false;
    if (!subject) {
        console.warn('Missing message subject:', eventData);
        return;
    }
    if (!allowedOrigins.includes(event.origin)) {
        console.warn('Message origin not registered:', event.origin);
        return;
    }
    if (registeredDeviceMessages[subject]) {
        listenerFound = true;
        if (window.webkit) {
            window.webkit.messageHandlers.Device.postMessage(eventData);
        } else {
            window.Device.postMessage(eventData);
        }
    }
    if (registeredMessages[subject]) {
        listenerFound = true;
        const jsonData = data ? JSON.parse(data) : {};
        registeredMessages[subject](jsonData);
    }
    const children = document.querySelectorAll(`[el-listening]`);
    for (const childElement of children){
        if (childElement.subscribedTo$(subject)) {
            listenerFound = true;
            setTimeout(()=>{
                const jsonData = data ? JSON.parse(data) : {};
                childElement.onMessageReceived$(subject, jsonData);
            }, 0);
        }
    }
    if (!listenerFound) {
        console.warn(`No message listener was found for the subject '${subject}'`);
    }
}, false);
function subscribeTo(subject, handler) {
    registeredMessages[subject] = handler;
}
function deviceSubscribesTo(subject) {
    registeredDeviceMessages[subject] = true;
}
function emitMessage(subject, data, target) {
    if (target === undefined) target = window;
    if (data === undefined) data = {};
    if (typeof target.postMessage != 'function') throw 'target: Must be a window object';
    target.postMessage(`${subject}::${JSON.stringify(data)}`);
}
const registeredRoutes = {};
function registerRoute(path, handler) {
    if (path === undefined || typeof path != 'string') {
        console.warn('A path must be specified when registering a route:', path);
        return;
    }
    if (typeof handler != 'function') {
        console.warn('A valid hanlder must be specified when registering a route:', handler);
        return;
    }
    registeredRoutes[path] = handler;
}
globalThis.addEventListener('popstate', async ()=>{
    const href = window.location.href;
    for(const routePath in registeredRoutes){
        const route = {
            path: routePath,
            handler: registeredRoutes[routePath]
        };
        const pattern = new window.URLPattern({
            pathname: route.path
        });
        if (pattern.test(href)) {
            const params = pattern.exec(href).pathname.groups;
            let path;
            if (params[0]) {
                path = params[0];
                delete params[0];
            }
            const searchParams = new URLSearchParams(window.location.search);
            for (const [key, value] of searchParams.entries())params[key] = value;
            await route.handler(path, params);
            break;
        }
    }
}, false);
function navigateTo(path) {
    if (path === undefined) globalThis.dispatchEvent(new Event('popstate'));
    else if (path == window.location.pathname) return;
    else {
        window.history.pushState({}, '', path);
        dispatchEvent(new Event('popstate'));
    }
}
class Feature {
    constructor(flags){
        this.featureFlags = [];
        this.featureFlags = flags;
    }
    async flag(obj) {
        for(const prop in obj){
            let found = false;
            const flags = prop.split(',');
            for (const flag of flags){
                if (this.featureFlags.includes(flag) || flag == 'default') {
                    await obj[prop]();
                    found = true;
                    break;
                }
            }
            if (found) break;
        }
    }
}
const featureFlags = function() {
    if (scriptHost.client) {
        const featureFlags = window.document.cookie.split('; ').find((row)=>row.startsWith('featureFlags='));
        if (featureFlags) return featureFlags.split('=')[1].split(':');
    }
    return [];
}();
const feature = new Feature(featureFlags);
class RenderingStatus {
    constructor(){
        this.rootElement = null;
    }
    set document(value) {
        this.rootElement = value;
    }
    get atClient() {
        return this.rootElement.getAttribute('el-rendering-status') === 'client';
    }
    get atServer() {
        return this.rootElement.getAttribute('el-rendering-status') === 'server';
    }
    get loaded() {
        return this.rootElement.getAttribute('el-rendering-status') === null;
    }
}
const renderingStatus = new RenderingStatus();
async function runAtServer(fn) {
    if (renderingStatus.atServer) await fn();
}
async function runAtClient(fn) {
    if (renderingStatus.atClient || renderingStatus.loaded) await fn();
}
async function runOnLoaded(fn) {
    if (renderingStatus.loaded) await fn();
}
async function runOnce(fn) {
    if (renderingStatus.atServer || renderingStatus.loaded) await fn();
}
const componentFactory = {};
function registerComponent(name, initFunction) {
    componentFactory[name] = initFunction;
}
async function createDocumentFromFile(path, ctx, config) {
    if (scriptHost.server) {
        const file = await ctx.getPackageItem(path);
        if (file) {
            const content = new TextDecoder().decode(file.content);
            return await createDocument(content, ctx, config);
        } else throw 'File Not Found';
    } else {
        return '';
    }
}
async function createDocument(html, ctx, config) {
    if (scriptHost.server) {
        const document1 = ctx.parser.parseFromString(html, 'text/html');
        const appContext = {
            document: document1,
            getResource: async (path)=>{
                const file = await ctx.getPackageItem(path);
                if (file) {
                    const content = new TextDecoder().decode(file.content);
                    return content;
                } else throw 'File Not Found';
            },
            importModule: async (url)=>{
                return await import(url + `?eTag=${ctx.domain.hostname}:${ctx.domain.cacheDTS}`);
            },
            loadCaptions: async (url)=>{
                const module = await import(url + `?eTag=${ctx.domain.hostname}:${ctx.domain.cacheDTS}`);
                const captions = module['captions'];
                return (value, ...args)=>{
                    let caption = captions[value] || value;
                    if (args && args.length > 0) {
                        for(let i = 0; i < args.length; i++){
                            caption = caption.replaceAll('$' + (i + 1), args[i]);
                        }
                    }
                    return caption;
                };
            }
        };
        document1.documentElement.setAttribute('el-rendering-status', 'server');
        await renderComponents(config, document1.documentElement, appContext);
        return document1.documentElement.outerHTML;
    } else {
        return '';
    }
}
async function renderComponents(config, element, ctx) {
    if (typeof config == 'undefined') config = {
        autoRender: true,
        props: {}
    };
    if (config.autoRender === undefined) config.autoRender = true;
    const autoRender = config.autoRender === true;
    if (!element) {
        element = document.documentElement;
        renderingStatus.document = element;
    } else {
        renderingStatus.document = element.ownerDocument.documentElement;
    }
    if (!ctx) ctx = {
        document,
        getResource: async (path)=>{
            const response = await fetch(path);
            if (response.status === 200) {
                const content = await response.text();
                return content;
            } else throw 'File Not Found';
        },
        importModule: async (url)=>{
            return await import(url);
        },
        loadCaptions: async (url)=>{
            const module = await import(url);
            const captions = module['captions'];
            return (value, ...args)=>{
                let caption = captions[value] || value;
                if (args && args.length > 0) {
                    for(let i = 0; i < args.length; i++){
                        caption = caption.replaceAll('$' + (i + 1), args[i]);
                    }
                }
                return caption;
            };
        }
    };
    await createComponent(element, ctx);
    const elId = element.getAttribute('el-id') || 'root';
    if (renderingStatus.atServer) {
        if (elId == 'root') element.setAttribute('el-id', elId);
        const children = element.querySelectorAll('[el-id]');
        for (const childElement of children){
            createComponent(childElement, ctx);
            childElement.setAttribute('el-parent', elId);
            childElement.parent$ = element;
            if (autoRender && childElement.render$) await childElement.render$(config.props);
            element.children$[childElement.getAttribute('el-id')] = childElement;
        }
        element.setAttribute('el-rendering-status', 'client');
    } else if (renderingStatus.atClient) {
        const children = element.querySelectorAll(`[el-parent="${elId}"]`);
        for (const childElement of children){
            createComponent(childElement, ctx);
            childElement.parent$ = element;
            if (autoRender && childElement.render$) await childElement.render$(config.props);
            element.children$[childElement.getAttribute('el-id')] = childElement;
        }
        element.removeAttribute('el-rendering-status');
    } else {
        if (elId == 'root') element.setAttribute('el-id', elId);
        const children = element.querySelectorAll('[el-id]');
        for (const childElement of children){
            createComponent(childElement, ctx);
            childElement.setAttribute('el-parent', elId);
            childElement.parent$ = element;
            if (autoRender && childElement.render$) await childElement.render$(config.props);
            element.children$[childElement.getAttribute('el-id')] = childElement;
        }
    }
    return element.children$;
}
function createComponent(element, ctx) {
    if (element.extend$) return;
    const _state = {};
    const _messageListeners = {};
    let _parent = null;
    let _childComponents = {};
    let _themes = {};
    Object.defineProperties(element, {
        'extend$': {
            value: (obj)=>{
                const props = {};
                for(const prop in obj){
                    if (prop == 'render') {
                        props[prop + '$'] = {
                            value: async (props)=>{
                                if (typeof props !== 'object') props = {};
                                if (element.renderAtClient$ && scriptHost.server) return;
                                const propObject = obj[prop];
                                const attrs = {};
                                for (const attr of element.attributes){
                                    if (attr.name.startsWith('data-')) {
                                        attrs[attr.name.substring(5)] = attr.value || true;
                                    }
                                }
                                props = Object.assign(attrs, props);
                                await propObject(props);
                                if (renderingStatus.atServer && Object.keys(_state).length) {
                                    element.setAttribute('el-state', JSON.stringify(_state));
                                }
                                return element.children$;
                            }
                        };
                    } else if (typeof obj[prop] === 'function') {
                        props[prop + '$'] = {
                            value: obj[prop]
                        };
                    } else props[prop + '$'] = obj[prop];
                }
                Object.defineProperties(element, props);
            }
        },
        'id$': {
            get: ()=>{
                return element.getAttribute('el-id');
            }
        },
        'is$': {
            get: ()=>{
                return element.getAttribute('el-is');
            }
        },
        'children$': {
            get: ()=>{
                return _childComponents;
            }
        },
        'append$': {
            value: async (component, elId)=>{
                if (typeof component == 'string') {
                    if (component.startsWith('template:')) {
                        const name = component.split(':')[1];
                        const template = element.querySelector(`template[name="${name}"]`);
                        component = template.content.firstElementChild.cloneNode(true);
                        component.setAttribute('el-id', elId);
                    } else {
                        const container = ctx.document.createElement('div');
                        container.innerHTML = component;
                        component = container.firstElementChild;
                    }
                }
                component.setAttribute('el-parent', element.id$);
                elId = component.getAttribute('el-id') || elId;
                if (typeof element.children$[elId] != 'undefined') {
                    element.children$[elId].parent$ = element;
                    return element.children$[elId];
                }
                createComponent(component, ctx);
                component.parent$ = element;
                element.children$[elId] = component;
                element.append(component);
                return component;
            }
        },
        'prepend$': {
            value: async (component, elId)=>{
                if (typeof component == 'string') {
                    if (component.startsWith('template:')) {
                        const name = component.split(':')[1];
                        const template = element.querySelector(`template[name="${name}"]`);
                        component = template.content.firstElementChild.cloneNode(true);
                        component.setAttribute('el-id', elId);
                    } else {
                        const container = ctx.document.createElement('div');
                        container.innerHTML = component;
                        component = container.firstElementChild;
                    }
                }
                component.setAttribute('el-parent', element.id$);
                elId = component.getAttribute('el-id');
                if (typeof element.children$[elId] != 'undefined') {
                    element.children$[elId].parent$ = element;
                    return element.children$[elId];
                }
                createComponent(component, ctx);
                component.parent$ = element;
                element.children$[elId] = component;
                element.prepend(component);
                return component;
            }
        },
        'before$': {
            value: async (component, elId)=>{
                if (typeof component == 'string') {
                    if (component.startsWith('template:')) {
                        const name = component.split(':')[1];
                        const template = element.querySelector(`template[name="${name}"]`);
                        component = template.content.firstElementChild.cloneNode(true);
                        component.setAttribute('el-id', elId);
                    } else {
                        const container = ctx.document.createElement('div');
                        container.innerHTML = component;
                        component = container.firstElementChild;
                    }
                }
                component.setAttribute('el-parent', element.id$);
                elId = component.getAttribute('el-id');
                if (typeof element.parent$.children$[elId] != 'undefined') {
                    element.parent$.children$[elId].parent$ = element;
                    return element.parent$.children$[elId];
                }
                createComponent(component, ctx);
                component.parent$ = element.parent$;
                element.parent$.children$[elId] = component;
                element.before(component);
                return component;
            }
        },
        'after$': {
            value: async (component, elId)=>{
                if (typeof component == 'string') {
                    if (component.startsWith('template:')) {
                        const name = component.split(':')[1];
                        const template = element.querySelector(`template[name="${name}"]`);
                        component = template.content.firstElementChild.cloneNode(true);
                        component.setAttribute('el-id', elId);
                    } else {
                        const container = ctx.document.createElement('div');
                        container.innerHTML = component;
                        component = container.firstElementChild;
                    }
                }
                component.setAttribute('el-parent', element.id$);
                elId = component.getAttribute('el-id');
                if (typeof element.parent$.children$[elId] != 'undefined') {
                    element.parent$.children$[elId].parent$ = element;
                    return element.parent$.children$[elId];
                }
                createComponent(component, ctx);
                component.parent$ = element.parent$;
                element.parent$.children$[elId] = component;
                element.after(component);
                return component;
            }
        },
        'onMessageReceived$': {
            value: (subject, data)=>{
                if (_messageListeners[subject]) _messageListeners[subject](data);
            }
        },
        'onStateChange$': {
            value: (dataFunc, reactiveFunc)=>{
                Lt(dataFunc, reactiveFunc);
            }
        },
        'parent$': {
            set: (value)=>{
                _parent = value;
            },
            get: ()=>{
                return _parent;
            }
        },
        'remove$': {
            value: ()=>{
                delete element.parent$.children$[element.id$];
                element.parent$.removeChild(element);
            }
        },
        'removeChild$': {
            value: (elId)=>{
                element.removeChild(element.children$[elId]);
                delete element.children$[elId];
            }
        },
        'removeChildren$': {
            value: ()=>{
                _childComponents = {};
                const count = element.children.length;
                for(let i = count - 1; i >= 0; i--){
                    if (element.children[i].hasAttribute('el-id')) element.children[i].remove();
                }
            }
        },
        'renderAtClient$': {
            get: ()=>{
                return element.getAttribute('el-render-at') === 'client';
            }
        },
        'subscribedTo$': {
            value: (subject)=>{
                return _messageListeners[subject] ? true : false;
            }
        },
        'subscribeTo$': {
            value: (subject, handler)=>{
                _messageListeners[subject] = handler;
                element.setAttribute('el-listening', 'true');
            }
        },
        'theme$': {
            set: (theme)=>{
                for(const elId in _themes[theme]){
                    if (element.children$[elId]) {
                        element.children$[elId].setAttribute('style', _themes[theme][elId]);
                    }
                }
            }
        },
        'unsubscribeTo$': {
            value: (subject)=>{
                delete _messageListeners[subject];
                if (Object.keys(_messageListeners).length === 0) element.removeAttribute('el-listening');
            }
        },
        'useState$': {
            value: (obj)=>{
                if (renderingStatus.atClient && element.hasAttribute('el-state')) {
                    Object.assign(_state, JSON.parse(element.getAttribute('el-state')));
                    element.removeAttribute('el-state');
                } else {
                    Object.assign(_state, obj);
                }
                return _state;
            }
        },
        'useTemplate$': {
            value: async (template, func)=>{
                if (renderingStatus.atServer) {
                    template = sanitize(template);
                    _childComponents = {};
                    loadTemplate(element, template);
                    await parseTemplate(element, ctx);
                } else if (element.hasAttribute('el-rendered')) {
                    await parseTemplate(element, ctx);
                } else {
                    if (func) {
                        setTimeout(async ()=>{
                            if (template.startsWith('/') && template === element.getAttribute('el-view-template')) return;
                            _childComponents = {};
                            loadTemplate(element, template);
                            await parseTemplate(element, ctx);
                            func();
                        }, 0);
                    } else {
                        _childComponents = {};
                        loadTemplate(element, template);
                        await parseTemplate(element, ctx);
                    }
                }
                return element.children$;
            }
        },
        'useTemplateUrl$': {
            value: async (url, func)=>{
                if (renderingStatus.atServer) {
                    _childComponents = {};
                    await loadTemplateUrl(element, ctx, url);
                    await parseTemplate(element, ctx);
                } else if (element.hasAttribute('el-rendered')) {
                    await parseTemplate(element, ctx);
                } else {
                    if (func) {
                        setTimeout(async ()=>{
                            if (url === element.getAttribute('el-view-template')) return;
                            _childComponents = {};
                            await loadTemplateUrl(element, ctx, url);
                            await parseTemplate(element, ctx);
                            func();
                        }, 0);
                    } else {
                        if (url === element.getAttribute('el-view-template')) return;
                        _childComponents = {};
                        await loadTemplateUrl(element, ctx, url);
                        await parseTemplate(element, ctx);
                    }
                }
                return element.children$;
            }
        },
        'useThemes$': {
            value: (themes, theme)=>{
                for(const theme in themes){
                    for(const elId in themes[theme]){
                        if (typeof themes[theme][elId] == 'object') {
                            let styleValue = '';
                            for(const style in themes[theme][elId]){
                                styleValue += `${style}:${themes[theme][elId][style]};`;
                            }
                            themes[theme][elId] = styleValue;
                        }
                    }
                }
                _themes = themes;
                if (theme) element.theme$ = theme;
            }
        }
    });
    const type = element.getAttribute('el-is') || 'component';
    if (componentFactory[type]) componentFactory[type](element, ctx);
    else console.warn(`The component type '${type}' is not registered.`);
}
function loadTemplate(element, template) {
    if (!template) return;
    if (renderingStatus.atClient && element.getAttribute('el-view-template') !== null) return;
    element.setAttribute('el-view-template', 'component');
    element.innerHTML = template;
}
async function loadTemplateUrl(element, ctx, url) {
    if (!url) return;
    if (renderingStatus.atClient && element.getAttribute('el-view-template') !== null) return;
    const template = await ctx.getResource(url);
    element.setAttribute('el-view-template', url);
    element.innerHTML = template;
}
async function parseTemplate(element, ctx) {
    if (renderingStatus.atServer) {
        const children = element.querySelectorAll('[el-id]');
        for (const childElement of children){
            childElement.setAttribute('el-parent', element.getAttribute('el-id'));
            createComponent(childElement, ctx);
            element.children$[childElement.getAttribute('el-id')] = childElement;
        }
        element.setAttribute('el-rendered', null);
    } else if (element.hasAttribute('el-rendered')) {
        const children = element.querySelectorAll(`[el-parent="${element.getAttribute('el-id')}"]`);
        for (const childElement of children){
            createComponent(childElement, ctx);
            element.children$[childElement.getAttribute('el-id')] = childElement;
        }
    } else {
        const children = element.querySelectorAll('[el-id]');
        for (const childElement of children){
            createComponent(childElement, ctx);
            element.children$[childElement.getAttribute('el-id')] = childElement;
        }
    }
}
function sanitize(code) {
    const sanitizedCode = code.replaceAll(/\?eTag=[a-zA-Z0-9:]+[\"]/g, '\"').replaceAll(/\?eTag=[a-zA-Z0-9:]+[\']/g, '\'');
    return sanitizedCode;
}
registerComponent('component', (el, ctx)=>{
    el.extend$({
        render: async (props)=>{
            el.useTemplate$('');
        },
        load: async (value, props)=>{
            const module = await ctx.importModule(value);
            const component = await el.append$(`<div el-is="${module.componentName}" el-id="component"></div>`);
            await component.render$(props);
        }
    });
});
registerComponent('link', (element)=>{
    let _onclick = null;
    element.extend$({
        render: (props)=>{
            if (typeof props.onclick !== 'function' && element.hasAttribute('onclick')) {
                props.onclick = element.onclick || (()=>{});
            }
            element.disabled$ = props.disabled || false;
            element.href$ = props.href;
            element.onclick$ = props.onclick;
            element.value$ = props.value;
        },
        click: ()=>{
            element.click();
        },
        disabled: {
            set: (value)=>{
                if (typeof value != 'boolean') return;
                if (value) element.setAttribute('disabled', '');
                else element.removeAttribute('disabled');
            },
            get: ()=>{
                return element.hasAttribute('disabled');
            }
        },
        href: {
            set: (value)=>{
                if (typeof value != 'string') return;
                element.href = value;
            },
            get: ()=>{
                return element.href;
            }
        },
        onclick: {
            set: (value)=>{
                if (typeof value != 'function') return;
                element.removeEventListener('click', _onclick);
                _onclick = (event)=>{
                    event.preventDefault();
                    if (element.disabled$) return;
                    if (value(event) === false) return;
                    if (element.href$) navigateTo(element.href$);
                };
                element.addEventListener("click", _onclick);
            }
        },
        value: {
            set: (value)=>{
                if (typeof value != 'string') return;
                element.textContent = value;
            },
            get: ()=>{
                return element.textContent;
            }
        }
    });
});
export { registerAllowedOrigin as registerAllowedOrigin };
export { appState as appState };
export { scriptHost as scriptHost };
export { subscribeTo as subscribeTo };
export { deviceSubscribesTo as deviceSubscribesTo };
export { emitMessage as emitMessage };
export { registerRoute as registerRoute };
export { navigateTo as navigateTo };
export { feature as feature };
export { runAtServer as runAtServer };
export { runAtClient as runAtClient };
export { runOnLoaded as runOnLoaded };
export { runOnce as runOnce };
export { registerComponent as registerComponent };
export { createDocumentFromFile as createDocumentFromFile };
export { createDocument as createDocument };
export { renderComponents as renderComponents };
export { createComponent as createComponent };
