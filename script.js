
$(document).ready(function() {
	$(".Add1, .Add2, .Add3, .Add4, .Add5").click(function(){
		$('#centercol .content').children().each(function() {
			$(this).addClass('notActive');
		});
	});
	$(".Add1").click(function(){
		$(".showText1").removeClass('notActive');
	});
	$(".Add2").click(function(){
		$(".showText2").removeClass('notActive');
	});
	$(".Add3").click(function(){
		$(".showText3").removeClass('notActive');
	});
	$(".Add4").click(function(){
		$(".showText4").removeClass('notActive');
	});
	$(".Add5").click(function(){
		$(".showText5").removeClass('notActive');
	});

	$(".showProduct1, .showProduct2, .showProduct3").click(function(){
		$('#rightcol .content').children().each(function() {
			$(this).addClass('notActive');
		});
	});
	$(".showProduct1").click(function(){
		$(".product1").removeClass('notActive');
	});
	$(".showProduct2").click(function(){
		$(".product2").removeClass('notActive');
	});
	$(".showProduct3").click(function(){
		$(".product3").removeClass('notActive');
	});
	$(".showProduct4").click(function(){
		$(".product4").removeClass('notActive');
	});
	$(".showProduct5").click(function(){
		$(".product5").removeClass('notActive');
	});
	$(".showProduct6").click(function(){
		$(".product6").removeClass('notActive');
	});
	$(".showProduct7").click(function(){
		$(".product7").removeClass('notActive');
	});
	$(".showProduct8").click(function(){
		$(".product8").removeClass('notActive');
	});
	$(".showProduct9").click(function(){
		$(".product9").removeClass('notActive');
	});
	$(".showProduct10").click(function(){
		$(".product10").removeClass('notActive');
	});
	$(".showProduct11").click(function(){
		$(".product11").removeClass('notActive');
	});
	$(".showProduct12").click(function(){
		$(".product12").removeClass('notActive');
	});
	$(".showProduct13").click(function(){
		$(".product13").removeClass('notActive');
	});
	$(".showProduct14").click(function(){
		$(".product14").removeClass('notActive');
	});
	$(".showProduct15").click(function(){
		$(".product15").removeClass('notActive');
	});


	$(".buy").click(function(){
		$(".forma").removeClass('notActive');
	});

});


