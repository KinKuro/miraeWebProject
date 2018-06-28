function checkInput(){
	var id = document.getElementById('id').value;
	var pw = document.getElementById('pw').value;
	var pwcf = document.getElementById('pwcf').value;
	var email = document.getElementById('email').value;

	var regId = /^[a-zA-Z0-9]{6,12}$/;
	var regPw = /^[a-zA-Z].[a-zA-Z0-9]{7,11}$/;
	var regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9_.]+$/;

	if(id.match(regId)){
		$('#check_id').html("");
	}else{
		$('#check_id').html("아이디는 영문,숫자를 합쳐서 6~12글자여야 합니다.");
	}

	if(!pw.match(regPw)){
		$('#check_pw').html("비밀번호의 맨 앞자리는 반드시 영문이어야 하며<br>영문,숫자를 합쳐서 8~12글자여야 합니다.");
	}else{
		$('#check_pw').html("");
	}

	if(!(pw == pwcf)){
		$('#check_pwcf').html("비밀번호의 확인란은 비밀번호와 같아야 합니다.");
	}else{
		$('#check_pwcf').html("");
	}	

	if(!regEmail.test(email)){
		$('#check_email').html("이메일의 형식을 지켜야 합니다.");
	}else{
		$('#check_email').html("");
	}	

	if($('#check_id').html()=="" &&
	   $('#check_pw').html()=="" &&
	   $('#check_pwcf').html()=="" &&
	   $('#check_email').html()=="" ){
		alert('올바른 가입 양식입니다.');
	}	
}

function clearInput(){
	$('#check_id').html("");
	$('#check_pw').html("");
	$('#check_pwcf').html("");
	$('#check_email').html("");
}

function backPage(){
	history.go(-1);
}