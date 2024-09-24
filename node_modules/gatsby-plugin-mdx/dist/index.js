"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _compileMdx = require("./compile-mdx");
Object.keys(_compileMdx).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _compileMdx[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _compileMdx[key];
    }
  });
});