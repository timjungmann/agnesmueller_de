export default {
    title: 'About',
    name: 'about',
    type: 'document',
    fieldsets: [
	],
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Artist Statement',
            name: 'artistStatement',
            type: 'textField',
        },
        {
            title: 'Contact',
            name: 'contact',
            type: 'textField',
        },
        {
            title: 'News',
            name: 'news',
            type: 'textField',
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
};
