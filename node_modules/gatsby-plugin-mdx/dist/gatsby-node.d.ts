import type { GatsbyNode } from "gatsby";
import type { FileSystemNode } from "gatsby-source-filesystem";
/**
 * Add support for MDX files including using Gatsby layout components
 */
export declare const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"];
/**
 * Add the MDX extensions as resolvable. This is how the page creator
 * determines which files in the pages/ directory get built as pages.
 */
export declare const resolvableExtensions: GatsbyNode["resolvableExtensions"];
/**
 * Convert MDX to JSX so that Gatsby can extract the GraphQL queries and render the pages.
 */
export declare const preprocessSource: GatsbyNode["preprocessSource"];
export declare const createSchemaCustomization: GatsbyNode["createSchemaCustomization"];
export declare const shouldOnCreateNode: GatsbyNode["shouldOnCreateNode"];
/**
 * Create Mdx nodes from MDX files.
 */
export declare const onCreateNode: GatsbyNode<FileSystemNode>["onCreateNode"];
/**
 * Add frontmatter as page context for MDX pages
 */
export declare const onCreatePage: GatsbyNode["onCreatePage"];
export declare const onPluginInit: GatsbyNode["onPluginInit"];
/**
 * Plugin option validation
 */
export declare const pluginOptionsSchema: GatsbyNode["pluginOptionsSchema"];
