const readline = require("readline"); //

// Ajouter ici le ou les require() pour importer les modules dont vous aurez besoin.

// Hit parade, classé du premier au dernier.
const hitParade = [
  `Jain - Come`,
  `Matt Simons - Catch & Realease`,
  `Twety One Pilots - Stressed Out`,
  `Justin Bieber - Love Yourself`,
  `Kids United - On écrit sur les murs`,
  `Rihanna - Work`,
  `Julian Perretta - Miracle`,
  `Yall - Hundred Miles`,
  `Kendji Girac - No Me Mirès Màs`,
  `Feder - Blind (feat. Emmi)`,
];

// Votre code va ici
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question() {
      console.log(`Que voulez-vous ? `);  //Je pose la question ?
    }


    rl.on('line',(answer)=>{
      if (answer === `chante`) {
        console.log(
          `Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock.` // si l'utilisateur demande chante !
        );
       question();
      } else if (answer === `classement`) {
        console.log(`Voici les 10 premier du hit parade ${hitParade.join("\n")}`); // si il souhaite le classement !
        question();
      } else if (answer === `quitter`) {
        rl.close();                                                               // si il souhaite quitter
        process.exit();
      } else if (answer.substring(0, 8)=== 'position') {   // si il souhaite la postion précise ! 
        const index = answer.replace('position ','');   // je replace la position dans un string vide 
        const song = hitParade[index -1];  //je selectionne un index du hitparade
        if(song){
        console.log(`Position  ${index} : ${song}`); // si la position existe !
        question();
      }else {
        console.log(`Pas de chansons`); // si la position n'existe pas 
        question();  // et je relance la question a chaque étape sauf a quitter !
      }
      }else {
        console.log(`Je n'ai pas compris votre question ?`);  // si aucune des conditions n'est rempli 
        question();
      }
    });
  

question();
