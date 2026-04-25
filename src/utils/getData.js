
/*const API = 'https://rickandmortyapi.com/api'*/
/* si estoy ejecutando en local no uso el archivo api que cree para vercel(si no uso esa api como proxy me salta error en vercel) */
const API = window.location.hostname === "localhost"
  ? "https://rickandmortyapi.com/api"
  : "/api/rm"

const getData = async (hash) => {
    //const apiURL = id ? `${API}${id}` : API
    const apiURL = API+hash;
    console.log(apiURL);

    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        if(data.error){//por si no esncuentra el personaje
            console.log('es nulllllll');
            return null
        }
        return data

    } catch (error) {
        console.log('Fetch Error, datos no encotrado', error)
        
    }
}

export default getData


  
