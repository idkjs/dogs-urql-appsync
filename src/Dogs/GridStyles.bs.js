'use strict';

var Css = require("bs-css/src/Css.js");

var grid = Css.style(/* :: */[
      Css.position(Css.absolute),
      /* :: */[
        Css.top(Css.px(0)),
        /* :: */[
          Css.bottom(Css.px(0)),
          /* :: */[
            Css.left(Css.px(0)),
            /* :: */[
              Css.right(Css.px(0)),
              /* :: */[
                Css.display(Css.grid),
                /* :: */[
                  Css.gridTemplateRows(/* :: */[
                        /* `fr */[
                          22860,
                          1
                        ],
                        /* :: */[
                          /* `fr */[
                            22860,
                            1
                          ],
                          /* :: */[
                            /* `fr */[
                              22860,
                              1
                            ],
                            /* [] */0
                          ]
                        ]
                      ]),
                  /* :: */[
                    Css.gridTemplateColumns(/* :: */[
                          /* `fr */[
                            22860,
                            1
                          ],
                          /* :: */[
                            /* `fr */[
                              22860,
                              1
                            ],
                            /* :: */[
                              /* `fr */[
                                22860,
                                1
                              ],
                              /* :: */[
                                /* `fr */[
                                  22860,
                                  1
                                ],
                                /* [] */0
                              ]
                            ]
                          ]
                        ]),
                    /* :: */[
                      Css.media("(max-width: 1070px)", /* :: */[
                            Css.gridTemplateColumns(/* :: */[
                                  /* `fr */[
                                    22860,
                                    1
                                  ],
                                  /* :: */[
                                    /* `fr */[
                                      22860,
                                      1
                                    ],
                                    /* :: */[
                                      /* `fr */[
                                        22860,
                                        1
                                      ],
                                      /* [] */0
                                    ]
                                  ]
                                ]),
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

exports.grid = grid;
/* grid Not a pure module */
