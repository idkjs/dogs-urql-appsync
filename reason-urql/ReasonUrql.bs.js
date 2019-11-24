'use strict';

var UrqlClient$ReasonReactExamples = require("./UrqlClient.bs.js");
var UrqlUseQuery$ReasonReactExamples = require("./hooks/UrqlUseQuery.bs.js");
var UrqlUseMutation$ReasonReactExamples = require("./hooks/UrqlUseMutation.bs.js");
var UrqlUseSubscription$ReasonReactExamples = require("./hooks/UrqlUseSubscription.bs.js");

var Client = {
  unwrapFetchOptions: UrqlClient$ReasonReactExamples.unwrapFetchOptions,
  ClientTypes: UrqlClient$ReasonReactExamples.ClientTypes,
  UrqlExchanges: UrqlClient$ReasonReactExamples.UrqlExchanges,
  make: UrqlClient$ReasonReactExamples.make,
  urqlClientResponseToReason: UrqlClient$ReasonReactExamples.urqlClientResponseToReason,
  executeQuery: UrqlClient$ReasonReactExamples.executeQuery,
  executeMutation: UrqlClient$ReasonReactExamples.executeMutation,
  executeSubscription: UrqlClient$ReasonReactExamples.executeSubscription,
  createRequestOperation: UrqlClient$ReasonReactExamples.createRequestOperation
};

var Hooks = {
  useMutation: UrqlUseMutation$ReasonReactExamples.useMutation,
  useDynamicMutation: UrqlUseMutation$ReasonReactExamples.useDynamicMutation,
  useQuery: UrqlUseQuery$ReasonReactExamples.useQuery,
  useSubscription: UrqlUseSubscription$ReasonReactExamples.useSubscription
};

var UrqlTypes = 0;

var Context = 0;

var Provider = 0;

var Consumer = 0;

var Query = 0;

var Mutation = 0;

var Subscription = 0;

var SubscriptionWithHandler = 0;

var $$Request = 0;

var CombinedError = 0;

var Exchanges = 0;

exports.UrqlTypes = UrqlTypes;
exports.Client = Client;
exports.Context = Context;
exports.Provider = Provider;
exports.Consumer = Consumer;
exports.Query = Query;
exports.Mutation = Mutation;
exports.Subscription = Subscription;
exports.SubscriptionWithHandler = SubscriptionWithHandler;
exports.$$Request = $$Request;
exports.CombinedError = CombinedError;
exports.Exchanges = Exchanges;
exports.Hooks = Hooks;
/* UrqlClient-ReasonReactExamples Not a pure module */
