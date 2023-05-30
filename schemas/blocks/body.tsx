import {defineField} from 'sanity'
import {LinkIcon, EarthGlobeIcon} from '@sanity/icons'

export default defineField({
  name: 'body',
  title: 'Body',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {
            title: 'Italic',
            value: 'em',
          },
          {
            title: 'Strong',
            value: 'strong',
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'Internal Link',
            name: 'internalLink',
            type: 'object',
            icon: LinkIcon,
            fields: [
              {
                title: 'Reference',
                name: 'reference',
                type: 'reference',
                to: [
                  {type: 'page'},
                  {type: 'product'},
                  {type: 'collection'},
                  {type: 'post'},
                ]
              },
            ],
          },
          {
            title: 'External link',
            name: 'externalLink',
            type: 'object',
            icon: EarthGlobeIcon,
            fields: [
              {
                title: 'External Link',
                name: 'href',
                type: 'url',
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                description: 'Read https://css-tricks.com/use-target_blank/',
                type: 'boolean'
              }
            ]
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'image',
      options: {hotspot: true},
    },
    /* 
    {
      type: 'module.image',
    }
    {
      type: 'module.accordion',
    },
    {
      type: 'module.callout',
    },
    {
      type: 'module.grid',
    },
    {
      type: 'module.images',
    },
    {
      type: 'module.instagram',
    },
    {
      type: 'module.products',
    }, 
    */
  ],
})
