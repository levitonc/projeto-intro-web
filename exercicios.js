// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  
  return num1 + num2
}
 const numeroSomado = soma (1, 2)

// EXERCÍCIO 0B
function imprimeMensagem() {
  
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt('Digite a Altura.'))
  const largura = Number(prompt('digite a largura.'))
    area = altura*largura 
    console.log(area)
  
}
calculaAreaRetangulo(altura, largura)

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt('Digite o Ano Atual.'))
  const anoNascimento = Number(prompt('Digite seu ano de Nascimento'))
  idade = anoAtual - anoNascimento 
  console.log(idade)
  
}
imprimeIdade(anoAtual, anoNascimento)

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
const imc = peso / (altura * altura)
  return imc
  
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Digite seu nome.')
  const idade = prompt('Agora vamos de idade.')
  const email = prompt('e, por ultimo. seu e-mail')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  
}
imprimeInformacoesUsuario(nome, idade, email)




// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt('Digite sua 1/3 cor favorita')
  const cor2 = prompt('digite sua 2/3 cor favorita')
  const cor3 = prompt('digite sua 3/3 cor favorita')
  array = [cor1, cor2, cor3]
  console.log(array)

}
imprimeTresCoresFavoritas(cor1, cor2, cor3)




// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const maiuscula = string.toUpperCase()
  return maiuscula
  
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const meta = custo / valorIngresso
  return meta 

}



// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const comparacao = string1.length === string2.length
  return comparacao

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiro = array[0]
  return primeiro 

}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
 const ultimoItem = array[array.length - 1]
 return ultimoItem
 // O LENGHT CONTA OS ITENS E ELES COMEÇAM A SE CLASSIFICAR POR 0. POR ISSO O MENOS UM MEU DEUSSSS. 
}



// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
const primeiroItem = array[0]
const ultimoItem = array[array.length - 1]
 array[0] = ultimoItem
 array[array.length - 1] = primeiroItem

return array 
}



// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const igualdade = string1.toLowerCase() === string2.toLowerCase()
return igualdade 

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
 let anoAtual = Number(prompt('Digite o ano atual'))
 const anoNascimento = Number(prompt('Digite seu Ano de Nascimento'))
 let anoIdentidade = Number(prompt('Digite o ano de emissão de sua carteira de identidade.'))
// os de vinte anos
     let primeiraCondicao = ((anoAtual - anoNascimento) <= 20 && (anoAtual - anoIdentidade) >= 5) || 
     ((anoAtual - anoNascimento) > 20 && (anoAtual - anoNascimento) <= 50 && (anoAtual - anoIdentidade) >= 10) || 
     ((anoAtual - anoNascimento) > 50 && (anoAtual - anoIdentidade) > 15)

     console.log(primeiraCondicao)
}
checaRenovacaoRG(primeiraCondicao)


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const bissexto = ((ano % 400 === 0) || ((ano % 4 === 0) && (ano % 100 !== 0)))
  return bissexto 


}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt('Você tem mais de 18 anos? Responda com sim ou não.')
  const ensinoMedio = prompt('Você possui ensino médio completo? Responda com sim ou não')
  const disponibilidade = prompt('Voce possui disponibilidade exclusiva durante os horários do curso? Responda com sim ou não')
 
  let validade = (idade === 'sim') && (ensinoMedio === 'sim') && (disponibilidade === 'sim')
  console.log(validade) 


}
checaValidadeInscricaoLabenu(validade)

