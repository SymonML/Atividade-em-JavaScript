const { createElement } = require("react");

function verificar(){
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var formAno = document.getElementById("txtano");
    var resp = document.getElementById("res");

    if(formAno.value.length == 0 || Number(formAno.value) > anoAtual){
        window.alert("[ERROR] TUDO ERRADO, VAI EMBORA OU TENTA DNV!!!");
    }
    else{
        var formSex = document.getElementsByName("rdsx");
        var idade = anoAtual - Number(formAno.value);
        var genero = '';
        var img = document.createElement("img");
        img.setAttribute("id", "foto")
        if(formSex[0].checked){
            genero = "Homem";
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute("src", "bebe.homem.jpg");
            }
            else if(idade < 25){
                //jovem
                img.setAttribute("src", "jovem.homem.jpg");
            }
            else if(idade < 50){
                //adulto
                img.setAttribute("src", "homem.adulto.jpg");
            }
            else{
                // idoso
                img.setAttribute("src", "idoso .omem.jpg");
            }
        }
        else if(formSex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribujovemte("src", "bebe.mulher.jpg");
            }
            else if(idade < 25){
                //jovem
                img.setAttribute("src", "jovem.mulher.jpg");
            }
            else if(idade < 50){
                //adulto
                img.setAttribute("src", "mulher.adulto.jpg");
            }
            else{
                // idoso
                img.setAttribute("src", "idoso.mulher.jpg");
            }
        }
        resp.style.textAlign = "center";
        resp.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        resp.appendChild(img);
    }
}