const groq = require('groq');
const client = require('../utils/sanityClient.js');

async function getAbout() {
    const filter = groq`*[_type == "about"]{
        ...
    }`;

    const about = await client.fetch(filter).catch((err) => console.error(err));
    return about;
}

module.exports = getAbout;
