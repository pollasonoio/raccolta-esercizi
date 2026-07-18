# Raccolta Esercizi Interattiva — Guida rapida

## Cosa contiene questa cartella

- `index.html` — l'app (uguale a quella che avevi già creato, con alcune aggiunte)
- `data.js` — database di **511 esercizi** (nome, descrizione, quantità, categoria)
  estratti dai tuoi 3 file Word:
  - Arto Inferiore → 257 esercizi (Anca/Bacino/Glutei, Caviglia/Piede, Ginocchio, Esercizi Globali)
  - Arto Superiore → 180 esercizi (Gomito/Polso/Mano, varie sottocategorie Spalla)
  - Core e Tronco → 74 esercizi (Addominali, Colonna/Rachide, Stabilità/Attivazione)
- `img/` — le 511 immagini corrispondenti, estratte dai Word
- `img_data.js` — le stesse immagini in versione "incorporabile" (base64), usate
  solo quando premi "Salva scheda" per creare un file autonomo
- `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png` — file che rendono
  l'app installabile e utilizzabile offline (vedi sotto)

**Nota bene**: per 107/117/25 esercizi rispettivamente la descrizione e la
quantità erano già presenti nel Word originale e sono state riportate. Per
gli altri i campi sono vuoti: puoi compilarli direttamente nell'app (click
sull'esercizio → modifica → si salva da solo nel browser).

## Novità rispetto a quello che avevi già fatto

1. **Funziona offline su qualsiasi dispositivo** (non solo sul tuo PC): una
   volta aperta almeno una volta con connessione, l'app si installa nella
   cache del browser (grazie a `manifest.json` e `sw.js`) e da quel momento
   funziona anche senza internet, comprese tutte le immagini.
2. **Condividi link**: nel pannello "Scheda esercizi" c'è ora un pulsante
   "Condividi link" che genera un link contenente la scheda corrente (esercizi
   scelti, paziente, data, note). Chi lo apre — se ha già visitato l'app
   almeno una volta — la vede caricarsi anche offline, con un popup che
   chiede se vuole importare la scheda condivisa.
3. Restano invariate le funzioni che avevi già costruito: **Salva scheda**
   (crea un file .html autonomo con le immagini incorporate, da mandare via
   email/WhatsApp e aprire su qualunque dispositivo) e **Stampa/Esporta PDF**.

## Come pubblicarla online (necessario per i link e per l'uso multi-dispositivo)

L'app è fatta apposta per non aver bisogno di un vero server: basta un
hosting di file statici gratuito. Due opzioni semplici:

### Opzione A — Netlify (più veloce, nessun account tecnico richiesto)
1. Vai su https://app.netlify.com/drop
2. Trascina l'intera cartella (questa, con `index.html` dentro) nella pagina
3. In pochi secondi ottieni un link pubblico (es. `nome-a-caso.netlify.app`)
4. Quel link è quello da usare per aprire l'app da qualsiasi dispositivo e
   per far funzionare "Condividi link"

### Opzione B — GitHub Pages (più stabile nel tempo, richiede un account GitHub)
1. Crea un repository su GitHub e carica tutti i file di questa cartella
2. Impostazioni repository → Pages → Source: branch principale, cartella `/`
3. Dopo un minuto l'app è online su `https://tuonome.github.io/nomerepo/`

Finché non la pubblichi, l'app funziona comunque **in locale** aprendo
`index.html` col doppio click (come prima), ma senza service worker (i
service worker non funzionano su `file://`) e senza "Condividi link" (serve
un indirizzo web reale da condividere).

## Aggiungere altri esercizi in futuro

Se in futuro avrai altri file Word con nuovi esercizi, portameli in chat:
riuso gli stessi script per estrarli e rigenero `data.js` e `img_data.js`
aggiornati, senza perdere le descrizioni/quantità che avrai eventualmente
modificato a mano nell'app (quelle restano salvate nel browser di chi le ha
scritte, indipendentemente dal database).
