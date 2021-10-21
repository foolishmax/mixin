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
  navs: {
    'zh-CN': [
      null,
      { title: 'GitHub', path: 'https://github.com/foolishmax/mixin' },
    ],
    'en-US': [
      null,
      { title: 'GitHub', path: 'https://github.com/foolishmax/mixin' },
    ],
  },
  menus: {
    '/api': [
      {
        title: 'Array',
        children: [
          'api/chunk/chunk.md',
          'api/slice/slice.md',
        ],
      },
      {
        title: 'Lang',
        children: [
          'api/isSymbol/isSymbol.md',
          'api/isObject/isObject.md',
          'api/toFinite/toFinite.md',
          'api/toInteger/toInteger.md',
          'api/toNumber/toNumber.md',
        ],
      },
    ],
    '/zh-CN/api': [
      {
        title: '数组',
        children: [
          'api/chunk/chunk.zh-CN.md',
          'api/slice/slice.zh-CN.md',
        ],
      },
      {
        title: '语言',
        children: [
          'api/isSymbol/isSymbol.zh-CN.md',
          'api/isObject/isObject.zh-CN.md',
          'api/toFinite/toFinite.zh-CN.md',
          'api/toInteger/toInteger.zh-CN.md',
          'api/toNumber/toNumber.zh-CN.md',
        ],
      },
    ],
  },
});
