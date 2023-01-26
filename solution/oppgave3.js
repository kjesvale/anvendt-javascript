import { renderPokemon } from "./oppgave2";

const list = document.getElementById("pokemon-list");

/* Oppgave 3a) */
export function configureDialogButton() {
    const button = document.getElementById("dialog-button");
    const dialog = document.getElementById("pokemon-dialog");

    button.addEventListener("click", () => {
        dialog.showModal();
    });
}

/* Oppgave 3b) */
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

/* Oppgave 3c) */
export function closeDialogOnClickOutside() {
    const dialog = document.getElementById("pokemon-dialog");

    dialog.addEventListener("click", (event) => {
        const rectangle = dialog.getBoundingClientRect();

        if (
            event.clientY < rectangle.top ||
            event.clientY > rectangle.bottom ||
            event.clientX < rectangle.left ||
            event.clientX > rectangle.right
        ) {
            dialog.close();
        }
    });
}
