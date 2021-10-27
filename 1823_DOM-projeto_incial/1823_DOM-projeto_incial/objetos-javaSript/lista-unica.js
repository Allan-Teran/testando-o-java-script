const clientes = [
    {
        nome:"Allan",
        idade:20,
        cpf:"12345678901",
        dependentes: [{
                nome:"Bia" ,
                parentesco: "esposa" ,
                dataNasc: "03/06/2001"
            }],
    },
    
    {
        nome:"Davi",
        idade:20,
        cpf:"09876543212",
        dependentes:[{
            nome:"isadora",
            parentesco:"esposa",
            dataNasc:"16/07/2001"
        }],
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes];

console.log(listaDependentes);