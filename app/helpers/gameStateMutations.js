import shuffle from '../helpers/shuffle'

export const getInitialState = (props) => ({
  players: shuffle(props.players || []),
  words: shuffle(props.words || []),
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

export const getNextPlayersState = (state) => {
  const {round = -1, players} = state
  const nextRound = round + 1

  return {
    round: nextRound,
    score: 0,
    player1: players[nextRound],
    player2: players[(nextRound+1) % players.length],
  }
}

export const getNextPhaseState = ({phase}, props) => ({
  phase: phase + 1,
  round: -1,
  player1: null,
  player2: null,
  words: props.words
})

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
  word.bonus = 0
  word.state = 'guessed'

  return {
    usedWords: guessedWords.concat([word]),
    score: score + 1 + (word.bonus || 0)
  }
}

export const getSkipWordState = ({word, words, score}) => {
  word.bonus = (word.bonus || 0) + 1
  word.state = 'skipped'

  return {
    words: words.concat([word]),
    score: score -1
  }
}
