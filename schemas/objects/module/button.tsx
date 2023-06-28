import {defineField} from 'sanity'
import {BlockElementIcon} from '@sanity/icons'

export default defineField({
    name: 'module.button',
    title: 'Button',
    type: 'object',
    icon: BlockElementIcon,
    fields: [
        defineField({
            name: 'text',
            title: 'Text',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'url',
            validation: Rule => Rule.required()
        }),
    ]
}
)