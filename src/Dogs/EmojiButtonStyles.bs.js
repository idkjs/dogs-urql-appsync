'use strict';

var Css = require("bs-css/src/Css.js");

function emojiButton(color) {
  return Css.style(/* :: */[
              Css.borderRadius(Css.pct(50)),
              /* :: */[
                Css.padding(Css.px(5)),
                /* :: */[
                  Css.border(Css.px(2), Css.solid, Css.hex(color)),
                  /* :: */[
                    Css.display(Css.flexBox),
                    /* :: */[
                      Css.alignItems(Css.center),
                      /* :: */[
                        Css.justifyContent(Css.spaceEvenly),
                        /* :: */[
                          Css.margin(Css.px(5)),
                          /* :: */[
                            Css.selector(":hover", /* :: */[
                                  Css.backgroundColor(Css.hex(color)),
                                  /* :: */[
                                    Css.cursor(/* pointer */-786317123),
                                    /* [] */0
                                  ]
                                ]),
                            /* :: */[
                              Css.selector(":first-child", /* :: */[
                                    Css.marginLeft(Css.px(0)),
                                    /* [] */0
                                  ]),
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

var text = Css.style(/* :: */[
      Css.paddingLeft(Css.px(2)),
      /* :: */[
        Css.paddingRight(Css.px(2)),
        /* :: */[
          Css.fontSize(Css.rem(1)),
          /* [] */0
        ]
      ]
    ]);

exports.emojiButton = emojiButton;
exports.text = text;
/* text Not a pure module */
