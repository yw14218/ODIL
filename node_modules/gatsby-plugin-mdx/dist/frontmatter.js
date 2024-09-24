"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseFrontmatter = parseFrontmatter;
var _grayMatter = _interopRequireDefault(require("gray-matter"));
const cacheMap = new Map();
function parseFrontmatter(cacheKey, source) {
  if (cacheMap.has(cacheKey)) {
    return cacheMap.get(cacheKey);
  }
  const {
    content,
    data
  } = (0, _grayMatter.default)(source, {
    language: `yaml`,
    // Disable JS/JSON frontmatter parsing.
    // See: https://github.com/gatsbyjs/gatsby/pull/35830
    engines: {
      js: () => {
        return {};
      },
      javascript: () => {
        return {};
      },
      json: () => {
        return {};
      }
    }
  });
  cacheMap.set(cacheKey, {
    body: content,
    frontmatter: data
  });
  return {
    body: content,
    frontmatter: data
  };
}