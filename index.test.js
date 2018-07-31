/* @flow */
import test from 'ava'
import * as path from 'path'
import { outputFile, removeFile, sleep } from 'reprise/test/helpers'
import reprise from 'reprise'

test('re-importing a given file when its dependencies change', async t => {
  const entryPoint = path.resolve('tmp.js')
  await outputFile(entryPoint, 'export default 1')

  const box = reprise(entryPoint)
  await sleep(500)
  t.is(box.value, 1)

  await outputFile(entryPoint, 'export default 2')
  await sleep(500)
  t.is(box.value, 2)

  await removeFile(entryPoint)
})
