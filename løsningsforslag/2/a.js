/* Opprett pokemon-noden som et listeelement */
const pokemonNode = document.createElement("li");
pokemonNode.classList.add("pokemon-entry");

/* Opprett tittel, beskrivelse og bilde */
const pokemonTitleNode = document.createElement("h2");
pokemonTitleNode.innerText = "Bulbasaur";

const pokemonDescNode = document.createElement("p");
pokemonDescNode.innerText =
    "It can go for days without eating a single morsel. In the bulb on its back, it stores energy.";

const pokemonImgNode = document.createElement("img");
pokemonImgNode.src = "https://www.serebii.net/xy/pokemon/001.png";
pokemonImgNode.alt = `Image of Bulbasaur`;

/* Legg tittel og beskrivelse i en ny div for informasjonen */
const pokemonInfoNode = document.createElement("div");
pokemonInfoNode.classList.add("pokemon-info");
pokemonInfoNode.appendChild(pokemonTitleNode);
pokemonInfoNode.appendChild(pokemonDescNode);

/* Legg info-noden og bilde-noden i pokemon-noden */
pokemonNode.appendChild(pokemonInfoNode);
pokemonNode.appendChild(pokemonImgNode);

/* Til slutt, legg til pokemon-noden i listen over pokemons */
const pokemonList = document.getElementById("pokemon-list");
pokemonList.appendChild(pokemonNode);
