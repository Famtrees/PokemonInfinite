import React, {useMemo} from 'react'
import {Pokemon} from '../../model/pokemon'
import {usePokemon, useTimeout} from './hooks'

import './detail.css'
import './type-colors.css'

type Props = {
    details: Pokemon
    isTypes: boolean
}

const PokeDetail = ({details, isTypes}: Props) => {
    const pokemon = usePokemon(details)
    const isFront = useTimeout()
    
    console.log(isTypes);
    
    return useMemo(() => pokemon.createdAt ? (
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
     ): null, [isFront, isTypes, pokemon.createdAt])
}

export default PokeDetail