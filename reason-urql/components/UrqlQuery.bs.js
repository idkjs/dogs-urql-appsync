'use strict';

var Urql = require("urql");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var UrqlTypes$ReasonReactExamples = require("../UrqlTypes.bs.js");
var UrqlCombinedError$ReasonReactExamples = require("../utils/UrqlCombinedError.bs.js");

var QueryJs = { };

function urqlQueryResponseToReason(parse, result) {
  var data = Belt_Option.map(Caml_option.nullable_to_opt(result.data), parse);
  var error = Belt_Option.map(Caml_option.nullable_to_opt(result.error), UrqlCombinedError$ReasonReactExamples.combinedErrorToRecord);
  var fetching = result.fetching;
  var executeQuery = result.executeQuery;
  var response = fetching ? /* Fetching */0 : (
      error !== undefined ? /* Error */Block.__(1, [error]) : (
          data !== undefined ? /* Data */Block.__(0, [Caml_option.valFromOption(data)]) : /* NotFound */1
        )
    );
  return /* record */[
          /* fetching */fetching,
          /* data */data,
          /* error */error,
          /* executeQuery */executeQuery,
          /* response */response
        ];
}

function UrqlQuery(Props) {
  var request = Props.request;
  var match = Props.requestPolicy;
  var requestPolicy = match !== undefined ? match : /* CacheFirst */973529774;
  var pause = Props.pause;
  var children = Props.children;
  var query = request.query;
  var variables = request.variables;
  var parse = request.parse;
  var tmp = {
    query: query,
    variables: variables,
    requestPolicy: UrqlTypes$ReasonReactExamples.requestPolicyToJs(requestPolicy),
    children: (function (result) {
        return Curry._1(children, urqlQueryResponseToReason(parse, result));
      })
  };
  if (pause !== undefined) {
    tmp.pause = Caml_option.valFromOption(pause);
  }
  return React.createElement(Urql.Query, tmp);
}

var make = UrqlQuery;

exports.QueryJs = QueryJs;
exports.urqlQueryResponseToReason = urqlQueryResponseToReason;
exports.make = make;
/* urql Not a pure module */
