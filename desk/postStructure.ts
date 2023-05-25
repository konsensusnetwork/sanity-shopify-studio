import {ListItemBuilder} from 'sanity/desk'
import defineStructure from '../utils/defineStructure'
import {ComposeIcon} from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Posts')
    .icon(ComposeIcon)
    .schemaType('post')
    .child(S.documentTypeList('post'))
)
