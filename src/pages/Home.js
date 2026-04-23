import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Home = async () => {
  const hash = getHash();

  const characters = await getData(hash);

  const section = () => {
    return `
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
  };

  const view = `
    <nav class="filters">
    
      <div class="filter-search">
        <input value="${obtenerValueDeParametroDelHash(hash,'name')}" 
               type="text" 
               id="textInput" 
               placeholder="Buscar personaje...">
               
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

    ${characters && characters.info.pages > 1 ? section() : ''}

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

    ${characters && characters.info.pages > 1 ? section() : ''}
  `;

  return view;
};

export default Home;
