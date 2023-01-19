export enum PokemonType {
    Fire = "fire",
    Water = "water",
    Grass = "grass",
    Electric = "electric",
}

export type Pokemon = {
    name: string;
    type: PokemonType;
    description: string;
};

export type Entry = Pokemon & {
    number: number;
}

export let allPokemon: Record<number, Pokemon> = {
    1: {
        name: "Bulbasaur",
        type: PokemonType.Grass,
        description: "It can go for days without eating a single morsel. In the bulb on its back, it stores energy.",
    },
    25: {
        name: "Pikachu",
        type: PokemonType.Electric,
        description: "It keeps its tail raised to monitor its surroundings. If you yank its tail, it will try to bite you.",
    },
};