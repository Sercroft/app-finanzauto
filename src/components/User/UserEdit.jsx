import React from "react"
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import FormProfile from "../Form/FormProfile"
import { useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import StyledText from "../../styleds/StyledText"
import DB from "../../config/database"

const UserEdit = () => {
    const route = useRoute()
    const { id, firstName, lastName, picture } = route.params
    const spaceText = 'Información\ndel usuario'



    return(
        <ScrollView>
        <View style={styles.container}>
            <StyledText fontWeight='bold' fontSize='big' color='secondary'>{spaceText}</StyledText>
            <View style={styles.button}>
                <TouchableOpacity>
                    <AntDesign name='edit' color='#fff' size={30}/>
                </TouchableOpacity>
            </View>
        </View>
        <View>
            <FormProfile 
                userId={id} 
                userFirstName={firstName} 
                userLastName={lastName} 
                userPicture = { picture }
                userGenre = { 'Femenino' }
                userEmail = { 'correo_test@finanzauto.com.co' }
                userDateBirth = { '12/07/1978' }
                userPhone = { '123456789' }
                editable = { true }
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
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A2D033',
        borderRadius: 40,
        width: 45,
        height: 45
    }
})
export default UserEdit