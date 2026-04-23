import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Home = async () => {
    const hash = getHash();
    console.log('desde home: ',hash)

    //console.log('hassss: ', hash)
    //if(hash =='/'){
        //location.hash='/page=1';
        //window.location.href=window.location.href;
    //}

    const characters = await getData(hash);//como entro a la pagina principal le muestro todos los personajes
    console.log('characters: ',characters);
    console.log('pagess: ',characters?characters.info.pages:'no tiene paginas');

    const section =()=>{//para renderizar segun si hay algo q mostrar
let view = `
<section id="section-cambio-page">

  <button onclick="cambioPage(${characters ? characters.info.pages : 0}, -1)" 
          class="page-btn prev">
    ←
  </button>

  <div class="page-info">
    Página ${obtenerNumeroDePagina(hash)}
  </div>

  <button onclick="cambioPage(${characters ? characters.info.pages : 0}, 1)" 
          class="page-btn next">
    →
  </button>

</section>
`;
        return view;
    }

    /* const view = `
    <nav class="nav-botones" >
            <div style="display: inline;">
                <!-- Agregar un campo de entrada de texto -->
                <input type="text" id="textInput" placeholder="Buscar personaje" value=>
                <!-- Agregar un botón para ejecutar una acción -->
                <button " onclick="setValorDeUnParametroDelHash('name', textInput.value);">Enviar</button>
            </div>


            <div>
                <p style="display: inline;">Género:</p>
                <input type="button" value="Hombre" onclick="setValorDeUnParametroDelHash('gender', 'male');" class="${activarColorBoton(hash, 'gender','male')? 'activar':''}">
                <input type="button" value="mujer" onclick="setValorDeUnParametroDelHash('gender', 'female');" class="${activarColorBoton(hash, 'gender','female')? 'activar':''}">
                <input type="button" value="desconocido" onclick="setValorDeUnParametroDelHash('gender', 'unknown');" class="${activarColorBoton(hash, 'gender','unknown')? 'activar':''}">
            </div>

            <div>
                <p style="display: inline;">Estado:</p>
                <input type="button" value="vivo" onclick="setValorDeUnParametroDelHash('status', 'Alive');" class="${activarColorBoton(hash, 'status','Alive')? 'activar':''}">
                <input type="button" value="muerto" onclick="setValorDeUnParametroDelHash('status', 'Dead');" class="${activarColorBoton(hash, 'status','Dead')? 'activar':''}">
                <input type="button" value="desconocido" onclick="setValorDeUnParametroDelHash('status', 'unknown');" class="${activarColorBoton(hash, 'status','unknown')? 'activar':''}">
            </div>


            <div>
                <p style="display: inline;">Especie:</p>
                <input type="button" value="Humano" onclick="setValorDeUnParametroDelHash('species', 'Human');" class="${activarColorBoton(hash, 'species','Human')? 'activar':''}">
                <input type="button" value="Alien" onclick="setValorDeUnParametroDelHash('species', 'Alien');" class="${activarColorBoton(hash, 'species','Alien')? 'activar':''}">
                <input type="button" value="Robot" onclick="setValorDeUnParametroDelHash('species', 'Robot');" class="${activarColorBoton(hash, 'species','Robot')? 'activar':''}">
                <input type="button" value="desconocido" onclick="setValorDeUnParametroDelHash('species', 'unknown');" class="${activarColorBoton(hash, 'species','unknown')? 'activar':''}">
            </div>
    </nav>

    ${characters && characters.info.pages>1?section():''}

    <div class="Characters">
    ${
      characters
        ? characters.results.map(character => `
            <article class="Character-item" id="Characters-item">
                <a href="#/character/${character.id}" class=${cambioDeClaseSegunStatus(character.status)}>
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                    <p>${character.species}</p>
                </a>
            </article>
        `).join('')
        : '<div class="nada-para-mostrar">No hay personajes disponibles</div>'
    }
  </div>

  ${characters && characters.info.pages>1?section():''}

    `; */
    
const view = `
    <nav class="filters">
    
      <div class="filter-search">
        <input value="${obtenerValueDeParametroDelHash(hash,'name')}" type="text" id="textInput" placeholder="Buscar personaje...">
        <button onclick="setValorDeUnParametroDelHash('name', textInput.value)">
          Buscar
        </button>
      </div>
    
      <div class="filter-group">
        <span>Género</span>
        <div class="chips">
          <button class="chip ${activarColorBoton(hash,'gender','male')?'active':''}" onclick="setValorDeUnParametroDelHash('gender','male')">Hombre</button>
          <button class="chip ${activarColorBoton(hash,'gender','female')?'active':''}" onclick="setValorDeUnParametroDelHash('gender','female')">Mujer</button>
          <button class="chip ${activarColorBoton(hash,'gender','unknown')?'active':''}" onclick="setValorDeUnParametroDelHash('gender','unknown')">?</button>
        </div>
      </div>
    
      <div class="filter-group">
        <span>Estado</span>
        <div class="chips">
          <button class="chip ${activarColorBoton(hash,'status','Alive')?'active':''}" onclick="setValorDeUnParametroDelHash('status','Alive')">Vivo</button>
          <button class="chip ${activarColorBoton(hash,'status','Dead')?'active':''}" onclick="setValorDeUnParametroDelHash('status','Dead')">Muerto</button>
          <button class="chip ${activarColorBoton(hash,'status','unknown')?'active':''}" onclick="setValorDeUnParametroDelHash('status','unknown')">?</button>
        </div>
      </div>
      
      <div class="filter-group">
        <span>Especie</span>
        <div class="chips">
          <button class="chip ${activarColorBoton(hash,'species','Human')?'active':''}" onclick="setValorDeUnParametroDelHash('species','Human')">Humano</button>
          <button class="chip ${activarColorBoton(hash,'species','Alien')?'active':''}" onclick="setValorDeUnParametroDelHash('species','Alien')">Alien</button>
          <button class="chip ${activarColorBoton(hash,'species','Robot')?'active':''}" onclick="setValorDeUnParametroDelHash('species','Robot')">Robot</button>
          <button class="chip ${activarColorBoton(hash,'species','unknown')?'active':''}" onclick="setValorDeUnParametroDelHash('species','unknown')">?</button>
        </div>
      </div>
                <div class="filter-actions">
        <button onclick="limpiarFiltros()" class="clear-btn">
          Limpiar filtros
        </button>
      </div>
    </nav>

${characters && characters.info.pages>1?section():''}

<div class="Characters">
  ${
    characters
      ? characters.results.map(character => `
          <article class="Character-item">
              <a href="#/character/${character.id}" class="${cambioDeClaseSegunStatus(character.status)}">
                  <img src="${character.image}" alt="${character.name}">
                  <h2>${character.name}</h2>
                  <p>${character.species}</p>
              </a>
          </article>
      `).join('')
      : '<div class="nada-para-mostrar">No hay personajes disponibles</div>'
  }
</div>

${characters && characters.info.pages>1?section():''}
`;
    return view;
}

export default Home;
