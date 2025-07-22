//Copyright timeanddate.com 2021, do not use without permission
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (a) {
  var b = 0;
  return function () {
    return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
  };
};
$jscomp.arrayIterator = function (a) {
  return { next: $jscomp.arrayIteratorImpl(a) };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value);
      };
$jscomp.getGlobal = function (a) {
  return "undefined" != typeof window && window === a
    ? a
    : "undefined" != typeof global && null != global
    ? global
    : a;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () {};
  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};
$jscomp.SymbolClass = function (a, b) {
  this.$jscomp$symbol$id_ = a;
  $jscomp.defineProperty(this, "description", {
    configurable: !0,
    writable: !0,
    value: b,
  });
};
$jscomp.SymbolClass.prototype.toString = function () {
  return this.$jscomp$symbol$id_;
};
$jscomp.Symbol = (function () {
  function a(c) {
    if (this instanceof a) throw new TypeError("Symbol is not a constructor");
    return new $jscomp.SymbolClass(
      $jscomp.SYMBOL_PREFIX + (c || "") + "_" + b++,
      c
    );
  }
  var b = 0;
  return a;
})();
$jscomp.initSymbolIterator = function () {
  $jscomp.initSymbol();
  var a = $jscomp.global.Symbol.iterator;
  a ||
    (a = $jscomp.global.Symbol.iterator =
      $jscomp.global.Symbol("Symbol.iterator"));
  "function" != typeof Array.prototype[a] &&
    $jscomp.defineProperty(Array.prototype, a, {
      configurable: !0,
      writable: !0,
      value: function () {
        return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
      },
    });
  $jscomp.initSymbolIterator = function () {};
};
$jscomp.initSymbolAsyncIterator = function () {
  $jscomp.initSymbol();
  var a = $jscomp.global.Symbol.asyncIterator;
  a ||
    (a = $jscomp.global.Symbol.asyncIterator =
      $jscomp.global.Symbol("Symbol.asyncIterator"));
  $jscomp.initSymbolAsyncIterator = function () {};
};
$jscomp.iteratorPrototype = function (a) {
  $jscomp.initSymbolIterator();
  a = { next: a };
  a[$jscomp.global.Symbol.iterator] = function () {
    return this;
  };
  return a;
};
(function (a) {
  function b(d) {
    if (c[d]) return c[d].exports;
    var e = (c[d] = { i: d, l: !1, exports: {} });
    a[d].call(e.exports, e, e.exports, b);
    e.l = !0;
    return e.exports;
  }
  var c = {};
  b.m = a;
  b.c = c;
  b.d = function (a, e, c) {
    b.o(a, e) || Object.defineProperty(a, e, { enumerable: !0, get: c });
  };
  b.r = function (a) {
    $jscomp.initSymbol();
    $jscomp.initSymbol();
    "undefined" !== typeof Symbol &&
      Symbol.toStringTag &&
      ($jscomp.initSymbol(),
      Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
    Object.defineProperty(a, "__esModule", { value: !0 });
  };
  b.t = function (a, e) {
    e & 1 && (a = b(a));
    if (e & 8 || (e & 4 && "object" === typeof a && a && a.__esModule))
      return a;
    var d = Object.create(null);
    b.r(d);
    Object.defineProperty(d, "default", { enumerable: !0, value: a });
    if (e & 2 && "string" != typeof a)
      for (var c in a)
        b.d(
          d,
          c,
          function (b) {
            return a[b];
          }.bind(null, c)
        );
    return d;
  };
  b.n = function (a) {
    var e =
      a && a.__esModule
        ? function () {
            return a["default"];
          }
        : function () {
            return a;
          };
    b.d(e, "a", e);
    return e;
  };
  b.o = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  b.p = "";
  return b((b.s = 0));
})([
  function (a, b, c) {
    function d(a, b, e) {
      var c = e.reset;
      a.style.transform = "rotate(".concat(
        ((b / e.tick) % c) * (360 / c),
        "deg) translateZ(0)"
      );
    }
    c.r(b);
    c.d(b, "HANDS", function () {
      return g;
    });
    c.d(b, "rotateElementToTime", function () {
      return d;
    });
    c.d(b, "default", function () {
      return f;
    });
    var e = [],
      g = {
        HOUR: { tick: 36e5, reset: 12 },
        MINUTE: { tick: 6e4, reset: 60 },
        SECONDS: { tick: 1e3, reset: 60 },
      },
      f = function (a, b) {
        var c =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : "clckTemplate",
          d = e[b];
        if (d && document.body.contains(d.element)) return d;
        this.element = a;
        c = document.getElementById(c);
        this.initTemplate(c);
        this.setHands();
        e[b] = this;
        return this;
      };
    f.update = function (a, b, c, d) {
      if ((a = e[c]))
        (d = d.X),
          a.draw(window.EVC && window.EVC.fix && d ? 1e3 * d.local : +b);
    };
    f.prototype.draw = function (a) {
      this.showSeconds =
        "false" !== this.element.getAttribute("data-clock-showSeconds");
      this.canDisplayNight =
        "false" !== this.element.getAttribute("data-clock-night");
      var b = (a / 36e5) % 24;
      "undefined" != typeof this.svg.classList &&
        this.svg.classList.toggle(
          "isNight",
          this.canDisplayNight && !(6 <= b && 18 >= b)
        );
      this.date = a;
      this.hourHand.style.display = "";
      this.minuteHand.style.display = "";
      this.setHands();
      this.dateElement &&
        (this.dateElement.textContent = new Date(a).getUTCDate());
    };
    f.prototype.initTemplate = function (a) {
      if (!a) throw Error("Clck template not found");
      this.templateFragment =
        a && "undefined" == typeof a.content
          ? a.cloneNode(!0)
          : a.content.cloneNode(!0);
      this.hourHand = this.templateFragment.querySelector(
        "[data-analogclock-type=hour]"
      );
      this.minuteHand = this.templateFragment.querySelector(
        "[data-analogclock-type=minute]"
      );
      this.secondsHand = this.templateFragment.querySelector(
        "[data-analogclock-type=seconds]"
      );
      this.dateElement = this.templateFragment.querySelector(
        "[data-analogclock-type=date]"
      );
      this.hourHand.style.display = "none";
      this.minuteHand.style.display = "none";
      this.svg = this.element.appendChild(
        this.templateFragment.firstElementChild
      );
      this.element.insertAdjacentHTML(
        "beforeend",
        '<div class="time clk-tm"><span></span><span class="block small"></span></div>'
      );
    };
    f.prototype.setHands = function () {
      d(this.hourHand, this.date, g.HOUR);
      d(this.minuteHand, this.date, g.MINUTE);
      this.showSeconds
        ? ((this.secondsHand.style.display = ""),
          d(this.secondsHand, this.date, g.SECONDS))
        : (this.secondsHand.style.display = "none");
    };
    window.Clck = f;
  },
]);
