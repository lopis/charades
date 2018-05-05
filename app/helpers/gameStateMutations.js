import shuffle from '../helpers/shuffle'

export const getInitialState = (props) => ({
  players: shuffle(props.players || []),
  words: props.words || [], //Will be shuffled at the round start
  initialWords: props.words,
  scoreboard: {
    phases: {
      1: [],
      2: [],
      3: []
    }
  },
  phase: 0,
  round: 0,
  player1: null,
  player2: null,
})

export const getNextPlayersState = ({round = -1, players, words, skippedWords = []}) => {
  const nextRound = round + 1

  return {
    round: nextRound,
    score: 0,
    words: shuffle([].concat(words).concat(skippedWords)),
    skippedWords: [],
    guessedWords: [],
    player1: players[nextRound % players.length],
    player2: players[(nextRound+1) % players.length],
  }
}

export const getNextPhaseState = ({phase}, props) => {
  const words = shuffle(props.initialWords)
  console.log('getNextPhaseState', words);

  return {
    players: shuffle(props.players),
    phase: phase + 1,
    round: 0,
    player1: null,
    player2: null,
    ...getNextWordState({words: words}),
  }
}

export const getScoreUpdateState = (state) => {
  const {scoreboard, phase, player1, player2, score} = state
  const phaseScore = scoreboard.phases[phase] || {}

  return {
    scoreboard: Object.assign({}, scoreboard, {
      phases: {
        [phase]: {
          [player1.id]: (phaseScore[player1.id] || 0) + score,
          [player2.id]: (phaseScore[player2.id] || 0) + score
        }
      },
      score: 0
    })
  }
}

export const getNextWordState = ({words = []}) => ({
  word: words[0],
  words: words.slice(1)
})

export const getGuessWordState = ({word, words, guessedWords = [], score}) => {
  score = score + 1 + (word.bonus || 0)
  word.bonus = 0
  word.state = 'guessed'

  return {
    guessedWords: guessedWords.concat([word]),
    score: score
  }
}

export const getSkipWordState = (state) => {
  const {word, skippedWords = [], score} = state
  word.bonus = (word.bonus || 0) + 1

  return {
    skippedWords: skippedWords.concat([word]),
    score: score - 1
  }
}
