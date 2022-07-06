/* eslint-disable no-console */
const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = 'db.sqlite';

const db = new sqlite3.Database(DBSOURCE, (errConnect) => {
    if (errConnect) {
        // Cannot open database
        console.error(errConnect.message);
        throw errConnect;
    } else {
        console.log('Connected to the SQLite database.');
        db.run(
            `CREATE TABLE 'genres' (
                'id' INTEGER PRIMARY KEY AUTOINCREMENT,
                'name' varchar(255) NOT NULL
              )`,
              
              `CREATE TABLE 'actors' (
                'id' INTEGER PRIMARY KEY AUTOINCREMENT,
                'first_name' varchar(255) NOT NULL,
                'last_name' varchar(255) NOT NULL,
                'date_of_birth' date NOT NULL,
                'date_of_death' date
              )`,
              
              `CREATE TABLE 'films' (
                'id' INTEGER PRIMARY KEY AUTOINCREMENT,
                'name' varchar(255) NOT NULL,
                'synopsis' text NOT NULL,
                'release_year' int,
                'genre_id' int NOT NULL
              )`,
              
              `CREATE TABLE 'films_actors' (
                'film_id' INTEGER,
                'actor_id' INTEGER,
                FOREIGN KEY (film_id) REFERENCES films(id),
                FOREIGN KEY (actor_id) REFERENCES actors(id),
                PRIMARY KEY ('film_id', 'actor_id')
              )`,
            (errQuery) => {
                if (errQuery) {
                // Table already created
                } else {
                // Table just created, creating some rows
                    const genres = 'INSERT INTO genres (id, name) VALUES (?,?)';
                    db.run(genres, [1, 'Action']);
                    db.run(genres, [2, 'Horreur']);
                    db.run(genres, [3, 'Comédie']);

                    const actors = 'INSERT INTO actors (id, first_name, last_name, date_of_birth, date_of_death) VALUES (?,?,?,?,?)';
                    db.run(genres, [1, 'Dwayne', 'Johnson', '02/05/1972', null]);
                    db.run(genres, [2, 'Alexandra', 'Daddario', '16/03/1986', null]);
                    db.run(genres, [3, 'Tom', 'Cruise', '03/07/1962', null]);
                    db.run(genres, [4, 'Bruce', 'Lee', '27/11/1940', '20/07/1973']);

                    const films = 'INSERT INTO films (id, name, synopsis, release_year, genre_id) VALUES (?,?,?,?,?)';
                    db.run(genres, [1, 'Top Gun', "Après plus de 30 ans de service en tant que l'un des meilleurs aviateurs de la Marine, Pete Maverick Mitchell est à sa place, repoussant les limites en tant que pilote d'essai courageux et esquivant l'avancement de grade qui le mettrait à la terre. Entraînant de jeunes diplômés pour une mission spéciale, Maverick doit affronter les fantômes de son passé et ses peurs les plus profondes, aboutissant à une mission qui exige le sacrifice ultime de ceux qui choisissent de la piloter.", '2022', 1]);
                    db.run(genres, [2, 'Ca', "À Derry, dans le Maine, sept gamins ayant du mal à s'intégrer se sont regroupés au sein du Club des Ratés. Rejetés par leurs camarades, ils sont les cibles favorites des gros durs de l'école. Ils ont aussi en commun d'avoir éprouvé leur plus grande terreur face à un terrible prédateur métamorphe qu'ils appellent Ça.", '2017', 2]);
                    db.run(genres, [3, 'Babysitting', "Faute de baby-sitter pour le week-end, Marc Schaudel confie son fils Rémy à Franck, son employé, un type sérieux selon lui. Sauf que Franck a 30 ans ce soir et que Rémy est un sale gosse capricieux. Au petit matin, Marc et sa femme Claire sont réveillés par un appel de la police qui les informe que Rémy et Franck ont disparu ! Au milieu de leur maison saccagée, la police retrouve une caméra. Marc et Claire découvrent, hallucinés, les images tournées pendant la soirée.", '2014', 3]);

                    const films_actors = 'INSERT INTO films_actors (film_id, actor_id) VALUES (?,?)';
                    db.run(films_actors, [1, 3]);
                }
            },
        );
    }
});

module.exports = db;