jQuery(function($){
  $('#nav').bxSlider();
  event_wrap=$('.event_wrap');
  event_act=$('.event_act');
  event_right=$('.event_right');
  event_l_txt=$('.event_left .txt');
  event_t_Offset=event_wrap.offset().top;
  video_Offset=$('.content_video').offset().top;
  video_box_li=$('.video_box ul>li');
  best_title=$('.best_area h2');
  color_li=$('ul#best .color li');
  hamburger=$('.hamburger');
  bottom_h_wrap=$('.bottom_h_wrap');
  $(window).scroll(function(){
    if($(window).scrollTop()>200){
      video_box_li.eq(0).css({left:'0%',transition:'all 0.3s'})
      video_box_li.eq(1).css({left:'0%',transition:'ease 0.3s all 0.3s'})
      video_box_li.eq(2).css({left:'0%',transition:'ease 0.6s all 0.3s'})
    }
  })
  $(window).scroll(function(){
    if($(window).scrollTop()>400){
      event_act.css({right:'0%',transition:'all 0.7s'})
      event_right.css({right:'0%',transition:'all 1s'})
      event_l_txt.css({left:'0%',transition:'all 1s'})
    }
  })
  color_li.click(function(){
    $(this).addClass('on').siblings().removeClass('on');
  })
  
  hamburger.click(function(){
    bottom_h_wrap.css({right:'-3%',transition:'all 0.5s'})
    hamburger.click(function(){
    bottom_h_wrap.css({right:'-100%'})
  })
  })
})