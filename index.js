
const readline = require('readline'); // 

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
    `Feder - Blind (feat. Emmi)`
];


// Votre code va ici
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});



rl.question('Que voulez vous ?', (answer) => {
        console.log(`Vous voulez ${answer} `);
        if(answer === `chante`){
            console.log(`Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock.`);
            rl.close();
        }else if(answer === `classement`){
            console.log(`Voici les 10 premier du hit parade ${hitParade.join('\n')}`);
            rl.close();
        }else if(answer === `quitter`){
            rl.close();
        }
});





