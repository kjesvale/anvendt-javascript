import { renderPokemon } from "./oppgave2";

const form = document.getElementById("pokemon-form");
const dialog = document.getElementById("pokemon-dialog");
const pokemonList = document.getElementById("pokemon-list");

/* Oppgave 4a) */
export function handleFormSubmit() {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const pokemon = Object.fromEntries(formData);

        registerPokemon(pokemon);
    });
}

async function registerPokemon(pokemon) {
    console.log("formdata", pokemon);

    const response = await fetch("/api/pokemon", {
        method: "POST",
        body: JSON.stringify(pokemon),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        window.alert(await response.text());

        dialog.close();
        form.reset();

        populatePokemonListFromServer();
    }
}

/* Oppgave 4b) */
export async function populatePokemonListFromServer() {
    const response = await fetch("/api/pokemon");
    const pokemons = await response.json();

    // Fjern alt fra listen
    pokemonList.textContent = "";

    // Legg til pokemons fra server
    pokemons.forEach((pokemon) => {
        renderPokemon(pokemon, pokemonList);
    });
}
