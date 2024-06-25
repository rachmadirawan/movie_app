import React from 'react'
import { Button, Text, View } from 'react-native'

const MovieDetail = ({ navigation }: any) : any => {
    const fetchData = (): void => {

        const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDc4MWEzZTUzMzNlNTk0OGZkM2UwYzQ1YjQ0MTQ2OSIsIm5iZiI6MTcxOTMxODY3OS43NDM2MjMsInN1YiI6IjY2NzQzNmNkZTI5ZjA2N2FkNThmMWY0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L2Bzo86A3rKCTIABjfhoWunLFrSwQtCFqFKFoS-dvVY'

        const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'

        const options = {
            method : 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
        }

        fetch(url, options)
        .then( async (response) => await response.json())
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            console.error(err)
        })
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <Text>Movie Detail Page</Text>
            <Button 
                title='Fetch Data' 
                onPress={() => { fetchData()}} 
            />
        </View>
    )
}



export default MovieDetail