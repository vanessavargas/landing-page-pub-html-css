//Caixas de diálogo
//alert("Olá desenvolvedor!")
//var nome = prompt("Digite o seu nome:")
//console.log(nome)
//var teste = confirm ("Estou aprendendo JavaScript")
//console.log (teste)

//Concatenação
//var mensagem = '<h2>' + 'Bem vindo' + nome + 'ao curso de JS' + '</h2>'
//document.write (mensagem)

//Template String
//var mensagem = `<p> ${nome} este é um exemplo de Template String </p>`
//document.write (mensagem)

//Tipo de variáveis

//Tipo string
var texto = "Conjunto de caracteres";
console.log(texto);
console.log(typeof texto);

//Tipo number
//var numero = 1234 //numero positivo ou negativo
//console.log (numero)
//console.log(typeof(numero))
//var numeroFracionario = 3.1415
//console.log(numeroFracionario)
//console.log(typeof(numeroFracionario))

//Tipo boleano
// var teste = true //false (verdadeiro ou falso)
// console.log (teste)
// console.log (typeof(teste))

//Teste null e undefined
// var teste2 = null
// console.log (teste2)
// var teste3
// console.log(teste3)

//Controle de fluxo com JS
// if (/*condição*/ true || false){
//   //Bloco de código dentro das chaves
//   //para a condição verdadeira
// }

// if(true || false){
// Primeira condição verdadeira
// }else{
// se for false
// }

// //multiplos testes de condição
// if(true || false){
// //Primeira condição verdadeira
// }else if{
//   //condição 2
// }else{
//   //Caso todas as opções forem falsas
// }

//Operadores de comparação
//== -> Igualdade

// if(2 == '2'){
//   document.write('Verdadeiro')
// }else{
// document.write('Falso')
// }

// Diferença !=
// if(2 != '2'){
//   document.write('Verdadeiro')
// }else{
// document.write('Falso')
// }

// < (menor), <=(menor ou igual), >(maior) e >= (maior ou igual

//Operadores lógicos
// and(&&)
// or (||) - pelo menos uma condição precisa ser verdadeira
// var login = prompt("Digite o Login:")
// console.log(login)
// var senha = prompt ('Digite a senha:')
// console.log(senha)

// if (login == 'david' && senha == 1234){
//   document.write('verdadeiro')
// }else{
//   document.write('false')
// }

// or (||) - pelo menos uma condição precisa ser verdadeira
// var paulo = confirm('Professor Paulo está online')
// console.log(paulo)
// var david = confirm ('Professor David está online')
// console.log(david)

// if (paulo == true || david == true){
//   document.write('verdadeiro (tem aula online)')
// }else{
//   document.write('false (não tem aula online)')
// }

//Operadores Aritméticos

//soma (+), subtração (-), multiplicação (*) e divisão (/)

// var num1 = 9
// var num2 = 2

// document.write(`O resto da divisão de ${num1} por ${num2} é igual a ${num1 % num2}`)

//Para digitar no campo aberto:
// var num1 = prompt ('Digite um número')
// var num2 = prompt ('Digite um número')

//Converter String para number
//parseInt(variável)
//parseFloat(variável)
//Number (variável)

// num1 = parseFloat(num1)
// num2 = parseFloat(num2)

// document.write(`A soma de ${num1} e ${num2} é igual a ${num1 + num2}`)

//Funções
function nomeDaFuncao(argumento1, argumento2, argumentoN) {
  //bloco de código da função
  return true; // o retorno é opcional
}

function soma(num1, num2) {
  var resultado = num1 + num2;
  //  return resultado
  document.write(resultado);
}

function olaMundo() {
  document.write("Olá Mundo!<br>");
}

//soma (14,5)
olaMundo();
olaMundo();

$("#slideshow>").hide();

setInterval(function () {
  $("#slideshow>div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo("#slideshow");
}, 3000);

//fadeOut
$(document).ready(function () {
  $("button").click(function () {
    $("#div1").fadeOut();
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut(5000);
  });
});

//pra baixo
$(document).ready(function () {
  $("#flip").click(function () {
    $("#panel").slideDown("slow");
  });
});
