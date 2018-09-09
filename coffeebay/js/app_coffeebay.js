jQuery(function($){
    enter=$('#enter_btn');
    a_main=$('.a_main');
    enter.click(function(){
        a_main_top=a_main.offset().top;
        $('body,html').animate({scrollTop: a_main_top},300);
    });
})
