
// Add smooth scrolling to all links
$(document).ready(function(){
    $("#web-view").fadeOut();
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
            $("#mobile-view").fadeOut();
            $("#web-view").fadeIn();
        } else {
            $("#mobile-view").fadeIn();
            $("#web-view").fadeOut();
        }
    });
});

// Predefined code for using Google Maps Static Javascript API
function initMap() {
    var uluru = {lat: 45.423722, lng: -75.683634};

    var style2 = [
        {
            "featureType": "all",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#232323"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#FFC80A"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#c4c4c4"
                }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#FFC80A"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 21
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi.business",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#FFC80A"
                },
                {
                    "lightness": "0"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#FFC80A"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#575757"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#2c2c2c"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#232323"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#999999"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                }
            ]
        }
    ];
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru,
        styles: style2
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
                $('.Read-button').html('HIDE');
            } else {
                $('.Read-button').html('READ MORE');
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
            $('.menu').attr('class', 'menudown');
            $('#topBtn').addClass('myBtnDown');
            $('#topBtn').removeClass('myBtnTop');
        } else {
            if (window.innerWidth >= 960 && !isMobile) {
                $('.topnav').css('background-color', 'transparent');
            }
            $('#topBtn').addClass('myBtnTop');
            $('#topBtn').removeClass('myBtnDown');
            $('#logo-link-down').attr('id', 'logo-link');
            $('.menudown').attr('class', 'menu');
        }

        var isMobile = false; //initiate as false
        // device detection
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

        if (isMobile || window.innerWidth <= 960 ) {
            // IF YOU WANT TO CHANGE SOMETHING ON MOBILE VIEW, ADD IT HERE
            $('.topnav li a').on('click', function(){
                $('.topnav .menu-btn:checked ~ nav .menu').addClass('menu1');
                $('.topnav .menu-btn:checked ~ nav .menudown').addClass('menudown1');
                $('.topnav .menu-btn').prop('checked', false);
            })
            $('.topnav .menu-btn').on('click', function(){
                $('.topnav .menu-btn:checked ~ nav .menu').removeClass('menu1');
                $('.topnav .menu-btn:checked ~ nav .menudown').removeClass('menudown1');
            })
        }

        // Animates the navbar when scrolling past the home button
        $(document).scroll(
            function() {
                scroll_start = $(this).scrollTop();
                if(scroll_start > offset.top) {
                    $('.topnav').css('background-color', 'rgba(238, 238, 238, 0.9)');
                    $('#logo-link').attr('id', 'logo-link-down');
                    $('.menu').attr('class', 'menudown');
                    $('#topBtn').addClass('myBtnDown');
                    $('#topBtn').removeClass('myBtnTop');
                } else {
                    if (window.innerWidth >= 960 && !isMobile) {
                        $('.topnav').css('background-color', 'transparent');
                    }
                    $('#topBtn').addClass('myBtnTop');
                    $('#topBtn').removeClass('myBtnDown');
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
                if (window.innerWidth >= 960 && !isMobile) {
                    $('.topnav').css('background-color', 'transparent');
                } else {
                    $('.topnav').css('background-color', 'rgba(238, 238, 238, 0.9)');
                }
            }
        });

        //$("#contact-email-box").focus(function() {
          //$('#contact-email').css({visibility: 'visible', transition-duration: '1s'})) //transition-duration: '1s')

          //$('#contact-email').hide();
          // $('#contact-email').fadeIn(300);
         //});
         //$('#contact-name-box').blur(function(){
              //var sd = $(this).attr('placeholder');
              //if( !$(this).val() ) {
                  //$(this).css({'border-color: #FFC80A'})
                  //$('#contact-email').css('visibility', 'hidden')
                  //$('contact-email').show();
                  //$('contact-email').fadeOut(100);
              //} else {
                  //$(this).css({'border-color: #ccc'})
              //}
          //});
        $('#contact-name-box, #contact-email-box, #contact-message-box').blur(function() {
            if ($(this).val().length == 0) {
                $(this).addClass("notfilled");
                $(this).removeClass("filled");
            }
            if ($(this).val().length > 0) {
                $(this).removeClass("notfilled");
                $(this).addClass("filled");
            }
        })
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
