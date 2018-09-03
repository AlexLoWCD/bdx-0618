### JS Riddle - Trouver le nombre de personnes dans un groupe

**Le but de ce dojo va être de trouver le nombre de personne ayant le même nom au sein de groupes de travail.**

Le petit problème, c'est que nous ne savons pas combien de groupes exactement il y a au sein de l'entreprise, et nous ne savons également pas si ces groupes sont découpés en sous-groupe de travail.

De ce fait, la liste de personnes peut être composée :

* d'un seul groupe de personnes

```const listGroup = ['John', 'David', 'Marie', 'Pascal', 'Pascal', 'John', 'John', 'Silvie'];```

* d'un groupe de groupe de personnes

```const listGroup = [['John', 'David'], ['Marie', 'Pascal'], ['Pascal', 'John'], ['John', 'Silvie']];```

* d'un groupe de groupe de personnes de tailles différentes

```const listGroup = [['John', 'David', 'Marie'], ['Pascal', 'John'], ['Pascal', 'John', 'Silvie']];```

* d'un groupe de groupe de groupe de personnes

```const listGroup = [[['John', 'David'], ['Marie', 'Pascal']], [['Pascal', 'John'], ['John', 'Silvie']]];```

* voire même d'un groupe de groupe de groupe de groupe de 1 personne !!!

```const listGroup = [[[['John'], ['David']], [['Marie'], ['Pascal']]], [[['Pascal'], ['John']], [['John'], ['Silvie']]]];```

Dans tous les cas, nous voulons avoir le résultat suivant : 

~~~~
const result = {
  'John': 3,
  'David': 1,
  'Marie': 1,
  'Pascal': 2,
  'Silvie': 1
}
~~~~


