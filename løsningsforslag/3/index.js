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

configureDialog();

/* Oppgave 3b) */

/* Oppgave 3c) */
export function configureForm() {
    const form = document.getElementById("pokemon-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
    });
}

configureForm();

/* Bonus: Zoom pokemons på hover */
pokemonImgNode.addEventListener("mouseenter", () => {
    pokemonImgNode.classList.add("enlarge");
});

pokemonImgNode.addEventListener("mouseleave", () => {
    pokemonImgNode.classList.remove("enlarge");
});
