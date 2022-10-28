import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#FAF7F0",
        flex: 1,
        margin: 7,
        borderBottomLeftRadius: 55,
        borderTopLeftRadius: 55,
        borderBottomRightRadius: 7,
        borderTopRightRadius:7,
        borderColor: '#B2B2B2',
        borderWidth: 1
        
    },
    card_container: {
        flexDirection: 'row',
        alignItems:'center',
        
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        resizeMode:'contain',
        margin:2
    },
    title: {
        fontSize: 25,
        color: 'black',
        marginLeft: 10
    }

})