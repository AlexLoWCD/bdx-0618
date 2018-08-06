/*
Ecrire une fonction qui permet de remettre en ordre les mots d'un tableau
Chaque mot contiendra l'ordre dans lequel il doit apparaître (de 1 à n).
Chaque index est unique.

Ex:
-paramètre : ["fai7re","est3","C1e","c4arrément","doj2o","gén5ial","à6"]
-sortie : "Ce dojo est carrément génial à faire"

*/

const orderwords = (_arrayWords) => {
  // Je créé une variable "resultArray", initialisée à un tableau vide.
  // Ce tableau contiendra mes différents mots mis dans l'ordre d'apparition.

  // Je parcours mon tableau de mots
  for () {

    // Je créé une variable "word" qui contiendra l'élement de
    // mon tableau "_arrayWords" à l'index "i".

    // Je créé une variable "splittedWord" à laquelle on affectera un tableau
    //  correspondant à mon mot découpé par caractère.

    // Je créé une variable "position" qui contiendra l'index du mot en cours.
    // Par défaut on affectera la valeur 0.

    // Je vais créer une variable "indexWordIndex" qui va me permettre de
    // stocker l'emplacement de l'index de "word".
    // Par défaut on affectera la valeur 0.

    // Je parcours mon tableau de caractère à la recherche de l'index
    for () {

      // Je créé une variable "letter" qui contiendra l'élement de
      // mon tableau "splittedWord" à l'index "j".

      // Je créé une variable "letterToNumber" à laquelle on affectera
      // le résultat de la transformation de "letter" en nombre.

      // Si mon caractère est transformable en nombre, alors je suis l'index.
      // Je sauvegarde l'emplacement de l'index.
    }

    // Une fois mon index récupéré, je vais devoir enlever cet index à "word".
    // Je vais créer une nouvelle variable appelée "wordWithoutIndex"
    // qui contiendra le mot sans l'index.Cette variable sera initialiée à
    // une chaîne de caractère vide.

    // Je découpe le mot afin de récupérer le mot sans l'index.
    //(String.prototype.slice)

    // J'ajoute le mot reconstruit à l'index correspondant dans le tableau.
  }

  // Je créé une variable "result" qui va contenir la concaténation de
  // l'ensemble du tableau pour former une phrase.
  // (Array.prototype.join)

  // Je retourne le résultat
}


const ow1 = orderwords(["fai7re", "es3t", "1Ce", "c4arrément", "doj2o", "gén5ial", "à6"]);
console.log(ow1 === "Ce dojo est carrément génial à faire");

const ow2 = orderwords(["truc7s", "aujo8urd'hui", "6de", "forma2teur", "L1e", "beauco5up", "JS3", "m'a4pprend"]);
console.log(ow2 === "Le formateur JS m'apprend beaucoup de trucs aujourd'hui");
