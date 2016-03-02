function gerarListener(){
	var obj={contador: 0};
	var listeners=[];
	function executar(){
		obj.contador++;
		var evento = {"contador": obj.contador};
	}
	function adicionarOuvinte(func){
		listeners.push(func());
	}
	return obj;
}

var contadorObserver = gerarListener();

var listener = function(evento){
	console.log(evento.contador);
}

contadorObserver.adicionarOuvinte(listener);

contadorObserver.executar();
contadorObserver.executar();
contadorObserver.executar();