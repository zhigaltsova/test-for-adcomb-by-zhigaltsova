//меню в мобильной версии
$(document).ready(function() {
        $('.header').click(function(event) {
            $('.header__menu').toggleClass('active');
        });
});


//при клике на загловок должен открываться текст
 $(document).ready(function() {
     $('.spoiler__item').click(function (event) {
         $('.spoiler__title').not($(this).find('.spoiler__title')).removeClass('active');
         $('.spoiler__text').not($(this).find('.spoiler__title').next()).slideUp(300);
            $(this).find('.spoiler__title').toggleClass('active').next().slideToggle(300);
        });
 });

 
//В первом блоке на мобильных устройствах - слайдер  slick
 $(document).ready(function() {
     $('.slider').slick({
         arrows: true,
         dots: true,
         infinite: true,
         speed: 300,
         slidesToShow: 1,
         centerMode: true,
         variableWidth: true,
         adaptiveHeight: true,
         mobileFirst: true,
     responsive: [
        {
           breakpoint: 767,
           settings: "unslick"
        }
     ]
     });
 });

 
//пункты слайдера по кругу
 let radius = 320;
let fields = $('.slider__item'), container = $('.single-item'), width = container.width(), height = container.height();
let angle = 0, step = (2*Math.PI) / fields.length;
fields.each(function() {
    let x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/1.5);
    let y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/1.5);
    if(window.console) {
        console.log($(this).text(), x, y);
    }
    $(this).css({
        left: x + 'px',
        top: y + 'px'
    });
    angle += step;
});


//перекрасить svg
$('.slider__item__icon').each(function(){
  var $img = $(this);
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function(data) {
    var $svg = $(data).find('svg');
    if(typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }
    $img.replaceWith($svg);
  }, 'xml');
});