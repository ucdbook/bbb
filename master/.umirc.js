export default {
  proxy: {
    '/componentApi': {
      target: 'http://127.0.0.1:3003',
      changeOrigin: true,
    }
  },
  plugins: [
    [
      '@umijs/plugin-qiankun',
      {
        master: {
          defer: true,
          jsSandbox: true,
          prefetch: true,
        }
      },
    ],
    [
      'umi-plugin-react',
      {
        title: 'qiankun-demo',
        antd: true,
        dva: {
          immer: true,
          hmr: true,
        },
        dynamicImport: true,
        routes: {
          exclude: [/models\//, /services\//, /model\.(t|j)sx?$/, /service\.(t|j)sx?$/],
        },
      },
    ],
    `${__dirname}/addHTMLScript`,
  ],
};
