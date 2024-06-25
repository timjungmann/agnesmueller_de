export default {
    title: 'Home Page',
    name: 'homePage',
    type: 'document',
    fields: [
        {
            title: 'About',
            name: 'about',
            type: 'textField'
        },
        {
            title: 'Project Selection',
            name: 'projectSelection',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'projects' }],
            }],
            description: 'Select and order projects',
            preview: {
                select: {
                    title: 'projectRef.label',
                    imageUrl: 'projectRef.projectImgs.0.asset.url',
                },
            },
        },
        {
            title: 'Contact',
            name: 'contact',
            type: 'textField'
        },

        // ↓ METADATA
        {
            title: "Seo Description",
            name: "seoDescription",
            type: "string",
        },
    ],
    preview: {
        select: {
            title: 'seo.title',
        },
    },
};
