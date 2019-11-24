'use strict';

var React = require("react");

function ColdStart(Props) {
  return React.createElement(React.Suspense, {
              children: React.createElement("h1", {
                    style: {
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "1rem"
                    }
                  }, "The deployed server is a Now instance booting from a cold start. Wait ~30 seconds after executing your first query to see results. After that, you should see updates instantly!"),
              fallback: React.createElement("div", undefined, "Loading...")
            });
}

var make = ColdStart;

exports.make = make;
/* react Not a pure module */
