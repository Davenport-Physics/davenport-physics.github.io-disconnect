(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js5 .slide0').hasAttr('src')) { a='src'; } $('.js5 .slide0').attr(a, (dpi>1) ? 'images/example-844.png' : 'images/example-422.png');
var a='data-src'; if($('.js5 .slide1').hasAttr('src')) { a='src'; } $('.js5 .slide1').attr(a, (dpi>1) ? 'images/example1-844.png' : 'images/example1-422.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
plyr.setup(document.querySelectorAll('.player video'));
if($('.js2 video')[0].plyr.volume){$('.js2 video')[0].plyr.setVolume(0);}
$('.js2 video')[0].plyr.play();
if($('.js3 video')[0].plyr.volume){$('.js3 video')[0].plyr.setVolume(0);}
$('.js3 video')[0].plyr.play();
if($('.js4 video')[0].plyr.volume){$('.js4 video')[0].plyr.setVolume(0);}
$('.js4 video')[0].plyr.play();
initMenu($('#m1')[0]);
$('.js5 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: true,infinite: true});
});