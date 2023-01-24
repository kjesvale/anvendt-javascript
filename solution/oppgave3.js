/* Oppgave 3a) */
export function configureDialog() {
    const pokemonDialogButton = document.getElementById(
        "pokemon-dialog-button"
    );

    const pokemonDialog = document.getElementById("pokemon-dialog");

    pokemonDialogButton.addEventListener("click", () => {
        pokemonDialog.showModal();
    });
}

/* Oppgave 3c) */
export function configureForm() {
    const form = document.getElementById("pokemon-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
    });
}

/* Oppgave 3b) */
export function configureCloseDialog() {
    const pokemonDialog = document.getElementById("pokemon-dialog");

    pokemonDialog.addEventListener("click", (event) => {
        const rectangle = pokemonDialog.getBoundingClientRect();

        if (
            event.clientY < rectangle.top ||
            event.clientY > rectangle.bottom ||
            event.clientX < rectangle.left ||
            event.clientX > rectangle.right
        ) {
            pokemonDialog.close();
        }
    });
}
