import React, { useEffect, useState, Component } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'

export default function HomeScreen(props) {
    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])

    const entityRef = firebase.firestore().collection('entities')
    const userID = props.extraData.id

    // useEffect(() => {
    //     entityRef
    //         .where("authorID", "==", userID)
    //         .orderBy('createdAt', 'desc')
    //         .onSnapshot(
    //             querySnapshot => {
    //                 const newEntities = []
    //                 querySnapshot.forEach(doc => {
    //                     const entity = doc.data()
    //                     entity.id = doc.id
    //                     newEntities.push(entity)
    //                 });
    //                 setEntities(newEntities)
    //             },
    //             error => {
    //                 console.log(error)
    //             }
    //         )
    // }, [])

    const onAddButtonPress = () => {
        if (entityText && entityText.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                text: entityText,
                authorID: userID,
                createdAt: timestamp,
            };
            entityRef
                .add(data)
                .then(_doc => {
                    setEntityText('')
                    Keyboard.dismiss()
                })
                .catch((error) => {
                    alert(error)
                });
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.headerbox} >
                    <Text style={styles.header}>Rachel Tong</Text>
                    <Text style={styles.header}> </Text>
                    <Text style={styles.header}> </Text>
                    <img src={"./CORNELL.jpg"}></img>
                    <Text style={styles.text}> </Text>
                    <Text style={styles.header}> </Text>
                    <View style={styles.favbox}>
                        <div style={styles.cols}>
                            <img src={"./CORNELL.jpg"}></img><Text style={styles.text}>Appointments</Text>
                        </div>
                        <div>
                            <img src={"./CORNELL.jpg"}></img><Text style={styles.text}>Resources</Text>
                        </div>
                        <div>
                            <img src={"./CORNELL.jpg"}></img><Text style={styles.text}>Upcoming Events</Text>
                        </div>
                        <div>
                            <img src={"./CORNELL.jpg"}></img><Text style={styles.text}>Upcoming Events</Text>
                        </div>
                        <div>
                            <img src={"./CORNELL.jpg"}></img><Text style={styles.text}>Upcoming Events</Text>
                        </div>
                    </View>
                </View>
                <TouchableOpacity style={styles.sectionbox} onPress={onAddButtonPress}>
                    <Text style={styles.title}>Health</Text>
                    <Text style={styles.text}>Find more about health resources and book appointments</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sectionbox} onPress={onAddButtonPress}>
                    <Text style={styles.title}>Finance</Text>
                    <Text style={styles.text}>Find more about health resources and book appointments</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sectionbox} onPress={onAddButtonPress}>
                    <Text style={styles.title}>Housing</Text>
                    <Text style={styles.text}>Find more about health resources and book appointments</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


// export default function HomeScreen(props) {

//     const [entityText, setEntityText] = useState('')
//     const [entities, setEntities] = useState([])

//     const entityRef = firebase.firestore().collection('entities')
//     const userID = props.extraData.id

//     useEffect(() => {
//         entityRef
//             .where("authorID", "==", userID)
//             .orderBy('createdAt', 'desc')
//             .onSnapshot(
//                 querySnapshot => {
//                     const newEntities = []
//                     querySnapshot.forEach(doc => {
//                         const entity = doc.data()
//                         entity.id = doc.id
//                         newEntities.push(entity)
//                     });
//                     setEntities(newEntities)
//                 },
//                 error => {
//                     console.log(error)
//                 }
//             )
//     }, [])

//     const onAddButtonPress = () => {
//         if (entityText && entityText.length > 0) {
//             const timestamp = firebase.firestore.FieldValue.serverTimestamp();
//             const data = {
//                 text: entityText,
//                 authorID: userID,
//                 createdAt: timestamp,
//             };
//             entityRef
//                 .add(data)
//                 .then(_doc => {
//                     setEntityText('')
//                     Keyboard.dismiss()
//                 })
//                 .catch((error) => {
//                     alert(error)
//                 });
//         }
//     }

//     const renderEntity = ({item, index}) => {
//         return (
//             <View style={styles.entityContainer}>
//                 <Text style={styles.entityText}>
//                     {index}. {item.text}
//                 </Text>
//             </View>
//         )
//     }

//     return (
//         <View style={styles.container}>
//             <View style={styles.formContainer}>
//                 <TextInput
//                     style={styles.input}
//                     placeholder='Add new entity'
//                     placeholderTextColor="#aaaaaa"
//                     onChangeText={(text) => setEntityText(text)}
//                     value={entityText}
//                     underlineColorAndroid="transparent"
//                     autoCapitalize="none"
//                 />
//                 <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
//                     <Text style={styles.buttonText}>Add</Text>
//                 </TouchableOpacity>
//             </View>
//             { entities && (
//                 <View style={styles.listContainer}>
//                     <FlatList
//                         data={entities}
//                         renderItem={renderEntity}
//                         keyExtractor={(item) => item.id}
//                         removeClippedSubviews={true}
//                     />
//                 </View>
//             )}
//         </View>
//     )
// }

