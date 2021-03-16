var inputFiltro = document.querySelector("#filtro-tabela");

inputFiltro.addEventListener('input', function(){

    var pacientes = document.querySelectorAll('.paciente');

    console.log(this.value);    
    if (this.value.length > 0){

        for(i=0; i < pacientes.length; i++){
            
            var nome = pacientes[i].querySelector(".info-nome");

            var exp = new RegExp(this.value, 'i');

            console.log(exp);
            if ( !exp.test(nome.textContent) ){
                pacientes[i].classList.add("invisivel");
            }else{
                pacientes[i].classList.remove("invisivel");
            }
        }
    }else {
        
        for(i=0; i < pacientes.length; i++){
            pacientes[i].classList.remove("invisivel");
        }     
    }
})