var i=2;
function f(){
	var i=1;
}
f();
console.log(i);
console.log('Hello Worlds'+i);
i='Wsabrh';
console.log(i);
console.log(null);
console.log(undefined);
console.log(null==undefined);
console.log(null===undefined);
console.log('0'==0);
console.log('0'===0);

var lista=[1,2,'uogiugig9ig'];
console.log(lista);

for(var i=0; i<lista.length;++i){
	console.log(lista[i]);
}

lista.push(8)//adiciona no final da lista
console.log(lista);
lista.unshift(0);//adiciona no inicio da lista
console.log(lista);
lista.splice(1,3);//.splice('a partir de que elemento quer deletar','até que elemento quer deletar')
console.log(lista);

function f(a,b){
	console.log('soma ' +(a + b));
	console.log('a ' + a);
	console.log('b ' + b);
}

f(1, 2);
f();
f(1)