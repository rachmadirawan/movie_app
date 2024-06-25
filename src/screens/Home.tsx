import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Home = ({ navigation }: any) : JSX.Element => {
    return (
        <View style={styles.container}>
            <Text style={styles.marginBottom20}>Movie Page</Text>
            <Button 
                title='Pergi ke MovieDetail'
                onPress={() => navigation.navigate("MovieDetail")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    marginBottom20 : {
        marginBottom: 20,
    },
}
)

export default Home