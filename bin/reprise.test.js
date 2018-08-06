/* @flow */
import ava from 'ava'
import * as path from 'path'
import { outputFile, exec, spawn, waitForCondition } from 'reprise/test/helpers'
import { withDirectory } from 'reprise/test/fixtures'

const test = withDirectory(ava)

test('re-importing a given file when its dependencies change', async t => {
  const { directory } = t.context

  await exec(`yarn build ${path.join(directory, 'reprise')}`)
  await exec('yarn add ./reprise', { cwd: directory })
  await outputFile(path.join(directory, 'entry.js'), 'console.log("Start")')

  const proc = spawn('yarn', ['reprise', 'entry.js'], { cwd: directory })

  let output = ''
  proc.stdout.setEncoding('utf8')
  proc.stdout.on('data', data => {
    output += data
  })

  await waitForCondition(() => output.includes('Start'))

  await outputFile(path.join(directory, 'entry.js'), 'console.log("Output 1")')
  await waitForCondition(() => output.includes('Output 1'))

  await outputFile(path.join(directory, 'entry.js'), 'console.log("Output 2")')
  await waitForCondition(() => output.includes('Output 2'))

  proc.kill()
  t.pass()
})
