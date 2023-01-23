/* Zoom pokemons på hover */
pokemonImgNode.addEventListener("mouseenter", () => {
    pokemonImgNode.classList.add("enlarge");
});

pokemonImgNode.addEventListener("mouseleave", () => {
    pokemonImgNode.classList.remove("enlarge");
});

/* Vis og skjul skjema */
const toggleFormButton = document.getElementById("toggle-form-button");
const newPokemonContainer = document.getElementById("new-pokemon-container");

toggleFormButton.addEventListener("click", (event) => {
    if (newPokemonContainer.classList.contains("hidden")) {
        newPokemonContainer.classList.remove("hidden");
    } else {
        newPokemonContainer.classList.add("hidden");
    }
});
