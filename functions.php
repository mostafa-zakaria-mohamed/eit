<?php 

function enmatta_script_enqueue() {
    // General Style    
    wp_enqueue_style('Style', get_stylesheet_uri());
    
    // Include CSS Files
	wp_enqueue_style( 'Bootstrap-CSS', get_theme_file_uri() . '/resources/package/bootstrap.min.css', NULL, 'all' );
    wp_enqueue_style( 'RemixIcon-CSS', get_theme_file_uri() . '/resources/library/remixicon/remixicon.css', NULL, 'all' );
    wp_enqueue_style( 'Swiper-CSS', get_theme_file_uri() . '/resources/library/swiper/swiper-bundle.min.css', NULL, 'all' );
    wp_enqueue_style( 'Theme-CSS', get_theme_file_uri() . '/resources/theme/css/ar/theme-ar.css', NULL, 'all' );
    wp_enqueue_style( 'Custom-CSS', get_theme_file_uri() . '/resources/theme/css/ar/custom.css', NULL, 'all' );

    // Include JS  Files
    wp_enqueue_script( 'Popper-JS', get_theme_file_uri() . '/resources/package/popper.min.js', NULL, true );
    wp_enqueue_script( 'Bootstrap-JS', get_theme_file_uri() . '/resources/package/bootstrap.min.js', NULL, true );
    wp_enqueue_script( 'Jquery-JS', get_theme_file_uri() . '/resources/library/jquery/jquery.min.js', NULL, true );
    wp_enqueue_script( 'Swiper-JS', get_theme_file_uri() . '/resources/library/swiper/swiper-bundle.min.js', NULL, true );
    wp_enqueue_script( 'Theme-JS', get_theme_file_uri() . '/resources/theme/js/ar/theme-ar.js', NULL, true );

}
add_action( 'wp_enqueue_scripts', 'enmatta_script_enqueue' );


// Navwalker
function enmatta_register_navwalker(){
    require_once get_template_directory() . '/resources/package/bootstrap-5-wordpress-navbar-walker.php';
}
add_action( 'after_setup_theme', 'enmatta_register_navwalker' );


// Theme Setup
function enmatta_theme_setup(){
    // Theme Support
	add_theme_support('custom-header');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('comment-list', 'comment-form', 'search-form'));
    add_theme_support('title-tag');

    // Nav Menus
    register_nav_menus(array(
        'main-menu'       => __('Main Menu'),
        'footer-menu'       => __('Footer Menu'),
    ));
}
add_action('after_setup_theme', 'enmatta_theme_setup');


// Custom Image Sizes
add_image_size('siteLogo', 166, 75, array('top', 'center'));




// Copyrights
function update_footer_admin () {    
echo 'التصميم والتطوير: <a href="https://mostafazakaria.com/" target="_blank">MZ Digital Studio</a> | للحصول على أي مساعدة أو دعم، راسلنا عبر البريد الإلكتروني على <a target="_blank" href="mailto:me@mostafazakaria.com">Customer Support</a>';    
}    
add_filter('admin_footer_text', 'update_footer_admin');












