import React from 'react';

export default {
    title: "Video Section",
    name: "videoSection",
    type: "object",
    initialValue: {
        options: 'default'
    },
    fields: [
        {
            title: 'Extended Gap',
            name: 'extGap',
            type: 'boolean',
            initialValue: false
        },
        {
            title: 'Video Asset',
            name: 'videoAsset',
            type: 'file',
            description: 'Be aware of file size and keep it short, width 1600px',
        }
    ],
    preview: {
        select: {
            title: 'videoAsset.asset.originalFilename',
        },
        prepare(selection) {
            const {title} = selection
            return {
                title,
                subtitle: 'Video Section',
                media: <span style={{fontSize: '1.2rem'}}>📹</span>
            }
        }
    }
};
