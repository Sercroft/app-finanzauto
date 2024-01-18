import React, { useState } from "react"
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import UserItem from './UserItem'
import useUsers from "../../hook/useUsers"
import { AntDesign } from '@expo/vector-icons'
import { SwipeListView } from "react-native-swipe-list-view"

const UserList = () => {
    const { users } = useUsers()

    const renderHiddenItem = () => {
        
        return(
            <View style={styles.rowBack}>
                <TouchableOpacity
                    style={[styles.backRightBtn, styles.backRightBtnRight]}
                    onPress={() => {}}
                >
                    <View style={styles.buttonContainer}>
                        <AntDesign name="delete" size={30} color="red" />
                    </View>

                </TouchableOpacity>
        </View>
        )

    }
    

    return(  
        <SwipeListView style={styles.container}
            data={users}
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem={ ({item: user}) => (
                <UserItem {...user}/>      
                
            )}
            ListEmptyComponent={<Text>Cargando...</Text>}  
            leftOpenValue={10}
            rightOpenValue={-75}
            disableRightSwipe={true}
            renderHiddenItem={renderHiddenItem}
            friction={6}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 235
    },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        fllexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        bottom: 0,
        justifyContent: 'center',
        alignContent: 'center',
        position: 'absolute',
        top: 0,
        width: '90%',
        marginTop: 6,
        marginRight: 10,
        height: 148
    },
    backRightBtnRight: {
        backgroundColor: '#FFD0D0',
        borderTopRightRadius: 20, 
        borderBottomRightRadius: 20, 
        right: 0,
    }
})

export default UserList