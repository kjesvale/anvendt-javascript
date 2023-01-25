import allPokemons from "../assets/pokemon.json";

export function populateList() {
    const list = document.getElementById("pokemon-list");

    allPokemons.forEach((pokemon) => {
        renderPokemon(pokemon, list);
    });
}

export function renderPokemon(pokemon, list) {
    console.log("Rendering pokemon", pokemon.name);

    // Opprett elementene med riktige attributter
    const entry = document.createElement("li");
    entry.className = "pokemon-entry";

    const name = document.createElement("h2");
    name.innerText = pokemon.name;

    const description = document.createElement("p");
    description.innerText = pokemon.description;

    const info = document.createElement("div");
    info.className = "pokemon-info";

    const image = document.createElement("img");
    image.src = pokemon.image;
    image.alt = `Image of ${pokemon.name}`;
    image.loading = "lazy";

    // Sett alle elementene sammen
    info.appendChild(name);
    info.appendChild(description);
    entry.appendChild(info);
    entry.appendChild(image);

    list.appendChild(entry);
}
