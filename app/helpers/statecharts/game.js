// Validation rules
const lastRound = ({words = []}) => words.length == 0
const lastPhase = ({phase = 0}) => phase === 3

const quitGameTransition = {
  QUIT_GAME: {
    NOT_PLAYING: 'quitGame'
  }
}

const game = {
  initial: 'READY_PLAYERS',
  states: {
    NOT_PLAYING: {},
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
        ...quitGameTransition,
        SKIP: {
          SHOW_WORD: {
            actions: ['skipWord']
          }
        },
        GUESS: {
          SHOW_PHASE_RESULTS: {
            actions: ['guessWord'],
            cond: lastRound
          },
          SHOW_WORD: {
            actions: ['guessWord'],
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
        ...quitGameTransition,
        CONTINUE: {
          SHOW_PHASE_RESULTS: {
            actions: ['endRound'],
            cond: lastPhase
          },
          SHOW_PHASE_RESULTS: {
            actions: ['endRound'],
            cond: lastRound
          },
          READY_PLAYERS: {
            actions: ['nextPlayers'],
          }
        },
      }
    },
    SHOW_PHASE_RESULTS: {
      on: {
        ...quitGameTransition,
        CONTINUE: {
          SHOW_PHASE_RESULTS: {
            actions: ['nextPhase']
          },
        },
        NEXT_ROUND: 'READY_PLAYERS'
      }
    }
  },
}

export default game
