'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Wonka = require("wonka/src/wonka.js");
var React = require("react");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Decoder$ReasonReactExamples = require("./Decoder.bs.js");
var DogItem$ReasonReactExamples = require("./DogItem.bs.js");
var ColdStart$ReasonReactExamples = require("./ColdStart.bs.js");
var GridStyles$ReasonReactExamples = require("./GridStyles.bs.js");
var ReasonUrql$ReasonReactExamples = require("../../reason-urql/ReasonUrql.bs.js");

var ppx_printed_query = "query   {\nlistDogs  {\nitems  {\nid  \nname  \nbreed  \ncolor  \nlikes  \npats  \ntreats  \nbellyscratches  \ndescription  \nimageUrl  \n}\n\n}\n\n}\n";

function parse(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var match = Js_dict.get(value$1, "listDogs");
  var tmp;
  if (match !== undefined) {
    var value$2 = Caml_option.valFromOption(match);
    var match$1 = Js_json.decodeNull(value$2);
    if (match$1 !== undefined) {
      tmp = undefined;
    } else {
      var value$3 = Js_option.getExn(Js_json.decodeObject(value$2));
      var match$2 = Js_dict.get(value$3, "items");
      var tmp$1;
      if (match$2 !== undefined) {
        var value$4 = Caml_option.valFromOption(match$2);
        var match$3 = Js_json.decodeNull(value$4);
        tmp$1 = match$3 !== undefined ? undefined : Js_option.getExn(Js_json.decodeArray(value$4)).map((function (value) {
                  var match = Js_json.decodeNull(value);
                  if (match !== undefined) {
                    return ;
                  } else {
                    var value$1 = Js_option.getExn(Js_json.decodeObject(value));
                    var match$1 = Js_dict.get(value$1, "id");
                    var tmp;
                    if (match$1 !== undefined) {
                      var value$2 = Caml_option.valFromOption(match$1);
                      var match$2 = Js_json.decodeString(value$2);
                      tmp = match$2 !== undefined ? match$2 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$2));
                    } else {
                      tmp = Js_exn.raiseError("graphql_ppx: Field id on type Dog is missing");
                    }
                    var match$3 = Js_dict.get(value$1, "name");
                    var tmp$1;
                    if (match$3 !== undefined) {
                      var value$3 = Caml_option.valFromOption(match$3);
                      var match$4 = Js_json.decodeString(value$3);
                      tmp$1 = match$4 !== undefined ? match$4 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$3));
                    } else {
                      tmp$1 = Js_exn.raiseError("graphql_ppx: Field name on type Dog is missing");
                    }
                    var match$5 = Js_dict.get(value$1, "breed");
                    var tmp$2;
                    if (match$5 !== undefined) {
                      var value$4 = Caml_option.valFromOption(match$5);
                      var match$6 = Js_json.decodeString(value$4);
                      tmp$2 = match$6 !== undefined ? match$6 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$4));
                    } else {
                      tmp$2 = Js_exn.raiseError("graphql_ppx: Field breed on type Dog is missing");
                    }
                    var match$7 = Js_dict.get(value$1, "color");
                    var tmp$3;
                    if (match$7 !== undefined) {
                      var value$5 = Caml_option.valFromOption(match$7);
                      var match$8 = Js_json.decodeString(value$5);
                      tmp$3 = match$8 !== undefined ? match$8 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$5));
                    } else {
                      tmp$3 = Js_exn.raiseError("graphql_ppx: Field color on type Dog is missing");
                    }
                    var match$9 = Js_dict.get(value$1, "likes");
                    var tmp$4;
                    if (match$9 !== undefined) {
                      var value$6 = Caml_option.valFromOption(match$9);
                      var match$10 = Js_json.decodeNumber(value$6);
                      tmp$4 = match$10 !== undefined ? match$10 | 0 : Js_exn.raiseError("graphql_ppx: Expected int, got " + JSON.stringify(value$6));
                    } else {
                      tmp$4 = Js_exn.raiseError("graphql_ppx: Field likes on type Dog is missing");
                    }
                    var match$11 = Js_dict.get(value$1, "pats");
                    var tmp$5;
                    if (match$11 !== undefined) {
                      var value$7 = Caml_option.valFromOption(match$11);
                      var match$12 = Js_json.decodeNumber(value$7);
                      tmp$5 = match$12 !== undefined ? match$12 | 0 : Js_exn.raiseError("graphql_ppx: Expected int, got " + JSON.stringify(value$7));
                    } else {
                      tmp$5 = Js_exn.raiseError("graphql_ppx: Field pats on type Dog is missing");
                    }
                    var match$13 = Js_dict.get(value$1, "treats");
                    var tmp$6;
                    if (match$13 !== undefined) {
                      var value$8 = Caml_option.valFromOption(match$13);
                      var match$14 = Js_json.decodeNumber(value$8);
                      tmp$6 = match$14 !== undefined ? match$14 | 0 : Js_exn.raiseError("graphql_ppx: Expected int, got " + JSON.stringify(value$8));
                    } else {
                      tmp$6 = Js_exn.raiseError("graphql_ppx: Field treats on type Dog is missing");
                    }
                    var match$15 = Js_dict.get(value$1, "bellyscratches");
                    var tmp$7;
                    if (match$15 !== undefined) {
                      var value$9 = Caml_option.valFromOption(match$15);
                      var match$16 = Js_json.decodeNumber(value$9);
                      tmp$7 = match$16 !== undefined ? match$16 | 0 : Js_exn.raiseError("graphql_ppx: Expected int, got " + JSON.stringify(value$9));
                    } else {
                      tmp$7 = Js_exn.raiseError("graphql_ppx: Field bellyscratches on type Dog is missing");
                    }
                    var match$17 = Js_dict.get(value$1, "description");
                    var tmp$8;
                    if (match$17 !== undefined) {
                      var value$10 = Caml_option.valFromOption(match$17);
                      var match$18 = Js_json.decodeString(value$10);
                      tmp$8 = match$18 !== undefined ? match$18 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$10));
                    } else {
                      tmp$8 = Js_exn.raiseError("graphql_ppx: Field description on type Dog is missing");
                    }
                    var match$19 = Js_dict.get(value$1, "imageUrl");
                    var tmp$9;
                    if (match$19 !== undefined) {
                      var value$11 = Caml_option.valFromOption(match$19);
                      var match$20 = Js_json.decodeString(value$11);
                      tmp$9 = match$20 !== undefined ? match$20 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$11));
                    } else {
                      tmp$9 = Js_exn.raiseError("graphql_ppx: Field imageUrl on type Dog is missing");
                    }
                    return {
                            id: tmp,
                            name: tmp$1,
                            breed: tmp$2,
                            color: tmp$3,
                            likes: tmp$4,
                            pats: tmp$5,
                            treats: tmp$6,
                            bellyscratches: tmp$7,
                            description: tmp$8,
                            imageUrl: tmp$9
                          };
                  }
                }));
      } else {
        tmp$1 = undefined;
      }
      tmp = {
        items: tmp$1
      };
    }
  } else {
    tmp = undefined;
  }
  return {
          listDogs: tmp
        };
}

