/*! Sly 1.0.0-rc.6 - 6th Feb 2013 | https://github.com/Darsain/sly */
(function (h, w, Q) {
    function $(f, a, ea) {
        var ia, n, ja, x, w, J; function F(c, ya) {
            if (G && b.released) { var g = ka(c), pa = c > d.start && c < d.end; R ? (pa && (c = m[g.centerItem].center), B && e.activate(g.centerItem, 1)) : pa && (c = m[g.firstItem].start) } !b.released && "slidee" === b.source && a.elasticBounds ? c > d.end ? c = d.end + (c - d.end) / 6 : c < d.start && (c = d.start + (c - d.start) / 6) : c = H(c, d.start, d.end); ia = +new Date; n = 0; ja = d.cur; x = c; w = c - d.cur; J = ya; d.dest = c; b.released && !S && e.cycle(); h.extend(j, ka(void 0)); $(); aa[0] && I.page !== j.activePage && (I.page = j.activePage,
aa.removeClass(a.activeClass).eq(j.activePage).addClass(a.activeClass)); c !== d.cur && (z("change"), M || L())
        } function L() {
            M ? (J || (!b.released ? "slidee" === b.source : 33 > a.speed) ? d.cur = x : !b.released && "handle" === b.source ? d.cur += (x - d.cur) * a.syncFactor : (n = Math.min(+new Date - ia, a.speed), d.cur = ja + w * jQuery.easing[a.easing](n / a.speed, n, 0, 1, a.speed)), x === Math.round(d.cur) && (!b.released || n >= a.speed) ? (d.cur = d.dest, M = 0) : M = fa(L), z("move"), C || (A ? s[0].style[A] = la + (a.horizontal ? "translateX" : "translateY") + "(" + -d.cur + "px)" :
s[0].style[a.horizontal ? "left" : "top"] = -Math.round(d.cur) + "px"), !M && b.released && z("moveEnd"), O()) : (M = fa(L), b.released && z("moveStart"))
        } function O() { y && (q.cur = d.start === d.end ? 0 : ((!b.released && "handle" === b.source ? d.dest : d.cur) - d.start) / (d.end - d.start) * q.end, q.cur = H(Math.round(q.cur), q.start, q.end), I.hPos !== q.cur && (I.hPos = q.cur, A ? y[0].style[A] = la + (a.horizontal ? "translateX" : "translateY") + "(" + q.cur + "px)" : y[0].style[a.horizontal ? "left" : "top"] = q.cur + "px")) } function P(c, a, g) {
            "boolean" === typeof a && (g = a, a = Q);
            a === Q ? F(d[c]) : R && "center" !== c || (a = e.getPos(a)) && F(a[c], g)
        } function ma(c) { return T(c) ? H(c, 0, m.length - 1) : c === Q ? -1 : t.index(c) } function ka(c) {
            c = H(T(c) ? c : d.dest, d.start, d.end); var a = {}, g = B ? 0 : u / 2; if (!C) for (var b = 0, e = v.length; b < e; b++) { if (c >= d.end || b === v.length - 1) { a.activePage = v.length - 1; break } if (c <= v[b] + g) { a.activePage = b; break } } if (G) {
                for (var e = b = g = !1, f = 0, j = m.length; f < j; f++) { !1 === g && c <= m[f].start && (g = f); !1 === e && c - m[f].size / 2 <= m[f].center && (e = f); if (f === m.length - 1 || !1 === b && c < m[f + 1].end) b = f; if (!1 !== b) break } a.firstItem =
T(g) ? g : 0; a.centerItem = T(e) ? e : a.firstItem; a.lastItem = T(b) ? b : a.centerItem
            } return a
        } function $() {
            if (G) { var c = 0 === j.activeItem, b = j.activeItem >= m.length - 1, g = c ? "first" : b ? "last" : "middle"; I.itemsButtonState !== g && (I.itemsButtonState = g, U.is("button,input") && U.prop("disabled", c), V.is("button,input") && V.prop("disabled", b), U[c ? "removeClass" : "addClass"](a.disabledClass), V[b ? "removeClass" : "addClass"](a.disabledClass)) } aa[0] && (c = d.dest <= d.start, b = d.dest >= d.end, g = c ? "first" : b ? "last" : "middle", I.pagesButtonState !== g &&
(I.pagesButtonState = g, W.is("button,input") && W.prop("disabled", c), X.is("button,input") && X.prop("disabled", b), W[c ? "removeClass" : "addClass"](a.disabledClass), X[b ? "removeClass" : "addClass"](a.disabledClass)))
        } function da(a) { return Math.round(H(a, q.start, q.end) / q.end * (d.end - d.start)) + d.start } function qa(c) {
            var e = "touchstart" === c.type, g = c.data.source, f = "slidee" === g; if (e || 1 >= c.which) r(c), b.source = g, b.$source = h(c.target), b.init = 0, b.released = 0, b.touch = e, b.initLoc = (e ? c.originalEvent.touches[0] : c)[a.horizontal ?
"pageX" : "pageY"], b.initPos = f ? d.cur : q.cur, b.start = +new Date, b.time = 0, b.path = 0, b.pathMin = f ? -b.initLoc : -q.cur, b.pathMax = f ? document[a.horizontal ? "width" : "height"] - b.initLoc : q.end - q.cur, (f ? s : y).addClass(a.draggedClass), ga.on(e ? ra : sa, ta)
        } function ta(c) {
            b.released = "mouseup" === c.type || "touchend" === c.type; b.path = H((b.touch ? c.originalEvent[b.released ? "changedTouches" : "touches"][0] : c)[a.horizontal ? "pageX" : "pageY"] - b.initLoc, b.pathMin, b.pathMax); if (!b.init && (Math.abs(b.path) > (b.touch ? 50 : 10) || "handle" === b.source)) b.init =
1, "slidee" === b.source && (ha = 1), e.pause(1), b.$source.on("click", function g(a) { r(a, 1); "slidee" === b.source && (ha = 0); b.$source.off("click", g) }), z("moveStart"); b.init && (r(c), b.released && ("slidee" === b.source && 33 < a.speed) && (b.path += 200 * b.path / (+new Date - b.start)), F("slidee" === b.source ? Math.round(b.initPos - b.path) : da(b.initPos + b.path))); b.released && (ga.off(b.touch ? ra : sa, ta), ("slidee" === b.source ? s : y).removeClass(a.draggedClass), d.cur === d.dest && z("moveEnd"))
        } function z(c, b, g, e, h) {
            switch (c) {
                case "active": g = b;
                    b = t; break; case "activePage": g = b; b = v; break; default: h = b, b = d, g = t, e = j
            } if (l[c]) for (var k = 0, m = l[c].length; k < m; k++) l[c][k].call(f, b, g, e, h); a.domEvents && !C && D.trigger(ba + ":" + c, [b, g, e, h])
        } a = h.extend({}, h.fn[ba].defaults, a); var e = this, ua = 0, C = T(f), ga = h(document), D = h(f), s = D.children().eq(0), u = 0, p = 0, d = { start: 0, center: 0, end: 0, cur: 0, dest: 0 }, E = h(a.scrollBar).eq(0), y = E.length ? E.children().eq(0) : 0, ca = 0, N = 0, q = { start: 0, end: 0, cur: 0 }, Y = h(a.pagesBar), aa = 0, v = [], na = "basic" === a.itemNav, va = "smart" === a.itemNav, B = "forceCentered" ===
a.itemNav, R = "centered" === a.itemNav || B, G = !C && (na || va || R || B), t = 0, m = [], j = { firstItem: 0, lastItem: 1, centerItem: 1, activeItem: -1, activePage: 0, items: 0, pages: 0 }, wa = a.scrollSource ? h(a.scrollSource) : D, oa = a.dragSource ? h(a.dragSource) : D, U = h(a.prev), V = h(a.next), W = h(a.prevPage), X = h(a.nextPage), l = {}, I = {}; J = w = x = ja = n = ia = void 0; var b = { released: 1 }, xa = "touchstart." + k + " mousedown." + k, sa = "mousemove." + k + " mouseup." + k, ra = "touchmove." + k + " touchend." + k, M = 0, K = 0, S = 0, ha = 0, za = e.reload = function () {
    var c = 0; d.old = h.extend({}, d); u = C ?
0 : D[a.horizontal ? "width" : "height"](); ca = E[a.horizontal ? "width" : "height"](); p = C ? f : s[a.horizontal ? "outerWidth" : "outerHeight"](); v = []; d.start = 0; d.end = Math.max(p - u, 0); I = {}; if (G) {
        t = s.children(":visible"); j.items = t.length; m = []; var b = Z(s, a.horizontal ? "paddingLeft" : "paddingTop"), g = Z(s, a.horizontal ? "paddingRight" : "paddingBottom"), k = Z(t, a.horizontal ? "marginLeft" : "marginTop"), c = Z(t.slice(-1), a.horizontal ? "marginRight" : "marginBottom"), ea = 0, n = "none" !== t.css("float"), c = k ? 0 : c; p = 0; t.each(function (c, e) {
            var d = h(e),
f = d[a.horizontal ? "outerWidth" : "outerHeight"](!0), j = Z(d, a.horizontal ? "marginLeft" : "marginTop"), d = Z(d, a.horizontal ? "marginRight" : "marginBottom"), l = { size: f, start: p - (!c || a.horizontal ? 0 : j), center: p - Math.round(u / 2 - f / 2), end: p - u + f - (k ? 0 : d) }; c || (ea = -(B ? Math.round(u / 2 - f / 2) : 0) + b, p += b); p += f; !a.horizontal && !n && d && (j && 0 < c) && (p -= Math.min(j, d)); c === t.length - 1 && (p += g); m.push(l)
        }); s[0].style[a.horizontal ? "width" : "height"] = p + "px"; p -= c; d.start = ea; d.end = B ? m[m.length - 1].center : Math.max(p - u, 0); j.activeItem >= m.length ? e.activate(m.length -
1) : 1 === m.length && t.eq(j.activeItem).addClass(a.activeClass)
    } d.center = Math.round(d.end / 2 + d.start / 2); h.extend(j, ka(void 0)); y && (N = a.dynamicHandle ? Math.round(ca * u / p) : y[a.horizontal ? "outerWidth" : "outerHeight"](), a.dynamicHandle && (N = H(N, a.minHandleSize, ca), y[0].style[a.horizontal ? "width" : "height"] = N + "px"), q.end = ca - N, M || O()); if (!C) {
        var l = d.start, c = "", x = 0; if (G) h.each(m, function (a, c) { if (B || c.start + c.size > l) l = c[B ? "center" : "start"], v.push(l), l += u }); else for (; l - u <= d.end; ) v.push(l), l += u; if (Y[0]) {
            for (var r = 0; r <
v.length; r++) c += a.pageBuilder(x++); aa = h(c).appendTo(Y.empty())
        } 
    } F(H(d.dest, d.start, d.end)); j.pages = v.length; j.slideeSize = p; j.frameSize = u; j.sbSize = ca; j.handleSize = N; z("load")
}; e.getPos = function (c) { if (c === Q) return d; if (G) return c = ma(c), -1 !== c ? m[c] : !1; var b = s.find(c).eq(0); return b[0] ? (c = a.horizontal ? b.offset().left - s.offset().left : b.offset().top - s.offset().top, b = b[a.horizontal ? "outerWidth" : "outerHeight"](), { start: c, center: c - u / 2 + b / 2, end: c - u + b, size: b }) : !1 }; e.getRel = function () { return j }; e.prev = function () {
    e.activate(j.activeItem -
1)
}; e.next = function () { e.activate(j.activeItem + 1) }; e.prevPage = function () { e.activatePage(j.activePage - 1) }; e.nextPage = function () { e.activatePage(j.activePage + 1) }; e.slideBy = function (c, a) { F(d.dest + c, a) }; e.slideTo = function (a, b) { F(a, b) }; e.toStart = function (a, b) { P("start", a, b) }; e.toEnd = function (a, b) { P("end", a, b) }; e.toCenter = function (a, b) { P("center", a, b) }; e.activate = function (c, d) {
    if (G && c !== Q) {
        var g = ma(c), f = j.activeItem; j.activeItem = g; t.eq(f).removeClass(a.activeClass); t.eq(g).addClass(a.activeClass); $(); g !==
f && z("active", g); d || (R ? e.toCenter(g) : va && (g >= j.lastItem ? e.toStart(g) : g <= j.firstItem ? e.toEnd(g) : b.released && !S && e.cycle()))
    } 
}; e.activatePage = function (a) { v.length && (a = H(a, 0, v.length - 1), F(v[a]), z("activePage", a)) }; e.cycle = function (c) {
    if (a.cycleBy && a.cycleInterval && !("items" === a.cycleBy && !m[0] || c && S)) S = 0, K ? K = clearTimeout(K) : z("cycleStart"), K = setTimeout(function () {
        switch (a.cycleBy) {
            case "items": e.activate(j.activeItem >= m.length - 1 ? 0 : j.activeItem + 1); break; case "pages": e.activatePage(j.activePage >= v.length -
1 ? 0 : j.activePage + 1)
        } z("cycle")
    }, a.cycleInterval)
}; e.pause = function (a) { a || (S = !0); K && (K = clearTimeout(K), z("cyclePause")) }; e.toggle = function () { e[K ? "pause" : "cycle"]() }; e.set = function (c, b) { h.isPlainObject(c) ? h.extend(a, c) : a.hasOwnProperty(c) && (a[c] = b) }; e.on = function (a, b) {
    if ("object" === typeof a) for (var g in a) { if (a.hasOwnProperty(g)) e.on(g, a[g]) } else if (b instanceof Array) { g = 0; for (var d = b.length; g < d; g++) e.on(a, b[g]) } else if ("function" === typeof b) {
        l[a] = l[a] || []; g = 0; for (d = l[a].length; g < d; g++) if (l[a][g] ===
b) return; l[a].push(b)
    } 
}; e.off = function (a, b) { if (l[a]) if (b instanceof Array) for (var g = 0, d = b.length; g < d; g++) e.off(a, b[g]); else if ("function" === typeof b) { g = 0; for (d = l[a].length; g < d; g++) l[a][g] === b && l[a].splice(g, 1) } else l[a].length = 0 }; e.destroy = function () {
    ga.add(s).add(wa).add(y).add(E).add(Y).add(U).add(V).add(W).add(X).unbind("." + k); U.add(V).add(W).add(X).removeClass(a.disabledClass); t && t.eq(j.activeItem).removeClass(a.activeClass); Y.empty(); C || (D.unbind("." + k), s.add(y).css(A || (a.horizontal ? "left" : "top"),
A ? "none" : 0), h.removeData(f, k))
}; e.init = function () {
    if (!ua) {
        e.on(ea); if (!C) { D.css("overflow", "hidden"); var b = s.add(y); if (A) { var f = {}; f[A] = "translateZ(0)"; b.css(f) } else "static" === D.css("position") && D.css("position", "relative"), b.css({ position: "absolute" }) } !A && "static" === E.css("position") && E.css("position", "relative"); za(); G ? e.activate(a.startAt) : F(a.startAt); if (a.scrollBy) wa.on("DOMMouseScroll." + k + " mousewheel." + k, function (b) {
            if (d.start !== d.end) {
                r(b, 1); b = b.originalEvent; var c = 0; b.wheelDelta && (c = 0 > b.wheelDelta /
120); b.detail && (c = 0 > -b.detail / 3); G ? (b = ma((R ? B ? j.activeItem : j.centerItem : j.firstItem) + (c ? a.scrollBy : -a.scrollBy)), e[R ? B ? "activate" : "toCenter" : "toStart"](b)) : e.slideBy(c ? a.scrollBy : -a.scrollBy)
            } 
        }); if (a.clickBar && E[0]) E.on("click." + k, function (b) { 1 >= b.which && (r(b), F(da((a.horizontal ? b.clientX - E.offset().left : b.clientY - E.offset().top) - N / 2))) }); a.keyboardNavBy && ga.bind("keydown." + k, function (b) {
            switch (b.which) {
                case a.horizontal ? 37 : 38: r(b); e["pages" === a.keyboardNavBy ? "prevPage" : "prev"](); break; case a.horizontal ?
39 : 40: r(b), e["pages" === a.keyboardNavBy ? "nextPage" : "next"]()
            } 
        }); if (a.prev) U.on("click." + k, function (a) { r(a); e.prev() }); if (a.next) V.on("click." + k, function (a) { r(a); e.next() }); if (a.prevPage) W.on("click." + k, function (a) { r(a); e.prevPage() }); if (a.nextPage) X.on("click." + k, function (a) { r(a); e.nextPage() }); s.on("click." + k, "*", function (a) { 1 >= a.which && (this.parentNode === a.delegateTarget && !ha) && e.activate(this); ha = 0 }); if (Y[0]) Y.on("click." + k, "*", function () { e.activatePage(aa.index(this)) }); if (a.dragging) oa.on(xa,
{ source: "slidee" }, qa); if (a.dragHandle && y) y.on(xa, { source: "handle" }, qa); if (a.cycleBy && !C) { if (a.pauseOnHover) D.on("mouseenter." + k + " mouseleave." + k, function (a) { if (!S) e["mouseenter" === a.type ? "pause" : "cycle"](1) }); e[a.startPaused ? "pause" : "cycle"]() } ua = 1; return e
    } 
} 
    } function r(f, a) { f = f || w.event; f.preventDefault ? f.preventDefault() : f.returnValue = !1; a && (f.stopPropagation ? f.stopPropagation() : f.cancelBubble = !0) } function T(f) { return !isNaN(parseFloat(f)) && isFinite(f) } function Z(f, a) {
        return parseInt(f.css(a), 10) ||
0
    } function H(f, a, h) { return f < a ? a : f > h ? h : f } for (var ba = "sly", k = ba, n = w.cancelAnimationFrame || w.cancelRequestAnimationFrame, fa = w.requestAnimationFrame, A, la, L = window, O = ["moz", "webkit", "o"], da = 0, J = 0, na = O.length; J < na && !n; ++J) fa = (n = L[O[J] + "CancelAnimationFrame"] || L[O[J] + "CancelRequestAnimationFrame"]) && L[O[J] + "RequestAnimationFrame"]; n || (fa = function (f) { var a = +new Date, h = Math.max(0, 16 - (a - da)); da = a + h; return L.setTimeout(function () { f(a + h) }, h) }, n = function (f) { clearTimeout(f) }); var n = function (f) {
        for (var a = 0, h = P.length; a <
h; a++) { var k = P[a] ? P[a] + f.charAt(0).toUpperCase() + f.slice(1) : f; if (oa.style[k] !== Q) return k } 
    }, P = ["", "webkit", "moz", "ms", "o"], oa = document.createElement("div"); A = n("transform"); la = n("perspective") ? "translateZ(0) " : ""; w.Sly = $; h.fn[ba] = function (f, a) { var n, r; if (!h.isPlainObject(f)) { if ("string" === typeof f || !1 === f) n = !1 === f ? "destroy" : f, r = Array.prototype.slice.call(arguments, 1); f = {} } return this.each(function (A, w) { var x = h.data(w, k); !x && !n ? h.data(w, k, (new $(w, f, a)).init()) : x && n && x[n] && x[n].apply(x, r) }) }; h.fn[ba].defaults =
{ horizontal: 0, itemNav: null, scrollBar: null, dragHandle: 0, dynamicHandle: 0, minHandleSize: 50, clickBar: 0, syncFactor: 0.5, pagesBar: null, pageBuilder: function (f) { return "<li>" + (f + 1) + "</li>" }, prev: null, next: null, prevPage: null, nextPage: null, cycleBy: null, cycleInterval: 5E3, pauseOnHover: 0, startPaused: 0, scrollBy: 0, dragging: 0, elasticBounds: 0, speed: 0, easing: "swing", scrollSource: null, dragSource: null, startAt: 0, keyboardNavBy: 0, domEvents: 0, draggedClass: "dragged", activeClass: "active", disabledClass: "disabled"}
})(jQuery, window);

/* End Sly 1.0.0-rc.6 - 6th Feb 2013 */