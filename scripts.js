document.addEventListener("DOMContentLoaded", function() {
    var navigation = document.querySelector(".navigation");

    function showNavigation() {
        navigation.classList.add("show");
    }

    setTimeout(showNavigation, 500);
});



document.addEventListener("DOMContentLoaded", function() {
    var container = document.querySelector(".container");

    function showContainer() {
        var scrollPosition = window.scrollY || window.pageYOffset;

        if (scrollPosition > 15) {
            container.classList.add("show");
        }
    }

    window.addEventListener("scroll", showContainer);
});


