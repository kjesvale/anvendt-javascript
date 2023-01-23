# Anvendt Javascript

En workshop for frontendprogrammet til Bekk.

## Kom i gang

Klon prosjektet og installer frontend og backend:

```
git clone https://github.com/kjesvale/progressive-enhancement-workshop
cd progressive-enhancement-workshop
npm install
cd server && npm install
```

Prosjektet bygger med _Parcel_, et «no config» byggverktøy. Parcel starter en utviklingsserver med _hot reloading_ slik at nettsiden lastes på nytt hver gang vi gjør en endring i kildekoden.

Start utviklingsserveren:

```
npm run start
cd server && npm run start
```

Nettsiden vil da kjøre på [http://localhost:1234](http://localhost:1234)

## Oppgave 1: Bruk Javascript

Hvis du åpner `src`-mappen, ser du at nettsiden bare består av en HTML-side og litt styling. Vi har med andre ord ingen Javascript, men det kan vi gjøre noe med!

✍️ Lag en Javascript-fil `index.js` som du importerer fra `index.html`. I filen kan du for eksempel logge noe til konsollen.

Prøv å bygge siden for produksjon ved å kjøre `npm run build` i rotmappen. Se på filene som dukket opp i `dist`-mappen – finner du referansen til Javascript-filen fra HTML?

💡 Javascript- og CSS-filene i produksjonsbygget får automatisk en tilfeldig suffix, som endres hver gang innholdet i filene endres. Årsaken til dette er at de lettere kan caches av en filserver.

## Oppgave 2: Document Object-modellen

### 2a)

Bruk Javascript til å opprette følgende struktur i HTML.

```html
<li class="pokemon-entry">
    <div class="pokemon-info">
        <h2>{pokemon.name}</h2>
        <p>{pokemon.description}</p>
    </div>
    <img src="{pokemon.image}" alt="Image of {pokemon.name}" />
</div>
```

Du kan ta utgangspunkt i denne pokemonen:

```js
const pokemon = {
    name: "Bulbasaur",
    description: "It can go for days without eating a single morsel. In the bulb on its back, it stores energy.",
    image: "https://www.serebii.net/xy/pokemon/001.png",
};
```

### 2b)

Bruk koden fra forrige oppgave og lag en funksjon `addPokemon(pokemon, element)` som oppretter et pokemon-element og legger det til i elementet.

I `/data/pokemon.json` finner du en JSON-liste med litt flere pokemon. Bruk funksjonen til å legge alle disse inn i pokedexen.

## Oppgave 3: Hendelser

I CSS-en finnes det en klasse `enlarge` som forstørrer et element. Legg dette klassenavnet på bildene til pokemonene når du hovrer musa over dem, slik at brukeren får se et større bilde.

