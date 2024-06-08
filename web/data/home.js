const groq = require('groq');
const client = require('../utils/sanityClient.js');

async function getProjects() {
    const filter = groq`*[_type == "homePage"]{
        ...,
        projectSelection[]->{
            teaser{
                ...,
                image{
                    ...,
                    asset->
                },
                video{
                    ...,
                    asset->
                },
            },
        }
    }`;

    const projects = await client.fetch(filter).catch((err) => console.error(err));
    return projects;
}

module.exports = getProjects;
