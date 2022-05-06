import React, { Component } from "react"
import data from './data'
import Pokemon from './Pokemon';
import './App.css';

class Pokedex extends Component {
    render() {
        return (
            <section className="container">
                {data.map((item) => {
                    return <Pokemon pokemon={item} key={item.id} />})}
            </section> 
        )
    }
}

export default Pokedex 