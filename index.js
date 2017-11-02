
// Add smooth scrolling to all links
$(document).ready(function(){
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    // Fade out image when switch is clicked
    $('#features-switch').click(function() {
        if($("#features-switch").is(':checked')){
            console.log("hello")
            $("#features-iphone-container").fadeOut();
        } else {
            $("#features-iphone-container").fadeIn();
        }
    });
});

// Predefined code for using Google Maps Static Javascript API
function initMap() {
    var uluru = {lat: 45.423722, lng: -75.683634};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

$(document).ready(
    function(){
        var scroll_start = 0;
        var startchange = $('#home-button');
        var offset = startchange.offset();

        // About section button animation
        $('.Read-button').on('click', function(){
            $('.panel').toggleClass('-expanded');
            if ($('.panel').hasClass('-expanded')) {
                $('.Read-button').html('Hide');
            } else {
                $('.Read-button').html('Read more');
            }
        });

        // If you are loading the webpage in the home section, the home link will be animated
        if ($(this).scrollTop() === 0) {
            var windscroll = $(window).scrollTop();
            var navheight = $('.topnav').height();
            if (windscroll >= navheight) {
                $('section').each(function(i) {
                    if ($(this).position().top <= windscroll + 100) {
                        $('nav a.active').removeClass('active');
                        $('nav a').eq(i).addClass('active');
                    }
                });
            } else {
                $('nav').removeClass('fixed');
                $('nav a.active').removeClass('active');
                $('nav a:first').addClass('active');
            }
        }

        // If you are reloading somewhere else then the home section, the navbar will be loaded with the proper style
        if ($(this).scrollTop() > offset.top) {
            $('.topnav').css('background-color', 'rgba(238, 238, 238, 0.9)');
            $('#logo-link').attr('id', 'logo-link-down');
        } else {
            if (window.innerWidth >= 960) {
                $('.topnav').css('background-color', 'transparent');
            }
            $('#logo-link-down').attr('id', 'logo-link');
        }

        // Animates the navbar when scrolling past the home button
        $(document).scroll(
            function() {
                scroll_start = $(this).scrollTop();
                if(scroll_start > offset.top) {
                    $('.topnav').css('background-color', 'rgba(238, 238, 238, 0.9)');
                    $('#logo-link').attr('id', 'logo-link-down');
                    $('.menu').attr('class', 'menudown');
                } else {
                    if (window.innerWidth >= 960) {
                        $('.topnav').css('background-color', 'transparent');
                    }
                    $('#logo-link-down').attr('id', 'logo-link');
                    $('.menudown').attr('class', 'menu');
                }
            }
        );

        // Changes the navbar background if the window is resized
        $(window).on('resize', function(){
            if ($(this).scrollTop() > offset.top) {
                $('.topnav').css('background-color', 'rgba(238, 238, 238, 0.9)');
            } else {
                if (window.innerWidth >= 960) {
                    $('.topnav').css('background-color', 'transparent');
                } else {
                    $('.topnav').css('background-color', 'rgba(238, 238, 238, 0.9)');
                }
            }
        });
        /*
        $("#contact-email-box").focus(function() {
          $('#contact-email').css({visibility: 'visible', transition-duration: '1s'})) //transition-duration: '1s')

          //$('#contact-email').hide();
          // $('#contact-email').fadeIn(300);
         });
         $('#email-elements input').blur(function(){
 -            var sd = $(this).attr('placeholder');
 -            if( !$(this).val() ) {
 -                $('#contact-email').css('visibility', 'hidden')
                  //$('contact-email').show();
                  //$('contact-email').fadeOut(100);
 -            }
 -        });*/
    }
);

// Animates navbar links when scrolling
$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    var navheight = $('.topnav').height();
    if (windscroll >= navheight) {
        $('section').each(function(i) {
            if ($(this).position().top <= windscroll + 100) {
                $('nav a.active').removeClass('active');
                $('nav a').eq(i).addClass('active');
            }
        });
    } else {
        $('nav').removeClass('fixed');
        $('nav  a.active').removeClass('active');
        $('nav  a:first').addClass('active');
    }
}).scroll();
