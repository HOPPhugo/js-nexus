// @ts-check

/**
 * Retourne le type JavaScript de la valeur.
 */
export function valueType(value) {
  return typeof value
}

/**
 * Indique si la valeur est undefined.
 */
export function isUndefined(value) {
  return value === undefined ? true : false
}

/**
 * Indique si la valeur est null.
 */
export function isNull(value) {
  return value === null ? true : false
}

/**
 * Indique si une valeur est connue, c'est-à-dire
 * différente de undefined et de null.
 */
export function hasKnownValue(value) {
  return value !== null && value !== undefined ? true : false
}

/**
 * Compare l'énergie disponible à l'énergie minimale.
 * Les deux valeurs sont converties en nombres.
 */
export function hasEnoughEnergy(energy, minimumEnergy) {
  return Number(energy) >= Number(minimumEnergy) ? true : false
}

/**
 * Compare strictement le nom de la zone attendue.
 */
export function isCorrectZone(zone, expectedZone) {
  return zone === expectedZone ? true : false 
}
