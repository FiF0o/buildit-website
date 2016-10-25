//TODO Add preinstall hook to set up ruby and sass gem, "preinstall": ""
//TODO instead of hard watch changes i watchify and pipe it in the workflow

var write = require('./write');
window.addEventListener('DOMContentLoaded', write);
console.log('hello world')

import kikou from './kikou'
console.log(kikou)

import { api as ap} from './semantic-ui/api'
console.log('before import')
console.log(ap)
console.log('after import')
