<?php

/**
 * Plugin Name: Moneyline Sport - React Development
 */


add_filter( 'allowed_block_types_all', 'theme_allowed_blocks', 10, 2 );

function theme_allowed_blocks( $allowed_blocks, $block_editor_context ) {
    // Масив дозволених блоків
    return array(
        'core/paragraph',
        'core/image',
        'core/heading',
        'app/hero-banner',
        'app/about',
        'app/template',
        'app/text-center',
        'app/cards',
        'app/header'
    );
}

function register_custom_blocks() {

    register_block_type( __DIR__ . '/build/hero-banner' );

    register_block_type( __DIR__ . '/build/about' );

    register_block_type( __DIR__ . '/build/text-center' );

    // register_block_type( __DIR__ . '/build/cards' );

    wp_enqueue_script(
        'preview',
        plugins_url( 'src/js/preview.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' ),
        null,
        false
    );


    register_block_type( __DIR__ . '/build/cards', array(
        'editor_script' => 'preview',
    ));

    register_block_type(__DIR__ . '/build/layouts/header');


}
add_action( 'init', 'register_custom_blocks' );



function moneyline_enqueue_block_editor_assets() {
    // Підключаємо CSS файл для редактора Gutenberg
    wp_enqueue_style(
        'moneyline-block-global',
        plugin_dir_url( __FILE__ ) . 'src/css/global/admin.css',
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'src/css/global/admin.css' )
    );
}
add_action( 'enqueue_block_editor_assets', 'moneyline_enqueue_block_editor_assets' );



// function mytheme_register_block_area() {
//     // Реєстрація області для блоку
//     register_sidebar( array(
//         'name'          => __( 'Header Area', 'mytheme' ),
//         'id'            => 'header_area',
//         'before_widget' => '',
//         'after_widget'  => '',
//     ) );
// }
// add_action( 'widgets_init', 'mytheme_register_block_area' );


// Додаємо сторінку налаштувань
function theme_add_settings_page() {
    add_menu_page(
        'Theme Settings', // Назва сторінки
        'Theme Settings', // Назва меню
        'manage_options', // Рівень доступу
        'theme-settings', // Унікальний slug
        'theme_render_settings_page' // Функція рендеру
    );
}
add_action('admin_menu', 'theme_add_settings_page');

// Рендер сторінки налаштувань
function theme_render_settings_page() {
    ?>
    <div class="wrap">
        <h1><?php esc_html_e('Theme Settings', 'my-theme'); ?></h1>
        <form method="post" action="options.php">
            <?php
            settings_fields('theme_options_group');
            do_settings_sections('theme-settings');
            submit_button();
            ?>
        </form>
    </div>
    <?php
}

// Реєструємо налаштування
function theme_settings_init() {
    register_setting('theme_options_group', 'my_theme_dark_mode');

    add_settings_section(
        'theme_settings_section',
        __('Dark Mode Settings', 'my-theme'),
        null,
        'theme-settings'
    );

    add_settings_field(
        'my_theme_dark_mode',
        'Choose Theme Mode',
        'theme_dark_mode_render',
        'theme-settings',
        'theme_settings_section'
    );
}
add_action('admin_init', 'theme_settings_init');

// Рендер поля з радіо-кнопками
function theme_dark_mode_render() {
    $option = get_option('my_theme_dark_mode', 'light'); 
    ?>
    <label>
        <input type="radio" name="my_theme_dark_mode" value="light" <?php checked($option, 'light'); ?>>
        <?php _e('Light Mode'); ?>
    </label><br>
    <label>
        <input type="radio" name="my_theme_dark_mode" value="dark" <?php checked($option, 'dark'); ?>>
        <?php _e('Dark Mode') ?>
    </label>
    <?php
}


function theme_apply_mode_class() {
    $screen = get_current_screen();
   
    if ($screen->post_type === 'page') {
        $mode = get_option('my_theme_dark_mode', 'light');
      
        if ($mode === 'dark') {
            echo '<script>document.body.classList.add("dark-mode");</script>';
        } else {
            echo '<script>document.body.classList.remove("dark-mode");</script>';
        }
    }
}
add_action('admin_footer', 'theme_apply_mode_class');