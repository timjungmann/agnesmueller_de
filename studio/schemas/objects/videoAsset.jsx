import React from 'react';

export default {
    title: "Video Asset",
    name: "videoAsset",
    type: "object",
    description: 'If a video is added, imagesd will not be shown',
    fields: [
        {
            title: 'Preview Video',
            name: 'previewVideo',
            type: 'file',
            description: 'Upload a video in 720p',
        },
        {
            title: 'Video Ratio',
            name: 'ratio',
            type: 'number',
            description: 'Add the aspect ratio as a number (16:9 → 9/16 = 0,5625)',
        },
        {
            title: 'Vimeo ID',
            name: 'vimeoID',
            type: 'number',
        },
    ]
};
