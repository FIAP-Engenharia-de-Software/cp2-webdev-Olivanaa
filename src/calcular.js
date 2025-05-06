// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  if(typeof(num1) == String || typeof(num2) == String){
    return "Erro: parâmetros inválidos"
  }else{
    console.log(operador)
    if(operador == "+" || operador == "-" || operador == "*" || operador == "/"){
      if (operador == "+"){
        resultado = num1 + num2
        console.log(resultado)
        return resultado  
      }
      if (operador == "-"){
        resultado = num1 - num2
        console.log(resultado)
        return resultado
      }
      if (operador == "*"){
        resultado = num1 * num2
        console.log(resultado)
        return resultado
      }
      if (operador == "/"){
        if (num2 == 0){
          return "Erro: divisão por zero"
        }else{
          resultado = num1 / num2
          console.log(resultado)
          return resultado
        }      
    }else{
      return "Erro: operação inválida"     
    }
  }
}
}

console.log(calcular(1, "a", "+"));
console.log(typeof("a"));




//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };