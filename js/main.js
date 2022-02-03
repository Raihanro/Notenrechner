let n1;
let n2;
let n3;
let n4;
let n5;

let ergebnis;
let summe = 0;
let anzahlNote = 0;

function tf_noteAuslesen() {
    n1=parseInt(document.getElementById("tf_note1").value); //Auslesen  Textfeld 1 und Umwamdlung in einer Zahl
    n2=parseInt(document.getElementById("tf_note2").value);//siehe oben für Textfeld 2
    n3=parseInt(document.getElementById("tf_note3").value);//siehe oben für Textfeld 3
    n4=parseInt(document.getElementById("tf_note4").value);//siehe oben für Textfeld 4
    n5=parseInt(document.getElementById("tf_note5").value);//siehe oben für Textfeld 5

}
console.log(n1+";"+n2+";"+n3+";"+n4+";"+n5);// Ausgabe  der ausgelesenen Werte

punktePruefen(n1)
punktePruefen(n2)
punktePruefen(n3)
punktePruefen(n4)
punktePruefen(n5);

ergebnis = summe / anzahlNote; //Durchschnittsbrechnung


document.getElementById("Ausgabe").innerHTML= ergebnis;

if (ergebnis <= 5 ){
    document.getElementById("Ausgabe").style.color = "crimson"
}
if (ergebnis <= 5 && ergebnis <12) {
    document.getElementById("Ausgabe").style.color = "darkorange"
}
if (ergebnis <= 12){
    document.getElementById("Ausgabe").style.color = "green"
}

if (ergebnis <= 5 ){
    document.getElementById("Ausgabe").style.color = "crimson"
}else{
    if (ergebnis <= 12){
        document.getElementById("Ausgabe").style.color = "darkorange"
    }else{
        document.getElementById("Ausgabe").style.color = "green"
    }
} //Färbung der Ergebnisse von 0 bis 5 in Rot, bis 12 in Orange und für grö?er als 12 in Grün

function punktePruefen(punkte){
    if (isNaN(punkte))
    {
        console.log(punkte + "ist keine Zahl")
    }else{
        if (isNaN(punkte > 0 && punkte <=15))
        summe = summe + punkte;
        anzahlNote = anzahlNote + 1;
    }
} // "if" ist für Wenn, man möchte z.B etwas in den "function" begrenzen, dann nutzt man "if"
