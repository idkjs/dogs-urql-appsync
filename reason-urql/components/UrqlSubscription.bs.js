'use strict';

var Urql = require("urql");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var UrqlCombinedError$ReasonReactExamples = require("../utils/UrqlCombinedError.bs.js");

var SubscriptionJs = { };

function urqlDataToRecord(parse, result) {
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

function UrqlSubscription$Subscription(Props) {
  var request = Props.request;
  var children = Props.children;
  var query = request.query;
  var variables = request.variables;
  var parse = request.parse;
  return React.createElement(Urql.Subscription, {
              query: query,
              variables: variables,
              children: (function (result) {
                  return Curry._1(children, urqlDataToRecord(parse, result));
                })
            });
}

var Subscription = {
  make: UrqlSubscription$Subscription
};

function UrqlSubscription$SubscriptionWithHandler(Props) {
  var request = Props.request;
  var handler = Props.handler;
  var children = Props.children;
  var query = request.query;
  var variables = request.variables;
  var parse = request.parse;
  var applyParsedResponse = function (acc, data) {
    return Curry._2(handler, acc, Curry._1(parse, data));
  };
  return React.createElement(Urql.Subscription, {
              query: query,
              variables: variables,
              handler: applyParsedResponse,
              children: (function (result) {
                  return Curry._1(children, urqlDataToRecord((function (x) {
                                    return x;
                                  }), result));
                })
            });
}

var SubscriptionWithHandler = {
  make: UrqlSubscription$SubscriptionWithHandler
};

exports.SubscriptionJs = SubscriptionJs;
exports.urqlDataToRecord = urqlDataToRecord;
exports.Subscription = Subscription;
exports.SubscriptionWithHandler = SubscriptionWithHandler;
/* urql Not a pure module */
