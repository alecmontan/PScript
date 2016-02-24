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
console.log("null==undefined"+null==undefined);
console.log("null===undefined"+null===undefined);
console.log("'0'==0", '0'==0);
console.log("'0'===0", '0'===0);

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
	if(a === undefined){
		a = 3;
	}
	console.log('a = ' + a);
	console.log('b = ' + b);
	console.log('a + b = ' +(a + b));
	console.log(arguments);
}

f();
f(1);
f(1, 2);
f(1, 2, 3, 4);

var obj={};
console.log(obj.nome);
var obj={'nome': 'renzo'};
console.log(obj.nome);
var obj={'nome': 'renzo', 1:2};
console.log(obj['nome']);
console.log(obj[1]);
var obj={'nome': 'renzo', 1:2, 'hobbies':['Futebol', 'Video Game'], 'pai': {'nome': 'Pai'}};
console.log(obj);
console.log(f());