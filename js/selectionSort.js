$(document).ready(function () {

    var dados = {};
    $.getJSON('../JSON/relatorio.json', function (json) {
        dados = json;

        var inicio = new Date().getTime();

        selectionSort(json);

        var fim = new Date().getTime();
        var tempo = fim - inicio;
        convertido = new String(tempo);

        montarTabela();

        alert("Tempo para SelectionSort ≅  " + convertido + " ms");

    });

    
    
    var montarTabela = function() {
        var student = '';
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

    function selectionSort(inputArr) { 
        let n = inputArr.length;
            
        for(let i = 0; i < n; i++) {
            // Finding the smallest number in the subarray
            let min = i;
            for(let j = i+1; j < n; j++){
                if(inputArr[j].nome_do_aluno_diplomado < inputArr[min].nome_do_aluno_diplomado) {
                    min=j; 
                }
             }
             if (min != i) {
                 // Swapping the elements
                 let tmp = inputArr[i].nome_do_aluno_diplomado; 
                 inputArr[i].nome_do_aluno_diplomado = inputArr[min].nome_do_aluno_diplomado;
                 inputArr[min].nome_do_aluno_diplomado = tmp;      
            }
        }
        return inputArr;
    }
    
});


