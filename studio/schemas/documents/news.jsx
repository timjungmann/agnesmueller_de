export default {
    title: 'News',
    name: 'news',
    type: 'document',
    fieldsets: [
		{ name: 'meta', title: 'Meta' },
		{ name: 'main', title: 'Main' },
	],
    fields: [
        // META
        {
            title: 'Title',
            name: 'title',
            type: 'string',
			fieldset: 'meta',
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
