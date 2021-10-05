import React from 'react';
import'../../App.css';
import NewArrivalCard from '../Card/NewArrivalCard';
import Card from '../Card/Cards'

function Home(){
    return (
        <>  
            {/*New Arrivals*/}
            <NewArrivalCard/>
            <Card/>

        </>
    )
}

export default Home;