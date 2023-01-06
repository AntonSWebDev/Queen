  $(function () {

  const owl = $('.owl-carousel');
  owl.owlCarousel({
    items    : 4,
    loop     : true,
    dots     : true,
    autoplay : true,
    responsive: {
      0    : {
        items : 1,
      },
      768  : {
        items : 2,
      },
      1200 : {
        items : 3,
      },
      1400 : {
        items : 4,
      }
    }
  });

  $('.slider__arrow--next').click(function() {
      owl.trigger('next.owl.carousel');
  });
  $('.slider__arrow--prev').click(function() {
      owl.trigger('prev.owl.carousel', [300]);
  });

  const $videoContainer = $('.video__box'),
        $videoControls  = $('.video__control'),
        $video          = $('.video__video')[0],
        $title          = $('.video__title');

  $videoControls.click(function () {
    if ($video.paused) {
      $video.play();
      $videoContainer.addClass('video-is-playing');
      $title.addClass('video-is-playing');
    } else {
      $video.pause();
      $videoContainer.removeClass('video-is-playing');
      $title.removeClass('video-is-playing');
      $video.load();
    };
  });


});
