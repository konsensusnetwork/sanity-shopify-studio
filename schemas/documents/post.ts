import {ComposeIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: ComposeIcon,
  groups: [
    {
      default: true,
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    // Slug
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    // Show hero
    defineField({
      name: 'showHero',
      title: 'Show hero',
      type: 'boolean',
      description: 'If disabled, page title will be displayed instead',
      initialValue: false,
      group: 'editorial',
    }),
    // Hero
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero.page',
      hidden: ({document}) => !document?.showHero,
      group: 'editorial',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
      group: 'editorial',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      group: 'editorial',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      group: 'editorial',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: Rule => Rule.max(200).warning('The description shouldn\'t be longer than 200 characters'),
      group: 'editorial',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'body',
      group: 'editorial',
    }),
    // SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo.page',
      group: 'seo',
      validation: (Rule) => Rule.required(),
    })
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'seo.image',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
})
