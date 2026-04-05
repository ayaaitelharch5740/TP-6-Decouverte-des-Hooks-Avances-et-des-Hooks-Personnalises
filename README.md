# TP Hooks Avancés – `useReducer` · `useRef` · `useEffect` · Custom Hook

## Objectif

Ce TP te permet de pratiquer les hooks React les plus utilisés en situation réelle :

- `useReducer` pour gérer un état complexe de façon structurée et prévisible
- `useRef` pour interagir avec le DOM sans déclencher de re-render
- `useEffect` avec une fonction de nettoyage pour éviter les fuites mémoire
- La création d'un **Hook personnalisé** réutilisable

<img width="1394" height="785" alt="image" src="https://github.com/user-attachments/assets/5c76fb62-ab08-4493-b366-9c5693e38e53" />
<img width="1396" height="887" alt="image" src="https://github.com/user-attachments/assets/cc85afb4-8065-49c2-b07c-28e1ab3702c2" />

---

## Prérequis

- Node.js (v18+) et npm installés
- Notions de base en React (composants, props, `useState`)

---

## Structure du projet

```
src/
├── App.js
├── App.css
├── index.css
├── Compteur.js
├── Compteur.css
├── FocusInput.js
├── FocusInput.css
├── CompteurRendu.js
├── CompteurRendu.css
├── Timer.js
├── Timer.css
├── useFetch.js
├── ListeArticles.js
└── ListeArticles.css
```

---

## Étapes

### Étape 1 – Initialiser le projet

Ouvre un terminal, crée un nouveau projet React avec `npx create-react-app tp-hooks-debutant`, entre dans le dossier avec `cd tp-hooks-debutant`, puis lance le serveur avec `npm start`. L'application s'ouvre sur `http://localhost:3000`.

---

### Étape 2 – Compteur avec `useReducer` (`Compteur.js` / `Compteur.css`)

Crée un composant qui gère un compteur via un `reducer`. Définis un état initial avec une clé `total` et une fonction reducer avec un `switch` sur le type d'action : `ajouter`, `retirer` et `reinitialiser`. Utilise `useReducer` pour obtenir l'état et la fonction `envoyer` (dispatch). Affiche le total et trois boutons qui envoient chaque action.

> **Points clés :** Le reducer centralise toute la logique de mise à jour. `envoyer` dispatche une action plutôt que de modifier l'état directement. Des noms d'actions explicites évitent les bugs.

---

### Étape 3 – Focus sur un champ avec `useRef` (`FocusInput.js` / `FocusInput.css`)

Crée un composant avec un champ texte et un bouton. Utilise `useRef(null)` pour créer une référence, relie-la au champ via l'attribut `ref`, puis appelle `.focus()` sur `ref.current` au clic du bouton. Ajoute un indicateur visuel qui change d'état selon si le champ est actif ou non.

> **Points clés :** `useRef` donne un accès direct à un élément DOM. Modifier `ref.current` ne provoque **aucun re-render** du composant, contrairement à `useState`.

---

### Étape 4 – Compter les re-renders avec `useRef` (`CompteurRendu.js` / `CompteurRendu.css`)

Crée un composant qui suit combien de fois il s'est rechargé. Initialise `useRef(0)` pour stocker le compteur. Dans un `useEffect` sans tableau de dépendances, incrémente `ref.current` après chaque render. Ajoute un champ texte dont la saisie déclenche des re-renders visibles.

> **Points clés :** Contrairement à `useState`, `useRef` ne redéclenche pas l'affichage. Utiliser `useState` à la place créerait une boucle infinie.

---

### Étape 5 – Hook personnalisé `useFetch` (`useFetch.js`)

Crée un Hook nommé `useFetch` qui accepte une URL en paramètre. À l'intérieur, déclare trois états : `donnees`, `enCours` (initialisé à `true`) et `probleme`. Dans un `useEffect` avec `[url]` comme dépendance, effectue le `fetch`, parse le JSON, vérifie `reponse.ok`, gère l'erreur avec `.catch` et désactive le chargement dans `.finally`. Retourne les trois valeurs.

> **Points clés :** Un Hook personnalisé commence toujours par `use`. Il encapsule une logique réutilisable et peut être importé dans n'importe quel composant. On vérifie `reponse.ok` pour capturer les erreurs HTTP que `fetch` ne lève pas automatiquement.

---

### Étape 6 – Liste d'articles avec `useFetch` (`ListeArticles.js` / `ListeArticles.css`)

Crée un composant qui utilise `useFetch` en lui passant l'URL de l'API `jsonplaceholder`. Affiche un spinner pendant le chargement, un message d'erreur en cas de problème, ou une grille des articles une fois les données reçues. Limite l'affichage aux 9 premiers résultats avec `.slice()`.

> **Points clés :** Utilise `Array.isArray()` avant `.map()` pour éviter une erreur si `donnees` n'est pas encore un tableau. L'URL utilisée est l'API publique `https://jsonplaceholder.typicode.com/posts`.

---

### Étape 7 – Timer avec nettoyage d'effet (`Timer.js` / `Timer.css`)

Crée un composant qui affiche un compteur de secondes au format `mm:ss`. Dans un `useEffect` déclenché selon l'état `actif`, lance un `setInterval` qui incrémente le state chaque seconde. **Retourne une fonction de nettoyage** qui appelle `clearInterval` avec l'identifiant de l'intervalle. Ajoute des boutons pause, reprise et reset.

> **Points clés :** Sans la fonction de nettoyage, l'intervalle continue en arrière-plan même si le composant est démonté, causant des fuites mémoire et des erreurs React.

---

### Étape 8 – Assembler dans `App.js` / `App.css`

Importe tous les composants créés (`Compteur`, `FocusInput`, `CompteurRendu`, `ListeArticles`, `Timer`) et affiche-les dans `App.js` dans une grille de deux colonnes. Chaque composant est encadré dans une carte avec une icône, un titre et le nom du fichier correspondant. `ListeArticles` occupe toute la largeur.

---

## Exercices facultatifs

1. **Reset du compteur** – L'action `reinitialiser` est déjà présente dans le reducer de `Compteur` — vérifie qu'elle remet bien `total` à zéro.
2. **Hook `useStockageLocal`** – Crée un Hook personnalisé qui lit et sauvegarde automatiquement une valeur dans `localStorage`.
3. **Horloge en temps réel** – Ajoute un `useEffect` qui affiche la date et l'heure actuelles, mis à jour chaque seconde avec une fonction de nettoyage.

---

## Lancer le projet

```bash
npm start
```

Application disponible sur [http://localhost:3000](http://localhost:3000).
