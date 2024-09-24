import type { Plugin } from "unified";
import type { Options, toc } from "mdast-util-toc";
import type { visit } from "unist-util-visit";
interface IRemarkTocOptions {
    maxDepth?: Options["maxDepth"];
    toc: typeof toc;
    visit: typeof visit;
}
declare const remarkInferTocMeta: Plugin<[IRemarkTocOptions]>;
export default remarkInferTocMeta;
