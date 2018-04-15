// Validation rules
const isMinus = ({ operator }) => operator === '-'
const isNotMinus = state => !isMinus(state)
const isZero = ({ number }) => number === '0'
const isNotZero = state => !isZero(state)

const notPlayingState = {
  NOT_PLAYING: {
    on: {
      START_GAME: {
        GAME_LOBBY: 'startGame'
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
  GAME_LOBBY: {
    on: {
      ...quitGameTransition,
      CONTINUE: {
        GAME_WORDS: 'collectWords'
      },
      CREATE_PLAYER: {
        GAME_LOBBY: {
          actions: ['createPlayer']
        }
      }
    }
  }
}

const gameWordsState = {
  GAME_WORDS: {
    on: {
      ...quitGameTransition
    }
  }
}

const gamePlayState = {
  GAME_PLAY: {
    on: {
      ...quitGameTransition
    }
  }
}

const gameEndState = {
  GAME_END: {
    on: {
      ...quitGameTransition
    }
  }
}

const statechart = {
  initial: 'GAME_LOBBY',
  states: {
    ...notPlayingState,
    ...gameLobbyState,
    ...gameWordsState,
    ...gamePlayState,
    ...gameEndState,
  },
}

export default statechart






// From here = example code
const cancelClicked = {
  CANCEL_CLICKED: {
    1: {
      actions: ['reset'],
    },
  },
}

const state1 = {
  1: {
    on: {
      ...cancelClicked,
      NUMBER_CLICKED: {
        3.9: {
          actions: ['setDefault'],
          cond: isZero,
        },
        '3.10': {
          actions: ['setNumber'],
          cond: isNotZero,
        },
      },
      DECIMAL_CLICKED: {
        3.11: {
          actions: ['setDefault'],
        },
      },
      OPERATOR_CLICKED: {
        2: {
          actions: ['setMinus'],
          cond: isMinus,
        },
      },
    },
  },
}

const state2 = {
  2: {
    on: {
      ...cancelClicked,
      CANCEL_ENTRY_CLICKED: {
        1: {
          actions: ['setDefault'],
        },
      },
      NUMBER_CLICKED: {
        3.9: {
          actions: ['setNegativeDefault'],
          cond: isZero,
        },
        '3.10': {
          actions: ['appendNumber'],
          cond: isNotZero,
        },
      },
      DECIMAL_CLICKED: {
        3.11: {
          actions: ['setNegativeDefault'],
        },
      },
    },
  },
}

const state3 = {
  3: {
    on: {
      ...cancelClicked,
      CANCEL_ENTRY_CLICKED: {
        1: {
          actions: ['setDefault'],
        },
      },
      PERCENT_CLICKED: {
        8: {
          actions: ['calculatePercentage'],
        },
      },
      OPERATOR_CLICKED: {
        4: {
          actions: ['setOperand1', 'setOperator'],
        },
      },
    },
    states: {
      9: {
        on: {
          NUMBER_CLICKED: {
            10: {
              actions: ['removeZero', 'removeDecimal', 'appendNumber'],
              cond: isNotZero,
            },
          },
          DECIMAL_CLICKED: '11',
        },
      },
      10: {
        on: {
          NUMBER_CLICKED: {
            10: {
              actions: ['removeDecimal', 'appendNumber'],
            },
          },
          DECIMAL_CLICKED: '11',
        },
      },
      11: {
        on: {
          NUMBER_CLICKED: {
            11: {
              actions: ['appendDecimal'],
            },
          },
        },
      },
    },
  },
}

const state4 = {
  4: {
    on: {
      ...cancelClicked,
      OPERATOR_CLICKED: {
        4: {
          actions: ['setOperator'],
          cond: isNotMinus,
        },
        5: {
          actions: ['setMinus'],
          cond: isMinus,
        },
      },
      NUMBER_CLICKED: {
        6.12: {
          actions: ['setDefault'],
          cond: isZero,
        },
        6.13: {
          actions: ['setNumber'],
          cond: isNotZero,
        },
      },
      DECIMAL_CLICKED: {
        6.14: {
          actions: ['setDefault'],
        },
      },
    },
  },
}

const state5 = {
  5: {
    on: {
      ...cancelClicked,
      CANCEL_ENTRY_CLICKED: {
        4: {
          actions: ['setDefault'],
        },
      },
      NUMBER_CLICKED: {
        6.12: {
          actions: ['setNegativeDefault'],
          cond: isZero,
        },
        6.13: {
          actions: ['appendNumber'],
          cond: isNotZero,
        },
      },
      DECIMAL_CLICKED: {
        6.14: {
          actions: ['setNegativeDefault'],
        },
      },
    },
  },
}

const state6 = {
  6: {
    on: {
      ...cancelClicked,
      CANCEL_ENTRY_CLICKED: {
        4: {
          actions: ['setDefault'],
        },
      },
      OPERATOR_CLICKED: {
        4: {
          actions: ['calculateResult', 'setOperator'],
        },
      },
      EQUAL_CLICKED: {
        8: {
          actions: ['calculateResult'],
        },
      },
    },
    states: {
      12: {
        on: {
          NUMBER_CLICKED: {
            13: {
              actions: ['removeZero', 'removeDecimal', 'appendNumber'],
              cond: isNotZero,
            },
          },
          DECIMAL_CLICKED: '14',
        },
      },
      13: {
        on: {
          NUMBER_CLICKED: {
            13: {
              actions: ['removeDecimal', 'appendNumber'],
            },
          },
          DECIMAL_CLICKED: '14',
        },
      },
      14: {
        on: {
          NUMBER_CLICKED: {
            14: {
              actions: ['appendDecimal'],
            },
          },
        },
      },
    },
  },
}

const state8 = {
  8: {
    on: {
      ...cancelClicked,
      PERCENT_CLICKED: {
        8: {
          actions: ['calculatePercentage'],
        },
      },
      OPERATOR_CLICKED: {
        4: {
          actions: ['setOperator'],
        },
      },
    },
  },
}
