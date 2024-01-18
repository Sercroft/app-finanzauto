import React from "react"
import { TextInput, StyleSheet, View, Text  } from 'react-native'
import { AntDesign } from '@expo/vector-icons'


const StyledTextInput = ({ style = {}, name, error, isFilled, editable, ...props}) => {

    const inputStyles = [
        styles.textInput,
        styles,
        error && styles.error
    ]

    return(
        <View style={inputStyles}>
            <Text style={styles.nameInput}>{name}</Text>
            <TextInput  
                {...props}
                editable={editable} 
                style={editable ? styles.editableText : styles.nonEditableText}   
            /> 

            {isFilled &&(
                <AntDesign  name='check' size={18} color='#A3D136' style={styles.icon}/>  
            )}
            
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        width: 300,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginHorizontal: 10,
        marginVertical: 10
    },
    error: {
        borderColor: 'red'
    },
    icon: {
        position: 'absolute',
        marginLeft: 260,
        marginTop: 9,
    },
    editableText: {
        color: 'black'
    },
    nonEditableText: {
        color: '#4E4E4E'
    },
    nameInput: {
        height: 20,
        fontSize: 12,
        zIndex: 3,
        position: 'absolute',
        marginHorizontal: 12, 
        marginTop: -10,
        backgroundColor: '#fff'
    }
})

export default StyledTextInput