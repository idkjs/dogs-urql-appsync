'use strict';

var Urql = require("urql");
var Block = require("bs-platform/lib/js/block.js");
var React = require("react");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var UrqlCombinedError$ReasonReactExamples = require("../utils/UrqlCombinedError.bs.js");

function useQuery(request, requestPolicy, pause, param) {
  var tmp = {
    query: request.query,
    variables: request.variables
  };
  if (requestPolicy !== undefined) {
    tmp.requestPolicy = Caml_option.valFromOption(requestPolicy);
  }
  if (pause !== undefined) {
    tmp.pause = Caml_option.valFromOption(pause);
  }
  var args = tmp;
  var match = Urql.useQuery(args);
  var responseJs = match[0];
  var response = React.useMemo((function () {
          var parse = request.parse;
          var result = responseJs;
          var data = Belt_Option.map(Caml_option.nullable_to_opt(result.data), parse);
          var error = Belt_Option.map(Caml_option.undefined_to_opt(result.error), UrqlCombinedError$ReasonReactExamples.combinedErrorToRecord);
          var fetching = result.fetching;
          var response = fetching ? /* Fetching */0 : (
              error !== undefined ? /* Error */Block.__(1, [error]) : (
                  data !== undefined ? /* Data */Block.__(0, [Caml_option.valFromOption(data)]) : /* NotFound */1
                )
            );
          return /* record */[
                  /* fetching */fetching,
                  /* data */data,
                  /* error */error,
                  /* response */response
                ];
        }), /* tuple */[
        responseJs,
        request.parse
      ]);
  return /* tuple */[
          response,
          match[1]
        ];
}

exports.useQuery = useQuery;
/* urql Not a pure module */
