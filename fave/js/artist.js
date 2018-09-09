jQuery(function($){ 
  /*프로필 hover*/
  profile_item=$('.profile>.item');
  iu_profile=$('.iu_profile');
  
  profile_item.hover(function(){
    iu_profile.css({'opacity':'1'});
    profile_item.css({'opacity':'0'});
    },function(){
    iu_profile.css({'opacity':'0'});
    profile_item.css({'opacity':'1'});
    })    
    
  /*정규,싱글 앨범갤러리*/
  iu_cover_album=$('.sec1>.album_g>ul>li>img');
    for(i=0;i<10;i++){
        iu_cover_album.eq(i-1).attr("src","img/iu_album/iu_cover0"+i+".jpg")}
    /*콜라보,프로젝트 앨범갤러리*/
     iu_cover_pro=$('.sec2>.album_g>ul>li>img');
    for(i=0;i<10;i++){
        iu_cover_pro.eq(i-1).attr("src","img/iu_album_project/iu_cover_project0"+i+".jpg")}
    /*비디오*/
     cont_img=$('.sec3>.iu_cont>.con');
    for( i=0;i<10;i++){
        cont_img.eq(i-1).find("img").attr("src","img/iu_cont/iu_cont0"+i+".jpg")}
    /*notice*/
     notice_img=$('.sec4>.iu_cont>.con');
    for( i=0;i<10;i++){
        notice_img.eq(i-1).find("img").attr("src","img/iu_notice/iu_notice0"+i+".jpg")}
                
    sec1_g_ul=$('.sec1 .album_g ul');
    sec1_g_li=$('.sec1 .album_g ul li');
    sec1_g_arrowL=$('.sec1 .arrowL');
    sec1_g_arrowR=$('.sec1 .arrowR');
    li_w=sec1_g_li.width();
  sec1_g_arrowL.hover(function(){
  });
  sec1_g_arrowR.hover(function(){
  });
})