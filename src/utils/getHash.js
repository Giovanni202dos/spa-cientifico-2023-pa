const getHash = () =>{
    //console.log(location);
    const hashWithoutHashSymbol = location.hash.slice(1); // Elimina el "#" al principio
    //console.log('gethash: ',hashWithoutHashSymbol); // Esto mostrará "character/?&page=1&gender=male" en la consola

    return hashWithoutHashSymbol || '/';
}
    

export default getHash;