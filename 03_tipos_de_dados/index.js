let maquina = {
  material: "Aço inox",
  equipamento: ['motor', 'esteira', 'clilindro'],
  vaiMontada: false,
  numerodeMotores: 1,
};

console.log(maquina);
console.log(maquina.material);
console.log(maquina.equipamento);

for (let i = 0; i < maquina.equipamento.length; i++) {
  console.log(maquina.equipamento[i])
}

if (maquina.vaiMontada == false) {
  console.log("O comprador precisa montar a máquina");
}