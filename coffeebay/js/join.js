
jQuery(function($){
  $("#s_header").load("s_header.html","#s_header");
    /*휴대폰 인증 팝업*/
  all_chk=$('#agree_all_chkbox');
  step_box=$('.step_box li');
  step01_btn=$('.join_step01 button');
  step02_ok_btn=$('.join_step02 button').eq(0);
  step03_ok_btn=$('.join_step03 button').eq(0);
  step04_ok_btn=$('.join_step04 button').eq(0);
  
  all_chk.click(function(){
    //check 했을 때
    if(all_chk.prop("checked")){
    //화면 chk박스 체크
    $("input[type=checkbox]").prop("checked",true);
    }else{//check 안했을 때 //화면 chk박스 체크 해제
    $("input[type=checkbox]").prop("checked",false);
    }
  })
  step01_btn.on('click',function(){
    window.open("phone_popup.html","","width=389px,height=645px,left=500,top=100");
    $('.join_step02').css({'display':'block'});
    $('.join_step01').css({'display':'none'});
    step_box.eq(1).addClass('step_on').siblings().removeClass('step_on');
  })
  step02_ok_btn.on('click',function(){
    $('.join_step03').css({'display':'block'});
    $('.join_step02').css({'display':'none'});
    step_box.eq(2).addClass('step_on').siblings().removeClass('step_on');
  })
  step03_ok_btn.on('click',function(){
    $('.join_step04').css({'display':'block'});
    $('.join_step03').css({'display':'none'});
    step_box.eq(3).addClass('step_on').siblings().removeClass('step_on');
  })
  step04_ok_btn.on('click',function(){
    location.href='login.html'
  })  
  
    //한글막기 스크립트!
    //style="ime-mode:disabled;"
    $(".only_eng").keyup(function(e) { 
	if (!(e.keyCode >=37 && e.keyCode<=40)) {
		var v = $(this).val();
		$(this).val(v.replace(/[^a-z0-9]/gi,''));
	}
    
});

    
})