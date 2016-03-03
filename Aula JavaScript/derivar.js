function derivar(func){
	var deltax=0.0000000001;

	function derivar(x){
		(func(x+deltax)-func(x))/ deltax
	}

	return derivar;
}

function reta(x){
	return 2*x+3;
}

var retaDerivada = derivar(reta);

console.log(retaDerivada(0));
console.log(retaDerivada(1));
