//ajout du module natif http
const http = require("http");
//creation du serveur
const server = http.createServer();
// ajout ou Import d'un module maison
const hitParade = require("./my-modules/hitParade");

//variable de comptage simple initié à 0
let songCount = 0;
// listener du server 'request'
server.on(`request`, function (req, res) {
  //le parametre req est stocker dans une variable qui vaut l'url = req.url
  const url = req.url;
  //j'écrit mon doctype html
  res.write(`<!DOCTYPE html>
        <html lang="FR-fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nodejs</title>
            <style> p{
                color: #26b72b;
                
            }
            body{

            background-color: #FFFF99;
            }
            div{
                color : black;
                font-weight: bold;
                font-size : 5em;
            

            }
            ul {
                color : red;
            }
            </style>
        </head>
        <body>`);
  //je sswitch sur les URLs si elle vaut '/'
  switch (url) {
    case `/`:
      //j'incrémente ma variable songcount instancier plus haut
      songCount++;
      //et j'écris un paragraphe
      res.write(
        `<p>Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock</p>`
      );

      break;
    //si elle vaut '/classement'
    case `/classement`:
      //je la remplace par une string vide
      const classementModifiee = url.replace("/classement", "");
      //je boucle sur le tableau hitParade stocker dans './my-modules/hitParade'
      for (let classement of hitParade) {
        //et je créer une liste a puce désordonner
        res.write(`<ul>
                <li>Position ${classement.position}
            artist : ${classement.artist}\n title :${classement.title}
                </li>
                  </ul>`);
      }

      break;
      // si l'url vaut '/stats
    case `/stats`:
      //j'écrit un paragraphe avec la valeur de songCount
      res.write(`La chanson a été écouté ${songCount} fois`);
      break;
      //en cas de mauvaise url une div avec 404 et un message d'erreur 
    default:
      res.write(`<div>  4O4 ERREUR</div>
        <p> Cette page n'est pas disponible</p>`);
  }
// je ferme mon doctype htmls
  res.write(`</body> </html>`);
  res.end(`requête terminée`);
});
//je déclare le port a écouter dans une variable
const PORT = 5000;
// je demande au server d'écouter le port.
server.listen(PORT, function () {
  console.log(`Listening on : http://localhost:${PORT}`);
});
