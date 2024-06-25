export default {
    title: 'Projects',
    name: 'projects',
    type: 'document',
    fieldsets: [
		{ name: 'meta', title: 'Meta' },
		{ name: 'main', title: 'Main' },
	],
    fields: [
        // META
        {
            title: 'Project Title',
            name: 'title',
            type: 'string',
			fieldset: 'meta',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            fieldset: 'meta',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            title: 'Year',
            name: 'year',
            type: 'string',
			fieldset: 'meta',
        },
        {
            title: 'Medium',
            name: 'medium',
            type: 'string',
			fieldset: 'meta',
        },
        {
            title: 'Location',
            name: 'location',
            type: 'textField',
			fieldset: 'meta',
        },
        {
            title: 'Material',
            name: 'material',
            type: 'text',
			fieldset: 'meta',
        },

        // MAIN
        {
            title: 'Description',
            name: 'desc',
            type: 'textField',
			fieldset: 'main',
        },
        {
            title: 'Media Assets',
            name: 'mediaAssets',
            type: 'array',
            of: [
                { type: 'mediaAsset' },
            ],
			fieldset: 'main',
        },
        {
            title: 'Video Asset',
            name: 'videoAsset',
            type: 'videoAsset',
			fieldset: 'main',
        },
        {
            title: "Related Projects",
            name: 'relatedProjects',
            type: 'array',
            fieldset: 'main',
            of: [
                {
                    type: 'reference',
                    to: [
                        { type: 'projects' },
                    ],
                    description: 'Select related projects',
                },
            ],
        },

        // SEO
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
        prepare(selection) {
            const {title} = selection
            return {
                title,
                media: <span style={{fontSize: '1.2rem'}}>🪤</span>
            }
        }
    },
};
