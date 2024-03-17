import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Docs',
  basePath: "test-docs",
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Example',
      link: '/example',
    },
  ],
})
