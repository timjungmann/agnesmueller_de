const groq = require('groq');
const client = require('../utils/sanityClient.js');

async function getTexts() {
    const filter = groq`*[_type == "words"]{
        ...,
        textSelection[]->{
            ...,
            relatedProjects[]->{
                _type,
                title,
                slug
            }
        }
    }`;

    const projects = await client.fetch(filter).catch((err) => console.error(err));
    return projects;
}

module.exports = getTexts;
