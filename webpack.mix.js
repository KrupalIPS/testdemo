const mix = require('laravel-mix');
require('laravel-mix-postcss-config'); // Added for PostCSS compatibility
require('laravel-mix-purgecss');
require('laravel-mix-copy-watched');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Sage application. By default, we are compiling the Sass file
 | for your application, as well as bundling up your JS files.
 |
 */

mix
  .setPublicPath('./dist')
  .browserSync('http://localhost:8080/php/wp/sagedemo');

mix
  .postCss('resources/assets/styles/theme.css', 'styles')
  .postCss('resources/assets/styles/wordpress.css', 'styles')
  .postCssConfig()
  .purgeCss({
    extend: { content: [path.join(__dirname, 'index.php')] },
    whitelist: require('purgecss-with-wordpress').whitelist,
    whitelistPatterns: require('purgecss-with-wordpress').whitelistPatterns,
  });

mix
  .js('resources/assets/scripts/theme.js', 'scripts')
  .js('resources/assets/scripts/flex.js', 'scripts')
  .js('resources/assets/scripts/wordpress.js', 'scripts')
  .js('resources/assets/scripts/script.js', 'scripts')
  .extract();

mix
  .copyWatched('resources/assets/images/**', 'dist/images')
  .copyWatched('resources/assets/fonts/**', 'dist/fonts');

mix
  .autoload({ jquery: ['$', 'window.jQuery'] })
  .options({ processCssUrls: false })
  .sourceMaps(true, 'source-map')
  .version();
