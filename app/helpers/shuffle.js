import { WORDS_PER_PLAYER } from '../constants/values'

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  let j, x, i, b = Array.from(a)
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = b[i];
    b[i] = b[j];
    b[j] = x;
  }
  console.log(a, b);

  return b;
}

export function filterWords(words, players = []) {
  const count = WORDS_PER_PLAYER * players.length

  return shuffle(words).slice(0, count)
}

export default shuffle
