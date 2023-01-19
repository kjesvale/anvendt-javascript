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
