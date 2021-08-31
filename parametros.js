// parametros de função


//function soma(numero1, numero2) {
//   return numero1 + numero2
//}

//console.log(soma(2, 2))
//console.log(soma(236, 122))

// parametros x argumentos 

function soma(numero1, numero2) {
    return numero1 + numero2
}

function multiplica(numero1,  numero2 = 10) {
    return numero1 * numero2
}


console.log(multiplica(soma(4, 5)))