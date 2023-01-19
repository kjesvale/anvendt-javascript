import express from "express";
import { allPokemon, Entry } from "./pokemon";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/pokemon", (_, res) => {
    res.json(allPokemon);
});

app.get("/api/pokemon/:id", (req, res) => {
    const index = parseInt(req.params.id);
    const pokemon = allPokemon[index]
    
    if (pokemon) {
        res.json(pokemon);
    } else {
        res.status(404).send(`Entry #${index} was not found.`);
    }
});

app.post("/api/pokemon", (req, res) => {
    const entry = req.body as Entry;
    const { number, ...pokemon } = entry;

    const message = `Stored pokemon entry #${number}, the ${pokemon.type} type pokemon «${pokemon.name}»!`;

    console.log(message);

    allPokemon[number] = pokemon;
    res.status(201).send(message);
});

app.listen(port, () => {
    console.log(`Pokédex-server kjører på http://localhost:${port}`);
});