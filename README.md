# Anvendt Javascript

En workshop for frontendprogrammet til Bekk.

Målet med workshopen er å lære seg konsepter innen Javascript; som DOM-en, hendelser, asynkronitet og nettverkskall. Og samtidig lage en aldri så liten [Pokédex](https://github.com/kjesvale/anvendt-javascript/blob/main/assets/screenshots/register-pokemon.png)!

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

## Oppgave 2: Manipulering av HTML

I denne oppgaven skal vi bruke Javascript og DOM-en til å manipulere HTML-en på nettsiden vår.

### 2a) En pokemon

Bruk Javascript til å opprette følgende struktur i HTML.

```html
<li class="pokemon-entry">
    <div class="pokemon-info">
        <h2>Bulbasaur</h2>
        <p>It can go for days without eating a single morsel. In the bulb on its back, it stores energy.</p>
    </div>
    <img src="https://www.serebii.net/xy/pokemon/001.png" alt="Image of Bulbasaur" />
</div>
```

<details>
<summary>🗝 Løsningsforslag</summary>

```js
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
```

</details>


### 2b) Flere pokemons!

Filen `/assets/pokemon.json` inneholder en liste med flere pokemons.

✍️ Bruk koden fra forrige oppgave og lag en funksjon `addPokemon(pokemon, container)` som oppretter et pokemon-element og legger den til i container-elementet. Bruk funksjonen til å bygge opp en pokedex basert på JSON-listen.

💡 Du kan importere JSON-filen med `import`-syntaksen, gitt at du har lenket til Javascript-koden din med `<script type="module">`. Da vil koden din behandles som en [Javascript-modul](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

<details>
<summary>🗝 Løsningsforslag</summary>

```js
import pokemon from "../../assets/pokemon.json";

populatePokemonList();

export function populatePokemonList() {
    const pokemonList = document.getElementById("pokemon-list");

    pokemon.forEach((pokemon) => {
        renderPokemon(pokemon, pokemonList);
    });
}

export function renderPokemon(pokemon, container) {
    console.log("Adding pokemon", pokemon.name);

    const pokemonNode = document.createElement("li");
    pokemonNode.classList.add("pokemon-entry");

    const pokemonTitleNode = document.createElement("h2");
    pokemonTitleNode.innerText = pokemon.name;

    const pokemonDescNode = document.createElement("p");
    pokemonDescNode.innerText = pokemon.description;

    const pokemonImgNode = document.createElement("img");
    pokemonImgNode.src = pokemon.image;
    pokemonImgNode.alt = `Image of ${pokemon.name}`;

    const pokemonInfoNode = document.createElement("div");
    pokemonInfoNode.classList.add("pokemon-info");
    pokemonInfoNode.appendChild(pokemonTitleNode);
    pokemonInfoNode.appendChild(pokemonDescNode);

    /* Legg info-noden og bilde-noden i pokemon-noden */
    pokemonNode.appendChild(pokemonInfoNode);
    pokemonNode.appendChild(pokemonImgNode);

    /* Til slutt, legg til pokemon-noden i listen over pokemons */
    container.appendChild(pokemonNode);
}
```

</details>

## Oppgave 3: Hendelser og skjemaer

Til de neste oppgavene trenger vi en server. Den er ferdiglaget, og kan startes i et nytt kommandovindu slik:

```
cd server && npm run start
```

### 3a) Åpne dialog

HTML-dokumentet inneholder et skjema for å registrere nye pokemons og sende dem til serveren, men dette er foreløbig skjult bak en dialog.

✍️ Lag en knapp som åpner dialogen når du trykker på knappen.

⚠️ Obs! Vi bruker fremdeles ikke serveren i appen vår, så registrerte pokemons vil foreløbig ikke dukke opp i listen.

<details>
<summary>🗝 Løsningsforslag</summary>

Over dialogen i HTML-strukturen:

```html
<button id="pokemon-dialog-button">New pokemon</button>
```

I Javascript:

```js
// index.js
configureDialog();

export function configureDialog() {
    const pokemonDialogButton = document.getElementById(
        "pokemon-dialog-button"
    );

    const pokemonDialog = document.getElementById("pokemon-dialog");

    pokemonDialogButton.addEventListener("click", () => {
        pokemonDialog.showModal();
    });
}
```

</details>

### 3d) Stopp submit-hendelsen

Når du registrerer en pokemon i skjemaet, sendes du av gårde til URL-en i `method`-attributten til form-elementet. Dette fungerer greit i tradisjonelle webservere, men vår server er bare et API! Den produserer ikke HTML i seg selv, så siden du lander på ser veldig spartansk ut.

✍️ Vi ønsker å forbedre brukeropplevelsen med Javascript. Uten å endre på HTML-strukturen, stopp submit-hendelsen slik at brukeren forblir på nettsiden etter man har klikket på registreringsknappen.

<details>
<summary>🗝 Løsningsforslag</summary>

```js
configureForm();

export function configureForm() {
    const form = document.getElementById("pokemon-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
    });
}
```

</details>

### 3c) Bonusoppgave: Lukk modalen

Du kan lukke en dialog ved å trykke på Escape. Men vi ønsker i tillegg å lukke modalen når brukeren trykker utenfor modalets omkrets.

✍️ Lukk modalen når bruker trykker utenfor modalen.

<details>
<summary>🗝 Løsningsforslag</summary>

```js
configureCloseDialog();

export function configureCloseDialog() {
    const pokemonDialog = document.getElementById("pokemon-dialog");

    pokemonDialog.addEventListener("click", (event) => {
        const rectangle = pokemonDialog.getBoundingClientRect();

        if (
            event.clientY < rectangle.top ||
            event.clientY > rectangle.bottom ||
            event.clientX < rectangle.left ||
            event.clientX > rectangle.right
        ) {
            pokemonDialog.close();
        }
    });
}
```

</details>

## Oppgave 4: Serverkommunikasjon med Javascript

Nå skjer det ingenting når vi registrerer en ny pokemon. La oss gjøre noe med det!

### 4a) Lagre pokemons på serveren

<details>
<summary>🗝 Løsningsforslag</summary>

```js
const form = document.getElementById("pokemon-form");
const dialog = document.getElementById("pokemon-dialog");

handleFormSubmit();

export function handleFormSubmit() {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const pokemon = Object.fromEntries(formData);

        registerPokemon(pokemon);
    });
}

async function registerPokemon(pokemon) {
    console.log("formdata", pokemon);

    const response = await fetch("/api/pokemon", {
        method: "POST",
        body: JSON.stringify(pokemon),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        window.alert(await response.text());

        dialog.close();
        form.reset();
    }
}
```

</details>

### 4b) Hent pokemons fra serveren

Bruke Fetch til å hente data fra serveren. Tegn opp dataen med funksjonen fra oppgave 2.

<details>
<summary>🗝 Løsningsforslag</summary>

```js
const pokemonList = document.getElementById("pokemon-list");

populatePokemonsFromServer();

export async function populatePokemonsFromServer() {
    const response = await fetch("/api/pokemon");
    const pokemons = await response.json();

    // Fjern alt fra listen
    pokemonList.textContent = "";

    // Legg til pokemons fra server
    pokemons.forEach((pokemon) => {
        renderPokemon(pokemon, pokemonList);
    });
}
```

</details>