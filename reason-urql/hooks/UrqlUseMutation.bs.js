'use strict';

var Urql = require("urql");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var UrqlCombinedError$ReasonReactExamples = require("../utils/UrqlCombinedError.bs.js");

function urqlResponseToReason(parse, result) {
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
}

function useMutation(request) {
  var match = Urql.useMutation(request.query);
  var executeMutationJs = match[1];
  var responseJs = match[0];
  var response = React.useMemo((function () {
          return urqlResponseToReason(request.parse, responseJs);
        }), /* tuple */[
        request.parse,
        responseJs
      ]);
  var executeMutation = React.useCallback((function (param) {
          return Curry._1(executeMutationJs, Caml_option.some(request.variables));
        }), /* array */[request.variables]);
  return /* tuple */[
          response,
          executeMutation
        ];
}

function useDynamicMutation(query, parse) {
  var match = Urql.useMutation(query);
  var executeMutationJs = match[1];
  var responseJs = match[0];
  var response = React.useMemo((function () {
          return urqlResponseToReason(parse, responseJs);
        }), /* array */[responseJs]);
  var executeMutation = React.useCallback((function (request) {
          return Curry._1(executeMutationJs, Caml_option.some(request.variables));
        }), /* array */[executeMutationJs]);
  return /* tuple */[
          response,
          executeMutation
        ];
}

exports.useMutation = useMutation;
exports.useDynamicMutation = useDynamicMutation;
/* urql Not a pure module */
