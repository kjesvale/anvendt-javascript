import { renderPokemon } from "./oppgave2";

const form = document.getElementById("pokemon-form");
const dialog = document.getElementById("pokemon-dialog");
const list = document.getElementById("pokemon-list");

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
    const response = await fetch("/api/pokemon", {
        method: "POST",
        body: JSON.stringify(pokemon),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        dialog.close();
        form.reset();

        populateListFromAPI();
    }
}

/* Oppgave 4b) */
export async function populateListFromAPI() {
    const response = await fetch("/api/pokemon");

    if (response.ok) {
        const pokemons = await response.json();

        // Tøm listen først
        list.textContent = "";

        // Tegn deretter opp pokemons
        pokemons.forEach((pokemon) => {
            renderPokemon(pokemon, list);
        });
    } else {
        console.log("Klarte ikke å hente pokemons fra API-et:", error);
    }
}
