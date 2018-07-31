#!/usr/bin/env node
/* @flow */
import * as path from 'path'
import reprise from 'reprise'

const entryPoint = path.resolve(process.argv[2])
reprise(entryPoint)
