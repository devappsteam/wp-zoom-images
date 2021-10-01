(function ($) {
    'use strict';

    var zoomImages = $('.zoom img');
    zoomImages.each(function () {
        $(this).imageZoom({ zoom: 300 });
    });

})(jQuery);