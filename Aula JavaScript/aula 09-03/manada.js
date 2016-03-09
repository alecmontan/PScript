function Manada(){
	this.animal=[];
}
Manada.prototype={
	adicionar: function(animalRecebido){
		this.animal.push(animalRecebido);
	}
}
function Cachorro(){
	this.barulho='Au';
}
function Gato(){
	this.barulho='Miau';	
}


function ManadaVirgula(){
	this.barulhos = function(){
		//for(c=0;c<)
	}
}
function ManadaSustenidaDupla(){
	this.animal=[];	
}
ManadaVirgula.prototype = new Manada();
ManadaSustenidaDupla.prototype = new Manada();

var ani = new Cachorro();
console.log(ani.barulho);




/*
var manadaVirgula = new ManadaVirgula();
var manadaSustenidaDupla = new ManadaSustenidaDupla();
var animais = [new Cachorro(), new Gato()];

animais.forEach(function (animal) {
  manadaVirgula.adicionar(animal);
  manadaSustenidaDupla.adicionar(animal);
});

// Print Esperado: Au, Miau
console.log(manadaVirgula.barulhos());

// Print Esperado: Au# Au# Miau# Miau
console.log(manadaSustenidaDupla.barulhos());*/