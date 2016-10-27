//TODO Add preinstall hook to set up ruby and sass gem, "preinstall": ""
import accordion from './semantic-ui/accordion'
// var write = require('./write');
// window.addEventListener('DOMContentLoaded', write);

/**
 * jQuery is a global which semantic-ui expects to receive as jQuery (the
 * global)
 * reassigns global jQuery as a local var $
* */
//TODO add rule for global in eslint as it will crash as linting does not
  // expect globals in modules...

var $ = jQuery

// **** Beginning code ****
$('.ui.accordion').accordion();