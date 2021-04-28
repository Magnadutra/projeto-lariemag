var nome = prompt("Bem Vinda! Esse é o quiz sobre a Laboratória! Qual o seu nome?");

var condi = confirm("Olá " + nome +" deseja continuar com o quiz?"); 

var respostaPrimeira = document.getElementById('primeiro')
var respostaSegundo = document.getElementById('segundo')
var respostaTerceiro = document.getElementById('terceiro')

if (condi == true) {
   
    let quesionsS = prompt ("Em que ano a laboratória começou a formar mulheres? \n 1. 2014 \n 2. 2008 \n 3. 2017  \n digite o numero correto:")
        respostaPrimeira.textContent = '2014'
    //1 Certa
    //2
    //3
    let quesionsF = prompt ("Quantas graduadas? \n 1. 1.000 \n 2. 1.800 \n 3. 2.000  \n digite o numero correto:")
        respostaSegundo.textContent = '1.800'
    //1
    //2 certa
    //3
    let quesionsG = prompt ("Em quantos paises tem uma cede da Laboratória? \n 1.Cinco \n 2.Um \n 3.Seis") 
        respostaTerceiro.textContent = '6'
    //1
    //2
    //3 Certa

} else {
    document.write('obrigado! Encerramos')
}
