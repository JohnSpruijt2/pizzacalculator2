// John Spruijt
// opdracht: Pizza calculator
// Da vinci college

var numberSmall = prompt("How many small pizza's do you want?")         //variabele en prompt 
var numberMed = prompt("How many medium pizza's do you want?")          //variabele en prompt 
var numberLarge = prompt("How many Large pizza's do you want?")         //variabele en prompt 
var priceTotal = numberSmall*11.99+numberMed*12.99+numberLarge*13.99    //variabele met formule 
var error = false                                                       //error method

if (numberSmall <0) {                                                   //reactie van kleine pizza's
    document.write("<font size='5'>An unexpected error has occured, please try again")
    error = true
}
else if (numberSmall >0) {
    document.write("<font size='5'>You choose "+numberSmall+" small pizza's."+"    €"+numberSmall*11.99)
}
else if (numberSmall == 0) {
    document.write("<font size='5'>You choose no small pizza's.")
}
else {
    document.write("<font size='5'>Only numbers are allowed.")
}

document.write("<br><br>")                                               //regels overgeslagen

if (numberMed <0) {                                                      //reactie van medium pizza's
    document.write("An unexpected error has occured, please try again")
    error = true
}
else if (numberMed >0) {
    document.write("You choose "+numberMed+" medium pizza's."+"    €"+numberMed*12.99)
}
else if (numberMed == 0) {
    document.write("You choose no medium pizza's.")
}
else {
    document.write("Only numbers are allowed.")
}

document.write("<br><br>")                                              //regels overgeslagen

if (numberLarge <0) {                                                   //reactie van Grote pizza's
    document.write("An unexpected error has occured, please try again")
    error = true
}
else if (numberLarge >0) {
    document.write("You choose "+numberLarge+" Large pizza's."+"    €"+numberLarge*13.99)
}
else if (numberLarge == 0){
    document.write("You choose no large pizza's.")
}
else {
    document.write("Only numbers are allowed.")
}

document.write("<br><br><br><br><br>")                                  //regels overgeslagen
if (priceTotal <0) {                                                    //totale prijs weergeving
    document.write("An unexpected error occured, please try again")
}
else if (priceTotal >=0) {                                              //last error check
        if (error == true){
            document.write("An unexpected error occured, please try again")
        }
        else {
            document.write("<h3>Total : </h3>"+'<font size="9">€'+priceTotal+'</font>')   
        }
     
}
else {
    document.write("An unexpected error occured, please try again")
    error = true
}
    
if (error == true) {                                                      //alert voor error
    alert("An unexpected error occured please try again")
}
