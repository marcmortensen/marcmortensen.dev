module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  plugins: [],
  variants: {},
  theme: {
    maxHeight: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Roboto Condensed'],
    },
    fontSize: {
      9: '9px',
      10: '10px',
      11: '11px',
      12: '12px',
      13: '13px',
      14: '14px',
      15: '15px',
      16: '16px',
      18: '18px',
      20: '20px',
      25: '25px',
      30: '30px',
      35: '35px',
      40: '40px',
      45: '45px',
      50: '50px',
      65: '65px',
      100: '100px',
      150: '150px',
      170: '170px',
      200: '200px',
    },
    letterSpacing: {
      0: 0,
      55: '0.55px',
      65: '0.65px',
      75: '0.75px',
      90: '0.9px',
      100: '1px',
      125: '1.25px',
      150: '1.5px',
      260: '2.6px',
      320: '3.2px',
      400: '4px',
      500: '5px',
      700: '7px',
    },
    colors: {
      transparent: 'transparent',
      primary: '#F78D1E',
      white: '#ffffff',
      'gray-light': '#F9F9F9',
      'gray-dark': '#707070',
      gray: '#d4d4d4',
      black: '#000000',
      yellow: '#FEFFBE',
      red: '#ff0000',
      green: '#007300',
    },
    extend: {
      scale: {
        200: '2',
        300: '3',
        '4/3': 'calc(4/3)',
        0: '0',
        25: '.25',
        50: '.5',
        75: '.75',
        100: '1',
      },
      inset: {
        header: '3.25rem',
        13: '3.25rem',
        '1/2': '50%',
        '1/4': '25%',
        '3/4': '75%',
        full: '100%',
      },
      padding: {
        full: '100%',
      },
      minWidth: {
        32: '8rem',
      },
      maxWidth: {
        512: '64rem',
      },
      minHeight: {
        'screen-height-header': 'calc(100vh - 3.25rem)',
        'screen-height-header-extra': 'calc(100vh - 8.25rem)',
      },
      spacing: {
        11: '2.75rem',
        13: '3.25rem',
        18: '4.5rem',
        22: '5.5rem',
        49: '12.5rem',
        80: '20rem',
        128: '32rem',
        144: '36rem',
        'height-header': '3.25rem',
        'screen-height-header': 'calc(100vh - 3.25rem)',
        'screen-height-header-extra': 'calc(100vh - 8.25rem)',
      },
    },
  },
};
