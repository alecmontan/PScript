function gerarListener(){
	var obj={contador: 0};
	var listeners=[];
	obj.executar = function(){
		obj.contador++;
		var evento = {"contador": obj.contador};
		return evento.contador;
	}
	obj.adicionarOuvinte = function(func){
		listeners.push(func());
		return func();
	}
	return obj;
}

var contadorObserver = gerarListener();

var listener = function(evento){
	console.log(evento.contador);
}


contadorObserver.adicionarOuvinte(listener);

console.log(contadorObserver.executar());
console.log(contadorObserver.executar());
console.log(contadorObserver.executar());
console.log(contadorObserver.executar());