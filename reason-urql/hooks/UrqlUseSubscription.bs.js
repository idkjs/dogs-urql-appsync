'use strict';

var Urql = require("urql");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var UrqlCombinedError$ReasonReactExamples = require("../utils/UrqlCombinedError.bs.js");

function useSubscriptionResponseToRecord(parse, result) {
  var data = Belt_Option.map(Caml_option.nullable_to_opt(result.data), parse);
  var error = Belt_Option.map(Caml_option.undefined_to_opt(result.error), UrqlCombinedError$ReasonReactExamples.combinedErrorToRecord);
  var fetching = result.fetching;
  var response = fetching ? (
      data !== undefined ? /* Data */Block.__(0, [Caml_option.valFromOption(data)]) : /* Fetching */0
    ) : (
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
}

function useSubscription(request, handler) {
  var parse = request.parse;
  var args = {
    query: request.query,
    variables: request.variables
  };
  return React.useMemo((function () {
                if (handler) {
                  var handlerFn = handler[0];
                  return useSubscriptionResponseToRecord((function (x) {
                                return x;
                              }), Caml_array.caml_array_get(Urql.useSubscription(args, (function (acc, data) {
                                        return Curry._2(handlerFn, acc, Curry._1(parse, data));
                                      })), 0));
                } else {
                  return useSubscriptionResponseToRecord(parse, Caml_array.caml_array_get(Urql.useSubscription(args, undefined), 0));
                }
              }), /* tuple */[
              handler,
              args,
              parse
            ]);
}

exports.useSubscription = useSubscription;
/* urql Not a pure module */
