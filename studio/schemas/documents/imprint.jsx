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
            title: 'Bpdy',
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
