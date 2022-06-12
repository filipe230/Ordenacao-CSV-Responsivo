$(document).ready(function () {
    // FETCHING DATA FROM JSON FILE

    var dados = {};
    $.getJSON('../JSON/relatorio.json', function (json) {
        dados = json;
        //montarTabela();
        //var start = Date.now();
        //const inicio = new Date().getTime()
        // trecho de código que queremos mensurar
        /*json.sort(function(a,b) {
            return a.nome_do_aluno_diplomado < b.nome_do_aluno_diplomado ? -1 : a.nome_do_aluno_diplomado > b.nome_do_aluno_diplomado ? 1 : 0;
        });*/
        var inicio = new Date().getTime();
        //console.time('Tempo Bolha: ');

        bubbleSort(json);
        //console.timeEnd('Tempo Bolha: ');

        //selectionSort(json)
        var fim = new Date().getTime();
        var tempo = fim - inicio;
        convertido = new String(tempo);
        //console.log(tempo);
        //console.log(convertido);

        montarTabela();
        alert("Tempo para BubleSort ≅  " + convertido + " ms");

    });

    
    
    var montarTabela = function() {
        var student = '';
        //alert("Chamou");
        console.log(dados);
        $.each(dados, function (key, value) {

            student += '<tr>';
                student += '<td>' + value.nome_do_aluno_diplomado + '</td>';
    
                student += '<td>' + value.seis_digitos_centrais_do_cpf_do_aluno_diplomado  + '</td>';
    
                student += '<td>' + value.nome_curso_superior + '</td>';
    
                student += '<td>' + value.data_da_expedicao_do_diploma + '</td>';
            
            student += '</tr>';
        });
        $('#table').append(student);

    }

    function bubbleSort(arrayBolha) {
        let n = arrayBolha.length;
        for (let i = 0; i < n - 1; i++){
            for (let j = 0; j < n - i - 1; j++){
                if (arrayBolha[j].nome_do_aluno_diplomado > arrayBolha[j + 1].nome_do_aluno_diplomado) {
                    // troca temp and vetor[i]
                    let temp = arrayBolha[j].nome_do_aluno_diplomado;
                    arrayBolha[j].nome_do_aluno_diplomado = arrayBolha[j + 1].nome_do_aluno_diplomado;
                    arrayBolha[j + 1].nome_do_aluno_diplomado = temp;
                  }
              }
        }
    }
    
});


