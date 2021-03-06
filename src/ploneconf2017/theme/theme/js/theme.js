require([
  'jquery',
  'resource-plone-app-jquerytools-js'
], function($){

  var cycle = function(){
    $('h1').animate({
      left: '250px',
      opacity: '0.5',
      'font-size': '30px'
    }, function(){
      $('h1').animate({
        left: '0',
        opacity: '1',
        'font-size': '20px'
      }, function(){
        setTimeout(function(){
          cycle();
        }, 2000);
      });
    });
  };

  var smooth = function () {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - $(".navbar").height()
          }, 1000);
          return false;
        }
      }
    });
  };

  var prepareImagePreviews = function () {

        // https://pypi.python.org/pypi/plone.app.jquerytools/1.4#examples
        $('.image-preview')
        .prepOverlay({
            subtype: 'image',
            urlmatch: 'thumb',
            urlreplace: 'large'
            });
        }

  $(document).ready(function(){
    smooth();
    prepareImagePreviews();
  });
});
