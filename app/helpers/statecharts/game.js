// Validation rules
const lastRound = ({words = []}) => words.length == 0
const lastPhase = ({phase = 0}) => phase === 3

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
        ...quitGameTransition,
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
          ...quitGameTransition,
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
