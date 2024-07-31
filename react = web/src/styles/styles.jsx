import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: 'white',
    },
    button: {
        backgroundColor: '#5b42f3',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    input: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        color: 'white',
    },
    card: {
        width: '90%',
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#180a22',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
    },
    header: {
        backgroundColor: '#5b42f3',
        padding: 15,
        width: '100%',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        color: 'white',
    },
});

export default styles;
