export default {
    title: 'Home Page',
    name: 'homePage',
    type: 'document',
    fieldsets: [
		{ name: 'main', title: 'Main' },
		{ name: 'projects', title: 'Projects' },
	],
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
			fieldset: 'main',
        },
        {
            title: 'News Selection',
            name: 'newsSelection',
            type: 'array',
			fieldset: 'main',
            of: [{
                type: 'reference',
                to: [{ type: 'news' }],
            }],
            description: 'Select and order news',
            preview: {
                select: {
                    title: 'projectRef.label',
                },
            },
        },
        {
            title: 'Project Selection',
            name: 'projectSelection',
            type: 'array',
			fieldset: 'projects',
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
