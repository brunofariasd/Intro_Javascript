var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    
    paciente = montaPaciente(form);
    errors = validaPaciente(paciente);

    if (errors.length > 0){
        exibeMensagensErro(errors);
        return;
    }

    adicionaPaciente(montaPacienteTr(paciente));
    form.reset();
});

function montaPaciente(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    }

    return paciente;
}

function validaPaciente(paciente){
    
    var errors = [];

    if (paciente.nome.length == 0 || paciente.nome.length > 50) errors.push('Nome Invalido');
    if (paciente.peso.length == 0 || paciente.peso < 1 || paciente.peso > 250) errors.push('Peso Invalido');
    if (paciente.altura.length == 0 || paciente.altura <= 0.50 || paciente.altura >= 2.50) errors.push('Altura Invalida');
    if (paciente.gordura.length == 0 || paciente.gordura <= 0 || paciente.gordura > 70) errors.push('Gordura Invalida');

    return errors;
}

function exibeMensagensErro(errors){

    ulErrors = document.querySelector('#listErrors');
    ulErrors.innerHTML = ""

    errors.forEach(function(erro){
        
        liErro = document.createElement('li');
        liErro.textContent = erro;

        ulErrors.appendChild(liErro);
    })
}

function montaPacienteTr(paciente){

    var pacienteTr = document.createElement('tr');

    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = calculaImc(alturaTd.textContent, pesoTd.textContent);

    nomeTd.classList.add('info-nome');
    pesoTd.classList.add('info-peso');
    alturaTd.classList.add('info-altura');
    gorduraTd.classList.add('info-gordura');
    imcTd.classList.add('info-imc');

    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function adicionaPaciente(pacienteTr){

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function calculaImc(altura, peso){

    return (peso / (altura*altura)).toFixed(2)
}