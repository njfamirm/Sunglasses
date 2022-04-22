const {build} = require('esbuild')
const {dependencies, devDependencies} = require('./package.json')

build({
  entryPoints: ['src/index.ts'],
  outdir: 'public/js/',
  bundle: true,
  // external: Object.keys(dependencies).concat(Object.keys(devDependencies)),
})
