(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    307: function (t, e, o) {},
    309: function (t, e, o) {
      "use strict";
      o(307);
    },
    334: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = [
          "There's nothing here.",
          "How did we get here?",
          "That's a Four-Oh-Four.",
          "Looks like we've got some broken links.",
        ],
        r = {
          methods: {
            getMsg: function () {
              return n[Math.floor(Math.random() * n.length)];
            },
          },
        },
        s = (o(309), o(40)),
        a = Object(s.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "div",
              { staticClass: "page-wrapper mt-4" },
              [
                o(
                  "b-container",
                  [
                    o(
                      "b-row",
                      [
                        o(
                          "b-col",
                          { attrs: { lg: "8", "offset-lg": "2" } },
                          [
                            o(
                              "transition",
                              { attrs: { name: "fade", mode: "out-in" } },
                              [
                                o(
                                  "b-card",
                                  {
                                    staticClass: "shadow-lg",
                                    attrs: { "bg-variant": "light" },
                                  },
                                  [
                                    o("h1", [t._v("404")]),
                                    t._v(" "),
                                    o("blockquote", [t._v(t._s(t.getMsg()))]),
                                    t._v(" "),
                                    o("router-link", { attrs: { to: "/" } }, [
                                      t._v("Take me home"),
                                    ]),
                                    t._v(".\n                    "),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = a.exports;
    },
  },
]);
