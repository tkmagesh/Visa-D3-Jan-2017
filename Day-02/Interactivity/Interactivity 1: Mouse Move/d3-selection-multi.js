// https://github.com/d3/d3-selection-multi Version 1.0.0. Copyright 2016 Mike Bostock.
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(require("d3-selection"),require("d3-transition")):"function"==typeof define&&define.amd?define(["d3-selection","d3-transition"],n):n(t.d3,t.d3)}(this,function(t,n){"use strict";function r(n,r){return n.each(function(){var n=r.apply(this,arguments),e=t.select(this);for(var i in n)e.attr(i,n[i])})}function e(t,n){for(var r in n)t.attr(r,n[r]);return t}function i(t){return("function"==typeof t?r:e)(this,t)}function o(n,r,e){return n.each(function(){var n=r.apply(this,arguments),i=t.select(this);for(var o in n)i.style(o,n[o],e)})}function f(t,n,r){for(var e in n)t.style(e,n[e],r);return t}function u(t,n){return("function"==typeof t?o:f)(this,t,null==n?"":n)}function s(n,r){return n.each(function(){var n=r.apply(this,arguments),e=t.select(this);for(var i in n)e.property(i,n[i])})}function c(t,n){for(var r in n)t.property(r,n[r]);return t}function a(t){return("function"==typeof t?s:c)(this,t)}function p(n,r){return n.each(function(){var e=r.apply(this,arguments),i=t.select(this).transition(n);for(var o in e)i.attr(o,e[o])})}function l(t,n){for(var r in n)t.attr(r,n[r]);return t}function y(t){return("function"==typeof t?p:l)(this,t)}function h(n,r,e){return n.each(function(){var i=r.apply(this,arguments),o=t.select(this).transition(n);for(var f in i)o.style(f,i[f],e)})}function v(t,n,r){for(var e in n)t.style(e,n[e],r);return t}function d(t,n){return("function"==typeof t?h:v)(this,t,null==n?"":n)}t.selection.prototype.attrs=i,t.selection.prototype.styles=u,t.selection.prototype.properties=a,n.transition.prototype.attrs=y,n.transition.prototype.styles=d});