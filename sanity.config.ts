import {defineConfig, isDev} from 'sanity'

import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {structure} from './desk'

import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {imageHotspotArrayPlugin} from 'sanity-plugin-hotspot-array'
import {media, mediaAssetSource} from 'sanity-plugin-media'
import {customDocumentActions} from './plugins/customDocumentActions'
import { unsplashImageAsset, unsplashAssetSource } from 'sanity-plugin-asset-source-unsplash'

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  name: 'konsensus-network',
  title: 'Konsensus Network',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'pzu39djh',
  dataset: process.env.SANITY_STUDIO_PROJECT_DATASET || 'production',

  plugins: [
    deskTool({structure}),
    colorInput(),
    imageHotspotArrayPlugin(),
    customDocumentActions(),
    media(),
    unsplashImageAsset(),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },

  form: {
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
      },
    },
    image: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource === mediaAssetSource || assetSource === unsplashAssetSource)
      },
    },
  },
})
