let pessoa = {
  nome: 'JulioPaschoal',
}

pessoa.idade = 36;

pessoa.falar = function () {
  console.log('Olá, eu tenho '+ this.idade +' anos');
}

pessoa.falar();