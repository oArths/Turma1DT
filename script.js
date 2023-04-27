// PEGAR ELEMENTO PELO ID SE USA O "DOCUMENT", JA QUE O HTML ENTENE QUE O "BODY" DO HTML SE CHAMA "DOCUMENT"
function somar(){
    // Entradas
    var numero1 = parseInt(document.getElementById('num1').value);
    var numero2 = parseInt(document.getElementById('num2').value);

    // Processamento
    var soma = numero1 + numero2;

    // Saida
    document.getElementById('resultado').innerHTML = 'Soma = ' +soma;

}