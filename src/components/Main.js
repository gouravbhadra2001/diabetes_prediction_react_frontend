import React from 'react'
import {
    Route,
    Routes
} from "react-router-dom";


import Home from './Home'
import Prediction from './Prediction'
import Gallery from './Gallery';
import Reviews from './Reviews';
import About from './About';
import Registration from './Registration';
import Login from './Login';

const Main = ({data}) => {
    return (

        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/prediction" element={<Prediction data = {data} />} />
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/reviews' element={<Reviews/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/registration' element = {<Registration/>}/>
                <Route path='/signin' element = {<Login/>}/>
            </Routes>

        </main>


    )
}

export default Main
