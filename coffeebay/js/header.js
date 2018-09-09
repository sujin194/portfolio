jQuery(function($){
    header_li = $('.header_Cont>.gnb>ul>li');
    btm_menu=$('.btm_menu>ul>li');
    btm_menu.hide();
    header_li.hover(function(){
        idx=header_li.index(this);
        btm_menu.eq(idx).toggle();
    });
});
