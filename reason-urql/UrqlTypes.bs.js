'use strict';

var Js_mapperRt = require("bs-platform/lib/js/js_mapperRt.js");

var jsMapperConstantArray = /* array */[
  /* tuple */[
    -415599442,
    "cache-only"
  ],
  /* tuple */[
    971373850,
    "network-only"
  ],
  /* tuple */[
    973529774,
    "cache-first"
  ],
  /* tuple */[
    1038276441,
    "cache-and-network"
  ]
];

function requestPolicyToJs(param) {
  return Js_mapperRt.binarySearch(4, param, jsMapperConstantArray);
}

function requestPolicyFromJs(param) {
  return Js_mapperRt.revSearch(4, jsMapperConstantArray, param);
}

exports.requestPolicyToJs = requestPolicyToJs;
exports.requestPolicyFromJs = requestPolicyFromJs;
/* No side effect */
