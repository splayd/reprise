/* @flow */
import { promisify } from 'util'

export const sleep = promisify(setTimeout)

export async function waitForCondition(predicate: () => boolean) {
  if (!predicate()) {
    await sleep(100)
    await waitForCondition(predicate)
  }
}
