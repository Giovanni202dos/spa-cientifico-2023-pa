import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Character = async () => {
    const character = await getData(getHash());
    const view = `
<div class="character-page">

  <div class="character-container">

    <!-- CARD IZQUIERDA -->
    <div class="character-main-card">
      <img src="${character.image}" alt="${character.name}">
      <h2>${character.name}</h2>
      <span class="status ${character.status.toLowerCase()}">${character.status}</span>
    </div>

    <!-- INFO DERECHA -->
    <div class="character-info-card">

      <div class="info-block">
        <h3>Información</h3>
        <p><strong>Especie:</strong> ${character.species}</p>
        <p><strong>Género:</strong> ${character.gender}</p>
        <p><strong>Ubicación:</strong> ${character.location.name}</p>
      </div>

      <div class="info-block">
        <h3>Episodios</h3>
        <ul class="episode-list">
          ${character.episode.map(ep => `
            <li>
              <a href="${ep}" target="_blank">${ep}</a>
            </li>
          `).join('')}
        </ul>
      </div>

    </div>

  </div>

</div>
`;
    return view;
}

export default Character;
