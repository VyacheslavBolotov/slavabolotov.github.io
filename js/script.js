var scroll = new SmoothScroll('a[href*="#"]');

baguetteBox.run('.gallery', {
    animation: 'fadeIn',
    noScrollbars: true
});

baguetteBox.run('.cert__gallery', {
    animation: 'fadeIn',
    noScrollbars: true
});

jQuery(function() {
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() != 0) { // Если до верха не 0px
            jQuery('#toTop').fadeIn(); // Плавно показываем кнопочку :)
        } else { // Иначе (Если мы вверху страницы) 
            jQuery('#toTop').fadeOut(); // Столь же плавно эту самую кнопочку скрываем
        }
    });

    jQuery('#toTop').click(function() {
        jQuery('body,html').animate({ scrollTop: 0 }, 800);
    });
});