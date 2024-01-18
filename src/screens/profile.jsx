import React from "react"
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import StyledText from '../styleds/StyledText'
import { AntDesign } from '@expo/vector-icons'
import FormProfile from '../components/Form/FormProfile'
import { useRoute, useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
    const navigation = useNavigation()
    const spaceText = 'Información\ndel usuario'

    const route = useRoute()
    const { userId, userFirstName, userLastName, userPicture } = route.params

    return(
        <ScrollView>
            <View style={styles.container}>
                <StyledText fontWeight='bold' fontSize='big' color='secondary'>{spaceText}</StyledText>
                <View style={styles.button}>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('edit', {
                            id: userId,
                            firstName: userFirstName,
                            lastName: userLastName,
                            picture: userPicture
                        })}>
                        <AntDesign name='edit' color='#fff' size={30}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <FormProfile 
                    userId={userId} 
                    userFirstName={userFirstName} 
                    userLastName={userLastName} 
                    userPicture = { userPicture }
                    userGenre = { 'Femenino' }
                    userEmail = { 'correo_test@finanzauto.com.co' }
                    userDateBirth = { '12/07/1978' }
                    userPhone = { '123456789' }
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#EDF4D8',
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        margin: 16
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A2D033',
        borderRadius: 40,
        width: 45,
        height: 45
    }
})


export default ProfileScreen