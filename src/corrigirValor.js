// ## Corrigir Valor Numérico **(1 ponto)**

// **Enunciado:**

// Crie a função corrigirValor, que recebe um valor e tenta convertê-lo para número. Se não for possível, retorne `"Valor inválido"`.

function corrigirValor(valor) {
  console.log(typeof(valor));
  if(typeof(valor) == String){
    valorConvertido = Number(valor)
    if (typeof(valorConvertido) == String){
      return "Valor inválido"
    }else{
      valorConvertido = Number(valor)
      return valorConvertido
    }
  }else{
    return valor
  }
}
console.log((corrigirValor('42')));

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { corrigirValor };