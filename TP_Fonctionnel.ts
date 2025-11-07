//Exercice 1 — Fonction pure vs impure

//1. Créer une fonction pure :
let counter = 0;
//Pure
function add(a: number, b: number): number {
    return a + b;
}

//Exercice 2 — Mettre à jour sans muter
type Student = { name: string; grade: number };
//Student au niveau module
const student: Student = { name: "Léo", grade: 14 };
function updateGrade(student: Student, newGrade: number): Student {
    //Renvoie un nouvel objet sans muter l'original
    return { ...student, grade: newGrade };
}
const updatedStudent = updateGrade(student, 16);
console.log('Original:', student);
console.log('Mis à jour:', updatedStudent);
//Impure
function increment(): number {
    counter++;
    return counter;
}
console.log(student);
//Questions :
//Pourquoi add est-elle prévisible ?
//C'est une fonction pure, elle est faite pour renvoyer toujours la même valeur

//Pourquoi increment ne l’est pas ? 
//C'est une fonction impure, elle peut modifier des objets et donc changer la valeur rendue

//Exercice 3 — Appliquer plusieurs fois
//Fonction récursive
function applyNTimesRecursive(f: (x: number) => number, n: number, x: number): number {
     if (n <= 0) return x;
     return applyNTimesRecursive(f, n - 1, f(x));
 }

//Alternative avec for (pour tester)
// function applyNTimes(f: (x: number) => number, n: number, x: number): number {
//    let result = x;
//    for (let i = 0; i < n; i++) {
//        result = f(result);
//    }
//    return result;
//}
//Exemple
const double = (x: number) => x * 2;
//Exemple avec for
//console.log(applyNTimes(double, 3, 1));

//Exemple avec la fonction récursive
console.log(applyNTimesRecursive(double, 3, 1));

//Exercice 4.1 — Filtrer et transformer
const numbers = [1, 2, 3, 4, 5, 6];
//Garder les nombres pairs, multiplier par 2, calculer la somme en une ligne
const sumOneLine = numbers.filter(n => n % 2 === 0).map(n => n * 2).reduce((acc, n) => acc + n, 0);
console.log(sumOneLine);

//Exercice 4.2 — Somme moyenne et produit
const nums = [1, 2, 3, 4, 5];
 function sumJs(arr) { return arr.reduce((a, b) => a + b, 0); }
 function averageJs(arr) { return arr.length ? sumJs(arr) / arr.length : 0; }
 function productJs(arr) { return arr.reduce((a, b) => a * b, 1); }
 function sumRest(...arr) { return arr.reduce((a, b) => a + b, 0); }

 //Exemples
console.log('sumJs(nums):', sumJs(nums));
console.log('averageJs(nums):', averageJs(nums));
console.log('productJs(nums):', productJs(nums));

//Partie 5 — Autres fonctions de liste
//Liste de données
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 17 },
];
//Exercice 5.1 — find
const adultUser = users.find(user => user.age >= 18);
console.log('Premier utilisateur majeur:', adultUser); 

//Exercice 5.2 — some / every
const hasMinor = users.some(user => user.age < 18);
console.log('Contient au moins un mineur:', hasMinor); 
const hasTenMore = users.every(user => user.age >= 10);
console.log('Tous les utilisateurs ont au moins 10 ans:', hasTenMore);

//Exercice 5.3 — includes
const names = users.map(user => user.name);
const hasAlice = names.includes("Alice");
const hasEve = names.includes("Eve");
console.log('La liste des noms contient "Alice":', hasAlice); 
console.log('La liste des noms contient "Eve":', hasEve); 

//Exercice 5.4 — flatMap
//Contexte donné
const usersWithHobbies = [
  { name: "Alice", hobbies: ["climbing", "yoga"] },
  { name: "Bob", hobbies: ["gaming"] },
  { name: "Charlie", hobbies: ["reading", "hiking"] }, ];
//Liste unique de tous les hobbies
const allHobbies = usersWithHobbies.flatMap(user => user.hobbies);
console.log('Liste des hobbies:', allHobbies); 

//Exercice 5.5 — sort et slice
//Trier les utilisateurs par âge décroissante et prendre les 2 plus jeunes
const youngestTwo = users
  .slice() 
  .sort((a, b) => a.age - b.age) 
  .slice(0, 2); 
console.log('Les deux utilisateurs les plus jeunes:', youngestTwo); 

//Partie bonus - cas concret
//Jeu de données
type User = { name: string; age: number; country: string };
const data: User[] = [
  { name: "Alice", age: 25, country: "France" },
  { name: "Bob", age: 15, country: "France" },
  { name: "Charlie", age: 30, country: "Spain" },
  { name: "Diana", age: 22, country: "France" }, ];

//Bonus 1. Récuperer les adultes français
const frenchAdults = data.filter(user => user.country === "France" && user.age >= 18);

//Bonus 2. Extraire les noms
const frenchAdultNames = frenchAdults.map(user => user.name);

//Bonus 3. Trier par age décroissant
const sortedFrenchAdultNames = frenchAdults
  .sort((a, b) => b.age - a.age)
  .map(user => user.name);
console.log('Noms des majeurs français classés par âge:', sortedFrenchAdultNames);

//Bonus 4. Calculer la moyenne d'âge
const totalAge = frenchAdults.reduce((acc, user) => acc + user.age, 0);
const averageAge = frenchAdults.length > 0 ? totalAge / frenchAdults.length : 0;
console.log('Âge moyen des majeurs français:', averageAge);
console.log('Âge moyen des majeurs français:', averageAge);