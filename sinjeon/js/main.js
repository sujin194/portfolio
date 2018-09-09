jQuery(function($){
  gnb_li=$('#gnb ul li');
  header_bg=$('.header_bg');
  m_btn2=$('.m_btn2');
  header_top_li=$('.header_top ul li');
  login_btn=header_top_li.eq(0);
  btn_close=$('#btn_close');
  login_popup_wrap=$('.login_popup_wrap');
  
  gnb_li.hover(function(){
    idx=gnb_li.index();
    $(this).eq(idx).addClass('on').siblings().removeClass('on');
    header_bg.css({display:'block'});
    m_btn2.css({display:'block'});
  },function(){
    header_bg.css({display:'none'});
    m_btn2.css({display:'none'});
   $(this).removeClass('on');
  })
  
  login_btn.click(function(){
    login_popup_wrap.css({display:'block'})
    btn_close.click(function(){
      login_popup_wrap.css({display:'none'})
    })
  })
})