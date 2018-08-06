/*
Ecrire une fonction qui permet de remettre en ordre les mots d'un tableau
Chaque mot contiendra l'ordre dans lequel il doit apparaître (de 1 à n).
Chaque index est unique.

Ex:
-paramètre : ["fai7re","est3","C1e","c4arrément","doj2o","gén5ial","à6"]
-sortie : "Ce dojo est carrément génial à faire"

*/


// VERSION LONGUE
const orderwords = (_arrayWords) => {
  // Je créé une variable "resultArray", initialisée à un tableau vide.
  // Ce tableau contiendra mes différents mots mis dans l'ordre d'apparition.
  let resultArray = [];

  // Je parcours mon tableau de mots
  for (let i = 0; i < _arrayWords.length; i++) {

    // Je créé une variable "word" qui contiendra l'élement de
    // mon tableau "_arrayWords" à l'index "i".
    let word = _arrayWords[i];

    // Je créé une variable "splittedWord" à laquelle on affectera un tableau
    //  correspondant à mon mot découpé par caractère.

    let splittedWord = word.split("");

    // Je créé une variable "position" qui contiendra l'index du mot en cours.
    // Par défaut on affectera la valeur 0.
    let position = 0;

    // Je vais créer une variable "indexWordIndex" qui va me permettre de
    // stocker l'emplacement de l'index de "word".
    // Par défaut on affectera la valeur 0.

    let indexWordIndex = 0;

    // Je parcours mon tableau de caractère à la recherche de l'index
    for (let j = 0; j < splittedWord.length; j++) {

      // Je créé une variable "letter" qui contiendra l'élement de
      // mon tableau "splittedWord" à l'index "j".
      let letter = splittedWord[j];

      // Je créé une variable "letterToNumber" à laquelle on affectera
      // le résultat de la transformation de "letter" en nombre.
      let letterToNumber = parseInt(letter);

      // Si mon caractère est transformable en nombre, alors je suis l'index.
      // Je sauvegarde l'emplacement de l'index.
      if (!Number.isNaN(letterToNumber)) {
        position = letterToNumber;
        indexWordIndex = j;
      }
    }

    // Une fois mon index récupéré, je vais devoir enlever cet index à "word".
    // Je vais créer une nouvelle variable appelée "wordWithoutIndex"
    // qui contiendra le mot sans l'index.Cette variable sera initialiée à
    // une chaîne de caractère vide.
    let wordWithoutIndex = "";

    // Je découpe le mot afin de récupérer le mot sans l'index.
    //(String.prototype.slice)
    wordWithoutIndex += word.slice(0, indexWordIndex);
    wordWithoutIndex += word.slice(indexWordIndex + 1, word.length);

    // J'ajoute le mot reconstruit à l'index correspondant dans le tableau.
    resultArray[position - 1] = wordWithoutIndex;
  }

  // Je créé une variable "result" qui va contenir la concaténation de
  // l'ensemble du tableau pour former une phrase.
  // (Array.prototype.join)
  let result = resultArray.join(" ");

  // Je retourne le résultat
  return result;
}

// VERSION COURTE
const orderwordsSmall = (_arrayWords) => _arrayWords.sort((a, b) => a.match(/\d/g) - b.match(/\d/g)).map(a => a.replace(/\d/g, "")).join(" ");
