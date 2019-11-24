'use strict';

var React = require("react");
var EmojiButtonStyles$ReasonReactExamples = require("./EmojiButtonStyles.bs.js");

function EmojiButton(Props) {
  var emoji = Props.emoji;
  var count = Props.count;
  var hex = Props.hex;
  var onClick = Props.onClick;
  return React.createElement("button", {
              className: EmojiButtonStyles$ReasonReactExamples.emojiButton(hex),
              onClick: onClick
            }, React.createElement("span", {
                  className: EmojiButtonStyles$ReasonReactExamples.text
                }, count), React.createElement("span", {
                  className: EmojiButtonStyles$ReasonReactExamples.text
                }, emoji));
}

var make = EmojiButton;

exports.make = make;
/* react Not a pure module */
