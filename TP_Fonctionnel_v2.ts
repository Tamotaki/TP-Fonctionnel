//Exercice 1 — Fonction pure vs impure
function add(a: number, b: number) {
  return a + b;
}
let counter = 0; // Déclaration de la variable globale
/**
 * Incrémente un compteur global avec fonction impure
 * @returns {number} Nouvelle valeur du compteur
 */
function increment(): number {
  counter++;
  return counter;
}

//Exercice 2 — Mettre à jour sans muter
/**
 * Représente un étudiant.
 * @typedef {Object} Student
 * @property {string} name - Nom de l’étudiant
 * @property {number} grade - Note actuelle
 */
type Student = { name: string; grade: number };
/** Étudiant initial */
const student: Student = { name: "Léo", grade: 14 };
/**
 * Nouvelle version d’un étudiant avec note mise à jour.
 * @param {Student} student - L’étudiant original
 * @param {number} newGrade - Nouvelle note à appliquer
 * @returns {Student} Nouvel objet étudiant
 */
function updateGrade(student: Student, newGrade: number): Student {
  return { ...student, grade: newGrade };
}
const updatedStudent = updateGrade(student, 16);
console.log('Original:', student);
console.log('Mis à jour:', updatedStudent);
console.log(student);

// Questions :
// Pourquoi add est-elle prévisible ?
// C'est une fonction pure, elle est faite pour renvoyer toujours la même valeur

// Pourquoi increment ne l’est pas ? 
// C'est une fonction impure, elle peut modifier des objets et donc changer la valeur rendue

//Exercice 3 — Appliquer plusieurs fois
/**
 * Applique une fonction à une valeur un nombre de fois donné.
 *
 * @param {(x: number) => number} f - Fonction à appliquer
 * @param {number} n - Nombre d’applications
 * @param {number} x - Valeur de départ
 * @returns {number} Résultat après n applications
 */
function applyNTimesRecursive(
  f: (x: number) => number,
  n: number,
  x: number
): number {
  if (n <= 0) return x;
  return applyNTimesRecursive(f, n - 1, f(x));
}
/**
 * Double un nombre.
 * @param {number} x - Nombre à doubler
 * @returns {number} Résultat multiplié par 2
 */
const double = (x: number) => x * 2;
console.log(applyNTimesRecursive(double, 3, 1));

//Exercice 4.1 — Filtrer et transformer
/** Liste d'exemple */
const numbers = [1, 2, 3, 4, 5, 6];
/**
 * Calcule la somme des nombres pairs d'un tableau doublés.
 * Exemple avec filter, map, reduce en une ligne.
 * 
 * @type {number}
 */
const sumOneLine = numbers
  .filter((n) => n % 2 === 0)
  .map((n) => n * 2)
  .reduce((acc, n) => acc + n, 0);
console.log(sumOneLine);

//Exercice 4.2 — Somme, moyenne et produit
const nums = [1, 2, 3, 4, 5];
/**
 * Calcule la somme d'un tableau de nombres.
 * @param {number[]} arr - Tableau de nombres
 * @returns {number} Somme des éléments
 */
function sumJs(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0);
}
/**
 * Calcule la moyenne d'un tableau de nombres.
 * @param {number[]} arr - Tableau de nombres
 * @returns {number} Moyenne ou 0 si vide
 */
function averageJs(arr: number[]): number {
  return arr.length ? sumJs(arr) / arr.length : 0;
}
/**
 * Calcule le produit d'un tableau de nombres.
 * @param {number[]} arr - Tableau de nombres
 * @returns {number} Produit des éléments
 */
function productJs(arr: number[]): number {
  return arr.reduce((a, b) => a * b, 1);
}
/**
 * Calcule la somme d’un ensemble de nombres passés en arguments.
 * @param {...number} arr - Nombres à additionner
 * @returns {number} Somme totale
 */
function sumRest(...arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0);
}
console.log("sumJs(nums):", sumJs(nums));
console.log("averageJs(nums):", averageJs(nums));
console.log("productJs(nums):", productJs(nums));

//Exercice 5 — Fonctions sur les listes
/**
 * @typedef {Object} User
 * @property {string} name - Nom de l'utilisateur
 * @property {number} age - Âge de l'utilisateur
 */
const users: { name: string; age: number }[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 17 },
];
/**
 * Trouve le premier utilisateur majeur.
 * @type {{ name: string; age: number } | undefined}
 */
const adultUser = users.find((user) => user.age >= 18);
console.log("Premier utilisateur majeur:", adultUser);
/** @type {boolean} */
const hasMinor = users.some((user) => user.age < 18);
console.log("Contient au moins un mineur:", hasMinor);
/** @type {boolean} */
const hasTenMore = users.every((user) => user.age >= 10);
console.log("Tous les utilisateurs ont au moins 10 ans:", hasTenMore);
/** Liste des noms extraits des utilisateurs */
const names = users.map((user) => user.name);
const hasAlice = names.includes("Alice");
const hasEve = names.includes("Eve");
console.log('La liste des noms contient "Alice":', hasAlice);
console.log('La liste des noms contient "Eve":', hasEve);

//Exercice 5.4 — flatMap
/**
 * @typedef {Object} UserWithHobbies
 * @property {string} name
 * @property {string[]} hobbies
 */
const usersWithHobbies = [
  { name: "Alice", hobbies: ["climbing", "yoga"] },
  { name: "Bob", hobbies: ["gaming"] },
  { name: "Charlie", hobbies: ["reading", "hiking"] },
];
/**
 * Liste unique de tous les hobbies.
 * @type {string[]}
 */
const allHobbies = usersWithHobbies.flatMap((user) => user.hobbies);
console.log("Liste des hobbies:", allHobbies);

// Exercice 5.5 — sort et slice
/**
 * Les deux utilisateurs les plus jeunes (âge croissant).
 * @type {{ name: string; age: number }[]}
 */
const youngestTwo = users
  .slice()
  .sort((a, b) => a.age - b.age)
  .slice(0, 2);
console.log("Les deux utilisateurs les plus jeunes:", youngestTwo);

//Partie bonus — Cas concret
/**
 * @typedef {Object} UserFull
 * @property {string} name
 * @property {number} age
 * @property {string} country
 */
type User = { name: string; age: number; country: string };
const data: User[] = [
  { name: "Alice", age: 25, country: "France" },
  { name: "Bob", age: 15, country: "France" },
  { name: "Charlie", age: 30, country: "Spain" },
  { name: "Diana", age: 22, country: "France" },
];
/**
 * Récupère les utilisateurs majeurs français.
 * @type {User[]}
 */
const frenchAdults = data.filter(
  (user) => user.country === "France" && user.age >= 18
);
/**
 * Noms des utilisateurs majeurs français.
 * @type {string[]}
 */
const frenchAdultNames = frenchAdults.map((user) => user.name);
/**
 * Noms des majeurs français triés par âge décroissant.
 * @type {string[]}
 */
const sortedFrenchAdultNames = frenchAdults
  .sort((a, b) => b.age - a.age)
  .map((user) => user.name);
console.log("Noms des majeurs français classés par âge:", sortedFrenchAdultNames);
/**
 * Moyenne d’âge des majeurs français.
 * @type {number}
 */
const totalAge = frenchAdults.reduce((acc, user) => acc + user.age, 0);
const averageAge =
  frenchAdults.length > 0 ? totalAge / frenchAdults.length : 0;
console.log("Âge moyen des majeurs français:", averageAge);