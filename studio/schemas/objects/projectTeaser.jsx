export default {
    title: "Project Teaser",
    name: "projectTeaser",
    type: "object",
    fields: [
        {
            title: "Teaser Title",
            name: "title",
            type: "textField",
        },
        {
            title: 'Teaser Image',
            name: 'image',
            type: 'mediaAsset'
        },
        {
            title: 'Teaser Video (optional)',
            name: 'video',
            type: 'file',
            description: 'Be aware of file size and keep it short, width 640px',
            preview: {
                select: {
                    title: 'Test',
                },
            }
        },
    ],
};
