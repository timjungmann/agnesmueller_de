export default {
    title: 'Home Page',
    name: 'homePage',
    type: 'document',
    fieldsets: [
		{ name: 'hero', title: 'Hero' },
		{ name: 'projects', title: 'Projects' },
	],
    fields: [
        {
            title: 'Hero Images Left',
            name: 'heroImgsLeft',
            type: 'array',
            of: [
                { type: 'mediaAsset' },
            ],
            description: 'Add images to be displayed on the left side of the hero section',
			fieldset: 'hero',
        },
        {
            title: 'Hero Images Right',
            name: 'heroImgsRight',
            type: 'array',
            of: [
                { type: 'mediaAsset' },
            ],
            description: 'Add images to be displayed on the right side of the hero section',
			fieldset: 'hero',
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
            title: 'seo.title',
        },
    },
};
