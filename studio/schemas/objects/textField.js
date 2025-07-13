export default {
    title: "Text Field",
    name: "textField",
    type: "object",
    fields: [
        {
            title: "Text",
            name: "text",
            type: "array",
            of: [
                { type: 'block',
                    marks: {
                        decorators: [
                            { title: 'Bold', value: 'strong' }
                        ]
                    },
                    styles: [
                        {title: 'Normal', value: 'normal'},
                        {title: 'Headline 1', value: 'h2'},
                        {title: 'Headline 2', value: 'h3'},
                    ],
                    lists: [],
                }
            ],
        }
    ],
};
