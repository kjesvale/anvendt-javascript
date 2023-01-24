/* Zoom pokemons på hover */
pokemonImgNode.addEventListener("mouseenter", () => {
    pokemonImgNode.classList.add("enlarge");
});

pokemonImgNode.addEventListener("mouseleave", () => {
    pokemonImgNode.classList.remove("enlarge");
});
