import React, {Component} from "react"

class Pokemon extends Component {
    render() {
        const {pokemon} = this.props
        return (
            <div >
                <h3>{pokemon.name}</h3> 
                <p>{pokemon.type}</p>
                <p>{pokemon.averageWeight.value}</p>
                <p>{pokemon.averageWeight.measurementUnit}</p>
                <img src={pokemon.image} alt={pokemon.name}></img>
            </div>
        )
    }
}

export default Pokemon 
