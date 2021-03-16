var buscarPaciente = document.querySelector('#buscar-paciente');

buscarPaciente.addEventListener('click', function(){

    var request = new XMLHttpRequest();

    request.open('get', 'https://api-pacientes.herokuapp.com/pacientes');

    request.addEventListener('load', function(){
        
        var pacientes = JSON.parse(request.responseText);

        pacientes.forEach(function(paciente){
            adicionaPaciente(montaPacienteTr(paciente));
        })
    })

    request.send();
})