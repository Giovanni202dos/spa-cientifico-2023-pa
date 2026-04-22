import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Inicio = async () => {
    // const hash = getHash();
    // //console.log('hassss: ', hash)
    // if(hash =='/'){
    //     //location.hash='/page=1';
    //     //window.location.href=window.location.href;
    // }

    //const characters = await getData();//como entro a la pagina principal le muestro todos los personajes
    const view = `
        <div class="inicio">
            <div id="contenedor-main-1">

                <div class="inicio-boton">
                    <a href="#/character/?page=1">
                        Bienvenido
                    </a>
                </div>
                
            </div>


        </div>
    `;
    return view;
}

export default Inicio;