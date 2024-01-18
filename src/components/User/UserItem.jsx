import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import StyledText from '../../styleds/StyledText'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const UserItemHeader = ({ id, firstName, lastName, picture }) => {
    const navigation = useNavigation()
    return(
        <>
            <View flexDirection='row' style={{ 
                padding: 10, 
                borderRadius: 20,
                backgroundColor: '#CCE6E3',
                height: 120
            }}>

                <View>
                    <Image style={styles.image} source={{ uri: picture }}></Image>
                </View>

                <View style={{ flex:1, padding: 15, zIndex: 10 }}>
                    <StyledText fontWeight='bold' fontSize='medium' color='primaryTextCard'>{firstName + ' ' + lastName}</StyledText>
                    <View style={{ marginTop: 10 }}>
                        <StyledText fontWeight='bold' fontSize='small'>ID: {id}</StyledText>
                    </View>
                </View>
            </View>

            <View style={{ 
                backgroundColor: '#EFEFEF', 
                marginTop: -14, 
                zIndex: -1,
                padding: 10,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
            }}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => navigation.navigate('profile', {
                            userId: id,
                            userFirstName: firstName,
                            userLastName: lastName,
                            userPicture: picture
                        })}
                    >
                        <View style={{ 
                            flex:1, 
                            flexDirection:'row', 
                            justifyContent: 'space-between',
                        }}>
                            <StyledText fontWeight='bold' color='primaryTextCard'>Ver detalle</StyledText>
                            
                            <AntDesign name='right' color='#166D6B' size={15}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}


const UserItem = (props) => (

    <View key={props.id} style={styles.container}>
        <UserItemHeader {...props}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        paddingVertical: 4,
        paddingHorizontal: 4

    },
    buttonContainer: {
        
    },
    image: {
        width: 140,
        height: 140,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#bbb'
    },
    button: {
        backgroundColor: 'transparent',
        marginTop: 10,
        borderRadius: 8,
        width: 180,
        marginLeft: 165,
        alignItems: 'right'
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default UserItem