/* @flow */
import ava from 'ava'
import * as path from 'path'
import { outputFile, exec, spawn, waitForCondition } from 'reprise/test/helpers'
import { withDirectory } from 'reprise/test/fixtures'

const test = withDirectory(ava)

test('re-importing a given file when its dependencies change', async t => {
  const { directory } = t.context

  console.log('1')
  await exec(`yarn build ${path.join(directory, 'reprise')}`)
  console.log('2')
  await exec('yarn add ./reprise', { cwd: directory })
  console.log('3')
  await outputFile(path.join(directory, 'entry.js'), 'console.log("Start")')

  console.log('4')
  const proc = spawn('yarn', ['reprise', 'entry.js'], { cwd: directory })

  console.log('5')
  let output = ''
  console.log('6')
  proc.stdout.setEncoding('utf8')
  console.log('7')
  proc.stdout.on('data', data => {
    console.log('7-8', data)
    output += data
  })
  console.log('8')

  await waitForCondition(() => output.includes('Start'))
  console.log('9')

  await outputFile(path.join(directory, 'entry.js'), 'console.log("Output 1")')
  console.log('10')
  await waitForCondition(() => output.includes('Output 1'))

  console.log('11')
  await outputFile(path.join(directory, 'entry.js'), 'console.log("Output 2")')
  console.log('12')
  await waitForCondition(() => output.includes('Output 2'))

  console.log('13')
  proc.kill()
  console.log('14')
  t.pass()
})
