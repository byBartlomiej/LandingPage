!function (e) { var t = {}; function n(r) { if (t[r]) return t[r].exports; var o = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports } n.m = e, n.c = t, n.d = function (e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, n.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) { return e[t] }.bind(null, o)); return r }, n.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return n.d(t, "a", t), t }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 0) }([function (e, t, n) { "use strict"; n.r(t); n(1); document.addEventListener("DOMContentLoaded", (function () { var e, t, n = document.querySelector(".slider__images-container"), r = document.querySelector(".slider__image-first img"), o = document.querySelector(".slider__image-second img"), i = !1, u = (document.querySelector(".slider__image-first"), document.querySelector(".slider__image-second")), c = document.querySelector(".slider__arrows"), d = document.querySelector(".slider__line"), l = function (n) { var r = n - t; return r < 0 ? 0 : r > e ? e : r }; function f() { e = n.offsetWidth, t = n.offsetLeft, r.style.width = e + "px", o.style.width = e + "px" } window.addEventListener("resize", (function () { f() })), f(), c.addEventListener("mousedown", (function () { i = !0 })), window.addEventListener("mouseup", (function () { i = !1 })), window.addEventListener("mousemove", (function (t) { if (i) { var n = l(t.clientX) / e * 100; d.style.left = "".concat(n, "%"), u.style.width = "".concat(n, "%") } })), c.addEventListener("touchstart", (function () { i = !0 })), c.addEventListener("touchend", (function () { i = !1 })), window.addEventListener("touchmove", (function (t) { if (i) { var n = l(t.touches[0].clientX) / e * 100; d.style.left = "".concat(n, "%"), u.style.width = "".concat(n, "%") } })) })) }, function (e, t, n) { }]);