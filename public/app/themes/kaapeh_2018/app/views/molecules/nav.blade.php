<nav>
    <a href="<?php bloginfo('url'); ?>"><img src="<?php echo get_template_directory_uri(); ?>/public/images/logo-kaapeh.png"></a>


    <ul class="menu">
        <label class="toggle" for="toggleExtra">
            <div class="navlines"></div>
        </label>
        <?php wp_nav_menu(array(
            'container' => null,
            'theme_location' => 'mainMenu',
            'items_wrap' => '%3$s'
        )) ?>

    </ul>
    <input type="checkbox" id="toggleExtra">
    <ul class="extra">

    </ul>
</nav>
