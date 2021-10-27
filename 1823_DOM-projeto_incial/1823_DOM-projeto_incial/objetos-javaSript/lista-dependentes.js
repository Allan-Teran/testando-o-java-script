const cliente ={
    nome:"Allan",
    idade:20,
    cpf:"12345678901",
    email:"allteran655@gmail.com",
    fone: ["55999998888", "55921213434"],
    dependentes: [{
        nome:"Bia" ,
        parentesco: "esposa" ,
        dataNasc: "03/06/2001"
    }]
}

cliente.dependentes.push({
    nome: "Bia Andrade",
    parentesco: "irmã",
    dataNasc:"08/08/2001"
})

//console.log(cliente)

const maisNova = cliente.dependentes.filter(dependentes => dependentes.dataNasc === "08/08/2001")

console.log(maisNova[0].nome)