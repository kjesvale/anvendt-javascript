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


### 2b) Flere pokemons!

Filen `/data/pokemon.json` inneholder en liste med flere pokemons.

✍️ Bruk koden fra forrige oppgave og lag en funksjon `addPokemon(pokemon, container)` som oppretter et pokemon-element og legger den til i container-elementet. Bruk funksjonen til å bygge opp en pokedex basert på JSON-listen.

💡 Du kan importere JSON-filen med `import`-syntaksen, gitt at du har lenket til Javascript-koden din med `<script type="module">`. Da vil koden din behandles som en [Javascript-modul](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

## Oppgave 3: Hendelser

### 3a) Forstørr bilder

I CSS-en finnes det en klasse `enlarge` som forstørrer et element. Legg dette klassenavnet på bildet til pokemon-elementene når du legger musepekeren over dem, slik at brukeren får se et større bilde.

### 3b)


## Oppgave 4: Hendelser og skjemaer

- 4a) Kansellere event ved form submit
- 4b) Progressive enhancement av skjema

## Oppgave 5: Fetch

Til de neste oppgavene trenger vi en server. Den er ferdiglaget, og kan startes i et nytt kommandovindu slik:

```
cd server && npm run start
```

- 5a) Bruke Fetch til å hente data fra serveren
- 5b) Tegne opp dataen med funksjonen fra oppgave 2b

## Oppgave 6: 