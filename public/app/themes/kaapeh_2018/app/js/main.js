
(function($) {
    var timer;
    var fixMenu = function(){
        document.querySelector("nav .menu").classList.remove('overmenu')
        document.querySelector("nav .extra").innerHTML = ""
        if (document.querySelector("nav .menu").clientHeight > 58) {
            document.querySelector("nav .menu").classList.add('overmenu')
            clearTimeout(timer);
            timer = setTimeout(function() {
                document.querySelector("nav .extra").innerHTML = ""
                var childs = document.querySelector("nav .menu").children
                for (var i in childs) {
                    console.log(childs[i].getBoundingClientRect && childs[i].getBoundingClientRect().top)
                    if (childs[i].getBoundingClientRect && childs[i].getBoundingClientRect().top < 0) {
                        var clone = childs[i].cloneNode(true)
                        console.log(document.querySelector("nav .extra"))
                        document.querySelector("nav .extra").appendChild(clone)
                    }
                }
            }, 200)
        }
    }
    window.addEventListener('resize', fixMenu)
    window.addEventListener('load', fixMenu);
})(jQuery);
