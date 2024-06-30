$(document).ready(function(){
    $('#form').submit(function(event){
        event.preventDefault();
        
        var Tasknome = $('#nome-tarefa').val().trim();

        if (Tasknome) {
            var taskItem = $('<li></li>').text(Tasknome);
            var removeButon = $('<button class="remove-btn">Remover</button>');

            removeButon.click(function(){
                $(this).parent().remove();
            });

            taskItem.append(removeButon);
            $('#lista-tarefas').append(taskItem);
            $('#nome-tarefa').val('');
        }
    });

    $('#lista-tarefas').on('click', 'li', function(event){
        if (!$(event.target).is('.remove-btn')) {
            $(this).toggleClass('completed');
        }
    });

    $('#limpar').click(function() {
        $('#lista-tarefas').empty();
    });
});