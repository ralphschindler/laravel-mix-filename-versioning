# Laravel Mix Filename Versioning

```
npm install --save-dev laravel-mix-filename-versioning
```

In your webpack.mix.js file:

```
// top of the file
let LaravelMixFilenameVersioning = require('laravel-mix-filename-versioning');

// ... at the end of the file
mix.webpackConfig({
  plugins: [
    new LaravelMixFilenameVersioning
  ]
});
```