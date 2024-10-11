const fs = require('fs');
const path = require('path');
const axios = require("axios");
const yaml = require('js-yaml');
const NavigationPlugin = require('@11ty/eleventy-navigation');
// const ErrorOverlayPlugin = require('eleventy-plugin-error-overlay');

const filters = require('./utils/filters');
const markdown = require('./utils/markdown');
const shortcodes = require('./utils/shortcodes');
const transforms = require('./utils/transforms');
const purgeCssPlugin = require('eleventy-plugin-purgecss');

// todo clean this up
module.exports = (config) => {
    const manifestPath = path.resolve(__dirname, '_site/assets/manifest.json');

    // Allow for customizing the built in markdown parser.
    config.setLibrary('md', markdown);

    // Allow eleventy to understand yaml files
    config.addDataExtension('yml', (contents) => yaml.load(contents));

    // Add navigation plugin
    config.addPlugin(NavigationPlugin);

    // Shows error name, message, and fancy stacktrace
    // config.addPlugin(ErrorOverlayPlugin);

    // Purge unused css classes
    // if (process.env.NODE_ENV === 'production') {
    //     config.addPlugin(purgeCssPlugin, {
    //         // Optional: Specify the location of your PurgeCSS config
    //         config: './purgecss.config.js',

    //         // Optional: Set quiet: true to suppress terminal output
    //         quiet: false,
    //     });
    // }

    // Filters
    Object.keys(filters).forEach((key) => {
        config.addFilter(key, filters[key]);
    });

    // Video passthrough filter
    config.addAsyncFilter("passThroughVideo", async function(url, fileName) {
        const outputPath = path.join('_site', 'assets', fileName);

        try {
            const response = await axios.get(url, { responseType: 'stream' });
            const writer = fs.createWriteStream(outputPath);
            response.data.pipe(writer);

            return new Promise((resolve, reject) => {
              writer.on('finish', () => {
                resolve('/assets/' + fileName);
            });
              writer.on('error', reject);
            });
        } catch (error) {
            throw new Error(`Error downloading and saving video: ${error}`);
        }
    });

    config.addNunjucksFilter('isArr', input => Array.isArray(input));

    config.addNunjucksFilter('kebabcase', string => string
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, '-')
        .toLowerCase()
    );

    // Transforms
    Object.keys(transforms).forEach((key) => {
        config.addTransform(key, transforms[key]);
    });

    // Shortcodes
    config.addShortcode('icon', shortcodes.icon);
    config.addPairedShortcode('markdown', shortcodes.markdown);
    config.addAsyncShortcode('image', shortcodes.image);
    config.addNunjucksAsyncShortcode('webpack', shortcodes.webpack);
    config.addShortcode('dump', shortcodes.dump);
    config.addNunjucksGlobal('isDev', process.env.NODE_ENV !== 'production')

    // todo extend and clean-up
    // Pass-through files
    config.addPassthroughCopy('_headers');
    config.addPassthroughCopy('favicon.ico');
    config.addPassthroughCopy('favicon.svg');
    config.addPassthroughCopy('site.webmanifest');
    config.addPassthroughCopy('assets/favicon');
    config.addPassthroughCopy('assets/fonts');
    // config.addPassthroughCopy('assets/icons');
    config.addPassthroughCopy('assets/images');
    config.addPassthroughCopy('assets/videos');

    // BrowserSync Overrides
    config.setBrowserSyncConfig({
        ...config.browserSyncConfig,
        // Reload when manifest file changes
        files: [manifestPath],
        // Show 404 page on invalid urls
        callbacks: {
            ready: (err, browserSync) => {
                browserSync.addMiddleware('*', (req, res) => {
                    const fourOFour = fs.readFileSync('_site/404.html');
                    res.writeHead(404, {"Content-Type": "text/html; charset=UTF-8"});
                    res.write(fourOFour);
                    res.end();
                });
            }
        },
        // Speed/clean up build time
        ui: false,
        ghostMode: false
    });

    return {
        dir: {
            input: '.',
            output: '_site',
            includes: 'includes',
            layouts: 'layouts',
            data: 'data'
        },
        // Allow nunjucks, markdown and 11ty files to be processed
        templateFormats: ['njk', 'md', '11ty.js'],
        htmlTemplateEngine: 'njk',
        // Allow pre-processing `.md` files with nunjucks
        // thus transforming the shortcodes
        markdownTemplateEngine: 'njk'
    };
};
