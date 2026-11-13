// @ts-check

/**
 * Additionne les numéros de ronde de 1 au nombre indiqué.
 */
export function sumRounds(numberOfRounds) {
  let roundsAdded = 0;
  for (let i = 1; i <= numberOfRounds; i++) {roundsAdded += i}
  return roundsAdded
}

/**
 * Compte le nombre de caractères d'un code.
 */
export function countSymbols(code) {
  let numberOfChar = 0;
  for (let char of code) numberOfChar++;
  return numberOfChar
}

/**
 * Compte le nombre de caractères `X` dans un code.
 */
export function countX(code) {
  let numberOfX = 0;
  for (let char of code){
    if (char.toLowerCase() == 'x'){
      numberOfX ++;
    }
  }
  return numberOfX
}

/**
 * Calcule le nombre de tours complets possibles avant épuisement de l'énergie.
 */
export function turnsBeforeEmpty(energy, consumption) {
  let numberOfTurn = 0
  while (energy >= consumption){
    energy -= consumption
    numberOfTurn ++
  }
  return numberOfTurn
}

/**
 * Retourne la première ronde pour laquelle le total dépasse une limite.
 */
export function firstRoundAbove(limit) {
  let total= 0
  let number = 1
  while (limit > total){
    total += number
    number++
  }
  return number
}
