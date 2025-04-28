const groq = require('groq');
const client = require('../utils/sanityClient.js');

async function getImprint() {
    const filter = groq`*[_type == "imprint"]{
        ...
    }`;

    const imprint = await client.fetch(filter).catch((err) => console.error(err));
    return imprint;
}

module.exports = getImprint;
