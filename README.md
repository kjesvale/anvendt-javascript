# Anvendt Javascript

En workshop for frontendprogrammet til Bekk.

Målet med workshopen er å lære seg konsepter innen Javascript; DOM-en, hendelser, asynkronitet og nettverkskall. Og samtidig lage en aldri så liten [Pokédex](https://github.com/kjesvale/anvendt-javascript/blob/main/assets/screenshots/register-pokemon.png)!

## Kom i gang

Klon og installer prosjektet:

```
git clone https://github.com/kjesvale/anvendt-javascript
cd anvendt-javascript
npm install
```

Prosjektet bygger med [Parcel](https://parceljs.org/), et byggverktøy som ikke krever noen konfigurasjon, men lar oss fokusere på koden vår.

Start utviklingsserveren slik:

```
npm run start
```

Nå vil nettsiden kjøre på [http://localhost:1234](http://localhost:1234), og lastes på nytt hver gang du gjør endringer i `src`-mappen.

## Oppgavene

Løs oppgavene i `src`-mappen. Alle oppgavene har et løsningsforslag, som du kan avsløre ved å klikke på nøkkelsymbolet:

- ✍️ Oppgave
- 💡 Hint, tips eller triks
- 🗝 Løsningsforslag


## Oppgave 1: Bruk Javascript

Hvis du åpner `src`-mappen, ser du at nettsiden bare består av to filer: en `index.html`-side og et stilark i `styles.css`. Du skal ikke gjøre noen store endringer i disse filene, for denne workshopen kommer til å fokusere på Javascript.

### 1a) Et script

✍️ Lag en Javascript-fil `index.js` som du importerer fra `index.html`. Logg noe til konsollen, og verifiser at det logges i nettleseren.

💡 Bruk gjerne syntaksen `<script type="module">`. Dette forteller nettleseren at scriptet følger det nye modulsystemet i Javascript, og du kan bruke `import`- og `export`-syntaksen for å lenke mellom filer. Da er det lett å splitte opp koden i flere filer når det føles naturlig.

## Oppgave 2: Manipulering av HTML

Foreløbig er det ikke så mye spennende på nettsiden vår. I denne oppgaven skal vi benytte Javascript og DOM-en til å tegne opp, eller «rendre» mer innhold – dynamisk!

### 2a) Tegn en pokemon

Hvis du åpner `index.html`, ser du at siden vår inneholder en tom liste med id `pokemon-list`.

✍️ Kun ved hjelp av Javascript, tegn opp følgende Pokemon i lista:

```html
<li class="pokemon-entry">Bulbasaur</li>
```

<details>
<summary>🗝 Løsningsforslag</summary>

```js
const entry = document.createElement("li");

entry.className = "pokemon-entry";
entry.innerText = "Bulbasaur";

document.getElementById("pokemon-list").appendChild(entry);
```
</details>

### 2b) Beskrivelse

En av Pokedexens viktigste egenskap er å gi oss en beskrivelse av hver Pokemon. Utvid koden fra forrige oppgave til å tegne opp følgende HTML-struktur:


```html
<li class="pokemon-entry">
    <div class="pokemon-info">
        <h2>Bulbasaur</h2>
        <p>It can go for days without eating a single morsel. In the bulb on its back, it stores energy.</p>
    </div>
</div>
```

<details>
<summary>🗝 Løsningsforslag</summary>

```js
// Opprett elementene med riktige attributter
const entry = document.createElement("li");
entry.className = "pokemon-entry";

const name = document.createElement("h2");
name.innerText = "Bulbasaur";

const description = document.createElement("p");
description.innerText = "It can go for days without eating a single morsel. In the bulb on its back, it stores energy.";

const info = document.createElement("div");
info.className = "pokemon-info";

// Sett alle elementene sammen
const list = document.getElementById("pokemon-list");

info.appendChild(name);
info.appendChild(description);
entry.appendChild(info);
list.appendChild(entry);
```
</details>

### 2c) Bilde av dyret

Et bilde sier mer enn tusen ord! Vi kan hente et bilde av pokemonen vår, slik at den ferdige HTML-strukturen ser slik ut:

```html
<li class="pokemon-entry">
    <div class="pokemon-info">
        <h2>Bulbasaur</h2>
        <p>It can go for days without eating a single morsel. In the bulb on its back, it stores energy.</p>
    </div>
    <img loading="lazy" src="https://www.serebii.net/xy/pokemon/001.png" alt="Image of Bulbasaur" />
</div>
```

✍️ Fullfør oppgaven ved å legge til et bilde under teksten.

💡 Vi bruker `loading="lazy"` for å aktivere lazy loading i nettleseren. Ved å gjøre dette vil ikke bildene laste ned før man scroller dem inn i syne, og kan spare brukeren – og serveren – for unødvendig last.

<details>
<summary>🗝 Løsningsforslag</summary>

```js
// [Koden fra 2b]

const image = document.createElement("img");
image.src = "https://www.serebii.net/xy/pokemon/001.png";
image.alt = `Image of Bulbasaur`;
image.loading = "lazy";

entry.appendChild(image);
```
</details>


### 2d) Flere pokemons!

Filen `/assets/pokemon.json` inneholder en liste med flere pokemons.

✍️ Skriv en funksjon `renderPokemon(pokemon, list)` med utgangspunkt i koden fra forrige oppgave. Funksjonen bør opprette et pokemon-element og legge det til i listen. Bruk funksjonen til å bygge opp en pokedex basert på JSON-listen.

💡 Du kan importere JSON-dataen med `import`-syntaksen slik:

```js
import allPokemons from "../assets/pokemon.json";
```

Merk at dette er en feature i byggsteget til Parcel – nettleseren ser bare JSON-dataen som en vanlig Javascript-liste.

<details>
<summary>🗝 Løsningsforslag</summary>

```js
import allPokemons from "../assets/pokemon.json";

populateList();

export function populateList() {
    const list = document.getElementById("pokemon-list");

    allPokemons.forEach((pokemon) => {
        renderPokemon(pokemon, list);
    });
}

function renderPokemon(pokemon, list) {
    console.log("Rendering pokemon", pokemon.name);

    // Opprett elementene med riktige attributter
    const entry = document.createElement("li");
    entry.className = "pokemon-entry";

    const name = document.createElement("h2");
    name.innerText = pokemon.name;

    const description = document.createElement("p");
    description.innerText = pokemon.description;

    const info = document.createElement("div");
    info.className = "pokemon-info";

    const image = document.createElement("img");
    image.src = pokemon.image;
    image.alt = `Image of ${pokemon.name}`;
    image.loading = "lazy";

    // Sett alle elementene sammen
    info.appendChild(name);
    info.appendChild(description);
    entry.appendChild(info);
    entry.appendChild(image);

    list.appendChild(entry);
}
```

</details>

## Oppgave 3: Hendelser og skjemaer

Til de neste oppgavene trenger vi et API. Det er ferdiglaget, og kan startes i et nytt kommandovindu slik:

```
cd server
npm install
npm run start
```

### 3a) Åpne dialog

Nå har vi klart å tegne opp en liste med kjente pokemons. Men det er noe som mangler – en mulighet for å registrere nye pokemons! Nettsiden inneholder et komplett skjema for å registrere nye pokemons og sende dem til serveren, men dette er foreløbig skjult inni en `dialog`.

Først, kopier følgende HTML-snutt inn i `index.html`. Dette trenger ikke å tegnes med Javascript siden det er en statisk knapp:

```html
<button id="dialog-button">New pokemon</button>
```

✍️ Når brukeren trykker på knappen, åpne `dialog`-elementet med `showModal()`-funksjonen.

<details>
<summary>🗝 Løsningsforslag</summary>

I Javascript:

```js
configureDialogButton();

export function configureDialogButton() {
    const button = document.getElementById("dialog-button");
    const dialog = document.getElementById("pokemon-dialog");

    button.addEventListener("click", () => {
        dialog.showModal();
    });
}
```

</details>

### 3b) Stopp submit-hendelsen

Når du registrerer en pokemon i skjemaet, sendes du av gårde til URL-en i `method`-attributten til form-elementet. Dette fungerer greit i samarbeid med tradisjonelle webservere, men vi har bare et usselt API! Responsen ser temmelig spartansk ut, så vi ønsker å forbedre denne brukeropplevelsen.

✍️ Kun ved hjelp av Javascript, stopp submit-hendelsen slik at brukeren forblir på nettsiden etter man har klikket på registreringsknappen.

<details>
<summary>🗝 Løsningsforslag</summary>

```js
preventFormFromSubmitting();

export function preventFormFromSubmitting() {
    const form = document.getElementById("pokemon-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
    });
}
```
</details>

### 3c) Lukk modalen (Bonusoppgave)

Du kan lukke en dialog ved å trykke på Escape. Det er også anbefalt å la brukeren lukke dialogen med en egen knapp. Men det blir for lett for oss – vi ønsker å lukke dialogen når brukeren trykker utenfor dens rammer!

✍️ Lukk modalen når bruker trykker utenfor modalen.

<details>
<summary>🗝 Løsningsforslag</summary>

Dialog-elementet legger seg over alt annet og vil derfor plukke opp klikk over alt på skjermen. En mulig løsning er å lytte på klikk og sjekke om klikk-hendelsens posisjon er utenfor rammene til dialogen med `.getBoundingClientRect()`.

```js
closeDialogOnClickOutside();

export function closeDialogOnClickOutside() {
    const dialog = document.getElementById("pokemon-dialog");

    dialog.addEventListener("click", (event) => {
        const rectangle = dialog.getBoundingClientRect();

        if (
            event.clientY < rectangle.top ||
            event.clientY > rectangle.bottom ||
            event.clientX < rectangle.left ||
            event.clientX > rectangle.right
        ) {
            dialog.close();
        }
    });
}
```

En annen løsning innebærer å wrappe innholdet til dialogen i en `div`. Når brukeren klikker på dialog-elementet, sjekk om `divElement.contains(event.target)`.

</details>

## Oppgave 4: Serverkommunikasjon med Javascript

Vi har fjernet standardoppførselen til skjemaet, men vi har ikke implementert noe alternativ i Javascript. Derfor har vi foreløbig et skjema som ikke fungerer. La oss gjøre noe med det!

### 4a) Lagre pokemons på serveren

Ta utgangspunkt i koden fra oppgave 3b.

✍️ Når skjemaet submittes, gjør en `POST`-request til `/api/pokemon` som inneholder feltene som en JSON-string. Lukk dialogen og nullstill skjemaet hvis API-et responderer positivt.

💡 Du kan trekke ut data fra et skjemaelement og konvertere det til et key/value-object slik:

```js
const formData = new FormData(formElement);
const data = Object.fromEntries(formData);
```

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

Pokemonene vi registrerer vises ikke i listen, fordi denne fremdeles tegnes med data fra den statiske filen under `/assets/pokemon.json`. For å se registrerte pokemons må vi hente dem fra API-et vårt.

✍️ Hent pokemons fra serveren i stedet for å lese fra fil, og bruk `renderPokemon`-funksjonen vi har laget fra før til å tegne dem opp i pokemonlisten.

<details>
<summary>🗝 Løsningsforslag</summary>

```js
const list = document.getElementById("pokemon-list");

populateListFromAPI();

export async function populateListFromAPI() {
    const response = await fetch("/api/pokemon");

    if (response.ok) {
        const pokemons = await response.json();

        // Tøm listen først
        list.textContent = "";

        // Tegn deretter opp pokemons
        pokemons.forEach((pokemon) => {
            renderPokemon(pokemon, list);
        });
    } else {
        console.log("Klarte ikke å hente pokemons fra API-et:", error);
    }
}
```
</details>

### 4c) Validering av skjemaet (Bonusoppgave)

Hittil har vi ennå ikke noe validering av feltene ved registrering av nye pokemons, utenom at de er tagget med `required` i HTML-en.

✍️ Implementer validering i Javascript. Her er noen forslag:

1. Bruk Javascript til å skru av den innebygde skjemavalideringen med [novalidate-attributten](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-novalidate), slik at den ikke spenner bein på vår egen validering.
2. Når brukeren forsøker å sende inn skjemaet, valider at navn, beskrivelse og type er satt til fornuftige verdier.
3. Hvis ikke, vis en feilmelding i bunn av skjemaet og fokuser på det første skjemafeltet som inneholder en feil.
