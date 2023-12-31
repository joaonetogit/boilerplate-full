/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.{md,mdx}',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    image: { type: 'string', required: true },
  },
}));

export default makeSource({
  contentDirPath: './posts',
  documentTypes: [Post],
  /* onExtraFieldData: 'ignore', 
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  }, */
});
