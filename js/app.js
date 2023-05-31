

function iniciarApp() {

    const selectCategorias = document.querySelector("#categorias");
    selectCategorias.addEventListener("change", selectCategoria)

    obtenerCategorias();
    
    function obtenerCategorias() {
        const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
        fetch(url)
            .then(response => response.json())
            .then(resultado => mostrarCategorias(resultado.categories))
    }

    function mostrarCategorias(categorias = []) {
        categorias.forEach(categoria => {

            const { strCategory } = categoria;
            const option = document.createElement('option');
            option.value = strCategory;
            option.textContent = strCategory;
            selectCategorias.appendChild(option);            
        })
    }

    function selectCategoria(e) {
        e.preventDefault();
        
        const categoria = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => console.log(resultado));
    }
}

document.addEventListener('DOMContentLoaded', iniciarApp);