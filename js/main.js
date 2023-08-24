// Mobile Navbar
let mobileMenu = document.querySelector('.main-menu');
console.log(mobileMenu);
let humburgure = document.querySelector('.mobile-menu');
humburgure.addEventListener('click', () => {
    mobileMenu.classList.toggle('berhor');
});

// Counter
$('.count').each(function () {
    $(this)
        .prop('Counter', 0)
        .animate(
            {
                Counter: $(this).text(),
            },
            {
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                },
            }
        );
});

// Testimonial
$('.testimonalWraper').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
            dots: true,
            nav: true,
        },
        600: {
            items: 1,
            nav: true,

            dots: true,
        },
        1000: {
            items: 1,
            nav: true,
            dots: true,
        },
    },
});
