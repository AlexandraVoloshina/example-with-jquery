
$(document).ready(function() {
//Вывод подкатегорий
	let category = document.getElementById('AddUl');

	category.onclick = function(event) {

		$(category.children).click(
			function(){
			$('#contentProduct').children().each(function() {
			$(this).addClass('notActive');
			});
		});

      let target = event.target;
      let numberId = (target.id).match(/\d+/);
      let addClass = ".showText" + +numberId;
	  $(addClass).removeClass('notActive');
  }
//Вывод товаров
   let category_product = document.getElementById('contentProduct');
  category_product.onclick = function(event) {

		$(category_product.children).click(
			function(){
			$('#rightcol .content').children().each(function() {
			$(this).addClass('notActive');
			});
		});

      let target = event.target;
      let numberId = (target.id).match(/\d+/);
      let addClass = ".product" + numberId;
	  $(addClass).removeClass('notActive');

//Обработчик кнопки купить"
	$(".buy").click(function(){
		$(".forma").removeClass('notActive');
	});

//Обработчик кнопки оформления заказа
 	$(".sendOrder").click(function(){
		let fio = document.getElementById('fio');
	  	let nova_poshta = document.getElementById('nova_poshta');
	  	let tovar = document.getElementById('tovar');
	  	let comment = document.getElementById('comment');

	  	if ((fio.value === "") || (nova_poshta.value === "") || (tovar.value === "") || (comment.value === "")){
	  		alert("Необходимо заполнить все поля для оформления заказа!!!");
	  	}
	  	else {
	  		alert("Заказ отправлен");
	  	}
	});

  }

});


