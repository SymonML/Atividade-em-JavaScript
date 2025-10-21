var idade = 18;
console.log(`Você tem ${idade} anos`);
if ( idade < 16){
    console.log("Usuário não vota");
}
else if(idade < 18 || idade > 65){
     console.log("Voto opicional");
}
else{
    console.log("O voto para este usuário é obrigatório!");
}