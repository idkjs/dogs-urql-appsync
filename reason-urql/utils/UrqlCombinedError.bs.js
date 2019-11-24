'use strict';

var Caml_option = require("bs-platform/lib/js/caml_option.js");

function combinedErrorToRecord(err) {
  return /* record */[
          /* networkError */Caml_option.nullable_to_opt(err.networkError),
          /* graphQLErrors */Caml_option.nullable_to_opt(err.graphQLErrors),
          /* response */Caml_option.nullable_to_opt(err.response),
          /* message */err.message
        ];
}

exports.combinedErrorToRecord = combinedErrorToRecord;
/* No side effect */
