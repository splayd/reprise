/* @flow */
import chokidar from 'chokidar'

export default function(
  glob: string,
  callback: string => void | Promise<void>
) {
  const watcher = chokidar.watch(glob, {
    ignored: ['dist', 'node_modules'],
    ignoreInitial: true
  })

  watcher.on('all', (event, file) => {
    callback(file)
  })
}
