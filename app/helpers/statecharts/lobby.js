// Validation rules
const isMinus = ({ operator }) => operator === '-'
const isNotMinus = state => !isMinus(state)
const isZero = ({ number }) => number === '0'
const isNotZero = state => !isZero(state)

const notPlayingState = {
  NOT_PLAYING: {
    on: {
      START_GAME: {
        GAME_PLAYERS: 'startGame'
      }
    }
  }
}

const quitGameTransition = {
  QUIT_GAME: {
    NOT_PLAYING: 'quitGame'
  }
}

const gameLobbyState = {
  GAME_PLAYERS: {
    on: {
      ...quitGameTransition,
      CONTINUE: {
        GAME_WORDS: 'collectWords'
      },
      CREATE_PLAYER: {
        GAME_PLAYERS: {
          actions: ['createPlayer']
        }
      },
      SKIP_INTRO: {
        GAME_PLAY: 'startGame'
      }
    }
  }
}

const gameWordsState = {
  GAME_WORDS: {
    on: {
      ...quitGameTransition,
      CREATE_WORD: {
        GAME_WORDS: {
          actions: ['createWord']
        }
      },
      CONTINUE: {
        GAME_PLAY: 'startGame'
      }
    }
  }
}

const gamePlayState = {
  GAME_PLAY: {
    on: {
      ...quitGameTransition,
      GAME_OVER: {
        GAME_END: 'gameOver'
      }
    }
  }
}

const gameEndState = {
  GAME_END: {
    on: {
      QUIT_GAME: {
        GAME_END: {
          actions: ['quitGame']
        }
      },
      NEW_GAME: {
        GAME_PLAYERS: 'startGame'
      }
    }
  }
}

const lobby = {
  initial: 'GAME_PLAYERS',
  states: {
    ...notPlayingState,
    ...gameLobbyState,
    ...gameWordsState,
    ...gamePlayState,
    ...gameEndState,
  },
}

export default lobby
