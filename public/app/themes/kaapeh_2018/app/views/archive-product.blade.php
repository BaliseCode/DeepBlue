@extends('pages/main')
@section('body')
    <div class="container narrow">
        <h1>{{ $title }}</h1>
        {{$content}}

    </div>
    <div class="container">
        <?php $categories = get_terms( 'product_cat');
        foreach($categories as $category) {
            echo '<div class="container narrow cat-header">';
            echo '<h2>'.$category->name.'</h2>';
            if ($category->description) {
                echo '<p>'.$category->description.'</p>';
            }
            echo '</div>';
        }
        print_r($categories);

        ?>
    </div>
@stop
