//TODO Add preinstall hook to set up ruby and sass gem, "preinstall": ""
//import accordion from './semantic-ui/accordion'
import visibility from './semantic-ui/visibility'
console.log(visibility)
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
// debug test init
// $('.ui.accordion').accordion();

$('.masthead')
  .visibility({
    once: false,
    onBottomPassed: function() {
      $('.fixed.menu').transition('fade in');
    },
    onBottomPassedReverse: function() {
      $('.fixed.menu').transition('fade out');
    }
  })
;
$('.masthead').visibility('refresh')

// create sidebar and attach to menu open
$('.ui.sidebar')
  .sidebar('attach events', '.toc.item')
;

var arImg = ['images/avatar/stevie.jpg', 'images/avatar/toto.jpg', 'images/avatar/stevie3.jpg']

var getImg = function(){
  // var $elImg = $(".ui.divided.demo.items")
  // console.log('$elImg: ',$elImg)

  for (var i = 0; i < arImg.length; i++ ) {
    console.log('array images', arImg[i]);
    // adds a custom data-attribute to the markup
    var $yo = $('img.transition.visible').attr('data-test', arImg[i])
    console.log('yo: ', $yo)
    // $elImg.append($yo)

  }
}
window.getImg = getImg
// adds image - should be replaced with appropriate image
$('img.transition.visible').attr('data-src', 'images/avatar/stevie.jpg')
                           .visibility({
                             once: false,
                             observeChanges: true,
                             onTopVisible :function(calcs) {
                               window.getImg()
                               window.showContent()
                             }
                           })
// $('.demo.items .image img')
//   .visibility({
//     once: false,
//     // observeChanges: true,
//     // onTopPassed: function() {
//     //   var q = $('.item.image')
//     //   console.log(q)
//     //   //data-src="images/avatar/stevie.jpg
//     type       : 'image',
//     transition : 'fade in',
//     duration   : 3000
//   });
var showContent = function () {
  setTimeout(function() {
    $('.demo.items .image img')
      .visibility({
        once: false,
        type       : 'image',
        transition : 'fade in',
        duration   : 3000
      });
    // needed by semantic-ui when using visibility() otherwise throws an error
    $('.demo.items .image img').visibility('refresh')
  }, 1000)
}
window.showContent = showContent
console.log('wtf')
