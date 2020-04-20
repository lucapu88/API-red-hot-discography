const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

app.get('/RedHotCHiliPeppersDiscography', (req, res) => {
 res.json([
   {
     poster: "https://m.media-amazon.com/images/I/91SCqfYUIbL._SS500_.jpg",
     album: "the red hot chili peppers",
     anno: "1984",
     descrizione:
       "È considerato uno dei primi album funk rock e funk metal, ma è stato anche elogiato per il fatto di aver precorso in gran parte il fenomeno rap rock.",
   },
   {
     poster:
       "https://images-na.ssl-images-amazon.com/images/I/51Mn56lSxoL._AC_SX466_.jpg",
     album: "Freaky Styley",
     anno: "1985",
     descrizione:
       "In questo album vi sono le prime loro incursioni in contesti più funk, ispirate dal produttore George Clinton, mescolando tali influssi con le commistioni di punk rock, rock e rap accennate con l'omonimo album d'esordio.",
   },
   {
     poster: "https://m.media-amazon.com/images/I/91YOfUQETAL._SS500_.jpg",
     album: "The Uplift Mofo Party Plan",
     anno: "1987",
     descrizione:
       "Fu l'ultimo disco pubblicato dalla formazione originaria del gruppo, prima della morte per overdose del chitarrista Hillel Slovak (avvenuta nel 1988) e dell'abbandono del batterista Jack Irons.",
   },
   {
     poster:
       "https://images-na.ssl-images-amazon.com/images/I/714RRxP82XL._AC_SX466_.jpg",
     album: "Mother's Milk",
     anno: "1989",
     descrizione:
       "Si tratta del primo disco inciso dalla formazione storica del gruppo, con il chitarrista John Frusciante (subentrato ad Hillel Slovak, morto per overdose nel 1988) e con il batterista Chad Smith (sostituto di Jack Irons).",
   },
   {
     poster:
       "https://images-na.ssl-images-amazon.com/images/I/81SOJxLNNyL._AC_SY355_.jpg",
     album: "Blood Sugar Sex Magik",
     anno: "1991",
     descrizione:
       "Gli stili musicali di questo album differiscono notevolmente dalle tecniche usate nel disco precedente dei Chili Peppers, Mother's Milk, e include un piccolo uso di riff di chitarra heavy metal. L'album contiene insinuazioni sessuali, riferimenti alla droga e alla morte e temi come la lussuria e l'esuberanza.",
   },
   {
     poster:
       "https://images-na.ssl-images-amazon.com/images/I/818v2V9n0RL._AC_SL1425_.jpg",
     album: "One Hot Minute",
     anno: "1995",
     descrizione:
       "La profonda depressione causata dall'incredibile successo del precedente album Blood Sugar Sex Magik (1991), la sempre più grave dipendenza dall'eroina e il deterioramento dei rapporti con gli altri della band portarono John Frusciante ad abbandonare il gruppo nel 1992.Dopo vari tentativi fu l'ex Jane's Addiction Dave Navarro ad entrare in pianta stabile nei RHCP. La sua presenza cambiò il suono tipico 'heavy funk' dei Peppers, che ricorsero come mai prima a chitarre distorte, assoli dissonanti e sonorità hard rock e noise.",
   },
   {
     poster:
       "https://images-na.ssl-images-amazon.com/images/I/81TnWHafWdL._AC_SL1448_.jpg",
     album: "Californication",
     anno: "1999",
     descrizione:
       " Il ritorno di Frusciante coincide col cambiamento totale del sound del gruppo, segnando un notevole discostamento dallo stile del materiale registrato con Navarro. Fra i temi dell'album, oltre all'erotismo tipico della band, sono presenti anche l'avidità, la morte, il suicidio, la California e il viaggio.",
   },
   {
     poster:
       "https://images-na.ssl-images-amazon.com/images/I/81RM%2BS0I9wL._AC_SL1425_.jpg",
     album: "By the Way",
     anno: "2002",
     descrizione:
       "Dopo il grande successo di Californication, il gruppo decide di incidere un disco nettamente diverso rispetto ai precedenti continuando comunque l'evoluzione 'mainstream' e melodica iniziata con Californication. Anthony scrive nella sua autobiografia Scar Tissue: 'Scrivere By the Way, il nostro album seguente fu un'esperienza totalmente diversa da Californication. John era tornato se stesso e traboccava fiducia.'",
   },
   {
     poster:
       "https://images-na.ssl-images-amazon.com/images/I/61kw%2BjPaUcL._AC_SX425_.jpg",
     album: "Stadium Arcadium",
     anno: "2006",
     descrizione:
       "L'album continua l'evoluzione dell'album precedente in cui molto forte è l'impronta alternative rock e pop rock, anche se in questo album si ritorna in parte al vecchio funk rock.Con questo album la band tocca uno dei momenti più alti della sua carriera, vincendo cinque Grammy Awards su sette, tra cui i premi come miglior album e band rock dell'anno.",
   },
   {
     poster:
       "https://images-na.ssl-images-amazon.com/images/I/61G2kxhEpaS._AC_SL1500_.jpg",
     album: "I'm with You",
     anno: "2011",
     descrizione:
       "Si tratta del primo album del gruppo con il chitarrista Josh Klinghoffer, il quale ha preso il posto di John Frusciante. Tra questo album e l'ultimo del gruppo, Stadium Arcadium (pubblicato nel 2006), i Red Hot Chili Peppers hanno raggiunto il più lungo periodo di inattività della loro storia.",
   },
   {
     poster:
       "https://images-na.ssl-images-amazon.com/images/I/81CGfXRJkUL._AC_SX679_.jpg",
     album: "The Getaway",
     anno: "2016",
     descrizione:
       " l'album è stato prodotto per la prima volta dopo 20 anni di collaborazione (iniziata con Blood Sugar Sex Magik nel 1991) non da Rick Rubin ma da Danger Mouse e missato da Nigel Godrich. Si tratta inoltre del secondo ed ultimo album in studio inciso con il chitarrista Josh Klinghoffer, sostituto dello storico John Frusciante, che nel 2019 verrà rimpiazzato proprio da quest'ultimo.",
   },
 ]);
});
app.listen(PORT, () => {
console.log('porta in ascolto');

});
