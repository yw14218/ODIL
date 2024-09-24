"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cachedImport = cachedImport;
exports.createFileToMdxCacheKey = createFileToMdxCacheKey;
function createFileToMdxCacheKey(absolutePath) {
  return `fileToMdx-${absolutePath}`;
}
const importCache = new Map();
async function cachedImport(packageName) {
  if (importCache.has(packageName)) {
    return importCache.get(packageName);
  }
  const importedPackage = await import(packageName);
  return importedPackage;
}