import { defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Categories',
  type: 'document',
  fields: [
    { name: 'title', title: 'Category Name', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
  ],
})
