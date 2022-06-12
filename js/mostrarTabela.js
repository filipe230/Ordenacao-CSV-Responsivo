$(document).ready(function () {

    var dados = {};
    $.getJSON('../JSON/relatorio.json', function (json) {
        dados = json;
        montarTabela();
    });

    var montarTabela = function() {
        var student = '';
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
    
});


