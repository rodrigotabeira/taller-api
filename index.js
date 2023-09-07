// Función para obtener datos de los personajes desde la API y crear la función "done"
function getCharacters(done) {
    const results = fetch("https://rickandmortyapi.com/api/character"); // Realiza una solicitud a la API

    results
        .then(response => response.json()) // Convierte la respuesta en formato JSON
        .then(data => {
            done(data); // Llama a la función "done" y pasa los datos obtenidos
        });
}

// Llama a la función "getCharacters" y proporciona una función para manejar los datos
getCharacters(data => {
    // Itera a través de los resultados de personajes y crea elementos HTML para cada uno
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*html*/`
        <article>
            <div class="image-container">
                <img src="${personaje.image}" alt="Personaje"> <!-- Muestra la imagen del personaje -->
            </div>
            <h2>${personaje.name}</h2> <!-- Muestra el nombre del personaje -->
        </article>
        `);

        const main = document.querySelector("main"); // Encuentra el "main" en el documento HTML

        main.append(article); // Agrega los personajes al "main"
    });
});

