import React, {useMemo} from 'react'
import { usePokemonList, useScroll } from "./hooks";
import List, {Pokemon} from '../../model/pokemon'
import './list.css'

type ChildProps = {
    key: string, 
    details: Pokemon
}

type Props = {
    children(props: ChildProps): JSX.Element
}

const PokeList = ({children}: Props) => {    
    const isEnd = useScroll()
    const list: List = usePokemonList(isEnd)
    
    return (
        <div className="container">
            {Object.values(list).map((pokemon: Pokemon) => 
                children({
                    key: pokemon.name,
                    details: pokemon
                })
            )}
        </div>
    )
}

export default PokeList