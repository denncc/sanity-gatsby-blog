export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff52823c5ec3f3577b8701e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3bq4a975',
                  apiId: '5fc1a7b4-6432-4472-b63d-a81011a0e654'
                },
                {
                  buildHookId: '5ff5282362ce802d51be6355',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7h6df4js',
                  apiId: '94a6da6a-cecc-4111-b643-556b267bbb8b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/denncc/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7h6df4js.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
