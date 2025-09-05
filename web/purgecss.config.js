module.exports = {
    // Content files referencing CSS classes
    content: [
        './_site/index.html',
        './_site/**/*.html',
        './_site/**/*.js',
    ],

    // CSS files to be purged in-place
    css: ["./_site/**/*.css"],

    // Let classes with colons and dots be included
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
};