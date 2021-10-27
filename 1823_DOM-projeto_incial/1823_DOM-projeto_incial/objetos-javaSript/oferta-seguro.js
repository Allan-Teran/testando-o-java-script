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

function oferecerSeguro (obj){
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

oferecerSeguro(cliente);