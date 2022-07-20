// const nota = 67;
// para efeito de teste, vou deixar a nota variavel, com isso faço multiplos testes de uma única vez

let nota;

nota = 89; //resposta esperada: caso 1
if(nota >= 80){
  //caso 1
  console.log("Parabéns, você foi aprovada(o)!");
}
if(nota < 80 && nota > 60){
  //caso 2
  console.log("Você está na nossa lista de espera");
}
else if(nota < 60){
  //caso 3
  console.log("Você foi reprovada(o)");
}

nota = 67; //resposta esperada: caso 2
if(nota >= 80){
  //caso 1
  console.log("Parabéns, você foi aprovada(o)!");
}
if(nota < 80 && nota > 60){
  //caso 2
  console.log("Você está na nossa lista de espera");
}
else if(nota < 60){
  //caso 3
  console.log("Você foi reprovada(o)");
}

nota = 57; //resposta esperada: caso 3
if(nota >= 80){
  //caso 1
  console.log("Parabéns, você foi aprovada(o)!");
}
if(nota < 80 && nota > 60){
  //caso 2
  console.log("Você está na nossa lista de espera");
}
else if(nota < 60){
  //caso 3
  console.log("Você foi reprovada(o)");
}