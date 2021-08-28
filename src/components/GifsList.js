import { useState, useEffect } from "react";
import axios from 'axios';
import Gifs from "./gifs";

const GifsList = () => {
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        axios
            .get('https://api.giphy.com/v1/gifs/search?api_key=5RC9BRH88oW9wljD8azTzWG6mamn5x32&q=success&limit=1&offset=0&rating=r&lang=en')
            .then((response) => {
                console.log(setGifs(response.data.data))
                return response
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])


    return (
        <div>

            <Gifs
                images={gifs[0].images.original.url} />

            <Gifs />
        </div>
    )
}

export default GifsList;