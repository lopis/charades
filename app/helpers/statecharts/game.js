// Validation rules
const isMinus = ({ operator }) => operator === '-'
const isNotMinus = state => !isMinus(state)
const isZero = ({ number }) => number === '0'
const isNotZero = state => !isZero(state)

const quitGameTransition = {
  QUIT_GAME: {
    NOT_PLAYING: 'quitGame'
  }
}

const game = {
  initial: 'PRE_STATE',
  states: {
    PRE_STATE: {
      on: {
        CONTINUE: {
          PRE_STATE: {
            actions: ['resetPhase', 'shufflePlayers', 'shuffleWords', 'nextPlayers']
          },
        },
        NEXT_ROUND: 'READY_PLAYERS'
      }
    },
    READY_PLAYERS: {
      on: {
        ...quitGameTransition,
        CONTINUE: {
          SHOW_WORD: {
            actions: ['nextWord']
          }
        }
      }
    },
    SHOW_WORD: {
      on: {
        SKIP: {
          SHOW_WORD: {
            actions: ['skipWord']
          }
        },
        GUESS: {
          SHOW_WORD: {
            actions: ['guessWord']
          }
        },
        TIMES_UP: {
          SHOW_ROUND_RESULTS: {
            actions: ['endRound']
          }
        },
        LAST_WORD: {
          SHOW_ROUND_RESULTS: {
            actions: ['endRound']
          }
        }
      }
    },
    SHOW_ROUND_RESULTS: {
      on: {
        CONTINUE: {
          SHOW_ROUND_RESULTS: {
            actions: ['nextPlayers']
          }
        },
        NEXT_ROUND: 'READY_PLAYERS'
      }
    }
  },
}

export default game
