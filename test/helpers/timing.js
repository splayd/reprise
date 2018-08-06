/* @flow */
import { promisify } from 'util'

export const sleep = promisify(setTimeout)

export async function waitForCondition(
  predicate: () => boolean,
  timeout: number = 5000
) {
  if (predicate()) {
  } else if (timeout <= 0) {
    throw new Error('Condition never satisfied')
  } else {
    await sleep(100)
    await waitForCondition(predicate)
  }
}
