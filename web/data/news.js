const groq = require('groq');
const client = require('../utils/sanityClient.js');

async function getNews() {
    const filter = groq`*[_type == "news"]{
        ...,
        mediaAsset{
            ...,
            asset->
        },
    }`;

    const news = await client.fetch(filter).catch((err) => console.error(err));
    return news;
}

module.exports = getNews;
