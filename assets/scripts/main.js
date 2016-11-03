//TODO Add preinstall hook to set up ruby and sass gem, "preinstall": ""
//import accordion from './semantic-ui/accordion'
import visibility from './semantic-ui/visibility'
import sticky from './semantic-ui/sticky'
import sidebar from './semantic-ui/sidebar'

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


// $('.masthead')
//   .visibility({
//     once: false,
//     onBottomPassed: function() {
//       $('.fixed.menu').transition('fade in')
//     },
//     onBottomPassedReverse: function() {
//       $('.fixed.menu').transition('fade out')
//     }
//   });
// $('.masthead').visibility('refresh')


// // attaches toggle event of sidebar to .toc.item to menu open
// $('.ui.sidebar')
//   // .sidebar('attach events', '.toc.item')
//   .sidebar({
//     // context in which the sidebar will appear
//     context: $('.pusher'),
//   })


// init sidebar behavior
$('.toc.item').click(function() {
  $('.ui.sidebar')
    .sidebar('toggle',
    );
})

// init sticky content
$('.ui.sticky')
  .sticky({
    context: '#sticky-content'
  })

// init images lazy-loading
$('img.transition.visible')
 .visibility({
   once: false,
   type: 'images',
   observeChanges: true,
   transition: 'fade in',
   duration: ' 1000',
   onTopVisible :function(calcs) {
     // lazy-loading - adds data-src attribute to the img tag
     getImg()
     showContent()
   }
 })


var showContent = function () {
  setTimeout(function() {
    $('.demo.items .image img')
      .visibility({
        once: false,
        type       : 'image',
        transition : 'fade in',
        duration   : 1000
      });
    // needed by semantic-ui when using visibility() otherwise throws an error
    $('.demo.items .image img').visibility('refresh')
  }, 500)
}


var arImg = ['images/avatar/stevie.jpg', 'images/avatar/nan.jpg', 'images/avatar/tom.jpg']
var getImg = function(){
  // adds a custom data-attribute to the markups with each()
  return $('img.transition.visible').each( function( index, value ) {
    $(value).attr('data-test', arImg[index])
  })

}
