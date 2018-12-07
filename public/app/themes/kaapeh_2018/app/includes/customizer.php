<?php



add_action( 'customize_register', function ( $wp_customize ) {
    $wp_customize->add_section('footer', array(
        'title'       => 'Pied de page',
        'description' => '',
        'priority'    => 120,
    ));
    for ($i=1; $i<=2; $i++) {
        $wp_customize->add_setting( "commerce_${i}" , array() );
        $wp_customize->add_setting( "commerce_${i}_adresse" , array() );
        $wp_customize->add_setting( "commerce_${i}_telephone" , array() );
        $wp_customize->add_setting( "commerce_${i}_courriel" , array() );
        $wp_customize->add_setting( "commerce_${i}_facebook" , array() );
        $wp_customize->add_setting( "commerce_${i}_instagram" , array() );
        $wp_customize->add_setting( "commerce_${i}_ouverture" , array() );
        $wp_customize->add_control( new WP_Customize_Control( $wp_customize,  "commerce_${i}", array(
            'label'      => "Nom du commerce $i",
            'section'    => 'footer',
            'settings'   =>  "commerce_${i}",
        ) ) );
        $wp_customize->add_control( new WP_Customize_Control( $wp_customize,  "commerce_${i}_adresse", array(
            'label'      => "Adresse du commerce $i",
            'section'    => 'footer',
            'type'       => 'textarea',
            'settings'   => "commerce_${i}_adresse",
        ) ) );
        $wp_customize->add_control( new WP_Customize_Control( $wp_customize,  "commerce_${i}_telephone", array(
            'label'      => "Téléphone du commerce $i",
            'section'    => 'footer',
            'settings'   =>  "commerce_${i}_telephone",
        ) ) );
        $wp_customize->add_control( new WP_Customize_Control( $wp_customize,  "commerce_${i}_facebook", array(
            'label'      => "Facebook du commerce $i",
            'section'    => 'footer',
            'type'       => 'url',
            'settings'   =>  "commerce_${i}_facebook",
        ) ) );
        $wp_customize->add_control( new WP_Customize_Control( $wp_customize,  "commerce_${i}_instagram", array(
            'label'      => "Instagram du commerce $i",
            'section'    => 'footer',
            'type'       => 'url',
            'settings'   =>  "commerce_${i}_instagram",
        ) ) );
        $wp_customize->add_control( new WP_Customize_Control( $wp_customize,  "commerce_${i}_courriel", array(
            'label'      => "Courriel du commerce $i",
            'section'    => 'footer',
            'type'       => 'url',
            'settings'   =>  "commerce_${i}_courriel",
        ) ) );
        $wp_customize->add_control( new WP_Customize_Control( $wp_customize,  "commerce_${i}_ouverture", array(
            'label'      => "Heures d'ouverture du commerce $i",
            'section'    => 'footer',
            'type'       => 'textarea',
            'settings'   => "commerce_${i}_ouverture",
        ) ) );
    }

});
