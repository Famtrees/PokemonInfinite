import React, {useMemo} from 'react'
import {Pokemon} from '../../model/pokemon'
import {usePokemon, useTimeout} from './hooks'

import './detail.css'
import './type-colors.css'

type Props = {
    details: Pokemon
    showTypes: boolean
}

const PokeDetail = ({details, showTypes}: Props) => {
    const pokemon = usePokemon(details)
    // const isFront = useTimeout()
        
    return useMemo(() => pokemon.createdAt ? (
        <div className="detail">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites?.[0]} alt={pokemon.name}/>
            { showTypes && (
                <div className="types">
                    {pokemon.types?.map(type => 
                        <p key={type} className={`type-name ${type}`}>{type}</p>
                    )}
                </div>            
            )}
        </div>
     ): null, [showTypes, pokemon.createdAt])
}

export default PokeDetail