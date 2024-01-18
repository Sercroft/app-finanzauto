import React, { useState } from 'react'
import { Formik, useField, useFormikContext } from "formik"
import { formValidationSchema } from '../../validationSchemas/formValidation'
import StyledTextInput from '../../styleds/StyledTextInput'
import { View, StyleSheet, TouchableOpacity, Text, Image, Button } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import StyledText from '../../styleds/StyledText'
import { collection, addDoc } from 'firebase/firestore'
import DB from '../../config/database'


// Valores iniciales del form
const initialValues = {
    id: '',
    title: '',
    name: '',
    surname: '',
    genre: '',
    email: '',
    dateBirth: '',
    phone: ''
}


const FormikInputValue = ({ name, isFilled, editable, ...props}) => {
    // El custom hook useField devuelve un array de 3 posiciones (campo, meta información relevante del campo, cómo actualizar los campos)
    const [field, meta, helpers] = useField(name)
    console.log(`NAME: ${name}`);
    
    return(
        <>
            <StyledTextInput
                error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                isFilled={isFilled}
                editable={editable}
                name={name}
                {...props} // Valores como el placeholder, etc.
                />
            {meta.error && <Text style={styles.error}>{meta.error}</Text>}
        </>
    )
}

const areFieldsFilled = (...fields) => {
    return fields.reduce((acc, field) => acc && Boolean(field && field.trim() !== ''), true);
}

const FormProfile = ({ userId, userFirstName, userLastName, userPicture, userGenre, userEmail, userDateBirth, userPhone, editable = false }) => {
    const filledProps = areFieldsFilled(userId, userFirstName, userLastName, userGenre, userEmail, userDateBirth, userPhone)
    const buttonText = editable ? 'Guardar' : 'Crear'

    const [newUser, setNewUser] = useState({
        id: '',
        title: '',
        name: '',
        surname: '',
        genre: '',
        email: '',
        dateBirth: '',
        phone: ''
    })

    // Guardar registros en firebase
    const handleCreate = async () => {
        await addDoc(collection(DB, 'users'), newUser)
        console.log(`NEW USER: ${JSON.stringify(newUser)}`)
        navigation.goBack()
    }

    const handleUpdate = (formData) => {
        const docRef = doc(DB, 'users', id)
        updateDoc(docRef, {formData})
    }

    return(
        <>
            <View style={{ backgroundColor: '#EDF4D8' }}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: userPicture }}></Image>
                </View>
                <Formik
                    validationSchema={formValidationSchema} 
                    initialValues={initialValues}
                    onSubmit={ values => console.log(values) }
                >
                    {({handleChange, handleSubmit, values}) => {
                        return(
                            <View style={styles.form}>
                                <FormikInputValue
                                    name='ID'
                                    value={ userId }
                                    isFilled={ filledProps }
                                    editable = { editable }
                                    onChangeText={(text) => setNewUser({...newUser, id: text})}
                                />        

                                <FormikInputValue 
                                    name='Título'
                                    value={ userId }
                                    isFilled={ filledProps }
                                    editable = { editable }
                                    onChangeText={(text) => setNewItem({...newItem, title: text})}
                                />

                                <FormikInputValue 
                                    name='Nombres'
                                    value={ userFirstName }
                                    isFilled={ filledProps }
                                    editable = { editable }
                                    onChangeText={(text) => setNewItem({...newItem, name: text})}
                                />

                                <FormikInputValue 
                                    name='Apellidos'
                                    value={ userLastName }
                                    isFilled={ filledProps }
                                    editable = { editable }
                                    onChangeText={(text) => setNewItem({...newItem, surname: text})}
                                />

                                <FormikInputValue 
                                    name='Género'
                                    value={ userGenre }
                                    isFilled={ filledProps }
                                    editable = { editable }
                                    onChangeText={(text) => setNewItem({...newItem, genre: text})}
                                />

                                <FormikInputValue 
                                    name='Correo Electrónico'
                                    value={ userEmail }
                                    isFilled={ filledProps }
                                    editable = { editable }
                                    onChangeText={(text) => setNewItem({...newItem, email: text})}
                                />

                                <FormikInputValue 
                                    name='Fecha de nacimiento'
                                    value={ userDateBirth }
                                    isFilled={ filledProps }
                                    editable = { editable }
                                    onChangeText={(text) => setNewItem({...newItem, dateBirth: text})}
                                />

                                <FormikInputValue 
                                    name='Teléfono'
                                    value={ userPhone }
                                    isFilled={ filledProps }
                                    editable = { editable }
                                    onChangeText={(text) => setNewItem({...newItem, phone: text})}
                                />
                                <TouchableOpacity 
                                    style={styles.button} 
                                    onPress={handleCreate}
                                >
                                    <View style={{ flex:1, flexDirection:'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <AntDesign name='check' color='white' size={16} style={{ marginRight: 6}} />
                                        <StyledText color='colorButtonPrimary'>{ buttonText }</StyledText>  
                                    </View>   
                                </TouchableOpacity>
                                
                                <TouchableOpacity 
                                    style={styles.button2} 
                                    onPress={() => navigation.navigate('profile', {userId: id})}
                                >
                                    <View style={{ flex:1, flexDirection:'row', alignItems: 'center',justifyContent: 'center' }}>
                                        <AntDesign name='close' color='gray' size={16} style={{ marginRight: 6}} />
                                        <StyledText fontWeight='bold' color='colorButtonSecondary'>Cancelar</StyledText>  
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                </Formik>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center'
    },
    form: {
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 12,
        backgroundColor: '#fff',
        borderRadius: 30,
        alignItems: 'center'
    },
    error: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
        marginTop: -8
    },
    image: {
        width: 160,
        height: 160,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#bbb'
    },
    button: {
        width: 200,
        height: 45,
        backgroundColor: '#A2D033',
        marginTop: 20,
        borderRadius: 16,
    },
    button2: {
        width: 200,
        height: 40,
        backgroundColor: '#fff',
        marginVertical: 10,
    }
})

export default FormProfile