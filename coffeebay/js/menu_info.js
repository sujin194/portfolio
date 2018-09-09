jQuery(function($){
    menu_box_li=$('.menu_box_new>ul>li');
    menu_box_img=$('.menu_box_new>ul>li>a img');
    menu_popup=$('.new_menu_popup');
    popup_img=$('.new_menu_popup>.img img');
    footer=$('#footer');
    box_close=$('.new_menu_popup>.close');
    menu_box_li.click(function(){
      idx=menu_box_li.index(this);
      menu_box_li.eq(idx).css({'border':'2px solid #7e352d'}).siblings().css({'border':'2px solid #ccc'})
      menu_box_li.css({'margin-bottom':'3%'})
      menu_box_li.eq(idx).css({'margin-bottom':'33%'})
      menu_box_li.find('.new_menu_popup').css({'display':'none'});
      menu_box_li.eq(idx).find('.new_menu_popup').css({'display':'block'});
      footer.css({'margin-top':'300px'}); 
    })
  box_close.click(function(){
    menu_popup.css({display:'none'})
    footer.css({'margin-top':'0px'})
  })
})
