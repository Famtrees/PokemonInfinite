import {useState, useEffect, useLayoutEffect} from 'react'
import Pokemon, {cleanData} from '../model/pokemon'

const defNext = 'https://pokeapi.co/api/v2/pokemon?limit=25&offset=0'

export const usePokemonList = (shouldFetch: boolean) => {
    const [list, setList] = useState<Pokemon[]>([])
    const [next, setNext] = useState<string>(defNext)

    const fetchPokemon = async () => {        
        console.log("FETCHING");
        
        try {
            const res = await fetch(next)
            const data = await res.json()
            setList(l => [...l, ...data.results])
            setNext(data.next)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(function initialFetch(){ 
        if(shouldFetch)
            fetchPokemon() 
    }, [shouldFetch])
    
    return list
}

export const useScroll = () => {
    const [isEnd, setEnd] = useState<boolean>(true)
    useLayoutEffect(function scrolling(){
        window.addEventListener('scroll', function(){
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight
            const scrolled = winScroll / height
            
            if(!isEnd && scrolled === 1) {
                setEnd(true)
            } else if(isEnd && scrolled < 1) {
                setEnd(false)
            }

        })
        return window.removeEventListener('scroll', function(){console.log("REMOVED")})
    }, [isEnd])

    return isEnd
}

export const usePokemon = (details: Pokemon) => {
    const [pokemon, setPokemon] = useState<Pokemon>(details)
    const fetchPokemon = async () => {
        try {        
            const res = await fetch(pokemon.url)
            const data = await res.json()
            const clean = cleanData(data, pokemon)
            setPokemon(clean)
        } catch (error) {
            console.log(error)            
        }
    }
    useEffect(function getPokemon(){fetchPokemon()}, [])

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
