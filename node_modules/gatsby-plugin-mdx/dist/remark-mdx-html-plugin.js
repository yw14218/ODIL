"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remarkMdxHtmlPlugin = void 0;
var _mdastUtilToHast = _interopRequireDefault(require("mdast-util-to-hast"));
var _cacheHelpers = require("./cache-helpers");
// This plugin replaces html nodes with JSX spans that render given HTML via dangerouslySetInnerHTML
// We have to find out if this is really a good idea, but its processing footprint is very low
// compared to other solutions that would traverse the given HTML.
const remarkMdxHtmlPlugin = () => async function transformer(markdownAST) {
  const {
    visit
  } = await (0, _cacheHelpers.cachedImport)(`unist-util-visit`);

  // Turn mdast nodes into hast nodes
  // Required to support gatsby-plugin-autolink-headers
  visit(markdownAST, node => {
    if (node.data && Object.keys(node.data).includes(`hChildren`)) {
      const converted = (0, _mdastUtilToHast.default)(node, {
        allowDangerousHtml: true
      });
      if (converted) {
        Object.assign(node, converted);
      }
    }
  });

  // Turn raw & html nodes into JSX spans with dangerouslySetInnerHTML
  // Required to support gatsby-remark-images & gatsby-remark-autolink-headers
  visit(markdownAST, node => {
    if (![`html`, `raw`].includes(node.type)) {
      return;
    }
    const typedNode = node;
    typedNode.type = `mdxJsxFlowElement`;
    typedNode.name = `span`;
    typedNode.attributes = [{
      type: `mdxJsxAttribute`,
      name: `dangerouslySetInnerHTML`,
      value: {
        type: `mdxJsxAttributeValueExpression`,
        data: {
          estree: {
            type: `Program`,
            body: [{
              type: `ExpressionStatement`,
              expression: {
                type: `ObjectExpression`,
                properties: [{
                  type: `Property`,
                  method: false,
                  shorthand: false,
                  computed: false,
                  key: {
                    type: `Identifier`,
                    name: `__html`
                  },
                  value: {
                    type: `Literal`,
                    value: node.value
                  },
                  kind: `init`
                }]
              }
            }],
            sourceType: `module`
          }
        }
      }
    }];
  });
  return markdownAST;
};
exports.remarkMdxHtmlPlugin = remarkMdxHtmlPlugin;