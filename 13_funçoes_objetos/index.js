function criarPessoa(nome) {
  return{
    nome: nome
  }
}

let pessoa1 = criarPessoa('JulioPaschoal');
let pessoa2 = criarPessoa('JeiseMantovani');

console.log(pessoa1.nome);
console.log(pessoa2.nome);
