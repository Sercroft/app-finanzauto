import React from 'react'
import { StyleSheet, View } from 'react-native'
import StyledText from '../styleds/StyledText'
import UserList from '../components/User/UserList'

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <StyledText fontWeight='bold' color='secondary' fontSize='big'>Consulta y Registro de Usuarios</StyledText>
                <UserList />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingVertical: 5,
        backgroundColor: '#F5F3F9'
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        margin: 16
    }
})

export default HomeScreen