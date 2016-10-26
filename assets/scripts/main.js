//TODO Add preinstall hook to set up ruby and sass gem, "preinstall": ""
import kikou from './kikou'
import $ from 'jquery'
import accordion from './semantic-ui/accordion'



// var write = require('./write');
// window.addEventListener('DOMContentLoaded', write);

console.log(kikou)

// window.$ = window.jQuery = jQuery
// global.jQuery = require('jquery');
console.log('$: ',$)
console.log('accordion: ',accordion)
// console.log(accordion)

$('.ui.accordion')
  .accordion()
;