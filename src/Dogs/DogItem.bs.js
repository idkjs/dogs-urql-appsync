'use strict';

var React = require("./node_modules/react");
var DogStyles$ReasonReactExamples = require("./DogStyles.bs.js");
var EmojiButton$ReasonReactExamples = require("./EmojiButton.bs.js");

function DogItem(Props) {
  Props.id;
  var name = Props.name;
  var imageUrl = Props.imageUrl;
  var likes = Props.likes;
  var pats = Props.pats;
  var treats = Props.treats;
  var bellyscratches = Props.bellyscratches;
  var description = Props.description;
  return React.createElement("div", {
              className: DogStyles$ReasonReactExamples.container
            }, React.createElement("img", {
                  className: DogStyles$ReasonReactExamples.image,
                  alt: name,
                  src: imageUrl
                }), React.createElement("h3", {
                  className: DogStyles$ReasonReactExamples.title
                }, "" + (String(name) + "")), React.createElement("div", {
                  className: DogStyles$ReasonReactExamples.buttons
                }, React.createElement(EmojiButton$ReasonReactExamples.make, {
                      emoji: "👍",
                      count: String(likes),
                      hex: "48a9dc",
                      onClick: (function (param) {
                          console.log("likes", likes);
                          return /* () */0;
                        })
                    }), React.createElement(EmojiButton$ReasonReactExamples.make, {
                      emoji: "✋",
                      count: String(pats),
                      hex: "db4d3f",
                      onClick: (function (param) {
                          console.log("pats", pats);
                          return /* () */0;
                        })
                    }), React.createElement(EmojiButton$ReasonReactExamples.make, {
                      emoji: "🍖",
                      count: String(treats),
                      hex: "7b16ff",
                      onClick: (function (param) {
                          console.log("Treats", treats);
                          return /* () */0;
                        })
                    }), React.createElement(EmojiButton$ReasonReactExamples.make, {
                      emoji: "🐾",
                      count: String(bellyscratches),
                      hex: "1bda2a",
                      onClick: (function (param) {
                          console.log("bellyscratches", bellyscratches);
                          return /* () */0;
                        })
                    })), React.createElement("div", undefined, description));
}

var make = DogItem;

exports.make = make;
/* react Not a pure module */
