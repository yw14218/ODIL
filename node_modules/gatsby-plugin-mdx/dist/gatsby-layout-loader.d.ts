import type { NodePluginArgs } from "gatsby";
import type { LoaderDefinition } from "webpack";
import type { IMdxPluginOptions } from "./plugin-options";
export interface IGatsbyLayoutLoaderOptions {
    options: IMdxPluginOptions;
    nodeExists: (path: string) => Promise<boolean>;
    reporter: NodePluginArgs["reporter"];
}
declare const gatsbyLayoutLoader: LoaderDefinition;
export default gatsbyLayoutLoader;
