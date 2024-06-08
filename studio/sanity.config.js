import {defineConfig} from 'sanity';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemas';
import {media} from 'sanity-plugin-media';
import { structureTool } from 'sanity/structure';

export default defineConfig({
    name: 'default',
    title: 'agnesmueller-com',

    projectId: '9524kj6l',
    dataset: 'production',

    plugins: [structureTool(), visionTool(), media()],

    schema: {
        types: schemaTypes,
    },
})
