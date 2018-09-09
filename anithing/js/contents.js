jQuery(function($){
  bg_color=$('.bg_color');
  photo_box=$('.photo_box>ul>li');
  photo_box_idx=photo_box.length;
  for(var i=1;i<photo_box_idx+1;i++){
    photo_box.eq(i-1).find("img").attr("src","img/photo/img_"+i+".jpg");
    photo_box.eq(i-1).find("img").attr("alt","photo"+i+"");
  }
  video_box=$('.video_box>ul>li');
  video_box_idx=video_box.length;
  for(var i=1;i<video_box_idx+1;i++){
    video_box.eq(i-1).find("img").attr("src","img/photo/movie_"+i+".jpg");
    video_box.eq(i-1).find("img").attr("alt","movie"+i+"");
  }
  
  light_box=$('.photo_lightbox');
  light_box_img=$('.light_box img');
  photo_box=$('.photo_box');
  photo_box_img=$('.photo_box ul li img');
  light_box.hide();
  photo_box_img.click(function(){
    img_src=$(this).attr('src');
    light_box_img.attr('src',img_src);
    light_box.fadeIn(300);
    close_btn=$('.light_box .close_btn');
    /*close 버튼*/
    close_btn.click(function(){light_box.fadeOut(300)})
    bg_color.click(function(){light_box.fadeOut(300)})
  })
  
    
})