function make(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function makeWithVariables(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function makeVariables(param) {
  return null;
}

function ret_type(f) {
  return { };
}

var MT_Ret = { };

var GetAllDogs = {
  ppx_printed_query: ppx_printed_query,
  query: ppx_printed_query,
  parse: parse,
  make: make,
  makeWithVariables: makeWithVariables,
  makeVariables: makeVariables,
  ret_type: ret_type,
  MT_Ret: MT_Ret
};

var request = make(/* () */0);

function Grid2(Props) {
  var client = Props.client;
  var match = React.useReducer((function (param, action) {
          return /* record */[/* dogs */action[/* payload */0][/* dogs */0]];
        }), /* record */[/* dogs : array */[]]);
  var dispatch = match[1];
  var processOptions = function (response) {
    var optionDogsJs = Belt_Option.flatMap(response.listDogs, (function (listDogs) {
            return listDogs.items;
          }));
    var dogsJs = optionDogsJs !== undefined ? Belt_Array.map(Belt_Array.keep(optionDogsJs, Belt_Option.isSome), Belt_Option.getExn) : /* array */[];
    return Belt_Array.map(dogsJs, Decoder$ReasonReactExamples.makeDog);
  };
  React.useEffect((function () {
          var query = Wonka.subscribe((function (data) {
                    var match = data[/* response */2];
                    if (typeof match === "number" || match.tag) {
                      return /* () */0;
                    } else {
                      var dogs = processOptions(match[0]);
                      console.log("subscribe data", dogs);
                      return Curry._1(dispatch, /* record */[/* payload : record */[/* dogs */dogs]]);
                    }
                  }))(Curry._4(ReasonUrql$ReasonReactExamples.Client.executeQuery, client, request, undefined, /* () */0));
          return query[/* unsubscribe */0];
        }), /* array */[client]);
  return React.createElement("div", undefined, React.createElement(ColdStart$ReasonReactExamples.make, { }), React.createElement("div", {
                  className: GridStyles$ReasonReactExamples.grid
                }, $$Array.map((function (dog) {
                        return React.createElement(DogItem$ReasonReactExamples.make, {
                                    id: dog[/* id */0],
                                    name: dog[/* name */1],
                                    imageUrl: dog[/* imageUrl */9],
                                    likes: dog[/* likes */4],
                                    pats: dog[/* pats */5],
                                    treats: dog[/* treats */6],
                                    bellyscratches: dog[/* bellyscratches */7],
                                    description: dog[/* description */8],
                                    key: dog[/* id */0]
                                  });
                      }), match[0][/* dogs */0])));
}

var make$1 = Grid2;

exports.GetAllDogs = GetAllDogs;
exports.request = request;
exports.make = make$1;
/* request Not a pure module */
