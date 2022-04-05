import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Better Learning',
  mode: 'site',
  webpack5: {},
  mfsu: {},
  esbuild: {},
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/ahwgs/react-gantt',
    },
  ],
});
