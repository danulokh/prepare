<?php

function prepare_enqueue_scripts () {
    wp_enqueue_style('prepare-main-style', get_template_directory_uri() . '/assets/css/style.min.css', array(), '1.0', 'all');
    wp_enqueue_script('prepare-main-script', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0', true);
}

add_action('wp_enqueue_scripts', 'prepare_enqueue_scripts');