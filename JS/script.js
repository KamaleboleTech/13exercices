//TP1

//on va gérer dynamiquement les champs

let inputname = document.getElementById("passwd")
let passwdmessage = document.getElementById("passwdmessage")
let button = document.querySelector("button");
let password = "Test123"

//on va lui ajouter l'écoute des évenements
//en suite on va mettre la reaction qu'il va effectuer
button.addEventListener("click", function(e){

    // on va annuler l'action par defaut du bouton
    e.preventDefault()
    
    //on recupère la valeur saisie
    let text = inputname.value
    if(password == text) {
        passwdmessage.innerText = "Bienvenue" 
        passwdmessage.style.display = "block" 
    } else{
        passwdmessage.innerText = "Erreur de mot de Passe"
        passwdmessage.style.display = "block"
    }

})

//TP2
let nbrepairs = document.getElementById("btnpairs")
nbrepairs.addEventListener("click", ()=>{
    let nombre=prompt("Saisissez un nombre");
    console.log("La suite est:" +0);
    for(let i=1;i<=nombre;i+2){
        console.log("La suite est :"+i);
    }
} )

//TP4
let bissextile = document.getElementById("AnneeBisextile")
bissextile.addEventListener("click", ()=>{
    let annee=prompt("Saisissez une année");
    if (annee%4==0) {
        alert("OUI, l'année "+annee+" est bissextile")    
    }else if (annee%4>0) {
        alert("NON, l'année "+annee+" n'est pas bissextile")
    }else{
        alert("vous n'avez pas saisi une année")
    }
})

//TP5

let btncalcul = document.getElementById("SecondDegre")
//function racine2() {
  //  let racine1, racine2, racine;
btncalcul.addEventListener("click", ()=>{

    let a = prompt("Entrez le premier nombre: ");
    console.log(a);
    let b = prompt("Entrez le deuxième nombre: ");
    console.log(b);
    let c = prompt("Entrez le troisième nombre: ");
    console.log(c);
    let calcul = b * b - 4 * a * c;
    if (calcul > 0) {
    
        alert("La reponse est:" + calcul);
    }

})




