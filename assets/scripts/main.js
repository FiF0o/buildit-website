//TODO Add preinstall hook to set up ruby and sass gem, "preinstall": ""
import accordion from './semantic-ui/accordion'
/**
 * jQuery is a global which is augmented by semantic-ui library and expects to
 * receive it (the global) as jQuery and not $
 *
 * reassigns global jQuery as a local var $
 * e.g. var $ = jQuery ...
* */
//TODO add rule for global in eslint as it will crash as linting does not
  // expect globals in modules...
var $ = jQuery = window.$ = window.jQuery

window.global = "global"
// **** Beginning code ****
$('.ui.accordion').accordion();