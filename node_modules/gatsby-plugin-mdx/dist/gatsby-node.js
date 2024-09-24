"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldOnCreateNode = exports.resolvableExtensions = exports.preprocessSource = exports.pluginOptionsSchema = exports.onPluginInit = exports.onCreateWebpackConfig = exports.onCreatePage = exports.onCreateNode = exports.createSchemaCustomization = void 0;
var _path = _interopRequireDefault(require("path"));
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _parseComponentPath = require("gatsby-core-utils/parse-component-path");
var _pluginOptions = require("./plugin-options");
var _frontmatter = require("./frontmatter");
var _compileMdx = require("./compile-mdx");
var _remarkInferTocMeta = _interopRequireDefault(require("./remark-infer-toc-meta"));
var _errorUtils = require("./error-utils");
var _cacheHelpers = require("./cache-helpers");
/**
 * Add support for MDX files including using Gatsby layout components
 */
const onCreateWebpackConfig = async ({
  actions,
  loaders,
  getNode,
  getNodesByType,
  pathPrefix,
  reporter,
  cache,
  store
}, pluginOptions) => {
  const options = (0, _pluginOptions.defaultOptions)(pluginOptions);
  const mdxOptions = await (0, _pluginOptions.enhanceMdxOptions)(pluginOptions, {
    getNode,
    getNodesByType,
    pathPrefix,
    reporter,
    cache,
    store
  });
  const mdxLoaderOptions = {
    options: mdxOptions,
    reporter,
    cache,
    getNode
  };
  const layoutLoaderOptions = {
    options,
    nodeExists: async function nodeExists(absolutePath) {
      const entry = await cache.get((0, _cacheHelpers.createFileToMdxCacheKey)(absolutePath));
      return !!entry;
    },
    reporter
  };
  actions.setWebpackConfig({
    module: {
      rules: [{
        test: /\.mdx?$/,
        use: ({
          resourceQuery,
          issuer
        }) => [loaders.js({
          isPageTemplate: /async-requires/.test(issuer),
          resourceQuery
        }), {
          loader: _path.default.join(__dirname, `gatsby-mdx-loader`),
          options: mdxLoaderOptions
        }]
      }, {
        test: /\.[tj]sx?$/,
        resourceQuery: /__contentFilePath=.+\.mdx?(&export=.*)?$/,
        use: ({
          resourceQuery,
          issuer
        }) => [loaders.js({
          isPageTemplate: /async-requires/.test(issuer),
          resourceQuery
        }), {
          loader: _path.default.join(__dirname, `gatsby-layout-loader`),
          options: layoutLoaderOptions
        }]
      }]
    }
  });
};

/**
 * Add the MDX extensions as resolvable. This is how the page creator
 * determines which files in the pages/ directory get built as pages.
 */
exports.onCreateWebpackConfig = onCreateWebpackConfig;
const resolvableExtensions = (_data, pluginOptions) => (0, _pluginOptions.defaultOptions)(pluginOptions).extensions;

/**
 * Convert MDX to JSX so that Gatsby can extract the GraphQL queries and render the pages.
 */
exports.resolvableExtensions = resolvableExtensions;
const preprocessSource = async ({
  filename,
  getNode,
  getNodesByType,
  pathPrefix,
  reporter,
  cache,
  store
}, pluginOptions) => {
  const options = (0, _pluginOptions.defaultOptions)(pluginOptions);
  const {
    extensions
  } = options;
  const mdxPath = (0, _parseComponentPath.getPathToContentComponent)(filename);
  if (!mdxPath) {
    return undefined;
  }
  const mdxOptions = await (0, _pluginOptions.enhanceMdxOptions)(pluginOptions, {
    getNode,
    getNodesByType,
    pathPrefix,
    reporter,
    cache,
    store
  });
  const ext = _path.default.extname(mdxPath);
  if (!extensions.includes(ext)) {
    return undefined;
  }
  const contents = await _fsExtra.default.readFile(mdxPath);
  const compileRes = await (0, _compileMdx.compileMDX)({
    source: contents,
    absolutePath: filename
  }, mdxOptions, cache, reporter);
  if (!(compileRes !== null && compileRes !== void 0 && compileRes.processedMDX)) {
    return undefined;
  }
  return compileRes.processedMDX.toString();
};
exports.preprocessSource = preprocessSource;
const createSchemaCustomization = async ({
  getNode,
  getNodesByType,
  pathPrefix,
  reporter,
  cache,
  actions,
  schema,
  store
}, pluginOptions) => {
  const {
    createTypes
  } = actions;
  const typeDefs = [schema.buildObjectType({
    name: `Mdx`,
    fields: {
      excerpt: {
        type: `String`,
        args: {
          pruneLength: {
            type: `Int`,
            defaultValue: 140
          }
        },
        async resolve(mdxNode, {
          pruneLength
        }) {
          const rehypeInferDescriptionMeta = (await (0, _cacheHelpers.cachedImport)(`rehype-infer-description-meta`)).default;
          const descriptionOptions = {
            truncateSize: pruneLength
          };
          const fileNode = getNode(mdxNode.parent);
          if (!fileNode) {
            return null;
          }
          const result = await (0, _compileMdx.compileMDXWithCustomOptions)({
            source: mdxNode.body,
            absolutePath: fileNode.absolutePath
          }, {
            pluginOptions,
            customOptions: {
              mdxOptions: {
                rehypePlugins: [[rehypeInferDescriptionMeta, descriptionOptions]]
              }
            },
            getNode,
            getNodesByType,
            pathPrefix,
            reporter,
            cache,
            store
          });
          if (!result) {
            return null;
          }
          return result.metadata.description;
        }
      },
      tableOfContents: {
        type: `JSON`,
        args: {
          maxDepth: {
            type: `Int`,
            default: 6
          }
        },
        async resolve(mdxNode, {
          maxDepth
        }) {
          const [{
            visit
          }, {
            toc
          }] = await Promise.all([import(`unist-util-visit`), import(`mdast-util-toc`)]);
          const fileNode = getNode(mdxNode.parent);
          if (!fileNode) {
            return null;
          }
          const result = await (0, _compileMdx.compileMDXWithCustomOptions)({
            source: mdxNode.body,
            absolutePath: fileNode.absolutePath
          }, {
            pluginOptions,
            customOptions: {
              mdxOptions: {
                remarkPlugins: [[_remarkInferTocMeta.default, {
                  visit,
                  toc,
                  maxDepth
                }]]
              }
            },
            getNode,
            getNodesByType,
            pathPrefix,
            reporter,
            cache,
            store
          });
          if (!result) {
            return null;
          }
          return result.metadata.toc;
        }
      }
    },
    extensions: {
      infer: true
    },
    interfaces: [`Node`]
  })];
  createTypes(typeDefs);
};

