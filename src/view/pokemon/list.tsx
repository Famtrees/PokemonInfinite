import React, {useMemo} from 'react'
import { usePokemonList, useScroll } from "./hooks";
import List, {Pokemon} from '../../model/pokemon'
import './list.css'

interface ChildProps {
    key: string, 
    details: Pokemon
}

interface Props {
    children(props: ChildProps): JSX.Element
}

const PokeList = ({children}: Props) => {    
    const isEnd = useScroll()
    const list: List = usePokemonList(isEnd)
    
    return useMemo(() =>
        <div className="container">
            {Object.values(list).map((pokemon: Pokemon) => 
                children({
                    key: pokemon.name,
                    details: pokemon
                })
            )}
        </div>
    , [Object.values(list).length])
}

export default PokeList