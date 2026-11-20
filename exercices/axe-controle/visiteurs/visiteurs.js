// @ts-check

export const UNIVERSITIES = [
  "Académie Babbage",
  "Institut Lovelace",
  "Université Hopper",
  "École Dijkstra",
  "Collège Von Neumann",
];

export const MASTER_REQUIRED = ["Institut Lovelace", "École Dijkstra"];

/**
 * Indique si une université est connue.
 */
export function isKnownUniversity(university) {
  for (let uni of UNIVERSITIES) {
    if (uni == university) return true;
  }
  return false;
}

/**
 * Convertit un titre en niveau numérique.
 */
export function titleLevel(title) {
  switch (title) {
    case "Bachelor":
      return 1;
    case "Master":
      return 2;
    default:
      return 0;
  }
}

/**
 * Indique si une université exige un Master.
 */
export function requiresMaster(university) {
  return MASTER_REQUIRED.find((element) => element == university)
    ? true
    : false;
}

/**
 * Indique si un visiteur est considéré comme fiable.
 */
export function isTrusted(university, title) {
  return ((isKnownUniversity(university) && !requiresMaster(university) && titleLevel(title) != 0) || (requiresMaster(university) && titleLevel(title) == 2 )) 
  }

/**
 * Construit le message d'accueil selon l'université et le titre.
 */
export function welcomeMessage(university, title) {
  if (!isKnownUniversity(university))
    return "Université inconnue"
  else if (titleLevel(title) == 0)
    return "Titre inconnu"
  else if ((requiresMaster(university) && titleLevel(title) == 2 ))
}

/**
 * Vérifie que tous les visiteurs sont fiables.
 */
export function allTrusted(universities, titles) {
  // TODO
}