// eslint-disable-next-line @typescript-eslint/naming-convention
exports.createSchemaCustomization = createSchemaCustomization;
const shouldOnCreateNode = ({
  node
}, pluginOptions) => {
  const {
    extensions
  } = (0, _pluginOptions.defaultOptions)(pluginOptions);
  return node.internal.type === `File` && extensions.includes(node.ext);
};

/**
 * Create Mdx nodes from MDX files.
 */
exports.shouldOnCreateNode = shouldOnCreateNode;
const onCreateNode = async ({
  node,
  loadNodeContent,
  actions: {
    createNode,
    createParentChildLink
  },
  createNodeId,
  cache
}) => {
  const rawBody = await loadNodeContent(node);
  const {
    frontmatter,
    body
  } = (0, _frontmatter.parseFrontmatter)(node.internal.contentDigest, rawBody);
  const mdxNode = {
    id: createNodeId(`${node.id} >>> Mdx`),
    children: [],
    parent: node.id,
    internal: {
      type: `Mdx`,
      contentDigest: node.internal.contentDigest,
      contentFilePath: node.absolutePath
    },
    body,
    frontmatter
  };
  createNode(mdxNode);
  createParentChildLink({
    parent: node,
    child: mdxNode
  });
  await cache.set((0, _cacheHelpers.createFileToMdxCacheKey)(node.absolutePath), mdxNode.id);
};

/**
 * Add frontmatter as page context for MDX pages
 */
exports.onCreateNode = onCreateNode;
const onCreatePage = async ({
  page,
  actions,
  getNodesByType
}, pluginOptions) => {
  var _page$context;
  const {
    createPage,
    deletePage
  } = actions;
  const {
    extensions
  } = (0, _pluginOptions.defaultOptions)(pluginOptions);
  const mdxPath = (0, _parseComponentPath.getPathToContentComponent)(page.component);
  const ext = _path.default.extname(mdxPath);

  // Only apply on pages based on .mdx files
  if (!extensions.includes(ext)) {
    return;
  }
  const fileNode = getNodesByType(`File`).find(node => node.absolutePath === mdxPath);
  if (!fileNode) {
    throw new Error(`Could not locate File node for ${mdxPath}`);
  }

  // Avoid loops
  if (!((_page$context = page.context) !== null && _page$context !== void 0 && _page$context.frontmatter)) {
    const content = await _fsExtra.default.readFile(mdxPath, `utf8`);
    const {
      frontmatter
    } = (0, _frontmatter.parseFrontmatter)(fileNode.internal.contentDigest, content);
    deletePage(page);
    createPage({
      ...page,
      context: {
        ...page.context,
        frontmatter
      }
    });
  }
};
exports.onCreatePage = onCreatePage;
const onPluginInit = ({
  reporter
}) => {
  // @ts-ignore - We only expose this type from gatsby-cli and we don't want to import from there
  reporter.setErrorMap(_errorUtils.ERROR_MAP);
};

/**
 * Plugin option validation
 */
exports.onPluginInit = onPluginInit;
const pluginOptionsSchema = ({
  Joi
}) => Joi.object({
  extensions: Joi.array().items(Joi.string()).default([`.mdx`]).description(`Configure the file extensions that gatsby-plugin-mdx will process`),
  gatsbyRemarkPlugins: Joi.subPlugins().description(`Use Gatsby-specific remark plugins`),
  mdxOptions: Joi.object().keys({
    jsx: Joi.boolean().description(`Whether to keep JSX`),
    format: Joi.string().valid(`mdx`, `md`).description(`Format of the files to be processed`),
    outputFormat: Joi.string().valid(`program`, `function-body`).description(`Whether to compile to a whole program or a function body`),
    mdExtensions: Joi.array().items(Joi.string().regex(/^\./)).description(`Extensions (with \`.\`) for markdown`),
    mdxExtensions: Joi.array().items(Joi.string().regex(/^\./)).description(`Extensions (with \`.\`) for MDX`),
    recmaPlugins: Joi.array().description(`List of recma (esast, JavaScript) plugins`),
    remarkPlugins: Joi.array().description(`List of remark (mdast, markdown) plugins`),
    rehypePlugins: Joi.array().description(`List of rehype (hast, HTML) plugins`),
    remarkRehypeOptions: Joi.object().unknown().description(`Options to pass through to \`remark-rehype\``)
  }).unknown(true).default({}).description(`Pass any options to MDX. See: https://mdxjs.com/packages/mdx/#compilefile-options`)
});
exports.pluginOptionsSchema = pluginOptionsSchema;