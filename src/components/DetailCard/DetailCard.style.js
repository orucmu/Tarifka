import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    title_container: {
        margin: 7
    },
    border: {
        borderTopWidth: 1,
        borderColor: '#B2B2B2',
        marginBottom: -15
    },
    title: {
        color: '#A62349',
        fontSize: 30,
        fontWeight: 'bold'
    },
    area: {
        color: '#A62349',
        fontSize: 22,
        fontWeight: 'bold',
    },
    image: {
        height: 350,
    },
    instruction: {
        margin: 5,
        color: 'black',
        fontSize: 16
    },
    button: {
        backgroundColor: 'red',
        margin: 5,
        alignItems: 'center',
        marginHorizontal: 20,
        borderRadius: 7
    },
    button_title: {
        color: 'white',
        fontSize: 18,
        padding: 8,
        fontWeight: 'bold'
    }
})