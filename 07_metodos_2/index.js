
let pessoa = {
  nome: 'Julio Paschoal',
  getNome: function () {
    console.log(" O nome é " + this.nome);
  },
  setNome: function (novoNome) {
    this.nome = novoNome;
  }
}

pessoa.getNome();
pessoa.setNome('Teste');
pessoa.getNome();