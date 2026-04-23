const Inicio = async () => {
  const view = `
    <div id="Main">

      <div class="inicio">
        <div id="contenedor-main-1">

          <div >
            <a href="#/character/?page=1" class="inicio-boton">
              Entra y conoce los personajes de Rick and Morty
            </a>
          </div>

        </div>
      </div>

    </div>
  `;
  return view;
}

export default Inicio;
