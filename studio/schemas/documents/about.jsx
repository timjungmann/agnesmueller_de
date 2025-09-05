export default {
    title: 'About',
    name: 'about',
    type: 'document',
    fieldsets: [],
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
            title: 'CV',
            name: 'cv',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'cvGroup',
                    title: 'CV Group',
                    fields: [
                        {
                            name: 'groupTitle',
                            title: 'Group Title',
                            type: 'string'
                        },
                        {
                            name: 'entries',
                            title: 'Entries',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    name: 'entry',
                                    title: 'Entry',
                                    fields: [
                                        {
                                            name: 'year',
                                            title: 'Year',
                                            type: 'string' // use 'string' to accommodate formats like "2014/15" or ranges like "2018–2020"
                                        },
                                        {
                                            name: 'details',
                                            title: 'Details',
                                            type: 'array',
                                            of: [{ type: 'string' }]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
};
