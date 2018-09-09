jQuery(function($){
  header=$('.header');
  sub_btm=$('.subbtm');
  gnb_li=$('.gnb>ul>li');
  /*header gnb 시작*/
  sub_btm.hide();
  $('.gnb a').hover(function(){
    $(this).addClass('menu_on').siblings().removeClass('menu_on')
    },function(){
    $(this).removeClass('menu_on')
    })
  gnb_li.hover(function(){
    idx_=gnb_li.index(this);
    sub_btm.eq(idx_).toggle();
  });
  gnb_li.eq(4).click(function(){
          alert("서비스 준비 중입니다.")
  });
  /*header gnb 끝*/
  /*header 스크롤액션 시작*/
  $(window).scroll(function(){
    w_height=$(window).scrollTop();
    if(w_height > 30){
      header.css({'top':'-30px','transition':'all 0.5s'});
    }
    if(w_height < 30){
      header.css({'top':'0px','transition':'all 0.5s'});
    }
  });
  /*header 스크롤액션 끝*/
  
});
