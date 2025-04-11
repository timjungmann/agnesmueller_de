const groq = require('groq');
const client = require('../utils/sanityClient.js');

async function getProjects() {
    const filter = groq`*[_type == "homePage"]{
        ...,
        heroImgsLeft[]{
            ...,
            asset->
        },
        heroImgsRight[]{
            ...,
            asset->
        },
        newsSelection[]->{
            ...,
        },
        projectSelection[]->{
            ...,
            imageAssets[]{
                ...,
                asset->
            },
            videoAsset{
                ...,
                asset->
            },
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

module.exports = getProjects;
