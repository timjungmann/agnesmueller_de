import React from "react";

export default {
    title: "Text Section",
    name: "textSection",
    type: "object",
    fields: [
        {
            title: 'Extended Gap',
            name: 'extGap',
            type: 'boolean',
            initialValue: false
        },
        {
            title: "Title",
            name: "title",
            type: "string",
        },
        {
            title: "Text",
            name: "text",
            type: "textField"
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
                subtitle: 'Text Section',
                media: <span style={{fontSize: '1.2rem'}}>📝</span>
            }
        }
    }
};
