import React from 'react'
import Pokemon from '../model/pokemon'
import {usePokemon, useTimeout} from '../lib/hooks'

import './poke-detail.css'
import './type-colors.css'

type Props = {
    details: Pokemon
    isTypes: boolean
}

const PokeDetail = ({details, isTypes}: Props) => {
    const pokemon = usePokemon(details)
    const isFront = useTimeout()

    return (
        <div className="detail">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites?.[isFront ? 0: 1]} alt={pokemon.name}/>
            { isTypes && (
                <div className="types">
                    {pokemon.types?.map(type => 
                        <p key={type} className={`type-name ${type}`}>{type}</p>
                    )}
                </div>            
            )}
        </div>
    )
}

export default PokeDetail