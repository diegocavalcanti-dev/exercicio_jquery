$(document).ready(function() {
    $('#form-tarefa').on('submit', function(e) {
        e.preventDefault(); 

        const tarefa = $('#nome-tarefa').val();

        const novoItem = $('<li></li>').text(tarefa).hide();
        $('#lista-tarefas').append(novoItem);
        novoItem.fadeIn(1000);

        $('#nome-tarefa').val('');
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
