import React from 'react'
import { usePokemonList, useScroll } from "../lib/hooks";
import Pokemon from '../model/pokemon'


import './poke-list.css'

interface ChildProps {key: string, details: Pokemon}
interface Props {
    children(props: ChildProps): JSX.Element
}

const PokeList = ({children}: Props) => {
    
    const isEnd = useScroll()
    const list = usePokemonList(isEnd)

    return (
        <div className="container">
            {list.map((pokemon: Pokemon) => 
                children({
                    key: pokemon.name,
                    details: pokemon
                })
            )}
        </div>
    )
}

export default PokeList