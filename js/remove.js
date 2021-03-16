var tabelaPaciente = document.querySelector('#tabela-pacientes');

tabelaPaciente.addEventListener('dblclick', function(event){
    
    event.target.parentNode.classList.add('transitionRemove');

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);    
})