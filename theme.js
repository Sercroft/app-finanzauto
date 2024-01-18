import  { Platform } from 'react-native'

const theme = {
    appBar: {
        os: Platform.select({
            android: '#586069',
            ios: '#24292e',
            default: 'purple'
        }),
        textPrimary: '#fff',
        textSecondary: '#888',
    },
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#4E4E4E',
        primary: '#0366d6',
        white: '#fff',
        os: Platform.select({
            android: '#0366d6',
            ios: 'orange',
            default: 'purple'
        })
    },
    fontSizes: {
        body: 14,
        subHeading: 16
    },
    fonts: {
        main: 'System'
    },
    fontWeights: {
        normal: '400',
        bold: '700'
    }
}

export default theme