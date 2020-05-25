//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend jquery.fancybox.min.js
//@prepros-prepend flipclock.min.js

$(document).ready(function () {
    $(function () {
        /* Якорь */
        $(function () {
            $("a[href='#prices']").click(function (h) {
                h.preventDefault();
                var f = $(this).attr("href"),
                    g = $(f).offset().top;
                $("body,html").animate({
                    scrollTop: g
                }, 1500)
            });
        });
        $('.block-more').on('click', function () {
            if (!$(this).hasClass('block-more-active')) {
                $(this).addClass('block-more-active')
                $(this).parent().next().addClass('.block-description-list-active').slideDown(500);
            }
            else {
                $(this).removeClass('block-more-active')
                $(this).parent().next().removeClass('block-description-list-active').slideUp(500);
            }
        });
        $(".more-link").fancybox();
        /* Таймер */
        $(function () {
            var clock;
            var dates = new Array(
                new Date("May 26, 2020 00:00 UTC+3"),
                new Date("May 27, 2020 00:00 UTC+3"),
                new Date("May 28, 2020 00:00 UTC+3")
            );

            var currentDate = new Date();

            var sale1 = {
                name: $('#sale-1'),
                saleText: new Array('3 000р.')
            };
            var sale2 = {
                name: $('#sale-2'),
                saleText: new Array('3 000р.')
            };

            var today1 = {
                name: $('#today-1'),
                todayText: new Array('32 900р.')
            };
            var today2 = {
                name: $('#today-2'),
                todayText: new Array('52 900р.')
            };

            var link1 = {
                name: $('#link-1'),
                linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4964&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4965&clean=true&lg=ru')
            };
            var link2 = {
                name: $('#link-2'),
                linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4970&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4971&clean=true&lg=ru')
            };
            var prepLink = {
                name: $('#prepayment-link'),
                linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4977&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4978&clean=true&lg=ru')
            };

            if (currentDate < dates[0]) {
                var futureDate = dates[0];
                var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
                clock = $('.clock').FlipClock(diff, {
                    clockFace: 'HourlyCounter',
                    countdown: true,
                    language: 'ru',
                    callbacks: {
                        stop: function () {
                            sale1.name.text(sale1.saleText[0]);
                            sale2.name.text(sale2.saleText[0]);
                            today1.name.text(today1.todayText[0]);
                            today2.name.text(today2.todayText[0]);
                            link1.name.attr('href', link1.linkText[0]);
                            link2.name.attr('href', link2.linkText[0]);
                            prepLink.name.attr('href', prepLink.linkText[0]);
                        }
                    }
                });
            } else if ((currentDate >= dates[0]) && (currentDate < dates[1])) {
                var futureDate = dates[1];
                var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
                clock = $('.clock').FlipClock(diff, {
                    clockFace: 'HourlyCounter',
                    countdown: true,
                    language: 'ru',
                    callbacks: {
                        stop: function () {
                            $(' .timer,  .cost-sale, .cost-today').remove();
                            $('.cost-full span').addClass('unbroken');
                            link1.name.attr('href', link1.linkText[1]);
                            link2.name.attr('href', link2.linkText[1]);
                            prepLink.name.attr('href', prepLink.linkText[1]);
                        }
                    }
                });
            } else {
                var futureDate = dates[2];
                var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
                clock = $('.clock').FlipClock(diff, {
                    clockFace: 'HourlyCounter',
                    countdown: true,
                    language: 'ru',
                    callbacks: {
                        stop: function () {
                            $('.prepayment').remove();
                        }
                    }
                });
            }
        });
        $(".video-wrapper-revs img").click(function () {
            var a = $(this).parent().attr("data-youtube");
            $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1"  allowfullscreen></iframe>')
        });
        $(function () {
            $("[data-fancybox]").fancybox({
                buttons: [
                    'slideShow',
                    'share',
                    'zoom',
                    'fullScreen',
                    // 'download',
                    'close'
                ],
                speed: 330,
                loop: true,
                opacity: "auto",
                // autoScale: true,
                mouseWheel: true,
                transitionEffect: 'slide'
            });
        });
        $(function () {
            $('.video-wrapper-revs iframe').each(function () {
                var l = $(this).parent().attr('data-img');
                $(this).parent().html('<img src="' + l + '" alt="Видео отзыв">');
            });
        });
        $(function () {
            $('#video-revs-1').on('slide.bs.carousel', function () {
                $('.video-wrapper-revs iframe').each(function () {
                    var l = $(this).parent().attr('data-img');
                    $(this).parent().html('<img src="' + l + '" alt="Видео отзыв">');
                });
                $(".video-wrapper-revs img").click(function () {
                    var a = $(this).parent().attr("data-youtube");
                    $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>');
                });
            });
        });
        /*Конец документа*/
    });
});