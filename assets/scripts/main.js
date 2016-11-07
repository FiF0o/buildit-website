//TODO Add preinstall hook to set up ruby and sass gem, "preinstall": ""
import visibility from './semantic-ui/visibility'
import sticky from './semantic-ui/sticky'
import sidebar from './semantic-ui/sidebar'
import tab from './semantic-ui/tab'

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

// init sidebar behavior
$('.toc.item').click(function() {
  $('.ui.sidebar')
    .sidebar('toggle')
}).transition('pulse')

// $('.masthead').height(560)


// init sticky content
$('.sticky')
  .sticky({
    // specifies the context where elements should stop sticking
    // context: '#sticky-content',
    //TODO change context to footer, remove .ui.contanier and add wrap it in
    //TODO Change .sticky to row and Add styling to nav
    context: '#footer',

    onStick: function() {
      console.log('onStick fired')
      $('.sticky').addClass('stuck')
      $('.sticky').find('.pointing.menu').removeClass('inverted')
                  // .transition('fade in')
      // $('.masthead.segment').addClass('enlarged')
      // $('.masthead.segment').height(window.innerHeight - 300)


    },
    onUnstick: function() {
      console.log('onUnstick fired!')
      $('.sticky').removeClass('stuck')
      $('.sticky').find('.pointing.menu').addClass('inverted')
      // $('.masthead.segment').removeClass('enlarged')
      // $('.masthead.segment').height(window.innerHeight - 100)

    },
    onTop: function(){
      console.log('on top')
    },
    onBottom: function(){
      console.log('on bottom')
    },
  })

// init tabs
$('.tabular.menu .item')
  .tab()


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
     getImg();
     showContent();
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
