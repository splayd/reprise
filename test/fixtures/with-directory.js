/* eslint-disable flowtype/no-weak-types, ava/use-test */
/* @flow */
import type { TestInterface } from 'ava'
import { getTemporaryDirectoryName, removeFile } from 'reprise/test/helpers'

export default function<Context>(
  test: TestInterface<Context>
): TestInterface<Context & { directory: string }> {
  const newTest: TestInterface<Context & { directory: string }> = (test: any)

  newTest.beforeEach(t => {
    const directory = getTemporaryDirectoryName()
    Object.assign(t.context, { directory })
  })

  newTest.afterEach.always(async t => {
    const { directory } = t.context
    await removeFile(directory)
  })

  return newTest
}
