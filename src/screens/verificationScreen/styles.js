import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: '100%'
    },
    header: {
        flex: 0.3,
        backgroundColor: '#000',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
    },
    headerLogo: {
        width: '10%',

    },
    footer: {
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: '#fff',
        fontSize: 25,
        backgroundColor: 'blue'
    },
    userContainer: {
        borderWidth: 3,
        borderColor: '#FF9838',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        borderRadius: 50
    }
})

export default styles;