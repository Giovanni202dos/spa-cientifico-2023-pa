
const API = 'https://rickandmortyapi.com/api'

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


  