import pokemon from "../../data/pokemon.json";

const pokemonList = document.getElementById("pokemon-list");

pokemon.forEach((pokemon) => {
    addPokemon(pokemon, pokemonList);
});

function addPokemon(pokemon, element) {
    console.log("Adding pokemon", pokemon.name);

    const pokemonNode = document.createElement("li");
    pokemonNode.classList.add("pokemon-entry");

    /* Opprett tittel, beskrivelse og bilde */
    const pokemonTitleNode = document.createElement("h2");
    pokemonTitleNode.innerText = pokemon.name;

    const pokemonDescNode = document.createElement("p");
    pokemonDescNode.innerText = pokemon.description;

    const pokemonImgNode = document.createElement("img");
    pokemonImgNode.src = pokemon.image;
    pokemonImgNode.alt = `Image of ${pokemon.name}`;

    /* Legg tittel og beskrivelse i en ny div for informasjonen */
    const pokemonInfoNode = document.createElement("div");
    pokemonInfoNode.classList.add("pokemon-info");
    pokemonInfoNode.appendChild(pokemonTitleNode);
    pokemonInfoNode.appendChild(pokemonDescNode);

    /* Legg info-noden og bilde-noden i pokemon-noden */
    pokemonNode.appendChild(pokemonInfoNode);
    pokemonNode.appendChild(pokemonImgNode);

    /* Til slutt, legg til pokemon-noden i listen over pokemons */
    element.appendChild(pokemonNode);
}
