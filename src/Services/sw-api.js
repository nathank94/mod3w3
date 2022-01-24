import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


const SwApi = () => {
    const [starShips, setStarShips] = useState([])
    const fetchShip = async () => {

        try {
            const response = await axios.get('https://swapi.dev/api/starships/')
            setStarShips(response.data.results)
            console.log(starShips)

        } catch (error) {
            console.error(error)

        }
    }
    useEffect(() => { fetchShip() }, []);
    startShips.map((ship, index) =>
        //img.map( img + 'ship[i]')
        //Testing images
        //const imgURL = [https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg?w=1024]

        return (
        <div className='Main-id'>
            {
                starShips.map((ship, index) => {
                    return (
                        <div className='Card' key={ship?.name}>
                            <h3>{ship.name}</h3>
                            <h4>{ship.model}</h4>
                                //<img src={imgURL[index]} />
                            <h5>{ship.manufacturer}</h5>
                        </div>
                    )
                })
            }
        </div>
    );
}    

export default SwApi;
