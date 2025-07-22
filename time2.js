//Copyright timeanddate.com 2021, do not use without permission
(function () {
  it(gebtn("table"), function (a) {
    hC(a, "tb-click") &&
      it(gebtn("tr", a), function (a) {
        var b = gebtn("a", a);
        1 <= b.length &&
          ael(a, "click", function () {
            window.location = b[0].href;
          });
      });
  });
})();
//Copyright timeanddate.com 2021, do not use without permission
(function e$jscomp$0(c, d, f) {
  function g(b, e) {
    if (!d[b]) {
      if (!c[b]) {
        var h = "function" == typeof require && require;
        if (!e && h) return h(b, !0);
        if (a) return a(b, !0);
        e = Error("Cannot find module '" + b + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      e = d[b] = { exports: {} };
      c[b][0].call(
        e.exports,
        function (a) {
          var d = c[b][1][a];
          return g(d ? d : a);
        },
        e,
        e.exports,
        e$jscomp$0,
        c,
        d,
        f
      );
    }
    return d[b].exports;
  }
  for (
    var a = "function" == typeof require && require, b = 0;
    b < f.length;
    b++
  )
    g(f[b]);
  return g;
})(
  {
    1: [
      function (c, d, f) {
        c = c(3);
        _T.control.add("ClassOnHover", c);
      },
      { 3: 3 },
    ],
    2: [
      function (c, d, f) {
        c(1);
        _T.control.applyBindingsOnLoad();
      },
      { 1: 1 },
    ],
    3: [
      function (c, d, f) {
        c = function (c, d) {
          var a = this;
          a._element = c;
          a._options = d;
          a._target = a._options.target || null;
          a._attachToTarget = a._options.attachToTarget || !1;
          a._classname = a._options.classname || "hover";
          a._target && (a._targetElement = gf(a._target));
          ael(a._element, "mouseover", function (b) {
            a._onmouseover(b);
          });
          ael(a._element, "mouseout", function (b) {
            a._onmouseout(b);
          });
          a._attachToTarget &&
            (ael(a._targetElement, "mouseover", function (b) {
              a._onmouseover(b);
            }),
            ael(a._targetElement, "mouseout", function (b) {
              a._onmouseout(b);
            }));
        };
        c.prototype = {
          _onmouseover: function () {
            ac(this._element, this._classname, 1);
            this._attachToTarget &&
              this._targetElement &&
              ac(this._targetElement, this._classname, 1);
          },
          _onmouseout: function () {
            ac(this._element, this._classname, 0);
            this._attachToTarget &&
              this._targetElement &&
              ac(this._targetElement, this._classname, 0);
          },
        };
        d.exports = c;
      },
      {},
    ],
  },
  {},
  [2]
);
aelc("chi", function () {
  var text = "Set Home Location for local times";
  modpop("/scripts/tzq.php?type=homecity", 1, text);
});
var fs = new Fullscreen("fs-clock");
fs.bindTo("curclock", "fs-close", "full-clk", "fs-logo");
aelc("fs-native", Fullscreen.toggleNativeFullscreen);
//Copyright timeanddate.com 2021, do not use without permission
aelc("fs-popup", function () {
  ofs(gf("fs-popup"));
});
aelc("extastro", function () {
  var a = gf("extastrorow"),
    b = !hC(a, "dn");
  ac(a, "dn", b);
  iH(
    "extastro",
    b
      ? "+ Show More Twilight and Moon Phase Information"
      : "- Hide Extra Twilight and Moon Phase Information"
  );
});
