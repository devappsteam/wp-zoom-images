(function ($) {
    'use strict';

    var zoomImages = $('.zoom-images img');
    zoomImages.each(function () {
        $(this).imageZoom({ zoom: 300 });
    });

})(jQuery);