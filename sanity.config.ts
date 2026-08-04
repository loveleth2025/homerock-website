import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import schemas from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Natalie Pilkinton Real Estate',
  projectId: '7976atf0',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemas },
})