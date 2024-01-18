import React from "react"
import { Text, StyleSheet } from 'react-native'
import theme from '../../theme.js'

export default function StyledText({children, align, flexDirection, justifyContent, color, fontSize, fontWeight, style, ...restOfProps}){
    const textStyles = [
        styles.text,
        flexDirection === 'center' && styles.flexDirection,
        justifyContent === 'center' && styles.justifyContent,
        align === 'center' && styles.textAlignCenter,
        color === 'colorTitlePrimary' && styles.colorTitlePrimary,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        color === 'subHeading' && styles.subHeading, 
        color === 'primaryTextCard' && styles.colorTextPrimaryCard,
        color === 'colorButtonPrimary' && styles.colorButtonPrimary,
        color === 'colorButtonSecondary' && styles.colorButtonSecondary,
        fontWeight === 'bold' && styles.bold,
        fontSize === 'superBig' && styles.fontSizeSuperBig,
        fontSize === 'big' && styles.fontSizeBig,
        fontSize === 'medium' && styles.fontSizeMedium,
        fontSize === 'small' && styles.fontSizeSmall, 
    ]

    return(
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>     
    )
}

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorTitlePrimary: {
        color: '#175B58'
    },
    colorTextPrimaryCard: {
        color: '#166D6B'
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    colorButtonPrimary: {
        color: theme.colors.white
    },
    colorButtonSecondary: {
        color: '#A1A2A1'
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subHeading: {
        fontSize: theme.fontSizes.subHeading
    },
    textAlignCenter: {
        textAlign: 'center'
    },
    flexDirection: {
        flexDirection: 'row'
    },
    justifyContent: {
        justifyContent: 'space-around'
    },
    fontSizeSuperBig: {
        fontSize: 50
    },
    fontSizeBig: {
        fontSize: 30
    },
    fontSizeMedium: {
        fontSize: 20
    },
    fontSizeSmall: {
        fontSize: 10
    }
})