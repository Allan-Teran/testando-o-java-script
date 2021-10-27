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
        },
        {
            nome: "Bia Andrade",
            parentesco: "irmã",
            dataNasc:"08/08/2001"
        }],
    saldo: 100,

    depositar: function(valor){
        this.saldo += valor
    }
}

let relatorio = "";

for(let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue
    } else {
        relatorio += `
        ${info} ==> ${cliente[info]}`
    }
    
}

console.log(relatorio);