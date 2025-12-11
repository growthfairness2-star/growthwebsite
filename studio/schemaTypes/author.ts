import { defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Authors',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'avatar', title: 'Avatar', type: 'image' },
  ],
})
