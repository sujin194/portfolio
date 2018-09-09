jQuery(function($){
  ad_left_ul=$('.ad_left ul');
  ad_right_ul=$('.ad_right ul');
  ad_li=$('.ad_left ul>li');
  ad_li=$('.ad_area>div>ul>li');
  ad_li_w=ad_li.width();
  ad_left_num=$('.ad_left .num_box span');
  ad_right_num=$('.ad_right .num_box span');
  
  ad_left_num.click(function(){
    n=ad_left_num.index($(this)); ad_left_num.eq(n).addClass("on").siblings().removeClass("on");
    ad_left_ul.animate({'left':-ad_li_w*n+'px'});
  });
  ad_right_num.click(function(){
    n=ad_right_num.index($(this)); ad_right_num.eq(n).addClass("on").siblings().removeClass("on");
    ad_right_ul.animate({'left':-ad_li_w*n+'px'});
  });
  lost_box_img=$('.lost_box img');
  lost_box_txt=$('.lost_box .txt span');
  
  lost_box=$('.lost_box>div');
  lost_popup_wrap=$('.lost_popup_wrap');
  lost_popup_img=$('.lost_popup img');
  lost_popup_txt=$('.lost_popup .txt p');
  lost_p_name=lost_popup_txt.eq(0);
  lost_p_spot=lost_popup_txt.eq(1);
  lost_p_data=lost_popup_txt.eq(2);
  bg_color=$('.bg_color');
  p_close_btn=$('.lost_popup .btn_box button').eq(1);
  lost_popup_wrap.hide();
  lost_box.click(function(){
    j=lost_box.index($(this));
    img_attr=$(this).find('img').attr('src');
    lost_popup_img.attr('src',img_attr)
    lost_name=$(this).find('span').eq(0).text();
    lost_spot=$(this).find('span').eq(1).text();
    lost_data=$(this).find('span').eq(2).text();
    lost_p_name.text(lost_name);
    lost_p_spot.text(lost_spot);
    lost_p_data.text(lost_data);
    lost_popup_wrap.fadeIn(500)
    
    bg_color.click(function(){
    lost_popup_wrap.fadeOut(500)
    })
    p_close_btn.click(function(){
    lost_popup_wrap.fadeOut(500)
    })
  })
  
})