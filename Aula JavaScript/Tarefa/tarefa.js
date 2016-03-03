function gerarListener(){
	var obj={contador: 0};
	var listeners=[];
	obj.executar = function(){
		obj.contador++;
		var evento = {"contador": obj.contador};
		for(c=0;c<listeners.length;c++){
			listeners[c](evento);
		}
		return evento.contador;
	}
	obj.adicionarOuvinte = function(func){
		listeners.push(func);
	}
	return obj;
}

var contadorObserver = gerarListener();

var listener = function(evento){
	console.log("1º ouvinte"+evento.contador);
}
contadorObserver.adicionarOuvinte(listener);

var listener = function(evento){
	console.log("2º ouvinte"+evento.contador);
}
contadorObserver.adicionarOuvinte(listener);

contadorObserver.executar();
contadorObserver.executar();
contadorObserver.executar();
contadorObserver.executar();
contadorObserver.executar();