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
            type: 'string',
			fieldset: 'meta',
        },
        {
            title: 'Material',
            name: 'material',
            type: 'string',
			fieldset: 'meta',
        },
        {
            title: 'Measurements',
            name: 'measurements',
            type: 'string',
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
            title: 'Images',
            name: 'imageAssets',
            type: 'array',
            of: [
                { type: 'mediaAsset' },
            ],
			fieldset: 'main',
        },
        {
            title: 'Video',
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
