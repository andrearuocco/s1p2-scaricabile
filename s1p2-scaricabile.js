/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali DataType in JavaScript sono 1)number 2)string 3)boolean 4)undefined 5)null 6)BigInt 7)symbol.
Ogni variabile creata in JS può contenere tipi di dati diversi, potrebbe contenere un numero compreso
fino a certi valori come nel caso di number o se si parla di valori molto grandi è il caso di BigInt.
Se voglio che la mia variabile contenga un testo ricado nel caso string e ho bisogno di inserire il mio
testo tra  virgolette "" in modo che venga riconosciuto come tale. Il tipo booleano si utilizza nel caso
dei confronti e restituisce solo due tipi di valori, vero e falso. Il tipo undefined identifica invece 
la variabile come non ancora pronta per contenere qualcosa e si distingue dal tipo null che invece 
consente di ripulire il contenuto di una variabile già esistente. Symbol si utilizza nel caso di dati 
fissi. Nel caso di tutti questi DataType si parla di dati primitivi che spesso non sono abbastanza per 
rappresentare nel suo insieme un'entità. */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Un oggetto JS può essere pensato nello stesso modo in cui pensiamo un oggetto in generale, fuori dal 
terreno dell'informatica. Se pensiamo a qualsiasi oggetto infatti ci verranno in mente le sue
caratteristiche e le cose che possiamo fare con questo, anche in JS un oggetto contiene dati che 
hanno però bisogno di identificarsi in una struttura per rappresentarlo nella sua completezza. */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* 
    let number1 = 12  //dichiaro variabile che contiene numero 12
    let number2 = 20  //dichiaro variabile che contiene numero 20
    number1 = number1 + number2  //sommo i due numeri all'interno della prima variabile creata
    console.log(number1)  //stampo la prima variabile contenente il risultato
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* 
    let x  //creo la variabile x
    x = 12  //assegno ad x il numero 12
*/

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* 
    let name  //creo la variabile name
    name = "Andrea"  //assegno a name il mio nome come stringa
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/*
    let minus  //creo la variabile che conterrà il risultato dell'operazione
    minus = 4 - x  //sottrazione tra 4 e x   
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* 
    let name1 = "john"              //creo le variabili che contengono rispettivamente "john" e "John"
    let name2 = "John"              e in seguito con un'uguaglianza semplice dimostro che non hanno 
    console.log(name1 == name2)     lo stesso contenuto

    console.log(name1 === name2)    //true in lowercase
*/
