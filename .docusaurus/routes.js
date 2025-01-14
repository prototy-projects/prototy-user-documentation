import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/prototy-user-documentation/__docusaurus/debug',
    component: ComponentCreator('/prototy-user-documentation/__docusaurus/debug', '68a'),
    exact: true
  },
  {
    path: '/prototy-user-documentation/__docusaurus/debug/config',
    component: ComponentCreator('/prototy-user-documentation/__docusaurus/debug/config', '880'),
    exact: true
  },
  {
    path: '/prototy-user-documentation/__docusaurus/debug/content',
    component: ComponentCreator('/prototy-user-documentation/__docusaurus/debug/content', '942'),
    exact: true
  },
  {
    path: '/prototy-user-documentation/__docusaurus/debug/globalData',
    component: ComponentCreator('/prototy-user-documentation/__docusaurus/debug/globalData', '76a'),
    exact: true
  },
  {
    path: '/prototy-user-documentation/__docusaurus/debug/metadata',
    component: ComponentCreator('/prototy-user-documentation/__docusaurus/debug/metadata', 'a58'),
    exact: true
  },
  {
    path: '/prototy-user-documentation/__docusaurus/debug/registry',
    component: ComponentCreator('/prototy-user-documentation/__docusaurus/debug/registry', '440'),
    exact: true
  },
  {
    path: '/prototy-user-documentation/__docusaurus/debug/routes',
    component: ComponentCreator('/prototy-user-documentation/__docusaurus/debug/routes', 'c9b'),
    exact: true
  },
  {
    path: '/prototy-user-documentation/blog',
    component: ComponentCreator('/prototy-user-documentation/blog', '070'),
    exact: true
  },
  {
    path: '/prototy-user-documentation/blog/archive',
    component: ComponentCreator('/prototy-user-documentation/blog/archive', '519'),
    exact: true
  },
  {
    path: '/prototy-user-documentation/blog/authors',
    component: ComponentCreator('/prototy-user-documentation/blog/authors', 'b8c'),
    exact: true
  },
  {
    path: '/prototy-user-documentation/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/prototy-user-documentation/blog/authors/all-sebastien-lorber-articles', '33c'),
    exact: true
  },
  {
    path: '/prototy-user-documentation/blog/authors/yangshun',
    component: ComponentCreator('/prototy-user-documentation/blog/authors/yangshun', '76b'),
    exact: true
  },
  {
    path: '/prototy-user-documentation/blog/first-blog-post',
    component: ComponentCreator('/prototy-user-documentation/blog/first-blog-post', '8fe'),
    exact: true
  },
  {
    path: '/prototy-user-documentation/blog/long-blog-post',
    component: ComponentCreator('/prototy-user-documentation/blog/long-blog-post', '773'),
    exact: true
  },
  {
    path: '/prototy-user-documentation/blog/mdx-blog-post',
    component: ComponentCreator('/prototy-user-documentation/blog/mdx-blog-post', 'fa4'),
    exact: true
  },
  {
    path: '/prototy-user-documentation/blog/tags',
    component: ComponentCreator('/prototy-user-documentation/blog/tags', '3e6'),
    exact: true
  },
  {
    path: '/prototy-user-documentation/blog/tags/docusaurus',
    component: ComponentCreator('/prototy-user-documentation/blog/tags/docusaurus', '378'),
    exact: true
  },
  {
    path: '/prototy-user-documentation/blog/tags/facebook',
    component: ComponentCreator('/prototy-user-documentation/blog/tags/facebook', '1f4'),
    exact: true
  },
  {
    path: '/prototy-user-documentation/blog/tags/hello',
    component: ComponentCreator('/prototy-user-documentation/blog/tags/hello', '11a'),
    exact: true
  },
  {
    path: '/prototy-user-documentation/blog/tags/hola',
    component: ComponentCreator('/prototy-user-documentation/blog/tags/hola', 'c5a'),
    exact: true
  },
  {
    path: '/prototy-user-documentation/blog/welcome',
    component: ComponentCreator('/prototy-user-documentation/blog/welcome', 'ae4'),
    exact: true
  },
  {
    path: '/prototy-user-documentation/markdown-page',
    component: ComponentCreator('/prototy-user-documentation/markdown-page', '2b3'),
    exact: true
  },
  {
    path: '/prototy-user-documentation/docs',
    component: ComponentCreator('/prototy-user-documentation/docs', 'f50'),
    routes: [
      {
        path: '/prototy-user-documentation/docs',
        component: ComponentCreator('/prototy-user-documentation/docs', '497'),
        routes: [
          {
            path: '/prototy-user-documentation/docs',
            component: ComponentCreator('/prototy-user-documentation/docs', 'f3f'),
            routes: [
              {
                path: '/prototy-user-documentation/docs/category/tutorial---basics',
                component: ComponentCreator('/prototy-user-documentation/docs/category/tutorial---basics', '616'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prototy-user-documentation/docs/category/tutorial---extras',
                component: ComponentCreator('/prototy-user-documentation/docs/category/tutorial---extras', '642'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prototy-user-documentation/docs/intro',
                component: ComponentCreator('/prototy-user-documentation/docs/intro', 'a8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prototy-user-documentation/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/prototy-user-documentation/docs/tutorial-basics/congratulations', '0a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prototy-user-documentation/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/prototy-user-documentation/docs/tutorial-basics/create-a-blog-post', 'd9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prototy-user-documentation/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/prototy-user-documentation/docs/tutorial-basics/create-a-document', 'f1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prototy-user-documentation/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/prototy-user-documentation/docs/tutorial-basics/create-a-page', 'f08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prototy-user-documentation/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/prototy-user-documentation/docs/tutorial-basics/deploy-your-site', 'd57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prototy-user-documentation/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/prototy-user-documentation/docs/tutorial-basics/markdown-features', '156'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prototy-user-documentation/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/prototy-user-documentation/docs/tutorial-extras/manage-docs-versions', '656'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/prototy-user-documentation/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/prototy-user-documentation/docs/tutorial-extras/translate-your-site', '05f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/prototy-user-documentation/',
    component: ComponentCreator('/prototy-user-documentation/', 'fe5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
