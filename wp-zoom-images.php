<?php

/**
 * Plugin Name: WP Zoom Images
 * Plugin URI: https://github.com/devappsteam/wp-zoom-images
 * Description: A lightweight (1.8kb minified) and easy jQuery image zoom plugin that enables the visitor to zoom in/out images with mouse and touch events.
 * Version: 1.0
 * Author: DevApps
 * Author URI: http://devapps.com.br/
 */

defined('ABSPATH') || exit;

define('WZI_VERSION', '1.0.0');
define('WZI_TEXT_DOMAIN', 'wp-zoom-images');

class WP_Zoom_Images
{

    private static $instance;

    public static function get_intance()
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Constructor.
     */
    private function __construct()
    {
        // Actions
        add_action('wp_enqueue_scripts', array($this, 'enqueue_script'));
    }

    /**
     * Enqueues our kickass scripts and stylesheets.
     */
    public function enqueue_script()
    {
        wp_enqueue_style('zoom', plugins_url('/assets/vendor/image-zoom-plugin/dist/css/image-zoom.css', __FILE__));
        wp_enqueue_script('zoom', plugins_url('/assets/vendor/image-zoom-plugin/dist/js/image-zoom.min.js', __FILE__), array('jquery'), WZI_VERSION, true);
        wp_enqueue_style(WZI_TEXT_DOMAIN, plugins_url('/assets/css/style.css', __FILE__));
        wp_enqueue_script(WZI_TEXT_DOMAIN, plugins_url('/assets/js/main.js', __FILE__), array('jquery'), WZI_VERSION, true);
    }
}

$wp_zoom_images = WP_Zoom_Images::get_intance();
