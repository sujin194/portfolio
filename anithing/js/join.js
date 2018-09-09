jQuery(function($){
  userId=$('#userId');
  userPw=$('#userPw');
  userPw_chk=$('#userPw_chk');
  null_txt=$('.null_txt');
  
  if(userId.val()=="" || userId.val()==null){
    userId.focus();
    null_txt.eq(0).text("아이디를 입력해주세요");
  }else{
    null_txt.eq(0).text("");
  }
  if(userPw_chk.val()=="" || userPw_chk.val()==null){
    userPw_chk.focus();
    userPw_chk.on('keyup',function(){
      if(userPw.val()==userPw_chk.val()){
        null_txt.eq(2).css({'color':'#00f'});
        null_txt.eq(2).text("비밀번호가 일치합니다")
      }else{
        null_txt.eq(2).css({'color':'#f00'});
        null_txt.eq(2).text("비밀번호가 다릅니다")
      }
    })
    
  }else{
    null_txt.eq(1).text("");
  }
  
})