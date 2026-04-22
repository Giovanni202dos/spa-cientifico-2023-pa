

export const getDataFiltrado = async (key, valor) => {
    const apiURL = API+'$'+key+'='+valor

    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        return data

    } catch (error) {
        console.log('Fetch Error, datos no encotrado', error)
    }
}
export default getDataFiltrado
