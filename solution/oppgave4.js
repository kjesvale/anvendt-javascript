import { populateListFromAPI } from "./oppgave3";

const form = document.getElementById("pokemon-form");
const dialog = document.getElementById("pokemon-dialog");

/* Oppgave 4a)  */
export function handleFormSubmit() {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        /* Oppgave 4b) */
        const formData = new FormData(form);
        const pokemon = Object.fromEntries(formData);

        registerPokemon(pokemon);
    });
}

/* Oppgave 4b) */
async function registerPokemon(pokemon) {
    const response = await fetch("http://localhost:3000/api/pokemon", {
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
