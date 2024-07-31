import { StyleSheet } from 'react-native';

const adminStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#180a22',
    },
    title: {
        fontSize: 30,
        color: '#5b42f3',
        marginBottom: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#5b42f3',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        color: 'white',
    },
    card: {
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
});

export default adminStyles;
     