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
            title: 'Project Subtitle',
            name: 'subtitle',
            type: 'string',
			fieldset: 'meta',
        },
        {
            title: 'Year',
            name: 'year',
            type: 'string',
			fieldset: 'main',
        },
        {
            title: 'Medium',
            name: 'medium',
            type: 'string',
			fieldset: 'main',
        },
        {
            title: 'Material',
            name: 'material',
            type: 'string',
            fieldset: 'main',
        },
        {
            title: 'Measurements',
            name: 'measurements',
            type: 'string',
            fieldset: 'main',
        },
        {
            title: 'Location',
            name: 'location',
            type: 'string',
			fieldset: 'main',
        },
        {
            title: 'Other',
            name: 'other',
            type: 'string',
			fieldset: 'main',
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
                { type: 'file' }
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
            title: "Related Projects & Texts",
            name: 'relatedProjects',
            type: 'array',
            fieldset: 'main',
            of: [
                {
                    type: 'reference',
                    to: [
                        { type: 'projects' },
                        { type: 'texts' },
                    ],
                    description: 'Select related projects or texts',
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
