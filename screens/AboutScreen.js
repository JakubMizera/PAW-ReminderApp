
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>O Aplikacji</Text>
            <Text style={styles.description}>Aplikacja użytkowa przypominająca o wydarzeniu stworzona w technologii react native</Text>
            <Text style={styles.author}>Autorzy:</Text>
            <Text style={styles.authorName}>Jakub Mizera i Jakub Łypik</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 18,
        marginBottom: 10,
    },
    author: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    authorName: {
        fontSize: 20,
        marginBottom: 10,
    }
});

export default AboutScreen;
