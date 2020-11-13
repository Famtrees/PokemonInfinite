import React from 'react'
import {useSelector} from 'react-redux'
import PokeDetail from './detail'
import PokeList from './list'
import {RootState} from '../../redux/store'


const Pokemon = () => {
    const showTypes = useSelector((state: RootState)=>state.show.showTypes) 
       
    return (
        <PokeList>
            {props =>  <PokeDetail showTypes={showTypes} {...props}/>}
        </PokeList>
    )
}

export default Pokemon