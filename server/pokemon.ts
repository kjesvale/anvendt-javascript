import pokemons from "../data/pokemon.json";

export type PokemonType = "fire" | "water" | "grass" | "electric";
export type Pokemon = {
    number: number;
    name: string;
    type: PokemonType;
    description: string;
    image: string;
};

export function getInitialPokemons(): Record<number, Pokemon> {
    const initialPokemons: Record<number, Pokemon> = {};

    pokemons.map((pokemon) => {
        initialPokemons[pokemon.number] = pokemon as Pokemon;
    });

    return initialPokemons;
}
