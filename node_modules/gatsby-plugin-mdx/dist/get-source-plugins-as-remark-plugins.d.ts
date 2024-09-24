import type { ProcessorOptions } from "@mdx-js/mdx";
import type { GatsbyCache, NodePluginArgs } from "gatsby";
import type { IMdxPluginOptions } from "./plugin-options";
interface IGetSourcePluginsAsRemarkPlugins {
    gatsbyRemarkPlugins: IMdxPluginOptions["gatsbyRemarkPlugins"];
    getNode: NodePluginArgs["getNode"];
    getNodesByType: NodePluginArgs["getNodesByType"];
    pathPrefix: NodePluginArgs["pathPrefix"];
    reporter: NodePluginArgs["reporter"];
    cache: GatsbyCache;
}
export declare function getSourcePluginsAsRemarkPlugins({ gatsbyRemarkPlugins, getNode, getNodesByType, reporter, cache, pathPrefix, }: IGetSourcePluginsAsRemarkPlugins): Promise<ProcessorOptions["remarkPlugins"]>;
export {};
