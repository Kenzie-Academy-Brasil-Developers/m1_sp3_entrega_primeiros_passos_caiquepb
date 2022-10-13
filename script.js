    //exercício 1

let numero1InteiroExercicio1 = parseInt(prompt("Digite um número inteiro"))
let numero2InteiroExercicio1 = parseInt(prompt("Digite novamente um número inteiro"))

if(numero1InteiroExercicio1 > numero2InteiroExercicio1)
    {alert(`O maior número é ${numero1InteiroExercicio1} e a diferença é ${(numero1InteiroExercicio1-numero2InteiroExercicio1).toString()}`)}
else
    {alert(`O maior número é ${numero2InteiroExercicio1} e a diferença é ${(numero2InteiroExercicio1-numero1InteiroExercicio1).toString()}`)
}

    //exercício 2

let numero1Exercicio2 = parseFloat(prompt("Digite um número"))
let numero2Exercicio2 = parseFloat(prompt("Digite novamente um número"))

if(numero1Exercicio2 === numero2Exercicio2)
    {alert(`O número ${numero1Exercicio2} e o número ${numero2Exercicio2} são iguais`)}
else if(numero1Exercicio2 > numero2Exercicio2)
    {alert(`O maior número é ${numero1Exercicio2}`)}
else// if(numero1Exercicio2 < numero2Exercicio2)
    {alert(`O maior número é ${numero2Exercicio2}`)}

    //exercício 3

let salarioExercicio3 = parseFloat(prompt("Digite um número"))
let prestacaoExercicio3 = parseFloat(prompt("Digite novamente um número"))

if(prestacaoExercicio3>(0.3*salarioExercicio3))
    {alert(`Empréstimo não concedido`)}
else// prestacaoExercicio3<=(0.3*salarioExercicio3))
    {alert(`Empréstimo concedido`)}

    //exercício 4

let numeroExercicio4 = parseInt(prompt("Digite um número"))

if(((numeroExercicio4%3)===0)&&(((numeroExercicio4)%5)===0))
    {alert(`Valor inválido`)}
else if ((numeroExercicio4%3)===0)
    {alert(`Valor divisível por 3`)}
else if ((numeroExercicio4%5)===0)
    {alert(`Valor divisível por 5`)}
else if ((numeroExercicio4%2)===0)
    {alert(`É par`)}
else //if ((numeroExercicio4%2)=!0)
    {alert(`É impar`)}

    //exercício 5

let numeroExercicio5 = parseInt(prompt("Digite um número de 1 a 7"))

if(numeroExercicio5>7||numeroExercicio5===0)
    {alert(`Valor inválido`)}
else if (numeroExercicio5===1)
    {alert(`Domingo`)}
else if (numeroExercicio5===2)
    {alert(`Segunda-feira`)}
else if (numeroExercicio5===3)
    {alert(`Terça-feira`)}
else if (numeroExercicio5===4)
    {alert(`Quarta-feira`)}
else if (numeroExercicio5===5)
    {alert(`Quinta-feira`)}
else if (numeroExercicio5===6)
    {alert(`Sexta-feira`)}
else //if (numeroExercicio5===7)
    {alert(`Sábado`)}

    //exercício 6

let salarioExercicio6 = parseFloat(prompt("Digite o seu salário mensal"))
let reajusteExercicio6 = parseFloat(prompt("Digite o percentual de reajuste a ser atribuído"))

alert(`O salário do funcionário corrigido é de R${salarioExercicio6+(salarioExercicio6*(reajusteExercicio6/100))}`)

    //exercício 7

let valorDolarExercicio7 = parseFloat(prompt("Digite o valor, em dólar, que você deseja converter em real"))
let valorCotacaoExercicio7 = parseFloat(prompt("Digite a cotação do dólar"))

alert(`US$${valorDolarExercicio7} é equivalente a R$${valorDolarExercicio7*valorCotacaoExercicio7} tendo ${valorCotacaoExercicio7} como cotação`)

    //exercício 8

let tipoPulverizacao = parseInt(prompt("Digite o tipo de pulverização que deseja. 1 - Ervas Daninhas, 2 - Gafanhotos, 3 - Broca ou 4 - todos"))
let areaPulverizacao = parseFloat(prompt("Digite a área a ser pulverizada"))

if (tipoPulverizacao===1) {
    if((areaPulverizacao*50)>750){
        if(areaPulverizacao>1000)
        {alert(`O valor ser pago é de R$${((((0.95*areaPulverizacao*50)-750)*0.90)+750)}`)}
        else {alert(`O valor ser pago é de R$${((((areaPulverizacao*50)-750)*0.90)+750)}`)}
    }
    else {alert(`O valor ser pago é de R$${(areaPulverizacao*50)}`)}
}    
else if (tipoPulverizacao===2) {
    if((areaPulverizacao*100)>750){
        if(areaPulverizacao>1000)
        {alert(`O valor ser pago é de R$${((((0.95*areaPulverizacao*100)-750)*0.90)+750)}`)}
        else {alert(`O valor ser pago é de R$${((((areaPulverizacao*100)-750)*0.90)+750)}`)}
    }
    else {alert(`O valor ser pago é de R$${(areaPulverizacao*100)}`)}
}    
else if (tipoPulverizacao===3) {
    if((areaPulverizacao*150)>750){
        if(areaPulverizacao>1000)
        {alert(`O valor ser pago é de R$${((((0.95*areaPulverizacao*150)-750)*0.90)+750)}`)}
        else {alert(`O valor ser pago é de R$${((((areaPulverizacao*150)-750)*0.90)+750)}`)}
    }
    else {alert(`O valor ser pago é de R$${(areaPulverizacao*150)}`)}
}
else if (tipoPulverizacao===4) {
    if((areaPulverizacao*250)>750){
        if(areaPulverizacao>1000)
        {alert(`O valor ser pago é de R$${((((0.95*areaPulverizacao*250)-750)*0.90)+750)}`)}
        else {alert(`O valor ser pago é de R$${((((areaPulverizacao*250)-750)*0.90)+750)}`)}
    }
    else {alert(`O valor ser pago é de R$${(areaPulverizacao*250)}`)}
}
else {alert(`Tipo de pulverização inválida`)}

    //exercício 9

let tempoExercicio9 = parseFloat(prompt("Digite o tempo gasto na viagem"))
let velocidadeExercicio9 = parseFloat(prompt("Digite velocidade durante viagem"))
let distanciaExercicio9 = tempoExercicio9*velocidadeExercicio9
let consumoExercicio9 = distanciaExercicio9/12

alert(`Seu veículo percorreu ${distanciaExercicio9} km a ${velocidadeExercicio9} km/h ${tempoExercicio9}h de viagem e consumiu ${consumoExercicio9.toFixed(2)}l de gasolina`)

    //exercício 10

let valorExercicio10 = parseInt(prompt("Digite o valor da sua prestação"))
let taxaExercicio10 = parseInt(prompt("Digite a taxa da sua prestação"))
let tempoExercicio10 = parseInt(prompt("Digite o tempom, em dias, da sua prestação"))
let prestacaoExercicio10 = valorExercicio10+(valorExercicio10*(taxaExercicio10/100)*tempoExercicio10)

if(tempoExercicio10===0||Number.isInteger(tempoExercicio10)===false)
    {alert(`Valor inválido o tempo de atraso deve ser em dias`)}
else{alert(`R$ ${prestacaoExercicio10}`)}
