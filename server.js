    const http = require("http");

    const server = http.createServer();
    const fs = require("fs");

    const hitParade = [
    {
        position: 1,
        artist: `Jain`,
        title: `Come`,
    },
    {
        position: 2,
        artist: `Matt Simons`,
        title: `Catch & Realease`,
    },
    {
        position: 3,
        artist: `Twety One Pilots`,
        title: `Stressed Out`,
    },
    {
        position: 4,
        artist: `Justin Bieber`,
        title: `Love Yourself`,
    },
    {
        position: 5,
        artist: `Kids United`,
        title: `On écrit sur les murs`,
    },
    {
        position: 6,
        artist: `Rihanna`,
        title: `Work`,
    },
    {
        position: 7,
        artist: `Julian Perretta`,
        title: `Miracle`,
    },
    {
        position: 8,
        artist: `Yall`,
        title: `Hundred Miles`,
    },
    {
        position: 9,
        artist: `Kendji Girac`,
        title: `No Me Mirès Màs`,
    },
    {
        position: 10,
        artist: `Feder`,
        title: `Blind (feat. Emmi)`,
    },
    ];

    let songCount = 0;

    server.on(`request`, function (req, res) {
    const url = req.url;
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

    switch (url) {
        case `/`:
        songCount++;
        res.write(
            `<p>Je m'appelle Charlu, je m'appelle Lili, vous êtes chez O'clock</p>`
        );

        break;
        case `/classement`:
        const classementModifiee = url.replace("/classement", "");
        for (let classement of hitParade) {
            res.write(`<ul><li>Position :${classement.position} 
            artist : ${classement.artist}\n title :${classement.title}</li>
            </ul>`);
        }

        res.write(classementModifiee);
        break;
        case `/stats`:
        res.write(`La chanson a été écouté ${songCount} fois`);
        break;
        default:
        res.write(`<div>  4O4 ERREUR</div>
        <p> Cette page n'est pas disponible</p>`);
    }
    // default :
    // res.write(`Cette page n'est pas disponible`)

    res.write(`</body> </html>`);
    res.end();
    });

    const PORT = 5000;

    server.listen(PORT, function () {
    console.log(`Listening on : http://localhost:${PORT}`);
    });
