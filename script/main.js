import $ from 'jquery';

$(document).ready(function () {
    const width = $(".main-content-center").first().width()
    console.log(width)
    $(".main-content-center").first().height(width);
    $(".main-item").on({
      mouseenter: function (elem) {
        var mainItems = $('.main-item');
        mainItems.map((index, element) => {
          if (element != elem.currentTarget) {
            $(element).css('opacity', .5)
          }
        });
      },
      mouseleave: function () {
        $(".main-item").css('opacity', 1)
      }
    })
  });