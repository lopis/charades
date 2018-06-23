const notPlayingState = {
  NOT_PLAYING: {
    on: {
      START_GAME: {
        GAME_PLAYERS: {
          actions: ['startGame']
        }
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
      CONTINUE: {
        GAME_WORDS: {
          actions: ['collectWords']
        }
      },
      CREATE_PLAYER: {
        GAME_PLAYERS: {
          actions: ['createPlayer']
        }
      },
      REMOVE_PLAYER: {
        GAME_PLAYERS: {
          actions: ['removePlayer']
        }
      }
    }
  }
}

const gameWordsState = {
  GAME_WORDS: {
    on: {
      SELECT_WORDS: {
        GAME_WORDS: {
          actions: ['selectWords']
        }
      },
      CONTINUE: 'GAME_PLAY'
    }
  }
}

const gamePlayState = {
  GAME_PLAY: {
    on: {
      GAME_OVER: {
        GAME_END: {
          actions: ['gameOver']
        }
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
        GAME_PLAYERS: {
          actions: ['startGame']
        }
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
