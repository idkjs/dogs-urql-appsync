'use strict';

var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

var ppx_printed_query = "mutation LikeDog($key: ID!, $likes: Int)  {\nupdateDog(input: {key: $key, likes: $likes})  {\nlikes  \n}\n\n}\n";

function parse(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var match = Js_dict.get(value$1, "updateDog");
  var tmp;
  if (match !== undefined) {
    var value$2 = Caml_option.valFromOption(match);
    var match$1 = Js_json.decodeNull(value$2);
    if (match$1 !== undefined) {
      tmp = undefined;
    } else {
      var value$3 = Js_option.getExn(Js_json.decodeObject(value$2));
      var match$2 = Js_dict.get(value$3, "likes");
      var tmp$1;
      if (match$2 !== undefined) {
        var value$4 = Caml_option.valFromOption(match$2);
        var match$3 = Js_json.decodeNumber(value$4);
        tmp$1 = match$3 !== undefined ? match$3 | 0 : Js_exn.raiseError("graphql_ppx: Expected int, got " + JSON.stringify(value$4));
      } else {
        tmp$1 = Js_exn.raiseError("graphql_ppx: Field likes on type Dog is missing");
      }
      tmp = {
        likes: tmp$1
      };
    }
  } else {
    tmp = undefined;
  }
  return {
          updateDog: tmp
        };
}

function make(key, likes, param) {
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray(/* array */[
                  /* tuple */[
                    "key",
                    key
                  ],
                  /* tuple */[
                    "likes",
                    likes !== undefined ? likes : null
                  ]
                ].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse
        };
}

function makeWithVariables(variables) {
  var key = variables.key;
  var likes = variables.likes;
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray(/* array */[
                  /* tuple */[
                    "key",
                    key
                  ],
                  /* tuple */[
                    "likes",
                    likes !== undefined ? likes : null
                  ]
                ].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse
        };
}

function makeVariables(key, likes, param) {
  return Js_dict.fromArray(/* array */[
                /* tuple */[
                  "key",
                  key
                ],
                /* tuple */[
                  "likes",
                  likes !== undefined ? likes : null
                ]
              ].filter((function (param) {
                    return !Js_json.test(param[1], /* Null */5);
                  })));
}

function ret_type(f) {
  return { };
}

var MT_Ret = { };

var LikeDog = {
  ppx_printed_query: ppx_printed_query,
  query: ppx_printed_query,
  parse: parse,
  make: make,
  makeWithVariables: makeWithVariables,
  makeVariables: makeVariables,
  ret_type: ret_type,
  MT_Ret: MT_Ret
};

var ppx_printed_query$1 = "mutation PatDog($key: ID!, $pats: Int)  {\nupdateDog(input: {key: $key, pats: $pats})  {\nid  \npats  \n}\n\n}\n";

function parse$1(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var match = Js_dict.get(value$1, "updateDog");
  var tmp;
  if (match !== undefined) {
    var value$2 = Caml_option.valFromOption(match);
    var match$1 = Js_json.decodeNull(value$2);
    if (match$1 !== undefined) {
      tmp = undefined;
    } else {
      var value$3 = Js_option.getExn(Js_json.decodeObject(value$2));
      var match$2 = Js_dict.get(value$3, "id");
      var tmp$1;
      if (match$2 !== undefined) {
        var value$4 = Caml_option.valFromOption(match$2);
        var match$3 = Js_json.decodeString(value$4);
        tmp$1 = match$3 !== undefined ? match$3 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$4));
      } else {
        tmp$1 = Js_exn.raiseError("graphql_ppx: Field id on type Dog is missing");
      }
      var match$4 = Js_dict.get(value$3, "pats");
      var tmp$2;
      if (match$4 !== undefined) {
        var value$5 = Caml_option.valFromOption(match$4);
        var match$5 = Js_json.decodeNumber(value$5);
        tmp$2 = match$5 !== undefined ? match$5 | 0 : Js_exn.raiseError("graphql_ppx: Expected int, got " + JSON.stringify(value$5));
      } else {
        tmp$2 = Js_exn.raiseError("graphql_ppx: Field pats on type Dog is missing");
      }
      tmp = {
        id: tmp$1,
        pats: tmp$2
      };
    }
  } else {
    tmp = undefined;
  }
  return {
          updateDog: tmp
        };
}

