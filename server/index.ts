import express from "express";
import { getInitialPokemons, Pokemon } from "./pokemon";

const app = express();
const port = 3000;
const pokemons = getInitialPokemons();

/* Enable file serving from public folder */
// app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/pokemon", (_, res) => {
    const pokemonsSortedByNumber = Array.from(Object.values(pokemons)).sort(
        (pokemon, otherPokemon) => pokemon.number - otherPokemon.number
    );

    res.json(pokemonsSortedByNumber);
});

app.get("/api/pokemon/:id", (req, res) => {
    const index = parseInt(req.params.id);
    const pokemon = pokemons[index];

    if (pokemon) {
        res.json(pokemon);
    } else {
        res.status(404).send(`Entry #${index} was not found.`);
    }
});

app.post("/api/pokemon", (req, res) => {
    try {
        const pokemon = req.body as Pokemon;
        const paddedNumber = String(pokemon.number).padStart(3, "0");

        pokemons[pokemon.number] = {
            ...pokemon,
            image: `https://www.serebii.net/xy/pokemon/${paddedNumber}.png`,
        };

        const message = `Stored pokemon entry #${pokemon.number}, the ${pokemon.type} type pokemon «${pokemon.name}»!`;

        console.log(message);
        res.status(201).send(message);
    } catch (e) {
        const message = `Klarte ikke å lagre pokemon fordi «body» var på feil format.`;

        console.log(message);
        res.status(403).send(message);
    }
});

app.listen(port, () => {
    console.log(`Pokédex-server kjører på http://localhost:${port}`);
});
