// @ts-check

const FACTEUR = 3.6

/**
 * Convertit une vitesse de km/h en m/s.
 */
export function kmhToMs(speedKmh) {
  return speedKmh/FACTEUR
}

/**
 * Calcule l'écart entre une rafale et le vent moyen.
 */
export function gustGap(gustKmh, averageKmh) {
  return gustKmh-averageKmh
}

/**
 * Calcule la moyenne de trois mesures.
 */
export function averageOfThree(speed1, speed2, speed3) {
  return (speed1 + speed2 + speed3) / 3
}

/**
 * Indique si le vent atteint au moins 75 km/h.
 */
export function isStormAlert(speedKmh) {
  return speedKmh >= 75 ? true : false
}

/**
 * Construit le bulletin météo d'une station.
 */
export function windReport(station, speedKmh) {
  return `${station} : vent de ${speedKmh} km/h (${kmhToMs(speedKmh)} m/s).`
}
