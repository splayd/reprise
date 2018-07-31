/* @flow */
import tempy from 'tempy'

export { remove as removeFile, outputFile } from 'fs-extra'
export const getTemporaryDirectoryName = tempy.directory
