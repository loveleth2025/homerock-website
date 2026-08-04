export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Home Buying', value: 'buying' },
          { title: 'Home Selling', value: 'selling' },
          { title: 'Investing', value: 'investing' },
          { title: 'Realtor Growth', value: 'realtor-growth' },
          { title: 'Market News', value: 'market-news' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'heading', type: 'string', title: 'Heading (optional)' },
            {
              name: 'paragraphs',
              type: 'array',
              of: [{ type: 'string' }],
              title: 'Paragraphs',
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'readTime',
      title: 'Read Time (e.g. "7 min")',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}