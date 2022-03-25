import React from "react"
import { useState, useEffect } from "react"
import { Spinner } from "react-bootstrap"
import Joke from "./Joke"

const Home = () => {
    const [jokes, setJokes] = useState([]);
    useEffect(() => {
        try {
            fetch("https://api.chucknorris.io/jokes/random") /*<== Galite importuoti betką. */
                .then(response => response.json())
                .then(data => setJokes(data)
                )
        } catch (a) {
            console.log()
        }
    }, []) 

    return (
        <div className="container mt-5">
            <div className="row mt-5">
                {(jokes.length) ? jokes.map(e =>
                    <Joke
                        key={e.id}
                        name={'Chuck Norris'}
                        joke={e.value}
                        origin={e.icon_url}
                    />) :
                    (
                        <Spinner animation="border" role='status'>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    )
                }
            </div>
        </div>
    )
}
export default Home