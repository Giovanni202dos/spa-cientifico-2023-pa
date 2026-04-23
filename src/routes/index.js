import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import About from '../pages/About';
import Inicio from '../pages/Inicio';

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/getResolveRoutes';


const routes = {
    '/': Inicio,
    '/character': Home,
    '/:id': Character,
    '/contact':"Contact",
    '/about': About,
};

const router = async () => {
    //console.log('router');
    const header = null ||  document.getElementById('header');
    const content = null ||  document.getElementById('content');

    header.innerHTML= await Header();//renderizamos el Header
    let hash = getHash();   //obtengo la url despues del hash
    console.log('ff', hash)

    let route = await resolveRoutes(hash);  //resuelvo la ruta(por si ingreso alguna mal)
    console.log('ff2', route)
    let render = routes[route] ? routes[route] : Error404;  //la busco en las rutas guardadas
    content.innerHTML = await render(); //renderizo

};

export default router;

window.addEventListener('popstate', () => {
    // Aquí debes manejar el cambio de ruta y cargar el contenido correspondiente.
    console.log('esta leyendo un cambio....');
    router();
  });

function setValorDeUnParametroDelHash(){
    console.log('holaaa');
    return null;
}
