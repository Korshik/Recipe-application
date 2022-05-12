import { createTheme } from '@material-ui/core/styles';

import pathRegular from './static/Montserrat-Regular.ttf';
import pathBold from './static/Montserrat-Bold.ttf';
import pathMedium from './static/Montserrat-Medium.ttf';
import pathSemiBold from './static/Montserrat-SemiBold.ttf';
import pathExtraBold from './static/Montserrat-ExtraBold.ttf';

class Font {
    constructor(fname, fstyle, fweight, furl) {
        this.fname = fname;
        this.fstyle = fstyle;
        this.fweight = fweight;
        this.furl = furl;

        return {
            fontFamily: this.fname,
            fontStyle: this.fstyle,
            fontDisplay: 'swap',
            fontWeight: this.fweight,
            src: `
                local(${this.fname}),
                url(${this.furl}) format('ttf')
            `,
            unicodeRange:
                'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
        }
    }
};

const montserratRegular = new Font('Montserrat', 'normal', 400, pathRegular);
const montserratBold = new Font('Montserrat', 'normal', 600, pathBold);
const montserratSemiBold = new Font('Montserrat', 'normal', 600, pathSemiBold);
const montserratExtraBold = new Font('Montserrat', 'normal', 600, pathExtraBold);
const montserratMedium = new Font('Montserrat', 'normal', 500, pathMedium);
export const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat',
        fontSize: 20,
        body1: {
            fontWeight: 400,
            fontSize: 20
        },
        body2: {
            fontWeight: 400,
            fontSize: 10
            
        },
        h1: {
            fontSize: 78,
            fontWeight: 400,
            color: '#444'
        } ,
        
       
    },
    overrides: {
        MuiCssBaseline: {
          '@global': {
            '@font-face': [montserratRegular, montserratBold, montserratSemiBold, montserratExtraBold, montserratMedium],
          },
        },
      },
});

export default theme;