function make$1(key, pats, param) {
  return {
          query: ppx_printed_query$1,
          variables: Js_dict.fromArray(/* array */[
                  /* tuple */[
                    "key",
                    key
                  ],
                  /* tuple */[
                    "pats",
                    pats !== undefined ? pats : null
                  ]
                ].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse$1
        };
}

function makeWithVariables$1(variables) {
  var key = variables.key;
  var pats = variables.pats;
  return {
          query: ppx_printed_query$1,
          variables: Js_dict.fromArray(/* array */[
                  /* tuple */[
                    "key",
                    key
                  ],
                  /* tuple */[
                    "pats",
                    pats !== undefined ? pats : null
                  ]
                ].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse$1
        };
}

function makeVariables$1(key, pats, param) {
  return Js_dict.fromArray(/* array */[
                /* tuple */[
                  "key",
                  key
                ],
                /* tuple */[
                  "pats",
                  pats !== undefined ? pats : null
                ]
              ].filter((function (param) {
                    return !Js_json.test(param[1], /* Null */5);
                  })));
}

function ret_type$1(f) {
  return { };
}

var MT_Ret$1 = { };

var PatDog = {
  ppx_printed_query: ppx_printed_query$1,
  query: ppx_printed_query$1,
  parse: parse$1,
  make: make$1,
  makeWithVariables: makeWithVariables$1,
  makeVariables: makeVariables$1,
  ret_type: ret_type$1,
  MT_Ret: MT_Ret$1
};

var ppx_printed_query$2 = "mutation BellyscratchDog($key: ID!, $bellyscratches: Int)  {\nupdateDog(input: {key: $key, bellyscratches: $bellyscratches})  {\nid  \nbellyscratches  \n}\n\n}\n";

function parse$2(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var match = Js_dict.get(value$1, "updateDog");
  var tmp;
  if (match !== undefined) {
    var value$2 = Caml_option.valFromOption(match);
    var match$1 = Js_json.decodeNull(value$2);
    if (match$1 !== undefined) {
      tmp = undefined;
    } else {
      var value$3 = Js_option.getExn(Js_json.decodeObject(value$2));
      var match$2 = Js_dict.get(value$3, "id");
      var tmp$1;
      if (match$2 !== undefined) {
        var value$4 = Caml_option.valFromOption(match$2);
        var match$3 = Js_json.decodeString(value$4);
        tmp$1 = match$3 !== undefined ? match$3 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$4));
      } else {
        tmp$1 = Js_exn.raiseError("graphql_ppx: Field id on type Dog is missing");
      }
      var match$4 = Js_dict.get(value$3, "bellyscratches");
      var tmp$2;
      if (match$4 !== undefined) {
        var value$5 = Caml_option.valFromOption(match$4);
        var match$5 = Js_json.decodeNumber(value$5);
        tmp$2 = match$5 !== undefined ? match$5 | 0 : Js_exn.raiseError("graphql_ppx: Expected int, got " + JSON.stringify(value$5));
      } else {
        tmp$2 = Js_exn.raiseError("graphql_ppx: Field bellyscratches on type Dog is missing");
      }
      tmp = {
        id: tmp$1,
        bellyscratches: tmp$2
      };
    }
  } else {
    tmp = undefined;
  }
  return {
          updateDog: tmp
        };
}

function make$2(key, bellyscratches, param) {
  return {
          query: ppx_printed_query$2,
          variables: Js_dict.fromArray(/* array */[
                  /* tuple */[
                    "key",
                    key
                  ],
                  /* tuple */[
                    "bellyscratches",
                    bellyscratches !== undefined ? bellyscratches : null
                  ]
                ].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse$2
        };
}

function makeWithVariables$2(variables) {
  var key = variables.key;
  var bellyscratches = variables.bellyscratches;
  return {
          query: ppx_printed_query$2,
          variables: Js_dict.fromArray(/* array */[
                  /* tuple */[
                    "key",
                    key
                  ],
                  /* tuple */[
                    "bellyscratches",
                    bellyscratches !== undefined ? bellyscratches : null
                  ]
                ].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse$2
        };
}

function makeVariables$2(key, bellyscratches, param) {
  return Js_dict.fromArray(/* array */[
                /* tuple */[
                  "key",
                  key
                ],
                /* tuple */[
                  "bellyscratches",
                  bellyscratches !== undefined ? bellyscratches : null
                ]
              ].filter((function (param) {
                    return !Js_json.test(param[1], /* Null */5);
                  })));
}

function ret_type$2(f) {
  return { };
}

var MT_Ret$2 = { };

var BellyscratchDog = {
  ppx_printed_query: ppx_printed_query$2,
  query: ppx_printed_query$2,
  parse: parse$2,
  make: make$2,
  makeWithVariables: makeWithVariables$2,
  makeVariables: makeVariables$2,
  ret_type: ret_type$2,
  MT_Ret: MT_Ret$2
};

var Mutations = {
  LikeDog: LikeDog,
  PatDog: PatDog,
  treatDog: "\n    mutation updateDog($input: {$key: ID!,$treatDog:Int}) {\n        id\n        treats\n      }\n  ",
  BellyscratchDog: BellyscratchDog
};

exports.Mutations = Mutations;
/* No side effect */
