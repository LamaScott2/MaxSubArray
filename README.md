<h2>Objectif</h2>
Implémenter la fonction _maxSubArraySum_ en veillant à optimiser au maximum son temps d'exécution
<h2>Description</h2>

**INPUT** La fonction maxSubArraySum prend en paramètre un tableau d'entiers (tab)<br>
<ul>
<li><em>tab</em> ne peut pas être null ou vide</li>
<li>les entiers de <em>tab</em> peuvent être positifs, négatifs ou égaux à zéro</li>
<li>les entiers de <em>tab</em> ne sont pas triés</li>
<li><em>tab</em> peut comporter plus de 5000 éléments</li>
</ul>

**OUTPUT** La fonction maxSubArraySum doit retourner la somme maximale d'entiers contigus au sein de tab.

**EXEMPLE**
tab = [4, -3, 1, 3, -1] => 5
<br>Les ensembles contigus possibles et leur somme respective sont :
<br>[4] => 4
<br>[-3] => -3
<br>[1] => 1
<br>[3] => 3
<br>[-1] => -1
<br>[4, -3] => 1
<br>[-3, 1] => -2
<br>[1, 3] => 4
<br>[3, -1] => 2
<br>[4, -3, 1] => 2
<br>[-3, 1, 3] => 1
<br>[1, 3, -1] => 3
<br>[4, -3, 1, 3] => 5
<br>[-3, 1, 3, -1] => 0
<br>[4, -3, 1, 3, -1] => 4

La somme maximum d'entiers contigus de <em>tab</em> est donc 5
<h2>Où implémenter la fonction</h2>
La fonction maxSubArraySum est située dans le fichier app.js.
<br>Seule la systaxe ES5 peut être utilisée.
<br>Vous pouvez utiliser les fonctions de la class static Math.
<br>Vous êtes libre de créer les nouvelles fonctions que vous jugerez utiles.
<h2>Comment tester</h2>

**Depuis un terminal**
<br>L'exécution nécessite l'installation de NodeJs
<br>Dans le répertoire racine :
<br>**> node app.js dev**

**4 sets d'exemples sont fournis**
<br>dev => avec des tableaux allant de 1 à 10 éléments
<br>test => avec des tableaux allant de 1 à 5 000 éléments
<br>huge => avec des tableaux allant de 1 à 10 000 000 éléments
<br>huge2 => alternative de 'huge' avec des tableaux allant de 1 à 10 000 000 éléments

Pour choisir le set d'exemple à utiliser, rendez-vous dans la fonction main() dans app.js
# MaxSubArrayAdvizeo
