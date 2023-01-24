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
    res.json(pokemons);
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
    const pokemon = req.body as Pokemon;
    const message = `Stored pokemon entry #${pokemon.number}, the ${pokemon.type} type pokemon «${pokemon.name}»!`;

    console.log(message);

    pokemons[pokemon.number] = pokemon;
    res.status(201).send(message);
});

app.listen(port, () => {
    console.log(`Pokédex-server kjører på http://localhost:${port}`);
});
