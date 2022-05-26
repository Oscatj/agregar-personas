const personas = [
    //new Persona ('Juan', 'Perez'),
    //new Persona ('Ana', 'Castillo'), asi se haria de manera estatica
]

function mostrarPersona(){
    let texto = '';
    for (let persona of personas){
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona (){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if(nombre.value != '' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value);
        personas.push(persona);
        mostrarPersona();
    }
    else {
        alert ('Debes llenar todos los campos');
    }
}