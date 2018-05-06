const colors = {
  primary: '#f84e41',
  middle: '#de3f74',
  highlight: '#aa4b91',
  dark: '#6c5493',
  darker: '#3c527b',
  darkest: '#2f4858',
}

const style = {
  button: {
    minHeight: 50,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 18,
    border: 'none',
    background: `linear-gradient(40deg, ${colors.primary}, ${colors.middle})`,
    borderRadius: 50,
    margin: 2,
  },
  btnBlue: {
    background: `linear-gradient(40deg, ${colors.dark}, ${colors.darker})`,
  },
}

export default style
