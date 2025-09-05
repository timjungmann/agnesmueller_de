const sanityClient = require("@sanity/client");

module.exports = sanityClient({
    projectId: '9524kj6l',
    dataset: 'production',
    apiVersion: '2022-12-22',
    useCdn: true,
    token: process.env.SANITY_READ_TOKEN
});