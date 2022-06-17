const project = require('./project.utils')
const path = require('path')
const fs = require('fs')

const aliases = fs
  .readdirSync(project.app.dir('src'), { withFileTypes: true })
  .filter(node => node.isDirectory())
  .reduce((acc, node) => {
    return {
      ...acc,
      [`~/${node.name}`]: `./src/${node.name}`,
    }
  }, {})

const isTargetWeb = caller => {
  if (!caller) {
    return undefined
  }

  switch (caller.name) {
    case 'babel-loader':
      return 'web'
    case 'metro':
      return 'native'
  }
}

const makePlugins = ({ env, platform }) => {
  const isDevelopment = env === 'development'
  const isTest = env === 'test'

  return [
    [
      'inline-dotenv',
      {
        path: project.root.dir(`.env.${env}`),
        systemVar: 'all',
      },
    ],
    !isTest && [
      'module-resolver',
      {
        alias: {
          ...aliases,
          react: project.native.nodeModules('react'),
          'react-native': project.native.nodeModules('react-native'),
        },
      },
    ],
    [require('./plugins/babel/transform-indent')],
    ['git-info', { hashLength: 7 }],
    ['transform-imports', {}],
    ['@babel/plugin-proposal-export-namespace-from'],
    !isDevelopment && ['transform-remove-console', { exclude: ['error', 'warn'] }],
    require.resolve('./native/node_modules/react-native-reanimated/plugin'),
    ['import-graphql'],
  ].filter(Boolean)
}

module.exports = api => {
  const env = api.env()
  const platform = api.caller(isTargetWeb)
  const plugins = makePlugins({ env, platform })

  api.cache(true)

  console.log(`🔧 Babel: ${env}, platform: ${platform}`)

  return {
    presets: [require.resolve('./native/node_modules/metro-react-native-babel-preset')],
    plugins,
  }
}
