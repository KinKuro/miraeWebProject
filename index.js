$(document).ready(function(){

	var mql = matchMedia("(max-width:785px)");

	mql.addListener(function(e){
		if(e.matches){
			$('header #links ul').hide();
		}else{
			$('header #links ul').show();
		}
	});	

	$('header #menu').on('click', function(){
		$('header #links ul').slideToggle('fast');
	});
});