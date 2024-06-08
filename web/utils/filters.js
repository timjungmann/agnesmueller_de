const util = require("util");
const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");
const { format, formatISO } = require("date-fns");
const markdown = require("./markdown");
const {toHTML} = require("@portabletext/to-html");

module.exports = {
    format: format,
    formatISO: formatISO,

    log: (data) => console.log(`\n\n${util.inspect(data)}\n\n`),
    markdown: (content) => markdown.render(content),
    markdownInline: (content) => markdown.renderInline(content),
    htmlDateString: (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
    },
    readableDate: (dateObj) => new Date(dateObj).toDateString(),
    debug: (value) => util.inspect(value, { compact: false }),
    cssmin: (code) => new CleanCSS({}).minify(code).styles,
    dump: (variable) => {
        return `<pre>${JSON.stringify(variable, null, 4).replace('<br>')}</pre>`;
    },
    portableToHtml: (portabletextSections) =>{
        const myPortableTextComponents = {
            types: {
              Rule: () => '<hr>'
            }
        }

        return toHTML(portabletextSections, {components: myPortableTextComponents})
    }
};
