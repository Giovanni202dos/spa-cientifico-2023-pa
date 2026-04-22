
function setValorDeUnParametroDelHash(a,b){
    console.log('a y b',b)
}



document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('miFormulario');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const valorBuscado = formulario.elements.loquequierebuscar.value;

        miFuncionParaProcesar(valorBuscado);
    });

    function miFuncionParaProcesar(valor) {
        console.log('Valor capturado:', valor);
        // Aquí puedes realizar cualquier acción adicional con el valor capturado
    }
});

/*
GET https://rickandmortyapi.com/api/character/1
GET https://rickandmortyapi.com/api/character/?name=Rick
GET https://rickandmortyapi.com/api/character/?gender=Male
GET https://rickandmortyapi.com/api/character/?name=Rick&gender=Male

 */