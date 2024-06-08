export default {
    title: 'Projects',
    name: 'projects',
    type: 'document',
    fieldsets: [
		{ name: 'meta', title: 'Meta' },
		{ name: 'main', title: 'Main' },
	],
    fields: [
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
        {
            title: 'Description',
            name: 'desc',
            type: 'textField',
			fieldset: 'main',
        },
        {
            title: 'Content Builder',
            name: 'contentBuilder',
            type: 'array',
			fieldset: 'main',
            of: [
                { type: 'textSection' },
                { type: 'mediaSection' },
                { type: 'videoSection' },
            ],
            description: 'Create the page content',
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
        {
            title: 'Teaser',
            name: 'teaser',
            type: 'projectTeaser',
        },

        // ↓ METADATA
        {
            title: 'SEO',
            name: 'seo',
            type: 'seo',
        }
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
