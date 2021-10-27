const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
      return `a personagem é ${this.nome}`
    }
   }

   const personagemGenerico = personagem.apresentar

   const personagemDefinido = personagemGenerico.bind(personagem)
   console.log(personagemDefinido())
   //a personagem é Princesa Leia