module.exports = {
  stripPrefix: 'dist/',
  navigateFallback: 'index.html',
  staticFileGlobs: [
    'dist/index.html',
    'dist/manifest.json',
    'dist/bundle.js',
    'dist/icons/*',
  ],
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/dev\.medikaboo\.com\/api/,
      handler: 'networkFirst',
    },
  ],
};
