import {ListItemBuilder} from 'sanity/desk'
import defineStructure from '../utils/defineStructure'
import {UserIcon} from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Authors')
    .icon(UserIcon)
    .schemaType('author')
    .child(S.documentTypeList('author'))
)
