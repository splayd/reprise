/* @flow */
import * as path from 'path'
import invalidate from 'invalidate-module'

export default function(modulePath: string) {
  invalidate(path.resolve(modulePath))
}
