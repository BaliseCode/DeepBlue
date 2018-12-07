<?php
// LOAD COMPOSER AUTO LOADER
include('vendor/autoload.php');

// LOAD EVERYTHING IN content
$files=glob(__DIR__."/app/content/*.php");
foreach ($files as $file) {
    require_once($file);
}

// LOAD SCRIPT AND STYLE
add_action( 'wp_enqueue_scripts', function(){
    if (!is_admin()) {
        wp_enqueue_style('main-style',  get_stylesheet_directory_uri().'/public/css/style.css', array(), 'bccaa7e0c20c654c52e9d374c52597bc', 'all');
        wp_enqueue_script('main-script',  get_stylesheet_directory_uri().'/public/js/script.js', array(), '6d5e0c7fcecf2493282dcd1601033581', true );
    }
    if (is_admin() && file_exists(__DIR__ . '/public/editor/admin.css')) {
        wp_enqueue_style('main-style', get_stylesheet_directory_uri() . '/public/editor/admin.css', array(), '17d391cec08ecd460ff3cfaf45b0e4d5', 'all');
    }
});

// LOAD SCRIPT AND STYLE FOR GUTENBERG EDITOR
add_action('enqueue_block_editor_assets', function(){
    wp_enqueue_script('components',  get_stylesheet_directory_uri().'/public/editor/components.js', array(), 1, true );
    wp_enqueue_style('components',  get_stylesheet_directory_uri().'/public/editor/admin.css', array(), 1, 'all');
});

// FILES IN INCLUDE PATH
include("app/includes/customizer.php");
include("app/includes/force_title.php");
include("app/includes/hide_adminbar.php");
include("app/includes/nav.php");
include("app/includes/theme_support.php");