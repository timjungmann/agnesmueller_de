export default {
    title: 'Words',
    name: 'words',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Text Selection',
            name: 'textSelection',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'texts' }],
            }],
            description: 'Select and order texts',
            preview: {
                select: {
                    title: 'textRef.title',
                },
            },
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
            title: 'title',
        },
    },
};
