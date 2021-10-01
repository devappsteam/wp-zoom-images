jQuery(function () {
    var zoomImages = jQuery('.zoom img');
    zoomImages.each(function () {
        jQuery(this).imageZoom({ zoom: 300 });
    });
});