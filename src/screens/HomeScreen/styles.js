import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // container: {
    //     flex: 1,
    //     alignItems: 'center'
    // },
    // formContainer: {
    //     flexDirection: 'row',
    //     height: 80,
    //     marginTop: 40,
    //     marginBottom: 20,
    //     flex: 1,
    //     paddingTop: 10,
    //     paddingBottom: 10,
    //     paddingLeft: 30,
    //     paddingRight: 30,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    // input: {
    //     height: 48,
    //     borderRadius: 5,
    //     overflow: 'hidden',
    //     backgroundColor: 'white',
    //     paddingLeft: 16,
    //     flex: 1,
    //     marginRight: 5
    // },
    // button: {
    //     height: 47,
    //     borderRadius: 5,
    //     backgroundColor: '#788eec',
    //     width: 80,
    //     alignItems: "center",
    //     justifyContent: 'center'
    // },
    // buttonText: {
    //     color: 'white',
    //     fontSize: 16
    // },
    // listContainer: {
    //     marginTop: 20,
    //     padding: 20,
    // },
    // entityContainer: {
    //     marginTop: 16,
    //     borderBottomColor: '#cccccc',
    //     borderBottomWidth: 1,
    //     paddingBottom: 16
    // },
    // entityText: {
    //     fontSize: 20,
    //     color: '#333333'
    // }
    container: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 16,
        color: 'black',
    },
    header: {
        fontWeight: 'bold',
        fontSize: 16,
        alignContent: 'center',
        color: 'black',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
    },
    headerbox: {
        width: '80%',
        height: 200,
        margin: 30,
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'papayawhip',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    favbox: {
        width: '80%',
        height: 100,
        padding: 20,
        backgroundColor: 'pink',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'scroll',
    },
    cols: {
        margin: 10,
    },
    sectionbox: {
        width: '80%',
        // height: 100,
        backgroundColor: 'powderblue',
        margin: 10,
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },

})
