export function configureDialog() {
    const newPokemonDialogButton = document.getElementById(
        "new-pokemon-dialog-button"
    );

    const newPokemonDialog = document.getElementById("new-pokemon-dialog");

    newPokemonDialogButton.addEventListener("click", () => {
        newPokemonDialog.show();
    });
}
