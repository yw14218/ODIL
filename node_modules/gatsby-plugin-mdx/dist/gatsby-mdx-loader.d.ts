import type { ProcessorOptions } from "@mdx-js/mdx";
import type { NodePluginArgs } from "gatsby";
import type { LoaderDefinition } from "webpack";
export interface IGatsbyMDXLoaderOptions {
    options: ProcessorOptions;
    getNode: NodePluginArgs["getNode"];
    cache: NodePluginArgs["cache"];
    reporter: NodePluginArgs["reporter"];
}
declare const gatsbyMDXLoader: LoaderDefinition;
export default gatsbyMDXLoader;
