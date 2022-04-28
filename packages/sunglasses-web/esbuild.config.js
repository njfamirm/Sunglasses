const esbuild = require('esbuild');

// const browserList = ['chrome58', 'firefox57', 'safari11', 'edge16'];

const DEBUG_MODE = (process.env.DEBUG_MODE === 'true') ? true : false;

const esbuildOptionTypescript = {
  entryPoints: ['src/sunglasses-pwa.ts'],
  outfile: 'static/sunglasses-pwa.js',
  bundle: true,
  minify: true,
  sourcemap: DEBUG_MODE,
  // target: browserList,
};

const esbuildOptionCss = {
  entryPoints: ['src/global.css'],
  outfile: 'static/global.css',
  bundle: true,
  minify: true,
  sourcemap: DEBUG_MODE,
  external: ['*.woff2']
};

esbuild
    .build(esbuildOptionTypescript)
    .then((msg) => {
      console.log(`typescript: ${JSON.stringify(msg, null, 4)}`);
    })
    .catch((err) => {
      console.log(`typescript error:' ${JSON.stringify(err, null, 4)}`);
    });

esbuild
    .build(esbuildOptionCss)
    .then((msg) => {
      console.log(`css: ${JSON.stringify(msg, null, 4)}`);
    })
    .catch((err) => {
      console.log(`css error:' ${JSON.stringify(err, null, 4)}`);
    });
