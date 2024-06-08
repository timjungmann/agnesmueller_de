import React from 'react';

export default {
    title: "Media Section",
    name: "mediaSection",
    type: "object",
    initialValue: {
        options: 'default'
    },
    fields: [
        {
            title: 'Layout',
            name: 'layout',
            type: 'string',
            options: {
                list: [
                    { title: 'Gallery', value: 'gallery' },
                    { title: 'Single', value: 'single' },
                    { title: 'Double', value: 'double' },
                ],
            },
        },
        {
            title: 'Extended Gap',
            name: 'extGap',
            type: 'boolean',
            initialValue: false
        },
        {
            title: 'Media Assets',
            name: 'mediaAssets',
            type: 'array',
            of: [
                { type: 'mediaAsset' },
            ],
        },
    ],
    preview: {
        select: {
            title: 'title',
            option: 'layout',
            media: 'mediaAssets[0].asset',
        },
        prepare(selection) {
            const {option, media} = selection
            return {
                title: `${option ? 'Layout: ' + option : ''}`,
                subtitle: 'Media Group',
                media: media,
            }
        },
    }
};
