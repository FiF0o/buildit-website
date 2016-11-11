//TODO Add preinstall hook to set up ruby and sass gem, "preinstall": ""
import visibility from './semantic-ui/visibility'
import sticky from './semantic-ui/sticky'
import sidebar from './semantic-ui/sidebar'
import tab from './semantic-ui/tab'


var GoogleMapsLoader = require('google-maps');
GoogleMapsLoader.KEY = 'AIzaSyA6sewibZttvy8MGL3DulCWV361VBD-zpg'

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




/****************************
 *   MAPS
 *
 ****************************/

const position1 = {lat: 51.5285097, lng: -0.0923402}
var position2 = {lat: 51.5182121,  lng: -0.0917254};
var position3 = {lat: 40.7039934,  lng: -74.0133265};
var position4 = {lat: 39.7525339, lng: -105.0053551};
var position5 = {lat:53.3305221, lng: -6.2281275};



GoogleMapsLoader.load(function(google) {

  const loadMap1 = function() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: position1
    });
    var marker = new google.maps.Marker({
      position: position1,
      map: map
    });
  }
  google.maps.event.addDomListener(window, 'load', loadMap1);


  const loadMap2 = function() {
    var map2 = new google.maps.Map(document.getElementById('map2'), {
      zoom: 4,
      center: position2
    });
    var marker = new google.maps.Marker({
      position: position2,
      map: map2
    });
  }
  google.maps.event.addDomListener(window, 'load', loadMap2);

  const loadMap3 = function() {
    var map3 = new google.maps.Map(document.getElementById('map3'), {
      zoom: 4,
      center: position3
    });
    var marker = new google.maps.Marker({
      position: position3,
      map: map3
    });
  }
  google.maps.event.addDomListener(window, 'load', loadMap3);

  const loadMap4 = function() {
    var map4 = new google.maps.Map(document.getElementById('map4'), {
      zoom: 4,
      center: position4
    });
    var marker = new google.maps.Marker({
      position: position4,
      map: map4
    });
  }
  google.maps.event.addDomListener(window, 'load', loadMap4);

  const loadMap5 = function() {
    var map5 = new google.maps.Map(document.getElementById('map5'), {
      zoom: 4,
      center: position5
    });
    var marker = new google.maps.Marker({
      position: position5,
      map: map5
    });
  }
  google.maps.event.addDomListener(window, 'load', loadMap5);

});
