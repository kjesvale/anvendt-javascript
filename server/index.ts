import express from "express";
import cors from "cors";
import { getInitialPokemons, Pokemon } from "./pokemon";

const app = express();
const port = 3000;
const pokemons = getInitialPokemons();

/* Enable file serving from public folder */
// app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: "http://localhost:1234",
    })
);

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
        const storedPokemon = {
            ...pokemon,
            image: `https://www.serebii.net/xy/pokemon/${paddedNumber}.png`,
        };

        pokemons[pokemon.number] = storedPokemon;
        const message = `Stored pokemon entry #${pokemon.number}, the ${pokemon.type} type pokemon «${pokemon.name}»!`;
        console.log(message);

        if (req.headers["content-type"] === "application/json") {
            // Responder som et API
            res.status(201).send(storedPokemon);
        } else {
            // Anta at forespørselen kommer fra et form,
            // og redirect tilbake til startsiden
            res.redirect("/");
        }
    } catch (e) {
        const message = `Klarte ikke å lagre pokemon fordi «body» var på feil format.`;

        console.log(message);
        res.status(403).send(message);
    }
});

app.listen(port, () => {
    console.log(`Pokédex-server kjører på http://localhost:${port}`);
});
