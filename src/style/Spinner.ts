export default {
  '@global': {
    '.kuc-spinner-outer': {
      width: '100%',
      height: '100%',
      'background-color': 'rgba(0, 0, 0, 0.1)',
      position: 'fixed',
      top: '0',
      left: '0',
      'z-index': '9999'
    },
    '.kuc-spinner': {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    '.kuc-loader': {
      width: '3.5em',
      height: '3.5em',
      'border-radius': '50%',
      border: '6px solid transparent',
      'border-top-color': '#3498db',
      'border-bottom-color': 'white',
      'border-left-color': 'white',
      'border-right-color': 'white',
      '-webkit-animation': 'kuc-load 1.1s infinite ease',
      animation: 'kuc-load 1.1s infinite ease'
    },
    '@keyframes kuc-load': {
      '0%': {
        transform: 'rotate(0deg)'
      },
      '3%': {
        transform: 'rotate(10deg)'
      },
      '6%': {
        transform: 'rotate(20deg)'
      },
      '8%': {
        transform: 'rotate(30deg)'
      },
      '11%': {
        transform: 'rotate(40deg)'
      },
      '14%': {
        transform: 'rotate(50deg)'
      },
      '17%': {
        transform: 'rotate(60deg)'
      },
      '19%': {
        transform: 'rotate(70deg)'
      },
      '22%': {
        transform: 'rotate(80deg)'
      },
      '25%': {
        transform: 'rotate(90deg)'
      },
      '28%': {
        transform: 'rotate(100deg)'
      },
      '31%': {
        transform: 'rotate(110deg)'
      },
      '33%': {
        transform: 'rotate(120deg)'
      },
      '36%': {
        transform: 'rotate(130deg)'
      },
      '39%': {
        transform: 'rotate(140deg)'
      },
      '42%': {
        transform: 'rotate(150deg)'
      },
      '44%': {
        transform: 'rotate(160deg)'
      },
      '47%': {
        transform: 'rotate(170deg)'
      },
      '50%': {
        transform: 'rotate(180deg)'
      },
      '53%': {
        transform: 'rotate(190deg)'
      },
      '56%': {
        transform: 'rotate(200deg)'
      },
      '58%': {
        transform: 'rotate(210deg)'
      },
      '61%': {
        transform: 'rotate(220deg)'
      },
      '64%': {
        transform: 'rotate(230deg)'
      },
      '67%': {
        transform: 'rotate(240deg)'
      },
      '69%': {
        transform: 'rotate(250deg)'
      },
      '72%': {
        transform: 'rotate(260deg)'
      },
      '75%': {
        transform: 'rotate(270deg)'
      },
      '78%': {
        transform: 'rotate(280deg)'
      },
      '81%': {
        transform: 'rotate(290deg)'
      },
      '83%': {
        transform: 'rotate(300deg)'
      },
      '86%': {
        transform: 'rotate(310deg)'
      },
      '89%': {
        transform: 'rotate(320deg)'
      },
      '92%': {
        transform: 'rotate(330deg)'
      },
      '94%': {
        transform: 'rotate(340deg)'
      },
      '97%': {
        transform: 'rotate(350deg)'
      },
      '100%': {
        transform: 'rotate(360deg)'
      }
    }
  }
};
