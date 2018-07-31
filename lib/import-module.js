/* @flow */
import babelRegister from '@babel/register'
import babelPresetDiff from 'babel-preset-diff'
import interopRequire from 'interop-require'

const defaultBabelConfig = { presets: [babelPresetDiff] }

export default function(modulePath: string) {
  babelRegister(defaultBabelConfig)
  return interopRequire(modulePath)
}
