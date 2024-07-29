import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/404',
        permanent: false,
      },
      {
        source: '/articles/:title*',
        destination: '/404',
        permanent: false,
      },
      {
        source: '/projects',
        destination: '/404',
        permanent: false,
      },
      {
        source: '/feed.xml',
        destination: '/404',
        permanent: false,
      },
    ]
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
