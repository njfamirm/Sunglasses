const esbuild = require('esbuild');

const browserList = [
  'chrome58',
  // 'edge16', // not work!
  'firefox57',
  // 'ie11', // not work!
  // 'ios10', // not work!
  'opera45',
  'safari11',
];

const DEBUG_MODE = process.env.DEBUG_MODE === 'debug' ? true : false;

const esbuildOptionTypescript = {
  entryPoints: ['src/sunglasses-pwa.ts'],
  outfile: 'static/sunglasses-pwa.js',
  bundle: true,
  minify: true,
  sourcemap: DEBUG_MODE,
  target: browserList,
  platform: 'browser',
};

const esbuildOptionCss = {
  entryPoints: ['src/global.css'],
  outfile: 'static/global.css',
  bundle: true,
  minify: true,
  sourcemap: DEBUG_MODE,
  external: ['*.woff2'],
};

esbuild.build(esbuildOptionTypescript);

esbuild.build(esbuildOptionCss);
