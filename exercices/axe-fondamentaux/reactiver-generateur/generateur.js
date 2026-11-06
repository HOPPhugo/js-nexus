// @ts-check

/**
 * Calcule la quantité d'énergie manquante.
 */
export function missingEnergy(maxEnergy, currentEnergy) {
  return maxEnergy - currentEnergy
}

/**
 * Calcule le pourcentage d'énergie disponible.
 */
export function energyPercentage(maxEnergy, currentEnergy) {
  return (currentEnergy / maxEnergy) * 100
}

/**
 * Calcule l'énergie disponible après une recharge.
 */
export function energyAfterRecharge(currentEnergy, recharge) {
  return currentEnergy + recharge
}

/**
 * Indique si le générateur possède au moins 500 unités d'énergie.
 */
export function isGeneratorReady(currentEnergy) {
  return currentEnergy >= 500 ? true : false
}

/**
 * Construit le message d'état du générateur.
 */
export function generatorStatus(name, currentEnergy) {
  return `${name} possède ${currentEnergy} unités d'énergie.`
}
