// John Spruijt
// opdracht: Pizza calculator
// Da vinci college


const numberSmall = prompt("How many small pizza's do you want?")         //const en prompt 
const numberMed = prompt("How many medium pizza's do you want?")          //const en prompt 
const numberLarge = prompt("How many Large pizza's do you want?")         //const en prompt 
const priceTotal = numberSmall*11.99+numberMed*12.99+numberLarge*13.99    //const met formule 
var error = false                                                         //error method

document.write("<br><br><br>")    




if (numberSmall <0) {                                                     //reactie van kleine pizza's
    document.write("<font size='5' face='arial'><center><font color='red'>An unexpected error has occured, please try again</font>")
    error = true
}                                                                         //lettertype van hele pagina veranderd
else if (numberSmall >1) {
    document.write("<font size='5' face='arial'><center>You chose "+numberSmall+" small pizza's     "+"    €"+numberSmall*11.99)
}
else if (numberSmall == 1){
    document.write("<font size='5' face='arial'><center>You chose "+numberSmall+" small pizza     "+"    €"+numberSmall*11.99)
}
else if (numberSmall == 0) {
    document.write("<font size='5' face='arial'><center>You chose no small pizza's.     ")
}
else {
    document.write("<font size='5' face='arial'><center>Only numbers are allowed.     ")
}


document.write("<br><br>")                                                //regels overgeslagen


if (numberMed <0) {                                                       //reactie van medium pizza's
    document.write("<font color='red'>An unexpected error has occured, please try again</font>")   
    error = true
}
else if (numberMed >1) {                                                  
    document.write("You chose "+numberMed+" medium pizza's"+"    €"+numberMed*12.99)
}
else if (numberMed == 1) {
    document.write("You chose "+numberMed+" medium pizza"+"    €"+numberMed*12.99)
}
else if (numberMed == 0) {                                                
    document.write("You chose no medium pizza's.")
}
else {                                                                    
    document.write("Only numbers are allowed.")
}


document.write("<br><br>")                                                //regels overgeslagen


if (numberLarge <0) {                                                     //reactie van Grote pizza's
    document.write("<font color='red'>An unexpected error has occured, please try again</font>")
    error = true
}
else if (numberLarge >1) {
    document.write("You chose "+numberLarge+" Large pizza's"+"    €"+numberLarge*13.99)
}
else if (numberLarge == 1){
    document.write("You chose "+numberLarge+" Large pizza"+"    €"+numberLarge*13.99)
}
else if (numberLarge == 0){
    document.write("You chose no large pizza's.")
}
else {
    document.write("Only numbers are allowed.")
}


document.write("<br><br><br><br><br>")                                    //regels overgeslagen


if (priceTotal <0) {                                                      //totale prijs weergeving
    document.write("<font color='red'><b>An unexpected error has occured, please try again</b></font>")
}
else if (priceTotal >=0) {                                                //last error check
        if (error == true){
            document.write("<font color='red'><b>An unexpected error has occured, please try again</b></font>")
        }
        else {
            document.write("<h3>Total : </h3>"+'<font size="9">€ '+priceTotal+'</font>')   
        }
     
}
else {
    document.write("<font color='red'><b>An unexpected error has occured, please try again</b></font>")
    error = true
}
    

if (error == true) {                                                      //alert voor error
    alert("An unexpected error occured please try again")
}
