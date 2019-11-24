'use strict';

var Css = require("./node_modules/bs-css/src/Css.js.js");

var container = Css.style(/* :: */[
      Css.justifySelf(Css.center),
      /* :: */[
        Css.fontFamily("'Space Mono', monospace"),
        /* :: */[
          Css.padding(Css.px(12)),
          /* [] */0
        ]
      ]
    ]);

var image = Css.style(/* :: */[
      Css.height(Css.px(200)),
      /* :: */[
        Css.width(Css.px(200)),
        /* :: */[
          Css.unsafe("object-fit", "cover"),
          /* :: */[
            Css.borderRadius(Css.pct(50)),
            /* :: */[
              Css.border(Css.px(3), Css.solid, Css.hex("222")),
              /* :: */[
                Css.boxShadows(/* :: */[
                      Css.boxShadow(Css.zero, Css.zero, undefined, Css.px(3), undefined, Css.rgba(0, 0, 0, 0.5)),
                      /* :: */[
                        Css.boxShadow(Css.zero, Css.zero, undefined, Css.px(6), undefined, Css.rgba(0, 0, 0, 0.25)),
                        /* [] */0
                      ]
                    ]),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var title = Css.style(/* :: */[
      Css.fontSize(Css.rem(1)),
      /* :: */[
        Css.margin(Css.px(0)),
        /* [] */0
      ]
    ]);

var buttons = Css.style(/* :: */[
      Css.display(Css.flexBox),
      /* :: */[
        Css.alignItems(Css.center),
        /* [] */0
      ]
    ]);

exports.container = container;
exports.image = image;
exports.title = title;
exports.buttons = buttons;
/* container Not a pure module */
