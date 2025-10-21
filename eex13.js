var agora = new Date();
var hora = agora.getHours();
console.log(`Agora são exatamente ${hora} horas`);

if(hora < 12){
    console.log("Bom dia flor do dia");
}
else if(hora >= 12 && hora < 18){
    console.log("Boa tarde!");
}
else if(hora < 23){
    console.log("Boa noite, vai dormir!");
}
else{
    console.log("É madrugada já cara, vai dormir!")
}