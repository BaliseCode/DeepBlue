<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Raleway:500|Cabin+Sketch|Leckerli+One" rel="stylesheet">
    @wp_head()
</head>
<body <?php body_class(); ?>>
    @include('molecules.nav')
    <main>
        @yield('body')
    </main>
    @include('sections.footer')
    @wp_footer()
</body>
</html>
