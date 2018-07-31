/* @flow */
import { onFileChange, importModule, invalidateModule } from 'reprise/lib'

export default function(entryPoint: string) {
  const box = { value: null }

  onFileChange('**/*.js', file => {
    invalidateModule(file)
    box.value = importModule(entryPoint)
  })
  onFileChange('package.json', () => {
    invalidateModule(entryPoint)
    box.value = importModule(entryPoint)
  })

  box.value = importModule(entryPoint)

  return box
}
