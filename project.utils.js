const path = require('path')
const os = require('os')
const nativePackageJSON = require('./app/package.json')
const project =
  dir =>
  (...args) =>
    path.resolve(dir, ...args)

const rootDir = project(__dirname)
const appDir = project(rootDir('app'))
const sharedDir = project(rootDir('shared'))
const nativeDir = project(rootDir('native'))
const webDir = project(rootDir('web'))

const appNodeModules = project(appDir('node_modules'))
const rootNodeModules = project(rootDir('node_modules'))
const nativeNodeModules = project(nativeDir('node_modules'))
const webNodeModules = project(webDir('node_modules'))

const deps = (deps, dir) => {
  return Object.keys(deps).reduce((acc, package) => {
    return {
      ...acc,
      [package]: dir(package),
    }
  }, {})
}

const pick = dir => arr => {
  return arr.reduce((acc, package) => {
    return {
      ...acc,
      [package]: dir(package),
    }
  }, {})
}

exports.numCPUs = os.cpus().length

exports.root = {
  dir: rootDir,
  nodeModules: rootNodeModules,
  pick: pick(rootNodeModules),
}

exports.native = {
  dir: nativeDir,
  nodeModules: nativeNodeModules,
  pick: pick(nativeNodeModules),
  dependencies: deps(nativePackageJSON.dependencies, nativeNodeModules),
}

exports.web = {
  dir: webDir,
  nodeModules: webNodeModules,
}

exports.app = {
  dir: appDir,
  nodeModules: appNodeModules,
}

exports.shared = {
  dir: sharedDir,
}
