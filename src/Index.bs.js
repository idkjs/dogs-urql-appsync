'use strict';

var Urql = require("urql");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Fetch = require("bs-fetch/src/Fetch.js");
var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var Aws$ReasonReactExamples = require("./dogs/Aws.bs.js");
var Grid2$ReasonReactExamples = require("./dogs/Grid2.bs.js");
var ColdStart$ReasonReactExamples = require("./dogs/ColdStart.bs.js");
var ReasonUrql$ReasonReactExamples = require("../reason-urql/ReasonUrql.bs.js");

var fetchOptions = Fetch.RequestInit.make(/* Post */2, {
        "Content-Type": "application/json",
        "x-api-key": Aws$ReasonReactExamples.aws_config.aws_appsync_apiKey
      }, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0);

var client = Curry._5(ReasonUrql$ReasonReactExamples.Client.make, Aws$ReasonReactExamples.aws_config.aws_appsync_graphqlEndpoint, /* FetchOpts */Block.__(0, [fetchOptions]), undefined, undefined, /* () */0);

ReactDOMRe.renderToElementWithId(React.createElement(Urql.Provider, {
          value: client,
          children: null
        }, React.createElement(ColdStart$ReasonReactExamples.make, { }), React.createElement(Grid2$ReasonReactExamples.make, {
              client: client
            })), "root");

exports.fetchOptions = fetchOptions;
exports.client = client;
/* fetchOptions Not a pure module */
