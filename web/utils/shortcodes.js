const fs = require('fs');
const path = require('path');
const {outdent} = require('outdent');
const Image = require('@11ty/eleventy-img');
const markdown = require('./markdown');

const isFullUrl = (url) => {
    try {
        return !!new URL(url);
    } catch {
        return false;
    }
};

const manifestPath = path.resolve(__dirname, '../_site/assets/manifest.json');

module.exports = {
    // Allow embedding markdown in `.njk` files
    // {% markdown %}
    // # Heading
    // {% endmarkdown %}
    markdown: (content) => markdown.render(outdent.string(content)),

    // Allow embedding webpack assets pulled out from `manifest.json`
    // {% webpack "main.css" %}
    webpack: async (name) =>
        new Promise((resolve) => {
            fs.readFile(manifestPath, {encoding: 'utf8'}, (err, data) =>
                resolve(err ? `/assets/${name}` : JSON.parse(data)[name])
            );
        }),

    // Allow embedding svg icon
    // {% icon "github", "my-class" %}
    icon: (name, className) => {
        return outdent({newline: ''})`
    <span class="icon icon--${name} ${
            className || ''
        }">
      <svg role="img" aria-hidden="true">
        <use xlink:href="/assets/images/sprite.svg#${name}"></use>
      </svg>
    </span>`;
    },

    // Allow embedding responsive images
    // {% image "image.jpeg", "Image alt", "(min-width: 64em) 50vw, 100vw" %}
    // {% image [100,100], "image.jpeg", "Image alt", "Image title", "my-class" %}
    image: async function imageShortcode(src, alt="", sizes, widths, loading = 'lazy', originalFilename) {
        // src = "./assets/images/" + src;
        let metadata = await Image(src, {
            widths: widths ? widths : [320, 640, 800, 1024, 1440, 1600, 1920],
            formats: ["webp", "jpeg"],
            outputDir: "_site/assets/images/",
            urlPath: "/assets/images/",
            filenameFormat: function(id, src, width, format, options) {
                const extension = path.extname(src);
                const name =  originalFilename ? originalFilename : path.basename(src, extension);

                return `${name}-${width}w.${format}`;
            }
        });

        let imageAttributes = {
            alt,
            sizes,
            loading: loading,
            decoding: "sync",
        };

        // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
        return Image.generateHTML(metadata, imageAttributes);
    },
    dump: (variable) => {
        return `<pre>${JSON.stringify(variable, null, '\t')}</pre>`;
    },
};
