
function getHashh(){
    const hash =window.location.hash;
    return hash;
}
function setValorDeUnParametroDelHash(keyy, valor){
    // Obtiene el hash actual de la URL
    // Obtén el hash actual de la URL
    const hash = getHashh();

    // Analiza el hash para extraer los parámetros
    const params = new URLSearchParams(hash.slice(1)); // Elimina el símbolo '#' y crea un objeto URLSearchParams
    //console.log('hhhh: ', params);
    // Define el nuevo valor que deseas para el parámetro 'name'
    const nuevoValor = valor;

    // Verifica si el parámetro 'name' está presente
    if (params.has(keyy)) {
    // Si el parámetro 'name' ya existe, actualiza su valor
    params.set(keyy, nuevoValor);
    } else {
    // Si el parámetro 'name' no existe, agrégalo
    params.append(keyy, nuevoValor);
    }

    // Convierte los parámetros nuevamente en una cadena con barras en lugar de porcentaje
    let nuevoHash = '#';
    params.forEach((value, key) => {
        key.includes('page')?value=1:value;//para que vuelva a la pagina uno
        nuevoHash += `${key}=${value}&`;
    });

    // Elimina el último "&" si es necesario
    if (nuevoHash.endsWith('&')) {
    nuevoHash = nuevoHash.slice(0, -1);
    }

    // Actualiza la URL con el nuevo hash
    window.location.hash = nuevoHash;

}



function obtenerNumeroDePagina(hash){
    //console.log('entroooooo;: ',hash);
    let numero=1;
    const params = new URLSearchParams(hash.slice(1));
    //console.log('entroooooo;: ',params);
    params.forEach((value, key) => {
        if(key.includes('page')){
            //console.log('yeaaaaaa: ', value);
            numero=value;
            return ;
        } 
    });
    return numero;
}
function cambioPage(cantidadPage,haciaDonde){
    // Obtén la URL actual
    const url = window.location.href;

    // Encuentra la posición del símbolo "?" en la URL
    const indexOfQuestionMark = url.indexOf('?');

    // Verifica si se encontró el símbolo "?" en la URL
    if (indexOfQuestionMark !== -1) {
        // Obtiene la parte de la URL que contiene los parámetros de consulta
        const queryString = url.slice(indexOfQuestionMark + 1);

        // Crea un objeto URLSearchParams a partir de la cadena de consulta
        const params = new URLSearchParams(queryString);

        const paginaActual=params.get('page');
        // Cambia el valor de la clave "page" (por ejemplo)
        if (haciaDonde==1) {//quiere ir avanzar
            console.log('quiere avanzar');
            if (paginaActual<cantidadPage) {
                console.log('se puede avanzar');
                params.set('page', parseInt(paginaActual)+1); // Cambia "page" a un nuevo valor
                
            }else{
                console.log('no se puede avanzar');
                //document.getElementsByClassName('avanzar-boton').style.display='none';

                // Obtén todos los elementos con la clase "retroceder-boton"
                const botones = document.querySelectorAll('.avanzar-boton');

                // Aplica un estilo a cada elemento
                botones.forEach((boton) => {
                boton.style.display = 'none';
                });
            }
            
        }else{//quiere retroceder
            console.log('quiere retroceder'); 

            if (paginaActual>1) {
                console.log('se puede retroceder');
                params.set('page', parseInt(paginaActual)-1); // Cambia "page" a un nuevo valor
                
            }else{
                console.log('no se puede retroceder');
                // Obtén todos los elementos con la clase "retroceder-boton"
                const botones = document.querySelectorAll('.retroceder-boton');

                // Aplica un estilo a cada elemento
                botones.forEach((boton) => {
                boton.style.display = 'none';
                });
            }

        }
        console.log(params);

        // Convierte los parámetros nuevamente en una cadena con barras en lugar de porcentaje
        let nuevoHash = '#/character/?';
        params.forEach((value, key) => {
            nuevoHash += `${key}=${value}&`;
        });

        // Elimina el último "&" si es necesario
        if (nuevoHash.endsWith('&')) {
        nuevoHash = nuevoHash.slice(0, -1);
        }
        //console.log('nuevoHash: ',nuevoHash);
        // Actualiza la URL con el nuevo hash
        window.location.hash = nuevoHash;
            
        }
}

function cambioDeClaseSegunStatus(status){
    if (status=='Alive') {
        return "vivo";
        
    }else if(status=='Dead'){
        return "muerto";
    }else{
        return "desconocido";
    }
}

function activarColorBoton(hash, boton, valorBoton){
    //console.log('entroooooo;: ',hash);
    let activar=false;
    const params = new URLSearchParams(hash.slice(1));
    //console.log('entroooooo;: ',params);
    params.forEach((value, key) => {
        if(key.includes(boton) && value==valorBoton){
            //console.log('yeaaaaaa: ', value);
            activar=true;
            return ;
        } 
    });
    return activar;
}

function cambioAparaiencia(){
    console.log('cambiode apariencia');
    let contenedor=document.getElementById('Main')
    if (contenedor) {
        contenedor.id='Main-black';
        document.getElementById('boton-apariencia').innerHTML='white'
    }else{
        document.getElementById('Main-black').id='Main';//lo volvemos a white
        document.getElementById('boton-apariencia').innerHTML='black'
    }
}

function limpiarFiltros() {
    location.hash = '#/character/?page=1';
}

function obtenerValueDeParametroDelHash(hash,nameParametro){
    //console.log('entroooooo;: ',hash);
    let data='';
    const params = new URLSearchParams(hash.slice(1));
    //console.log('entroooooo;: ',params);
    params.forEach((value, key) => {
        if(key.includes(nameParametro)){
            data=value;
            return ;
        } 
    });
    return data;
}
