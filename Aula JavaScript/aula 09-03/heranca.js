function Pessoa(){
	this.nome = "Alec";
}

Pessoa.prototype={
	cumprimentar: function(){ 
		return 'Olá, meu nome é ' + this.nome;
	}
};

function Homem(){
	this.sexo='Masculino';
	Pessoa.call(this);
}
var HomemPrototype = new Pessoa();
HomemPrototype.atividade= function(){
		return this.nome+' é do sexo '+this.sexo+'. Portanto, joga futebol';
};
Homem.prototype = HomemPrototype;
HomemPrototype.cumprimentar = function(){return '(aperto de mão) Meu nome é '+this.nome;}

var alec = new Homem();
alec.nome='Alec';
var beatriz = new Pessoa();
beatriz.nome ='Beatriz';

console.log(alec.nome);
console.log(alec.cumprimentar());

console.log(beatriz.nome);
console.log(beatriz.cumprimentar());

// console.log(alec.idade);
// console.log(beatriz.idade);

//Pessoa.prototype.idade = 33;
alec.idade=19;
beatriz.idade=19;

console.log(alec.idade);
console.log(beatriz.idade);

console.log(alec);
console.log(beatriz);

//function f(a,b){
//	console.log(this);
//	console.log(a+b);
//}

// f('a','b');
// var contexto = {nome:'Contexto'};
// f.call(contexto,'A','B');
// f.apply(contexto,['alpha','bravo']);

// function Pessoa2(obj){
// 	if(obj===undefined){
// 		õbj={};
// 	}
// }