export default {
    title: 'Imprint',
    name: 'imprint',
    type: 'document',
    fieldsets: [],
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Credits',
            name: 'credits',
            type: 'textField',
        },
        {
            title: 'Body',
            name: 'body',
            type: 'textField',
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
};
