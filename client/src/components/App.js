import React, { useState, useEffect} from 'react';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000', // Replace with the actual base URL of your server
  });

const App = () => {

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axiosInstance.get('/pokemon/ditto');
                console.log(response);
            } catch (error) {
                console.error('Error fetching characters', error)
            }
        }

        fetchCharacters();
    }, [])

    return (
        <div>
            <h1>Hello World! This is a test</h1>
        </div>
    )
}

export default App;