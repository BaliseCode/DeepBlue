<?php


add_filter('the_content', function($content){
    if (!is_front_page()) {
        return preg_replace('/^(\s+<div[^>]*>\s*<div[^>]*>)/','$1'.'<h1>'.get_the_title().'</h1>',$content);
    }
    return $content;
});
