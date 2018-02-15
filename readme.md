# Laravel Mix Filename Versioning

### Installation

```
npm install --save-dev laravel-mix-filename-versioning
```

### Usage

In your webpack.mix.js file:

```
// top of the file
let LaravelMixFilenameVersioning = require('laravel-mix-filename-versioning');

// ... at the end of the file
if (mix.inProduction()) {
  mix.webpackConfig({
    plugins: [
      new LaravelMixFilenameVersioning
    ]
  });
}
```

### Output

<img src="https://raw.githubusercontent.com/ralphschindler/laravel-mix-filename-versioning/HEAD/output.png" />
