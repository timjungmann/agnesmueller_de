export default {
    title: 'Texts',
    name: 'texts',
    type: 'document',
    fieldsets: [
		{ name: 'meta', title: 'Meta' },
		{ name: 'main', title: 'Main' },
	],
    fields: [
        // META
        {
            title: 'Text Title',
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
			fieldset: 'main',
        },
        {
            title: 'Subline',
            name: 'subline',
            type: 'string',
			fieldset: 'main',
        },

        // MAIN
        {
            title: 'Text',
            name: 'text',
            type: 'textField',
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
