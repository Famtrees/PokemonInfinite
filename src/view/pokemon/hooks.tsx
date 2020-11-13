import {useState, useEffect, useLayoutEffect} from 'react'
import throttle from 'lodash.throttle'
import List, {ListRes, Pokemon, cleanData} from '../../model/pokemon'


const defNext = 'https://pokeapi.co/api/v2/pokemon?limit=25&offset=0'
const throttleFetch = throttle(cb => cb(), 400, {leading: true, trailing: false})

export const usePokemonList = (shouldFetch: boolean) => {
    const [list, setList] = useState<List>({})
    const [next, setNext] = useState<string>(defNext)
    const [isFetching, setFetching] = useState<boolean>()

    const fetchPokemon = async () => {
        if(Object.keys(list).length > 150 || isFetching) return
        try {
            setFetching(true)
            const res = await fetch(next)
            const data: ListRes = await res.json()
            const newPokemon: List = data.results.reduce((acc: List, p: Pokemon)=>{
                acc[p.name] = p
                return acc
            }, {})            
            setList(l => ({...l, ...newPokemon}))
            setNext(data.next)
        } catch (error) {
            setFetching(false)
            console.log(error);
        } finally {
            setFetching(false)
        }
    }

    useEffect(function initialFetch(){
        throttleFetch(fetchPokemon)
    }, [shouldFetch])
    
    return list
}

export const useScroll = () => {
    const [isEnd, setEnd] = useState<boolean>(true)

    function onScroll(){
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight
        const scrolled = winScroll / height
        
        if(!isEnd && scrolled > 0.75) {
            setEnd(true)
        } else if(isEnd && scrolled < 1) {
            setEnd(false)
        }

    }        

    useLayoutEffect(function scrolling(){        
        window.addEventListener('scroll', onScroll)
        return window.removeEventListener('scroll', function(){console.log("REMOVED")})
    }, [isEnd])
    
    return isEnd
}

export const usePokemon = (details: Pokemon) => {
    const [isFetched, setFetched] = useState<boolean>()    
    const [pokemon, setPokemon] = useState<Pokemon>(details)
    const fetchPokemon = async () => {
        if(isFetched) return
        try {        
            const res = await fetch(pokemon.url)
            const data = await res.json()
            const clean = cleanData(data, pokemon)
            setPokemon(clean)
        } catch (error) {
            console.log(error)            
        }
    }
   
    useEffect(function getPokemon(){
        fetchPokemon()
    }, [])

    return pokemon
}

export const useTimeout = () => {
    const [bool, setBool] = useState<boolean>(true)
    useEffect(()=>{
        const timeout = setTimeout(()=>setBool(!bool), Math.random()*3000)
        return () => clearTimeout(timeout)
    }, [bool])
    return bool
}
