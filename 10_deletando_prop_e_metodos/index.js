let pessoa = {
  nome: 'JulioPaschoal',
}

pessoa.idade = 36;

pessoa.falar = function () {
  console.log('Olá');
}

delete pessoa.idade;
delete pessoa.falar;