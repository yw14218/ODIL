"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSourcePluginsAsRemarkPlugins = getSourcePluginsAsRemarkPlugins;
async function getSourcePluginsAsRemarkPlugins({
  gatsbyRemarkPlugins,
  getNode,
  getNodesByType,
  reporter,
  cache,
  pathPrefix
}) {
  const userPluginsFiltered = gatsbyRemarkPlugins ? gatsbyRemarkPlugins.filter(plugin => typeof plugin.module === `function`) : [];
  if (!userPluginsFiltered.length) {
    return [];
  }
  const userPlugins = userPluginsFiltered.map(plugin => {
    const requiredPlugin = plugin.module;
    const wrappedGatsbyPlugin = function wrappedGatsbyPlugin() {
      // eslint-disable-next-line @babel/no-invalid-this
      const mdxNode = getNode(this.data(`mdxNodeId`));
      return async function transformer(markdownAST) {
        // Execute gatsby-remark-* plugin
        await requiredPlugin({
          markdownAST,
          markdownNode: mdxNode,
          getNode,
          getNodesByType,
          get files() {
            return getNodesByType(`File`);
          },
          pathPrefix,
          reporter,
          cache
        }, plugin.pluginOptions || {});
      };
    };
    return wrappedGatsbyPlugin;
  });
  return userPlugins;
}