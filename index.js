const fs = require('fs')
const path = require('path');

class LaravelMixFilenameVersioning {
  apply (compiler) {
    compiler.plugin('done', function(stats) {
      const newAssets = {};

      Object.keys(stats.compilation.assets).forEach(assetName => {
          let originalAssetNameParts = path.parse(assetName);
          let newAssetFile = new File(path.join(Config.publicPath, assetName));
          let newAssetFileName = newAssetFile.segments.name + '.' + newAssetFile.version() + newAssetFile.segments.ext;

          newAssetFile.rename(newAssetFileName);

          let newAssetKeyName = path.join(originalAssetNameParts.dir, newAssetFileName);
          let newAssetFullFileName = path.join(newAssetFile.segments.base, newAssetFileName);
          newAssets[newAssetKeyName] = stats.compilation.assets[assetName];

          if (newAssets[newAssetKeyName].hasOwnProperty('existsAt')) {
            newAssets[newAssetKeyName].existsAt = newAssetFullFileName;
          }
          if (newAssets[newAssetKeyName].hasOwnProperty('absolutePath')) {
            newAssets[newAssetKeyName].absolutePath = newAssetFullFileName;
          }

          // this is only a fix for the incorrect asset binding in CustomTaskPlugins.js
          newAssets[newAssetKeyName].size = function (assetAbsolutePath) {
            return new File(assetAbsolutePath).size();
          }.bind(null, newAssetFullFileName);
      });

      stats.compilation.assets = newAssets;
    });
  }
}

module.exports = LaravelMixFilenameVersioning;