(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js3').attr('src', (dpi>1) ? 'images/startmenutext-600.png' : 'images/startmenutext-300.png');
var a='data-src'; if($('.js4 .slide0').hasAttr('src')) { a='src'; } $('.js4 .slide0').attr(a, (dpi>1) ? 'images/screen-shot-2018-11-17-at-12.22.54-pm-722.png' : 'images/screen-shot-2018-11-17-at-12.22.54-pm-361.png');
var a='data-src'; if($('.js4 .slide1').hasAttr('src')) { a='src'; } $('.js4 .slide1').attr(a, (dpi>1) ? 'images/screen-shot-2018-11-17-at-12.23.22-pm-722.png' : 'images/screen-shot-2018-11-17-at-12.23.22-pm-361.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m1')[0]);
$('.js4 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: true,infinite: true});
});