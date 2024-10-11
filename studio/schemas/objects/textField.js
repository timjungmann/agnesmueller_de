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
                        decorators: []
                    },
                    styles: [
                        {title: 'Normal', value: 'normal'},
                        {title: 'H3', value: 'h3'}
                    ],
                    lists: [],
                }
            ],
        }
    ],
};
