function Cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function ClientePoupanca(nome,cpf,email,saldo,saldoPoup){
    Cliente.call(this,nome,cpf,email,saldo);
    this.saldoPoup = saldoPoup;
}

const davi = new ClientePoupanca("Davi","55588844477","davi@gmail.com",100,200);

console.log(davi)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

davi.depositarPoup(30);

console.log(davi.saldoPoup)

console.log(Cliente.constructor === Function)