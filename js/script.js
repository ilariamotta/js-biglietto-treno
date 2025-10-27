// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero (attraverso il prompt).
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km) 
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
// Questo richiederà un minimo di ricerca.




// CHIEDERE ALL'UTENTE IL NUMERO DI KILOMETRI DA PERCORRERE E LA SUA ETA', POI STAMPARE IL PREZZO TOTALE DEL VIAGGIO //

// 1. RACCOLTA DATI
    //Numero km da percorrere ed età utente

    const etaUtente = parseInt(prompt("Inserisci la tua età"), 10);
    const kmViaggio = prompt("Inserisci il numero di kilometri da percorrere");

// 2. DATI PRESENTI

    // * Prezzo del biglietto per km
    const kmBase = 0.21
    const kmPrezzo = parseInt(kmViaggio) * kmBase;

    // console.log(kmPrezzo);

   
    // * sconto minorenni
    const scontoMin = (kmPrezzo * 20) / 100; 
    const prezzoMin = kmPrezzo - scontoMin;
    // console.log(prezzoMin);

    // *sconto over65
    const scontoOver = (kmPrezzo * 40) / 100;
    const prezzoOver = kmPrezzo - scontoOver;
    // console.log (prezzoOver);
    
    let risultato = "";
    
// 3. ESECUZIONE LOGICA
    // SE età utente minore o uguale 18 
        //applicare il 20% sconto sul prezzo del biglietto
        //stampare prezzo biglietto scontato
    // ALTRIMENTI SE età utente maggiore o uguale 65
        //applicare il 40% sconto sul prezzo del biglietto
        //stampare prezzo biglietto scontato
    // ALTRIMENTI non applicare nessuno sconto
        //stampare prezzo biglietto


if (etaUtente <= 18) {
    risultato = `Il prezzo del biglietto è di ${prezzoMin.toFixed(2)}€`
}

console.log (risultato);

// 4. OUTPUT