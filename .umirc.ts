import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'mixinJS',
  base: '/mixin',
  publicPath: '/mixin/',
  exportStatic: {},
  favicon: '/mixin/logo.svg',
  logo: '/mixin/logo.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  menus: {
    '/API': [
      {
        title: 'General',
        children: [
          'api/chunk.md',
        ],
      },
    ],
    '/zh-CN/API': [
      {
        title: '通用',
        children: [
          'api/chunk.md',
        ],
      },
    ],
  },
});
