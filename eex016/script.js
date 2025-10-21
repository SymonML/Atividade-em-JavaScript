let adc = document.getElementById("num");
let list = document.getElementById("FLista");
let res = document.getElementById("res");
let val = [];

function NumeroAdc(n) {
    return Number(n) >= 1 && Number(n) <= 100;
}

function ListaAdc(n, val) {
    return val.indexOf(Number(n)) != -1;
}

function adicionar() {
    if (NumeroAdc(adc.value) && !ListaAdc(adc.value, val)) {
        val.push(Number(adc.value));
        let item = document.createElement("option");
        item.text = `Valor ${adc.value} adicionado!`;
        list.appendChild(item);
        res.innerHTML = ""; // limpa o resultado se houver novo valor
    } else {
        window.alert("[ERROR] OS VALORES NÃO FORAM ADICIONADOS. TENTE NOVAMENTE!");
    }

    adc.value = "";
    adc.focus();
}

function Finalizar() {
    if (val.length == 0) {
        window.alert(`Digite os valores antes de finalizar`);
    } else {
        let total = val.length;
        let maior = val[0];
        let menor = val[0];
        let soma = 0;
        let media = 0;

        for (let pos in val) {
            soma += val[pos];
            if (val[pos] > maior) {
                maior = val[pos];
            }
            if (val[pos] < menor) {
                menor = val[pos]; // corrigido aqui (antes era "manor")
            }
        }

        media = soma / total;

        res.innerHTML = ""; // limpa antes de adicionar os resultados
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
    }
}
