function Animal(){
	this.barulho="";
}
Animal.prototype={
	fazerBarulho: function(barulho){
		return barulho;
	}
}
function Cachorro(){
	Animal.call(this);
	this.barulho='Au';
}
function Gato(){
	Animal.call(this);
	this.barulho='Miau';	
}
Cachorro.prototype = new Animal();
Gato.prototype = new Animal();

function Manada(){
	this.animais=[];
}
Manada.prototype={
	adicionar: function(animalRecebido){
		this.animais.push(animalRecebido);
	}
}
function ManadaVirgula(){
	
}
function ManadaSustenidaDupla(){

}
ManadaVirgula.prototype = new Manada();
ManadaVirgula.prototype.barulhos = function(){
	var barulhosStr="";
	for(c=0;c<animais.length;c++){
		if(c<animais.length-1){
			barulhosStr+=(animais[c].barulho+', ');
		}
		else{
			barulhosStr+=(animais[c].barulho);	
		}

	}
	return barulhosStr;
}
ManadaSustenidaDupla.prototype = new Manada();
ManadaSustenidaDupla.prototype.barulhos = function(){
	var barulhosStr="";
	for(c=0;c<animais.length;c++){
		if(c<animais.length-1){
			barulhosStr+=(animais[c].barulho+'# ');
			barulhosStr+=(animais[c].barulho+'# ');
		}
		else{
			barulhosStr+=(animais[c].barulho+'# ');
			barulhosStr+=(animais[c].barulho);
		}
	}
	return barulhosStr;
}
//var cachorro = new Cachorro();
//console.log(cachorro.fazerBarulho(cachorro.barulho));

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
console.log(manadaSustenidaDupla.barulhos());