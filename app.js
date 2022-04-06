

/*-----------------------------------------
        FONCTION DE LANCER DE DE
------------------------------------------*/
function lancerDe() {
    const nombreDecimal = (Math.random() * 6) + 1
    const nombre = Math.trunc(nombreDecimal)

    //retourne le nombre
    return nombre;
}




const afficherDe = function () {


    //---------- Lancement du dé ------//
    const resultat = lancerDe()


    //---------- Audio et Images ------//

    //Selection du son
    const audio = new Audio('son.mp3');

    //Jouer le son
    const lancerSon = function () {
        audio.play();
    }

    //On lance le son au lancé de Dé
    audio.addEventListener("canplaythrough", lancerSon)

    const afficherImage = function () {
        //Image
        const imageDe = document.getElementById('image-de');

        //ajoute l'image du Dé
        imageDe.src = 'images/de' + resultat + '.svg';
    }

    audio.addEventListener('ended', afficherImage())

    //--------INITIALISATION DES VARIABLES DE SCORE ----////

    //Récupère les valeurs dans le HTML
    var ResJoueur1 = document.getElementById("divScore1").innerHTML;
    var ResJoueur2 = document.getElementById("divScore2").innerHTML;

    //récupère le score stocké total
    var StockJoueur1 = document.getElementById("currentScore1").innerHTML;
    var StockJoueur2 = document.getElementById("currentScore2").innerHTML;

    //Récupère l'affichage des scores
    var AffichageScoreP1 = document.getElementById('divScore1');
    var AffichageScoreP2 = document.getElementById('divScore2');

    var AffichageCurrentScoreP1 = document.getElementById('currentScore1');
    var AffichageCurrentScoreP2 = document.getElementById('currentScore2');

    //Affichage du Joueur en cours
    var AffichageJoueur = document.getElementById('Joueur');

    const Joueur = document.getElementById("Joueur").innerHTML;


    //SI LE JOUEUR 1 JOUE
    if (Joueur == 1) {

        //AFFICHE LE RESULTAT TEMPORAIRE
        AffichageScoreP1.textContent = parseInt(ResJoueur1) + resultat;

        //SI RESULTAT EST DIFFERENT DE 1 ON CONTINUE DE JOUER
        if (resultat != 1) {
            //PARTIE CONTINUE
        }
        else {

            //SI RESULTAT EST DE 1 ALORS ON CHANGE LE TOUR DU JOUEUR ET ON REMET A 0 LE SCORE
            AffichageJoueur.textContent = 2;
            AffichageScoreP1.textContent = 0;

        }

    }

    //SI LE JOUEUR 2 JOUE
    if (Joueur == 2) {


        //AFFICHE LE RESULTAT TEMPORAIRE
        AffichageScoreP2.textContent = parseInt(ResJoueur2) + resultat;

        //SI RESULTAT EST DIFFERENT DE 1 ON CONTINUE DE JOUER
        if (resultat != 1) {

            //PARTIE CONTINUE
        }
        else {

            //SI RESULTAT EST DE 1 ALORS ON CHANGE LE TOUR DU JOUEUR ET ON REMET A 0 LE SCORE
            AffichageJoueur.textContent = 1;
            AffichageScoreP2.textContent = 0;
        }
    }



    if (StockJoueur1 >= 100 || StockJoueur2 >= 100) {

        //SI LE SCORE ATTEIND 100 ON LANCE UNE ALERTE DU VAINQUEUR & REMISE A ZERO DES SCORES
        AffichageScoreP1.textContent = 0;
        AffichageScoreP2.textContent = 0;
        AffichageCurrentScoreP1 = 0;
        AffichageCurrentScoreP2 = 0;

        //LANCEMENT FONCTION WIN
        win();

    }



}
//récupérer le bouton lancer de dé
const buttonLancer = document.getElementById('bouton-lancer');

//Execute le lancé de Dé sur bouton
buttonLancer.addEventListener('click', afficherDe)



/*-----------------------------------------
        MEMORISER LE SCORE
------------------------------------------*/

const holdScore = function () {

    //Récupère les valeurs dans le HTML
    var ResJoueur1 = document.getElementById("divScore1").innerHTML;
    var ResJoueur2 = document.getElementById("divScore2").innerHTML;

    //récupère le score stocké total
    var StockJoueur1 = document.getElementById("currentScore1").innerHTML;
    var StockJoueur2 = document.getElementById("currentScore2").innerHTML;

    //Recupère le joueur en cours
    const Joueur = document.getElementById("Joueur").innerHTML;

    //Récupère l'affichage des scores
    var AffichageScoreP1 = document.getElementById('divScore1');
    var AffichageScoreP2 = document.getElementById('divScore2');

    var AffichageCurrentScoreP1 = document.getElementById('currentScore1');
    var AffichageCurrentScoreP2 = document.getElementById('currentScore2');

    //Affichage du Joueur en cours
    var AffichageJoueur = document.getElementById('Joueur');


    if (Joueur == 1) {

        //On va envoyer le Score dans le bloc de Stockage du score
        StockJoueur1 = parseInt(ResJoueur1) + parseInt(StockJoueur1);
        AffichageJoueur.textContent = 2;
        AffichageCurrentScoreP1.textContent = StockJoueur1;
        AffichageScoreP1.textContent = 0;

    }
    if (Joueur == 2) {

        //On va envoyer le Score dans le bloc de Stockage du score
        StockJoueur2 = parseInt(ResJoueur2) + parseInt(StockJoueur2);
        AffichageJoueur.textContent = 1;

        AffichageCurrentScoreP2.textContent = StockJoueur2;
        AffichageScoreP2.textContent = 0;
    }


}
//récupérer le bouton lancer de dé
const buttonHold = document.getElementById('bouton-hold');

//Execute le lancé de Dé sur bouton
buttonHold.addEventListener('click', holdScore)



/*-----------------------------------------
        FONCTION NOUVELLE PARTIE
------------------------------------------*/

function start() {
    const nombre = 0;

    //retourne le nombre
    return nombre;
}

const newGame = function () {

    //Lancer la fonction Start()
    const reset = start();

    //Afficher le resultat dans la div
    const divScore1 = document.getElementById('divScore1');
    const divScore2 = document.getElementById('divScore2');

    //Current Score remis à 0
    const currentScore1 = document.getElementById('currentScore1');
    const currentScore2 = document.getElementById('currentScore2');

    //Affiche 0 au score
    divScore1.textContent = reset;
    divScore2.textContent = reset;
    currentScore1.textContent = reset;
    currentScore2.textContent = reset;


}
//récupérer le bouton
const buttonNewGame = document.getElementById('bouton-newGame');

//Execute le lancement de la nouvelle partie
buttonNewGame.addEventListener('click', newGame)



function win() {

    //MESSAGE DE VICTOIRE AFFICHE -> LANCEMENT NOUVELLE PARTIE
    var msg = "Vous avez gagné!";
    alert(msg);
    newGame();
}