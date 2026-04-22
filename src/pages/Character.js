import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Character = async () => {
    const character = await getData(getHash());
    const view = `
    <div class="Characters-inner">
    <article class="Characters-card">
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
    </article>
    <article class="Characters-card">
        <h3>Episodes:</h3>
        <ul>
            ${character.episode.map(episodeUrl => `<li><a href="${episodeUrl}">${episodeUrl}</a></li>`).join('')}
        </ul>
        <h3>Status:</h3>
        <p>${character.status}</p>
        <h3>Species:</h3>
        <p>${character.species}</p>
        <h3>Gender:</h3>
        <p>${character.gender}</p>
        <h3>Last Location:</h3>
        <p>${character.location.name}</p>
    </article>
</div>

    `;
    return view;
}

export default Character;