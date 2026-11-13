// @ts-check

/**
 * Valide une quantité d'énergie.
 */
export function validateEnergy(energy) {
  if (energy < 0) throw new Error("Énergie invalide");
  else return energy;
}

/**
 * Vérifie une énergie sans propager l'exception.
 */
export function safeEnergyCheck(energy) {
  try {
    validateEnergy(energy);
    return "Énergie valide";
  } catch (error) {
    return "Énergie invalide";
  }
}

/**
 * Valide un code de porte autorisé.
 */
export function validateGateCode(code) {
  switch (code) {
    case "ALPHA":
      return code;
    case "BETA":
      return code;
    case "OMEGA":
      return code;
    default:
      throw new Error("Code inconnu");
  }
}

/**
 * Vérifie un code de porte sans propager l'exception.
 */
export function safeGateCheck(code) {
  try {
    validateGateCode(code);
    return "Code accepté";
  } catch (err) {
    return "Code refusé";
  }
}

/**
 * Compte les tentatives valides représentées par `A` ou `B`.
 */
export function countValidAttempts(text) {
  let numberOfValidedTry = 0;
  for (let char of text) {
    if (char == "A" || char == "B") numberOfValidedTry++;
  }
  return numberOfValidedTry;
}

/**
 * Compte les tentatives effectuées jusqu'au troisième `X` ou à la fin.
 */
export function attemptsBeforeLock(sequence) {
  let iterations = 0;
  let numberOfWrong;
  for (let char of sequence) {
    if (char != "X") {
      numberOfWrong++;
    }
    if (numberOfWrong != 3) {
      iterations++;
    } else {
      break;
    }
  }
  return iterations;
}
