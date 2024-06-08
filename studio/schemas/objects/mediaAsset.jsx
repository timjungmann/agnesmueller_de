import React from 'react';

export default {
    title: "Media Asset",
    name: "mediaAsset",
    type: "image",
    fields: [
        {
            title: 'Alternative Text',
            name: 'altText',
            type: 'string'
        },
    ],
    preview: {
        select: {
            title: 'caption',
            subtitle: 'altText',
            filename: 'asset.originalFilename',
            imageUrl: 'asset.url',
        },
        prepare(selection) {
            const {title, filename, subtitle, imageUrl} = selection
            return {
                title: `${title ? title : filename}`,
                subtitle: `${subtitle ? 'Alternative Text: ' + subtitle : 'Please set alt text!'}`,
                media: <img src={imageUrl} alt='' />,
            }
        },
    }
};
