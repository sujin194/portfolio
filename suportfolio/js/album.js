jQuery(function($){
    $('#header').load('header.html','#header');
    $('#footer').load('footer.html','#footer');
    
    gallery_li=$('ul#gallery li');
    gallery_li.hover(function(){
      $(this).find('img').css({opacity:'1'})
    },function(){
      $(this).find('img').css({opacity:'0.5'})
    })
    b_opacity=$('.b_opacity')
    $('ul#gallery').bxSlider({
     minSlides: 6,maxSlides: 6,slideWidth: 300,slideMargin: 0,ticker: true,speed: 50000,tickerHover:true
    });
    map_effect=$('.map_effect')
    effect_img=$('.map_effect img')
    effect_txt=$('.map_effect .txt')
    
    effect_img.hover(function(){
      b_opacity.css({opacity:'0.5'})
      $(this).siblings('.txt').css({opacity:'0.8'})
    },function(){
      b_opacity.css({opacity:'0'})
      $(this).siblings('.txt').css({opacity:'0'})
    })
    
  })