/* Fullscreen Menu */
function openNav() {
  document.getElementById("fullscreenNav").style.height = "100%";
}
function closeNav() {
  document.getElementById("fullscreenNav").style.height = "0%";
}

$(function(){

  var floorsSVG = $('.floors-svg');
  var floorsHover = $('#floor-hover');

  floorsSVG.on('mouseenter', '.floor-arrow', function(e){
    var elId = $(this).data('id');
    floorsHover.children('polyline').each(function(i){
      if(this.id === elId) {
        this.classList.add('is-hovered');
      }
    });
  });

  floorsSVG.on('mouseleave', '.floor-arrow', function(e){
    floorsHover.children('polyline').each(function(i){
      this.classList.remove('is-hovered');
    });
  });

  floorsSVG.on('click', '.floor-arrow', function(e){
    var elId = $(this).data('floor');

    $.magnificPopup.open({
      items: {
        src: 'images/floors/' + elId + '.png'
      },
      type: 'image'
    });
  });

  $('#progress_gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
      enabled:true,
      navigateByImgClick: true,
      tPrev: 'Попередня (ліва стрілка)', // title for left button
      tNext: 'Наступна (права стрілка)', // title for right button
      tCounter: '<span class="mfp-counter">%curr% із %total%</span>' // markup of counter
    }
  });

  /* Scroll to... */
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        position = $(window).scrollTop();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        closeNav();
        return false;
      }
    }
  });

  $(window).on('load resize orientationchange', function() {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if ( width > 768 ) {
      /* Triggering animations */
      $(".header-text, .header-underline, .contacts--contacts").each(function(){
        $(this).waypoint(function(){
            $(this.element).addClass('fadeInLeft');
          }, { offset: '90%'})
      });
      $(".button-cta--wrapper, .section--content").each(function(){
        $(this).waypoint(function(){
            $(this.element).addClass('fadeInUp');
          }, { offset: '99%'})
      });

      $('.jumbotron--text').waypoint(function(){
        $(this.element).addClass('fadeInDown');
      }, { offset: '90%'});
    }
  });


});