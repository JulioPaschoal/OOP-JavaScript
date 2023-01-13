let pessoa = {
  nome: 'JulioPaschoal',
}

pessoa.idade = 36;

pessoa.falar = function () {
  console.log('Olá');
}

console.log("Eu me chamo " + pessoa.nome + " e tenho "
  + pessoa.idade + " de idade!");