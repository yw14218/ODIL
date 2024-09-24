"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compileMDX = compileMDX;
exports.compileMDXWithCustomOptions = void 0;
var _deepmerge = _interopRequireDefault(require("deepmerge"));
var _pluginOptions = require("./plugin-options");
var _errorUtils = require("./error-utils");
var _cacheHelpers = require("./cache-helpers");
// Compiles MDX into JS
// Differences to original @mdx-js/loader:
// * We pass the MDX node and a metadata object to the processor
// * We inject the path to the original mdx file into the VFile which is used by the processor
async function compileMDX({
  absolutePath,
  source
}, options, cache, reporter) {
  try {
    const {
      createProcessor
    } = await (0, _cacheHelpers.cachedImport)(`@mdx-js/mdx`);
    const {
      VFile
    } = await (0, _cacheHelpers.cachedImport)(`vfile`);
    const processor = createProcessor(options);

    // Pass required custom data into the processor
    processor.data(`mdxNodeId`, await cache.get((0, _cacheHelpers.createFileToMdxCacheKey)(absolutePath)));
    processor.data(`mdxMetadata`, {});
    const result = await processor.process(
    // Inject path to original file for remark plugins. See: https://github.com/gatsbyjs/gatsby/issues/26914
    new VFile({
      value: source,
      path: absolutePath
    }));

    // Clone metadata so ensure it won't be overridden by later processings
    const clonedMetadata = Object.assign({}, processor.data(`mdxMetadata`));
    const processedMDX = result.toString();
    return {
      processedMDX,
      metadata: clonedMetadata
    };
  } catch (error) {
    reporter.panicOnBuild({
      id: _errorUtils.ERROR_CODES.MdxCompilation,
      context: {
        absolutePath,
        errorMeta: error
      }
    });
    return null;
  }
}

/**
 * This helper function allows you to inject additional plugins and configuration into the MDX
 * compilation pipeline. Very useful to create your own resolvers that return custom metadata.
 * Internally used to generate the tables of contents and the excerpts.
 */
const compileMDXWithCustomOptions = async ({
  absolutePath,
  source
}, {
  pluginOptions,
  customOptions,
  getNode,
  getNodesByType,
  pathPrefix,
  reporter,
  cache,
  store
}) => {
  const customPluginOptions = (0, _deepmerge.default)(Object.assign({}, pluginOptions), customOptions);

  // Prepare MDX compile
  const mdxOptions = await (0, _pluginOptions.enhanceMdxOptions)(customPluginOptions, {
    getNode,
    getNodesByType,
    pathPrefix,
    reporter,
    cache,
    store
  });

  // Compile MDX and extract metadata
  return compileMDX({
    source: source,
    absolutePath: absolutePath
  }, mdxOptions, cache, reporter);
};
exports.compileMDXWithCustomOptions = compileMDXWithCustomOptions;