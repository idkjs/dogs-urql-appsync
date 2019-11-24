'use strict';

var Urql = require("urql");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var UrqlCombinedError$ReasonReactExamples = require("../utils/UrqlCombinedError.bs.js");

var MutationJs = { };

function urqlMutationResponseToReason(parse, variables, result) {
  var data = Belt_Option.map(Caml_option.nullable_to_opt(result.data), parse);
  var error = Belt_Option.map(Caml_option.nullable_to_opt(result.error), UrqlCombinedError$ReasonReactExamples.combinedErrorToRecord);
  var fetching = result.fetching;
  var executeMutationFn = result.executeMutation;
  var executeMutation = function (param) {
    return Curry._1(executeMutationFn, Caml_option.some(variables));
  };
  var response = fetching ? /* Fetching */0 : (
      error !== undefined ? /* Error */Block.__(1, [error]) : (
          data !== undefined ? /* Data */Block.__(0, [Caml_option.valFromOption(data)]) : /* NotFound */1
        )
    );
  return /* record */[
          /* fetching */fetching,
          /* data */data,
          /* error */error,
          /* executeMutation */executeMutation,
          /* response */response
        ];
}

function UrqlMutation(Props) {
  var request = Props.request;
  var children = Props.children;
  var query = request.query;
  var variables = request.variables;
  var parse = request.parse;
  return React.createElement(Urql.Mutation, {
              query: query,
              children: (function (result) {
                  return Curry._1(children, urqlMutationResponseToReason(parse, variables, result));
                })
            });
}

var make = UrqlMutation;

exports.MutationJs = MutationJs;
exports.urqlMutationResponseToReason = urqlMutationResponseToReason;
exports.make = make;
/* urql Not a pure module */
