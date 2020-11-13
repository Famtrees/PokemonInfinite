import React from 'react'
import PokeDetail from './detail'
import PokeList from './list'

const Pokemon = () => {
    return (
        <PokeList>
            {props =>  <PokeDetail isTypes={false} {...props}/>}
        </PokeList>
    )
}

export default Pokemon