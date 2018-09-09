jQuery(function($){
  $('#header').load('header.html','#header');
  $('#footer').load('footer.html','#footer');
  
  /*웹디자인 팝업창*/
  popup=$('#popup');
  close_btn=$('#popup .close_btn');
  black_bg=$('#popup .black_bg');
  popup_img=$('.popup_box img');
  move_btn=$('.popup_box button');
  section=$('.section .mockup_box')
  section1=$('.section1 .mockup_box')
  section2=$('.section2 .mockup_box')
  section3=$('.section3 .mockup_box')
  section4=$('.section4 .mockup_box')
  section5=$('.section5 .mockup_box')
  section.click(function(){
    popup.fadeIn(500)
    $('html, body').animate({scrollTop:0},500)
  })
  
  section1.click(function(){
    popup_img.attr('src','img/portfolio/sinjeon_final.jpg')
    move_btn.attr('onclick',"window.open('https://sujin194.github.io/portfolio/sinjeon/main.html')")
  })
  section2.click(function(){
    popup_img.attr('src','img/portfolio/benefit_final.jpg')
    move_btn.attr('onclick',"window.open('https://sujin194.github.io/portfolio/benefit/index.html')")
  })
  section3.click(function(){
    popup_img.attr('src','img/portfolio/coffeebay_final.jpg')
    move_btn.attr('onclick',"window.open('https://sujin194.github.io/portfolio/coffeebay/index.html')")
  })
  section4.click(function(){
    popup_img.attr('src','img/portfolio/fave_final.jpg')
    move_btn.attr('onclick',"window.open('https://sujin194.github.io/portfolio/fave/main.html')")
  })
  section5.click(function(){
    popup_img.attr('src','img/portfolio/anithing_final.jpg')
    move_btn.attr('onclick',"window.open('https://sujin194.github.io/portfolio/anithing/index.html')")
  })
  /*웹디자인 팝업창 end*/
  
  /*팝업창 닫기*/
  close_btn.click(function(){popup.fadeOut(500);})
  black_bg.click(function(){popup.fadeOut(500)})
})