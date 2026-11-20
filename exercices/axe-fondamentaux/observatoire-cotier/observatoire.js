// @ts-check

/**
 * Retourne le type JavaScript de la donnée.
 */
export function dataType(value) {
  return typeof value;
}

/**
 * Indique si le comptage vaut undefined.
 */
export function isNotTransmitted(count) {
  return typeof count == "undefined";
}

/**
 * Indique si le comptage vaut null.
 */
export function isOffline(count) {
  return count == null && typeof count != "undefined";
}

/**
 * Indique si un comptage est disponible, c'est-à-dire
 * différent de undefined et de null.
 */
export function hasBirdCount(count) {
  return count != null && typeof count != "undefined";
}

/**
 * Additionne les deux comptages.
 * Un comptage indisponible compte pour 0.
 */
export function totalBirds(northCount, southCount) {
  let localNorthCount =
    northCount != null && typeof northCount != "undefined" ? northCount : 0;
  let localSouthCount =
    southCount != null && typeof southCount != "undefined" ? southCount : 0;

  return localNorthCount + localSouthCount;
}

/**
 * Indique si la hauteur est de type number et n'est pas NaN.
 */
export function isValidWaveHeight(height) {
  return typeof height == "number" && !isNaN(height);
}
