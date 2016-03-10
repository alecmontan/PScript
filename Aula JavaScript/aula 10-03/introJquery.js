//console.log(jQuery);
//console.log($);
$(document).ready(function(){
	$('#cabecalho').length;
	var $cabecalhos = $('h1');
	var $cabecalho1 = $('#cabecalho1');
	var $elementosComFilhos = $('.filhos');
	var $divs = $('div');
	var filhoCount = 0;
	$('#esconder').click(function(event){
		//console.log(event);
		$cabecalhos.hide();
	});
	$('#mostrar').click(function(event){
		$cabecalho1.show();
	});
	$('#slide-up').click(function(event){
		$cabecalho1.slideUp();
	});
	$('#slide-down').click(function(event){
		$cabecalho1.slideDown();
	})
	$('#slide-toggle').click(function(event){
		$cabecalhos.slideToggle();
	})
	$('#remover').click(function(event){
		$elementosComFilhos.remove();
	})
	$('#adicionar').click(function(event){
		++filhoCount;
		$divs.append('<h3>Filho'+filhoCount+'</h2>');
	})
});
