class Cliente {
    constructor(nome,email,cpf,saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    exibirSaldo(){
        console.log(this.saldo);
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoup){
        super(nome,email,cpf,saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoupanca(valor){
        this.saldoPoup += valor
    }
}

const andre = new ClientePoupanca("Andre", "andre@email.com", "11133355577", 100, 200);

console.log(andre)

andre.depositar(50);
andre.depositarPoupanca(100);

console.log(andre)