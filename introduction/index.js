//console.log envia a informação para o log do local server, seja ela number, string ou bool
//console.log("Eu gosto de Programar");
//console.log("é realmente divertido!");

//window.alert abre uma caixa de alerta no local server
//window.alert("Eu realmente gosto de programação!") 

//let define uma variável seja ela number, string ou bool
let FirstName = "Luiz"; //String
let LastName = "Oliveira"; //String
let FullName = FirstName + " " + LastName; //String
//caso somar uma string, ela vai somar o numero literal por exemplo: FirstName + 1 = Luiz1 (essa regra vale para números)
let age = (17); //Number
let gay = false; //bool
/* ou
let age;
age = 18;
Dependendo da situação é melhor usar em linhas diferentes
*/
age = age + 1;
//variaveis de numero podem ser alteradas (somadas e subtraidas) diferente de strings

console.log ("Olá", FirstName);
console.log ("Você tem", age, "Anos");
console.log ("gay =", gay);
//Para apresentar o que siginifica uma variavel, colocar uma string antes se refirindo o que significa o "false" que vai aparecer no console

document.getElementById ("p1").innerHTML = "Olá " + FullName;
document.getElementById ("p2").innerHTML = "Você tem " + age + " Anos";
document.getElementById ("p3").innerHTML = "Você é gay?: " + gay;
/*document.getElementbyid ("id colocado no html").innerHTML faz com que a informação da variável seja vinculada ao ID colocado no HTML
fazendo com que o mesmo possa ser utilizado para qualquer função dentro do HTML (utilizei <p> neste caso)*/